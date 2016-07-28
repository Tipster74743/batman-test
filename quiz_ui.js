var QuizUI = {
  next: function(){
    if(test.hasEnded()){
      this.displayScore();
    }else{
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  displayQuestion: function(){
    this.populateId("question", test.getCurrentQuestion().text);
  },
  displayChoices: function(){
    var choices = test.getCurrentQuestion().choices;
    
    for(var i = 0; i < choices.length; i++){
      this.populateId("choice" + i, choices[i]);
      this.choiceHandler("guess" + i, choices[i]);
    }
  },
  displayScore: function(){
    var testComplete = "<h1>Test Complete</h1>";
    testComplete +="<h2>Your score is: " + test.score + "</h2>";
    this.populateId("quiz", testComplete);
  },
  populateId: function(id, text){
    var element = document.getElementById(id);
    element.innerHTML = text;
  },
  choiceHandler: function(id, choice){
    var button = document.getElementById(id);
    button.onclick = function(){
      test.choice(choice);
      QuizUI.next();
    }
  },
  displayProgress: function(){
    var currentQuestionNumber = test.currentQuestion + 1;
    this.populateId("progress", "Question " + currentQuestionNumber + " of " + test.questions.length);
    }
};
                    
                    