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
});
