// JavaScript Document

$(document).ready(function(){

alert("We use cookies on this site to enhance your user experience.\nFor a complete overview of all cookies used, please see your personal settings.");
    
$("#flex-item_1").click(function(){
   
  //alert("Page 1 Button working");
 
$("title").text("Home");
   
$("#main1").show();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();
   
});
        
$("#flex-item_2").click(function(){
   
  //alert("Page 2 Button working");
 
$("title").text("Maps");
   
$("#main1").hide();

$("#main2").show();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();
   
});    
   
$("#flex-item_3").click(function(){
   
  //alert("Page 3 Button working");
 
$("title").text("Videos");

$("#main1").hide();

$("#main2").hide();

$("#main3").show();

$("#main4").hide();

$("#main5").hide();
   
});
   
$("#flex-item_4").click(function(){
   
  //alert("Page 4 Button working");

$("title").text("Enquiries");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").show();

$("#main5").hide();
   
});
   
$("#flex-item_5").click(function(){
   
  //alert("Page 5 Button working");

$("title").text("Work");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").show();
   
});

//mobile navigation start

//When a click on the hamburger icon happens
$("#hamburgermenu").click(function() {

	
  //test if the mymobilenav element is hidden
    if($("#mymobilenav").is(":hidden")) {
  
      
  //if the mymobilenav element is hidden then slide down the mymobilenav box to show contents
    $("#mymobilenav").slideDown();
  
      
  //and to reduce the height of the ,main element to 62vh (this allows the foorter to be in view).
    $(".main").css({"height": "62vh"});
  
      
  //else if the mymobilenav elements is visible
    }else{
  
  //hide the mymobilenav element by sliding up
    $("#mymobilenav").slideUp();
  
      
  //and increase the .main element to 75vh so the footer stays at the bottom of the page
    $(".main").css({"height": "75vh"});
      
    }
    
  
    
  });
    
  $("#mobilefindus").click(function() {
    
    //alert("page 2 button works");
    
      $("title").text("Tiny's Website Page 2");
    
      $("#main1").hide();
    
      $("#mymain2").show();
    
      $("#mymain3").hide();
    
      $("#mymain4").hide();
    
      $("#mymain5").hide();
    
  });
    
  $("#mobilevideogallery").click(function() {
    
    //alert("page 3 button works");
    
      $("title").text("Tiny's Website Page 3");	
    
      $("#main1").hide();
    
      $("#mymain2").hide();
    
      $("#mymain3").show();
    
      $("#mymain4").hide();
    
      $("#mymain5").hide();
    
      
  });
    
  $("#mobilecontactus").click(function() {
    
    //alert("page 4 button works");
    
      $("title").text("Tiny's Website Page 4");	
    
      $("#main1").hide();
    
      $("#mymain2").hide();
    
      $("#mymain3").hide();
    
      $("#mymain4").show();
    
      $("#mymain5").hide();
    
    
  });
    
  $("#mobilepicturegallery").click(function() {
    
    //alert("page 5 button works");
    
      $("title").text("Tiny's Website Page 5");	
    
      $("#main1").hide();
    
      $("#mymain2").hide();
    
      $("#mymain3").hide();
    
      $("#mymain4").hide();
    
      $("#mymain5").show();
    
    
  });	

});
