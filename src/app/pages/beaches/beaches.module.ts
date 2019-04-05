import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeachesRoutingModule } from './beaches-routing.module';
import { BeachesComponent } from './beaches.component';

@NgModule({
    declarations: [BeachesComponent],
    imports: [CommonModule, BeachesRoutingModule]
})
export class BeachesModule {}
