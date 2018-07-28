import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Level1 from './components/Level1'
import { Button } from './components/Button'
import { Header } from './components/Header'

let currentState;
const mainStates = [
  {
    stateId: 0,
    desc: 'Click start when you are ready',
    buttonText: 'start',

  },
  {
    stateId: 1,
    desc: 'Read carefully before moving on to the challange',
    buttonText: 'ready?'
  },
  {
    stateId: 2,
    desc: 'challange',
    buttonText: 'next'
  }
]

class Language extends Component {
	constructor(props) {
    super(props);
    this.state = {
      currentContent: mainStates[0],
      contents: mainStates
    }
    this.getContent = this.getContent.bind(this);
  };

  getContent(id){
   const next = id < this.state.contents.length - 1 ? id + 1 : 0;
   this.state.currentContent = this.state.contents[next];
   this.setState(this.state.currentContent);
  }

  render() {
    return (
        <div>
          <Header init={this.state.currentContent.stateId}/>
          <p>{this.state.currentContent.desc}</p>         
          {
            this.state.currentContent.stateId > 0 ?
              <Level1 stateId={this.state.currentContent.stateId}/> 
              : 
              <Button name='start' onClick={() => this.getContent(this.state.currentContent.stateId)} />
          }
        </div>
    ) 
  }
}
 
ReactDOM.render(
  <Language />, document.getElementById('index')
);
