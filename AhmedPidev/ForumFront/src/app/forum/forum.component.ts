import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  questionList:any;
  userList:any;
  responsesList:any;
  questionCount!:number;
  responseCount!:number;
  userCount!:number;
  isAdmin=true;
  constructor(private http:GlobalService) { }

  ngOnInit(): void {
    this.refreshData();


  }

  refreshData(){
    this.http.getAllQuestions().subscribe((val)=>{
      console.log(val);
      this.questionList=val;
      this.questionList.reverse();
    });

  this.http.getAllResponses().subscribe((val)=>{
      console.log(val);
      this.responsesList=val;
    });

this.http.getAllUsers().subscribe((val)=>{
      console.log(val);
      this.userList=val;
    })

    this.http.getQuestionsCount().subscribe((val)=>{
      console.log(val);
      this.questionCount=val;
    })

    this.http.getResponsesCount().subscribe((val)=>{
      console.log(val);
      this.responseCount=val;
    })

    this.http.getUsersCount().subscribe((val)=>{
      console.log(val);
      this.userCount=val;
    })
  }

  deleteQuestion(id:any){
    this.http.deleteQuestion(id).subscribe(res=>{
      this.refreshData();
    })
  }

}
