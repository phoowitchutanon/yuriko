import type { Component } from 'solid-js';
import { Routes, Route } from 'solid-app-router';

import Nav from './components/nav'

import Home from './pages/home'
import Search from './pages/search'

const App: Component = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/search" component={Search} />
      </Routes>
    </>
  );
};

export default App;
