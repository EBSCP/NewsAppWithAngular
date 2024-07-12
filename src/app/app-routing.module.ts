import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { CategoriesComponent } from './Component/categories/categories.component';
import { HeaderComponent} from './Component/header/header.component';
import { ContactComponent } from './Component/contact/contact.component';
import {SportComponent} from "./Component/sport/sport.component";
import {DesignComponent} from "./Component/design/design.component";
import {AboutmeComponent} from "./Component/aboutme/aboutme.component";
import { BusinessComponent } from "./Component/business/business.component";
import { HealthComponent } from "./Component/health/health.component";
import {PoliticsComponent} from "./Component/politics/politics.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'about', component: AboutmeComponent},
  {path: 'business', component: BusinessComponent},
  {path: 'sport',component: SportComponent},
  {path: 'health', component: HealthComponent},
  {path: 'design', component: DesignComponent},
  {path: 'politics', component: PoliticsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
