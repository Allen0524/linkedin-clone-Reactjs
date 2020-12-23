import { Avatar } from '@material-ui/core';
import React, {forwardRef} from 'react';
import './Post.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import InputOption from './InputOption';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='讚' color='gray'/>
                <InputOption Icon={ChatOutlinedIcon} title='回應' color='gray'/>
                <InputOption Icon={ShareOutlinedIcon} title='分享' color='gray'/>
                <InputOption Icon={SendOutlinedIcon} title='傳送' color='gray'/>
            </div>
        </div>
    )
})

export default Post
