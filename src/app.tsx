import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Forms from './components/Forms/index';
import Details from './components/Details/index';
import { RoutingPaths } from './helpers/RoutingPaths';

const App = () => {
  return (
    <Routes>
      <Route path={RoutingPaths.HOME} element={<Forms />} />
      <Route path={RoutingPaths.DETAILS} element={<Details />} />
    </Routes>
  );
};

export default App;
