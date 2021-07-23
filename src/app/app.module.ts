import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { ComponentCComponent } from './components/component-c/component-c.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { ChildCComponent } from './components/child-c/child-c.component';
import { DollarAmountPipePipe } from './pipe/dollar-amount-pipe.pipe';
import { DemoCdComponent } from './components/demo-cd/demo-cd.component';
import { DemoCdDefaultComponent } from './components/demo-cd-default/demo-cd-default.component';
import { DemoCdOnpushComponent } from './components/demo-cd-onpush/demo-cd-onpush.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    PageNotFoundComponent,
    HomeComponent,
    ChildBComponent,
    ChildCComponent,
    DollarAmountPipePipe,
    DemoCdComponent,
    DemoCdDefaultComponent,
    DemoCdOnpushComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
