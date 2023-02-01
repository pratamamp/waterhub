import React from "react";

function BoardHome() {
  return (
    <div className="grid grid-cols-2 gap-5 m-5 md:grid-cols-3 lg:grid-cols-4">
      <div className="bg-blue-300 h-28 rounded-lg flex justify-center items-center">
        Panel 1
      </div>
      <div className="bg-yellow-300 h-28 rounded-lg flex justify-center items-center">
        Panel 2
      </div>
      <div className="bg-pink-300 h-28 rounded-lg flex justify-center items-center">
        Panel 3
      </div>
      <div className="bg-green-300 h-28 rounded-lg flex justify-center items-center">
        Panel 4
      </div>
    </div>
  );
}

export default BoardHome;
