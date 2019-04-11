import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeachesComponent } from './beaches.component';
import { BeachesResolverService } from './resolver/beaches-resolver.service';

const routes: Routes = [{
    path: '',
    component: BeachesComponent,
    resolve: {
        beaches: BeachesResolverService
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BeachesRoutingModule {}
