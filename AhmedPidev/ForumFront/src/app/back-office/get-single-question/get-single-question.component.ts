import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from 'src/app/Models/Response';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-get-single-question',
  templateUrl: './get-single-question.component.html',
  styleUrls: ['./get-single-question.component.css']
})
export class GetSingleQuestionComponent implements OnInit {

  forum:any;
  forum_solve:any={solved:true};
  question:any
  question_response:any
  response:Response= new Response();
  isAdmin=true;

  
  identifiant!:any;
  constructor(private route: ActivatedRoute, private http: GlobalService) {
  }

  ngOnInit(): void {
    this.identifiant=this.route.snapshot.params['id'];
    this.response.forum_question_id=this.identifiant;
    this.response.UserId="64a98ff9d2c9fdf898495c25";
    this.response.Email="ahmed.test@hotmail.com"
    this.loadData();
   
  }

  loadData(){

    this.http.getQuestionById(this.identifiant).subscribe(res=>{
      this.question=res;
      console.log(this.question);
    })

    this.http.getAllResponses().subscribe(res=>{
      this.question_response=res;

      let vals = this.question_response.filter((obj:any)=>{
        return obj.forum_question_id == this.identifiant;
      });
      this.question_response=vals
      
      console.log(vals)
    })
  }

  sendEmail(form:any){
    this.http.sendEmail(form).subscribe(res=>{
      console.log("email has been sent to user this.response.UserId")
    })
  }

  solve(){
    this.http.solveQuestion(this.identifiant,this.forum_solve).subscribe(res=>{
      console.log(this.forum_solve);
      console.log(res);
      this.loadData();
    })
  }

  AddComment(form:any){

    this.http.postResponse(form).subscribe(res=>{
      this.loadData();
      this.sendEmail(form);
    })
  }

  deleteResponse(id:any){
    this.http.deleteResponse(id).subscribe(res=>{
      this.loadData();
    })
  }

}
