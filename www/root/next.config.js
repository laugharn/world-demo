const withTM = require('next-transpile-modules')

const config = {
  env: {
    ENV: process.env.ENV,
    SHA: process.env.SHA ? process.env.SHA : 'local',
  },
  target: 'serverless',
  transpileModules: ['@amherst/core'],
}

module.exports = withTM(config)
