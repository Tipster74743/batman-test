var questions = [
  new Question("Who is Batman's altar ego?", ["Clark Kent", "Barry Allen", "Bruce Wayne", "Bruce Banner"], "Bruce Wayne"),
  
  new Question("How many Children does Bruce Wayne have?", ["1", "4", "6", "7"], "7"),
  
  new Question("Which of these is NOT a major foe in the Batman storyline?", ["Lex Luther", "Ra's al Ghul", "The Joker", "Dr. Hugo Strange"], "Lex Luther")
];

var test = new quiz(questions);

QuizUI.next();