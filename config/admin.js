module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd1234e878eece0db374f082afce8adcc'),
  },
});
