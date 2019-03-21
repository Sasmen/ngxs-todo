import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { STATES } from './store.config';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		NgxsModule.forRoot(STATES, {
			developmentMode: true,
		}),
		NgxsRouterPluginModule.forRoot(),
		NgxsStoragePluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot(),
	],
})
export class StoreModule {
}
