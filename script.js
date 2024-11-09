// // connect script fil to html

// //<script src ="script.js"></script>

// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");

// let notes = document.querySelectorAll(".input-box");

// function showNotes(){
//     notesContainer.innerHTML = localStorage.getItem("notes"); 
//     //if notes is in the browser, it will be displayed
// }
// showNotes();

// //updates data in browser
// function updateStorage(){
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }


// createBtn.addEventListener("click",
//     ()=>{

//         let inputBox = document.createElement("p");
//         let img = document.createElement("img");
//         inputBox.className = "input-box";
//         inputBox.setAttribute("contenteditable", "true");
//         img.src = "images/delete.png";
//         notesContainer.appendChild(inputBox).appendChild(img);
//     }
// )

// notesContainer.addEventListener("click", function(e){
//         if(e.target.tagName === "IMG"){
//             e.target.parentElement.remove();
//             updateStorage();
//         }
//         else if(e.target.tagName === "p"){
//             notes = document.querySelectorAll(".input-box");
//             notes.forEach(note =>{
//                 note.onkeyup = function(){
//                     updateStorage(); //update storage whenever you type sth new
//                 }
//             })
//         }

//     }
// )

// document.addEventListener("keydown", event =>{
//     if(event.key === "Enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }

// })



const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Function to display notes from localStorage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || ""; 
}

// Display notes on load
showNotes();

// Function to update localStorage with current notes content
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener to create a new note
createBtn.addEventListener("click", () => {
    const inputBox = document.createElement("p");
    const img = document.createElement("img");
    
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.classList.add("delete-icon");

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    // Call updateStorage to save the new note
    updateStorage();
});

// Event delegation for delete and content change
notesContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-icon")) {
        // Remove the note and update storage
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Event listener to update storage when note content changes
notesContainer.addEventListener("input", updateStorage);

// Prevent Enter key from adding a new line, instead insert a line break
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
