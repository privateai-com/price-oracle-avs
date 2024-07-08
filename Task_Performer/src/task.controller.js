"use strict";
const { Router } = require("express")
const CustomError = require("./utils/validateError");
const CustomResponse = require("./utils/validateResponse");
const llmApiService = require("./llmApi.service");
const dalService = require("./dal.service");

const router = Router()

router.post("/execute", async (req, res) => {
    console.log("Executing task");

    try {
        var taskDefinitionId = Number(req.body.taskDefinitionId) || 0;
        console.log(`taskDefinitionId: ${taskDefinitionId}`);
        
        const result = await llmApiService.getLLMResponse(req.body.prompt);
        const json = {
            taskDefinitionId :req.body.taskDefinitionId,
            prompt :req.body.prompt,
            result :result
        }
        console.log("json",json);
        const cid = await dalService.publishJSONToIpfs(json);
        await dalService.sendTask(cid, JSON.stringify(json), taskDefinitionId);
        return res.status(200).send(new CustomResponse({proofOfTask: cid, data: JSON.stringify(json), taskDefinitionId: taskDefinitionId}, "Task executed successfully"));
    } catch (error) {
        console.log(error)
        return res.status(500).send(new CustomError("Something went wrong", {}));
    }
})


module.exports = router
