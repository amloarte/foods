import { TestBed } from '@angular/core/testing';

import { GoogleServiceobjectsService } from './google-serviceobjects.service';

describe('GoogleServiceobjectsService', () => {
  let service: GoogleServiceobjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleServiceobjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
