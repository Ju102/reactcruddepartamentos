import React, { Component } from 'react'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../Global';

class UpdateDepartamentos extends Component {

    state = {
        status: false
    }

    url = Global.urlDepartamentos;

    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    updateDepartamento = (event) => {
        event.preventDefault();

        var request = "api/departamentos/";

        var id = parseInt(this.cajaId.current.value);

        var departamento = {
            numero: id,
            nombre: this.cajaNombre.current.value,
            localidad: this.cajaLocalidad.current.value
        }

        axios.put(this.url + request, departamento).then(response => {
            console.log("Departamento" + id + " actualizado con exito");
            this.setState({
                status: true
            });
        });
    }

    render() {
        return (
            <div className="modern-card">
                {
                    this.state.status &&
                    <Navigate to="/" />
                }
                <h2 className="modern-title">✏️ Actualizar Departamento</h2>
                <form onSubmit={this.updateDepartamento} className="modern-form">
                    <div className="mb-3">
                        <label className='form-label'>📋 ID del Departamento</label>
                        <input 
                            className='form-control' 
                            type='text' 
                            defaultValue={this.props.id} 
                            ref={this.cajaId} 
                            disabled
                        />
                        <small style={{color: '#999', fontSize: '12px'}}>
                            El ID no puede ser modificado
                        </small>
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>🏷️ Nombre</label>
                        <input 
                            className='form-control' 
                            type='text' 
                            defaultValue={this.props.nombre} 
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
                            defaultValue={this.props.localidad} 
                            ref={this.cajaLocalidad}
                            placeholder="Ingrese la localidad"
                            required
                        />
                    </div>
                    <button className='btn btn-modern btn-modern-primary mt-3' style={{width: '100%'}}>
                        💾 Guardar Cambios
                    </button>
                </form>
            </div>
        )
    }
}

export default UpdateDepartamentos;