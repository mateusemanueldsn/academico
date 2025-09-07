import React, { Component } from 'react'
import '../Components/ModalLogin.css';

export class ModalLogin extends Component {
    render() {
        return (
            <div className="Login">
                <div className="UserOptionsLogin">
                    <button id="Cad">NOVA CONTA</button><p>ou</p><button id="Log">ENTRAR</button>
                </div>
                <div className="FormConta">
                    <form>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <p>Esqueceu seu usuário ou senha? <a href="#">Recupere Aqui</a></p>
                        <div className="typeUserAcess">
                            <input type="radio" id="participante" name="user" value="participante" />
                            <label for="participante">Participante</label>
                            <input type="radio" id="ufologo" name="user" value="ufologo" />
                            <label for="ufologo">Ufólogo</label>
                            <input type="radio" id="ufologo" name="user" value="ufologo" />
                            <label for="ufologo">Acesso Restrito</label>
                        </div>
                        <button type="submit" className="submitLogin">Confirmar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default ModalLogin