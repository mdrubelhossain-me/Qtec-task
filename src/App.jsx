import React from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar/>


      <h2>Hello</h2>
      <h1 className="text-6xl font-bold font-primary underline">
        Hello world!
      </h1>

      <Footer/>


    </div>
  );
};

export default App;
