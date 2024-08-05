import React from 'react';
import Body from './component/mainwebpage/body';
import About from './component/about/about';
import Product from './component/product/product';
import Contact from './component/contact/contact';
import MainLayout from './component/mainlayout/mainlayout'; // Import the MainLayout component

const routes = [
  {
    path: '/',
    element: (
      <MainLayout>
        <Body />
      </MainLayout>
    ),
  },
  {
    path: '/about',
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: '/product',
    element: (
      <MainLayout>
        <Product />
      </MainLayout>
    ),
  },
  {
    path: '/contact',
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
  },
];

export default routes;
