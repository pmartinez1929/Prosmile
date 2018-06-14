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

  formUser = {
    name: '',
    email:'',
    phone:'',
    date:'',
    time:'',
    message:''
  }

  constructor(private router: Router, public appData:AppdataService) { }

  ngOnInit() {
    $(document).ready(function(){
      new WOW().init();
    });
  }

  goHome(){
    this.router.navigate(['./home']);
  }

  sendEmailInformation(){
    console.log(this.formUser);
    this.appData.sendAppoinmentUser(this.formUser);
  }

}
