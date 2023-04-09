let btnSubmit = document.getElementById('btnSubmit');

if (btnSubmit != '') {
    btnSubmit.addEventListener('click', (event) =>{
        event.preventDefault();
        
        let numstr = document.getElementById('numstr').value;
        console.log('btn clickecd '+ numstr);
        let revname = '';
        for(let i = numstr.length-1; i >= 0 ; i--)
        {
            //console.log(numstr[i], '222');
            revname += numstr[i];

        }
    if(revname === numstr){
        document.querySelector("p.palidrome").innerHTML = numstr + ' is the palidrome number/string';
    }
    else{
        document.querySelector("p.palidrome").innerHTML = numstr + ' is not the palidrome number/string';
    }
        //let studentli = document.createTextNode(studentName);
//console.log(document.querySelector("ul"));
//console.log(document.querySelector("p.palidrome"));

        //document.querySelector("p.palidrome").innerHTML('yes it is palidrome');

    } );    
}