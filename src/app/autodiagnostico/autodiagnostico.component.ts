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
  notAnswered:boolean;
  messageAllNegative:boolean;

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
    let validateAnswers:number=0;
    for(var i = 0; i < this.questionDiagnostic.length; i++){
        if(this.questionDiagnostic[i].isAnswer == true){
          console.log("ha contestado todo");
          validateAnswers++;
          console.log("suma:" + validateAnswers);
        }else{
          console.log("le falta contestar");
        }
    }
    if(validateAnswers === 8){
      this.allAnswerValidation();
      this.notAnswered =false;
    }else{
      this.notAnswered =true;
    }
  }

  allAnswerValidation(){
    let allNegative:number=0;
    for(var i = 0; i < this.questionDiagnostic.length; i++){
        if(this.questionDiagnostic[i].isPositive == false){
          allNegative++;
          console.log("suma:" + allNegative);
        }else{
          console.log("le falta contestar");
        }
    }
    this.isAnswered=true;

    if(allNegative === 8){
      this.messageAllNegative = true;
    }else{
      this.messageAllNegative = false;
    }

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
