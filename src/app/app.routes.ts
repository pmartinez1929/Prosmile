/**
 * Created by fmixagent on 22-Apr-17.
 */
// Components
import { HomeComponent } from './home/home.component';
import { CitaComponent } from './cita/cita.component';
import { AutodiagnosticoComponent } from './autodiagnostico/autodiagnostico.component';

// Routing
import {RouterModule, Routes} from '@angular/router';

const app_Routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cita', component: CitaComponent },
  { path: 'autodiagnostico', component: AutodiagnosticoComponent },
];

export const app_Routing = RouterModule.forRoot(app_Routes);
