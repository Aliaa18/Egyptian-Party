
/// <reference types="../@types/jquery"/>

         //home section
 $(".openNav").on('click',function(){
    $("#leftMenu").animate({ width:'250px'},50)
   $("#home-content").animate({marginLeft :'250px'},50)
})

$(".closebtn").on('click',function(){
    $("#leftMenu").animate({ width:'0px'},50)
   $("#home-content").animate({marginLeft :'0px'},50)
})

$("#leftMenu a").on('click',function({target}){
    
    var sectionId= $(target).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},500);
    
})

            //  duration section


$('#duration .head').on('click', function({target}){
         $(target).next().slideToggle(700);
         $('.parg').not($(target).next()).slideUp(700);
    
})
           //count down
           window.onload = function() {
            var countDownDate = new Date("10 october 2023 9:56:00").getTime();
           var x = setInterval(function() {
             var now = new Date().getTime();
             var differance = countDownDate - now;
             var days = Math.floor(differance / (1000 * 60 * 60 * 24));
             var hours = Math.floor((differance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
             var minutes = Math.floor((differance % (1000 * 60 * 60)) / (1000 * 60));
             var seconds = Math.floor((differance % (1000 * 60)) / 1000);
             $(".day").html(`${days} D`);
             $(".hour").html(`${hours} h`);
             $(".minute").html(`${ minutes } m`);
             $('.second').html(`${ seconds} s`)
             if (differance < 0) {
               clearInterval(x);
               document.getElementById("demo").innerHTML = "EXPIRED";
             }
           }, 1000);
            
          }
       
            //   contact section

        var maxchar=100;
        $('textarea').on('keyup',function() {
            var currentLength= $('textarea').val().length;
           var leftChar= maxchar-currentLength;
                        if(leftChar<=0){
                        $('.inner .hun').text("Your available character finished!")
                        }else{
                            $('.inner .hun').text(leftChar)
                        }
                        
        })
                 


                  
