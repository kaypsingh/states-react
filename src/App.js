import React from 'react';
import './App.css';

class App extends React.Component{

constructor(props){
  super(props);
  this.state = {
    name: ""
  }


}

changeFunction = (e) => {
  console.log("hello");
  console.log(e.target.value);

 if ((e.target.value) > 100) {
  this.setState({
    name: "greater than 100"
  });
}

else if((e.target.value) == 100){
  this.setState({
    name: "century"
  });
}

else{
  this.setState({
    name: "less than 100"
  });
} 

 
}

render(){

  return(

<div>
   <h1> {this.state.name}</h1>

<input type="text" placeholder="enter value" onChange={this.changeFunction}></input>
   

</div>

  );
}



}

export default App;
