'use strict';

/**
 * handling service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::handling.handling');
