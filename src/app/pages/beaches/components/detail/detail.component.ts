import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Beach } from 'src/app/services/beaches.service';
import { pluck } from 'rxjs/operators';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    beach$: Observable<Beach>;

    constructor(private router: ActivatedRoute) {}

    ngOnInit() {
        this.beach$ = this.router.data.pipe(pluck('beach'));
    }
}
