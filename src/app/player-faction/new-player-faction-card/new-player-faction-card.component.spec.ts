import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayerFactionCardComponent } from './new-player-faction-card.component';

describe('NewPlayerFactionCardComponent', () => {
  let component: NewPlayerFactionCardComponent;
  let fixture: ComponentFixture<NewPlayerFactionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlayerFactionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlayerFactionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
