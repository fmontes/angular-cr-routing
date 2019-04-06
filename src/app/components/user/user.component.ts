import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    user$: Observable<string>;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.user$ = this.authService.isAuth();
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
