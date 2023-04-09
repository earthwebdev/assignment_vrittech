let btnSubmit = document.getElementById('btnSubmit');

if (btnSubmit != '') {
    btnSubmit.addEventListener('click', (event) =>{
        event.preventDefault();
        
        let studentName = document.getElementById('addStudent').value;
        console.log('btn clickecd '+ studentName);

        //let studentli = document.createTextNode(studentName);
        
        const lists = document.createElement('li');
        
        lists.className = 'student text-capitalize';

        // create a new text node and add it to the div
        let text = document.createTextNode(studentName);
        lists.appendChild(text);
//console.log(document.querySelector("ul"));
//console   .log(document.querySelector("ul.studentList"));
        document.querySelector("ul.studentList").appendChild(lists);

    } );    
}