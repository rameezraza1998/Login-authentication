import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import PList from "../components/Plist.jsx";
import {useNavigate} from 'react-router-dom';
import {  signOut } from "firebase/auth";
import { auth } from '../config/firebase/configfirebase.js' 





function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
      console.log(data.products);
      
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  const navigate = useNavigate()

  const singleproduct = (id) => {
    navigate(`/singleproduct/${id}`)
    console.log("button press");
    
  }
  return (
    <>
    {loading && <h1 className="text-center mb-4">Loading...</h1>}
    {error && <p>Error loading products!</p>}
    <Row className="g-4 p-4 ">
      {products.map((product) => (
        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
          <PList
            title={product.title}
            thumbnail={product.thumbnail}
            des={product.description}
            func={()=>singleproduct(product.id)}
          />
        </Col>
      ))}
    </Row>
  </>
  )
}

export default Product