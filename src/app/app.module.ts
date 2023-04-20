import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyContentTitleComponent } from './components/body-content-title/body-content-title.component';
import { BodyContentWelcomeComponent } from './components/body-content-welcome/body-content-welcome.component';
import { BodyContentSkillsComponent } from './components/body-content-skills/body-content-skills.component';
import { BodyContentProjectsComponent } from './components/body-content-projects/body-content-projects.component';
import { BodyContentWorkHistoryComponent } from './components/body-content-work-history/body-content-work-history.component';
import { BodyContentContactComponent } from './components/body-content-contact/body-content-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodyContentTitleComponent,
    BodyContentWelcomeComponent,
    BodyContentSkillsComponent,
    BodyContentProjectsComponent,
    BodyContentWorkHistoryComponent,
    BodyContentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
