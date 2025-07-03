import React from "react";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <h2>Hello</h2>
      <h1 className="text-6xl font-bold font-primary underline">
        Hello world!
      </h1>
    </div>
  );
};

export default App;
