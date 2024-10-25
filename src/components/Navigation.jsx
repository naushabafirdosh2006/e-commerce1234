// components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const linkStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>
        <Link to="/">
          <img src="/images/brand_logo.png" alt="Brand Logo" style={{ height: '40px' }} />
        </Link>
      </div>
      <ul style={linkStyle}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Login</button>
    </nav>
  );
};

export default Navigation;
