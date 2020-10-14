import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/counters">Counters</Link></li>
      </ul>
      <Switch>
        <Route exact path ="/home"><Home /></Route>
        <Route exact path ="/counters"><Counters /></Route>
        <Route component={Home}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
