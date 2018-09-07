import { AngularFirestore } from 'angularfire2/firestore';
import { Question } from './../models/question.model';
import { QuestionService } from './../services/questions.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.scss']
})
export class QuestionsListComponent implements OnInit, AfterViewInit {
  questions: Question[] = [];
  displayedColumns = ['date', 'question', 'action'];
  dataSource = new MatTableDataSource<Question>();
  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  constructor(
    private questionsService: QuestionService,
    private db: AngularFirestore
  ) {}

  ngOnInit() {
    this.dataSource.data = this.questionsService.getAvailableQuestions();
    this.db
      .collection('questions')
      .valueChanges()
      .subscribe(result => {
        console.log(result);
      });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
