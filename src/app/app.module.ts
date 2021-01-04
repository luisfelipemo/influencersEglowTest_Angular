import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//rutas
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


import { AppComponent } from './app.component';
import{HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { InfluencerListComponent } from './influencer-list/influencer-list.component';
import { InfluencerCreateComponent } from './influencer-create/influencer-create.component';
import { InfluencerUpdateComponent } from './influencer-update/influencer-update.component';

const material = [
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    InfluencerListComponent,
    InfluencerCreateComponent,
    InfluencerUpdateComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    ReactiveFormsModule,
    MatSelectModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    BrowserModule,
    AppRoutingModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
