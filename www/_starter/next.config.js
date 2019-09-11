const config = {
  assetPrefix: '/starter',
  env: {
    APP: 'starter',
    ENV: process.env.ENV,
    SHA: process.env.SHA ? process.env.SHA : 'local',
  },
  target: 'serverless',
}

module.exports = config
