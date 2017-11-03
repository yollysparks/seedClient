import React, {Component} from "react"
import auth from "../authorization/auth";


class UserForm extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            user: {name: "",password: ""}
    };
  }
  
  handleSubmit= (evt)=>{
      evt.preventDefault();
      window.alert(JSON.stringify(this.state.user));
      const user = this.state.user.name;
      const pass = this.state.user.password;
      auth.createuser(user, pass, (err, loggedIn) => {
        if (err) {
          return this.setState({ err: err.errorMessage });
        }
        this.setState({ err: "" });
        this.props.history.push("/");
      });
  }
  handleInput=(event)=>{
      const target = event.target;
      const prop = target.id;
      var value =target.value;
      var user= this.state.user;
      user[prop]= value;
      this.setState({
          user: user
      });
    }
       render() {
         return(
          <div>
          <form onSubmit={this.handleSubmit}  >   
              <input id= "name" type="text" value={this.state.user.name}   
              placeholder="name" onChange={this.handleInput}/>
              <br/>
              <input id= "password" type="text" value={this.state.user.password}   
              placeholder="password" onChange={this.handleInput}/>
              <br/>
              <button>Submit</button>
              </form>
              </div>
         );
     }

  }

export default UserForm;
