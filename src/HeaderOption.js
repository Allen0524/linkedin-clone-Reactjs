import React from 'react';
import './HeaderOption.css';
import {Avatar} from '@material-ui/core';

// 解構賦值 從陣列或物件中取值
function HeaderOption({avatar, Icon, title}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            {/* material UI  有提供Avatar製作，src為圖片位置 */}
            {avatar && <Avatar className="headerOption_icon" src={avatar} />}
            {/* <Icon className="headerOption_icon" /> */}
            <h3 className="headerOption_title">{title}</h3>
        </div>
    )
}

export default HeaderOption
