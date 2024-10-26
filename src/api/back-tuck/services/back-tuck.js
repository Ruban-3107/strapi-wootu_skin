'use strict';

/**
 * back-tuck service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::back-tuck.back-tuck');
