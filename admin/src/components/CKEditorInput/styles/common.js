import { css } from "styled-components";

export const style = css`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;

    padding-block: 0.2rem;
    padding: 16px;

    font-size: 0.75rem;

    border-width: 1px;
    border-color: rgb(220, 220, 228);
    border-style: solid;
    border-radius: 4px;

    border-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    background: rgb(246, 246, 249);
    color: rgb(102, 102, 135);
  }

  .ck-editor__main {
    --ck-font-face: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);
    border: 0;

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 2em;
      margin-bottom: 0.6em;
      font-weight: 600;
    }

    h2 {
      font-size: 1.68em;
      margin-bottom: 0.4em;
      font-weight: 600;
    }

    h3 {
      font-size: 1.36em;
      margin-bottom: 0.2em;
      font-weight: 600;
    }

    h4 {
      font-size: 1.15em;
      margin-bottom: 0.1em;
      font-weight: 600;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    blockquote {
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
      font-size: 0.875rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    // higher specificity needed
    &.ck-editor__editable:not(.ck-focused) { {
      line-height: initial;
      min-height: 12.5rem;

      border-width: 1px;
      border-color: rgb(220, 220, 228);
      border-style: solid;

      border-top: 0;
      border-bottom: 0;
      border-radius: 0;
    }
  }
`;
