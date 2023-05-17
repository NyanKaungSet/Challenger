//Dark Mode
document.getElementById('darkMode').addEventListener('click',()=>{
  const darkLight = document.getElementById('darkLight');
  if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      darkLight.innerHTML = '&#9790';
      localStorage.setItem('Mode', 'Light');
  }
  else {
      document.body.classList.add('dark');
      darkLight.innerHTML = '&#9788';
      localStorage.setItem('Mode', 'Dark');
  }
})

function mode(){
  if (localStorage.getItem('Mode') === 'Dark'){
      document.body.classList.add('dark');
  }if (localStorage.getItem('Mode') === 'Light'){
      document.body.classList.remove('dark');
  }
}
mode();

$(document).ready(function() {
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});
