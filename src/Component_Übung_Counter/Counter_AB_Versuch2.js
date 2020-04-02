import React, { Component } from 'react';

class Counter2 extends Component {
    state = {
        count: 0
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }
    handleReset = () => {
        this.setState({ count: 0 });
    }
    render() {
        return (
            <div>
                <button onclick={this.handleIncrement} className="Increment">+1</button>
                <button onclick={this.handleDecrement} className="Decrement">-1</button>
                <button onclick={this.handleReset} className="Reset">RESET</button>
                <input className="Anzeige">{this.state.count}</input>
            </div >
        )
    }
}

export default Counter2;


//ES6 class syntax to write Components
//-----------------------------------------
// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }