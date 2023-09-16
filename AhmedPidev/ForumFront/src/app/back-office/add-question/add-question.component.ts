import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/Models/Question';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  question:Question= new Question();

  constructor(private router:Router,private ar:ActivatedRoute,private http:GlobalService) { }

  ngOnInit(): void {
  }

  AddQuestion(form:Question){
    this.http.postQuestion(form).subscribe(()=>{

      this.router.navigate(['/admin/get-all-question']);
    })
  }

}
