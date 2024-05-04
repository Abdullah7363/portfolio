$(document).ready(function(){

$(window).on('scroll',function(){
    let mouse=$(window).scrollTop();
    if (mouse >= 50){
        $('.navsetion').addClass('stitcy');
    }
    else {
        $('.navsetion').removeClass('stitcy');


    }




})


})



let skillsSection=document.querySelector('.myskills'); 



let skillsspan=document.querySelectorAll('.progress-bar'); 

skillsspan[0].setAttribute('style',"width:50%; transition:al all");
skillsspan[1].setAttribute('style',"width:84%; transition:al all");
skillsspan[2].setAttribute('style',"width:80%; transition:al all");
skillsspan[3].setAttribute('style',"width:90%; transition:al all");
skillsspan[4].setAttribute('style',"width:60%; transition:al all");
skillsspan[5].setAttribute('style',"width:50%; transition:al all");




