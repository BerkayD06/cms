import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatelicenseComponent } from './updatelicense.component';

describe('UpdatelicenseComponent', () => {
  let component: UpdatelicenseComponent;
  let fixture: ComponentFixture<UpdatelicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatelicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatelicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
