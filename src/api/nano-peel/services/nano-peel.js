'use strict';

/**
 * nano-peel service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nano-peel.nano-peel');
