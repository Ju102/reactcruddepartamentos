import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuDepartamentos extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        {/* 1. La marca (Branding) */}
                        <p className="navbar-brand">
                            API Departamentos
                        </p>

                        {/* El botón "Hamburguesa" para móviles */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* 'me-auto' alinea este grupo a la izquierda */}
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className="nav-link" aria-current="page" to="/create">Crear Departamento</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MenuDepartamentos