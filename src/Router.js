import { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuDepartamentos from './components/MenuDepartamentos'
import HomeDepartamentos from './components/HomeDepartamentos'
import CreateDepartamento from './components/CreateDepartamento'
import UpdateDepartamentos from './components/UpdateDepartamentos'

class Router extends Component {
    render() {

        function UpdateDepartamentosElement() {

            let { id, nombre, localidad } = useParams();

            return <UpdateDepartamentos id={id} nombre={nombre} localidad={localidad} />
        }

        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path="/" element={<HomeDepartamentos />} />
                    <Route path='/create' element={<CreateDepartamento />} />
                    <Route path='/edit/:id/:nombre/:localidad' element={<UpdateDepartamentosElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;