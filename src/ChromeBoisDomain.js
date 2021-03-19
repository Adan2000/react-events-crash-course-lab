import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }
  //drawChromBoiAtCords takes in an event, 
  //we then use the clientX and Y to find the x,y cordinates 
  //we attach those two methods to the event.


  handleKeyDown = (event) => {
    if (event.key === 'a') {
      resize('+')
    } else if (event.key === 's') {
      resize('-')
    }
  }
  //here we are checking for either a or s 
  //if key was equal to a then we invoke resize and pass in +
  //if key was equal to s then we invoke resize and pass in -

  
  render() {
    return (
      <canvas 
        onMouseMove={this.handleMouseMove}
        onClick={toggleCycling}
        onKeyDown={this.handleKeyDown}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
//we add an event listener to canvas that listens to click (onClick)
//when that event is triggered it then triggers the "toggleCycling" method

//we add an event listener that listens to keys (onKeysDown)
//when triggered it triggers a function that will be INSIDE this component
//so we use (this.handleKeyDown), that function will do be inccharge of handling that
