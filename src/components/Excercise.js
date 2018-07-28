import React, { Component } from 'react'
import { Button } from './Button'

export const Excercise = (props) => {
   return <p> Example sentence and description</p>;
}


export default class Level1 extends Component {
	constructor(props) {
        super(props);

        const excercises = props.challanges['excercises'];
     
		this.state = {
            next: excercises[0],
            excercises: excercises
        };
        
	};

	getChange(id){
		console.log(this.state.challangeList);
    }
    
	render() {
		return (
		<div>
		{
            !!this.state.excercises ?
            <div>
                <p>{this.state.next.challange}</p>
                <p>{this.state.next.guide}</p>
                <input type="text" />
                <Button name='next'  /> 
            </div>
			: 
			'NO'
		}
		</div>
		);
	};
}

//onClick={() => this.getChallanges(section.id)} onChange={this.handleChange}