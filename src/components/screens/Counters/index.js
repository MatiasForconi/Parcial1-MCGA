import './style.css';
import React from 'react';


class Counters extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    count: 0
    }
}

upCount = (e) => {
    e.preventDefault();
    this.setState(function(prevState){
        return {
            count: prevState.count + 1
        }
    })
};

downCount = (e) => { 
    e.preventDefault();
    this.setState(function(prevState){
        if(prevState.count >= 1) {
        return {
            count: prevState.count - 1
        }
        }
    })
};

render() {
    return (
        <div className="App-counters">
            <h1 className="countlist">Lista de contadores</h1>
            <div className="counters">
            <button className="down" onClick={this.downCount}>-</button>
            <div className="count">{this.state.count}</div>
            <button className="up" onClick={this.upCount}>+</button>
            <button className="delete" onClick={this.delete}>Eliminar</button>
            </div>
        </div>
    )
 }
}

export default Counters