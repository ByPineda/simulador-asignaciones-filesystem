import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AsignacionContiguaScreenComponent } from './screens/asignacion-contigua-screen/asignacion-contigua-screen.component';
import { AsignacionVinculadaScreenComponent } from './screens/asignacion-vinculada-screen/asignacion-vinculada-screen.component';
import { AsignacionIndexadaScreenComponent } from './screens/asignacion-indexada-screen/asignacion-indexada-screen.component';
import { AsignacionFatScreenComponent } from './screens/asignacion-fat-screen/asignacion-fat-screen.component';
import { AsignacionInodoScreenComponent } from './screens/asignacion-inodo-screen/asignacion-inodo-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';


//ANGULAR MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


//Componentes
import {NavbarPartialComponent} from './partials/navbar-partial/navbar-partial.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignacionContiguaScreenComponent,
    AsignacionVinculadaScreenComponent,
    AsignacionIndexadaScreenComponent,
    AsignacionFatScreenComponent,
    AsignacionInodoScreenComponent,
    HomeScreenComponent,
    NavbarPartialComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgbModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
