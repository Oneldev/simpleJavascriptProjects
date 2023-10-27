# Onel Editor

Onel Editor is a feature-rich web-based text editor that allows users to enhance and format text content on web pages. It provides a user-friendly interface with various text formatting options.

## Features

- **Text Formatting**: Apply various text formatting styles, including bold, italic, underline, and strikethrough.
- **Superscript and Subscript**: Format text as superscript or subscript.
- **Ordered and Unordered Lists**: Create ordered (numbered) and unordered (bulleted) lists.
- **Undo and Redo**: Easily undo and redo text edits.
- **Text Alignment**: Align text to the left, center, right, or justify it.
- **Text Indentation**: Indent or outdent text.
- **Font and Font Size**: Choose from a list of fonts and font sizes.
- **Text Color**: Set the font color and highlight text.
- **Insert Images and Links**: Insert images and create hyperlinks within the text.

## Usage

1. Open the `index.html` file in your web browser to use the Onel Editor.
2. Select the text you want to format.
3. Click the respective button to apply the desired formatting to the selected text.

## Customizing Button Behaviors

You can customize the behavior of individual buttons by modifying the JavaScript code in `script.js`. For example, if you want to change the behavior of the "bold" button:

```javascript
// Customize behavior for the "bold" button
const selection = window.getSelection();
if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.style.fontWeight = 'bold';
    range.surroundContents(span);
}
