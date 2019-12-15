import { TestBed } from '@angular/core/testing';

import { IonicCustomAlertService } from './ionic-custom-alert.service';

describe('IonicCustomAlertService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: IonicCustomAlertService = TestBed.get(IonicCustomAlertService);
		expect(service).toBeTruthy();
	});
});
