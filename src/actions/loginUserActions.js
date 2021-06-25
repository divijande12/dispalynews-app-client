import { LOGIN_USER } from './types';


export function loginUser(data){

    return{
        type: LOGIN_USER,
        payload:{
            user: data
        }
    }

}


