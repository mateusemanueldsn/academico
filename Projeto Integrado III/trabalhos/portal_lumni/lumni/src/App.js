import React from 'react';
import "./Components/NavegadorDefault.css";
import './App.css';
import '../src/Graphic/icons/style.css';
import '../src/Components/Background-Video.css';
import '../src/Components/Container-Noticias.css';
import '../src/Components/LargerPromoSlide.css';
import '../src/Components/RodapeDefault.css';
import '../src/Components/Container-Forum.css';
import '../src/Components/Create-Forum-Post.css';
import Navegador from './Components/NavegadorDefault';
import BackgroundVideo from './Components/Background-Video';
import ContainerNoticias from './Components/Container-Noticias';
import LargerPromoSlider from './Components/LargerPromoSlide';
import RodapeDefault from './Components/RodapeDefault.js';
import { BrowserRouter, Route } from 'react-router-dom';
import ContainerForum from './Components/Container-Forum';
import CreateForumPost from './Components/Create-Forum-Post';
import ModalContaUsuario from './Components/ModalContaUsuario';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/">
        <Navegador></Navegador>
        <BackgroundVideo></BackgroundVideo>
        <ContainerNoticias></ContainerNoticias>
        <LargerPromoSlider></LargerPromoSlider>
        <RodapeDefault></RodapeDefault>
      </Route>

      <Route exact path="/testemodal">
      <Navegador></Navegador>
      <ModalContaUsuario></ModalContaUsuario>
      </Route>

      <Route path="/forum">
      <Navegador></Navegador>
      <ContainerForum></ContainerForum>
      <RodapeDefault></RodapeDefault>
      </Route>

      <Route exact path="/forumcreate">
      <Navegador></Navegador>
      <CreateForumPost></CreateForumPost>
      <RodapeDefault></RodapeDefault>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
