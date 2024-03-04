import axios from 'axios';
 axios.defaults.baseURL = 'http://hrmback.com/api/';
// axios.defaults.baseURL = 'https://api.nit-bd.com/public/api/';



 axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' ;
 axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";

axios.interceptors.request.use(
    function(config) {



    if(config.url.includes("public") || config.url.includes("login") || config.url.includes("logout")){

     

      config.headers.Authorization = ''



    }else{

      
      const token = JSON.parse(localStorage.getItem("user")).user.token


        if(token){
         
        config.headers.Authorization = `Bearer ${token}`

        }

      

    }
        

      return config;
    },
    function(error) {
     alert(error.response)
      return Promise.reject(error);
    }
  );