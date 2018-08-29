import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#button-go").click(function(){
        $("#galeria-instalaciones").addClass("activeGallery");
      });
      $("#regresargaleria").click(function(){
        $("#galeria-instalaciones").removeClass("activeGallery");
      });
      $("#btn-galeria-instalaciones").click(function(){
        $("#galeria-instalaciones").removeClass("activeGallery");
      });
      $(".slider-galeria").slick({
        centerMode: true,
        centerPadding: '2px',
        slidesToShow: 1,
        prevArrow:"<span class='prev_arrow2'><img src='./assets/prev_arrow.svg'></span>",
        nextArrow:"<span class='next_arrow2'><img src='./assets/next_arrow.svg'></span>"
      });
    });

  }

}
