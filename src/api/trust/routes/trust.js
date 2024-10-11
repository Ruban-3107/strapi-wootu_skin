'use strict';

/**
 * trust router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::trust.trust');
