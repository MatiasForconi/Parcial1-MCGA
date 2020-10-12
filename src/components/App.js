import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Form from './screens/Form';
import Counters from './screens/Counters';
import Home from './screens/Home'



class App extends React.Component {
  constructor(props) {
    super(props)
  }

render() {
  return (
    <BrowserRouter>
    <div className="App">
      <ul className="menu">
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/counters">Counters</Link></li>
      </ul>
      <Switch>
        <Route exact path ="/form"><Form /></Route>
        <Route exact path ="/home"><Home /></Route>
        <Route exact path ="/counters"><Counters /></Route>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
