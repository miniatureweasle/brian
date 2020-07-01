import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
 }


  componentDidMount(){
    const canvas = this.refs.starryNight
    this.setState({ctx: canvas.getContext("2d")})
  }

  renderStar(ctx, x,y){
    ctx.fillStyle = "white"
    ctx.fillRect(x,y, 6, 6);
  }

  renderStars(ctx, number){
      for (let i=0; i<number;i++){
          let x = Math.random() * 1000
          let y = Math.random() * 1000
          this.renderStar(ctx, x, y)
      }
  }

  render() {
    if (this.state.ctx){
       this.renderStars(this.state.ctx, 12)
    }
    return (
      <div className="App">
        <div>Starry night</div>
        <div>
          <canvas ref="starryNight" width={300} height={300} ></canvas>
        </div>
      </div>
    );
  }
}

export default App;
