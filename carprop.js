import React from 'react';
import ReactDOM from 'react-dom/client';

//function Car(props){
//  return(<h1>My car is {props.color} in color of {props.brand} brand</h1>)
//}
class Car extends React.Component{
    render(){
        return(<h1>My car is {this.props.color} in color of {this.props.brand} brand</h1>)
    }
}
export default Car;