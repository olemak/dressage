import React, { Component } from 'react';
import './DressageField.css';

import FieldPoint from '../FieldPoint/FieldPoint.js'

class DressageField extends Component {
  constructor(){
    super()
    this.state = {
        small: ["A","F","B","M","C","K","E","H","D","X","G"],
        large: ["A","F", "S","H","C","P","B","R","M","K","V","E","L","D","X","I","G"]    
    }

  }

  render() {
    return (
      <div className={"DressageField DressageField__"+this.props.size}>      
        {this.state[this.props.size].map(point=><FieldPoint name={point} key={point} receiveTouch={this.props.receiveTouch} />)}
      </div>
    )
  }
}

DressageField.propTypes = {
  receiveTouch: React.PropTypes.func,
  size: React.PropTypes.string
}

export default DressageField;








