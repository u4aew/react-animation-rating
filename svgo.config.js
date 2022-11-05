module.exports = {
  plugins: [
    'removeTitle',
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
  ],
};
