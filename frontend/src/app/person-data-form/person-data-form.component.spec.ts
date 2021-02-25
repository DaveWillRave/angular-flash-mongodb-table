import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataFormComponent } from './person-data-form.component';

describe('PersonDataFormComponent', () => {
  let component: PersonDataFormComponent;
  let fixture: ComponentFixture<PersonDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
