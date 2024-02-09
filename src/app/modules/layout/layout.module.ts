import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

const COMPONENTS = [
    LayoutComponent,
];

@NgModule({
    imports: [
        LayoutRoutingModule
    ],
    exports: [],
    declarations: [...COMPONENTS],
    providers: [],
})
export class LayoutModule { }
