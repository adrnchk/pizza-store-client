import React from "react";
import { useState, useRef, useEffect } from "react";

const useClickOutside = (handler) => {
  let domNode = useRef(null);

  useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function Login() {
  let domNode = useClickOutside(() => {
    document
      .querySelector(".sidebar-container")
      .classList?.remove("sidebar-container-active");
    document
      .querySelector(".wrapper")
      .classList?.remove("wrapper-sidebar-active");
  });

  return (
    <div ref={domNode} className="sidebar-container">
      <h1>Кошик</h1>
    </div>
  );
}

export default Login;
