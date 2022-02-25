import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { ReloadDialogComponent } from './reload-dialog/reload-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ToolbarComponent,
    ReloadDialogComponent
  ],
  exports: [
    ToolbarComponent,
    ReloadDialogComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class ToolbarModule { }
