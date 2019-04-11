import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeachesComponent } from './beaches.component';
import { BeachesResolverService } from './resolver/beaches-resolver.service';
import { DetailComponent } from './components/detail/detail.component';
import { BeachDetailResolverService } from './resolver/beach-detail-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: BeachesComponent,
        resolve: {
            beaches: BeachesResolverService
        }
    },
    {
        path: ':id',
        component: DetailComponent,
        resolve: {
            beach: BeachDetailResolverService
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BeachesRoutingModule {}
