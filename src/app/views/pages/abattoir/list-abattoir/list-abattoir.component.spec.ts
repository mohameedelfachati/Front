import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbattoirComponent } from './list-abattoir.component';

describe('ListAbattoirComponent', () => {
  let component: ListAbattoirComponent;
  let fixture: ComponentFixture<ListAbattoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAbattoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbattoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
