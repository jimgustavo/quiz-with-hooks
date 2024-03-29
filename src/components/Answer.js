import React from 'react';
 export default function Answer(props) {

	let classes = ['answer'];
	if (props.selected){
	classes.push('selected');   
	}

	return (
	<button className={classes.join(' ')} value={props.letter} onClick={props.handleClick}>
           <span className="letter">{props.letter}</span>{props.answer}
	</button>	
	)
}
