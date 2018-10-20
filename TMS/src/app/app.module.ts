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

import { TransportService } from './services/transport.service';
import { ViewTourneyComponent } from './tournaments/view-tourney/view-tourney.component';
import { SidebartourneyComponent } from './side/sidebartourney/sidebartourney.component'; 


const appRoutes: Routes = [
  // {path: '',  component: TournamentsComponent},
  {path: 'tournaments', component: TournamentsComponent},
  {path: 'tourney', component: ViewTourneyComponent},
  { path: '',     redirectTo: '/tournaments', pathMatch: 'full' }

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
    SidebartournamentsComponent,
    ViewTourneyComponent,
    SidebartourneyComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    ),
    BrowserModule
  ],
  providers: [TransportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
