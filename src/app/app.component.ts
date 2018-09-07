import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interview-media-v2';

  constructor(public db: AngularFirestore) {}
  ngOnInit() {
    this.db
      .collection('questions')
      .valueChanges()
      .subscribe(result => {
        console.log(result);
      });
  }
}
