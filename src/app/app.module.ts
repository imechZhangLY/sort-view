import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ViewComponentComponent } from './view-component/view-component.component';
import { OptionComponentComponent } from './option-component/option-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponentComponent,
    OptionComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    OptionComponentComponent,
    ViewComponentComponent,
  ]
})
export class AppModule { }
