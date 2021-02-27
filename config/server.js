module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd0756ecdb45ab96a4b38376b6a0847d8'),
    },
    cron: {
      enabled: false,
    },
    admin: {
      path: '/admin',
      serveAdminPanel: true,
      build: {
        backend: 'https://https://minerger-api.herokuapp.com'
      }
    }
  },
});
