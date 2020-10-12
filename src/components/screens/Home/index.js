import './style.css';
import React from 'react';
import { Form } from 'react-final-form';
import StudentForm from './StudentForm'

class Home extends  React.Component{


onSubmit () {
        console.log('Submitting form')
}
    
validate (values) {
         if (values && values.firstName && values.firstName.length < 3) {
            console.log('El nombre debe ser mayor a 3 caracter')
        }
}
    
    
render () {
     return (
        <div className ="Home">
            <h1>Formulario</h1>
        <Form 
            onSubmit={this.onSubmit}
            validate={this.validate}
            render={StudentForm}
             />
        </div>
        )
    }
}
   
/*
function Home () {
    return (
        <div className="Home">
          <h1>Alumno</h1>
             <header className="App-header">
            
            
          </header>
        </div>
    )
    }
*/
export default Home