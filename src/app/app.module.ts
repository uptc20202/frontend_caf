import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnDoubleSelectionComponent } from './admin/components/btn-double-selection/btn-double-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnDoubleSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
