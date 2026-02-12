import { AfterViewInit, ElementRef } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
export declare class DataTableHeaderComponent implements AfterViewInit {
    dataTable: DataTableComponent;
    private elemRef;
    columnSelectorOpen: boolean;
    constructor(dataTable: DataTableComponent, elemRef: ElementRef);
    ngAfterViewInit(): void;
    onClickHandler(event: any): void;
    onKeyUpHandler(event: any): void;
    onChange(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTableHeaderComponent, "data-table-header", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=header.component.d.ts.map