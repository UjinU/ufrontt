import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { Search2Component } from './components/search2/search2.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'search2', component: Search2Component },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
