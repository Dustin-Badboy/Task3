import React,{ Component } from 'react'

export default class Welcome extends Component{
	render(){
		console.log(this.props);
		return (
			<div>
			<h1>my name is {this.props.name} & my college is {this.props.college}</h1>
			{this.props.children}
			</div>
			)
	}
}