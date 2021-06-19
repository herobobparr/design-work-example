$(document).ready(function () {
    
    $("#owl-demo").owlCarousel({
     
          navigation : true,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
     
      });
    $("#owl-demo .owl-prev").html('<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>'); 
    $("#owl-demo .owl-next").html('<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>');
    
    $(".progress-bar").loading(); 
    
//Top Bars dropdown showing JS
   $(".top-img").click(function(){
        $(".top-img-drop").slideToggle("slow");
     });
    $(".notify").click(function(){
        $(".notify-post-drop").slideToggle("slow");
     });
    $(".add-post").click(function(){
        $(".add-post-drop").slideToggle("slow");
     });
   
//For hiding scroll profile, notification and messages by clicking anywhere
 $(document).click(function (e) {
        if (!$(e.target).closest('.top-img, .top-img-drop').length) {
            $('.top-img-drop').stop(true).slideUp();
        }
         if (!$(e.target).closest('.notify, .notify-post-drop').length) {
            $('.notify-post-drop').stop(true).slideUp();
        }
       if (!$(e.target).closest('.add-post, .add-post-drop').length) {
            $('.add-post-drop').stop(true).slideUp();
        }
        
    });
    
    
//Chat Box JS
    $(".chat-icon").click(function(){
        $(".all-chat").addClass("all-chat-show");
     });
      $(".all-chat-close").click(function(){
        $(".all-chat").removeClass("all-chat-show");
     });
    
    
    $(".chat-per").click(function(){
        $(".chat-box").addClass("chat-show");
     });
      $(".chat-close").click(function(){
        $(".chat-box").removeClass("chat-show");
     });
     
    
    $(".left-menu-icon").click(function(){
        $(".left-menu").addClass("slide");
     });
     $(".left-menu-icon-close").click(function(){
        $(".left-menu").removeClass("slide");
     });
    
    
});
