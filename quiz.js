var quiz = function Quiz(questions){
  this.questions = questions;
  this.score = 0;
  this.currentQuestion = 0;
}

quiz.prototype.choice = function(choice){
 if(this.getCurrentQuestion().checkAnswer(choice)){
    this.score++
  }
  this.currentQuestion++;
}
  
quiz.prototype.getCurrentQuestion = function(){
  return this.questions[this.currentQuestion];
};
  
quiz.prototype.hasEnded = function(){
  return this.currentQuestion >= this.questions.length;
};