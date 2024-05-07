import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './components/Home/index'
import { About } from './components/About'
import { Menu } from './components/Menu/index'
import { Posts } from './components/Posts/index'
import { Post } from './components/Post/index'
import { Redirect } from './components/Redirect/index'
import { NotFound } from './components/NotFound/index'
import { ApiHome } from './components/Api/index';
import './styles/global.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* <Route path='/posts/:id' element={<Posts />} /> */}
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<Post />}/>
        </Route>

        <Route path='/redirect' element={<Redirect />} />
        <Route path='/apihome' element={<ApiHome />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
