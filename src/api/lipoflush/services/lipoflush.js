'use strict';

/**
 * lipoflush service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lipoflush.lipoflush');
