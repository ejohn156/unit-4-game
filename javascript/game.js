$(document).ready(function () {
    var desiredScore;
    var crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
    var currentScore = 0;
    var wins = 0;
    var losses = 0;
    desiredScore = Math.floor(Math.random() * 101) + 19
    $("#desiredscore").text(desiredScore)
    $("#currentscore").text(currentScore)
    $("#wins").text(wins)
    $("#losses").text(currentScore)


    $("#img1").on("click", function () {
        currentScore += crystalPoints[0]
        $("#currentscore").text(currentScore)

        if (currentScore == desiredScore) {
            
            desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;
            wins++
           
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)

        }
        else if (currentScore > desiredScore) {
            
            desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;
            losses++
            
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)

        }
    });
    $("#img2").on("click", function () {
        currentScore += crystalPoints[1]
        $("#currentscore").text(currentScore)

        if (currentScore == desiredScore) {
            
            desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;
            wins++
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)
        }
        else if (currentScore > desiredScore) {
            
            desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;
            losses++
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)
        }
    });
    $("#img3").on("click", function () {
        currentScore += crystalPoints[2]
        $("#currentscore").text(currentScore)

        if (currentScore == desiredScore) {
            
            desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;
            wins++
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)
        }
        else if (currentScore > desiredScore) {
            
            desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;
            losses++
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)
        }
    });
    $("#img4").on("click", function () {
        currentScore += crystalPoints[3]
        $("#currentscore").text(currentScore)

        if (currentScore == desiredScore) {
            
            desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;
            wins++
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)
        }
        else if (currentScore > desiredScore) {
            
            desiredScore = Math.floor(Math.random() * 101) + 19
            crystalPoints = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1]
            currentScore = 0;
            losses++
            $("#desiredscore").text(desiredScore)
            $("#currentscore").text(currentScore)
            $("#wins").text(wins)
            $("#losses").text(losses)
        }
    });




});

