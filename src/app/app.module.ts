// Angular
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NgRX
import { StoreModule } from '@ngrx/store';

// App modules and components
import { AppComponent } from './app.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { PlayerFactionModule } from './player-faction/player-faction.module';

// Database
import { PlayerFactionData } from './player-faction/database/player-faction.data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(PlayerFactionData),

    // NgRX
    StoreModule.forRoot({}, {}),

    // App modules and components
    ToolbarModule,
    PlayerFactionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
