// JAVASCRIPT CODE 
// 20-12-21     finished at: 22:15 
// By Rahul Kumar   Rkm 

let input_str = "";
let current_entry = document.querySelector("#new");
current_entry.innerText = "";
let old_entry = document.querySelector("#previous");
old_entry.innerText = "";
let oprnds = ["", "", ""];

function isDot(n) {
    // return Number(n) === n && n % 1 !== 0;
    // n = Number(n);
    return n.split(".").length == 2;
}
function add_click_listener(el) {
    el.addEventListener('click', () => {
        // console.log(input_str);
        if (el.innerText == "AC") {
            input_str = "";
            current_entry.innerText = input_str;
            old_entry.innerText = "";
        }
        else if (el.innerText == "DEL") {
            current_entry.innerText = current_entry.innerText.slice(0, -1);
            input_str = current_entry.innerText;
        }
        else if (el.className == "operator" && current_entry.innerText == "") { }
        else if (old_entry.innerText == "" && el.className == "operator") {
            oprnds[0] = parseFloat(input_str);
            oprnds[1] = el.id;

            input_str += el.innerText;
            old_entry.innerText = input_str;
            current_entry.innerText = "";
            input_str = "";
        }
        else if (el.className == "operator" && input_str != "") {
            if (oprnds[1] == '+') {
                oprnds[0] = oprnds[0] + parseFloat(input_str);
            }
            else if (oprnds[1] == '-') {
                oprnds[0] = oprnds[0] - parseFloat(input_str);
            }
            else if (oprnds[1] == '*') {
                oprnds[0] = oprnds[0] * parseFloat(input_str);
            }
            else if (oprnds[1] == 'D') {
                oprnds[0] = oprnds[0] / parseFloat(input_str);
            }
            oprnds[1] = el.id;
            input_str = oprnds[0] + el.innerText;
            old_entry.innerText = input_str;
            current_entry.innerText = '';
            input_str = "";
        }

        else if (el.innerText == "." && isDot(input_str)) {
        }
        else if (el.innerText != "=") {
            if (el.innerText == "0" && input_str == "0") { }
            else {
                input_str += el.innerText;
                if (input_str[0] == "0" && !isDot(input_str)) {
                    current_entry.innerText = Number(input_str);
                    input_str = String(Number(input_str));
                }
                else {
                    current_entry.innerText = input_str;
                }
            }
        }
        else if (old_entry.innerText == "" && el.innerText == "=") { }
        else if (input_str == "" && el.innerText == "=") { }
        else {
            if (oprnds[1] == '+') {
                oprnds[0] = oprnds[0] + parseFloat(input_str);
            }
            else if (oprnds[1] == '-') {
                oprnds[0] = oprnds[0] - parseFloat(input_str);
            }
            else if (oprnds[1] == '*') {
                oprnds[0] = oprnds[0] * parseFloat(input_str);
            }
            else if (oprnds[1] == 'D') {
                oprnds[0] = oprnds[0] / parseFloat(input_str);
            }
            input_str = oprnds[0];
            old_entry.innerText = '';
            current_entry.innerText = input_str;

        }
        // console.log(input_str);
    })
}
let keypad = document.querySelectorAll("#keyboard>button");
keypad.forEach(add_click_listener);