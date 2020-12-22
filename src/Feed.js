import React, {useState} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {

    const [posts, setPosts] = useState([])

    const sendPost = e => {
        e.preventDefault();

        
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon  />
                    <form action="">
                        <input type="text"/>
                        <button onClick={sendPost} type="submit">送出</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title='照片' color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title='影片' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title='活動' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='撰寫文章' color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            {posts.map( (post) => (
                <Post/>
            ))}
            <Post name='Allen Li' description='Test' message='yayayaya' />

        </div>
    )
}

export default Feed
