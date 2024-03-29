import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ComentListComponent } from './coment-list.component';

describe('ComentListComponent', () => {
  let component: ComentListComponent;
  let fixture: ComponentFixture<ComentListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
