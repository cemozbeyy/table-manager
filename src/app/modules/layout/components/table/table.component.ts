import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { TableModel } from 'src/app/core/models/table-data';
import { AddTableData, TableState } from 'src/app/core/models/table.state';


@Component({
    selector: 'tbl-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})

export class TableComponent implements OnInit {
    // Table state,model ve data akışı değişkeni
    @Select(TableState.tableDatas) tableDatas$: Observable<TableModel[]> | undefined;
    //

    // For arrow link
    sortLink: boolean = false
    sortName: boolean = false
    //


    // Dialog open status
    isDialogOpen: boolean = false;
    //

    //tabloya eklemek için açılan dialogta ki inputa girilen değerler
    myForm = new FormControl('');
    socialMediaLink: string = '';
    socialMediaName: string = '';
    explanation: string = '';
    //

    constructor(private store: Store, private toastrService: ToastrService) {
        let staticData: TableModel = {
            soicalMediaLink: "instagram.com/mobilerast/",
            socialMediaName: "instagram",
            explanation: "We'll help you to finish your development project successfully."
        }
        this.store.dispatch(new AddTableData(staticData));

    }

    ngOnInit() {

    }
    submitForm() {
        let pushData: TableModel = {
            soicalMediaLink: this.socialMediaLink,
            socialMediaName: this.socialMediaName,
            explanation: this.explanation
        }
        this.store.dispatch(new AddTableData(pushData));

        this.socialMediaLink = ""
        this.socialMediaName = ""
        this.explanation = ""
        this.toastrService.success("Medya verileriniz başarıyla eklendi.")
    }
    openDialog() {
        this.isDialogOpen = true; // Dialogu açmak için isOpen'u true olarak ayarla
    }

    closeDialog() {
        this.isDialogOpen = false; // Dialogu kapatmak için isOpen'u false olarak ayarla
    }

    sortRow(rowName: string) {
        if (rowName === "socialMediaName") {
            this.sortLink = !this.sortLink;
            this.tableDatas$?.subscribe(datas => {
                datas = datas.sort((a, b) => {
                    return this.sortLink ? a.socialMediaName.localeCompare(b.socialMediaName) : b.socialMediaName.localeCompare(a.socialMediaName);
                });
            });
        } else {
            this.sortName = !this.sortName;
            this.tableDatas$?.subscribe(datas => {
                datas = datas.sort((a, b) => {
                    return this.sortName ? a.soicalMediaLink.localeCompare(b.soicalMediaLink) : b.soicalMediaLink.localeCompare(a.soicalMediaLink);
                });
            });
        }
    }

}