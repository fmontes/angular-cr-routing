import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeachesComponent } from './beaches.component';

const routes: Routes = [{
    path: '',
    component: BeachesComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BeachesRoutingModule {}
