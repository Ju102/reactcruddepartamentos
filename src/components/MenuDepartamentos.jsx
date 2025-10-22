import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MenuDepartamentos extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                    padding: '15px 0'
                }}>
                    <div className="container-fluid">
                        {/* 1. La marca (Branding) */}
                        <p className="navbar-brand" style={{
                            fontSize: '24px',
                            fontWeight: '700',
                            margin: '0',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}>
                            🏢 Departamentos
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
                                    <NavLink 
                                        className="nav-link" 
                                        style={({isActive}) => ({
                                            fontWeight: isActive ? '700' : '500',
                                            borderBottom: isActive ? '3px solid white' : 'none',
                                            padding: '8px 20px',
                                            transition: 'all 0.3s ease',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            fontSize: '14px'
                                        })}
                                        aria-current="page" 
                                        to="/">
                                        🏠 Inicio
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink 
                                        className="nav-link" 
                                        style={({isActive}) => ({
                                            fontWeight: isActive ? '700' : '500',
                                            borderBottom: isActive ? '3px solid white' : 'none',
                                            padding: '8px 20px',
                                            transition: 'all 0.3s ease',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.5px',
                                            fontSize: '14px'
                                        })}
                                        aria-current="page" 
                                        to="/create">
                                        ➕ Crear Departamento
                                    </NavLink>
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