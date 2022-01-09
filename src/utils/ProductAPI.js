import { httpRequest } from './AjaxHelper';

const apiBaseUrl = 'https://front-test-api.herokuapp.com/api';
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

/**
 *  API is misconfigured and doesn't return the right CORS access headers,
 * so we will use a proxy to be able to perform the requests outside of
 * Cypress.
 *
 *  This method will check whether we're on Cypress or not, and add the CORS
 * proxy server URL before the real API base path in case we're outside the
 * test environment.
 *
 * @returns {string} Base path for the API requests.
 */
const getApiBaseUrl = () => {
  if (!window.Cypress) {
    return `${corsProxyUrl}${apiBaseUrl}`;
  }

  return apiBaseUrl;
};

/**
 *  Trigger HTTP request to obtain list of available products.
 *
 * @returns {Promise} Promise object with list of products.
 */
export const fetchProductList = () => (
  httpRequest.get(`${getApiBaseUrl()}/product`)
);

/**
 *  Trigger HTTP request to obtain detailed information on the selected
 * product.
 *
 * @param {string} productId - Id of the product to fetch.
 * @returns {Promise} Promise object with information on a product.
 */
export const fetchProductDetails = (productId) => (
  httpRequest.get(`${getApiBaseUrl()}/product/${productId}`)
);

/**
 * Trigger HTTP request to add an item to the shopping cart.
 *
 * @param {string} productId - Id of the product to add to the cart.
 * @param {number} colorCode - Code identifying the desired color.
 * @param {number} storageCode - Code identifying the desired storage capacity.
 * @returns {Promise} Promise object with number of items in cart.
 */
export const addProductToCart = ({ productId, colorCode, storageCode }) => (
  httpRequest.post(`${getApiBaseUrl()}/cart`, {
    id: productId,
    colorCode,
    storageCode,
  })
);
