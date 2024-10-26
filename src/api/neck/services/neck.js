'use strict';

/**
 * neck service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::neck.neck');
