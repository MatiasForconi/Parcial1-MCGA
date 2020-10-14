import './style.css';
import React from 'react';
import { Redirect } from 'react-router-dom'



class Home extends  React.Component{
constructor(props) {
    super(props);
    this.state = {
        name: '',
        age: '',
        redirect: false 
    }
}


setRedirect = () => {
    this.setState ({
        redirect: true
    })
}

//Funcion para que me redireccione a la ruta counters
renderRedirect = () => { 
    if (this.state.redirect) { 
      return <Redirect to = '/counters' /> 
    } 
}

onSave () {
        console.log('Informacion guardada')
}
    
validate (values) {
        if (values && values.name && values.name.length < 3) {
      console.log('El nombre debe ser mayor a 3 caracter')

    }
}



render () {
    return (
        <div className="Home">
        <h1>Alumno</h1>
           <header className="App-header">
           <form className="Form">
           <div>
                 <label>Nombre</label>
                 <input type={Text} className="name" placeholder= "nombre"></input>
               </div>
               <div>
                 <label>Año</label>
                 <input type={Text}  className="age" placeholder= "año"></input>
               </div>
               <div>
               <button className="save" onClick={this.validate} onClick={this.onSave}>Guardar informacion</button>
               </div>
               <button className="add" onClick={this.setRedirect}>Agregar contador</button>
        </form>
        </header>
        </div>
            );
            
        }
    
    } 

export default Home