$(document).ready(function () {
   // initialize all needed variables
    var desiredScore;
    var crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    desiredScore = Math.floor(Math.random() * 101) + 19
    //fill start information onto html page
    $("#desiredscore").text(desiredScore)
    $("#currentscore").text(currentScore)
    $("#wins").text(wins)
    $("#losses").text(currentScore)
    //created necessary functions
    function newRound(){
        desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;           
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)
    }
    function play(x){   
        if (x == "img1")
        currentScore += crystalPoints[0]
        
        else if (x == "img2")
        currentScore += crystalPoints[1]
        
        else if (x == "img3")
        currentScore += crystalPoints[2]
        
        else if (x == "img4")
        currentScore += crystalPoints[3]
        
        $("#currentscore").text(currentScore)
        if (currentScore == desiredScore) {
            wins++
            newRound()
        }
        else if (currentScore > desiredScore) {           
            losses++
            newRound()
        }
    }
    //create events allowing user to interact with the game
    $("#img1").on("click", function () {
        play($("#img1").attr("id"))  
    });
    $("#img2").on("click", function () {
        play($("#img2").attr("id"))  
    });
    $("#img3").on("click", function () {
        play($("#img3").attr("id"))
    });
    $("#img4").on("click", function () {
        play($("#img4").attr("id"))   
    });
});

