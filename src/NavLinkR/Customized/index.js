import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Customized = ({to,text}) => {
    return <div>
        <NavLink className={({ isActive }) => (isActive ? "isActive" : "null")}>
   <Link to={to === "/Ana Səhifə" ? "/" : to} className="custom-link"  style={{ color:"white" ,textDecoration: 'none'}}>
        {text}
   </Link>
        </NavLink>
    </div>;
}

export default Customized;