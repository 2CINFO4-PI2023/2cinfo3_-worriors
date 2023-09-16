import { Component, OnInit } from '@angular/core';
import { Question } from '../Models/Question';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-update-question-front',
  templateUrl: './update-question-front.component.html',
  styleUrls: ['./update-question-front.component.css']
})
export class UpdateQuestionFrontComponent implements OnInit {

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

      this.router.navigate(['/']);
    })
  }

}
