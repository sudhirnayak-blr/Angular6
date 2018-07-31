import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';


import { slideInAnimations } from './animations';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css'],
  animations:[slideInAnimations]
})
export class ComposeMessageComponent implements OnInit {

  @HostBinding("@routeAnimation") routeAnimation = true; 
  @HostBinding("style.display") display = "block"; 
  @HostBinding("style.position") position = "absolute";

  details: string; 
  message: string; 
  sending: boolean = false; 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  send() {
    this.sending = true; 
    this.details = "Sending Message...."; 
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }
  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null } }]);
  }
}
