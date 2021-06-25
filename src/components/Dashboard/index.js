/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import NotFound from '../404';
import DisplayNews from '../DisplayNews';

class Dashboard extends Component{
    render(){
        const dashboard = sessionStorage.getItem('user_id')
                            ? <DisplayNews />
                            : <NotFound />

        return(
            <React.Fragment>
                {dashboard}
            </React.Fragment>
        )
    }
}

export default Dashboard;