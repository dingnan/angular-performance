import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { ComponentCComponent } from './components/component-c/component-c.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'a', component: ComponentAComponent },
  { path:'b', component: ComponentBComponent },
  { path:'c', component: ComponentCComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path:'**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
