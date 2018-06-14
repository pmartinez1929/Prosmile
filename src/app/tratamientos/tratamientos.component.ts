import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  styleUrls: ['./tratamientos.component.scss']
})
export class TratamientosComponent implements OnInit {


  tratamientos:any;

  constructor(public appData:AppdataService) { }

  ngOnInit() {
    this.tratamientos = this.appData.arrayTratamientos;
  }



}
