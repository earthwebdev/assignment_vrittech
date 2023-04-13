let btnSubmit = document.getElementById('btnSubmit');
let studentnameArray= [];
if (btnSubmit !==  null) {
    btnSubmit.addEventListener('click', (event) =>{
        event.preventDefault();
        
        let fullname = document.getElementById('fullname').value;
        let phoneNumber = document.getElementById('phoneNumber').value;
        let dateOfBirth = document.getElementById('dateOfBirth').value;
        let email = document.getElementById('email').value;
        let inputPwd = document.getElementById('inputPwd').value;
        const messageError = 'Please Enter the required field.';
        let count = 0;
        if(fullname === undefined || fullname === null || fullname == ''){
            const fullNameError = document.querySelector('.fullname-error');
            console.log(fullNameError);
            fullNameError.innerHTML = messageError;
            fullNameError.className = 'fullname-error bg-danger text-white';
            count++;
        }

        if(phoneNumber === undefined || phoneNumber === null || phoneNumber == ''){
            const phoneNumberError = document.querySelector('.phoneNumber-error');
            phoneNumberError.innerHTML = messageError;
            phoneNumberError.className = 'phoneNumber-error bg-danger text-white';
            count++;
        }

        if(dateOfBirth === undefined || dateOfBirth === null || dateOfBirth == ''){
            const dateOfBirthError = document.querySelector('.dateOfBirth-error');
            dateOfBirthError.innerHTML = messageError;
            dateOfBirthError.className = 'dateOfBirth-error bg-danger text-white';
            count++;
        }

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
            postObj.fullname = fullname;
            postObj.phoneNumber = phoneNumber;
            postObj.dateOfBirth = dateOfBirth;
            postObj.email = email;
            postObj.inputPwd = inputPwd;
            console.log(postObj);
        }
        
    });
}