import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from './dialog-helper-service';

@Component({
    selector: 'tbl-add-dialog',
    templateUrl: 'add-dialog.component.html',
    styleUrls: ['add-dialog.component.scss'],
    animations: [
        trigger('dialogAnimation', [
            state('open', style({
                transform: 'translateY(0%)',
                opacity: 1
            })),
            state('closed', style({
                transform: 'translateY(100%)',
                opacity: 0
            })),
            transition('open <=> closed', animate('100ms ease'))
        ])
    ]
})

export class AddDialogComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    @Input() isOpen: boolean = false; // isOpen giriş verilen değere göre componenti açan değişken

    @Output() onClose = new EventEmitter<void>(); // Dialog kapatma 

    closeDialog() {
        this.onClose.emit(); // Dialog kapatma olayı 
    }
}
