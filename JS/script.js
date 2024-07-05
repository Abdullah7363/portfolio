(function ($){
    "use strict";
    var spinner = function () {
      setTimeout(function () {
          if ($('#spinner').length > 0) {
              $('#spinner').removeClass('show');
          }
      }, 1);
  };
  spinner();
  }
  )(jQuery);


$(document).ready(function(){
    
$(window).on('scroll',function(){
    let mouse=$(window).scrollTop();
    if (mouse >= 50){
        $('.navsetion').addClass('stitcy');
    }
    else {
        $('.navsetion').removeClass('stitcy');

    }

});





});


// menubtn.addEventListener(e,()=>{
    


// })

$(document).ready(function(){
    $("#downloadBtn").click(function(){

        $('#my-cv').show();
        $('#colse-window').show();
        
        
    
    })


}
);


$(document).ready(function(){
    $("#colse-window").click(function(){

        $('#my-cv').hide();
        $('#colse-window').hide();
        
    })


}
);


// $(document).ready(function(){
//     $("#colse-window").click(function(){

//         $('#my-cv').hide();
//         $('#colse-window').hide();
        
        
    
//     })


// }
// );







let links= Array.from(document. querySelectorAll('.links li'));

let info= Array.from(document.querySelectorAll('.my-info'));
links.forEach((tab) =>{
tab.addEventListener('click',(e)=>{


links.forEach(function(el){
el.classList.remove("active");

});
e.currentTarget.classList.add('active');

info.forEach((con) =>{
con.classList.remove('active');
console.log(con);
});
// document.querySelector( e.currentTarget.dataset.show).classList.add('active');
console.log(document.querySelector( e.currentTarget.dataset.show));


});



});




// submit-btn
let submitbtn=document.getElementById('submit-btn'); 
let namevalue=document.getElementById('name');
let email=document.getElementById('email');
let textarea=document.getElementById('text-area');
let nameerr=document.getElementById('name-err');
let emailerr=document.getElementById('email-err');
let messageerr=document.getElementById('message-err');
let conformmessage=document.getElementById('conform-message');
let closemessage=document.getElementById('close-message');






// show message box   


// meneu toggle buttom
let menutoggle=document.querySelector('.menu-toggle');

menutoggle.onclick=()=>{
    menutoggle.classList.toggle('active');

}
