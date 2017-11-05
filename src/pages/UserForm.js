import React, {Component} from "react"
import auth from "../authorization/auth";


class UserForm extends Component{
    constructor(props){
        super (props);
        this.state = {err: "", 
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
      const target = event.target.id;
      const prop = target.id;
      const value = event.target.value;
      let user= this.state.user;
      user[target]= value;
      this.setState({
          user
      });
    }
       render() {
         return(
          <div>
          <form onSubmit={this.handleSubmit}  >
          <h2> Please Sign Up </h2>   
              <input id= "name" type="text" value={this.state.user.name}   
              placeholder="name" onChange={this.handleInput}/>
              <br/>
              <input id= "password" type="text" value={this.state.user.password}   
              placeholder="password" onChange={this.handleInput}/>
              <br/>
              <button>Submit</button>
              </form>
              {this.state.err && (
                <div className="alert alert-danger errmsg" role="alert">
                  {this.state.err}
                </div>)}
              </div>
         );
     }

  }

export default UserForm;
