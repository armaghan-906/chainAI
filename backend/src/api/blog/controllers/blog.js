'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async create(ctx) {
    // Let Strapi handle the creation
    const { data, meta } = await super.create(ctx);
    return { data, meta };
  },

  async update(ctx) {
    // Let Strapi handle the update
    const { data, meta } = await super.update(ctx);
    return { data, meta };
  }
}));
