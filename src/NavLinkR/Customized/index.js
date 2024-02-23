import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './index.css';

const Customized = ({ to, text }) => {
  const location = useLocation();

  return (
    <div>
      <NavLink to={to} className={to === location.pathname  ? 'active' : 'inactive'} style={{ color: "white", textDecoration: "none" }}>
        <Link to={to === "/Ana Səhifə" ? "/" : to} className="custom-link" style={{ color: "white", textDecoration: "none" }}>
          {text}
        </Link>
      </NavLink>
    </div>
  );
}

export default Customized;
