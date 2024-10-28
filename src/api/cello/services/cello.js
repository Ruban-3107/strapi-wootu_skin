'use strict';

/**
 * cello service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cello.cello');
