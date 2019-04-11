import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Beach, BeachesService } from 'src/app/services/beaches.service';
import { Observable } from 'rxjs';

@Injectable()
export class BeachDetailResolverService {
    constructor(private beachService: BeachesService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Beach> | Promise<Beach> | Beach {
        return this.beachService.getBeach(route.params.id);
    }
}
