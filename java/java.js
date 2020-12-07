function darktheme() {
    let dark_mode = document.querySelector(".dark");
    dark_mode.innerText = 'light theme'
    document.querySelector(".nav").classList.add("dark-mode")
    document.querySelector(".main").classList.add("dark-mode")
    dark_mode.removeEventListener('click', darktheme)
    dark_mode.addEventListener('click', light)
}

function light() {
    let light_mode = document.querySelector(".dark");
    light_mode.innerText = 'dark theme'
    document.querySelector(".nav").classList.remove("dark-mode")
    document.querySelector(".main").classList.remove("dark-mode")
    light_mode.removeEventListener('click', light)
    light_mode.addEventListener('click', darktheme)
    
}
function show(){
    let newnote = document.querySelector('.new');
    let message = document.querySelector('.message');
    let save = document.querySelector('.save');
    let cancel = document.querySelector('.cancel');
    message.style.display = ''
    save.style.display = ''
    cancel.style.display = ''
    newnote.removeEventListener('click', show )
    cancel.addEventListener('click', hide )
    

}
function hide() {
    let newnote = document.querySelector('.new');
    let message = document.querySelector('.message');
    let save = document.querySelector('.save');
    let cancel = document.querySelector('.cancel');
    message.style.display = 'none'
    save.style.display = 'none'
    cancel.style.display = 'none'
    cancel.removeEventListener('click', hide )
    newnote.addEventListener('click', show )
}


let notesArray = [{
    title: 'note one', body: 'some text 1'
},

{
    title: 'note two', body: 'some text 2'
}];

function list_add(){
    body = ''
    textarea = document.querySelector('.message')
    array = document.querySelector('nav ul')
    text = textarea.value
    list = text.split('\n')
    title = list[0]
    for (let i = 1; i < list.length; ++i){
        body += list[i]
    }
    notesArray.push({
        title:title, body:body
    }) 

    item_list= document.createElement('li');
    item_list.innerText = title;
    array.appendChild(item_list)

}


function display_object(c){
    for (let notes of notesArray) {
        if (c.target.innerText === notes.title) {
            note_showcase = document.querySelector('.message');
            note_showcase.value = notes.title + '\n' + notes.body;
        }
    }
}
let dark_mode = document.querySelector(".dark");
dark_mode.addEventListener('click', darktheme)

let cancel = document.querySelector(".cancel");
cancel.addEventListener('click', hide)

let notes = document.querySelector('.save')
notes.addEventListener('click',list_add)

let display_notes = document.querySelector('ul')
display_notes.addEventListener('click', display_object)