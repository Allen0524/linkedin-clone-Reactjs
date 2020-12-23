import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import CommentIcon from '@material-ui/icons/Comment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch, useSelector} from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header(props) {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    };

    return (
        <div className="header">
            {/* Icon & Search */}
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" 
                alt=""/>
                
                <div className="header_search">
                    <SearchIcon/>
                    <input placeholder="搜尋" type="text"/>
                </div>
            </div>

            {/* Some social icons */}
            <div className="header_right">
                {/* 重複元素，新建component */}
                <HeaderOption Icon={HomeIcon} title="首頁" />
                <HeaderOption Icon={SupervisorAccountIcon} title="人脈" />
                <HeaderOption Icon={BusinessCenterIcon} title="職缺" />
                <HeaderOption Icon={CommentIcon} title="訊息" />
                <HeaderOption Icon={NotificationsIcon} title="通知" />
                <HeaderOption avatar={true} onClick={logoutOfApp} title="我"/>
            </div>
        </div>
    );
}

export default Header;

// 頭像
// https://inews.gtimg.com/newsapp_bt/0/9664898940/641