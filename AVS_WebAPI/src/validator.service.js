require('dotenv').config();
const dalService = require("./dal.service");
const oracleService = require("./oracle.service");

async function validate(proofOfTask){
  try {
      const taskResult = await dalService.getIPfsTask(proofOfTask);
          const res = await axios.post("https://ai.privateai.com:8002/predict_diabetes_api",{
            "pregnancies": taskResult.input[0],
            "glucose": taskResult.input[1],
            "bloodpressure": taskResult.input[2],
            "skinthickness": taskResult.input[3],
            "insulin": taskResult.input[4],
            "bmi": taskResult.input[5],
            "dpf": taskResult.input[6],
            "age": taskResult.input[7]
        })
          console.log(res.data);
      let isApproved = true;
      if (taskResult.answer == res.data.answer) {
        isApproved = false;
      }
      return isApproved;
    } catch (err) {
      console.error(err?.message);
      return false;
    }
  }
  
  module.exports = {
    validate,
  }