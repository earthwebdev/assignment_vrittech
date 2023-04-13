let btnSubmit = document.getElementById('btnSubmit');
//localStorage.clear();
let studentnameArray= [];
if (btnSubmit != '') {
    btnSubmit.addEventListener('click', (event) =>{
        event.preventDefault();
        
        let studentName = document.getElementById('addStudent').value;
        console.log('btn clickecd '+ studentName);
        //studentnameObj.name = studentName;
        studentnameArray.push(studentName) ;
        localStorage.setItem('studentlistslocalstorage', JSON.stringify (studentnameArray));
        //sessionStorage.setItem('studentlistslocalstorage', JSON.stringify (studentnameArray));
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
//console.log(localStorage.getItem('studentlistslocalstorage'));
if( JSON.parse(localStorage.getItem('studentlistslocalstorage')  ) !== null){
    studentnameArray = JSON.parse(localStorage.getItem('studentlistslocalstorage') );
    //if(JSON.parse(sessionStorage.getItem('studentlistslocalstorage')  ) !== null)
        //studentnameArray = JSON.parse(sessionStorage.getItem('studentlistslocalstorage') )
    
    studentnameArray.forEach(studentName => {
        console.log(studentName);
        const lists = document.createElement('li');
        
        lists.className = 'student text-capitalize';

        // create a new text node and add it to the div
        const text = document.createTextNode(studentName);
        //console.log(text);
        lists.appendChild(text);
        document.querySelector("ul.studentList").appendChild(lists);
    });
    //console.log(text); 
}else{
    let studentLists = ['peter', 'sudeep', 'nawaraj'];
    studentLists.forEach(studentName => {
        console.log(studentName);
        const lists = document.createElement('li');
        
        lists.className = 'student text-capitalize';

        // create a new text node and add it to the div
        const text = document.createTextNode(studentName);
        //console.log(text);
        lists.appendChild(text);
        document.querySelector("ul.studentList").appendChild(lists);
    });
}