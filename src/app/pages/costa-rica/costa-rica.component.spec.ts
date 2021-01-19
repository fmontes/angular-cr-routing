import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CostaRicaComponent } from './costa-rica.component';

describe('CostaRicaComponent', () => {
  let component: CostaRicaComponent;
  let fixture: ComponentFixture<CostaRicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CostaRicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostaRicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
