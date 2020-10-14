import './style.css';
import React from 'react';
//import { Field } from 'react-final-form';

//import { Form } from 'react-final-form';
//import StudentForm from './StudentForm'

/*class Home extends  React.Component{


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
}*/
   

function Home () {
    return (
<div className="Home">
<h1>Alumno</h1>
   <header className="App-header">
   <form className="Form">
   <div>
         <label>Nombre</label>
         <input type={Text} placeholder= "nombre"></input>
       </div>
       <div>
         <label>Año</label>
         <input type={Text} placeholder= "año"></input>
       </div>
       <div>
       <button className="save" type="submit">Guardar informacion</button>
       </div>
       <button className="add" type="submit">Agregar contador</button>
</form>
</header>
</div>
    )
    
}

export default Home