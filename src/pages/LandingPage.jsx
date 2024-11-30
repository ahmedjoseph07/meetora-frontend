import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";
const LandingPage = () => {
    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader'><h2>Meetora</h2></div>
                <div className='navList'>
                    <p>Join as a guest</p>
                    <p>Register</p>
                    <div role='button'>Login</div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span className='connectText'>Connect</span> with your loved ones</h1>
                    <p>Best solution for chats, Audio and Video calls..</p>
                    <div role='button' className='linkBtnDiv'><Link to="/auth" className='linkBtn'>Get Started</Link></div>
                </div>
                <div>
                    <img src="/mobile.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
