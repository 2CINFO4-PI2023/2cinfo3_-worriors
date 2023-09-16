import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from './forum/forum.component';
import { ForumSingleComponent } from './forum-single/forum-single.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { AdminComponent } from './admin/admin.component';

import { AddQuestionComponent } from './back-office/add-question/add-question.component';
import { GetAllQuestionComponent } from './back-office/get-all-question/get-all-question.component';
import { GetSingleQuestionComponent } from './back-office/get-single-question/get-single-question.component';
import { UpdateQuestionComponent } from './back-office/update-question/update-question.component';
import { UpdateQuestionFrontComponent } from './update-question-front/update-question-front.component';

const routes: Routes = [
  {path:"",component:ForumComponent},
  {path:"forum-number/:id",component:ForumSingleComponent},
  {path:"ask-question",component:AskQuestionComponent},
  {path:'update-question/:id',component:UpdateQuestionFrontComponent},
  {path:"admin",component:AdminComponent,
    children:[
      {path:'add-question',component:AddQuestionComponent},
      {path:'get-all-question',component:GetAllQuestionComponent},
      {path:"forum-number/:id",component:GetSingleQuestionComponent},
      {path:'update-question/:id',component:UpdateQuestionComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
