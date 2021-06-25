/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from "react-router-dom"
import { DOMAIN } from '../../config/constants';

class PublicNews extends Component {
    constructor(props){
        super(props);

        this.state = {
            news:[],
            loading:false
        }
    }
    componentDidMount(){
        const getNews = async()=>{
            await axios.get(`${DOMAIN}/api/news/`)
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
                        </div>
                        </div>
                    ))} 
                    
                </div>
            </React.Fragment>
        )

    } 
}
export default withRouter(PublicNews);