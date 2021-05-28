import React from "react";

import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";
import Card from "./Components/Card/Card";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Banner />
        <div className="d-flex flex-wrap justify-content-between cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
