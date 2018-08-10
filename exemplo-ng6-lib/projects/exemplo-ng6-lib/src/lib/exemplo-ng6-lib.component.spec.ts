import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploNg6LibComponent } from './exemplo-ng6-lib.component';

describe('ExemploNg6LibComponent', () => {
  let component: ExemploNg6LibComponent;
  let fixture: ComponentFixture<ExemploNg6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExemploNg6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemploNg6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
