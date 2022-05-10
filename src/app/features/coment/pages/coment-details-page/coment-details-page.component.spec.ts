import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentDetailsPageComponent } from './coment-details-page.component';

describe('ComentDetailsPageComponent', () => {
  let component: ComentDetailsPageComponent;
  let fixture: ComponentFixture<ComentDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
