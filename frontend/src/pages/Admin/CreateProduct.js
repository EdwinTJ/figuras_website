import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
export default function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState([]);

  //categories from the backend
  const [categories, setCategories] = useState([]);
  //fetch products category
  const fetchProductCategory = () => {
    axios
      .get("/api/category")
      .then(cat => {
        console.log(cat.data.category);
        setCategories(cat.data.category);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProductCategory();
  }, []);
  //handle and convert it in base 64
  const handleImage = e => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  //submit the form
  const submitForm = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/product", {
        name,
        description,
        price,
        category,
        image
      });
      if (data.success === true) {
        setName("");
        setDescription("");
        setPrice("");
        setCategory("");
        setImage("");
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
          <h1>Create Product</h1>
        </MDBRow>
        <form enctype="multipart/form-data" onSubmit={submitForm}>
          <MDBRow
            className="row-cols-1 row-cols-md-3 g-4"
            style={{ marginTop: "60px", marginBottom: "20px" }}
          >
            <MDBInputGroup className="mb-3" textBefore="Name">
              <input
                className="form-control"
                type="text"
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </MDBInputGroup>

            <MDBInputGroup textBefore="Description">
              <textarea
                className="form-control"
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
            </MDBInputGroup>

            <MDBInputGroup textBefore="Price" textAfter={["$", "0.00"]}>
              <input
                className="form-control"
                type="text"
                onChange={e => setPrice(e.target.value)}
                value={price}
              />
            </MDBInputGroup>

            <MDBInputGroup className="mb-3" textBefore="Category">
              <select
                onChange={e => setCategory(e.target.value)}
                id="category"
                name="cars"
                className="form-control select select-initialized"
                value={category}
              >
                <option value="">Choose Category</option>
                {categories &&
                  categories.map(cat => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
              </select>
            </MDBInputGroup>
            <img className="img-fluid" src={image} alt="" />
            <MDBInputGroup className="mb-3">
              <input
                className="form-control"
                type="file"
                onChange={handleImage}
              />
            </MDBInputGroup>

            <MDBInputGroup className="mb-3">
              <MDBBtn type="submit">Submit</MDBBtn>
            </MDBInputGroup>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  );
}
