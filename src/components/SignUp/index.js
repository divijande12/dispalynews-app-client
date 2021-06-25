import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { registerUser } from '../../reducers/registerUser'

export default function SignUp() {
    const[username, setUsername] = useState(null)
    const[email, setEmail] = useState(null)
    const[password, setPassword] = useState(null)
    const roles = ['user','user']
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {addToast} = useToasts()

    const handleInputChange = (e) => {
        const target = e.target
        const name = target.name
        console.log(target.value)
        if(name === 'username'){
            setUsername(target.value)
        }
        if(name === 'password'){
            setPassword(target.value)
        }
        if(name === 'email'){
            setEmail(target.value)
        }

    }

    const submitData = async()=>{
        console.log(username,email,password,roles)
        try{
            const data = await registerUser(username,email,password,roles)
            
            if(data.status === 200){
                addToast('Saved Succesfully', {appearance:'success', autoDismiss: true})
                setTimeout(()=>{
                    window.location.replace('/login')
                },1000)
            }
        }
        catch(e){
            console.log(e)
            addToast('Something went Wrong', {appearance:'error', autoDismiss:true})
        }
    }

    return (
        
        
        <div>
            <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md w-full space-y-8">
                    <div>
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-purple-600.svg" alt="Workflow"/>
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-red-700">
                            Register Here

                        </h2>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit(submitData)}>
                        <input type="hidden" name="remember" value="true"/>
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label class="sr-only">Username</label>
                            <input name="username" {...register('username',{ required:true })} onChangeCapture={handleInputChange} type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"/>
                            <p class="text-red-400 p-2"> {errors.username && "Username is required"}</p>
                        </div>
                        <div>
                            <label class="sr-only">Email</label>
                            <input name="email" {...register('email',{ required:true })} onChangeCapture={handleInputChange} type="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"/>
                            <p class="text-red-400 p-2"> {errors.email && "Email is required"}</p>
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" onChangeCapture={handleInputChange} type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                            <p class="text-red-400 p-2"> {errors.password && "Password is required"}</p>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="mb-2 w-full py-4 bg-red-800 hover:bg-red-500 rounded text-sm font-bold text-gray-50 transition duration-200">Sign Up</button>
                        <span class="text-gray-400 text-xs">
                            <span>Already have an account?</span>
                            <Link class="text-green-600 hover:underline" to='/login'>Sign In</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
            
        </div>
    
    )
}
