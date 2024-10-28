'use strict';

/**
 * glutathione service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::glutathione.glutathione');
