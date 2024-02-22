import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//PAGES
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Service from './components/pages/Service';
import Book from './components/pages/BookNow';

//PUBLIC
import RootLayout from './components/inc/RootLayout';

//ADMIN
import Admin from './components/admin/Admin';
import AdminLayout from './components/admin/AdminLayout';



function App() {
  return (
    //Runs and shows all your pages by calling here:
    //Use <> </> to run more than one pages.

    <Router>
      <>
    <Routes>
      {/*PUBLIC*/}
      <Route element={<RootLayout/>}>
      <Route exact path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signIn" element={<SignIn/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/book" element={<Book/>}></Route>
      </Route> 

      {/*ADMIN*/}
      <Route element={<AdminLayout/>}>
        <Route path="/admin" element={<Admin/>}></Route>
      </Route>

    </Routes>
      </>
    </Router>
  );
}

export default App;
