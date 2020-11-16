import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-retention-quiz',
  templateUrl: './retention-quiz.page.html',
  styleUrls: ['./retention-quiz.page.scss'],
})
export class RetentionQuizPage implements OnInit {

  questions;
  question;
  questionIndex = 0;
  answers;
  answer;
  isRightAnswer = false;
  isNextQuestion = true;
  isPrevQuestion = false;
  currentScore = 0;
  selectedIndex;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    var questionData = await this.dataService.getNewsArticle()
    console.log(questionData.questions)
    this.questions = questionData.questions
    this.question = this.questions[this.questionIndex]['question']
    this.answers = this.questions[this.questionIndex]['answers']
    this.answer = this.questions[this.questionIndex]['answer']
  }

  checkAnswer(answerIndex){
    this.selectedIndex = answerIndex;
    var submittedAnswer = this.answers[answerIndex].toLowerCase()
    if(this.answer == submittedAnswer) {
      // win condition - change css
      this.isRightAnswer = true;
    } else {
      // fail condition - change css
      this.isRightAnswer = false;
    }
  }

  nextQuestion(){
    this.isRightAnswer = false;
    this.selectedIndex = undefined;
    console.log()
    if(this.questions[this.questionIndex+1] != undefined){
      this.questionIndex +=1;
      var tempData = JSON.parse(JSON.stringify(this.questions[this.questionIndex]));
      this.question = tempData['question'];
      this.answers = tempData['answers'];
      this.answer = tempData['answer'];
      this.isPrevQuestion = true;
    } else {
      this.isNextQuestion = false;
    }
  }

  prevQuestion(){
    this.isRightAnswer = false;
    this.selectedIndex = undefined;
    if(this.questionIndex > 0){
      this.questionIndex -= 1;
      var tempData = JSON.parse(JSON.stringify(this.questions[this.questionIndex]))
      this.question = tempData['question']
      this.answers = tempData['answers']
      this.answer = tempData['answer']
      this.isNextQuestion = true;
    } else {
      this.isPrevQuestion = false;
    }
  }

}
