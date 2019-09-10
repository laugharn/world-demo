const withTM = require('next-transpile-modules')

const config = {
  env: {
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    ENV: process.env.ENV,
    SHA: process.env.SHA ? process.env.SHA : 'local',
  },
  target: 'serverless',
  transpileModules: ['@amherst/core'],
}

module.exports = withTM(config)
