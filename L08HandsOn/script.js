

$(document).ready(function(){

// *** H1 transition when hovered ***
    $("#head").hover(function(){
        $("#head").css("color", "yellow");
    }, function(){
        $("#head").css("color", "#f30909");
    });

    
    
// *** Paragragh change to new text ***
    $("#par2").click(function(){
        $("#par2").text("A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
    });
// *** list element double clicked ***
    $("#hid").dblclick(function(){
        $("#hid").hide();
    });
    $("#hid1").dblclick(function(){
        $("#hid1").hide();
    });
    $("#hid2").dblclick(function(){
        $("#hid2").hide();
    });
    $("#hid3").dblclick(function(){
        $("#hid3").hide();
    });
    $("#hid4").dblclick(function(){
        $("#hid4").hide();
    });

// *** input on keydown ***

    $("input").keydown(function(){
        $("input").css("color", "red");
    });
    $("input").keyup(function(){
        $("input").css("color", "black");
    });
});

