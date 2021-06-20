import { TestBed } from '@angular/core/testing';

import { VacantroomsService } from './vacantrooms.service';

describe('VacantroomsService', () => {
  let service: VacantroomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacantroomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
