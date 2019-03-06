function changeSize() {
    document.getElementById('msg').style.fontSize="30px";
}

function add() {
    var i= 10;
    var j= 12;
    var k= i + j;
    return k;
}

function setResult() {
    document.getElementById("result").innerHTML=add();
}

function getFullname() {
        var fname=document.getElementById('fname').value;
        var lname=document.getElementById("lname").value;
        var fullname = lname + ',' + fname;
        document.getElementById('fullname').innerHTML=fullname;
}

function test() {if (true && false)
alert('cond1')
if(true || false)
alert('cond2')
if(true||(false && true) && false)
alert('cond4')
}



