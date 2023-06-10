const form = document.querySelector('.form');
const submitButton = document.querySelector('.submit');
const spinner = document.querySelector('.loader');


    submitButton.addEventListener('click', (event) =>{
      event.preventDefault();
      validateForm();
    }) 


    function validateForm() {
      let login = document.getElementById("login").value;
      let userpass = document.getElementById("userpass").value;
      
      if (login.length === 0 || userpass.length === 0) {
        console.log( "invalid value" )
        } if (login.length > 0 && userpass.length > 0){
          console.log( `'name:' ${login} 'password:' ${userpass}`)
        form.classList.add('hide')  
        showSpinner();
        }
      }
   

    function showSpinner() {
        spinner.classList.add('show');   
        setTimeout(() => {
          spinner.classList.remove('show');  
        }, 2000);
        location.href = 'profile_page.html';
    };