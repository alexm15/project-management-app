import React, { useState, useEffect } from 'react'
import Image from 'next/image'


export const TopArea = () => {
    const [time, setTime] = useState('');

    
    useEffect(() => {
        setTime(toTime(new Date()));
        const timer = setInterval(() => {
            setTime(toTime(new Date()));
        }, 1000 * 30);

        return () => clearInterval(timer);
    }, []);    

    const toTime = (date) => {
        let hour = date.getHours();
        hour = (hour < 10) ? '0' + hour : ''+hour;
        let min = date .getMinutes();
        min = (min < 10) ? '0' + min : min;
        return `${hour}:${min}`;
    }

    return (
        <div className="topArea">
        <span className="clock">{time}</span>
        <div className="login">
            <h2 className="login-greeting">Welcome back Alexander!</h2>
            <Image src="/images/person-unsplash.jpg" alt="Profile picture" className="login-profilePicture" width={50} height={50}/>
            <a href="#" className="login-button button--primary globalState-isHidden">Login</a>
        </div>
    </div>
    );
};


    