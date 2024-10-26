'use strict';

/**
 * nm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nm.nm');
