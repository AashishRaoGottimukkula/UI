function calculator(operation, a, b) {
    switch (operation) {
        case '+': {
            return a + b;
        }
        case '-': {
            return a - b;
        }
        case '/': {
            return a / b;
        }
        case '*': {
            return a * b;
        }
        case '%': {
            return a % b;
        }
    }
}

var s = ''
function Display(str) {
    s += str;
    document.getElementById('display').innerHTML = s;
}

function equal() {
    let i = 0;
    while (i < s.length) {
        if (s[i] != '+' && s[i] != '-' && s[i] != '/' && s[i] != '*' && s[i] != '%') {
            i++;
        }
        else {
            let a = (parseInt)(s.slice(0, i));
            let op = s[i];
            let b = (parseInt)(s.slice(i + 1, s.length));
            document.getElementById('display').innerHTML = calculator(op, a, b);
            s = '';
            break;
        }
    }
}


