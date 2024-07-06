import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { ComponentCComponent } from './components/component-c/component-c.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DemoCdComponent } from './components/demo-cd/demo-cd.component';
import { SignalCDComponent } from 'src/app/components/signal-cd/signal-cd.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'a', component: ComponentAComponent },
  { path:'b', component: ComponentBComponent },
  { path:'c', component: ComponentCComponent },
  { path:'cd', component: DemoCdComponent },
  { path:'cd2', component: SignalCDComponent },
  // lazy load feature module
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  // Wildcard route for a 404 page
  { path:'**', component: PageNotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {preloadingStrategy:PreloadAllModules} // preload lazy modules in the background
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
