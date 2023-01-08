import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import {Home, About} from './pages';
import { Booklist,Bookdetails } from './components';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
     <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="about" element={<About/>}></Route>
           <Route path="book" element={<Booklist/>}></Route>
           <Route path="/book/:id" element={<Bookdetails/>}></Route>
     </Routes>
     </BrowserRouter>
);
