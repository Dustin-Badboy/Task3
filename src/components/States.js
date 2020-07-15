import React,{ Component } from 'react'
var count=0
export default class Welcome extends Component{
	
	constructor(props){
			super(props);
			this.state={
				i:"Lokesh"
			};
		}

	clickMe=()=>{
	
		this.setState(
		{
		i:"Dustin"					
		}
		);
	}
		
	render(){

		return (
			<div>
			<h1>Here we are using states</h1>
			<h2>You clicked button {this.state.i} times</h2>
			<button onClick={()=> this.clickMe() }> Click  Me ..!</button>
			</div>			
			)
	}
}