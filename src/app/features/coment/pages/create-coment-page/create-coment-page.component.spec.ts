import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateComentPageComponent } from './create-coment-page.component';

describe('CreateComentPageComponent', () => {
  let component: CreateComentPageComponent;
  let fixture: ComponentFixture<CreateComentPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
