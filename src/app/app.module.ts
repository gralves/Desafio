import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetalheComponent,
  
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
