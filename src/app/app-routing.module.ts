import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CostaRicaComponent } from './pages/costa-rica/costa-rica.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cr',
        component: CostaRicaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
