$(document).ready(function(){
    $(".for-beyan").hide();
    $(".for-balance").hide();

    $(".about3").click(function(){
        $(".for-balance").show();
        $(".for-beyan").hide();
        $(".for-delivery").hide();
    })

    $(".about2").click(function(){
        $(".for-delivery").hide();
        $(".for-beyan").show();
        $(".for-balance").hide();

    })
    $(".about").click(function(){
        $(".for-delivery").show();
        $(".for-beyan").hide();
        $(".for-balance").hide();
    })

    
    
    $(".title").click(function(){
        if ($(this).hasClass("active")) {
           $(this).removeClass("active");
           $(this)
             .siblings(".content")
             .slideUp(700);
             $(this).children("i").removeClass("fa-arrow-down").addClass("fa-arrow-up")
          } 
          
        else {
            $(this).children("i").removeClass("fa-arrow-up").addClass("fa-arrow-down")
           $(".title").removeClass("active");
           $(this).addClass("active");
           $(".content").slideUp(700);          
           $(this)
             .siblings(".content")
             .slideDown(400);

            
          }
        
      })

     
  })