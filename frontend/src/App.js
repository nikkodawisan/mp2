import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//PAGES
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Service from './components/pages/Service';
import Book from './components/pages/BookNow';
import Lounge from './components/pages/Lounge';
import Join from './components/pages/Join';

//PUBLIC
import RootLayout from './components/inc/RootLayout';

//ADMIN
import Admin from './components/admin/Admin';
import AdminLayout from './components/admin/AdminLayout';
import BookSent from './components/admin/adminPages/BookSent';
import AdminJoin from './components/admin/adminPages/AdminJoin';
import SignIn from './components/admin/adminPages/SignIn';




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
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/lounge" element={<Lounge/>}></Route>
      <Route path="/join" element={<Join/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/book" element={<Book/>}></Route>
      </Route> 

      {/*ADMIN*/}
      <Route element={<AdminLayout/>}>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/book-sent" element={<BookSent/>}></Route>
        <Route path="/admin-join" element={<AdminJoin/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
      </Route>
    </Routes>
      </>
    </Router>
  );
}

export default App;
