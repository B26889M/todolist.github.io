// document.getElementById("registerform").addEventListener("submit", (event) => {
//     event.preventDefault();
//     const username = document.getElementById("username").value
//     const password = document.getElementById("password").value

    /*const registerBtn = document.querySelector("#registerButton")

    registerBtn.addEventListener('click', event => {
        event.preventDefault()
        register()
    })

    function register(){
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        const storedPass = localStorage.getItem(username)

        if(username == '' && password == ''){
            alert('Masukkan username dan password terlebih dahulu')
        } else if( username == '' || password == ''){
            alert('Masukkan username atau password terlebih dahulu')
        }

        if(username == storedPass){
            alert('Nama ini sudah digunakan')
        } else{
            localStorage.setItem(username, password)
            alert(`Berhasil register`)
            window.location.href = 'login.html'
        }
    }
    ini*/ 


//     const registerBtn = document.querySelector("#registerButton");

// registerBtn.addEventListener('click', event => {
//     event.preventDefault();
//     register();
// });

// function register() {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const storedPass = localStorage.getItem(username);

//     if (username === '' || password === '') {
//         alert('Masukkan username dan password terlebih dahulu');
//     } else if (username === '' || password === '') {
//         alert('Masukkan username atau password terlebih dahulu');
//     } else if (storedPass !== null) {
//         alert('Nama ini sudah digunakan');
//     } else {
//         localStorage.setItem(username, password);
//         alert(`Berhasil register`);
//         window.location.href = 'login.html';
//     }
// }



//     registerBtn.onclick = () => {
//         localStorage.setItem("username", username.value)
//         localStorage.setItem("password", password.value)

//         alert("User Succsessfully Registered!")
//         window.location.href = "login.html"

//         console.log("user registered!")
//         console.log(eachUsers)
//     }
// })
const registerButton = document.querySelector('#register-button');

registerButton.addEventListener('click', function(event) {
  event.preventDefault();
  register();
});

function register() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const storedUsername = localStorage.getItem(username);

  if(username == "" && password == "") {
    alert("Tolong masukan username dan password terlebih dahulu");
    return;
  } else if(username == "") {
    alert("Tolong masukan username");
    return;
  } else if(password == "") {
    alert("Tolong masukan password");
    return;
  }

  if(username == storedUsername) {
    alert("Username ini sudah digunakan. Silakan username lain");
  } else {
    localStorage.setItem(username, password);
    alert('Akun berhasil dibuat');
    window.location.href = "login.html";
  } 
}