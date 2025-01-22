import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-light py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Railway Ticketing Platform. All
          rights reserved.
        </p>
      </footer>
    );
};

export default Footer;