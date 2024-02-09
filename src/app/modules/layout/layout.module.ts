import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent, TableComponent } from './components';


const COMPONENTS = [
    LayoutComponent,
    HeaderComponent,
    TableComponent
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
