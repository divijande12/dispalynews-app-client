import React, { Component } from 'react'
import {  withRouter } from 'react-router-dom'
import axios from 'axios'
import NotFound from '../404'
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { DOMAIN } from '../../config/constants';

class Add extends Component {

    state={
        title:'',
        news:'',
        published:'',
        author:'',
        loading:false
    }
    showToast = ()=>{
        toast.success('🦄 Added successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    onHandleInputChange =(e) =>{
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    Submit = (e) =>{
        e.preventDefault()
        this.setState({loading:true})
        const title = this.state.title;
        const news = this.state.news;
        const published = this.state.published;
        const author = this.state.author;
        this.showToast();

        const addNews = async() =>{
            await axios.post(`${DOMAIN}/api/news`,{title,news,published,author})
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        addNews();
        
        setTimeout(()=>{
            this.props.history.push('/dashboard')
        },2000)
    }
    render() {
        const button = this.state.loading === true
        ?
        <button className="spinner"></button>
        :
        <button onClick={this.Submit} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
         Add News
        </button>
        return (
            <React.Fragment>
                {sessionStorage.getItem('user_id') ?
                 <div class="min-h-screen flex items-center justify-center py-12 px-6 sm:px-6 lg:px-8">
                 <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                     <div class="mb-3">
                         <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                             Title
                         </label>
                         <input name="title" onChange={this.onHandleInputChange} class="shadow appearance-none border text-xs rounded w-full py-2 px-3 mr-12  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Add Title" />
                     </div>
                     <div class="mb-3">
                         <label class="block text-gray-700 text-sm font-bold mb-2" for="news">
                             News
                         </label>
                         <textarea name="news" onChange={this.onHandleInputChange} class="shadow appearance-none border rounded text-xs w-full py-2 px-3 mr-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="news" type="text" placeholder="Add News" />
                     </div>
                     <div class="mb-3">
                         <label class="block text-gray-700 text-sm font-bold mb-2" for="news">
                             Published
                         </label>
                         <input name="published" onChange={this.onHandleInputChange} class="shadow appearance-none border rounded text-xs w-full py-2 px-3 mr-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="published" type="text" placeholder="Add date of news" />
                     </div>
                     <div class="mb-3">
                         <label class="block text-gray-700 text-sm font-bold mb-2" for="news">
                             Author
                         </label>
                         <input name="author" onChange={this.onHandleInputChange} class="shadow appearance-none border rounded w-full text-xs py-2 px-3 mr-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="author" type="text" placeholder="Add author name" />
                     </div>
                     <div class="flex items-center justify-center">
                         {button}
                     </div>
                 </form>
                 <ToastContainer />
             </div>
                :
                <NotFound />
                }
               
            </React.Fragment>
        )
    }
}
export default withRouter(Add);