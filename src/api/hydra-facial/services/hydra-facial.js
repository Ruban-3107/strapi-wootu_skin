'use strict';

/**
 * hydra-facial service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hydra-facial.hydra-facial');
