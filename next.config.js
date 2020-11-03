const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require('next/constants');

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

  const env = {
    CUSTOM_KEY: (() => {
      if (isDev) return 'DevKey1234';
      if (isProd) {
        return 'ProdKey1234';
      }
      if (isStaging) return 'StagKey1234';
      return 'customKey:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })()
  };

  // next.config.js object
  return {
    env
  };
};
