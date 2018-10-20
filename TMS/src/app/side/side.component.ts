import { Component, OnInit } from '@angular/core';
import { TransportService } from '../services/transport.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  current: String = "viewTournaments";

  constructor(private transport: TransportService) { 

  }

  ngOnInit() {
    
    this.transport.currentSidebar.subscribe(data => {
      this.current =  data.toString();
    })

  }

}
