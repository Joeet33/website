// JavaScript Document

$(document).ready(function(){

  alert("Page Loaded");
    
$("#flex-item2_main").click(function(){
   
  //alert("Page 1 Button working");
 
$("title").text("Page 1");
   
$("#main1").show();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();
   
});
    
    
$("#flex-item2_1").click(function(){
   
  //alert("Page 2 Button working");
 
$("title").text("Page 2");
   
$("#main1").hide();

$("#main2").show();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();
   
});    
   
$("#flex-item2_2").click(function(){
   
  //alert("Page 3 Button working");
 
$("title").text("Page 3");

$("#main1").hide();

$("#main2").hide();

$("#main3").show();

$("#main4").hide();

$("#main5").hide();
   
});
   
$("#flex-item2_3").click(function(){
   
  //alert("Page 4 Button working");

$("title").text("Page 4");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").show();

$("#main5").hide();
   
});
   
$("#flex-item2_4").click(function(){
   
  //alert("Page 5 Button working");

$("title").text("Page 5");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").show();
   
});

});

$(function(){

 // jQuery methods go here...

});