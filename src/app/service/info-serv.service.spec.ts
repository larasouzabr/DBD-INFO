import { TestBed } from '@angular/core/testing';

import { InfoServService } from './info-serv.service';

describe('InfoServService', () => {
  let service: InfoServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
