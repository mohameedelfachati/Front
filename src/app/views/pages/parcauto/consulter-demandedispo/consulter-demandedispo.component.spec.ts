import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterDemandedispoComponent } from './consulter-demandedispo.component';

describe('ConsulterDemandedispoComponent', () => {
  let component: ConsulterDemandedispoComponent;
  let fixture: ComponentFixture<ConsulterDemandedispoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterDemandedispoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterDemandedispoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
