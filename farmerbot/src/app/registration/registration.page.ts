import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private route: Router) { }
  logon() {
    this.route.navigate(['/login']);
  }
  password() {
    this.route.navigate(['/password']);
  }
  ngOnInit() {
  }

}
