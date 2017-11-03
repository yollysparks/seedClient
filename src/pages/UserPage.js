import React, { Component } from 'react'
import userData from "../facades/userFacade";
import { Link } from "react-router-dom";

class UserPage extends Component {

    constructor(){
      super();
      this.state = {data: "", err:""}
    }

    componentWillMount() {
      /*
      This will fetch data each time you navigate to this route
      If only required once, add "logic" to determine when data should be "refetched"
      */
      userData.getData((e,data)=>{
        if(e){
          return this.setState({err:e.err})
        }
        this.setState({err:"",data});
      });
    }
    render() {
      return (
        <div>
          <h2>Users</h2>
          <p>This message is fetched from the server if you are properly logged in</p>
          <li><Link to="/userpageform">search city</Link></li>
          <li><Link to="/images">images</Link></li>
          <div className="msgFromServer">
            {this.state.data}  
          </div>
          { this.state.err && ( 
            <div className="alert alert-danger errmsg-left" role="alert"> 
              {this.state.err}
            </div>
          )}
         
        </div>
      )
    }

  }

export default UserPage;