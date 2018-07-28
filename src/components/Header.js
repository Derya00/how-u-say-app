import React, { Component } from 'react'

 const context = {
     title : 'How u say is a language learning app',
     subTitles: ['Challenge is Fun...', 'Logic is the key to learning...', 'Just try and enjoy....']
   };

/*
export default class Header extends Component {
    constructor(props) {
        super(props);
        
		this.state = {
            title: context.title,
			subTitle: context.subTitles[props.init]
        };
        
    };
    
	render() {
	  return (
	  	<div>
			<h1>{this.state.title}</h1>
            <p>{this.state.subTitle}</p> 
	  	</div>
	  );
	};
}

*/

export const Header = (props) => {
    return (
        <div>
            <h1>{context.title}</h1>
            <p>{context.subTitles[props.init]}</p> 
      </div>
    )
 }