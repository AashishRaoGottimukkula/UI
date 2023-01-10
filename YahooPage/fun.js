function myFunction(name, email, password, year) {
    if (email.value.endsWith('@yahoo.com') || email.value.endsWith('@myyahoo.com')) {
        var x = [
            name.value,
            email.value,
            ''.padStart(password.value.length, '*'),
            year.value
        ]
        document.getElementById('demo1').innerHTML = x;
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        return false;
    }
}