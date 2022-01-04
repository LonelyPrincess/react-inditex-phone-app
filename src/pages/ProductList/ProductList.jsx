import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState();
  // const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // setFilteredProducts();
  }, [searchTerm]);

  return (
    <>
      <Form.Control
        size="sm"
        type="search"
        placeholder="Enter the text to search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div>
        todo: add list
      </div>
    </>
  );
};

export default ProductList;
