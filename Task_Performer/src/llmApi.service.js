require('dotenv').config();
const axios = require("axios");

const initialPrompt = "You are an assistant who is experienced in the healthcare and biomedical domain with extensive medical knowledge and practical experience. Your name is OpenBioLLM, you are always willing to help answer the user's query with an explanation for biomedical domain. In your explanation, leverage your deep medical expertise such as relevant anatomical structures, physiological processes, diagnostic criteria, treatment guidelines, or other pertinent medical concepts. Use precise medical terminology while still aiming to make the explanation clear and accessible to a general audience. You must answer user's every question related to the medical domain by using your knowledge. "

  async function getLLMResponse(prompt){
    var res = null;
    try{
      res = await axios.post("https://ai.privateai.com:8002/predict_diabetes_api",{
        "pregnancies": prompt[0],
        "glucose": prompt[1],
        "bloodpressure": prompt[2],
        "skinthickness": prompt[3],
        "insulin": prompt[4],
        "bmi": prompt[5],
        "dpf": prompt[6],
        "age": prompt[7]
    })
      console.log(res.data);
      return res.data
    }catch(e){
      console.log(e);
      return 0;
    }
  }
  
  module.exports = {
    getLLMResponse,
  }