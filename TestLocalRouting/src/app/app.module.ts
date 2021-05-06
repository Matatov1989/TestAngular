import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AnimalComponent } from './components/animal/animal.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';

import { rootRouterConfig } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    PeopleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
