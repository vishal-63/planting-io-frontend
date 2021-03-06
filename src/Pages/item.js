import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Footer from "../Components/Footer";
import ItemPage from "../Components/ItemPage";
import { UserNavbar } from "../Components/Navbar";
import Topbar from "../Components/Topbar";

const Item = () => {
  const params = useParams();
  const key = Object.keys(params)[0];

  const [item, setItem] = useState();
  const [id, setId] = useState(params[key]);

  useEffect(() => {
    setId(params[key]);
    window.scrollTo(0, 0);
  }, [params]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8080/api/product/get/${id}`, {
        method: "GET",
      });
      const body = await res.json();
      setItem(body);
    }
    fetchData();
  }, [id]);

  return (
    <>
      <Topbar />
      <UserNavbar />
      {item !== undefined && <ItemPage item={item} />}

      <Footer />
    </>
  );
};

export default Item;
