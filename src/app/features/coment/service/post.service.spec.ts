import { TestBed } from '@angular/core/testing';

import { ComentService } from './Coment.service';

describe('PostService', () => {
  let service: ComentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
