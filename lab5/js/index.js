// Task 1
function swapText16() {
    var textBlock1 = document.querySelector('.header > p');
    var textBlock6 = document.querySelector('.footer > p');
    var tempTextVar = textBlock1.textContent;

    textBlock1.textContent = textBlock6.textContent;
    textBlock6.textContent = tempTextVar;
}
swapText16();

// Task 2
function findPentagonSquare(side) {
    return 5 * (Math.sqrt(3) * Math.pow(side, 2) / 4);
}

var textBlock3 = document.querySelector('.main > p');
textBlock3.textContent += findPentagonSquare(10).toString();

// Task 3
function validateInput() {
    var firstFormValue = document.getElementById('firstSideForm').value;
    var secondFormValue = document.getElementById('secondSideForm').value;
    var thirdFormValue = document.getElementById('thirdSideForm').value;

    var checkForWhitespace = firstFormValue == 0 || secondFormValue == 0 || thirdFormValue == 0;

    if (isNaN(firstFormValue) || isNaN(secondFormValue) || isNaN(thirdFormValue) || checkForWhitespace) {
        alert("Invalid input");
        return false;
    }

    return true;
}

function validateTriangle(validation) {
    if (validation == false) { return; }
    var firstSide = Number(document.getElementById('firstSideForm').value);
    var secondSide = Number(document.getElementById('secondSideForm').value);
    var thirdSide = Number(document.getElementById('thirdSideForm').value);

    var checkForEmptyString = firstSide == "" || secondSide == "" || thirdSide == "";

    if (firstSide > secondSide + thirdSide || secondSide > firstSide + thirdSide || thirdSide > firstSide + secondSide || checkForEmptyString) {
        alert("Triangle does not exist");
        return "Triangle does not exist";
    }
    else {
        alert("Triangle exists");
        return "Triangle exists";
    }
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return "";
}
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function refreshPage() {
    alert("Saved cookie: " + getCookie("triangle"));
    var formRemoval = confirm("Upon refreshing the page all cookies will be deleted. Do you want to remove form?");

    eraseCookie("triangle");
    if (formRemoval == true) {
        document.getElementById('firstSideForm').style.display = 'none';
        document.getElementById('secondSideForm').style.display = 'none';
        document.getElementById('thirdSideForm').style.display = 'none';
        document.getElementById('submit_button').style.display = 'none';
    } else {
        alert("Page will be refreshed and form will stay.")
        document.getElementById('firstSideForm').style.display = 'inline';
        document.getElementById('secondSideForm').style.display = 'inline';
        document.getElementById('thirdSideForm').style.display = 'inline';
        document.getElementById('submit_button').style.display = 'inline';
    }
}

window.onbeforeunload = refreshPage();

// Task 4
String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function capitalizeBlock4() {
    var textBlock4Paragraphs = document.querySelectorAll(".aside-right p");
    
    for (var i = 0; i < textBlock4Paragraphs.length; i++) {
        var paragraphWords = textBlock4Paragraphs[i].textContent.split(' ');
        textBlock4Paragraphs[i].textContent = "";
        for (var j = 0; j < paragraphWords.length; j++) {
            textBlock4Paragraphs[i].textContent += paragraphWords[j].replaceAt(0, paragraphWords[j][0].toUpperCase());
            if (j < paragraphWords.length - 1) {
                textBlock4Paragraphs[i].textContent += " ";
            }
        }
    }
}

function capitalizeLetters() {
    if (document.getElementById('capitalize').checked == true) {
        alert("blur");
        var textBlock4 = document.querySelectorAll(".aside-right p");
        localStorage.setItem('p1', textBlock4[0].textContent);
        localStorage.setItem('p2', textBlock4[1].textContent);
        localStorage.setItem('p3', textBlock4[2].textContent);
        localStorage.setItem('p4', textBlock4[3].textContent);
    }
}

function getFromLocalStorage() {
    var textBlock4 = document.querySelectorAll(".aside-right p");
    textBlock4[0].textContent = localStorage.getItem('p1');
    textBlock4[1].textContent = localStorage.getItem('p2');
    textBlock4[2].textContent = localStorage.getItem('p3');
    textBlock4[3].textContent = localStorage.getItem('p4');
}

window.onload = getFromLocalStorage();

// Task 5

function dblclickOnFirst() {
    var div = document.getElementsByClassName("header");
        p = document.createElement("a");
    p.textContent = '1';
    div[0].prepend(p);
}

function dblclickOnSecond() {
    var div = document.getElementsByClassName("aside-left");
    p = document.createElement("p");
    p.textContent = '2';
    div[0].prepend(p);
}

function dblclickOnThird() {
    var div = document.getElementsByClassName("main");
    p = document.createElement("p");
    p.textContent = '3';
    div[0].prepend(p);
}

function dblclickOnFourth() {
    var div = document.getElementsByClassName("aside-right");
    p = document.createElement("p");
    p.textContent = '4';
    div[0].prepend(p);
}

function dblclickOnFifth() {
    var div = document.getElementsByClassName("menu");
    p = document.createElement("p");
    p.textContent = '5';
    div[0].prepend(p);
}

function dblclickOSixth() {
    var div = document.getElementsByClassName("footer");
    p = document.createElement("p");
    p.textContent = '6';
    div[0].prepend(p);
}

function replaceBlock2() {
    var textBlock2 = document.querySelector(".aside-left p");
    localStorage.setItem("block2", textBlock2.textContent);
    textBlock2.textContent = document.getElementById('textBlock2Form').value;
    localStorage.setItem("new_block2", textBlock2.textContent);
}

function undoBlock2() {
    var textBlock2 = document.querySelector(".aside-left p");
    localStorage.removeItem("new_block2");
    textBlock2.textContent = localStorage.getItem("block2");
}