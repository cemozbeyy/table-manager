import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent, TableComponent } from './components';
import { CommonModule } from '@angular/common';
import { AddDialogComponent } from 'src/app/shared/components/dialog/add-dialog.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';




const COMPONENTS = [
    LayoutComponent,
    HeaderComponent,
    TableComponent,
    AddDialogComponent
];

@NgModule({
    imports: [
        LayoutRoutingModule,
        CommonModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
    ],
    exports: [],
    declarations: [...COMPONENTS],
    providers: [ToastrService],
})
export class LayoutModule { }
