import { Component } from '@angular/core';
import { TransportService } from 'src/app/services/transport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TMS';

  constructor(private transport: TransportService) { 
    
  }

  ngOnInit() {  
  }

}
