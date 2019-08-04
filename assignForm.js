// this is to create form that takes more than 4 usn and 7 password
function validateForm(){
    let formData=document.forms[0];
    
    let userName=formData.uname.value;
    let passWord= formData.psw.value;

    if(userName.length>4){
        // formData.usn.style.display=true;
        document.getElementById(usn).style.display=true;
    }
    else if(passWord.length>7){
        document.getElementById(pass).style.display=true;
    }


    if(userName.length>4 && passWord.length>7 ){
        // console.log('successfull');
        formData.uname.style.border='2px solid green';
        formData.psw.style.border='2px solid green';
        formData.loginSubmit.disabled=false;
        // document.getElementById(usn).style.display=true;
    }

    else{
        formData.uname.style.border='4px solid red';
        formData.psw.style.border='4px solid red';
        formData.loginSubmit.disabled=true;
        let usn1= document.getElementsByName('usn');
        console.log(usn1);
        // formData.usn.style=false;
        // document.getElementById(pass).style.display=true;
    }

    
    
}

