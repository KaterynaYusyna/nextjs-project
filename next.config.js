const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ['lh3.googleusercontent.com'],
        formats: ['image/avif', 'image/webp'],
      },
      env: {
        NEXTAUTH_URL: 'http://localhost:3000',
        DB_USERNAME: 'yusinakatya',
        DB_PASSWORD: 'dDDct0GlL1dUqpOn',
        DB_CLUSTER: 'cluster0',
        DB: 'my-site-dev',
        GOOGLE_CLIENT_ID:
          '999428495684-t67686qdk3e5gdkm7n5s8u73feescirn.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '',
      },
    };
  }

  return {
    env: {
      images: {
        domains: ['lh3.googleusercontent.com'],
        formats: ['image/avif', 'image/webp'],
      },
      NEXTAUTH_URL: 'http://localhost:3000',
      DB_USERNAME: 'yusinakatya',
      DB_PASSWORD: 'dDDct0GlL1dUqpOn',
      DB_CLUSTER: 'cluster0',
      DB: 'my-site-dev',
      GOOGLE_CLIENT_ID:
        '999428495684-t67686qdk3e5gdkm7n5s8u73feescirn.apps.googleusercontent.com',
      GOOGLE_CLIENT_SECRET: '',
    },
  };
};
