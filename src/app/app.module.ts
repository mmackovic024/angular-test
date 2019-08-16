import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClockComponent } from './components/clock.component';
import { DataComponent } from './components/data/data.component';
import { HeaderComponent } from './components/header/header.component';
import { InfiniteScrollComponent } from './components/infinite-scroll.component';
import { MissionComponent } from './components/mission/mission.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    DataComponent,
    HeaderComponent,
    InfiniteScrollComponent,
    MissionComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
