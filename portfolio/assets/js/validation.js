var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');

function validateName()
{
    var name = document.getElementById('name').value;
    if(name.length==0)
    {
        nameError.innerHTML= '*name is required';
        return false;
    }
    nameError.innerHTML='';
    return true;
}

function validateEmail()
{
    var email = document.getElementById('email').value;
    if(email.length==0)
    {
        emailError.innerHTML= '*email is required';
        return false;
    }
    else {
    emailError.innerHTML='';
    return true;
    }
}

function validateMessage()
{
    var message= document.getElementById('comment').value;
    if(message.length==0)
    {
        messageError.innerHTML='*message is required';
        return false;
    }
    emailError.innerHTML='';
    return true;
}
function validateForm()
{
    var isNameValid=validateName();
    var isEmailValid=validateEmail()
    var isMessageValid=validateMessage();

    if(!isNameValid||!isEmailValid||!isMessageValid)
    {
        return false;
    }
    else {
    return true;
    }
}