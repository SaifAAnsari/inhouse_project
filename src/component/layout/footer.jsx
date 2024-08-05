import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footercontainer">
        <p>&copy; {new Date().getFullYear()} HMS Textile Group. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
