searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}


window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}


window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();
  
}
  
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}


// for the pagination *i used jquery
$(function() {
  var books = $(".book");
  var numPerPage = 3;
  var numPages = Math.ceil(books.length / numPerPage);

  // create pagination links
  for (var i = 1; i <= numPages; i++) {
    $(".pagination_holder").append("<a href='#'>" + i + "</a>");
  }

  // show first page of books
  books.slice(0, numPerPage).show();

  // handle pagination link clicks
  $(".pagination_holder a").click(function(e) {
    e.preventDefault();

    var pageNum = $(this).text();
    var start = (pageNum - 1) * numPerPage;
    var end = start + numPerPage;

    books.hide().slice(start, end).show();
  });
});
  