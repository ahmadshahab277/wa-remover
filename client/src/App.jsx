import React from "react";
import "./App.css";
import Routes from "./pages/Routes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";
import { useLoading } from "./contexts/LoaderContext";

function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Routes />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
