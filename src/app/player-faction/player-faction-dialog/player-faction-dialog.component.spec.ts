import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerFactionDialogComponent } from './player-faction-dialog.component';

describe('NewPlayerFactionDialogComponent', () => {
  let component: PlayerFactionDialogComponent;
  let fixture: ComponentFixture<PlayerFactionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerFactionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerFactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
