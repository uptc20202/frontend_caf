import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnDoubleSelectionComponent } from './admin/components/btn-double-selection/btn-double-selection.component';
import { InputFormComponent } from './admin/components/input-form/input-form.component';
import { LoginFormComponent } from './admin/components/login-form/login-form.component';
import { PasswordInputComponent } from './admin/components/password-input/password-input.component';
import { RadiobtnComponent } from './admin/components/radiobtn/radiobtn.component';
import { RegisterFormComponent } from './admin/components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnDoubleSelectionComponent,
    InputFormComponent,
    LoginFormComponent,
    PasswordInputComponent,
    RadiobtnComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
