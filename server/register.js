'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'CKEditor',
    plugin: 'ckeditor',
    type: 'richtext',
  });
  strapi.customFields.register({
    name: 'CKTable',
    plugin: 'ckeditor',
    type: 'richtext',
  });
};
