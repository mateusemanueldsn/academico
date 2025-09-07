import React, { Component } from 'react'
import '../Components/ModalCadastro.css';

export class ModalCadastro extends Component {
    render() {
        return (
            <div className="Cadastro">
                <div className="UserOptionsCadastro">
                    <button id="Cad">NOVA CONTA</button><p>ou</p><button id="Log">ENTRAR</button>
                </div>
                <div className="FormConta">
                    <form>
                        <div className="NameUser">
                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Sobrenome" />
                        </div>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha no máximo 20 caracteres" />
                        <input type="password" placeholder="Confirmar senha" />
                        <div className="typeUserAcess">
                            <input type="radio" id="participante" name="user" value="participante" />
                            <label for="participante">Participante</label>
                            <input type="radio" id="ufologo" name="user" value="ufologo" />
                            <label for="ufologo">Ufólogo</label>
                        </div>
                        <div className="Termos">
                        <input type="checkbox" id="termos"/>
                        <label for="termos">Li e aceito os <a href="#">Termos de Uso</a> da Plataforma</label>
                        </div>
                        <button type="submit" className="submitCadastro">Confirmar</button>
                    </form>
                </div> 
            </div>
        )
    }
}

export default ModalCadastro
