import React from 'react';
import Navbar from "./components/estaticos/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/estaticos/footer/Footer";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario"
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import './App.css';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from "react-redux";
import store from "./store/Store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListarAgencia from './paginas/listarAgencias/ListarAgencia';
import Sobre from './paginas/sobre/Sobre';


function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <Router>
          <Navbar />
          <Switch>
            <div style={{ minHeight: "100vh" }}>

              <Route exact path="/">
                <Login />
              </Route>

              <Route path="/login">
                <Login />
              </Route>

              <Route path="/home">
                <Home />
              </Route>
              <Route path="/cadastrousuario">
                <CadastroUsuario />
              </Route>
              <Route path="/temas">
                <ListaTema />
              </Route>
              <Route path="/posts">
                <ListaPostagem />
              </Route>
              <Route exact path='/formularioPostagem'>
                <CadastroPost />
              </Route>
              <Route exact path='/formularioPostagem/:id'>
                <CadastroPost />
              </Route>
              <Route exact path='/formularioTema'>
                <CadastroTema />
              </Route>
              <Route exact path='/formularioTema/:id'>
                <CadastroTema />
              </Route>
              <Route path='/deletarPostagem/:id'>
                <DeletarPostagem />
              </Route>
              <Route path='/deletarTema/:id'>
                <DeletarTema />
              </Route>
              <Route path='/agencias'>
                <ListarAgencia />
              </Route>
              <Route path='/sobre'>
                <Sobre />
              </Route>
            </div>
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </>
  );
}
//Os componentes estaticos devem ser postos dentro do Router, j?? o restante devem ser colocados dentro de switch, div e route path

export default App;
