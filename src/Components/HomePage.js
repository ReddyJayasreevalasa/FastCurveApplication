import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { CiCircleInfo } from "react-icons/ci";

export default function HomePage(){
    return (
        <Switch>
            <Route>
            <div className="home-page">
                <strong className="home-name">Home</strong>
                <div className="content">
                    <p>Welcome to Umang mart.Please click on <Link to="/home/catalog">Catalog</Link> to start building your cart and buy awesome items.</p>
                    <div className="info"><CiCircleInfo />  We have best return policy of 14 days. Enjoy benefits!</div>
                </div>
            </div>
            </Route>
        </Switch>
    );
}