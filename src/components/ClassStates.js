import React, { Component } from'react';

export default class Welcome extends Component{
    

    constructor(){
        super();
            this.state={
                i:0
                
        }
    }
    clickme=()=>{
        this.setState({
            i:this.state.i+1
        
        })
    }
    
    render(){
        return(
            <div className="background">
                <h1 >Hello you clicked button for</h1>
                <h2>{this.state.i} times</h2>
                <button onClick={()=> this.clickme() }>Click Me..!</button>
            </div>
        )
    }
}