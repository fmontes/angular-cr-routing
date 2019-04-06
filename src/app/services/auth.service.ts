import { Injectable } from '@angular/core';
import { of, Observable, Subject, merge } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user$: Subject<string> = new Subject();

    constructor() {}

    login(): void {
        const user = Math.random()
            .toString(36)
            .substr(2);

        localStorage.setItem('user', user);
        this.user$.next(user);
    }

    logout(): void {
        localStorage.removeItem('user');
        this.user$.next(null);
    }

    isAuth(): Observable<string> {
        const user = localStorage.getItem('user');
        return merge(of(user), this.user$.asObservable());
    }
}
