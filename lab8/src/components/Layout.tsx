import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Layout: React.FC = () => {
  return (
    <div>
      <p>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to="/"
        >
          HomePage
        </NavLink>
      </p>
      <p>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
      </p>
      <p>
        <NavLink
          style={({ isActive }) => {
            return {
              display: "block",
              margin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to="/cars"
        >
          Cars
        </NavLink>
      </p>
      <hr/>
      <Outlet />
    </div>
  );
};
