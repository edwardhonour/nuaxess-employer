import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingHomeComponent } from './staffing-home.component';

describe('StaffingHomeComponent', () => {
  let component: StaffingHomeComponent;
  let fixture: ComponentFixture<StaffingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
