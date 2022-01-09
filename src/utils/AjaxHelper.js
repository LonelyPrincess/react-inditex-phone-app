const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

/**
 * In order to handler errors within the application, this checks whether the
 * obtained response returned an OK or not. In case it didn't (the request
 * returned a 404 error, for example), this method will throw an exception to
 * ensure the `catch` method of the promise triggers.
 * @throws Error exception if the request returned an error.
 * @return Response converted to json format.
 */
const handleResponse = (res) => {
  if (!res.ok) {
    throw new Error({
      status: res.status,
      message: res.statusText,
    });
  }

  return res.json();
};

/**
 * Fetch json data from the specified url.
 * @param {string} url
 * @param {options} options - Options for the request to perform, which may
 *  include the request method or the data to send along with it.
 * @returns {Promise} Promise object with server's response in json format.
 */
const requestJson = (url, options) => (
  fetch(url, { headers, ...options })
    .then(handleResponse));

/**
 *  This object defines a set of methods to perform different types of HTTP
 * requests, acting as a shortcut to the `requestJSON` method defined above.
 */
export const httpRequest = {
  get: (url) => requestJson(url),
  post: (url, data) => requestJson(url, {
    method: 'post',
    body: JSON.stringify(data),
  }),
};
