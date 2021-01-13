var btns = document.getElementsByClassName('page-link');

function getPage(button){
    var url = new URL(window.location.href);
    var parameters = url.searchParams;
    var currentPage = parameters.get('page');
    if(currentPage == undefined){
        currentPage = 1;
    }
    if(button.id == 'next'){
        currentPage++;
    }else if(button.id == 'previous'){
        currentPage--;
    }else{
        currentPage = button.id;
    }
    parameters.set('page', currentPage);
    url.search = parameters.toString();
    button.href = url.toString();
}
for(var btn of btns){
    btn.addEventListener('click', getPage(btn));
}




