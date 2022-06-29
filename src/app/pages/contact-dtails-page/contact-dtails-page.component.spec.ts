import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDtailsPageComponent } from './contact-dtails-page.component';

describe('ContactDtailsPageComponent', () => {
  let component: ContactDtailsPageComponent;
  let fixture: ComponentFixture<ContactDtailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDtailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactDtailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
