import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongvotingComponent } from "../app/songvoting/songvoting.component";

const routes: Routes = [
  { path: 'vote-Sega/:category', component: SongvotingComponent },
  { path: 'vote-Bollywood/:category', component: SongvotingComponent },
  { path: 'vote-International/:category', component: SongvotingComponent },
  { path: 'vote-Public/:category', component: SongvotingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
