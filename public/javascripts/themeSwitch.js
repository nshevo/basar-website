var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function themeSwitch(){
    var checkBox = document.getElementById("customSwitches");
    var text = document.getElementById("switchText");

    // A $( document ).ready() block.
    $( document ).ready(function() {
        console.log( "ready!" );
        if(checkBox.checked == true){
            console.log("Chechbox - checked (Dark)");
            text.innerHTML = "Dark";
            $("[class$='-light']").each((i, ele) => {
                console.log(ele);
                $(ele).toggleClass('bg-light bg-dark')
                $(ele).toggleClass('text-dark text-light')
                $(ele).toggleClass('btn-dark btn-light')
                $(ele).toggleClass('bg-light bg-dark')
                $(ele).toggleClass('navbar-light navbar-dark')
    
            });
        }else{
            console.log("Chechbox - unchecked (Light)");
            text.innerHTML = "Light";
            $("[class$='-dark']").each((i, ele) => {
                console.log(ele);
                $(ele).toggleClass('bg-dark bg-light')
                $(ele).toggleClass('text-light text-dark')
                $(ele).toggleClass('btn-dark btn-light')
                $(ele).toggleClass('navbar-dark navbar-light')
    
            });
            // toggle body class selector
            $('body').toggleClass('dark light')
        }
    });
}
