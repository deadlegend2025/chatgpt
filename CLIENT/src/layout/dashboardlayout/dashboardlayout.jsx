import './dashboardlayout.css';
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from 'react-router-dom';
import Chatlist from '../../components/chatlist/chatlist';

const Dashboardlayout = () => {

    const { userId, isLoaded } = useAuth();

    const navigate = useNavigate();
  
    useEffect(() => {
      if (isLoaded && !userId) {
        navigate("/sign-in");
      }
    }, [isLoaded, userId, navigate]);
  
    if (!isLoaded) return "Loading...";


  return (
    <div className='dashboardlayout'>
        <div className="dashboardLayout">
      <div className="menu"><Chatlist/></div>
      <div className="content">
        <Outlet />
      </div>
    </div>


    
    
    </div>
  );
};

export default Dashboardlayout;