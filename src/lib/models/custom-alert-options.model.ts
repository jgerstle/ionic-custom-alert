import { Type } from '@angular/core';
import { AlertOptions } from '@ionic/core';
import { CustomAlert } from './custom-alert.model';

export interface CustomAlertOptions<T> extends AlertOptions {
	type: Type<CustomAlert<T>>;
	componentData: T;
}
