import React from 'react';
import ReactDOM from 'react-dom/client';
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {brand: "Ford"};
    }
    render() {
      return (
        <div>
          <h1>My Car is of {this.state.brand}</h1>
        </div>
      );
    }
  }
export default Car;