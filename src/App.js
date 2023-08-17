/* eslint-disable no-unused-vars */
import React from "react";
import css from "./App.css";
import WedTask from "./components/JulyTask/WedTask";
import ThusTask from "./components/JulyTask/ThusTask";
const App = () => {
  return (
    <div>
      <h1 className="banner-title text-2xl md:text-5xl font-bold text-center   mt-12 "> <span className="text-green-600">Task</span> <span className="text-gray-500">Manager</span> </h1>
       <div className="m-20  md:m-28 ps-6 md:ps-14">
      <div class="line ">
        <WedTask></WedTask>
        <ThusTask></ThusTask>
      </div>
    </div>
   </div>
  );
};

export default App;
