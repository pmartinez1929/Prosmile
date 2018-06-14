import { Component, OnInit } from '@angular/core';
import { AppdataService } from '../appdata.service';
declare var $: any;


@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.scss']
})
export class SpecialistComponent implements OnInit {

  especialistas:any;

  constructor(public appData:AppdataService) {
    this.especialistas = this.appData.arrayEspecialistas;
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".slider").slick({
        centerMode: true,
        centerPadding: '2px',
        slidesToShow: 3,
        prevArrow:"<span class='prev_arrow'><img src='./assets/prev_arrow.svg'></span>",
        nextArrow:"<span class='next_arrow'><img src='./assets/next_arrow.svg'></span>",
        responsive: [
          {
            breakpoint: 800,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    });
  }

}
