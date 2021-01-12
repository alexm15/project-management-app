import Image from 'next/image'

const TopArea = () => (
    <div className="topArea">
        <span className="clock">12:37</span>
        <div className="login">
            <h2 className="login-greeting">Welcome back Alexander!</h2>
            <Image src="/images/person-unsplash.jpg" alt="Profile picture" className="login-profilePicture" width={50} height={50}/>
            <a href="#" className="login-button button--primary globalState-isHidden">Login</a>
        </div>
    </div>
);
  
export default TopArea;