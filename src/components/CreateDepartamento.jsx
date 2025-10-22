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
            <div className='modern-card'>
                {
                    this.state.status &&
                    <Navigate to="/" />
                }
                <h2 className="modern-title">➕ Crear Nuevo Departamento</h2>
                <form onSubmit={this.insertDepartamento} className="modern-form">
                    <div className="mb-3">
                        <label className='form-label'>📋 ID del Departamento</label>
                        <input 
                            className='form-control' 
                            type="text" 
                            ref={this.cajaId}
                            placeholder="Ingrese el ID del departamento"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>🏷️ Nombre</label>
                        <input 
                            className='form-control' 
                            type='text' 
                            ref={this.cajaNombre}
                            placeholder="Ingrese el nombre del departamento"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>📍 Localidad</label>
                        <input 
                            className='form-control' 
                            type='text' 
                            ref={this.cajaLocalidad}
                            placeholder="Ingrese la localidad"
                            required
                        />
                    </div>
                    <button className='btn btn-modern btn-modern-success mt-3' style={{width: '100%'}}>
                        ✅ Crear Departamento
                    </button>
                </form>
            </div>
        )
    }
}

export default CreateDepartamento;