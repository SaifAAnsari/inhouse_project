import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';

const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
