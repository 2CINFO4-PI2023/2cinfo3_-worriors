import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/Models/Question';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  question:Question= new Question();
  identifiant!:any;
  constructor(private route: ActivatedRoute,private router:Router,private ar:ActivatedRoute,private http:GlobalService) { }

  ngOnInit(): void {
    this.identifiant=this.route.snapshot.params['id'];
    this.loadData();
  }

  loadData(){

    this.http.getQuestionById(this.identifiant).subscribe(res=>{
      this.question=res;
      console.log(this.question);
    })

  }

  updateQuestion(form:Question){
    this.http.updateQuestion(this.identifiant,form).subscribe(()=>{

      this.router.navigate(['/admin/get-all-question']);
    })
  }

}
