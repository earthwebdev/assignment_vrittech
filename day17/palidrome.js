let btnSubmit = document.getElementById('btnSubmit');

if (btnSubmit != '') {
    btnSubmit.addEventListener('click', (event) =>{
        event.preventDefault();
        console.log('string conversion method');
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

    arrayConversionMethod(numstr);
        //let studentli = document.createTextNode(studentName);
//console.log(document.querySelector("ul"));
//console.log(document.querySelector("p.palidrome"));

        //document.querySelector("p.palidrome").innerHTML('yes it is palidrome');

    } );    
}

function arrayConversionMethod(str){
    let numstr = str;
    if(str !== null){
        console.log('convert string to array and check the palidrom function ');
        let strToArray = str.split("");
        console.log(strToArray );
        strToArray.reverse();
        console.log(strToArray );
        let reverseStr = strToArray.join("");
        console.log(reverseStr + "  ==- "+ str );
        if(reverseStr === str){
            document.querySelector("p.palidromeArray").innerHTML = numstr + ' is the palidrome number/string';
        }
        else{
            document.querySelector("p.palidromeArray").innerHTML = numstr + ' is not the palidrome number/string';
        }
    }
   
}