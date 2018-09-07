import { Question } from './../models/question.model';
import { QuestionService } from './../services/questions.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrls: ['./post-question.component.scss']
})
export class PostQuestionComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  ngOnInit() {}

  onSubmit(ngForm: NgForm) {
    const question: Question = {
      id: 'question1',
      question: ngForm.value.question,
      date: new Date()
    };
    this.questionService.submitQuestion(question);
    ngForm.reset();
  }
}
