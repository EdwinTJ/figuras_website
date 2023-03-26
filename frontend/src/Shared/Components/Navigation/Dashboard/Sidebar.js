import React from "react";
export default function Sidebar({ history }) {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <a href="/admin" className="sidebar-nav-link">
            <div>
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <span>Dashboard</span>
          </a>
        </li>
        <li className="sidebar-nav-item">
          <a href="/admin/product" className="sidebar-nav-link">
            <div>
              <i className="fab fa-accusoft"></i>
            </div>
            <span>Products</span>
          </a>
        </li>
        <li className="sidebar-nav-item">
          <a href="#" className="sidebar-nav-link">
            <div>
              <i className="fas fa-tasks"></i>
            </div>
            <span>Sells</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
