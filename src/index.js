import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Level1 from './components/testAPI/Level1'
import { Button } from './components/Button'
import { Header } from './components/Header'

let currentState;
const mainStates = [
  {
    stateId: 0,
    desc: 'initial',
    buttonText: 'start'
  },
  {
    stateId: 1,
    desc: 'example',
    buttonText: 'start'
  },
  {
    stateId: 1,
    desc: 'challange',
    buttonText: 'start'
  }
]

class Language extends Component {
	constructor(props) {
    super(props);
    if (!this.state) {
      this.state = mainStates[0];
    }
    console.log(mainStates[0]);
    this.getContent = this.getContent.bind(this);
  };

  getContent(inx){
    // this.currentState
   // this.nextState()

   return this.state;
  }

// <Button name='Start' />
  render() {
    return (
      <div>
        <Header init={this.state.stateId}/>
        <Level1 />
        <button onClick={() => this.getContent(this.state.stateId)}> {this.state.buttonText} </button>
      </div>
    ) 
  }
}
 
ReactDOM.render(
  <Language />, document.getElementById('index')
);
