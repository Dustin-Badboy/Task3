import React from 'react';
import data from "../data/data.json";
import image from '../profile.webp';

export default function Resume(props){
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(data=>console.log(data))

        let info=data.profiles[props.location.data.id]
        console.log(info.basic)
        var lokesh;
        return(
            <div className="row justify-content-center">
                <div className="col-lg-4 m-2">
                <div className="card">
                        <div className="card-body">
                            <img src={image} style={{width:'15em'}} alt="profile icon" />
                            <h2>Name : {info.basic.name}</h2>
                            <h4>Email : {info.basic.email}</h4>
                            <h4>Mobile : {info.basic.phone}</h4>
                            <h3>Address : {info.basic.address}</h3>
                            <hr />  
                        
                            var lok = info.hobbies.map((lokesh)=>{
                                
                                <li>{lok}</li>
                            
                        }
                        )
                            
                            
            
                            
                        </div>

                    </div>

                </div>
                <div className="col-lg-7 m-2">
                <div className="card">
                        <div className="card-body">
                            <h2>Career Objective</h2>
                            <p>{info.career}</p>
                        </div>
                </div>
                </div>
            </div>
        )
    }
