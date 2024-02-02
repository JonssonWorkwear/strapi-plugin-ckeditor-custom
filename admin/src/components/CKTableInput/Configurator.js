import ckeditor5Dll from 'ckeditor5/build/ckeditor5-dll.js';

import ckeditor5AutoformatDll from '@ckeditor/ckeditor5-autoformat/build/autoformat.js';
import ckeditor5BasicStylesDll from '@ckeditor/ckeditor5-basic-styles/build/basic-styles.js';
import ckeditor5EssentialsDll from '@ckeditor/ckeditor5-essentials/build/essentials.js';
import ckeditor5MarkdownDll from '@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm';
import ckeditor5PasteFromOfficeDll from '@ckeditor/ckeditor5-paste-from-office/build/paste-from-office.js';
import ckeditor5RemoveFormatDll from '@ckeditor/ckeditor5-remove-format/build/remove-format.js';
import ckeditor5SpecialCharactersDll from '@ckeditor/ckeditor5-special-characters/build/special-characters.js';
import ckeditor5TableDll from '@ckeditor/ckeditor5-table/build/table.js';
import ckeditor5WordCountDll from '@ckeditor/ckeditor5-word-count/build/word-count.js';
import ckeditor5MaximumLengthDll from '@reinmar/ckeditor5-maximum-length/build/maximum-length.js';

const CKEDITOR_BASE_CONFIG_FOR_PRESETS = {
  jonsson: {
    plugins: [
      window.CKEditor5.autoformat.Autoformat,
      window.CKEditor5.basicStyles.Bold,
      window.CKEditor5.basicStyles.Italic,
      window.CKEditor5.essentials.Essentials,
      window.CKEditor5.paragraph.Paragraph,
      window.CKEditor5.pasteFromOffice.PasteFromOffice,
      window.CKEditor5.table.Table,
      window.CKEditor5.table.TableToolbar,
      window.CKEditor5.table.TableColumnResize,
      window.CKEditor5.table.TableCaption,
      window.CKEditor5.wordCount.WordCount,
    ],
    toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'insertTable'],
    table: {
      contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
    },
  },
};

export default class Configurator {
  constructor(fieldConfig) {
    this.fieldConfig = fieldConfig;
  }

  getEditorConfig() {
    const config = this._getBaseConfig();

    const maxLength = this.fieldConfig.maxLength;
    const outputOption = this.fieldConfig.options.output;

    if (outputOption === 'Markdown') {
      config.plugins.push(window.CKEditor5.markdownGfm.Markdown);
    }

    if (maxLength) {
      config.plugins.push(window.CKEditor5.maximumLength.MaximumLength);

      config.maximumLength = {
        characters: maxLength,
      };
    }

    return config;
  }

  _getBaseConfig() {
    return CKEDITOR_BASE_CONFIG_FOR_PRESETS.jonsson;
  }
}
