import logo from './logo.svg';
import './App.css';
import React from 'react';
import picture from './web.png';
import picture1 from './background.jpg';
class App extends React.Component {
  state = {
    Person : {
    fullName: 'Warda Ghanmi',
    bio : 'Ayant une Maitrise en Gestion Economique Et Sociale en 2000',
    profession : 'web Developer',
    digit : 0,
  },
  show : true
}
 componentDidMount =() => {
   setInterval(() => {
     this.setState(prevState =>({
       digit : prevState.digit + 1,
     }));
   }, 1000);
 }
  render () {
    return <div  className="App"  style={{ 
      backgroundImage: `url(${picture1})` 
    }}>
      <h5>counter : {this.state.Person.digit}</h5>
          <button style={{fontSize:"70px",}} onClick={()=> this.setState({show:!this.state.show})}>click </button>
        {this.state.show ? (<header>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img style ={{paddingTop :"150px"}} src ={picture} width = '500px' height="250px" alt="logo1" />
        <h1 style ={{paddingTop:"50px",fontSize:"70px",color:"chocolate",fontStyle:"oblique"}}>{this.state.Person.fullName}</h1>
         <h4 style ={{fontSize:"50px",color:"chocolate",fontStyle:"oblique"}}>{this.state.Person.bio}</h4>
        </a>
        <h2>{this.state.Person.imgSrc}</h2>
        <h3 style ={{paddingTop:"20px" ,color:"blue",fontSize:"65px",fontStyle:"oblique"}}>{this.state.Person.profession}</h3>
      </header>) : null}
    </div>
}
}

export default App;
