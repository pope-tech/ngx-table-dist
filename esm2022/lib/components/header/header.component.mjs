import { Component, forwardRef, HostListener, Inject } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../table/table.component";
function DataTableHeaderComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 7);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.title);
} }
function DataTableHeaderComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function DataTableHeaderComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.dataTable.reloadItems()); });
    i0.ɵɵelement(1, "i", 9);
    i0.ɵɵelementStart(2, "span", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵattribute("id", ctx_r0.dataTable.id + "-refresh-button");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.dataTable.labels.headerReload.replace("{title}", ctx_r0.dataTable.title));
} }
function DataTableHeaderComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function DataTableHeaderComponent_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.columnSelectorOpen = !ctx_r0.columnSelectorOpen); });
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementStart(2, "span", 10);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r0.columnSelectorOpen);
    i0.ɵɵattribute("aria-haspopup", true)("id", ctx_r0.dataTable.id + "-columns-select-button")("aria-expanded", ctx_r0.columnSelectorOpen);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.dataTable.labels.headerColumnSelector.replace("{title}", ctx_r0.dataTable.title));
} }
function DataTableHeaderComponent_div_6_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17)(1, "label", 18)(2, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTableHeaderComponent_div_6_li_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.dataTable.expandColumnVisible, $event) || (ctx_r0.dataTable.expandColumnVisible = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DataTableHeaderComponent_div_6_li_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.dataTable.expandColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r0.dataTable.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.labels.expandColumn);
} }
function DataTableHeaderComponent_div_6_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17)(1, "label", 18)(2, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTableHeaderComponent_div_6_li_3_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.dataTable.indexColumnVisible, $event) || (ctx_r0.dataTable.indexColumnVisible = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DataTableHeaderComponent_div_6_li_3_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.dataTable.indexColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r0.dataTable.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.labels.indexColumn);
} }
function DataTableHeaderComponent_div_6_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17)(1, "label", 18)(2, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTableHeaderComponent_div_6_li_4_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.dataTable.selectColumnVisible, $event) || (ctx_r0.dataTable.selectColumnVisible = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DataTableHeaderComponent_div_6_li_4_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.dataTable.selectColumnVisible);
    i0.ɵɵattribute("aria-controls", ctx_r0.dataTable.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("textContent", ctx_r0.dataTable.labels.selectColumn);
} }
function DataTableHeaderComponent_div_6_ng_template_5_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17)(1, "label", 18)(2, "input", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function DataTableHeaderComponent_div_6_ng_template_5_li_0_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const item_r8 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(item_r8.visible, $event) || (item_r8.visible = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function DataTableHeaderComponent_div_6_ng_template_5_li_0_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onChange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 20);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", item_r8.visible);
    i0.ɵɵattribute("aria-controls", ctx_r0.dataTable.id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("textContent", item_r8.header);
} }
function DataTableHeaderComponent_div_6_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DataTableHeaderComponent_div_6_ng_template_5_li_0_Template, 4, 3, "li", 15);
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dataTable.primaryColumn !== item_r8.property);
} }
function DataTableHeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "ul", 14);
    i0.ɵɵtemplate(2, DataTableHeaderComponent_div_6_li_2_Template, 4, 3, "li", 15)(3, DataTableHeaderComponent_div_6_li_3_Template, 4, 3, "li", 15)(4, DataTableHeaderComponent_div_6_li_4_Template, 4, 3, "li", 15)(5, DataTableHeaderComponent_div_6_ng_template_5_Template, 1, 1, "ng-template", 16);
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
        } }, decls: 7, vars: 4, consts: [[1, "data-table-header"], ["class", "h4 title", 3, "textContent", 4, "ngIf"], [1, "button-panel"], ["type", "button", "class", "btn btn-default btn-sm refresh-button", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-default btn-sm column-selector-button", 3, "active", "click", 4, "ngIf"], [1, "column-selector-wrapper"], ["class", "column-selector-box panel panel-default", 4, "ngIf"], [1, "h4", "title", 3, "textContent"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-refresh"], [1, "sr-only"], ["type", "button", 1, "btn", "btn-default", "btn-sm", "column-selector-button", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-columns"], [1, "column-selector-box", "panel", "panel-default"], [1, "list-group", "list-group-flush"], ["class", "list-group-item column-selector-column checkbox", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "list-group-item", "column-selector-column", "checkbox"], [1, "d-flex", "align-items-center"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [3, "textContent"]], template: function DataTableHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DataTableHeaderComponent_p_1_Template, 1, 1, "p", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtemplate(3, DataTableHeaderComponent_button_3_Template, 4, 2, "button", 3)(4, DataTableHeaderComponent_button_4_Template, 4, 6, "button", 4);
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵtemplate(6, DataTableHeaderComponent_div_6_Template, 6, 4, "div", 6);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataTable.showTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.dataTable.id);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.dataTable.id);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.columnSelectorOpen);
        } }, dependencies: [i1.NgForOf, i1.NgIf, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".data-table-header[_ngcontent-%COMP%]{min-height:25px;margin-bottom:10px}.title[_ngcontent-%COMP%]{display:inline-block;margin:5px 0 0 5px}.button-panel[_ngcontent-%COMP%]{float:right}.button-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{outline:none!important}.column-selector-wrapper[_ngcontent-%COMP%]{position:relative}.column-selector-box[_ngcontent-%COMP%]{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]{padding:.5rem .25rem}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.column-selector-box[_ngcontent-%COMP%]   .list-group-item.column-selector-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:4px;font-style:italic}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DataTableHeaderComponent, [{
        type: Component,
        args: [{ selector: 'data-table-header', template: "<div class=\"data-table-header\">\n  <p class=\"h4 title\" *ngIf=\"dataTable.showTitle\" [textContent]=\"dataTable.title\"></p>\n  <div class=\"button-panel\">\n    <button type=\"button\" class=\"btn btn-default btn-sm refresh-button\"\n            *ngIf=\"dataTable.id\"\n            [attr.id]=\"dataTable.id + '-refresh-button'\"\n            (click)=\"dataTable.reloadItems()\">\n      <i class=\"fa fa-refresh\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerReload.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <button type=\"button\" class=\"btn btn-default btn-sm column-selector-button\" [class.active]=\"columnSelectorOpen\"\n            *ngIf=\"dataTable.id\"\n            [attr.aria-haspopup]=\"true\"\n            [attr.id]=\"dataTable.id + '-columns-select-button'\"\n            [attr.aria-expanded]=\"columnSelectorOpen\"\n            (click)=\"columnSelectorOpen = !columnSelectorOpen;\">\n      <i class=\"fa fa-columns\" aria-hidden=\"true\"></i>\n      <span class=\"sr-only\">{{ dataTable.labels.headerColumnSelector.replace('{title}', dataTable.title) }}</span>\n    </button>\n    <div class=\"column-selector-wrapper\">\n      <div *ngIf=\"columnSelectorOpen\" class=\"column-selector-box panel panel-default\">\n        <ul class=\"list-group list-group-flush\">\n          <li *ngIf=\"dataTable.expandableRows\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.expandColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.expandColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.indexColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.indexColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.indexColumn\"></span>\n            </label>\n          </li>\n          <li *ngIf=\"dataTable.selectColumn\" class=\"list-group-item column-selector-column checkbox\">\n            <label class=\"d-flex align-items-center\">\n              <input type=\"checkbox\" [(ngModel)]=\"dataTable.selectColumnVisible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n              <span [textContent]=\"dataTable.labels.selectColumn\"></span>\n            </label>\n          </li>\n          <ng-template ngFor let-item let-i=\"index\" [ngForOf]=\"dataTable.columns\">\n            <li class=\"list-group-item column-selector-column checkbox\"\n                *ngIf=\"dataTable.primaryColumn !== item.property\">\n              <label class=\"d-flex align-items-center\">\n                <input type=\"checkbox\" [(ngModel)]=\"item.visible\" (change)=\"onChange($event)\" [attr.aria-controls]=\"dataTable.id\"/>\n                <span [textContent]=\"item.header\"></span>\n              </label>\n            </li>\n          </ng-template>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".data-table-header{min-height:25px;margin-bottom:10px}.title{display:inline-block;margin:5px 0 0 5px}.button-panel{float:right}.button-panel button{outline:none!important}.column-selector-wrapper{position:relative}.column-selector-box{box-shadow:0 0 10px #d3d3d3;background:#fff;width:150px;padding:10px;position:absolute;right:0;top:1px;z-index:1060}.column-selector-box .list-group-item.column-selector-column{padding:.5rem .25rem}.column-selector-box .list-group-item.column-selector-column label{margin-bottom:0}.column-selector-box .list-group-item.column-selector-column input{margin-right:4px;font-style:italic}\n"] }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DataTableHeaderComponent, { className: "DataTableHeaderComponent", filePath: "lib/components/header/header.component.ts", lineNumber: 15 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC10YWJsZS9zcmMvbGliL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFFVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0lDTjVELHVCQUFvRjs7O0lBQXBDLG9EQUErQjs7OztJQUU3RSxpQ0FHMEM7SUFBbEMsdUxBQVMsOEJBQXVCLEtBQUM7SUFDdkMsdUJBQWdEO0lBQ2hELGdDQUFzQjtJQUFBLFlBQXVFO0lBQy9GLEFBRCtGLGlCQUFPLEVBQzdGOzs7O0lBRGUsZUFBdUU7SUFBdkUscUdBQXVFOzs7O0lBRS9GLGtDQUs0RDtJQUFwRCxrUEFBbUQ7SUFDekQsd0JBQWdEO0lBQ2hELGdDQUFzQjtJQUFBLFlBQStFO0lBQ3ZHLEFBRHVHLGlCQUFPLEVBQ3JHOzs7SUFSbUUsbURBQW1DOztJQU92RixlQUErRTtJQUEvRSw2R0FBK0U7Ozs7SUFPN0YsQUFERixBQURGLDhCQUE2RixnQkFDbEQsZ0JBQzZGO0lBQTdHLHdWQUEyQztJQUFDLGlNQUFVLHVCQUFnQixLQUFDO0lBQTlGLGlCQUFvSTtJQUNwSSwyQkFBMkQ7SUFFL0QsQUFERSxpQkFBUSxFQUNMOzs7SUFIc0IsZUFBMkM7SUFBM0Msb0VBQTJDOztJQUM1RCxjQUE2QztJQUE3QyxrRUFBNkM7Ozs7SUFLbkQsQUFERixBQURGLDhCQUEwRixnQkFDL0MsZ0JBQzRGO0lBQTVHLHNWQUEw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LE9BQU8sQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxDQUFDO2FBQ3ZELE9BQU8sQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakQsQ0FBQzt5RkFsQ1Usd0JBQXdCLHVCQUlmLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvRUFKN0Msd0JBQXdCO1lBQXhCLG1HQUFBLDBCQUFzQixpQ0FBRSxzRkFBeEIsMEJBQXNCLGlDQUFFOztZQ2RyQyw4QkFBK0I7WUFDN0IscUVBQWdGO1lBQ2hGLDhCQUEwQjtZQVF4QixBQVBBLCtFQUcwQyxrRUFTa0I7WUFJNUQsOEJBQXFDO1lBQ25DLHlFQUFnRjtZQWlDdEYsQUFERSxBQURFLGlCQUFNLEVBQ0YsRUFDRjs7WUFwRGlCLGNBQXlCO1lBQXpCLDhDQUF5QjtZQUduQyxlQUFrQjtZQUFsQix1Q0FBa0I7WUFPbEIsY0FBa0I7WUFBbEIsdUNBQWtCO1lBU25CLGVBQXdCO1lBQXhCLDZDQUF3Qjs7O2lGRE52Qix3QkFBd0I7Y0FMcEMsU0FBUzsyQkFDRSxtQkFBbUI7O3NCQVFoQixNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzs4Q0FJWixjQUFjO2tCQUF6RCxZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDO1lBTUUsY0FBYztrQkFBekQsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBZC9CLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb21wb25lbnQgfSBmcm9tICcuLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRhLXRhYmxlLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9oZWFkZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUhlYWRlckNvbXBvbmVudCB7XG5cbiAgY29sdW1uU2VsZWN0b3JPcGVuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChmb3J3YXJkUmVmKCgpID0+IERhdGFUYWJsZUNvbXBvbmVudCkpIHB1YmxpYyBkYXRhVGFibGU6IERhdGFUYWJsZUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBlbGVtUmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pIG9uQ2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmNvbHVtblNlbGVjdG9yT3BlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwJywgWyckZXZlbnQnXSkgb25LZXlVcEhhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgKGV2ZW50LmtleUNvZGUgPT09IDkgJiYgISh0aGlzLmVsZW1SZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpICYmICFldmVudC50YXJnZXQuaWQuaW5jbHVkZXMoJ3JlZnJlc2gtYnV0dG9uJykpKSkge1xuICAgICAgdGhpcy5jb2x1bW5TZWxlY3Rvck9wZW4gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBpc0NoZWNrZWQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+IGV2ZW50LnRhcmdldCkuY2hlY2tlZDtcbiAgICBjb25zdCBjb2x1bW5OYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PiBldmVudC50YXJnZXQpLnBhcmVudEVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICAgIGNvbnN0IGludGVycG9sYXRlUGFyYW1zID0ge1xuICAgICAgJ2NvbHVtbl9uYW1lJzogY29sdW1uTmFtZSxcbiAgICAgICd0aXRsZSc6IHRoaXMuZGF0YVRhYmxlLnRpdGxlXG4gICAgfTtcblxuICAgIHRoaXMuZGF0YVRhYmxlLnZpc2libGVDb2x1bW5zQ2hhbmdlLmVtaXQoZXZlbnQpO1xuXG4gICAgdGhpcy5kYXRhVGFibGUuY29sdW1uU2VsZWN0b3JOb3RpZmljYXRpb24gPSAoaXNDaGVja2VkID8gdGhpcy5kYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yQWRkZWQgOlxuICAgICAgdGhpcy5kYXRhVGFibGUubGFiZWxzLmhlYWRlckNvbHVtblNlbGVjdG9yUmVtb3ZlZClcbiAgICAgIC5yZXBsYWNlKCd7Y29sdW1uX25hbWV9JywgaW50ZXJwb2xhdGVQYXJhbXMuY29sdW1uX25hbWUpXG4gICAgICAucmVwbGFjZSgne3RpdGxlfScsIGludGVycG9sYXRlUGFyYW1zLnRpdGxlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImRhdGEtdGFibGUtaGVhZGVyXCI+XG4gIDxwIGNsYXNzPVwiaDQgdGl0bGVcIiAqbmdJZj1cImRhdGFUYWJsZS5zaG93VGl0bGVcIiBbdGV4dENvbnRlbnRdPVwiZGF0YVRhYmxlLnRpdGxlXCI+PC9wPlxuICA8ZGl2IGNsYXNzPVwiYnV0dG9uLXBhbmVsXCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHJlZnJlc2gtYnV0dG9uXCJcbiAgICAgICAgICAgICpuZ0lmPVwiZGF0YVRhYmxlLmlkXCJcbiAgICAgICAgICAgIFthdHRyLmlkXT1cImRhdGFUYWJsZS5pZCArICctcmVmcmVzaC1idXR0b24nXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkYXRhVGFibGUucmVsb2FkSXRlbXMoKVwiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1yZWZyZXNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+e3sgZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJSZWxvYWQucmVwbGFjZSgne3RpdGxlfScsIGRhdGFUYWJsZS50aXRsZSkgfX08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIGNvbHVtbi1zZWxlY3Rvci1idXR0b25cIiBbY2xhc3MuYWN0aXZlXT1cImNvbHVtblNlbGVjdG9yT3BlblwiXG4gICAgICAgICAgICAqbmdJZj1cImRhdGFUYWJsZS5pZFwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWhhc3BvcHVwXT1cInRydWVcIlxuICAgICAgICAgICAgW2F0dHIuaWRdPVwiZGF0YVRhYmxlLmlkICsgJy1jb2x1bW5zLXNlbGVjdC1idXR0b24nXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtZXhwYW5kZWRdPVwiY29sdW1uU2VsZWN0b3JPcGVuXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjb2x1bW5TZWxlY3Rvck9wZW4gPSAhY29sdW1uU2VsZWN0b3JPcGVuO1wiPlxuICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2x1bW5zXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+e3sgZGF0YVRhYmxlLmxhYmVscy5oZWFkZXJDb2x1bW5TZWxlY3Rvci5yZXBsYWNlKCd7dGl0bGV9JywgZGF0YVRhYmxlLnRpdGxlKSB9fTwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNlbGVjdG9yLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb2x1bW5TZWxlY3Rvck9wZW5cIiBjbGFzcz1cImNvbHVtbi1zZWxlY3Rvci1ib3ggcGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuZXhwYW5kYWJsZVJvd3NcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5leHBhbmRDb2x1bW5WaXNpYmxlXCIgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgW2F0dHIuYXJpYS1jb250cm9sc109XCJkYXRhVGFibGUuaWRcIi8+XG4gICAgICAgICAgICAgIDxzcGFuIFt0ZXh0Q29udGVudF09XCJkYXRhVGFibGUubGFiZWxzLmV4cGFuZENvbHVtblwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgKm5nSWY9XCJkYXRhVGFibGUuaW5kZXhDb2x1bW5cIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRhdGFUYWJsZS5pbmRleENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuaW5kZXhDb2x1bW5cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpICpuZ0lmPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGNvbHVtbi1zZWxlY3Rvci1jb2x1bW4gY2hlY2tib3hcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwiZGF0YVRhYmxlLnNlbGVjdENvbHVtblZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgPHNwYW4gW3RleHRDb250ZW50XT1cImRhdGFUYWJsZS5sYWJlbHMuc2VsZWN0Q29sdW1uXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBsZXQtaXRlbSBsZXQtaT1cImluZGV4XCIgW25nRm9yT2ZdPVwiZGF0YVRhYmxlLmNvbHVtbnNcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBjb2x1bW4tc2VsZWN0b3ItY29sdW1uIGNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGFUYWJsZS5wcmltYXJ5Q29sdW1uICE9PSBpdGVtLnByb3BlcnR5XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJpdGVtLnZpc2libGVcIiAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiBbYXR0ci5hcmlhLWNvbnRyb2xzXT1cImRhdGFUYWJsZS5pZFwiLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBbdGV4dENvbnRlbnRdPVwiaXRlbS5oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==