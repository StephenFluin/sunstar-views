import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-toolbar',
  templateUrl: './auth-toolbar.component.html',
})
export class AuthToolbarComponent {

  constructor(public auth: AuthService) {

  }


}
