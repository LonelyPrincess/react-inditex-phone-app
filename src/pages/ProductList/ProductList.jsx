import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Breadcrumb, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

import {
  fetchProductList,
} from '../../state/actions/product';
import {
  selectLoading,
  selectProductList,
} from '../../state/selectors/product';

import Loader from '../../components/Loader/Loader';
import ProductListItem from './components/ProductListItem/ProductListItem';

import {
  StyledProductList,
  StyledProductCount,
} from './ProductList.styled';

const ProductList = () => {
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
      <Breadcrumb>
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>
      <main>
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
            <ProductListItem
              key={product.id}
              product={product}
            />
          ))}
        </StyledProductList>
      </main>
    </>
  );
};

export default ProductList;
