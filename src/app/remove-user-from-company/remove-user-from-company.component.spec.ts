import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveUserFromCompanyComponent } from './remove-user-from-company.component';

describe('RemoveUserFromCompanyComponent', () => {
  let component: RemoveUserFromCompanyComponent;
  let fixture: ComponentFixture<RemoveUserFromCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveUserFromCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveUserFromCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
