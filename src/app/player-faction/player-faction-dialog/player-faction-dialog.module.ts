import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerFactionDialogComponent } from './player-faction-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
  exports: [
    PlayerFactionDialogComponent
  ],
  declarations: [
    PlayerFactionDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
})
export class PlayerFactionDialogModule { }
