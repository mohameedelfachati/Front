import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcautoComponent } from './parcauto.component';

describe('ParcautoComponent', () => {
  let component: ParcautoComponent;
  let fixture: ComponentFixture<ParcautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
