import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { STATES } from './store.config';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NgxsReduxDevtoolsPluginModule.forRoot(),
		NgxsModule.forRoot(STATES, {
			developmentMode: true,
		}),
	],
})
export class StoreModule {
}
