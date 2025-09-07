import React, { Component } from 'react';
import user1 from "../perfil-forum1.jpg";
import user2 from "../perfil-forum2.jpg";
import user3 from "../perfil-forum3.jpg";
import user4 from "../perfil-forum4.jpg";
import user5 from "../perfil-forum5.jpg";

class Postagens extends Component {
    state = {  }
    render() { 
        return (
            <section className="container-posts">
                <ul className="galeria-posts">
                    <li>
                        <legend className="time">Há 2 min</legend>
                        <button class="like">0</button>

                        <div className="perfil-post">
                            <img src={user1} alt="Usuário André"/>
                            <legend><strong>André</strong></legend>
                        </div>
                        <div className="msg-post">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </li>

                    <li>
                        <legend className="time">Há 2 min</legend>
                        <button class="like">0</button>
                        <div className="perfil-post">
                            <img src={user2} alt="Usuário André"/>
                            <legend><strong>Regina</strong></legend>
                        </div>
                        <div className="msg-post">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </li>

                    <li>
                        <legend className="time">Há 2 min</legend>
                        <button class="like">0</button>
                        <div className="perfil-post">
                            <img src={user3} alt="Usuário André"/>
                            <legend><strong>Ana</strong></legend>
                        </div>
                        <div className="msg-post">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </li>

                    <li>
                        <legend className="time">Há 2 min</legend>
                        <button class="like">0</button>
                        <div className="perfil-post">
                            <img src={user4} alt="Usuário André"/>
                            <legend><strong>George</strong></legend>
                        </div>
                        <div className="msg-post">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </li>

                    <li>
                        <legend className="time">Há 2 min</legend>
                        <button class="like">0</button>
                        <div className="perfil-post">
                            <img src={user5} alt="Usuário André"/>
                            <legend><strong>Diana</strong></legend>
                        </div>
                        <div className="msg-post">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </li>

                    <li>
                        <legend className="time">Há 2 min</legend>
                        <button class="like">0</button>
                        <div className="perfil-post">
                            <img src={user1} alt="Usuário André"/>
                            <legend><strong>André</strong></legend>
                        </div>
                        <div className="msg-post">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </li>

                    <li>
                        <legend className="time">Há 2 min</legend>
                        <button class="like">0</button>
                        <div className="perfil-post">
                            <img src={user2} alt="Usuário André"/>
                            <legend><strong>Regina</strong></legend>
                        </div>
                        <div className="msg-post">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}
 
export default Postagens;