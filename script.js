

function validateName() {                                             //if name field is empty will return error

      var name = document.getElementById('contact-name').value;

      if(name.length == 0) {                                  

        producePrompt('Name is required', 'name-error' , 'red')
        return false;

    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {                //checking if the name contains only letters and also asking for two inputs

        producePrompt('First and last name, please.','name-error', 'red');
        return false;

    }

    producePrompt('Valid', 'name-error', 'green');
    return true;

}

function validatePhone() {                                        //checks if phone field is not empty, no longer then 10 numbers, and anly numbers

  var phone = document.getElementById('contact-phone').value;

  if(phone.length == 0) {
      producePrompt('Phone number is required.', 'phone-error', 'red');
      return false;
  }

  if(phone.length != 10) {
      producePrompt('Include area code.', 'phone-error', 'red');
      return false;
  }

  if(!phone.match(/^[0-9]{10}$/)) {
      producePrompt('Only digits, please.' ,'phone-error', 'red');
      return false;
  }

  producePrompt('Valid', 'phone-error', 'green');
  return true;

}

function validateEmail () {                                      //checks if email is valid by making sure there is @ in the name and proper domain 

  var email = document.getElementById('contact-email').value;

  if(email.length == 0) {

    producePrompt('Email Invalid','email-error', 'red');
    return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

    producePrompt('Email Invalid', 'email-error', 'red');
    return false;

}

producePrompt('Valid', 'email-error', 'green');
return true;

}

function validateMessage() {                                           //checks if the message is at least 30 characters long
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    producePrompt(left + ' more characters required','message-error','red');
    return false;
}

producePrompt('Valid', 'message-error', 'green');
return true;

}

function validateForm() {                                                                //if any of above checks is not ok will not let submit the form
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    jsShow('submit-error');
    producePrompt('Please fix errors to submit.', 'submit-error', 'red');
    setTimeout(function(){jsHide('submit-error');}, 2000);
    return false;
}
else {

}
}

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;

}