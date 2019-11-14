import { Component, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styles: []
})
export class WelcomeComponent implements OnDestroy {
  destroy = new Subject();
  constructor(private auth: AuthService, private router: Router) {
    auth.state.pipe(
      takeUntil(this.destroy),
    ).subscribe(user => {
      if (user && user.uid) {
        this.router.navigateByUrl('/list');
      }
    });
  }

  login() {
    this.auth.login();
  }
  ngOnDestroy() {
    this.destroy.next();
  }

}
