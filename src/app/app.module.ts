// Angular
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ShellModule } from './player-faction/shell/shell.module';

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
    FlexLayoutModule,

    // NgRX
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),

    // App modules and components
    ToolbarModule,
    PlayerFactionModule,
    EffectsModule.forRoot([]),
    ShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
