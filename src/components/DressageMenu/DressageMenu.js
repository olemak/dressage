import React, { Component } from 'react'

import './DressageMenu.css'

import menuIcon from '../../assets/icons/menu-hamburger.svg'

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="DressageMenu">
        <div className="DressageMenu__Message">
          <p>{this.props.art}</p>
          <p>{this.props.message}</p>
        </div>
        <div className="DressageMenu__Menu">
          <img src={menuIcon} className="DressageMenu__Menu__Icon" role="presentation" /> 
        </div>  
      </div>
    )
  }
}

export default App;
