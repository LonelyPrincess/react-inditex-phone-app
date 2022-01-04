import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

import {
  fetchProductDetails,
  selectLoading,
  selectProductDetails,
} from '../../state/productSlice';

import Loader from '../../components/Loader/Loader';

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const productDetails = useSelector(selectProductDetails);

  useEffect(() => {
    if (!productDetails || productDetails.id !== productId) {
      dispatch(fetchProductDetails(productId));
    }
  }, [productId]);

  if (isLoading) {
    return (
      <Loader
        icon={faMobileAlt}
        message="Loading product details..."
      />
    );
  }

  return !productDetails ? null : (
    <div>
      TODO: info on product
      {productDetails.id}
    </div>
  );
};

export default ProductDetails;
