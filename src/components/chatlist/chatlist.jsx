import { Link } from "react-router-dom";
import './chatlist.css'

const Chatlist = () => {
  return (
    
    <div className='chatlist'> <span className="title">DASHBOARD</span>
    <Link to="/dashboard">Create a new Chat</Link>
    <Link to="/">Explore Echo AI</Link>
    <Link to="/">Contact</Link>
    <hr />
    <span className="title">RECENT CHATS</span>
    <div className="list">
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        <Link to="/">MY CHAT TITLE</Link>
        </div>
        <hr/>
        <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Echo AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
   
  );
};

export default Chatlist;