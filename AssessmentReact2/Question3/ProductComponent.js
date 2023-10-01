// Question 3

import React, { useState } from 'react';

function ProductComponent() {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    desc: '',
    rating: 0,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = () => {
    // Call an action method to add the product details to the database using an API
    // Example: api.addProduct(product);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <textarea
          name="desc"
          value={product.desc}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="number"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          placeholder="Rating"
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}