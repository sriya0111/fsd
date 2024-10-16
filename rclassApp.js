import React,{Component} from 'react';

class HelloWorld extends React.Component{
  render(){
    const cont=['Africa','America','Asia'];
    const hcont=Array.from(cont,c => `Hello${c}!`);
    const msg=hcont.join(' ');
    return(
      <div title="outer div" >
        <h1>{msg}</h1>
      </div>
    );
  }
}
class App extends HelloWorld{
  render(){
    const ele=<HelloWorld/>;
    return(ele);
  }
}
export default App;
