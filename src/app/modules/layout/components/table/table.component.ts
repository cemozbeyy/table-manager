import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TableModel } from 'src/app/core/models/table-data';


@Component({
    selector: 'tbl-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})

export class TableComponent implements OnInit {
    // For arrow link
    sortLink: boolean = false
    sortName: boolean = false
    //

    // Table Data Model
    tableDatas?: TableModel[] = []
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

    constructor(private toastrService: ToastrService) {
        let staticData: TableModel = {
            soicalMediaLink: "instagram.com/mobilerast/",
            socialMediaName: "instagram",
            explanation: "We'll help you to finish your development project successfully."
        }
        this.tableDatas?.push(staticData)
    }

    ngOnInit() {

    }
    submitForm() {
        let pushData: TableModel = {
            soicalMediaLink: this.socialMediaLink,
            socialMediaName: this.socialMediaName,
            explanation: this.explanation
        }
        this.tableDatas?.push(pushData)
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
        if (rowName == "socialMediaName") {
            this.sortLink = !this.sortLink
        }
        else {
            this.sortName = !this.sortName

        }
    }
}