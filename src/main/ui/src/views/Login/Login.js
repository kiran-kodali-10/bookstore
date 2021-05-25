import React from 'react';

function Login(props) {

    return (
        <div>
            <label>
                Username
                <input type="text" placeholder="Enter your username" />
            </label>
            <label>
                Password
                <input type="password" placeholder="Enter your password" />
            </label>
        </div>
    )
}

export default Login