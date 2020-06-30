import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
      super(props)
   }



   



    render(){

      const goldenRatio = 1.618;
      let width = 1200;
      let height = width/goldenRatio
      
      var starQuantity = 10;
      
      //defining canvas 
      const canvas =  document.getElementById("starryNight");
      canvas.style.backgroundColor = "black";
      const ctx = canvas.getContext("2d");
      
      //window.innerWidth/Height sets the canvas element to full the intire size of the page.
      
      canvas.width = width;
      canvas.height = height;
      
      //styling stars
      var starGlow = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
      starGlow.addColorStop(0, "white");
      // starGlow.addColorStop(1, "gold");
      
      
     
      //ctx.fillRect(2000,100,3,3);
      


    return(
    <div className="App">
        
    <div>Starry night</div>
    <div>
    <canvas id="starryNight">

    </canvas>

    </div>

    </div>
    )
    
}
}


export default App;
