const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
// to select all the notes

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

// creating local storage

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
// on clicking the create notes it will create one variable and store the paragraph content in it
    let img = document.createElement("img");
    inputBox.className = "input-box";
    // on clicking that pop show up and will have the class name input-box
    inputBox.setAttribute("contenteditable", "true");
    // setting the attribute of the input-box
    img.src = "https://img.icons8.com/arcade/64/filled-trash.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="p"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})