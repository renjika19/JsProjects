function carList(){
    var cars = ["Audi", "BMW", "Volvo", "Ford", "Tesla"]
    for(i = 0; i < cars.length ; i++)
    alert( cars[i]);
}




function nameInput() {
var text = document.getElementById('txt_name').value;

var person= {
    "firstname": "John",
    "lastname" : "Smith",
    "city" : "Dallas",
    "State": "TX",
 }
 alert(person[text]);
}

function foo() {
    var x = 10;
    alert(x);
    if (true) {
        var x = 25;
        alert(x);
        }    function foobar() {
            var x = 15;
            alert(x);
        }
    }
    alert(x);

    function test() {
        var x = 10;
        alert(x);
        {
            let x = 25;
            alert(x);
        }
        alert(x);
    }

    function food() {
        var x = 10;
        let x = 15;
        alert (x);
    }

function add() {
    var num1 = numbers(document.getElementById('num1').value);
    var num2 = numbers(document.getElementById('num2').value);
    var res = addNumbers(num1,num2);

    document.getElementById('result').innerHTML = res;
}

function addNumbers(x,y) {
    return x + y;
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

function getTemperature() {

    var fahrenheit = Number(document.getElementById("fah").value);
    document.getElementById("celsius").innerHTML = toCelsius(fahrenheit)
}

function show() {

    var person= {
        firstname:"John",
        lastname:"Smith",
        City:"NYC",
        State:"NY",
        fullname : function() {
            return this.lastname + "," + this.firstname;
        }
    }
    var name = person.fullname();
    document.getElementById("name").innerHTML=name;
}

function checkCookies() {
    var text = "";
    if (navigator.cookieEnabled == true) {
        text = "Cookies are enabled.";
    }
    document.getElementById("demo").innerHTML= text
}

function mOver(obj) {
    obj.innerHTML = "Thank You"
    obj.style.background = "Blue";
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
    obj.style.backgroundColor = "Green";
}

function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    }else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("hemo").innerHTML = txt;
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}