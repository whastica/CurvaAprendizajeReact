import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "antd/dist/reset.css";
import { pokemonsReducer } from './reducers/pokemons.js';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

const  store = createStore(pokemonsReducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
      <App />  
    </Provider>
  </StrictMode>,
)
