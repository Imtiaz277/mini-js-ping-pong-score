const p1Score = document.querySelector("#p1Score");
const p2Score = document.querySelector("#p2Score");

const scoreDropDownMenu = document.querySelector("#maxScore");
let maxScore = parseInt(scoreDropDownMenu.value);

const incrementP1ScoreBtn = document.querySelector("#incrementP1ScoreBtn");
const incrementP2ScoreBtn = document.querySelector("#incrementP2ScoreBtn");
const resetBtn = document.querySelector("#resetBtn");

function togglePlayerScoreBtn(boolValue){
    incrementP1ScoreBtn.disabled = boolValue;
    incrementP2ScoreBtn.disabled = boolValue;
}

function checkWinner(){
    //- If player 1 wins
    if(parseInt(p1Score.textContent) >= maxScore){
        p1Score.classList.add("has-text-success");
        p2Score.classList.add("has-text-danger");
        togglePlayerScoreBtn(true);
    }
    //- If player 2 wins
    else if(parseInt(p2Score.textContent) >= maxScore){
        p1Score.classList.add("has-text-danger");
        p2Score.classList.add("has-text-success");
        togglePlayerScoreBtn(true);
    }
}

//- When the user picks anything from the score drop down menu
scoreDropDownMenu.addEventListener("input", function(){
    maxScore = scoreDropDownMenu.value;
    if(incrementP1ScoreBtn.disabled !== true){ checkWinner(); }
});

//- When p1 score increase button is clicked
incrementP1ScoreBtn.addEventListener("click", function(){
    let currentScore = parseInt(p1Score.textContent);
    currentScore = currentScore + 1;
    p1Score.textContent = currentScore;
    checkWinner();
});

//- When p2 score increase button is clicked
incrementP2ScoreBtn.addEventListener("click", function(){
    let currentScore = parseInt(p2Score.textContent);
    currentScore = currentScore + 1;
    p2Score.textContent = currentScore;
    checkWinner();
});

//- When the reset button is clicked
resetBtn.addEventListener("click", function(){
    togglePlayerScoreBtn(false);
    //- Reset player score
    p1Score.textContent = "0";
    p2Score.textContent = "0";
    //- Reset text color
    p1Score.classList.remove("has-text-success", "has-text-danger");
    p2Score.classList.remove("has-text-success", "has-text-danger");
});