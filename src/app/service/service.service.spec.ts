import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


describe('ServiceService', () => {
 
  beforeEach(() => TestBed.configureTestingModule({imports: [FormsModule,HttpClientModule]}));

  it('should be created', () => {
    const service: ServiceService = TestBed.get(ServiceService);
    expect(service).toBeTruthy();
  });
});
