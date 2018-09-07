import { Question } from './../models/question.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable()
export class QuestionService {
  constructor(public afs: AngularFirestore) {}
  private availableQuestions: Question[] = [
    {
      id: 'question1',
      question: 'What is Angular?',
      date: new Date()
    },
    {
      id: 'question2',
      question:
        'Pitsy needs help in the given task by her teacher. The task is to divide a array into two sub array (left and right) containing n/2 elements each and do the sum of the subarrays and then multiply both the subarrays.Pitsy needs help in the given task by her teacher. The task is to divide a array into two sub array (left and right) containing n/2 elements each and do the sum of the subarrays and then multiply both the subarrays.',
      date: new Date()
    },
    {
      id: '',
      question: 'What is a Mocked Service in Angular Js? How to use it?',
      date: new Date()
    },
    {
      id: '',
      question:
        'Explain the difference between a factory and a service in AngularJS.',
      date: new Date()
    },
    {
      id: '',
      question: 'What is AngularJS? List some benefits of using AngularJS?',
      date: new Date()
    },
    {
      id: '',
      question: 'What is AngularJS? List some benefits of using AngularJS?',
      date: new Date()
    },
    {
      id: '',
      question:
        'Explain why there are two “destroy” events associated with the termination of a scope in AngularJS.',
      date: new Date()
    },
    {
      id: '',
      question:
        'What are directives? Can you explain the functions of the following directives?',
      date: new Date()
    },
    {
      id: '',
      question:
        'How experienced are you with e2e testing? Explain how e2e testing of AngularJS applications works.',
      date: new Date()
    },
    {
      id: '',
      question:
        'What is data binding in AngularJS? How does it relate to the MVC architecture?',
      date: new Date()
    },
    {
      id: '',
      question: 'What is the Model View Controller (MVC)?',
      date: new Date()
    }
  ];

  getAvailableQuestions() {
    return this.availableQuestions.slice();
  }

  submitQuestion(question: Question) {
    this.afs.collection('questions').add(question);
  }
}
