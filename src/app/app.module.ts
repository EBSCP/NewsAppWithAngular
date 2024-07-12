import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { HomeComponent } from './Component/home/home.component';
import { ContactComponent } from './Component/contact/contact.component';
import { PoliticsComponent } from './Component/politics/politics.component';
import { AboutmeComponent } from './Component/aboutme/aboutme.component';
import { BusinessComponent } from './Component/business/business.component';
import { HealthComponent } from './Component/health/health.component';
import { DesignComponent } from './Component/design/design.component';
import { SportComponent } from './Component/sport/sport.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesComponent,
    HomeComponent,
    ContactComponent,
    PoliticsComponent,
    AboutmeComponent,
    BusinessComponent,
    HealthComponent,
    DesignComponent,
    SportComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
