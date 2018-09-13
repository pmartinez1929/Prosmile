import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from '../appdata.service';
declare var $: any;
import { WOW } from 'wowjs/dist/wow.min';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  horarioHour = "Horario";

  horarios = [
    { 'id' : 0 , 'name' : 'Horario'},
    { 'id' : 1 , 'name' : '10:00 - 11:00'},
    { 'id' : 2 , 'name' : '11:00 - 12:00'},
    { 'id' : 3 , 'name' : '12:00 - 13:00'},
    { 'id' : 4 , 'name' : '13:00 - 14:00'},
    { 'id' : 5 , 'name' : '14:00 - 15:00'},
    { 'id' : 6 , 'name' : '15:00 - 16:00'},
    { 'id' : 7 , 'name' : '16:00 - 17:00'},
    { 'id' : 8 , 'name' : '17:00 - 18:00'},
    { 'id' : 9 , 'name' : '18:00 - 19:00'},
  ]

  formUser = {
    name: '',
    email:'',
    phone:'',
    date:'',
    time:this.horarioHour,
    message:''
  }

  dateReserved:boolean = false;

  constructor(private router: Router, public appData:AppdataService) { }

  ngOnInit() {
    $(document).ready(function(){
      new WOW().init();
    });
    this.dateReserved =true;
  }

  goHome(){
    this.router.navigate(['./home']);
  }

  sendEmailInformation(){
    console.log(this.formUser);
    this.dateReserved =false;
    this.appData.sendAppoinmentUser(this.formUser);
    this.formUser = {
      name: '',
      email:'',
      phone:'',
      date:'',
      time:this.horarioHour,
      message:''
    }
  }

}
