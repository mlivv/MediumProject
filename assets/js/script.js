window.addEventListener('scroll', function(){
    let scrollPosition = window.scrollY;
    let buttonPosition = document.getElementById("startReadingButton").offsetTop;
    let headerBackground = document.getElementsByTagName("header")[0];
    let getStartedButton = document.getElementById("getStartedButton");
    if (scrollPosition <= buttonPosition){
        headerBackground.style.backgroundColor = "#ffc017";
        getStartedButton.style.backgroundColor = "#191919";
    } else {
        headerBackground.style.backgroundColor = "white";
        getStartedButton.style.backgroundColor = "green";
    }
});