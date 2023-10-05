# Rich text editor custom field (CKEditor 5)

![Rich text editor custom field preview. Features paragraphs, headins, lists, and links.](https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom/assets/22895284/b5712bb4-bef9-4a88-ad9b-b4e267a3ebcb)

This package provides a custom field for Strapi that lets us use and configure CKEditor. This is forked from the official plugin, provided by the [CKEditor team](https://ckeditor.com). It has been edited to support only paragraphs, headings, links, and lists. It has also been re-designed a bit to match the Strapi feeling. 

<div align="center">
  <a href="https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom/actions/workflows/release.yml">
    <img src="https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom/actions/workflows/release.yml/badge.svg?branch=release" alt="Release status">
  </a>
  <a href="https://www.npmjs.com/package/@jonssonworkwear/strapi-plugin-ckeditor-custom">
    <img alt="npm (scoped)" src="https://img.shields.io/npm/v/%40jonssonworkwear/strapi-plugin-ckeditor-custom?logo=npm&label=%40jonssonworkwear%2Fstrapi-plugin-ckeditor-custom&color=%234845F5">
  </a>
</div>

## 🏖️ Features

* **Predefined editor preset:** no configuration needed to support the paragraphs, headings, links, and lists.
* **Output selection:** supports both markdown and HTML outputs.
* **Custom max length validation:** length validation with visual indicators, based on the number of characters in the text.
* **Dark mode support:** because you like it.

## 🔧 Installation

To install this plugin simply run this command in the Strapi project:

```
yarn add @jonssonworkwear/strapi-plugin-ckeditor-custom
```

### Content-type builder 

The plugin is made to be used instead of Strapi's default **Rich text field**. 

When adding a new field to a content type, select **CUSTOM** (instead of **DEAFULT**), then select **Rich text editor**.

![Rich text editor custom field preview inside the content type builder](https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom/assets/22895284/45853b80-0aae-4f9a-ab3d-8c20cebba738)

Inside a content-type, we can use the following schema:

```json
"body": {
  "type": "customField",
  "options": {
    "preset": "jonsson",
    "output": "Markdown"
  },
  "customField": "plugin::ckeditor.CKEditor"
}
```

## ✨ Usage

Start writing rich text content inside the custom editor. You will be able to use only the following formatting options:

- Paragraphs
- Headings – h2, h3, h4
- Lists – unordered, ordered 
- Links

The plugin will export the content in Markdown format.

## 🪛 Development

Clone this repository in the Strapi directory.

```
git clone https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom.git --branch jonsson-theme src/plugins/strapi-plugin-ckeditor-custom
```

Add the plugin to the yarn workspace, inside `./package.json` file, so we won't need to use `yarn` inside plugin itself.

```
"workspaces": ["./src/plugins/strapi-plugin-ckeditor-custom"]
```

Install dependencies.

```
yarn
```

Register the plugin so Strapi can use it. Inside `./config/plugins.js` file add an entry:

```
module.exports = ({ env }) => ({
  ckeditor: {
    enabled: true,
    resolve: "./src/plugins/strapi-plugin-ckeditor-custom"
  },
});
```

Rebuild the project and start the server.

```
yarn build
yarn develop
```

Or perhaps use the `--watch-admin` flag to toggle hot reloading of the admin panel.

```
yarn develop --watch-admin
```

Make changes.

### Release changes

All the changes are commited and pushed to _this_ repository (or its forks), independently from the Strapi directory. The changes on the `release` branch will be published in the `@jonssonworkwear/strapi-plugin-ckeditor-custom` package. If there is a new release published, plugins inside the Strapi project might need their version bumped.
