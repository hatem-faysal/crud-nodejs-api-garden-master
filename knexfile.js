// Update with your config settings.
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:postgres@localhost:5432/cjs-web-store'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-cjs-web-store'
  },
};