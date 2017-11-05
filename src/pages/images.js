import React, { Component } from 'react';

class Images extends Component{
  constructor(){
    super();
    this.state={
      imageurl:[],
    };
  }
componentDidMount(){
  fetch('http://localhost:8084/SeedPush')
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
    <form action="http://localhost:8084/SeedPush" enctype="multipart/form-data" method="post">
    <label>Select File</label><input type= "file" name="file" /> <br/><br/>
    <button id="btn">Upload</button>
    </form>
     <div className="container1">
     </div>
     </div>
  )
}
}
export default Images;