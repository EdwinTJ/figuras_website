import React, { useState, useEffect } from "react";
import "./Detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Detail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [url, setUrl] = useState([]);
  const [category, setCategory] = useState([]);
  const fetchProduct = () => {
    try {
      axios
        .get(`http://localhost:8000/api/products/single/${id}`)
        .then(prod => {
          setProduct(prod.data.product);
          setUrl(prod.data.product.image.url);
          setCategory(prod.data.product.category.name);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    console.log(product);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <section className="detail">
        <h1>{product.name}</h1>
        <div>
          <img src={url} style={{ maxWidth: "50%", height: "auto" }} />
        </div>
        <h3>Details</h3>
        <p>{product.description}</p>
        <h3>Price</h3>
        <p>${product.price}</p>
        <h3>Category</h3>
        <p>{category}</p>
      </section>
    </>
  );
}
