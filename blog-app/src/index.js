import React from 'react'
import  ReactDOM  from 'react-dom'
import App from './component/App'
import Header from './component/Header'
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './component/Login';
import Register from './component/Register';
import '../src/index.css'



ReactDOM.render(
    <BrowserRouter>
    <div >
    <Header/>
    <Route path='/login'>
      <Login/>
    </Route>
    <Route path='/register'>
      <Register/>
    </Route>
    </div>
    <Route path='/' exact>
        <App/>
    </Route>
    </BrowserRouter>
    , document.getElementById('root'))