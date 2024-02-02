import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCardsComponent } from './components/main-cards/main-cards.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ProjectsSectionComponent } from './components/projects-section/projects-section.component';
import { SectionsComponent } from './components/sections/sections.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCardsComponent,
    UserInfoComponent,
    ProjectsSectionComponent,
    SectionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
