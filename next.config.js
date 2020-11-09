const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  const env = {
    CUSTOM_KEY: (() => {
      if (isDev) return 'DevKey1234';
      if (isProd) {
        return 'ProdKey1234';
      }
      if (isStaging) return 'StagKey1234';
      return 'customKey:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
    APPINSIGHTS_KEY: 'f9d5dfd1-f9a6-47c5-a8a0-68570af2abaa'
  };

  // next.config.js object
  return {
    env
  };
};
