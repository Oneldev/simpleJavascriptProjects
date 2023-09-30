// // functionality list
let optionsButtons = document.querySelectorAll(".options-button");
let advancedOptionsButtons = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");






// list of fontList
// creating an Array to store all fonts
let fontList = [
    "Arial",
    "Verdona",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
];






// creating initializer
// Initial Setting 
const initializer = () => {
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
for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);}

    // default fontSizeRef
    fontSizeRef.value = "3";
};









// Adding functionality to the buttons !!!!!!!!!!!!!!!!!!!
// main logic
const modifyText = (command, defaultUi, value) =>
{
    // execCommand executes command on selected text
    document.execCommand(command, defaultUi, value);
};

// for basic operations which dont need value parameter
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
    modifyText(button.id, false, null);
    });
});

// options that require value parameter like color
advancedOptionsButtons.forEach((button) => {
    button.addEventListener("change", () => {
        modifyText(button.id, false, button.value);
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


 
// link
linkButton.addEventListener("click", () => {
    let userLink = prompt("Enter a url");
    // if link has http pass directly else add https
    if (/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink);
    }
    else {
        userlink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);

    }

});











// click effect on buttons !!!!!!!!!!!!!!!!!!!!!!
// Highlight clicked butom
const highlighter = (className, needsRemoval) =>
{
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
                if(!alreadyActive) {
                    // highlight clicked button
                    button.classList.add("active");

                }
            }
                else {
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
window.onload = initializer();






// same function but different syntax
// // Function to initialize the editor buttons
// const initializeEditor = () => {
//     // Get references to various HTML elements
//     const optionsButtons = document.querySelectorAll(".options-button");
//     const advancedOptionsButton = document.querySelectorAll(".adv-option-button");
//     const fontName = document.getElementById("fontName");
//     const fontSizeRef = document.getElementById("fontSize");
//     const writingArea = document.getElementById("text-input");
//     const linkButton = document.getElementById("createLink");
//     const alignButtons = document.querySelectorAll(".align");
//     const spacingButtons = document.querySelectorAll(".spacing");
//     const formatButtons = document.querySelectorAll(".format");
//     const scriptButtons = document.querySelectorAll(".script");

//     // List of available fonts
//     const fontList = [
//         "Arial",
//         "Verdana",
//         "Times New Roman",
//         "Garamond",
//         "Georgia",
//         "Courier New",
//         "cursive",
//     ];

// //  conditions for putting on and putting off button
//     // Function to handle button highlighting
//     const highlighter = (buttons, needsRemoval) => {
//         buttons.forEach((button) => {
//             button.addEventListener("click", () => {
//                 // needs Removal = true means only one button
// //             / should be highlight and other would be normal
// // this condition states that let only one button be highlighted and other normal
//                 if (needsRemoval) {
//                     let alreadyActive = false;

//                     //if currently clicked button is already active
//                     if (button.classList.contains("active")) {
//                         alreadyActive = true;
//                     }

//                     //remove highlight from other buttons
//                     buttons.forEach((btn) => btn.classList.remove("active"));

//                    // highlight clicked button
//                     if (!alreadyActive) {
//                         button.classList.add("active");
//                     }

//                     // if other buttons can be highlighted
//                 } else {
//                     button.classList.toggle("active");
//                 }
//             });
//         });
//     };

//     // Initialize button highlighting
//     highlighter(alignButtons, true);
//     highlighter(spacingButtons, true);
//     highlighter(formatButtons, false);
//     highlighter(scriptButtons, true);
// };

// // Call the initializer function when the page is loaded
// window.addEventListener("load", initializeEditor);
