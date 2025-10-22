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
            <div>
                {
                    this.state.status &&
                    <Navigate to="/" />
                }
                <h2>Actualizar Datos</h2>
                <form onSubmit={this.updateDepartamento}>
                    <label className='form-label'>ID</label>
                    <input className='form-control' type='text' defaultValue={this.props.id} ref={this.cajaId} disabled/>
                    <label className='form-label'>Nombre</label>
                    <input className='form-control' type='text' defaultValue={this.props.nombre} ref={this.cajaNombre} />
                    <label className='form-label'>Localidad</label>
                    <input className='form-control' type='text' defaultValue={this.props.localidad} ref={this.cajaLocalidad} />
                    <button className='btn btn-success'>Actualizar</button>
                </form>
            </div>
        )
    }
}

export default UpdateDepartamentos;