$(document).ready(function(){
    $("#Profile_progress").click(function(){
        $(".profile").hide();
        $(".progress").show();
        $(".contact").hide();
    });
    $("#Profile_contact").click(function(){
        $(".profile").hide();
        $(".progress").hide();
        $(".contact").show();
    });

    $("#Progress_profile").click(function(){
        $(".profile").show();
        $(".progress").hide();
        $(".contact").hide();
    });
    $("#Progress_contact").click(function(){
        $(".profile").hide();
        $(".progress").hide();
        $(".contact").show();
    });

    $("#Contact_profile").click(function(){
        $(".profile").show();
        $(".progress").hide();
        $(".contact").hide();
    });
    $("#Contact_progress").click(function(){
        $(".profile").hide();
        $(".progress").show();
        $(".contact").hide();
    });
})

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots')
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked / 100);
    var rotate = 360 / dots;
    var points = "";
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})