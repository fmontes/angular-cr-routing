import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CostaRicaComponent } from './pages/costa-rica/costa-rica.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cr',
        component: CostaRicaComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'beaches',
        loadChildren: './pages/beaches/beaches.module#BeachesModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        enableTracing: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
