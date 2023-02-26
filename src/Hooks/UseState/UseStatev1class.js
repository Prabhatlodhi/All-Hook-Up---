import React, { Component } from 'react'

export default class UseStatev1class extends Component {
    constructor(){
        super();
        //Declaration of variable
        // this.state = {name: 'Initial Name'}

        //also valid way of declaration
        this.state = {};
        this.state.name = 'Initial Name'
    }

     //function for changing the name or you can say calling the state
     handleClick = ()=> {
        this.setState({name: 'Name I want to display after click'})
    }

    
  render() {
    return (
      <div className='ClassBasedCompo'>
        <h1>Class Based Component Starts below</h1>
        {/* by-default value is displayed inside curly braces below*/}
        <h1>{this.state.name}</h1>
        {/* event handler below*/} 
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    )
  }
}
