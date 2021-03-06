import { Avatar } from '@material-ui/core';
import React from 'react';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar_avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>誰關注你</p>
                    <p className="sidebar_statNumber">1,00</p>
                </div>
                <div className="sidebar_stat">
                    <p>我的貼文</p>
                    <p className="sidebar_statNumber">50</p>
                </div>
            </div>

            <div className="sidebar_botton">
                <p>最近</p>
                {recentItem('reactjs')}
                {recentItem('CSS')}
                {recentItem('軟體工程師')}
            </div>
        </div>
    )
}

export default Sidebar
