(function() {
    var min = 1;
    var max = 1000;
    var randomNum = getRandom();
    console.log(randomNum);

    function getRandom(){
        return Math.floor(Math.random() * (max - min + 1) - min);
    }

    window.start = function() {

        for (var i = 0; i <= 10;i++) {

            if (i === 10) {
                var newGame = confirm("Начать иру заново?");
                if (newGame) {
                    randomNum = getRandom();
                    return start();
                } else {
                    break;
                }      
            }
        var userAnswer = prompt("Введите число", "");

        var userAnswerNum = parseInt(userAnswer);

            if (userAnswerNum > randomNum) {
                alert("Меньше!");
                continue;
            } else if (userAnswerNum < randomNum) {
                alert("Больше!");
                continue;
            } else if (userAnswerNum === randomNum) {
                alert("Правильно");
                break;
            } else if (isNaN(userAnswer)) {
                alert("Введи число");
                continue;
            } else if (userAnswer === "") {
                alert("Введи число");
                continue;
            } else if (userAnswer === null) {
                alert("Game over");
                break;
            }
        }
    };
})();