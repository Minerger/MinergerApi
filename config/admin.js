module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '24bc94a7e0331a770e04ebc786ffb623'),
  },
});
