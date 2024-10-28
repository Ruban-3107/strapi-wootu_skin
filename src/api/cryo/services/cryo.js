'use strict';

/**
 * cryo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cryo.cryo');
