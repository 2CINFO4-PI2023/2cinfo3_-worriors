import { Component, OnInit } from '@angular/core';
import { Question } from '../Models/Question';
import { GlobalService } from '../services/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {
  question:Question= new Question();

  constructor(private router:Router,private ar:ActivatedRoute,private http:GlobalService) { }

  ngOnInit(): void {
  }

  AddQuestion(form:Question){
    this.http.postQuestion(form).subscribe(()=>{
      this.router.navigate(['/']);
    })
  }

}
