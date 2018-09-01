import React, { Component } from 'react'
import { Button } from './Button'

export const Excercise = (props) => {
   return <p> Example sentence and description</p>;
}

// create answers for each topic 
const answers = [];
// let answer;
export default class Level1 extends Component {
	constructor(props) {
		super(props);
		if (props.challenges && props.challenges['excercises'] && props.challenges['excercises'].length > 0){
			const excercises = props.challenges['excercises'];
			this.state = {
				hasNext: excercises.length > 1,
				excInx: 0,
				topicInx: props.topicInx,
				current: excercises[0],
				excercises: excercises
			};			
		} else {
			this.state = {
				hasNext: false
			};
		}
		this.nextChallenge = this.nextChallenge.bind(this);
        
	};

	nextChallenge(target){
			let answer = {
				excInx: this.state.excInx,
				isCorrect: true,
				value: this.state.inputVal
			};
			answers.push(answer);
		if (this.state.hasNext) {
			this.state.excInx++;
			const next = this.state.excercises[this.state.excInx];
			const hasNext = this.state.excInx < this.state.excercises.length - 1;
			
			this.setState({ 
				hasNext: hasNext, 
				excInx: this.state.excInx, 
				current: next,
				inputVal: ''	
			});
			
		} else {
			this.props.changeTopic({
				topicInx: target.state.topicInx,
				answers: answers
			});
		}
	}
	
	processAnswer(value) {
		console.log(this.state);
		this.setState({ inputVal: value } );
		console.log(this.state);
	}

	render() {
		return (
		<div>
		 {
            this.state.current?
            <div>
                <p> { this.state.current.challenge } </p>
                <p> { this.state.current.guide } </p>
				<p> { this.state.current.desc } </p>
				
                 <input type='text' value={ this.state.inputVal } onChange={ (e) =>  this.processAnswer(e.target.value) } />
                <Button name='next' onClick={ () => this.nextChallenge(this) } /> 
            </div>
			: 
			''
		} 
		</div>
		);
	};
}