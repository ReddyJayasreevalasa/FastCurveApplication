import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './Components/Main'
import Login from './Components/Login';
import FirstPage from './Components/FirstPage';

function App() {
 
  return (
    <div>
      <Switch>
      <Route path="/login">
        <FirstPage />
      </Route>
        <Route path="/home">
        <Main />
        </Route>
        <Redirect to="/login" />
      </Switch>
    </div>
  );
}

export default App;