import React, {useState, useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase';
import { selectUser } from './features/userSlice';
import {useSelector} from 'react-redux';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            pgotoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon  />
                    <form action="">
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
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
            <FlipMove>
                {posts.map( ({id, data:{name, description, message, photoUrl}}) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
