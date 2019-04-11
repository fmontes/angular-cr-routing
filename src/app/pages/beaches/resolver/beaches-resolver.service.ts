import { Injectable } from '@angular/core';
import { Beach, BeachesService } from 'src/app/services/beaches.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class BeachesResolverService implements Resolve<Beach[]> {
    constructor(private beachService: BeachesService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Beach[]> | Promise<Beach[]> | Beach[] {
        return this.beachService.getBeaches();
    }
}
