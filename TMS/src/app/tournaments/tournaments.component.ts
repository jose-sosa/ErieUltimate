import { Component, OnInit } from '@angular/core';
import { TransportService } from '../services/transport.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

  constructor(private transport: TransportService, private route: ActivatedRoute, private router: Router) { 
    

  }

  ngOnInit() {
    // console.log(true)
    // this.transport.changeSidebar('viewTournaments');
  }

  switchToTourney(data) {
    console.log(data)
    this.transport.changeSidebar('viewTourney');
    this.router.navigate(['/tourney']);
  }

}
