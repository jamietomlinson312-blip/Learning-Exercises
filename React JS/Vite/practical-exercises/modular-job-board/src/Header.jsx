import React from "react";

export const Header = () => {
  return (
    <>
      <header className="p-4 fixed w-screen flex justify-center z-50">
        <h1 className="text-3xl ">Practical Exercise - Modular Job Board</h1>
      </header>
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/vector-1756861913042-143903f0a282?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-1/2 shadow-md"
        />
      </div>
    </>
  );
};
