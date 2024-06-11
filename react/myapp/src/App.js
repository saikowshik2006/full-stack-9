// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/register';
import Login from './components/login';
import AddArticle from './components/AddArticle';
import ViewArticle from './components/ViewArticle';
import LoggedInHome from './components/LoggedInHome';

const App = () => {
  const [articles, setArticles] = useState([]);

  const addArticle = (article) => {
    setArticles([...articles, article]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<LoggedInHome />} />
        <Route path="/add-article" element={<AddArticle addArticle={addArticle} />} />
        <Route path="/view-articles" element={<ViewArticle articles={articles} />} />
      </Routes>
    </Router>
  );
};

export default App;
