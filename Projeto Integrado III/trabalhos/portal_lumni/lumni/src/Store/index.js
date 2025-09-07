const { createStore } = require("redux");
const { default: reducerRaiz } = require("../Reducers");

const store = createStore(reducerRaiz);

export default store;
