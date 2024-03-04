import axios from "axios";

export default {
 get: async function (url) {
      
  await  axios.get(url).then((response)=>{
        return response
     }).catch((error)=>{
         console.log(error);  
     })

      
  }
}


