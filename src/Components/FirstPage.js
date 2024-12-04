import { useEffect, useState } from 'react'
import './index.css'
import { Switch,Route,Redirect,useLocation } from 'react-router-dom'
import Login from './Login'
import LeftLogin from './LeftLogin'

 export default function FirstPage() {
    const location=useLocation()
    let pathName="/".concat(location.pathname.split("/")[1])
    return <div className='login-main-div'>
            <div className="main-logic-class">
                <LeftLogin />
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </div>
    </div>
 }