import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongvotingComponent } from "../app/songvoting/songvoting.component";

const routes: Routes = [
  { path: 'vote-Séga/:category', component: SongvotingComponent },
  { path: 'vote-Bollywood/:category', component: SongvotingComponent },
  { path: 'vote-Internationale/:category', component: SongvotingComponent },
  { path: 'vote-Choix Du Public-Canada/:category', component: SongvotingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
