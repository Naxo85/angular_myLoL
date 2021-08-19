import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { ChampionModule } from './champion/champion.module';
import { MatchesModule } from './matches/matches.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    ChampionModule,
    MatchesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
