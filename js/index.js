
window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
    }
  
    // fadeOut();
  
  }
  

function fadeOut(){
    setTimeout(loader, 4000);
}
  