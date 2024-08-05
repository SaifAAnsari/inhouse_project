

import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
    <footer className="text-center  mt-5">
      <div className="footercontainer">
        <p>&copy; {new Date().getFullYear()} HMS Textile Group. All Rights Reserved.</p>
        
      </div>
    </footer>
    </>
  );
}

export default Footer;
