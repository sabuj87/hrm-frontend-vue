import axios from 'axios';
axios.defaults.baseURL = 'http://hrmback.com/api/';
// axios.defaults.baseURL = 'https://api.nit-bd.com/public/api/';
 axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080' ;
 axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "csrftoken";

