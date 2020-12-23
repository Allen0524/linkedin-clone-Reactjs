import React from 'react';
import './HeaderOption.css';
import {Avatar} from '@material-ui/core';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';

// 解構賦值 從陣列或物件中取值
function HeaderOption({avatar, Icon, title, onClick}) {
    const user = useSelector(selectUser);

    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            {/* material UI  有提供Avatar製作，src為圖片位置 */}
            {avatar && <Avatar className="headerOption_icon" src={user?.photoUrl}>
                 {user?.email[0]}
                </Avatar>}
            
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
