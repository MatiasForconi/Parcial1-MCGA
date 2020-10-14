import './style.css';
import React from 'react';

class ListCounters extends React.Component {

    constructor(props) {
      super(props)
      this.state = { users: [] }
    }
  
    componentDidMount() {
      fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => this.setState({ users: data.results }))
    }
  
    renderUsers() {
      const users = this.state.users
      console.log(users)
      return users.map(user => (
        <li>
          <h2>{user.name} {user.name}</h2>

        </li>
      ))
    }
  
    render() {
      return (
        <div className="counterList">
          <h1>Lista de contadores</h1>
          <ul>
            {this.renderUsers()}
          </ul>
        </div>
      )
    }
  
  }
export default ListCounters