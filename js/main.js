
$(window).on("load",function(){
    $(".loader").fadeOut("slow");
});


  $(".see-more").on("click", function () {
    $(this)
      .find($("button img"))
      .toggleClass("rotate");
  });

  $(".see-more").on("click", function () {
    $(this)
      .find($("button"))
      .toggleClass("active");
  });

 $(".see-more").click(function(){
    $(this).prev().toggleClass('textbox');
 });


 $(function()
 {
   $('.form_accept').click(function()
   {
     if ($(this).is(':checked')) {
       
        $(".policy-button").removeClass("disable")
     }else {
        $(".policy-button").addClass("disable")
     }
   });



   $('.car_acc1').click(function(){
     
     if ($(this).is(':checked')) {
       
        $(".form_textarea").show()
     }
   });

   $('.car_acc2').click(function(){
  
    if ($(this).is(':checked')) {
        
        $(".form_textarea").hide()
    }
});

$(".car-price a").click(function(e){
    e.preventDefault()

    $(this).parent().prev().show()
    $(this).addClass("active")
})

$(".personal-id img").click(function(e){
  e.preventDefault()

  $(this).parent().prev().show()
  $(this).addClass("active")
})

$(".input-info-box img").click(function(e){
  e.preventDefault()

  $(this).parent().prev().show()
  $(this).addClass("active")
})

$(".tooltip_close").click(function(e){


    $(this).parent().hide()
    $(this).parent().next().find("a").removeClass("active")
})

 });


         





  
          