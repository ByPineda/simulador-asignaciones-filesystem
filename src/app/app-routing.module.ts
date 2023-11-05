import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsignacionContiguaScreenComponent } from './screens/asignacion-contigua-screen/asignacion-contigua-screen.component';
import { AsignacionVinculadaScreenComponent } from './screens/asignacion-vinculada-screen/asignacion-vinculada-screen.component';
import { AsignacionIndexadaScreenComponent } from './screens/asignacion-indexada-screen/asignacion-indexada-screen.component';
import { AsignacionFatScreenComponent } from './screens/asignacion-fat-screen/asignacion-fat-screen.component';
import { AsignacionInodoScreenComponent } from './screens/asignacion-inodo-screen/asignacion-inodo-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

const routes: Routes = [
  {
    path: '',
    component : HomeScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'contigua',
    component: AsignacionContiguaScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'vinculada',
    component: AsignacionVinculadaScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'indexada',
    component: AsignacionIndexadaScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'fat',
    component: AsignacionFatScreenComponent,
    pathMatch: 'full',
  },
  {
    path: 'inodo',
    component: AsignacionInodoScreenComponent,
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
