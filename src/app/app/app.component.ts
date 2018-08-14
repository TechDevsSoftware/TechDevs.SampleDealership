import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  trigger: boolean;
  title = 'app';
  get username() {
    return window.sessionStorage.getItem("techdevs-account-displayname");
  }
  get isLoggedIn() {
    return (window.sessionStorage.getItem("techdevs-account-session") !== null);
  }

  constructor() {
    window.addEventListener('session', (storageEvent) => {
      console.log(storageEvent);
      this.trigger = !this.trigger;
    });
  }

  updateUser() {
    // this.username  = window.sessionStorage.getItem(*)
  }
}
