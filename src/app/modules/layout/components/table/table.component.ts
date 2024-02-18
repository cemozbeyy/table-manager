import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tbl-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})

export class TableComponent implements OnInit {
    sortLink: boolean = false
    sortName: boolean = false
    constructor() { }

    ngOnInit() { }
    sortRow(rowName: string) {
        if (rowName == "socialMediaName") {
            this.sortLink = !this.sortLink
        }
        else {
            this.sortName = !this.sortName

        }
    }
}