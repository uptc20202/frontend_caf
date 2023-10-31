import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BtnDoubleSelectionComponent } from './admin/components/btn-double-selection/btn-double-selection.component';
import { InputFormComponent } from './admin/components/input-form/input-form.component';
import { LoginFormComponent } from './admin/components/login-form/login-form.component';
import { PasswordInputComponent } from './admin/components/password-input/password-input.component';
import { RadiobtnComponent } from './admin/components/radiobtn/radiobtn.component';
import { RegisterFormComponent } from './admin/components/register-form/register-form.component';
import { HomePagesComponent } from './pages/home.pages/home.pages.component';
import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { PhrasesComponent } from './admin/components/phrases/phrases.component';
import { ClientsWidgetComponent } from './admin/components/clients-widget/clients-widget.component';
import { WorkoutsWidgetComponent } from './admin/components/workouts-widget/workouts-widget.component';
import { NotificationsComponent } from './admin/components/notifications/notifications.component';
import { MotivationalQuotesService } from './api/services/motivational-quotes.service';
import { WorkoutsCardComponent } from './admin/components/workouts-card/workouts-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BtnDoubleSelectionComponent,
    InputFormComponent,
    LoginFormComponent,
    PasswordInputComponent,
    RadiobtnComponent,
    RegisterFormComponent,
    HomePagesComponent,
    SidebarComponent,
    PhrasesComponent,
    ClientsWidgetComponent,
    WorkoutsWidgetComponent,
    NotificationsComponent,
    WorkoutsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MotivationalQuotesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
