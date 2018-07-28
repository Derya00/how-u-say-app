import React from 'react'

 const context = {
     title : 'How u say is a language learning app',
     subTitles: ['Click start when you are ready']
   };
{/* <h1>{title}</h1>
<h2>{subTitles[0]}</h2> */}
export const Header = (props) => {
    return (
        <div>
             <h1>{context.title}</h1>
             <p>{context.subTitles[props.init]}</p> 
        </div>                    
    )
}