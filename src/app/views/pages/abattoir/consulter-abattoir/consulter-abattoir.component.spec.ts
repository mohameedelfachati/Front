import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterAbattoirComponent } from './consulter-abattoir.component';

describe('ConsulterAbattoirComponent', () => {
  let component: ConsulterAbattoirComponent;
  let fixture: ComponentFixture<ConsulterAbattoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterAbattoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterAbattoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
