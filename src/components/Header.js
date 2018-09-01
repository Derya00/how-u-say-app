import React, { Component } from 'react'

 const context = {
     title : 'HowUsay',
     subTitles: ['Challenge is Fun...', 'Logic is the key to learning...', 'Just try and enjoy....']
   };


export const Header = (props) => {
    return (
        <div>
            <h1>{context.title}</h1>
            <p>{context.subTitles[props.init]}</p> 
      </div>
    )
 }