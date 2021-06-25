/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/loginUserActions';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


class Login extends Component{

    constructor(props){
        super(props);
        this.state = { 
            username:"",
            password:"",
            loading:false,
        }
    }

    showToast = ()=>{
        toast.success('🦄 Login success!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    onHandleInputChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]:value
        })
    }
    Login = (e) =>{
        e.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.setState({
            loading:true
        })
        const user = {
            username:username,
            password:password
        }
        this.props.loginUser(user)
        console.log(user);
    }
    componentDidUpdate(prevprops){
        if(this.props.data !== prevprops.data){
            this.update()
        }
    }
    update(){
        if(sessionStorage.getItem('user_id')){
            window.location.replace('/dashboard') 
        }
        else{
            this.setState({
                loading:true
            })
            setTimeout(() => {
                this.showToast();
                this.update()
            }, 1000);
        }
    }
    render() {
        const button = this.state.loading === true
                        ?
                        <button className="spinner"></button>
                        :
                        <button onClick={this.Login} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                         Sign in
                        </button>


        return(
            
            <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-purple-600.svg" alt="Workflow"/>
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-red-700">
                        Sign in to your account
                    </h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true"/>
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label class="sr-only">Username</label>
                            <input name="username" onChange={this.onHandleInputChange} type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"/>
                        </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input id="password" name="password" onChange={this.onHandleInputChange} type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                    </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                            <label for="remember_me" class="ml-2 block text-sm text-red-700">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <div>
                        {button}
                    </div>
                </form>
                <ToastContainer/>
            </div>
        </div>


        )
    }
}
const MapStatetoProps = (state) => ({
    data: state.data,
})
const MapDispatchtoProps = {
    loginUser: loginUser
}
export default connect(MapStatetoProps, MapDispatchtoProps) (Login);