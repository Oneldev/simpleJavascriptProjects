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

You can customize the behavior of individual buttons by modifying the JavaScript code in `script.js`. For example, if you want to change the behavior for the "insertimage" button:

```javascript
// Customize behavior for the "insertimage" button
let insertImageButton = document.getElementById("insertImage");

insertImageButton.addEventListener("click", () => {
    // Prompt the user to enter the image URL
    let imageUrl = prompt("Enter the image URL:");

    // Check if the user entered a URL
    if (imageUrl) {
        // Create an image element
        let image = document.createElement("img");
        image.src = imageUrl;

        // Insert the image at the current selection in the editor
        document.execCommand("insertImage", false, imageUrl);
    }
});
