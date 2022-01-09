import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoverDetailComponent } from './rover-detail.component';

describe('RoverDetailComponent', () => {
  let component: RoverDetailComponent;
  let fixture: ComponentFixture<RoverDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoverDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoverDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
