import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AlertModule} from './components/alert/alert.module';
import {HeaderComponent} from './components/header/header.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {SettingsService} from './services/settings.service';
import {ConfirmationPopupComponent} from './components/confirmation-popup/confirmation-popup.component';
import {MaterialModule} from './material.module';
import {YesNoDropdownComponent} from "./components/yes-no-dropdown/yes-no-dropdown.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HomeComponent} from "./pages/home/home.component";
import {SportWidgetComponent} from "./components/sport-widget/sport-widget.component";
import {MmaWidgetComponent} from "./components/mma-widget/mma-widget.component";
import {FightCardComponent} from "./components/fight-card/fight-card.component";
import {MediaSearchWidgetComponent} from "./components/media-search-widget/media-search-widget.component";

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationPopupComponent,
    FightCardComponent,
    HeaderComponent,
    HomeComponent,
    MediaSearchWidgetComponent,
    MmaWidgetComponent,
    SettingsPageComponent,
    SportWidgetComponent,
    YesNoDropdownComponent
  ],
  entryComponents: [ConfirmationPopupComponent],
  imports: [
    AlertModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
