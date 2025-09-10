// This file automatically mocks the 'lib/api.js' module.

// Import the original module's functions to mock them.
const originalModule = jest.requireActual("../api.js");

// Create a jest mock function that will be used by default.
const mockFetchAPI = jest.fn((path) => {
  // You can set a default successful response here.
  // This will be the base behavior for most of your tests.
  console.log(`Mocking fetchAPI for path: ${path}`);
  return Promise.resolve({
    data: [],
  });
});

// Export the mock function to replace the original.
module.exports = {
  ...originalModule, // Export other original exports if you have any
  fetchAPI: mockFetchAPI,
};
