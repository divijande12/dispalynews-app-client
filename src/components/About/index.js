import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <div class="min-h-screen flex justify-center items-center">
                <div class="max-w-sm bg-red-900 border-3 shadow-2x1 opacity-75 border-gray-700 p-6 rounded-md tracking-wide shadow-lg">
                    <div id="header" class="flex items-center mb-4"> 
                        <img alt="avatar" class="w-20 rounded-full border-3 border-gray-700" src="https://i0.wp.com/www.qaiware.com/wp-content/uploads/2016/03/full-stack-developer-icon.png" />
                        <div id="header-text" class="leading-5 ml-6 sm">
                            <h4 id="name" class="text-xl font-bold text-gray-200">Divij Ande</h4>
                            <h5 id="job" class="font-semibold text-gray-200">Developer</h5>
                        </div>
                    </div>
                    <div id="quote">
                        <q class="italic text-gray-100">This is the display news app developed in React.js and Node.js with the help of MongoDB database.</q>
                    </div>
                    <div class="flex justify-evenly mt-5">
                        <a href="#responsive">
                            <img alt="icon" src="https://img.icons8.com/fluent/48/000000/github.png"/>
                        </a>
                        <a href="#responsive">
                            <img alt="icon" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>   
                        </a>
                        <a href="#responsive">
                           <img alt="icon" src="https://img.icons8.com/color-glass/48/000000/instagram-new.png"/>
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
