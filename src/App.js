import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Hello from './Hello.js';
// import Wish from './Wish.js';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import States from  './components/States';
import ClassStates from './components/ClassStates.js';
import Hooks from './components/Hooks.js';
import data from './data/data.json';
import image from './profile.webp';
import { Route , Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Resume from './components/Resume.js';
function App() {
  return (
    <div className='App'>
        
    {/* h1>Hello Welcome</h1>
     <h2>This is lokesh</h2>
    <Home />
     <Hello />
     <Wish />
    // <Greeting name="lokesh" mail="lokeshgudla5680@gmail.com">
    //   <img src={logo} style={{width:"200px"}}/>
    //  </Greeting>
    // <Greeting name="dustin" mail="dustinbrave123@gmail.com"> <p>Hello Dustin</p>  </Greeting>
    // <h1>We are creating class components & pops </h1>
    // <Welcome name="lonely" college="RGUKT">
    // <p>Hello Lonely Dont trust anyone</p> 
    // </Welcome>
    // <Welcome name="lovely" college="RGUKTN">
    // <p>Hello lovely Dont love anyone</p>
    // </Welcome> 
    <ClassStates />
    <States />
    <Hooks /> 
    <Home /> */}
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={ Resume } />
    </BrowserRouter>
    
    </div>

    /// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    
    
    // </div> *\}
  );
}

let Home=()=> {
    let profile=data.profiles;
    console.log(profile);
  return (
    <div className="row justify-content-center">
        {
            profile.map((value,index)=>(
                <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
                    <div className="card">
                        <div className="card-body">
                            <img src={image} style={{width:'10em'}} alt="profile icon" />
                            <h2>{value.basic.name}</h2>
                            <h2>{value.basic.role}</h2>
                            <h2>{value.basic.phone}</h2>
                            <h2>{value.basic.email}</h2>

                            <Link to={{pathname:"/resume",data:{id:index}}} className="btn btn-primary" >Profile</Link>
                        </div>

                    </div>

                </div>
                ))
        }
    </div>
    );
}
 

export default App;

