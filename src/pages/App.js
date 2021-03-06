import React from "react"
import {Route, Switch } from "react-router-dom"
import Login from "./Login";
import Logout from "./Logout";
import About from "./About";
import UserPage from "./UserPage";
import AdminPage from "./AdminPage";
import TopMenu from "./TopMenu";
import HouseAds from "./HouseAds";
import userpageform from "./UserPageForm";
import userform from "./UserForm";
import images from"./images";

function App() {
  return (
    <div>
      <TopMenu /> 
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/userform" component={userform}/>
        <Route path="/about" component={About} />
        <Route path="/user" component={UserPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/houseads" render={(props) => (<HouseAds number={23} />)} />      
        <Route path="/userpageform" component={userpageform} />
        <Route path="/images" component={images}/>
        </Switch>
    </div>
  )
}
export default App;