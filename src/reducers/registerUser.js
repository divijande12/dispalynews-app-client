import axios from 'axios'
import { DOMAIN } from '../config/constants';
let data = null;

export const registerUser = async(username,email,password,roles) =>{
    await axios.post(`${DOMAIN}/api/auth/signup`,{username,email,password,roles})
    .then(res=>{
        console.log(res)
        data = res
    })
    .catch(err=>{
        console.log(err)
    })
    return data;
}
