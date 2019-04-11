import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeachesRoutingModule } from './beaches-routing.module';
import { BeachesComponent } from './beaches.component';
import { BeachesResolverService } from './resolver/beaches-resolver.service';

@NgModule({
    declarations: [BeachesComponent],
    imports: [CommonModule, BeachesRoutingModule],
    providers: [BeachesResolverService]
})
export class BeachesModule {}
