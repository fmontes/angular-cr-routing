import { Component, OnInit } from '@angular/core';
import { Beach, BeachesService } from 'src/app/services/beaches.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
    selector: 'app-beaches',
    templateUrl: './beaches.component.html',
    styleUrls: ['./beaches.component.scss']
})
export class BeachesComponent implements OnInit {
    content$: Observable<Beach[]>;

    constructor(private router: ActivatedRoute) {}

    ngOnInit() {
        this.content$ = this.router.data.pipe(pluck('beaches'));
    }
}
