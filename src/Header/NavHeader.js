import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useState,useEffect } from 'react';

export default function NavHeader(){
    const data=useSelector(state=>state.productData.profile);
    const [activeState,setActiveState]=useState("home")
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange=()=> {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    const isMobile = width <= 600;
    return (
        <div>
         <div className={`topnav ${isMobile?'responsive' : ''}`} id="myTopnav">
         <img className="navbar-brand" src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/91a0a46d6bc6eb375d23" style={{height:59,width:150, float: 'left'}}/>
         <Link to="/home" onClick={()=>setActiveState("home")} className={`${activeState==='home'? 'active': ''}`}>Home</Link>
         <Link to="/home/catalog" onClick={()=>setActiveState("catalog")} className={`${activeState==='catalog' ? 'active':''}`}>CataLog</Link>
        {isMobile && <>
            <Link onClick={()=>setActiveState("profile")} className={`${activeState==='profile'? 'active': ''}`} to="/home/profile">{data.firstName}</Link>
            <Link onClick={()=>setActiveState("logout")} className={`${activeState==='logout'? 'active': ''}`} to="/login">LogOut</Link>
         </>}
        <a href="javascript:void(0);" class="icon">
        <i class="fa fa-bars"></i>
        </a>
        </div>
        <div className="dropdown profile-container">
                    <button className="dropbtn">
                    {data?.firstName?.split("")[0]}
                    </button>
                    <div className="dropdown-content">
                        <button className="dropdown-item" type="button">
                            <Link to="/home/profile">{data.firstName}</Link>
                        </button>
                        <button className="dropdown-item" type="button">
                           <Link to="/login">LogOut</Link>
                        </button>
                    </div>
        </div>
        </div>
    );
}
