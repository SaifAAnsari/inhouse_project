import React from 'react';
import { Outlet } from 'react-router-dom';
import Body from './component/mainwebpage/body';
import About from './component/about/about';
import Product from './component/product/product';
import Contact from './component/contact/contact';
import MainLayout from './component/mainlayout/mainlayout';

const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true, 
        element: <Body />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
];

export default routes;
