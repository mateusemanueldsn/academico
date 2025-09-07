import React, { Component } from 'react'
import BoasVindas from '../components/BoasVindas'
import Navegador from '../components/Navegador'

export class Home extends Component {
    render() {
        return (
            <div>
                <Navegador/>
                <BoasVindas/>
            </div>
        )
    }
}

export default Home
