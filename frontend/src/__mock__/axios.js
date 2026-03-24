const axios = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: { access_token: 'test' } })),
};

module.exports = axios;