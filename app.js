const btnClose = document.querySelector('.close-btn');
const sideBar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');

sidebarToggle.addEventListener('click',function(){
    //first solve to toggle sideBar

    // if(sideBar.classList.contains('show-sidebar')){
    //     sideBar.classList.remove('show-sidebar');
    // }else{
    //     sideBar.classList.add('show-sidebar');
    // }

    //second solve toggle sidebar
    sideBar.classList.toggle('show-sidebar')
})

btnClose.addEventListener('click',function(){
    sideBar.classList.remove("show-sidebar");
})
