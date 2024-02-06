import React, { useState } from 'react'

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const usernameHandler = (e) => {
        setUserName(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        // { username && password ? console.log(`username ${username} and password is ${password}`) : alert('Please fill the form the first') }
        console.log(`username is ${username} and password is ${password}`);
        clean();
    }
    const clean = () => {
        setPassword("");
        setUserName("");
    }
    return (
        // react mha sr yite ml so lo shin yin 
        // a myal tan onchange ko yay pay ya 
        // form oak ml so yin onSubmit so tae hr add pay ya tl
        //function yay lo shin yin arrow functin pl yay
        <div>
            <h2>Login Form</h2>
            <h5>{username}</h5>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="">User Name</label>
                <input type="text" value={username} onChange={usernameHandler} />
                <label htmlFor="">password</label>
                <input type="text" value={password} onChange={passwordHandler} />
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default Login