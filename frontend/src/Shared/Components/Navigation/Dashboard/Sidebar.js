import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar({ history }) {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <Link to="/admin" className="sidebar-nav-link">
            <div>
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/admin/product" className="sidebar-nav-link">
            <div>
              <i className="fab fa-accusoft"></i>
            </div>
            <span>Products</span>
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/" className="sidebar-nav-link">
            <div>
              <i className="fas fa-tasks"></i>
            </div>
            <span>Sells</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
