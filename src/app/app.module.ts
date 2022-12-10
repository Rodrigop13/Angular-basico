import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModules } from './heroes/heroes.module';
import { ContadorModules } from './contador/contador.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HeroesModules,
        ContadorModules
    ]
})
export class AppModule { }
