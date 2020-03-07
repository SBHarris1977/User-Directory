import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table/Table.js";
import Footer from "./components/Footer";
//import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="container">
      <Header />
      <Form />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
