import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock.component';
import { DataComponent } from './components/data/data.component';
import { HeaderComponent } from './components/header/header.component';
import { InfiniteScrollComponent } from './components/infinite-scroll.component';
import { MissionComponent } from './components/mission/mission.component';
import { NextLaunchComponent } from './components/next-launch/next-launch.component';

import { DataService } from './services/data.service';
import { DataStore } from './services/data.store';
import { DateCountdownPipe } from './date-countdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    DataComponent,
    HeaderComponent,
    InfiniteScrollComponent,
    MissionComponent,
    NextLaunchComponent,
    DateCountdownPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [DataService, DataStore],
  bootstrap: [AppComponent]
})
export class AppModule {}
