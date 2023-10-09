// add the required functions for user here
import { axiosClient } from ".";

export const signUp=(user)=>{
    return axiosClient.post("/user/register",user).then((response)=>response.data)
}

