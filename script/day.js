function daytest(){
    var day = document.getElementById('day').value;
    // var day=new Date().getDay();
        switch(day){
        case 0:
        alert('Sunday')
        break;
        case 1:
        alert('Monday')
        break;
        case 2:
        alert('Tuesday')
        break;
        case 3:
        alert('Wednesday')
        break;
        case 4:
        alert('Thursday')
        break;
        case 5:
        alert('Friday')
        break;
        case 6:
        alert('Saturday')
        break;
    }
}

function weektest() {
    var week = document.getElementById('week').value;
    // var week = new Date().getDay();
    switch(week) {

    case 1:
    case 2:
    case 3:
    case 4:
    alert('Weekday');
    break;
    case 5:
    alert('Friday');
    break;
    case 6:
    alert('Saturday');
    break;
    case 0:
    alert('Weekend');
    break;
    }
}
