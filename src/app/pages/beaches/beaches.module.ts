import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeachesRoutingModule } from './beaches-routing.module';
import { BeachesComponent } from './beaches.component';
import { BeachesResolverService } from './resolver/beaches-resolver.service';
import { DetailComponent } from './components/detail/detail.component';
import { BeachDetailResolverService } from './resolver/beach-detail-resolver.service';

@NgModule({
    declarations: [BeachesComponent, DetailComponent],
    imports: [CommonModule, BeachesRoutingModule],
    providers: [BeachesResolverService, BeachDetailResolverService]
})
export class BeachesModule {}
