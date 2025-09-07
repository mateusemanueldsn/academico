import React, { Component } from 'react'
import ContainerPosts from '../components/ContainerPosts'
import Navegador from '../components/Navegador'

export class Timeline extends Component {
    render() {
        
        return (
            <div>
                <Navegador/>
                <ContainerPosts/>
            </div>
        )
    }
}

export default Timeline
