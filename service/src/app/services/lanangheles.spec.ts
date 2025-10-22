import { TestBed } from '@angular/core/testing';

import { Lanangheles } from './lanangheles';

describe('Lanangheles', () => {
  let service: Lanangheles;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lanangheles);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
