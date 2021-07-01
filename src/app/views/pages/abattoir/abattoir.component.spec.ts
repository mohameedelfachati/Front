import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbattoirComponent } from './abattoir.component';

describe('AbattoirComponent', () => {
  let component: AbattoirComponent;
  let fixture: ComponentFixture<AbattoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbattoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbattoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
