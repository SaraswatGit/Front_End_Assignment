import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontSearchingComponent } from './front-searching.component';

describe('FrontSearchingComponent', () => {
  let component: FrontSearchingComponent;
  let fixture: ComponentFixture<FrontSearchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontSearchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
