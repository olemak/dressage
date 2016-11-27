import React, { Component } from 'react';
import './FieldPoint.css';

class FieldPoint extends Component {
  constructor(){
    super()
    this.state = {
    }
  }


  touch = () => {
    this.props.receiveTouch(this.props.name)
  }




  render() {
    return (
      <div className={"FieldPoint FieldPoint__"+this.props.name} onMouseEnter={this.touch}>
        {this.props.name}
      </div>
    )
  }
}

export default FieldPoint;
