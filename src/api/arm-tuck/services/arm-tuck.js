'use strict';

/**
 * arm-tuck service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::arm-tuck.arm-tuck');
