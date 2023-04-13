let btnSubmit = document.getElementById('btnSubmit');
let studentnameArray= [];
if (btnSubmit !==  null) {
    btnSubmit.addEventListener('click', (event) =>{
        event.preventDefault();
        
        let email = document.getElementById('email').value;
        let inputPwd = document.getElementById('inputPwd').value;
        const messageError = 'Please Enter the required field.';
        let count = 0;

        if(email === undefined || email === null || email == ''){
            const emailError = document.querySelector('.email-error');
            emailError.innerHTML = messageError;
            emailError.className = 'email-error bg-danger text-white';
            count++;
        }

        if(inputPwd === undefined || inputPwd === null || inputPwd == ''){
            const inputPwdError = document.querySelector('.inputPwd-error');
            inputPwdError.innerHTML = messageError;
            inputPwdError.className = 'inputPwd-error bg-danger text-white';
            count++;
        }

        if(count > 0)
        {
            alert('Please check the error');
        }
        else{
            let postObj = {};
            postObj.email = email;
            postObj.inputPwd = inputPwd;
            console.log(postObj);
        }
        
    });
}