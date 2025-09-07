import { createReducer } from "@reduxjs/toolkit";
import { loginSucesso, logout } from "../actions/autenticacao";

 const initialState = {
      nome: localStorage.getItem("nome"),
      token: localStorage.getItem("token"),
      id: localStorage.getItem("id")
}; 

const reducerAutenticacao = createReducer(initialState, {
    [loginSucesso] :(state, action) =>{
        state.nome = action.payload.nome;
        state.token = action.payload.token;
        state.id = action.payload.id;
        localStorage.setItem("nome", action.payload.nome);
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("id", action.payload.id);
        
    },
    [logout]: (state, action) =>{
        state.nome = null;
        state.token = null;
        state.id = null;
        localStorage.removeItem("nome");
        localStorage.removeItem("token");
        localStorage.removeIten("id");
    }
})

export default reducerAutenticacao;


