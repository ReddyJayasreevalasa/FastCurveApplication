import { useEffect } from "react";
import { Link, Redirect, Route, Switch,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCatalog } from "../Reducer/productDataSlice"
import CatalogSection from "./Catalog/CatalogSection";
import NavHeader from "../Header/NavHeader";
import ProfileForm from "./ProfileForm";
import HomePage from "./HomePage";

const Main=()=>{
    const dispath = useDispatch();
    const history=useHistory()
    const location=history.location.pathname.split("/")
    
    useEffect(()=>{
        console.log("location",location)
    },[location,history])
    useEffect(() => {
      fetch("https://api.npoint.io/0000de8d1cab7a126cb9")
        .then((res) => res.json())
        .then((res) => {
          dispath(setCatalog(res.data));
        });
    }, []);
return (
    <>
    <NavHeader />
    <div className="tab-content" id="myTabContent">
      <Switch>
      <Route path="/home/profile" >
            <ProfileForm />
        </Route>
      <Route path="/home/catalog" >
            <CatalogSection />
        </Route>
        <Route path="/home" >
            <HomePage />
        </Route>
     
        <Redirect to="/home" /> 
      </Switch>
    </div>
  </>  
)
}
export default Main;