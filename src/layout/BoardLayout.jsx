import React from "react";
import { Outlet } from "react-router-dom";

function BoardLayout() {
  return (
    <div className="relative w-full h-screen">
      <Outlet />
    </div>
  );
}

export default BoardLayout;
