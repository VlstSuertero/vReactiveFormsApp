import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from './components';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainersModule } from './containers';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        StoreModule,
        ComponentsModule,
        BrowserAnimationsModule,
        ContainersModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
