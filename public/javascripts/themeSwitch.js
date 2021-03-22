// var switchButton = document.getElementById('customSwitches');
// // A $( document ).ready() block.
// console.log("PIDARU");
// // $( "customSwitches" ).click(function() {
// //     alert( "Handler for .click() called." );
// //   });
// $('.switch').click(()=>{
    // $([".light [class*='-light']", ".dark [class*='-dark']"]).each((i,ele)=>{
    //     $(ele).toggleClass('bg-light bg-dark')
    //     $(ele).toggleClass('text-light text-dark')
    //     $(ele).toggleClass('navbar-light navbar-dark')
    // })
//     // toggle body class selector
//     $('body').toggleClass('light dark')
// })

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function themeSwitch(){
    var checkBox = document.getElementById("customSwitches");
    var text = document.getElementById("switchText");

    if(checkBox.checked == true){
        console.log("Chechbox - checked");
        text.innerHTML = "Dark";
        $([".light [class*='-light']"]).each((i,ele)=>{
            $(ele).toggleClass('bg-light bg-dark')
            $(ele).toggleClass('text-dark text-light')
            $(ele).toggleClass('btn-dark btn-light')
            $(ele).toggleClass('bg-light bg-dark')
            $(ele).toggleClass('navbar-light navbar-dark')
        })
        // toggle body class selector
        $('body').toggleClass('light dark')
    }else{
        console.log("Chechbox - unchecked");
        text.innerHTML = "Light";
        $([".dark [class*='-dark']"]).each((i,ele)=>{
            $(ele).toggleClass('bg-light bg-dark')
            $(ele).toggleClass('navbar-dark navbar-light')
        })
        $([".whire [class*='-white']"]).each((i,ele)=>{
            $(ele).toggleClass('text-white text-dark')
        })
        // toggle body class selector
        $('body').toggleClass('dark light')
    }
}
