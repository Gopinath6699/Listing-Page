import React, { lazy, Suspense, useState } from "react";

import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal/Modal";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = lazy(() => import("./Components/Card/Card"));

const App = () => {
  const [loading, setLoading] = useState(false);

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } =
      document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 5) {
      setLoading(true);
    }
  });

  return (
    <>
      <NavBar />
      <main>
        <ToastContainer position="bottom-right" />
        <Banner />
        <Modal />
        <Suspense
          fallback={
            <div className="text-center">
              <div
                className={`loading show ${loading ? "show" : ""}`}
              >
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
              </div>
            </div>
          }
        >
          <div className="d-flex flex-wrap justify-content-between cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
