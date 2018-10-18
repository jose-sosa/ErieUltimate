import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'; 
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { TourneyComponent } from './tourney/tourney.component';
import { SidebartournamentsComponent } from './side/sidebartournaments/sidebartournaments.component';


const appRoutes: Routes = [
  {path: 'tournaments', component: TournamentsComponent},
  {path: '', component: TournamentsComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    MainComponent,
    FooterComponent,
    SideComponent,
    TournamentsComponent,
    TourneyComponent,
    SidebartournamentsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
