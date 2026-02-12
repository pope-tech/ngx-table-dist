import { Component, forwardRef, HostListener, Inject } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../table/table.component";
function DataTableHeaderComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 10);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.title);
} }
function DataTableHeaderComponent_div_12_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15)(1, "label", 16)(2, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTableHeaderComponent_div_12_li_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.dataTable.expandColumnVisible, $event) || (ctx_r0.dataTable.expandColumnVisible = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DataTableHeaderComponent_div_12_li_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.dataTable.expandColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r0.dataTable.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.labels.expandColumn);
} }
function DataTableHeaderComponent_div_12_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15)(1, "label", 16)(2, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTableHeaderComponent_div_12_li_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.dataTable.indexColumnVisible, $event) || (ctx_r0.dataTable.indexColumnVisible = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DataTableHeaderComponent_div_12_li_3_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.dataTable.indexColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r0.dataTable.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.labels.indexColumn);
} }
function DataTableHeaderComponent_div_12_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15)(1, "label", 16)(2, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTableHeaderComponent_div_12_li_4_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.dataTable.selectColumnVisible, $event) || (ctx_r0.dataTable.selectColumnVisible = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DataTableHeaderComponent_div_12_li_4_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.dataTable.selectColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r0.dataTable.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.labels.selectColumn);
} }
function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15)(1, "label", 16)(2, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r5); const item_r6 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(item_r6.visible, $event) || (item_r6.visible = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DataTableHeaderComponent_div_12_ng_template_5_li_0_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", item_r6.visible);
    i0.ɵɵattribute("aria-controls", ctx_r0.dataTable.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("textContent", item_r6.header);
} }
function DataTableHeaderComponent_div_12_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableHeaderComponent_div_12_ng_template_5_li_0_Template, 4, 3, "li", 13);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.primaryColumn !== item_r6.property);
} }
function DataTableHeaderComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "ul", 12);
    i0.ɵɵtemplate(2, DataTableHeaderComponent_div_12_li_2_Template, 4, 3, "li", 13)(3, DataTableHeaderComponent_div_12_li_3_Template, 4, 3, "li", 13)(4, DataTableHeaderComponent_div_12_li_4_Template, 4, 3, "li", 13)(5, DataTableHeaderComponent_div_12_ng_template_5_Template, 1, 1, "ng-template", 14);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.expandableRows);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.indexColumn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.selectColumn);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.dataTable.columns);
} }
export class DataTableHeaderComponent {
    constructor(dataTable, elemRef) {
        this.dataTable = dataTable;
        this.elemRef = elemRef;
        this.columnSelectorOpen = false;
    }
    ngAfterViewInit() {
        console.log('datatable injected:', this.dataTable);
    }
    onClickHandler(event) {
        if (!this.elemRef.nativeElement.contains(event.target)) {
            this.columnSelectorOpen = false;
        }
    }
    onKeyUpHandler(event) {
        if (event.keyCode === 27 || (event.keyCode === 9 && !(this.elemRef.nativeElement.contains(event.target) && !event.target.id.includes('refresh-button')))) {
            this.columnSelectorOpen = false;
        }
    }
    onChange(event) {
        const isChecked = event.target.checked;
        const columnName = event.target.parentElement.textContent.trim();
        const interpolateParams = {
            'column_name': columnName,
            'title': this.dataTable.title
        };
        this.dataTable.visibleColumnsChange.emit(event);
        this.dataTable.columnSelectorNotification = (isChecked ? this.dataTable.labels.headerColumnSelectorAdded :
            this.dataTable.labels.headerColumnSelectorRemoved)
            .replace('{column_name}', interpolateParams.column_name)
            .replace('{title}', interpolateParams.title);
    }
    static { this.ɵfac = function DataTableHeaderComponent_Factory(t) { return new (t || DataTableHeaderComponent)(i0.ɵɵdirectiveInject(forwardRef(() => DataTableComponent)), i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DataTableHeaderComponent, selectors: [["data-table-header"]], hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function DataTableHeaderComponent_click_HostBindingHandler($event) { return ctx.onClickHandler($event); }, false, i0.ɵɵresolveDocument)("keyup", function DataTableHeaderComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUpHandler($event); }, false, i0.ɵɵresolveDocument);
        } }, decls: 13, vars: 10, consts: [[1, "data-table-header"], ["class", "h4 title", 3, "textContent", 4, "ngIf"], [1, "button-panel"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "column-selector-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-columns"], [1, "column-selector-wrapper"], ["class", "column-selector-box panel panel-default", 4, "ngIf"], [1, "h4", "title", 3, "textContent"], [1, "column-selector-box", "panel", "panel-default"], [1, "list-group", "list-group-flush"], ["class", "list-group-item column-selector-column checkbox", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "list-group-item", "column-selector-column", "checkbox"], [1, "d-flex", "align-items-center"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [3, "textContent"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DataTableHeaderComponent_p_1_Template, 1, 1, "p", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "button", 3);
            i0.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_3_listener() { return ctx.dataTable.reloadItems(); });
            i0.ɵɵelement(4, "i", 4);
            i0.ɵɵelementStart(5, "span", 5);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 6);
            i0.ɵɵlistener("click", function DataTableHeaderComponent_Template_button_click_7_listener() { return ctx.columnSelectorOpen = !ctx.columnSelectorOpen; });
            i0.ɵɵelement(8, "i", 7);
            i0.ɵɵelementStart(9, "span", 5);
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 8);
            i0.ɵɵtemplate(12, DataTableHeaderComponent_div_12_Template, 6, 4, "div", 9);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataTable.showTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("id", (ctx.dataTable == null ? null : ctx.dataTable.id) ? ctx.dataTable.id + "-refresh-button" : null);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.dataTable.labels.headerReload.replace("{title}", ctx.dataTable.title));
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.columnSelectorOpen);
            i0.ɵɵattribute("aria-haspopup", true)("id", (ctx.dataTable == null ? null : ctx.dataTable.id) ? ctx.dataTable.id + "-columns-select-button-test" : null)("aria-expanded", ctx.columnSelectorOpen);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.dataTable.labels.headerColumnSelector.replace("{title}", ctx.dataTable.title));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.columnSelectorOpen);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".data-table-header[_ngcontent-%COMP%]{min-height:25px;margin-bottom:10px}.title[_ngcontent-%COMP%]{display:inline-block;margin:5px 0 0 5px}.button-panel[_ngcontent-%COMP%]{float:right}.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}.column-selector-wrapper[_ngcontent-%COMP%]{position:relative}.column-selector-box[_ngcontent-%COMP%]{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]{padding:.5rem .25rem}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px;font-style:italic}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableHeaderComponent, [{
        type: Component,
        args: [{ selector: 'data-table-header', template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            [attr.id]=\"dataTable?.id ? dataTable.id + '-refresh-button' : null\"\n            (click)=\"dataTable.reloadItems()\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerReload.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.id]=\"dataTable?.id ? dataTable.id + '-columns-select-button-test' : null\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\">\n      <i class=\"fa fa-columns\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:none!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}\n"] }]
    }], () => [{ type: i3.DataTableComponent, decorators: [{
                type: Inject,
                args: [forwardRef(() => DataTableComponent)]
            }] }, { type: i0.ElementRef }], { onClickHandler: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], onKeyUpHandler: [{
            type: HostListener,
            args: ['document:keyup', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataTableHeaderComponent, { className: "DataTableHeaderComponent", filePath: "lib/components/header/header.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0lDUDVELHdCQUFvRjs7O0lBQXBDLG9EQUErQjs7OztJQXFCbkUsQUFERixBQURGLDhCQUE2RixnQkFDbEQsZ0JBQzZGO0lBQTdHLHlWQUEyQztJQUFDLGtNQUFVLHVCQUFnQixLQUFDO0lBQTlGLGlCQUFvSTtJQUNwSSwyQkFBMkQ7SUFFL0QsQUFERSxpQkFBUSxFQUNMOzs7SUFIc0IsZUFBMkM7SUFBM0Msb0VBQTJDOztJQUM1RCxjQUE2QztJQUE3QyxrRUFBNkM7Ozs7SUFLbkQsQUFERixBQURGLDhCQUEwRixnQkFDL0MsZ0JBQzRGO0lBQTVHLHVWQUEwQztJQUFDLGtNQUFVLHVCQUFnQixLQUFDO0lBQTdGLGlCQUFtSTtJQUNuSSwyQkFBMEQ7SUFFOUQsQUFERSxpQkFBUSxFQUNMOzs7SUFIc0IsZUFBMEM7SUFBMUMsbUVBQTBDOztJQUMzRCxjQUE0QztJQUE1QyxpRUFBNEM7Ozs7SUFLbEQsQUFERixBQURGLDhCQUEyRixnQkFDaEQsZ0JBQzZGO0lBQTdHLHlWQUEyQztJQUFDLGtNQUFVLHVCQUFnQixLQUFDO0lBQTlGLGlCQUFvSTtJQUNwSSwyQkFBMkQ7SUFFL0QsQUFERSxpQkFBUSxFQUNMOzs7SUFIc0Is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d0I7WUFBeEIsbUdBQUEsMEJBQXNCLGlDQUFFLHNGQUF4QiwwQkFBc0IsaUNBQUU7O1lDZnJDLDhCQUErQjtZQUM3QixxRUFBZ0Y7WUFFOUUsQUFERiw4QkFBMEIsZ0JBR2tCO1lBQWxDLHFHQUFTLDJCQUF1QixJQUFDO1lBQ3ZDLHVCQUFnRDtZQUNoRCwrQkFBc0I7WUFBQSxZQUF1RTtZQUMvRixBQUQrRixpQkFBTyxFQUM3RjtZQUNULGlDQUk0RDtZQUFwRCx5SkFBbUQ7WUFDekQsdUJBQWdEO1lBQ2hELCtCQUFzQjtZQUFBLGFBQStFO1lBQ3ZHLEFBRHVHLGlCQUFPLEVBQ3JHO1lBQ1QsK0JBQXFDO1lBQ25DLDJFQUFnRjtZQWlDdEYsQUFERSxBQURFLGlCQUFNLEVBQ0YsRUFDRjs7WUFsRGlCLGNBQXlCO1lBQXpCLDhDQUF5QjtZQUdwQyxlQUFtRTs7WUFHbkQsZUFBdUU7WUFBdkUsK0ZBQXVFO1lBRW5CLGNBQW1DO1lBQW5DLGdEQUFtQzs7WUFNdkYsZUFBK0U7WUFBL0UsdUdBQStFO1lBRy9GLGVBQXdCO1lBQXhCLDZDQUF3Qjs7O2lGREh2Qix3QkFBd0I7Y0FMcEMsU0FBUzsyQkFDRSxtQkFBbUI7O3NCQVFoQixNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs4Q0FRWixjQUFjO2tCQUF6RCxZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBTUUsY0FBYztrQkFBekQsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBbEIvQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vdGFibGUvdGFibGUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0YS10YWJsZS1oZWFkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGVhZGVyLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcblxuICBjb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gRGF0YVRhYmxlQ29tcG9uZW50KSkgcHVibGljIGRhdGFUYWJsZTogRGF0YVRhYmxlQ29tcG9uZW50LFxuICAgICAgICAgICAgICBwcml2YXRlIGVsZW1SZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnZGF0YXRhYmxlIGluamVjdGVkOicsIHRoaXMuZGF0YVRhYmxlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgb25DbGlja0hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAnLCBbJyRldmVudCddKSBvbktleVVwSGFuZGxlcihldmVudCkge1xuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCAoZXZlbnQua2V5Q29kZSA9PT0gOSAmJiAhKHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgIWV2ZW50LnRhcmdldC5pZC5pbmNsdWRlcygncmVmcmVzaC1idXR0b24nKSkpKSB7XG4gICAgICB0aGlzLmNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGlzQ2hlY2tlZCA9ICg8SFRNTElucHV0RWxlbWVudD4gZXZlbnQudGFyZ2V0KS5jaGVja2VkO1xuICAgIGNvbnN0IGNvbHVtbk5hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkucGFyZW50RWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gICAgY29uc3QgaW50ZXJwb2xhdGVQYXJhbXMgPSB7XG4gICAgICAnY29sdW1uX25hbWUnOiBjb2x1bW5OYW1lLFxuICAgICAgJ3RpdGxlJzogdGhpcy5kYXRhVGFibGUudGl0bGVcbiAgICB9O1xuXG4gICAgdGhpcy5kYXRhVGFibGUudmlzaWJsZUNvbHVtbnNDaGFuZ2UuZW1pdChldmVudCk7XG5cbiAgICB0aGlzLmRhdGFUYWJsZS5jb2x1bW5TZWxlY3Rvck5vdGlmaWNhdGlvbiA9IChpc0NoZWNrZWQgPyB0aGlzLmRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyQ29sdW1uU2VsZWN0b3JBZGRlZCA6XG4gICAgICB0aGlzLmRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyQ29sdW1uU2VsZWN0b3JSZW1vdmVkKVxuICAgICAgLnJlcGxhY2UoJ3tjb2x1bW5fbmFtZX0nLCBpbnRlcnBvbGF0ZVBhcmFtcy5jb2x1bW5fbmFtZSlcbiAgICAgIC5yZXBsYWNlKCd7dGl0bGV9JywgaW50ZXJwb2xhdGVQYXJhbXMudGl0bGUpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZGF0YS10YWJsZS1oZWFkZXJcIj5cbiAgPHAgY2xhc3M9XCJoNCB0aXRsZVwiICpuZ0lmPVwiZGF0YVRhYmxlLnNob3dUaXRsZVwiIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUudGl0bGVcIj48L3A+XG4gIDxkaXYgY2xhc3M9XCJidXR0b24tcGFuZWxcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcmVmcmVzaC1idXR0b25cIlxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiZGF0YVRhYmxlPy5pZCA/IGRhdGFUYWJsZS5pZCArICctcmVmcmVzaC1idXR0b24nIDogbnVsbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGF0YVRhYmxlLnJlbG9hZEl0ZW1zKClcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPnt7IGRhdGFUYWJsZS5sYWJlbHMuaGVhZGVyUmVsb2FkLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpIH19PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBjb2x1bW4tc2VsZWN0b3ItYnV0dG9uXCIgW2NsYXNzLmFjdGl2ZV09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1oYXNwb3B1cF09XCJ0cnVlXCJcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImRhdGFUYWJsZT8uaWQgPyBkYXRhVGFibGUuaWQgKyAnLWNvbHVtbnMtc2VsZWN0LWJ1dHRvbi10ZXN0JyA6IG51bGxcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1leHBhbmRlZF09XCJjb2x1bW5TZWxlY3Rvck9wZW5cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNvbHVtblNlbGVjdG9yT3BlbiA9ICFjb2x1bW5TZWxlY3Rvck9wZW47XCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWNvbHVtbnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj57eyBkYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yLnJlcGxhY2UoJ3t0aXRsZX0nLCBkYXRhVGFibGUudGl0bGUpIH19PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2VsZWN0b3Itd3JhcHBlclwiPlxuICAgICAgPGRpdiAqbmdJZj1cImNvbHVtblNlbGVjdG9yT3BlblwiIGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLWJveCBwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5leHBhbmRhYmxlUm93c1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLmV4cGFuZENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuZXhwYW5kQ29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSAqbmdJZj1cImRhdGFUYWJsZS5pbmRleENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLmluZGV4Q29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5pbmRleENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuc2VsZWN0Q29sdW1uXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY29sdW1uLXNlbGVjdG9yLWNvbHVtbiBjaGVja2JveFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkYXRhVGFibGUuc2VsZWN0Q29sdW1uVmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLmxhYmVscy5zZWxlY3RDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC1pdGVtIGxldC1pPVwiaW5kZXhcIiBbbmdGb3JPZl09XCJkYXRhVGFibGUuY29sdW1uc1wiPlxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZGF0YVRhYmxlLnByaW1hcnlDb2x1bW4gIT09IGl0ZW0ucHJvcGVydHlcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cIml0ZW0udmlzaWJsZVwiIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIFthdHRyLmFyaWEtY29udHJvbHNdPVwiZGF0YVRhYmxlLmlkXCIvPlxuICAgICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJpdGVtLmhlYWRlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19