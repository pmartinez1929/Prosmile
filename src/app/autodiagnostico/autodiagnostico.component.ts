import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../appdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autodiagnostico',
  templateUrl: './autodiagnostico.component.html',
  styleUrls: ['./autodiagnostico.component.scss']
})
export class AutodiagnosticoComponent implements OnInit {

  isAnswered:boolean;
  questionDiagnostic:any;

  constructor(public appData:AppdataService, private router: Router) { }

  ngOnInit() {
    this.isAnswered = false;
    this.questionDiagnostic = this.appData.arrayAutodiagnostico;
  }

  getAnswer(answer:boolean, id){
    this.answersAllDiagnostics(answer, id);
  }

  answersAllDiagnostics(answer, id){
    for(var i = 0; i < this.questionDiagnostic.length; i++){
        if(this.questionDiagnostic[i].id == id){
            this.questionDiagnostic[i].isPositive = answer;
            this.questionDiagnostic[i].isAnswer = true;
        }
    }
    console.log(this.questionDiagnostic)
  }
  goResults(){
    this.isAnswered = true;

  }

  goQuestionBack(){
    this.isAnswered = false;
  }

  goCita(){
    this.router.navigate(['./cita']);
  }
  goHome(){
    this.router.navigate(['./home']);
  }
}
