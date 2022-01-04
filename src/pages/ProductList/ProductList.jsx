import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import {
  selectLoading,
  fetchProductList,
  selectProductList,
} from '../../state/productSlice';

import {
  StyledProductList,
  StyledProductListItem,
  StyledProductListItemPrice,
} from './ProductList.styled';

const ProductList = () => {
  const productList = useSelector(selectProductList);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    console.log('Fetching list of products...');
    dispatch(fetchProductList());
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(productList);
    } else {
      setFilteredProducts(productList.filter((product) => {
        const productName = `${product.brand} ${product.model}`;
        return productName.toLowerCase()
          .includes(searchTerm.toLowerCase());
      }));
    }
  }, [productList, searchTerm]);

  if (isLoading) {
    return (
      <>
        <FontAwesomeIcon icon={faMobileAlt} size="6x" spin />
        <p>Loading products...</p>
      </>
    );
  }

  return (
    <>
      <Form.Control
        size="lg"
        type="search"
        placeholder="Enter the text to search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {searchTerm && (
        <p>
          {`${filteredProducts.length} out of ${productList.length} found for "${searchTerm}"`}
        </p>
      )}
      <StyledProductList>
        {filteredProducts.map((product) => (
          <StyledProductListItem key={product.id} data-cy="product-list-item">
            <img
              alt={`${product.brand} ${product.model}`}
              src={product.imgUrl}
            />
            <span>{`${product.brand} ${product.model}`}</span>
            <StyledProductListItemPrice>
              {`${product.price || '?'} €`}
            </StyledProductListItemPrice>
          </StyledProductListItem>
        ))}
      </StyledProductList>
    </>
  );
};

export default ProductList;
