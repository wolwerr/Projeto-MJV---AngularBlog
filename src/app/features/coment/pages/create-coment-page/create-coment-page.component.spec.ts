import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComentPageComponent } from './create-coment-page.component';

describe('CreateComentPageComponent', () => {
  let component: CreateComentPageComponent;
  let fixture: ComponentFixture<CreateComentPageComponent>;

  beforeEach(async(() => {
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
