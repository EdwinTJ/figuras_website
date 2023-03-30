import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MDBContainer, MDBRow, MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";

// TODO
// 1. Fix the category dropdown
export default function EditProduct() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const fetchProduct = () => {
    try {
      axios
        .get(`http://localhost:8000/api/products/single/${id}`)
        .then(prod => {
          setProduct(prod.data.product);
          setCategory(prod.data.product.category.name);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductCategory = () => {
    axios
      .get("http://localhost:8000/api/category")
      .then(cat => {
        console.log(cat.data.category);
        setCategories(cat.data.category);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchProduct();
    fetchProductCategory();
  }, []);

  const editProduct = async e => {
    e.preventDefault();
    const name = e.target[0].value;
    const description = e.target[1].value;
    const price = e.target[2].value;

    try {
      const { data } = await axios.put(
        `http://localhost:8000/api/product/${id}`,
        {
          name,
          description,
          price
        }
      );
      if (data.success === true) {
        if (typeof window !== "undefined") {
          setTimeout(() => {
            navigate("/admin/product");
          }, 2000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MDBContainer>
        <MDBRow
          className="row-cols-1 row-cols-md-3 g-4"
          style={{ marginTop: "60px", marginBottom: "20px" }}
        >
          <h1>Edit Product</h1>
        </MDBRow>
        <form encType="multipart/form-data" onSubmit={editProduct}>
          <MDBRow
            className="row-cols-1 row-cols-md-3 g-4"
            style={{ marginTop: "60px", marginBottom: "20px" }}
          >
            <MDBInputGroup className="mb-3" textBefore="Name">
              <input
                className="form-control"
                type="text"
                onChange={e => setProduct({ ...product, name: e.target.value })}
                value={product.name}
              />
            </MDBInputGroup>
            <MDBInputGroup textBefore="Description">
              <textarea
                className="form-control"
                onChange={e =>
                  setProduct({ ...product, description: e.target.value })
                }
                value={product.description}
              />
            </MDBInputGroup>
            <MDBInputGroup textBefore="Price" textAfter={["$", "0.00"]}>
              <input
                className="form-control"
                type="text"
                onChange={e =>
                  setProduct({ ...product, price: e.target.value })
                }
                value={product.price}
              />
            </MDBInputGroup>
            {/* #9    // FIXME */}
            {/* <MDBInputGroup className="mb-3" textBefore="Category">
              <select
                id="category"
                form="addProduct"
                name=""
                className="form-control"
              >
                <option disabled>Select</option>
                {categories &&
                  categories.map((cat, index) => (
                    <option
                      key={index}
                      onChange={e =>
                        setProduct({ ...product, category: e.target.value })
                      }
                      value={cat._id}
                    >
                      {cat.name}
                    </option>
                  ))}
              </select>
            </MDBInputGroup> */}
            <MDBInputGroup className="mb-3">
              <MDBBtn type="submit">Edit</MDBBtn>
            </MDBInputGroup>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  );
}
