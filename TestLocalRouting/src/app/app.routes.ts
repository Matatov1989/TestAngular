import { Routes } from '@angular/router';

import { AnimalComponent } from './components/animal/animal.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';


export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'animal', component:AnimalComponent },
  { path: 'people', component:PeopleComponent },
]
