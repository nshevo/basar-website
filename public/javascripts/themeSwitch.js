var script = document.createElement('script');
var setTheme = localStorage.getItem('theme');
var checkBox = document.getElementById("customSwitches");
var text = document.getElementById("switchText");
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function darkMode(){
    console.log("Chechbox - checked (Dark)");
    text.innerHTML = "Dark";
    $("div[id='sticky-sidebar']").toggleClass("bg-light bg-dark");
    $("div[id='sticky-sidebar']").toggleClass("text-dark text-white");
    $("div[id='cards']").addClass("text-white bg-dark");
    $("div[id='body']").addClass("bg-dark");
    $("body").addClass("bg-dark");
    $("h1, h2, h3").addClass("text-white");
    $("[id='categories_titel']").addClass("text-white");
    $("a[class^='navbar-text']").each((i, ele) => {
        console.log(ele);
        $(ele).toggleClass('text-dark text-white');
    });
  }

  function lightMode(){
    console.log("Chechbox - unchecked (Light)");
    text.innerHTML = "Light";
    $("div[id='sticky-sidebar']").toggleClass("bg-dark bg-light");
    $("div[id='cards']").removeClass("text-white bg-dark");
    $("div[id='body']").removeClass("bg-dark");
    $("[id='categories_titel']").removeClass("text-white");
    $("h1, h2, h3").removeClass("text-white");
    $("body").removeClass("bg-dark");
    $("a[class^='navbar-text']").each((i, ele) => {
        console.log(ele);
        $(ele).toggleClass('text-white text-dark');
    });
  }

window.onload = function(){
    $( document ).ready(function() {
        let box = document.getElementById("customSwitches");
        if(setTheme == null){
            
        }else if(setTheme == 'dark'){
            box.checked = true;
            darkMode();
        }else if(setTheme == 'light'){
            
        }
    })
  };

function themeSwitch(){
    $( document ).ready(function() {
        var checkBox = document.getElementById("customSwitches");
        var text = document.getElementById("switchText");
        console.log( "ready!" );
        
        if(checkBox.checked == true){
            darkMode();
            localStorage.setItem('theme', 'dark');
        }else{
            lightMode();
            localStorage.setItem('theme', 'light');
        }
    });
}
