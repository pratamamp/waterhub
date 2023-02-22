'use strict';

/**
 * handling router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::handling.handling');
