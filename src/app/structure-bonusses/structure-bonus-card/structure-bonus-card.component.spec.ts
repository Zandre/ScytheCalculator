import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureBonusCardComponent } from './structure-bonus-card.component';

describe('StructureBonusCardComponent', () => {
  let component: StructureBonusCardComponent;
  let fixture: ComponentFixture<StructureBonusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureBonusCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureBonusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
