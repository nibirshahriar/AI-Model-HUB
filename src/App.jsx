import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Models from "./components/Models";
import Navbar from "./components/Navbar";

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels(); //eta function er bahire dile Suspense use korar dorkar nai

function App() {
  const [activeTab, setActiveTab] = useState("model");
const [carts,setCarts]=useState([])
  return (
    <>
      <Navbar />
      <Banner />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Models"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && (
        <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts} />
      )}

      {activeTab === "cart" && <Cart carts={carts}/>}
      <Footer />
    </>
  );
}

export default App;
