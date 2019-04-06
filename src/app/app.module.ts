import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CostaRicaComponent } from './pages/costa-rica/costa-rica.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, CostaRicaComponent, UserComponent],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
