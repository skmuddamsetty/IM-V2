import { MaterialModule } from './material.module';
import { QuestionService } from './services/questions.service';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PostQuestionComponent } from './post-question/post-question.component';
import { LoginComponent } from './login/login.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostQuestionComponent,
    LoginComponent,
    QuestionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
