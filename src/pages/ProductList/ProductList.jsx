import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  selectLoading,
  fetchProductList,
  selectProductList,
} from '../../state/productSlice';

import Loader from '../../components/Loader/Loader';

import {
  StyledProductList,
  StyledProductListItem,
  StyledProductListItemPrice,
  StyledProductCount,
} from './ProductList.styled';

const ProductList = () => {
  const navigate = useNavigate();
  const productList = useSelector(selectProductList);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
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
      <Loader
        icon={faMobileAlt}
        message="Loading products..."
      />
    );
  }

  return (
    <>
      <InputGroup>
        <InputGroup.Text>
          <FontAwesomeIcon fixedWidth icon={faSearch} />
        </InputGroup.Text>
        <Form.Control
          data-cy="product-search-box"
          size="lg"
          type="search"
          placeholder="Enter the text to search"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </InputGroup>
      {!searchTerm ? (
        <StyledProductCount>
          {'Found a total of '}
          <span data-cy="all-products-count">{productList.length}</span>
          {' products'}
        </StyledProductCount>
      ) : (
        <StyledProductCount>
          &quot;
          <i data-cy="search-term">{searchTerm}</i>
          {'" found in '}
          <span data-cy="search-results-count">{filteredProducts.length}</span>
          {' out of '}
          <span data-cy="all-products-count">{productList.length}</span>
          {' products'}
        </StyledProductCount>
      )}
      <StyledProductList>
        {filteredProducts.map((product) => (
          <StyledProductListItem
            key={product.id}
            data-cy="product-list-item"
            onClick={() => navigate(`/products/${product.id}`)}
          >
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
