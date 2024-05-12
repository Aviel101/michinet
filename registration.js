/* 
    Full Name: Aviel Khotyanov
    ID: 326131705
*/

function password_check() {
    let all_fields = document.getElementsByClassName("field__box");
    let field_dict = {
        "first-name": all_fields[0],
        "last-name": all_fields[1],
        "telephone": all_fields[2],
        "email": all_fields[3],
        "password": all_fields[4],
        "repeat-password": all_fields[5]
    };

    clear_errors(all_fields);
    clear_success();
    // check that nothing is empty
    for(let field of all_fields) {
        if(field.value === '') {
            show_error(field);
            return;
        }
    }
    
    // check that password is at least 8 characters
    if (field_dict.password.value.length < 8) {
        show_error(field_dict.password, "password must be at least 8 or more chars");
        return;
    }

    // check that password is same as repeated password
    if (field_dict.password.value !== field_dict["repeat-password"].value) {
        show_error(field_dict["repeat-password"], "Password is not the same");
        return;
    }

    // all is right
    console.log("all is cool!");
    complete_register(document.getElementsByClassName("button__submit")[0]);
}

/*
shows an error text below the given field
*/
function show_error(field, text='') {
    // check that the problem is known
    if(text === '') {
        field.style.borderColor = "Red";
    }
    else {
        let div = '<div class="error">' + text + '</div>';
        field.insertAdjacentHTML('afterend', div);
    }
}

/*
clears all errors on screen
*/
function clear_errors(fields) {
    // remove all red border colors
    for (let field of fields) {
        field.style.borderColor = '';
    }

    // remove all error texts
    for (let err of document.getElementsByClassName("error")) {
        err.parentNode.removeChild(err);
    }
}

/*
clears all success messages
*/
function clear_success() {
    let all_success = document.getElementsByClassName("success");
    for (let success of all_success) {
        success.parentNode.removeChild(success);
    }
}
/*
function to call when register is successful
*/
function complete_register(field) {
    console.log(field);
    field.insertAdjacentHTML('afterend', '<div class="success">Registration successful!</div>');
}