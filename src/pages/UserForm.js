import React from "react"
class UserForm extends React.Component{
    constructor(props){
        super (props);
        this.state = {
            user: {name: "",email: "",password: ""}
    };
  }
  handleSubmit= (evt)=>{
      evt.preventDefault();
      window.alert(JSON.stringify(this.state.user));
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
              <input id= "email" type="text" value={this.state.user.email}   
              placeholder="email" onChange={this.handleInput}/>
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
