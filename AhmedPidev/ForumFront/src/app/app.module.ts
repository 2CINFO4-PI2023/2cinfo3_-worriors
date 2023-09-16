import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { ForumSingleComponent } from './forum-single/forum-single.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FooterBackComponent } from './footer-back/footer-back.component';
import { HeaderBackComponent } from './header-back/header-back.component';
import { SideBarBackComponent } from './side-bar-back/side-bar-back.component';

import { AddQuestionComponent } from './back-office/add-question/add-question.component';
import { GetAllQuestionComponent } from './back-office/get-all-question/get-all-question.component';
import { GetSingleQuestionComponent } from './back-office/get-single-question/get-single-question.component';
import { UpdateQuestionComponent } from './back-office/update-question/update-question.component';
import { UpdateQuestionFrontComponent } from './update-question-front/update-question-front.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    ForumSingleComponent,
    AskQuestionComponent,
    AdminComponent,
    FooterBackComponent,
    HeaderBackComponent,
    SideBarBackComponent,
   
    AddQuestionComponent,
    GetAllQuestionComponent,
    GetSingleQuestionComponent,
    UpdateQuestionComponent,
    UpdateQuestionFrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
