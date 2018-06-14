import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { AboutComponent } from './about/about.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { ContactComponent } from './contact/contact.component';
import { CitaComponent } from './cita/cita.component';
import { AutodiagnosticoComponent } from './autodiagnostico/autodiagnostico.component';

import { AppdataService } from './appdata.service';
import { app_Routing } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TratamientosComponent,
    AboutComponent,
    SpecialistComponent,
    ContactComponent,
    CitaComponent,
    AutodiagnosticoComponent,
  ],
  imports: [
    BrowserModule,
    app_Routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [AppdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
