'use strict';

/**
 * yellow-peel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::yellow-peel.yellow-peel');
