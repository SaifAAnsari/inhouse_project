import React from 'react';
import Header from '../layout/header';
import Footer from '../layout/footer';
import './mainlayout.css'; // or './MainLayout.css' depending on your setup


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
