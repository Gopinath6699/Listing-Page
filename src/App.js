import React, { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer";
import Modal from "./Components/Modal/Modal";
import Card from "./Components/Card/Card";

import { ToastContainer } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [page, setPage] = useState(1);
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDetails = async (page) => {
    const { data } = await axios.get(
      `https://randomuser.me/api/?page=${page}`
    );

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
    loadDetails();
    loadDetails();
  }, [page]);

  return (
    <>
      <NavBar />
      <main>
        <ToastContainer position="bottom-right" />
        <Banner />
        <Modal />
        <InfiniteScroll
          dataLength={details.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          className="d-flex flex-wrap justify-content-between cards"
        >
          {details &&
            details.map((detail, index) => (
              <Card key={index} detail={detail} />
            ))}
        </InfiniteScroll>
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
