import React from 'react'
import { BrowserRouter  ,Routes,Route } from 'react-router-dom';
import Addnew from '../Student/Addnew';
import Edit from '../Student/Edit'
import  View from '../Student/View'
import Home2 from './Home2';

function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home2/>}></Route>
          <Route path='/addnew' element={<Addnew/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
          <Route path='/view/:id' element={<View/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default Home
