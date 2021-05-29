import React, { useEffect, useState } from "react";

import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal/Modal";
import Card from "./Components/Card/Card";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// import { getDetails } from "./API";

const App = () => {
  const [page, setPage] = useState(1);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  window.addEventListener("scroll", () => {
    const { scrollTop, scrollHeight, clientHeight } =
      document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 5) {
      setPage((prev) => prev + 1);
    }
  });

  const getDetails = async (page) => {
    const { data } = await axios.get(
      `https://randomuser.me/api/?page=${page}&result=3`
    )
    
    return data.results;
  };

  useEffect(() => {
    const loadDetails = async () => {
      setLoading(true);
      const newDetails = await getDetails(page);
      setDetails((prev) => [...prev, ...newDetails]);
      setLoading(false);
    };

    loadDetails();
  }, [page]);

  return (
    <>
      <NavBar />
      <main>
        <ToastContainer position="bottom-right" />
        <Banner />
        <Modal />
        <div className="d-flex flex-wrap justify-content-between cards">
          {details &&
            details.map((detail, index) => (
              <Card key={index} details={details[index]} />
            ))}
        </div>
        {loading && (
          <div className="text-center">
            <div className={`loading ${loading ? "show" : ""}`}>
              <div className="ball"></div>
              <div className="ball"></div>
              <div className="ball"></div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default App;
