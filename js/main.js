
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
   $('[name="payment"]').change(function()
   {
     if ($(this).is(':checked')) {
       
        // alert('Yosdsds');
     };
   });
 });


         





  
          