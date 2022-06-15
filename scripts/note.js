let title = document.getElementById("title");
let note = document.getElementById("note");
let addedTitle = document.getElementById('noteTitle');
let addedNote = document.getElementById("noteContent");
let createNote = document.getElementById('createNote');


let noteArray;
if (localStorage.note != null) {
    noteArray = JSON.parse(localStorage.note);

} else {
    noteArray = [];
}


function createNewNoteAction() {
    if (title.value != '' && note.value != '' && title.value.length <= 10 && note.value.length <= 20) {
        let dataNote = {
            title: title.value,
            note: note.value,
        };
        noteArray.push(dataNote);
        localStorage.setItem('note', JSON.stringify(noteArray));

    } else {
        alert('Please Enter a title with 10 letters max and Content with 20 letters max!')
    }
    note.value = "";
    title.value = '';
    showNoteAction();
}

function showNoteAction() {
    let containNoteArray = '';
    for (let i = 0; i < noteArray.length; i++) {
        containNoteArray += `
        
                <li>
                      <a href="">
                            <h2 id="noteTitle">${noteArray[i].title}</h2>
                             <button onclick="deleteNote(${i})" class="delete">x</button>
                             <p id="noteContent">${noteArray[i].note}</p>
                     </a>
             </li>
        `;
    }
    document.getElementById('noteslist').innerHTML = containNoteArray;

}
showNoteAction()

function deleteNote(i) {
    noteArray.splice(i, 1);
    localStorage.note = JSON.stringify(noteArray);
    showNoteAction();
}