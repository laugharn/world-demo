const config = {
  env: {
    ENV: process.env.ENV,
    SHA: process.env.SHA ? process.env.SHA : 'local',
  }
}

module.exports = config
