import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <div id="root">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
