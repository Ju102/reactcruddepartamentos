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
      return (<img src={loading} style={{ width: "150px", marginLeft: "570px", marginTop: "200px" }} alt="Loading..." />)
    }
    else {
      return (
        <div>
          <h2>Home</h2>
          {
            this.state.departamentos.length !== 0 &&
            <table className='table-bordered'>
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Nombre</th>
                  <th>Localidad</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.departamentos.map((departamento, index) => {
                    return <tr key={index}>
                      <td>{departamento.numero}</td>
                      <td>{departamento.nombre}</td>
                      <td>{departamento.localidad}</td>
                      <td className='p-1'><NavLink className="btn btn-warning"
                        to={"/edit/" +
                          departamento.numero + "/" +
                          departamento.nombre + "/" +
                          departamento.localidad
                        }>Editar</NavLink>
                        <button className="btn btn-danger ms-1" onClick={() => this.deleteDepartamento(departamento.numero)}>Eliminar</button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          }
        </div>
      )
    }
  }
}

export default HomeDepartamentos;