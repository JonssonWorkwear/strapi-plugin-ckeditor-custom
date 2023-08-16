# Rich text editor custom field (CKEditor 5)

![Rich text editor custom field preview. Features paragraphs, headins, lists, and links.](https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom/assets/22895284/b5712bb4-bef9-4a88-ad9b-b4e267a3ebcb)

This package provides a custom field for Strapi that lets us use and configure CKEditor. This is forked from the official plugin, provided by the [CKEditor team](https://ckeditor.com). It has been edited to support only paragraphs, headings, links, and lists. It has also been re-designed a bit to match the Strapi feeling. 

## ✨ Features

* **Predefined editor preset:** no configuration needed to support the paragraphs, headings, links, and lists.
* **Output selection:** supports both markdown and HTML outputs.
* **Custom max length validation:** length validation with visual indicators, based on the number of characters in the text.
* **Dark mode support:** because you like it.

## 🔧 Installation

Clone this repository in the Strapi directory.

```
git clone https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom.git --branch jonsson-theme src/plugins/strapi-plugin-ckeditor-custom
```

Add the plugin to the git submodules, inside `.gitmodules` file, so we can fetch its content after cloning.

```
[submodule "src/plugins/strapi-plugin-ckeditor-custom"] 
  path = src/plugins/strapi-plugin-ckeditor-custom
  url = https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom.git
  branch = jonsson-theme
```

Add the plugin to the yarn workspace, inside `./package.json` file, so we won't need to use `yarn` inside plugin itself.

```
"workspaces": ["./src/plugins/strapi-plugin-ckeditor-custom"]
```

Install dependencies.

```
yarn
```

Register the plugin so Strapi can use it. Inside `./config/plugins.js` file add an entry to it.

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

## 🪛 Development

In order to edit this plugin, make changes inside the plugin directory `./src/plugins/strapi-plugin-ckeditor-custom`.

Rebuild the project and start the server.

```
yarn build
yarn develop
```

Or perhaps use the `--watch-admin` flag to toggle hot reloading of the admin panel.

```
yarn develop --watch-admin
```

All the changes are commited and pushed to _this_ repository, independently from the Strapi directory. If you are cloning again (or deploying) the Strapi project cotaining this plugin, make sure to fetch the content of the submodules.

```
git submodule update --init --recursive
```

## 📝 Usage

The plugin is made to be used instead of Strapi's default **Rich text field**. 

When adding a new field to a content type, select **CUSTOM** (instead of **DEAFULT**), then select **Rich text editor**.

![Rich text editor custom field preview inside the content type builder](https://github.com/JonssonWorkwear/strapi-plugin-ckeditor-custom/assets/22895284/45853b80-0aae-4f9a-ab3d-8c20cebba738)
