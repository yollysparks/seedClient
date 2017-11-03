import React, { Component } from 'react'
import { Link } from "react-router-dom";
import img from './summerHouse.jpg'

class HouseAds extends Component{
    myFunciton(x){
         return x + 20;
    }
    render(){
  
        return(
            
            <div className = "container" > 
           
           <div className = "row">
           <div className = "col-sm-6">
           <img className = "img-responsive" src={require('./safarihome.jpg')} alt="summer house" width="460" height="345"/>        
           </div>
           <div className = "col-sm-6">
           <img className = "img-responsive" src={require('./sultanpalace.jpg')} alt="summer house" width="460" height="345"/> 
           </div>
           </div>
           
           <div className = "row">
            <div className = "col-sm-6">
            <span><b> 5 Bedrooms, 5.5 Bathrooms/Hot Tub /Wifi/ free parking space All Amenities</b></span>
            <p>Rated  &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p> **Ongoing specials are reflected in the quoted rates. Contact owner for last minute specials. Offer pertains to remaining nights only. PLEASE DO NOT SEND A "BOOK IT NOW" REQUEST PRIOR TO CONTACTING OWNER. **(special reflects rental rates only. Does not include taxes and fees)
   
   </p>
            </div>
            <div className = "col-sm-6">
            <span><b> 5 Bedrooms, 5.5 Bathrooms/Hot Tub /Wifi/All Amenities</b></span>
            <p>Rated &#9733;&#9733;&#9733;&#9733;&#9733;</p>

            <p> located in a history city mombasa kenya.</p>
            </div>
            </div>
           <div className = "row">
           <div className = "col-sm-6">
           <img className = "img-responsive" src={require('./Takaungu-Reach.jpg')} alt="summer house" width="460" height="345"/>        
           </div>
           <div className = "col-sm-6">
           <img className = "img-responsive" src={require('./cowrie-shells.jpg')} alt="summer house" width="460" height="345"/> 
           </div>
           </div>
           
           <div className = "row">
            <div className = "col-sm-6">
            <span><b> 3 Bedrooms, 5.5 Bathrooms/Hot Tub /Wifi/swimming pool/ample parking space</b></span>
            <p>Rated &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p> **Ongoing specials are reflected in the quoted rates. Contact owner for last minute specials. Offer pertains to remaining nights only. PLEASE DO NOT SEND A "BOOK IT NOW" REQUEST PRIOR TO CONTACTING OWNER. **(special reflects rental rates only. Does not include taxes and fees)
   
   </p>
            </div>
            <div className = "col-sm-6">
            <span><b> 4 Bedrooms, 5.5 Bathrooms/Hot Tub /Wifi/swimming pool</b></span>
            <p>Rated &#9733;&#9733;&#9733;&#9733;&#9733;&#9733;</p>
            <p> 500 meters from the beach</p>
            </div>
           </div>


   <div>
   <span> {this.myFunciton(
       this.props.number
   )}</span>
   </div>
           </div>
        
        )
    }
    
}


export default HouseAds;