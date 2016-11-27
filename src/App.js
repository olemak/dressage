import React, { Component } from 'react';

import './App.css';

import dressurProgrammer from './assets/programs/programs.js'

import DressageMenu from './components/DressageMenu/DressageMenu.js'
import DressageField from './components/DressageField/DressageField.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      stepCount: 0,
      currentStep: {},
      nextStep: {},
      size: "small",
      program: dressurProgrammer.LC1,
      error: false
    }
    this.receiveTouch = this.receiveTouch.bind(this)
  }

  componentWillMount(){
    this.setState({
      currentStep: this.getStep(this.state.stepCount),
      nextStep: this.getStep(this.state.stepCount+1),
      error: false    
    })
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.stepCount !== this.state.stepCount){
      this.setState({
        currentStep: this.state.nextStep,
        nextStep: this.nextStep()
        }) 
    }
  }

  getStep = stepCount => this.state.program.program[stepCount]
  nextStep = () => this.getStep(this.state.stepCount+1)

  changeProgram = action => {
    console.log("Change Program, Action");
  }

receiveTouch = point => {
  console.log("Touched: ", point);
  if (point === this.state.nextStep.punkt){
    this.setState({stepCount: this.state.stepCount +1})
  }
}

stepForward = step => {
  let nextStep = this.state.step + 1
  this.setState({step: nextStep})
}



  render = () => {
    return (
      <div className="Dressage">
        <DressageMenu message={(this.state.error ? "Gå til " + this.state.nextStep.punkt : this.state.currentStep.instruks)} art={this.state.currentStep.art}/>
        <DressageField size={this.state.size} receiveTouch={this.receiveTouch}/>
      </div>
    )
  }
}

export default App;
