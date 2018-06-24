var numberCorrect = 0;
var numberIncorrect = 0;
var unanswered = 0;
var questionCount = 0;
var countdown = 21;

var questionObject = {
	"ques" : [
		{ "question" : "Which year was the 'Playstation 4' released?",
			"answer" : "2013",
			"choices" : ["2013", "2015", "2011", "2017"],
			},

		{ "question" : "What does 'Mario' jumps on after completing a level?",
			"answer" : "Flag Pole",
			"choices" : ["Star", "Turtle", "Mushroom", "Flag Pole"],
			},

		{ "question" : "What is the name of the main character in 'The Legend of Zelda'?",
			"answer" : "Link",
			"choices" : ["Kratos", "Zelda", "Link", "Samus"],
			},

		{ "question" : "'Master Chief' is the main character of which game?",
			"answer" : "Halo",
			"choices" : ["God of War", "Grand Theft Auto", "Call of Duty", "Halo"],
			},

		{ "question" : "The '3DS' is made by which company?",
			"answer" : "Nintendo",
			"choices" : ["Atari", "Nintendo", "Sega", "Sony"],
			},

		{ "question" : "The 'Metal Gear' series is developed and published by which company?",
			"answer" : "Konami",
			"choices" : ["EA", "Capcom", "Konami", "Activision"],
			},

		{ "question" : "What video game system was released in the US by 'NEC' in 1989?",
			"answer" : "TurboGrafx-16",
			"choices" : ["TurboGrafx-16", "Neo-Geo", "NES", "Master System"],
			},

		{ "question" : "Which media storage format was used in the 'Playstation 2'?",
			"answer" : "DVD",
			"choices" : ["Blu-Ray", "DVD", "CD", "Cartridge"],
			},

		{ "question" : "In what year did 'The Last of Us' win game of the year at the 'Spike Video Game Awards'?",
			"answer" : "2013",
			"choices" : ["2012", "2015", "2014", "2013"],
			},

		{ "question" : "What is the name of the main character in first 'Metal Gear' game on the original 'Playstation'?",
			"answer" : "Solid Snake",
			"choices" : ["Liquid Snake", "Red Snake", "Solid Snake", "Naked Snake"],
			},
		],
	};


$("#answer-box").hide();
$('#results-box').hide();
$('#wrong-answer').hide();
$('#right-answer').hide();


$("#start-button").on("click", function() {
		$("#start-button").hide();

	numberCorrect = 0, numberIncorrect = 0, unanswered = 0, questionCount=0, countdown = 21;

	countInterval = setInterval(nextQuestionCountDown, 1000);

	begin();

});



function askQuestion(questionCount) {
	$('#wrong-answer').hide();
	$('#right-answer').hide();
	countdown = 21;
	console.log(countdown);
	console.log("You're on question # " + questionCount);

	$('#answer-box').show();

	if( questionCount < 10 ) {
		console.log("Question displayed: " + questionObject.ques[questionCount].question);
		$('#question-box').html(questionObject.ques[questionCount].question);

		
		$('#a').html(questionObject.ques[questionCount].choices[0]);
		$('#b').html(questionObject.ques[questionCount].choices[1]);
		$('#c').html(questionObject.ques[questionCount].choices[2]);
		$('#d').html(questionObject.ques[questionCount].choices[3]);
	}

	else {
		
		clearInterval(countInterval);
		results();
	}
}


function nextQuestionCountDown() {
	countdown--;

    $('#countdown').html('<h2>Time Remaining: ' + countdown + ' seconds</h2>');
    
    if (countdown === 0){

        clearInterval(countInterval);

        unanswered++;
        console.log("Unanswered Questions: " + unanswered);
        alert('Time Up!');

        questionCount++;

        if ( questionCount == 10 ) {
        	clearInterval(countInterval);
        	results();
        }
        else {
	        askQuestion(questionCount);
	        countdown = 21;
	        countInterval = setInterval(nextQuestionCountDown,1000);
        }

    }
}



function checkAnswer(selected) {
	if(selected === questionObject.ques[questionCount].answer) {
		return true;
	}
	else {
		return false;
	}
}


function begin(){
	
	$('#wrong-answer').hide();
	$('#right-answer').hide();
	$('#results-box').hide();
	$('#question-box').show();
	$('#answer-box').show();
	$('#countdown').show();

	askQuestion(questionCount);

	counter=21;

	
	$('.list-group-item').on('click', function(){

	
		if (checkAnswer($(this).html()) === true){
				
			alert("Good job! You selected the correct answer!")
			numberCorrect++;
			console.log("Number correct: "+numberCorrect);
			questionCount++;
			askQuestion(questionCount);

		}

	
		else if (checkAnswer($(this).html()) === false){
				
			alert("Wrong answer :( Better luck next time!")
			numberIncorrect++;
			console.log("Number incorrect: "+numberIncorrect);
			questionCount++;
			askQuestion(questionCount);

		};
	})

	if (countdown === 0){
		$('#question-box').hide();
		$('#answer-box').hide();
		$('#results-box').html("You ran out of time!");
		unanswered++;
		askQuestion();
	}
}


function results () {
	$('#question-box').hide();
	$('#answer-box').hide();
	$('#countdown').hide();
	$('#results-box').show();
	$('#correct').html("Number Correct: " + numberCorrect);
	$('#incorrect').html("Number Incorrect: " + numberIncorrect);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#play-again').on("click", function(){
		resetGame();
		begin();
	});

	console.log("Number Correct: " + numberCorrect);
	console.log("Number Incorrect: " + numberIncorrect);
	console.log("Unanswered: " + unanswered);

}


function resetGame(){
	numberCorrect = 0, numberIncorrect = 0, unanswered = 0, questionCount=0, countdown = 21;

}