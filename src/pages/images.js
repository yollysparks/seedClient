import React, { Component } from 'react';

class Images extends Component{
  constructor(){
    super();
    this.state={
      imageurl:[],
    };
  }
componentDidMount(){
  fetch('http://localhost:8084/SeedPush/api/adress/all')
  .then(adress =>{
    return adress.json();
  }).then(data =>{
    let imageurl = data.adress.map((pic) =>{
      return(
        <div key={pic.adress}>
          <img src={pic.imageurl}/>
        </div>
      )
    })
    this.setState({imageurl:imageurl});
    console.log("state", this.state.imageurl);
  })
}
render(){
  return(
    <div className="container2">
     <div className="container1">
     </div>
     </div>
  )
}
}
export default Images;