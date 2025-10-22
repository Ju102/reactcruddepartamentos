import { Component } from 'react'
import Global from '../Global'
import loading from '../images/loading.gif'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class HomeDepartamentos extends Component {

  urlDepartamentos = Global.urlDepartamentos;

  state = {
    departamentos: [],
    status: false
  }

  loadDepartamentos = () => {
    var request = "api/Departamentos/";

    axios.get(this.urlDepartamentos + request).then(response => {
      console.log("Leyendo departamentos del servicio...");
      this.setState({
        departamentos: response.data,
        status: true
      })
    })
  }

  deleteDepartamento = (id) => {
    var request = "api/departamentos/";

    axios.delete(this.urlDepartamentos + request + "/" + id).then(response => {
      console.log("Departamento " + id + " eliminado con exito");
      this.loadDepartamentos();
    })
  }

  componentDidMount = () => {
    this.loadDepartamentos();
  }

  render() {

    if (!this.state.status) {
      return (
        <div className="loading-container">
          <img src={loading} alt="Loading..." />
        </div>
      )
    }
    else {
      return (
        <div className="modern-card">
          <h2 className="modern-title">📊 Gestión de Departamentos</h2>
          {
            this.state.departamentos.length !== 0 ? (
              <table className='modern-table'>
                <thead>
                  <tr>
                    <th>📋 Número</th>
                    <th>🏷️ Nombre</th>
                    <th>📍 Localidad</th>
                    <th>⚙️ Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.departamentos.map((departamento, index) => {
                      return <tr key={index}>
                        <td style={{fontWeight: '600', color: '#667eea'}}>{departamento.numero}</td>
                        <td>{departamento.nombre}</td>
                        <td>{departamento.localidad}</td>
                        <td className='p-2'>
                          <NavLink 
                            className="btn btn-modern btn-modern-warning me-2"
                            style={{padding: '8px 20px', fontSize: '12px'}}
                            to={"/edit/" +
                              departamento.numero + "/" +
                              departamento.nombre + "/" +
                              departamento.localidad
                            }>
                            ✏️ Editar
                          </NavLink>
                          <button 
                            className="btn btn-modern btn-modern-danger" 
                            style={{padding: '8px 20px', fontSize: '12px'}}
                            onClick={() => this.deleteDepartamento(departamento.numero)}>
                            🗑️ Eliminar
                          </button>
                        </td>
                      </tr>
                    })
                  }
                </tbody>
              </table>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '40px',
                color: '#999',
                fontSize: '18px'
              }}>
                <p>📭 No hay departamentos disponibles</p>
              </div>
            )
          }
        </div>
      )
    }
  }
}

export default HomeDepartamentos;