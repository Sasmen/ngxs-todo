import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxsModule} from '@ngxs/store';
import {STATES} from './store.config';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        NgxsReduxDevtoolsPluginModule.forRoot(),
        NgxsModule.forRoot(STATES)
    ]
})
export class StoreModule {
}
