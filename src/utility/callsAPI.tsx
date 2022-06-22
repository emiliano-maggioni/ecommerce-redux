import axios from "axios";

export const instance = axios.create({
    baseURL: "https://exercise-app-reactjs-default-rtdb.europe-west1.firebasedatabase.app/",
});

instance.interceptors.request.use((config) => {
  config.headers!["Content-Type"] = "application/json"; 
     return config; 
});

instance.interceptors.response.use((res: any) =>{ 
  return {success:true,response:res?.data};
},   
(error: any) => {  
  return {success:false,response:error?.message};
}
);

 //FUNCTION TO DO GET API
export const getAPI = (path:string) => {

  return instance.get(path).then(async (val)=>{ 
    return val; 
  }).catch(  (err)=>{  
    return {success:false,response:"Error while retrieving data."};
  });

}
  
 //FUNCTION TO DO GET API
 export const postAPI = (path:string,payload:any) => {

  return instance.post(path,payload).then(async (val)=>{
    return val; 
  }).catch(  (err)=>{   
      return {success:false,response:"Error while retrieving data."};
  });

}

