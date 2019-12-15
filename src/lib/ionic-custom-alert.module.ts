import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicCustomAlertService } from './services/ionic-custom-alert.service';

@NgModule({
	declarations: [],
	imports: []
})
export class IonicCustomAlertModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: IonicCustomAlertModule,
			providers: [IonicCustomAlertService]
		};
	}
}
