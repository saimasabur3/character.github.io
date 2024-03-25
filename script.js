let num = 0;

$(".submit").click(function() {
  let count = $(".input1").val();
  let self = $(".input2").val();
  if(self === "Introvert"){
    $(".ryan").show();
    $(".ryana").show();
    $(".marissa").hide();
    $(".seth").hide();
    $(".summer").hide();

  } else if (count >= 3 && count<=5 && self === "Extrovert"){
    $(".seth").show();
    $(".sethc").show();
    $(".marissa").hide();
    $(".ryan").hide();
    $(".summer").hide();
  } else if (count > 7 && self === "Extrovert"){
    $(".summer").show();
    $(".summerr").show();
    $(".marissa").hide();
    $(".seth").hide();
    $(".ryan").hide();
  } else if (count <= 2 && self === "Introvert"){
    $(".marissa").hsow();
    $(".marissac").show();
    $(".seth").hide();
    $(".summer").hide();
    $(".ryan").hide();
  }
  num++; // adds 1 to num
  $(".counter").text("Number of times quiz was taken: " + num); // output:
  });