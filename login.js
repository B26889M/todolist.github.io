/*document.getElementById("loginform").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const loginBtn = document.querySelector("#loginBtn")

    const storedUsername = localStorage.getItem("username")
    const storedPassword = localStorage.getItem("password")

    loginBtn.onclick = () => {
        console.log("logged in")
        if (username.value === storedUsername && password.value === storedPassword) {
            alert(`Login Succses. Welcome, ${username.value}!`)
            window.location.href = "to.html"
        } else {
            alert("Sorry! Your credentials doesn't match the database, please try again")
        }
    }
})*/

// function callLogin() {
//     login();
// }

// Fungsi login
// function login() {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;

//     const storedUsername = localStorage.getItem("username");
//     const storedPassword = localStorage.getItem("password");

//     if (username === '' || password === '') {
//         alert('Masukkan username dan password terlebih dahulu');
//     } else if (username === '' || password === '') {
//         alert('Masukkan username atau password terlebih dahulu');
//     } else if (username === storedUsername && password === storedPassword) {
//         alert(`Login Success. Welcome, ${username}!`);
//         window.location.href = "to.html";
//     } else {
//         alert("Sorry! Your credentials don't match the database. Please try again.");
//     }
// }
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-Form');
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const username = document.querySelector('.username').value;
      const password = document.querySelector('.password').value;
  
      const storedPassword = localStorage.getItem(username);
  
      if (storedPassword && storedPassword == password) {
        alert(`Login berhasil, selamat datang ${username}`);
        window.location.href = 'index.html'; 
      } else {     
          alert('Nama pengguna atau kata sandi salah');
        } 
  
    });
  });