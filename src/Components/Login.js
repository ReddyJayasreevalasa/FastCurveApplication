import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setProfile } from "../Reducer/productDataSlice"

const Login=()=>{
    let history = useHistory();
    const [userName,setUserName]=useState("")
    const dispatch=useDispatch()
    const [userNameError,setUserNameError]=useState("")

    function handleClick() {
        if(!userName){
            setUserNameError("userName should not be Empty")
        }
        if(userName.trim()){
            console.log("userName",userName)
            dispatch(setProfile({firstName: userName}))
            history.push("/home");
        }
    
    }
    return (
       <div className="right-login">
        <img src="https://media.licdn.com/dms/image/v2/C4D0BAQE6x8kqpb1_kQ/company-logo_200_200/company-logo_200_200/0/1633612628217/fastcurveservices_logo?e=2147483647&v=beta&t=25vbByJkZwBWCZlO5bQnBsRUMviNg19RCE0MwuhTDUw"/>
            <div className="login-details">
            <p>userName:</p>
            <input onChange={(e)=>{
                setUserName(e.target.value)
                setUserNameError("")
            }} name="userName"/> <br/>
            {userNameError&& <small className="text-danger">{userNameError}</small>}
            <div className="login-button">
                <button type="button" className="btn btn-info" onClick={handleClick}>Login</button>
            </div>
            </div>
       </div>
    )
    }
export default Login;