import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {InfluencerListComponent} from './influencer-list/influencer-list.component';
import {InfluencerCreateComponent} from './influencer-create/influencer-create.component';
import {InfluencerUpdateComponent} from './influencer-update/influencer-update.component';
import { fromEventPattern } from 'rxjs';

const routes: Routes = [
  {path:'home', component: InfluencerListComponent},
  {path:'influencer', component: InfluencerCreateComponent},
  {path:'influencer/edit', component: InfluencerUpdateComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
