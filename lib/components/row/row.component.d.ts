import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
export declare class DataTableRowComponent implements OnInit, OnDestroy {
    dataTable: DataTableComponent;
    private renderer;
    private elementRef;
    _this: this;
    item: any;
    index: number;
    expanded: boolean;
    private _listeners;
    private _selected;
    selectedChange: EventEmitter<any>;
    get selected(): boolean;
    set selected(selected: boolean);
    get displayIndex(): number;
    getTooltip(): string;
    constructor(dataTable: DataTableComponent, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTableRowComponent, "[dataTableRow]", never, { "item": { "alias": "item"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, { "selectedChange": "selectedChange"; }, never, never, false, never>;
}
//# sourceMappingURL=row.component.d.ts.map