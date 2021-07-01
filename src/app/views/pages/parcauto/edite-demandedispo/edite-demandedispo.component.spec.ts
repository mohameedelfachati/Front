import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeDemandedispoComponent } from './edite-demandedispo.component';

describe('EditeDemandedispoComponent', () => {
  let component: EditeDemandedispoComponent;
  let fixture: ComponentFixture<EditeDemandedispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeDemandedispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeDemandedispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
