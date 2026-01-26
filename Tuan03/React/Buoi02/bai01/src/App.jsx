import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Subinfo from "./components/Subinfo/Subinfo.jsx";

const App = () => {
  return (
    <div className="app">
      <Header title="This is header"></Header>
      <Subinfo name="Doraemon" mssv="23709671" lop="DHKTPM9BTT"></Subinfo>
      <Footer title="This is footer"></Footer>
    </div>
  );
};

export default App;
