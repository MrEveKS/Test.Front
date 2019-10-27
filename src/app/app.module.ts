import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './components/user/user.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { MaterialNavComponent } from './components/material-nav/material-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialNavComponent,
  ],
  imports: [
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    UserModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
