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


