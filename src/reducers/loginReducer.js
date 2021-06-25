/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import { LOGIN_USER } from '../actions/types'
import axios from "axios";
import { DOMAIN } from '../config/constants';

let data = {
    user_info: "",
}
function loginReducer(state = data, {type, payload}){
    switch(type){
        case LOGIN_USER:

            const user_info = {
                user_id: "",
                token: "",
                username: ""
            }
            const username = payload.user.username;
            const password = payload.user.password;

    const login = async() =>{
        await axios.post(`${DOMAIN}/api/auth/signin`,{username, password})
        .then(res =>{
            console.log(res.data)
            user_info.user_id = res.data.id;
            user_info.username = res.data.username;
            user_info.token = res.data.token;

            sessionStorage.setItem('user_id',res.data.id)
            sessionStorage.setItem('username',res.data.username)
            console.log(sessionStorage.getItem('user_id'));
        })
        .catch(err =>{
            //alert('User Not Found!',err); 
            window.location.reload('/');
            console.log(err)
        })
    }
    login();
    return {
        ...state,
        user_info: user_info
    }

            default:
            return state
    }
}

export default loginReducer;