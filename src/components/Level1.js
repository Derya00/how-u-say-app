import React, { Component } from 'react'
import { Button } from './Button'
import Excercise from './Excercise'

// http://www.mocky.io/v2/5b5c0d843200007b0042626e
const jsonResponse = {
	"challanges": [{
			"sectionId": 1,
			"excercises": [{
					"challange": "This banana is yellow",
					"guide": "bu: this, muz: banana, sari: yellow",
					"answer": "Bu muz sari",
					"acceptable": ["Bu muz saridir"]
				},
				{
					"challange": "This apple is red",
					"guide": "bu: this, elma: apple , kirmizi: red",
					"answer": "Bu elma kirmizi",
					"acceptable": ["Bu elma kirmizidir"]
				}
			]
		},
		{
			"sectionId": 2,
			"excercises": [{
					"challange": "I swim every week",
					"guide": "yuz: swim (I present tense suffix: e-rim), hafta: week",
					"answer": "Her hafta yuzerim",
					"acceptable": ["Ben her hafta yuzerim"]
				},
				{
					"challange": "I run every night",
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
const section = jsonResponse.sections[0];

export default class Level1 extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.getChallanges = this.getChallanges.bind(this);
	};

	getChallanges(id){
		this.state.challangeList = jsonResponse.challanges.find(chalange => {
			return chalange.sectionId === id;
		});
		this.setState(this.state.challangeList);
	}
	render() {
		return (
		<div>
		<div>{section.from}</div>
		<div>{section.to}</div>
		<Button name='ready?' onClick={() => this.getChallanges(section.id)} /> 
		{
			!!this.state.challangeList ?
			<Excercise challanges={this.state.challangeList} />
			: 
			''
		}
		</div>
		);
	};
}