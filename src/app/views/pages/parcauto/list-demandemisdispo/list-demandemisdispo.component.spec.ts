import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandemisdispoComponent } from './list-demandemisdispo.component';

describe('ListDemandemisdispoComponent', () => {
  let component: ListDemandemisdispoComponent;
  let fixture: ComponentFixture<ListDemandemisdispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDemandemisdispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDemandemisdispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
