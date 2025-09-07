import React, { Component } from 'react'
import FormPost from '../components/FormPost'
import Navegador from '../components/Navegador'

export class CreatePost extends Component {
    render() {
        return (
            <div class="containerForm">
                <Navegador/>
                <FormPost/>
            </div>
        )
    }
}

export default CreatePost
