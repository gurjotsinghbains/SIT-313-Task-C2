import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Post from './Pages/Post';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2 style={{ textAlign: "center", marginTop: "50px" }}>Home Page</h2>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;