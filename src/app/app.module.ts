import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IconComponent } from './icon/icon.component';

//font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//toster
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // toastr module added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
