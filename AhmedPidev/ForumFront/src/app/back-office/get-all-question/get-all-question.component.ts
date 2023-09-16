import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-get-all-question',
  templateUrl: './get-all-question.component.html',
  styleUrls: ['./get-all-question.component.css']
})
export class GetAllQuestionComponent implements OnInit {

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
