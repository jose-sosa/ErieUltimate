import { Component, OnInit } from '@angular/core';
import { TransportService } from 'src/app/services/transport.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-view-tourney',
  templateUrl: './view-tourney.component.html',
  styleUrls: ['./view-tourney.component.scss']
})
export class ViewTourneyComponent implements OnInit {

  constructor(private transport: TransportService) { }

  ngOnInit() {
  }

  switchFromTourney() { 
    this.transport.changeSidebar('viewTournaments'); 
  }

}
