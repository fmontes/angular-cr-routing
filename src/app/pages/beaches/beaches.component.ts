import { Component, OnInit } from '@angular/core';
import { Beach, BeachesService } from 'src/app/services/beaches.service';

@Component({
    selector: 'app-beaches',
    templateUrl: './beaches.component.html',
    styleUrls: ['./beaches.component.scss']
})
export class BeachesComponent implements OnInit {
    content: Beach[] = [];

    constructor(private beachService: BeachesService) {}

    ngOnInit() {
        this.beachService.getBeaches().subscribe((beaches: Beach[]) => {
            this.content = beaches;
        });
    }
}
