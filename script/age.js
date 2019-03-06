function agetest() {
    var age = document.getElementById('age').value;
  if (age >= 18 && age <= 60) {
    alert("You are eligible");
  }
  else if (age < 18 || age > 60) {
    alert("You are not eligible");
  }
}

function agetest2() {
    var age = document.getElementById('age').value;
    var message = (age >= 18 && age <= 60)? alert("can vote"):alert("cannot vote");
}
