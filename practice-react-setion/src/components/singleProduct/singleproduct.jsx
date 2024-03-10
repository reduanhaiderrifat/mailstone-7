import React from "react";

const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div className="style">
      <h3>{product.id}</h3>
      <h3>{product.name}</h3>
      <p>{product.address.street}</p>
      <p>{product.company.name}</p>
      <p>{product.username}</p>
      <p>{product.website}</p>
    </div>
  );
};

export default SingleProduct;
