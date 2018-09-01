import React, { Component } from 'react'
import { Button } from './Button'
import Excercise from './Excercise'

// http://www.mocky.io/v2/5b5c0d843200007b0042626e
const jsonResponse = {
	"challenges": [{
			"sectionId": 1,
			"excercises": [{
					"challenge": "This banana is yellow",
					"guide": "bu: this, muz: banana, sari: yellow",
					"answer": "Bu muz sari",
					"acceptable": ["Bu muz saridir"]
				},
				{
					"challenge": "This apple is red",
					"guide": "bu: this, elma: apple , kirmizi: red",
					"answer": "Bu elma kirmizi",
					"acceptable": ["Bu elma kirmizidir"]
				}
			]
		},
		{
			"sectionId": 2,
			"excercises": [{
					"challenge": "I swim every week",
					"guide": "yuz: swim (I present tense suffix: e-rim), hafta: week",
					"answer": "Her hafta yuzerim",
					"acceptable": ["Ben her hafta yuzerim"]
				},
				{
					"challenge": "I run every night",
					"guide": "gece: night",
					"answer": "Her gece kosarim",
					"acceptable": ["Ben her gece kosarim"]
				}
			]
		}
	],
	"sections": [{
			"id": 1,
			"from": "Bu elma yesil",
			"to": "This apple is green",
			"desc": "Bu = This describes the subject, elma = apple is also subject to be later described by a color yesil = green. details: Although order and words almost match we should not expect an 'is'. A version of 'is' can be the used in Turkish for a strong emphasis, ie. Bu elma yesildir."
		},
		{
			"id": 2,
			"from": "Her sabah kosarim",
			"to": "I run every morning",
			"desc": "every = Her, morning = sabah, run = kos, a-rim: the sendence has a hidden I, which is the 'im' suffix after 'kos'. We can explicityly say 'Ben' for I to complete the sentence as 'Ben her sabah kosarim, only if we wanted to emphisize the I.'"
		}
	]
};
const topicMode = {
	"INTRO": "Introduction",
	"EXAMPLE": "Example",
	"TEST": "Test",
	'RESULT': "Result"
};

export default class Level1 extends Component {
	constructor(props) {
		super(props);
		const defaultTopicInx = 0;
		const defaultSection = jsonResponse.sections[defaultTopicInx];
		const challengeList = jsonResponse.challenges.find(challenge => {
			return challenge.sectionId === defaultSection.id;
	   });
	   
		this.state = {
			currentTopicInx: defaultTopicInx,
			mode: topicMode.EXAMPLE,
			topic: defaultSection,
			challengeList: challengeList,
			results: []
		};
	}

	getChallenges(){
		this.setState({
			mode: topicMode.TEST
		});
	}	

	handleChangeTopic(value) {
		console.log(value);
		const nextTopicInx = ++value.topicInx;
		if (nextTopicInx < jsonResponse.sections.length) {
			const nextTopic = jsonResponse.sections[nextTopicInx];
			const challengeList = jsonResponse.challenges.find(challenge => {
				return challenge.sectionId === nextTopic.id;
			});
			this.setState({
				currentTopicInx: nextTopicInx,
				topic: nextTopic,
				mode: topicMode.EXAMPLE,
				challengeList: challengeList
			});
		} else {
			this.setState({ mode: topicMode.RESULT });
		}
		
	}

	render() {
		return (
			<div> 
				{
				
				this.state.mode != topicMode.RESULT ?
				<div> 
					<div> { this.state.topic.from } </div>
					<div> { this.state.topic.to } </div> 
					{			
						this.state.mode === topicMode.EXAMPLE ?
						<Button name='ready?' onClick={ () => this.getChallenges() } /> 
						:		
						<Excercise challenges={ this.state.challengeList } topicInx={ this.state.currentTopicInx } changeTopic= { this.handleChangeTopic.bind(this) }/>
					}	
				</div>
				:
				<div>RESULT</div>
				
				}
			</div>

		);
	};
}