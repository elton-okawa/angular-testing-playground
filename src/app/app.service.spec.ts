import { TestBed } from '@angular/core/testing';
import { AppService } from './app.service';
import { OtherService } from '../other/other.service';

describe('AppService', () => {
  let service: AppService;
  let otherMock: jest.Mocked<OtherService>;

  beforeEach(() => {
    otherMock = { getOtherMessage: jest.fn().mockReturnValue('Mocked!') };
    TestBed.configureTestingModule({
      providers: [AppService, { provide: OtherService, useValue: otherMock }],
    }).compileComponents();
    service = TestBed.inject(AppService);
  });

  it('should return message', () => {
    expect(service.getMessage()).toEqual('Hello world! Mocked!');
  });
});
