'use client';

import React, { useState, useEffect } from "react";
import CountButton from "../components/CountButton/CountButton";
import SearchBar from "../components/SearchBar/SearchBar";
import Paragraph from "../components/Paragraph/Paragraph";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Page() {
  const [productsState, setProductsState] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(productsArray => {
        setProductsState(productsArray);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
      });
  }, []);

  const hasProducts = productsState.length > 0;

  return (
    <div>
      <CountButton incrementBy={1} buttonColor={'green'} />
      <CountButton incrementBy={2} buttonColor={"red"} />
      <Paragraph />

      {hasProducts
        ? <SearchBar products={productsState} />
        : "Loading..."}
    </div>
  );
}