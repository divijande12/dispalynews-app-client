import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from "react-router-dom"
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { DOMAIN } from '../../config/constants';

class DisplayNews extends Component {
    constructor(props){
        super(props);

        this.state = {
            news:[],
            loading:false
        }
    }
    showToast = ()=>{
        toast.error('🦄 Deleted successfully!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
    componentDidMount(){
        const getNews = async()=>{
            await axios.get(`${DOMAIN}/api/news`)
            .then(res=>{
                console.log(res.data)
                this.setState({
                    news: res.data
                })
            })
            .catch(err =>{
                console.log(err)
            })
        }
        getNews();
        console.log(this.state)
    }
    Delete = (e) => {
        e.preventDefault()
        this.setState({loading:true});
        const id = e.target.id;
        // delete this news with given id from db asynchronously
        axios.delete(`${DOMAIN}/api/news/${id}`)
        .then(res=>{
            this.setState({loading:false});
        })
        .catch(err=>{
            this.setState({loading:false});
        });
        const newNews = this.state.news.filter(item=>item.id !==id);
        this.showToast();
        this.setState({news:newNews},()=>{
        });
    }
    render() {
        const news = this.state.news
        return (
            <React.Fragment>
                <div>
                    {news.map((item)=>(
                    <div class="px-10 my-12 py-6 rounded shadow-xl bg-red-200 w-3/4 mx-auto opacity-80">
                        <div class="flex justify-between items-center">
                            <div class="flex justify-center md:justify-end -mt-16">
                                <img class="w-20 h-20 object-cover rounded-full border-2 border-black-500" alt="Workflow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4v_3MGD67-0rGBgoO9YBuH7k0d50H8Y8hJA&usqp=CAU" />
                            </div>
                            <span class="font-medium text-gray-800">{item.published}</span>
                        </div>
                        <div class="mt-2">
                            <h2 class="text-2xl text-black-700 font-bold hover:text-gray-800">
                                {item.title}
                            </h2>
                            <p class="mt-2 text-gray-700">
                                {item.news}
                            </p>
                        </div>
                        <div class="flex justify-between items-center mt-4">
                            <p class="text-gray-900"> {item.author} </p>
                            <div class="flex justify-between items-center px-12 mx-12">
                                <Link to={`/edit/${item.id}`} class="text-blue-500 mx-12 px-5 hover:text-blue-900">Edit</Link>
                                <button id={item.id} onClick={this.Delete}class="text-red-500 hover:text-red-900">Delete</button>
                            </div>
                        </div>
                        </div>
                    ))} 
                    <ToastContainer />
                </div>
            </React.Fragment>
        )

    } 
}
export default withRouter(DisplayNews);