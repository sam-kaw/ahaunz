import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer className="bg-dark text-white mt-5 p-4 text-center fixed-bottom">
        Copyright &copy; {new Date().getFullYear()} Ahau | I am
      </footer>
    </div>
  );
}
