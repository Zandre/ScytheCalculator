import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayerFactionDialogComponent } from './player-faction-dialog.component';

describe('NewPlayerFactionDialogComponent', () => {
  let component: NewPlayerFactionDialogComponent;
  let fixture: ComponentFixture<NewPlayerFactionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlayerFactionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayerFactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
