import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    const link = "m-1.5 bg-amber-200 p-1.5 rounded-md hover:bg-yellow-300"
    return (
        <nav className="flex flex-col">
            <Link to="/" className={link}>Products</Link>
            <Link to="/another" className={link}>Another</Link>
        </nav>
    );
};

export default Navigation;