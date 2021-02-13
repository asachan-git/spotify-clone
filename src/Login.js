import React from 'react'
import "./Login.css"
import {loginUrl} from "./spotify.js"

function Login() {
    return (
        <div className="login">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F56%2FSpotify_logo_horizontal_black.jpg&f=1&nofb=1" alt="" />
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
        
    )
}

export default Login
