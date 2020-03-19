// JavaScript Document

$(document).ready(function(){

  alert("Page Loaded");
    
$("#flex-item_1").click(function(){
   
  //alert("Page 1 Button working");
 
$("title").text("Page 1");
   
$("#main1").show();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();

$("#sign-up").hide();

$("#login").hide();
   
});
        
$("#flex-item_2").click(function(){
   
  //alert("Page 2 Button working");
 
$("title").text("Page 2");
   
$("#main1").hide();

$("#main2").show();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();

$("#sign-up").hide();

$("#login").hide();
   
});    
   
$("#flex-item_3").click(function(){
   
  //alert("Page 3 Button working");
 
$("title").text("Page 3");

$("#main1").hide();

$("#main2").hide();

$("#main3").show();

$("#main4").hide();

$("#main5").hide();

$("#sign-up").hide();

$("#login").hide();
   
});
   
$("#flex-item_4").click(function(){
   
  //alert("Page 4 Button working");

$("title").text("Page 4");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").show();

$("#main5").hide();

$("#sign-up").hide();

$("#login").hide();
   
});
   
$("#flex-item_5").click(function(){
   
  //alert("Page 5 Button working");

$("title").text("Page 5");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").show();

$("#sign-up").hide();

$("#login").hide();
   
});

$("#flex-item_6").click(function(){
   
  //alert("sign up Button working");

$("title").text("sign up");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();

$("#sign-up").show();

$("#login").hide();
   
});

$("#flex-item_7").click(function(){
   
  //alert("login Button working");

$("title").text("login");
   
$("#main1").hide();

$("#main2").hide();

$("#main3").hide();

$("#main4").hide();

$("#main5").hide();

$("#sign-up").hide();

$("#login").show();
   
});

});

$(function(){

 // jQuery methods go here...

});