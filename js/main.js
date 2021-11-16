let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let numInput = document.getElementById("numInput");
let counter = document.getElementById("printedNumber");
let sum = 0;

window.addEventListener(("DOMContentLoaded"), function(e) {
    counter.value = 0;
});
plusButton.onmouseover = function(e) {
    plusButton.style.backgroundColor = "black";
    plusButton.style.color = "grey";
}
plusButton.onmouseleave = function(e) {
    plusButton.style.backgroundColor = "white";
    plusButton.style.color = "black";
}
minusButton.onmouseover = function(e) {
    minusButton.style.backgroundColor = "black";
    minusButton.style.color = "grey";
}
minusButton.onmouseleave = function(e) {
    minusButton.style.backgroundColor = "white";
    minusButton.style.color = "black";
}

function addNum(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function add() {
    let n1 = document.getElementById("printedNumber").value;
    let n2 = document.getElementById("numInput").value;

    let sum = addNum(n1, n2);
    counter.value = sum;

    if(sum > 0) {
        counter.style.color = "black";
    }
    if(sum < 0) {
        counter.style.color = "red";
    }
}

function subtractNum(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

function subtract() {
    let n1 = document.getElementById("printedNumber").value;
    let n2 = document.getElementById("numInput").value;

    let product = subtractNum(n1, n2);
    counter.value = product;

    if(product < 0) {
        counter.style.color = "red";
    }
    if(product > 0) {
        counter.style.color = "black";
    }
}