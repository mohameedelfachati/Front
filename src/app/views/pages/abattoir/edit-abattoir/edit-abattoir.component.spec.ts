import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAbattoirComponent } from './edit-abattoir.component';

describe('EditAbattoirComponent', () => {
  let component: EditAbattoirComponent;
  let fixture: ComponentFixture<EditAbattoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAbattoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAbattoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
