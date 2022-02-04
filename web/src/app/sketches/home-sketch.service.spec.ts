import { TestBed } from '@angular/core/testing';

import { HomeSketchService } from './home-sketch.service';

describe('HomeSketchService', () => {
  let service: HomeSketchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSketchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
