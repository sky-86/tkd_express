import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import NavBar from './components/navbar';
import * as Pages from './pages/pages';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.HomePage />} />
          <Route path='programs' element={<Pages.ProgramsPage />} />
          <Route path='faq' element={<Pages.FaqPage />} />
          <Route path='about' element={<Pages.AboutPage />} />
          <Route path='contact' element={<Pages.ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
