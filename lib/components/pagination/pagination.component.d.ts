import { ElementRef } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
export declare class DataTablePaginationComponent {
    dataTable: DataTableComponent;
    id: string;
    pageInput: ElementRef;
    Math: any;
    limits: number[];
    constructor(dataTable: DataTableComponent);
    pageBack(): void;
    pageForward(): void;
    pageFirst(): void;
    pageLast(): void;
    get maxPage(): number;
    get limit(): number;
    set limit(value: number);
    get page(): number;
    set page(value: number);
    validate(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataTablePaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataTablePaginationComponent, "data-table-pagination", never, { "limits": { "alias": "limits"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=pagination.component.d.ts.map