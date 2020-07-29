import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from '../src/pages/Home';
import {BrowserRouter,  Switch, Route} from 'react-router-dom';
import CadastroVideo from '../src/pages/Cadastro/Video';
import CadastroCategoria from '../src/pages/Cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/video' component={CadastroVideo} />
      <Route path='/cadastro/categoria' component={CadastroCategoria} />
      <Route component={()=> (
        <div>404 Not Found</div>
      )}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


