import React, { Component } from 'react'
import axios from 'axios'
import NotFound from '../404';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { DOMAIN } from '../../config/constants';

class EditNews extends Component {
    constructor(props){
        super(props);

        this.state={
            id:props.match.params.id,
            title:'',
            news:'',
            published:'',
            author:'',
            loading:false
        }
    }
    showToast = ()=>{
        toast.success('🦄 Edited successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }
    componentDidMount(){
        axios.get(`${DOMAIN}/api/news/${this.state.id}`)
            .then(res=>{
                console.log(res.data)
                this.setState({
                    title:res.data.title,
                    news:res.data.news,
                    published:res.data.published,
                    author:res.data.author
                })
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
        const updateNews = async()=>{
            await axios.put(`${DOMAIN}/api/news/${this.state.id}`,{title,news,published,author})
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
        updateNews();
        setTimeout(()=>{  
            this.props.history.push('/dashboard')
        },1000)
    }
    render() {
        const button = this.state.loading === true
        ?
        <button className="spinner"></button>
        :
        <button onClick={this.Submit} type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Update
        </button>
        return (
            <React.Fragment>
                {sessionStorage.getItem('user_id') ?
                <div class="min-h-screen flex items-center justify-center py-12 px-6 sm:px-6 lg:px-8">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                            Edit Title
                        </label>
                        <input name="title" onChange={this.onHandleInputChange} value={this.state.title} class="shadow appearance-none border text-xs rounded w-full py-2 px-3 mr-12  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Edit Title" />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="news">
                            Edit News
                        </label>
                        <textarea name="news" onChange={this.onHandleInputChange} value={this.state.news} class="shadow appearance-none border rounded text-xs w-full py-2 px-3 mr-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="news" type="text" placeholder="Edit News" />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="news">
                            Edit Published
                        </label>
                        <input name="published" onChange={this.onHandleInputChange} value={this.state.published} class="shadow appearance-none border rounded text-xs w-full py-2 px-3 mr-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="published" type="text" placeholder="Edit date of news" />
                    </div>
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="news">
                            Edit Author
                        </label>
                        <input name="author" onChange={this.onHandleInputChange} value={this.state.author} class="shadow appearance-none border rounded w-full text-xs py-2 px-3 mr-12 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="author" type="text" placeholder="Edit author name" />
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
export default EditNews;