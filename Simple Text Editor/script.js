// Functionality list
let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let textInput = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
let outputDiv = document.getElementById("output");

// list of fontList
// creating an Array to store all fonts
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "Cursive",
];

// creating initializer
// Initial Setting 
const intializer = () => {
    // function calls for highlighting buttons
    // No highlighting for link, unlink, lists, undo, redo
    // since they are one time operations
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  // create options for font names
  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });

  // fontsize allows only till 7
  for (let i = 1; i < 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  // default fontSizeRef
  fontSizeRef.value = 3;
};

// Adding functionality to the buttons !!!!!!!!!!!!!!!!!!!
// main logic
const modifyText = (command, defaultUi, value) => {
    // execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

// for basic operations which dont need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
  });
});


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

// options that require value parameter like color
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

// link
linkButton.addEventListener("click", () => {
  let userLink = prompt("Enter a URL?");
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = "http://" + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});


// Function to add click event to the generated links
function makeLinksClickable() {
    let links = textInput.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('href');
        if (url && url.startsWith("http")) {
          window.open(url, '_blank');
        }
      });
    });
  }
  
  // Event listener for when the content-editable area changes
  textInput.addEventListener("input", function () {
    // Get the text from the content-editable area
    let text = textInput.innerHTML;
  
    // Make the generated links clickable
    makeLinksClickable();
  });
  
// click effect on buttons !!!!!!!!!!!!!!!!!!!!!!
// Highlight clicked butom
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
         // needs Removal = true means only one button
            // should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;

        // if currently clicked button is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

         // remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
         // if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = intializer();
