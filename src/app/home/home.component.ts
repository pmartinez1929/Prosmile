import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function(){
      $(document).scroll(function () {
        if ($(this).scrollTop() > $("#header-prosmile").position().top) {
            $("#header-prosmile").addClass("fixed-nav");
        } else {
            $("#header-prosmile").removeClass("fixed-nav");
        }
      });
    });

    $("#prosmile-mb").click(function(){
      $("#prosmile-mb").toggleClass("active");
      $("#ul-menu").toggleClass("active-menu");
    });

    $("#btn-1").click(function(e){
      e.preventDefault();
      $("#prosmile-mb").toggleClass("active");
      $("#ul-menu").toggleClass("active-menu");
      	$('html, body').animate({
      		scrollTop: $('#home').offset().top
      	}, 500, 'linear');
    });
    $("#logoprosmile").click(function(e){
      e.preventDefault();
      	$('html, body').animate({
      		scrollTop: $('#home').offset().top
      	}, 500, 'linear');
    });
    $("#btn-2").click(function(e){
      e.preventDefault();
      $("#prosmile-mb").toggleClass("active");
      $("#ul-menu").toggleClass("active-menu");
      	$('html, body').animate({
      		scrollTop: ($('#tratamientos').offset().top)- 60
      	}, 500, 'linear');
    });
    $("#btn-3").click(function(e){
      e.preventDefault();
      $("#prosmile-mb").toggleClass("active");
      $("#ul-menu").toggleClass("active-menu");
      	$('html, body').animate({
      		scrollTop: $('#aboutUs').offset().top
      	}, 500, 'linear');
    });
    $("#btn-4").click(function(e){
      e.preventDefault();
      $("#prosmile-mb").toggleClass("active");
      $("#ul-menu").toggleClass("active-menu");
      	$('html, body').animate({
      		scrollTop: ($('#nuestros-especialistas').offset().top) - 70
      	}, 500, 'linear');
    });
    $("#btn-5").click(function(e){
      e.preventDefault();
      $("#prosmile-mb").toggleClass("active");
      $("#ul-menu").toggleClass("active-menu");
      	$('html, body').animate({
      		scrollTop: $('#date-page').offset().top
      	}, 500, 'linear');
    });
  }

  goCita(){
    this.router.navigate(['./cita']);
  }

  goDiagnostico(){
    this.router.navigate(['./autodiagnostico']);
  }

}
