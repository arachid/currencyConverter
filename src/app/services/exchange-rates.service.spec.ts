import { TestBed } from '@angular/core/testing';

import { ExchangeRatesService } from './exchange-rates.service';

describe('ExchangeRatesService', () => {
  let service: ExchangeRatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeRatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
