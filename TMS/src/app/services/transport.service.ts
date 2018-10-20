import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransportService {


  private sidebarData = new BehaviorSubject("viewTournaments");
  currentSidebar = this.sidebarData.asObservable();

  constructor() { }


  changeSidebar(data: any) { 
   console.log(data)
    this.sidebarData.next(data);
  }
}
