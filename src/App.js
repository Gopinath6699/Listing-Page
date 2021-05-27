import React from "react";

import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <NavBar />
      <main>
      <Banner />
        <p>
          Content
        </p>
      </main>
      <Footer />
    </>
  );
};

export default App;
