import './App.css';
import React from 'react';
class App extends React.Component {
  render(){
  return (
    <div className="app">
      <h1 style={{textAlign:'center'}}>Welcome</h1>
      <h3 style={{display:'inline',margin:'20px'}}>Name</h3>
      <input type="text" placeholder="Enter your name"></input>
    </div>
  );
}
}                                                                                                                                                            
export default App;