$(document).ready(function(){
  var clicks = true;
  var job1 = true;
  var job2 = true;
  var job3 = true;
  var proj1 = true;
  var proj2 = true;
  var proj3 = true;
  var proj4 = true;
  $('.menu_icon').click(function() {
    if (clicks) {
      $('.mobile_menu').slideDown();
      clicks = false;
    } else {
      $('.mobile_menu').slideUp();
      clicks = true;
    }
  });
  $('.job1').click(function() {
    if (job1) {
      $('.job1info').slideDown();
      $('.job1').css('background','#3498db');
      job1 = false;
    } else {
      $('.job1info').slideUp();
      $('.job1').css('background','');
      job1 = true;
    }
  });
  $('.job2').click(function() {
    if (job2) {
      $('.job2info').slideDown();
      $('.job2').css('background','#3498db');
      job2 = false;
    } else {
      $('.job2info').slideUp();
      $('.job2').css('background','');
      job2 = true;
    }
  });
  $('.job3').click(function() {
    if (job3) {
      $('.job3info').slideDown();
      $('.job3').css('background','#3498db');
      job3 = false;
    } else {
      $('.job3info').slideUp();
      $('.job3').css('background','');
      job3 = true;
    }
  });
  $('.proj1').click(function() {
    if (proj1) {
      $('.proj1info').slideDown();
      $('.proj1').css('background','#34495E');
      proj1 = false;
    } else {
      $('.proj1info').slideUp();
      $('.proj1').css('background','');
      proj1 = true;
    }
  });
  $('.proj2').click(function() {
    if (proj2) {
      $('.proj2info').slideDown();
      $('.proj2').css('background','#34495E');
      proj2 = false;
    } else {
      $('.proj2info').slideUp();
      $('.proj2').css('background','');
      proj2 = true;
    }
  });
  $('.proj3').click(function() {
    if (proj3) {
      $('.proj3info').slideDown();
      $('.proj3').css('background','#34495E');
      proj3 = false;
    } else {
      $('.proj3info').slideUp();
      $('.proj3').css('background','');
      proj3 = true;
    }
  });
  $('.proj4').click(function() {
    if (proj4) {
      $('.proj4info').slideDown();
      $('.proj4').css('background','#34495E');
      proj4 = false;
    } else {
      $('.proj4info').slideUp();
      $('.proj4').css('background','');
      proj4 = true;
    }
  });


});
