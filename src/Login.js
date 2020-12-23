import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { auth } from './firebase';
import './Login.css'
import {login} from './features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if(!name) {
            return alert("請輸入姓名");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic, 
                })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic
                    }))
                })
            }).catch(error => alert(error));
    };
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email:userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                }))
            }).catch(error=>alert(error));
    };
    return (
        <div className="login">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt=""/>
        
            <form action="">
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="姓名(必填)" type="text"/>
                <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} placeholder="個人照片(url)" type="text"/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" type="email"/>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="密碼" type="password"/>
                <button type="submit" onClick={loginToApp}>登入</button>
            </form>

            <p>剛加入 LinkedIn 嗎？<span className="login_register" onClick={register}>立即加入</span></p>
        </div>
    )
}

export default Login

