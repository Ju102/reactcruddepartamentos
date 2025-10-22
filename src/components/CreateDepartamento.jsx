import axios from 'axios';
import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Global from '../Global';

class CreateDepartamento extends Component {

    url = Global.urlDepartamentos;

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();
    x
    state = {
        status: false
    }

    insertDepartamento = (event) => {
        event.preventDefault();
        
        var request = "api/departamentos/";

        var id = parseInt(this.cajaId.current.value);
        var nombre = this.cajaNombre.current.value;
        var localidad = this.cajaLocalidad.current.value;

        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }

        axios.post(this.url + request, departamento).then(response => {
            console.log("Insertado");
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (
            <div className='m-3 p-3 rounded-3'>
                {
                    this.state.status &&
                    <Navigate to="/" />
                }
                <h2>Crear Departamento</h2>
                <form onSubmit={this.insertDepartamento}>
                    <label className='form-label'>ID</label>
                    <input className='form-control' type="text" ref={this.cajaId} />
                    <label className='form-label'>Nombre</label>
                    <input className='form-control' type='text' ref={this.cajaNombre} />
                    <label className='form-label'>Localidad</label>
                    <input className='form-control' type='text' ref={this.cajaLocalidad} />
                    <button className='btn btn-success mt-4'>Enviar</button>
                </form>
            </div>
        )
    }
}

export default CreateDepartamento;