require('dotenv').config();
const axios = require("axios");

const initialPrompt = "You are an assistant who is experienced in the healthcare and biomedical domain with extensive medical knowledge and practical experience. Your name is OpenBioLLM, you are always willing to help answer the user's query with an explanation for biomedical domain. In your explanation, leverage your deep medical expertise such as relevant anatomical structures, physiological processes, diagnostic criteria, treatment guidelines, or other pertinent medical concepts. Use precise medical terminology while still aiming to make the explanation clear and accessible to a general audience. You must answer user's every question related to the medical domain by using your knowledge. "

  async function getLLMResponse(prompt){
    var res = null;
    try{
      res = await axios.post("https://ai.privateai.com:5000/v1/completions",{
        "model": "openbiollm-llama3-8b",
        "prompt": initialPrompt + "Medical Question: "+prompt+"? Medical Answer:",
        "temperature": 0.1
    })
      console.log(res.data.choices[0].text);
    }catch(e){
      console.log(e);
    }
    return res.data.choices[0].text
  }
  
  module.exports = {
    getLLMResponse,
  }