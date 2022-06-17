import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureBonusDialogComponent } from './structure-bonus-dialog.component';

describe('StructureBonusDialogComponent', () => {
  let component: StructureBonusDialogComponent;
  let fixture: ComponentFixture<StructureBonusDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureBonusDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureBonusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
