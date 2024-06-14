const input = document.querySelector(".input");
const nama = document.querySelector(".todo-input");
const date = document.querySelector(".todo-date");
const time = document.querySelector(".todo-time");
const submit = document.querySelector(".add-button")
const listContainer = document.querySelector(".todo-container")

const todoList = JSON.parse(localStorage.getItem('data')) || [{
    nama: 'Selamat datang di todolist. Ini adalah bagian tulisan',
    date: 'Bagian tanggal',
    time: 'Bagian waktu'
  }]
  
  let todoListHTML = ''
  
  render()
  
  function render() {
    let todoListHTML = ''
    todoList.forEach((todoObject, index) => {
     const { nama, date, time } = todoObject
     const html = `
     <div class="name">${nama}</div>
     <div class="date">${date}</div>
     <div class="time">${time}</div>
     <button class="delete" onClick=deleteData(${index})>Delete</button>
     `;
     todoListHTML += html
    })
    document.querySelector('.todos-container').innerHTML = todoListHTML
  }
  
  document.querySelector('.add-button').addEventListener('click', () => {
    addTask()
  })

  document.querySelector('.delete').addEventListener('click', () => {
    deleteData()
  })
  
  function addTask() {
    const inputName = document.querySelector('.todo-input')
    const nama = inputName.value
  
    const inputDate = document.querySelector('.todo-date')
    const date = inputDate.value

    const inputTime = document.querySelector('.todo-time')
    const time = inputTime.value
  
    todoList.push({
      nama,
      date,
      time
    })
  
    inputName.value = ''
    render()
    saveData()
  }

  function saveData(){
    localStorage.setItem('data', JSON.stringify(todoList))
  }

  function deleteData(index){
    todoList.splice(index, 1)
    console.log("delete")
    localStorage.setItem("data", JSON.stringify(todoList))
    render()
  }



  // function onKey(event) {
  //   if(event.key === 'Enter'){
  //     addTodo()
  //   }
  // }
  
  // const todoList = [{
  //   name: 'make dinner',
  //   dueDate: '2020-1-20'
  // }];  
  
  // renderTodoList()
  
  // function renderTodoList() {
  //   let todoListHTML =  ''
  
  //   todoList.forEach((todoObject) => {
  //       const { name, dueDate } = todoObject
  //       const html = `
  //       <div class="name">${nama}</div>
  //       <div class="date">${date}</div>
  //       <div class="time">${time}</div>
  //       <button class="delete-todo-btn js-delete-todo-btn">Delete</button>`; 
  //       todoListHTML += html
  //   })
  //   document.querySelector('.todo-input').innerHTML = todoListHTML
  
  //   removeBtn()
  // }
  
  // function removeBtn() {
  //   document.querySelectorAll('.js-delete-todo-btn')
  //     .forEach((deleteBtn, index) => {
  //       deleteBtn.addEventListener('click', () => {
  //         todoList.splice(index, 1);
  //         renderTodoList();
  //       })
  //     })
  // }
  
  // document.querySelector('.add-button')
  //   .addEventListener('click', () => {
  //     addTodo()
  //   });
  
    
  // function addTodo() {  
  //   const inputElement = document .querySelector('.todo-input');
  //   const name = inputElement.value 
  
  //   const dateInputElem = document.querySelector('.todo-date')
  //   const dueDate = dateInputElem.value;
  
  //   todoList.push({
  //     name,
  //     dueDate 
  //   })
  
  //   inputElement.value = ''; //Menreset textInput ketika sudah di add dengan empty string
  //   renderTodoList()
  // } 