'use strict';

/**
 * top-concern service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-concern.top-concern');
