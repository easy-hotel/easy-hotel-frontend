const proxy = [
    {
      context: '/',
      target: 'http://localhost:5000',
      pathRewrite: {'^/' : ''}
    }
  ];
  module.exports = proxy;