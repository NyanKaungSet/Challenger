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