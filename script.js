function insert(num) {
    var number = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = number + num;
}

function clean() {
    document.getElementById('screen').innerHTML = "";
}

function back() {
    var result = document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = result.substring(0, result.length -1);
}

function calculate() {
    var result = document.getElementById('screen').innerHTML;
    if (result) {
        document.getElementById('screen').innerHTML = eval(result);
    } else {
        document.getElementById('screen').innerHTML = "Nada bocó...";
    }
}