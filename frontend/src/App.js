import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as CONST from "./const.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
 }
 

  componentDidMount(){
    const canvas = this.refs.starryNight
    // this.setState({ctx: canvas.getContext("2d")})
    
    
      this.renderStars( canvas.getContext("2d"), 3)

   
  }

  renderStar(ctx, x,y){
    ctx.fillStyle = "white"
    ctx.fillRect(x,y, 21, 21);
  }

  renderStars(ctx, number){
    ctx.clearRect(0, 0, CONST.WIDTH, CONST.HEIGHT);
      for (let i=0; i<number;i++){

        
          let x = Math.random() * CONST.POSITIONMAXX;
          let y = Math.random() * CONST.POSITIONMAXY;
          console.log(x);
          console.log(y);
          if(x< CONST.BUFFER ){
            x=CONST.BUFFER
          }
          if(y< CONST.BUFFER){
            y=CONST.BUFFER;
          }
          this.renderStar(ctx, x, y)
      }
  }





  render() {
    
    return (
      <div className="App">
        <div>Starry night</div>
        <div>
          <canvas ref="starryNight" width={CONST.WIDTH} height={CONST.HEIGHT} ></canvas>
        </div>
      </div>
    );
  }
}

export default App;
