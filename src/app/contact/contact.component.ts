import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    email:'',
    phone:'',
    message:''
  }

  constructor(public appData:AppdataService) { }

  ngOnInit() {
  }

  contactPage(){
    this.appData.sendContact(this.contact);
    this.contact = {
      name: '',
      email:'',
      phone:'',
      message:''
    }
  }
}
