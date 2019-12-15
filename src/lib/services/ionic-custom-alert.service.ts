import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { v4 } from 'uuid';
import { CustomAlertOptions } from '../models/custom-alert-options.model';

@Injectable({
	providedIn: 'root'
})
export class IonicCustomAlertService {

	constructor(private alertController: AlertController, private componentFactoryResolver: ComponentFactoryResolver,
				private appRef: ApplicationRef, private injector: Injector) { }

	// Create a custom popup using the component as a template in the body
	// For information on how the component gets built inside the popup see:
	// https://hackernoon.com/angular-pro-tip-how-to-dynamically-create-components-in-body-ba200cc289e6
	async create<T>(options: CustomAlertOptions<T>) {
		// Using a uuid to ensure we attach the component to the right popup
		const alertUuid = v4();
		// Create a component reference from the component
		const componentRef = this.componentFactoryResolver
			.resolveComponentFactory(options.type)
			.create(this.injector);
		// Attach component data to component
		componentRef.instance.data = options.componentData;
		// Attach component to the appRef so that it's inside the ng component tree
		this.appRef.attachView(componentRef.hostView);
		// Get DOM element from component
		const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
			.rootNodes[0] as HTMLElement;
		// Create Popup
		const alert = await this.alertController.create({
			...options,
			cssClass: `${ options.cssClass ? `${ options.cssClass } ` : '' }${ alertUuid }`
		});
		// Present Popup
		await alert.present();
		// Append DOM element to the popup
		document.getElementsByClassName(alertUuid)[0].getElementsByClassName('alert-message')[0].appendChild(domElem);

		return alert;
	}
}
