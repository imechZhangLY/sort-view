/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SortViewService } from './sort-view.service';

describe('SortViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortViewService]
    });
  });

  it('should ...', inject([SortViewService], (service: SortViewService) => {
    expect(service).toBeTruthy();
  }));
});
