import React, { Component } from 'react'
import Navegador from '../components/Navegador'
import Rodape from '../components/Rodape'
import VerPostagem from '../components/VerPostagem'

export class viewpost extends Component {
    
    render() {
        return (
            <div>
                <Navegador/>
                <VerPostagem/>
                <Rodape/>
            </div>
        )
    }
}

export default viewpost
