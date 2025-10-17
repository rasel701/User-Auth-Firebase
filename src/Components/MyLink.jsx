import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children }) => {
  return (
    <NavLink
      to={`${to}`}
      className={({ isActive }) => (isActive ? "text-pink-600 underline" : "")}
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
