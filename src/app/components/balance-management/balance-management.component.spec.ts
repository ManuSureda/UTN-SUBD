import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceManagementComponent } from './balance-management.component';

describe('BalanceManagementComponent', () => {
  let component: BalanceManagementComponent;
  let fixture: ComponentFixture<BalanceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
