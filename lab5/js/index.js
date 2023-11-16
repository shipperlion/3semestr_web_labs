function swapText16() {
    var textBlock1 = document.querySelector('.header > p');
    var textBlock6 = document.querySelector('.footer > p');
    var tempTextVar = textBlock1.textContent;

    textBlock1.textContent = textBlock6.textContent;
    textBlock6.textContent = tempTextVar;
}

function validateInput() {
    var firstFormValue = document.getElementById('firstSideForm').value;
    var secondFormValue = document.getElementById('secondSideForm').value;
    var thirdFormValue = document.getElementById('thirdSideForm').value;

    if (isNaN(firstFormValue) || isNaN(secondFormValue) || isNaN(thirdFormValue)) {
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

    if (firstSide > secondSide + thirdSide || secondSide > firstSide + thirdSide || thirdSide > firstSide + secondSide) {
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
        document.getElementById('firstSideForm').style.display = 'block';
        document.getElementById('secondSideForm').style.display = 'block';
        document.getElementById('thirdSideForm').style.display = 'block';
        document.getElementById('submit_button').style.display = 'block';
    }
}


// Find the square of a regular pentagon
function findPentagonSquare(side) {
    return 5 * (Math.sqrt(3) * Math.pow(side, 2) / 4);
}

function capitalizeBlock4() {
    var textBlock4Paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < textBlock4Paragraphs.length; i++) {
        var paragraphWords = textBlock4Paragraphs[i];
        for (var j = 1; j < paragraphWords.length; j++) {
            if (paragraphWords[j - 1] == ' ') {
                paragraphWords[j].toUpperCase();
            }
        }
    }

}

function capitalizeLetters() {
    
    if (capitalize == true) {
        capitalize.addEventListener("blur", (event) => {
            capitalizeBlock4();
        }, true,
        );
    }
}

//$(function () {
//    $("aside-right").attr("contenteditable", "true")

//    var capitalize = document.getElementById("check");

//    $(capitalize).blur(function () {
//        localStorage.setItem('page_html', this.innerHTML);
//    });

//    if (localStorage.getItem('page_html')) {
//        capitalize.innerHTML = localStorage.getItem('page_html');
//    }
//});

function reset() {
    localStorage.clear();
    window.location = window.location;
}

swapText16();

var textBlock3 = document.querySelector('.main > p');
textBlock3.textContent += findPentagonSquare(10).toString();
//window.onbeforeunload = refreshPage();


