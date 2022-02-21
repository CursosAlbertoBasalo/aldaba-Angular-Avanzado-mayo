import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsSearchComponent } from './operators-search.component';

describe('OperatorsSearchComponent', () => {
  let component: OperatorsSearchComponent;
  let fixture: ComponentFixture<OperatorsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
