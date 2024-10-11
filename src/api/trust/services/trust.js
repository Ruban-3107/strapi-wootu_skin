'use strict';

/**
 * trust service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::trust.trust');
