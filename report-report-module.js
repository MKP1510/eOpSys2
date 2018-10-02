(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
           * The DataTable option you pass to configure your table.
           */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    DataTableDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[datatable]'
                },] },
    ];
    /** @nocollapse */
    DataTableDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    DataTableDirective.propDecorators = {
        "dtOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "dtTrigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule
        };
    };
    DataTablesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                    declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
                    exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
                },] },
    ];
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts ***!
  \**************************************************************************/
/*! exports provided: MenuMasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMasterService", function() { return MenuMasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuMasterService = /** @class */ (function () {
    function MenuMasterService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(MenuMasterService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    MenuMasterService.prototype.getDialogData = function () {
        return this.dialogData;
    };
    MenuMasterService.prototype.setter = function (menuMaster) {
        this.menuMaster = menuMaster;
    };
    MenuMasterService.prototype.getter = function () {
        return this.menuMaster;
    };
    MenuMasterService.prototype.getMenuMaster = function () {
        return this._http.get(this.baseUrl + '/getMenuMaster', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    MenuMasterService.prototype.saveMenuMaster = function (menuMaster) {
        return this._http.post(this.baseUrl + '/saveMenuMaster', JSON.stringify(menuMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    MenuMasterService.prototype.updateMenuMaster = function (menuMaster) {
        return this._http.put(this.baseUrl + '/updateMenuMaster', JSON.stringify(menuMaster), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    MenuMasterService.prototype.deleteMenuMaster = function (menuId) {
        return this._http.delete(this.baseUrl + '/deleteMenuMaster/' + menuId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    MenuMasterService.prototype.getMenuDetails = function (menuName) {
        return this._http.get(this.baseUrl + '/getMenuDetails/' + menuName, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    MenuMasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MenuMasterService);
    return MenuMasterService;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/table/table.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/table/table.service.ts ***!
  \**************************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableService = /** @class */ (function () {
    function TableService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    TableService.prototype.getter = function () {
        return this.table;
    };
    TableService.prototype.setter = function (table) {
        this.table = table;
    };
    TableService.prototype.getAllTableList = function () {
        return this._http.get(this.baseUrl + '/GetAllTables', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    TableService.prototype.createTable = function (table) {
        return this._http.post(this.baseUrl + '/createTable', JSON.stringify(table), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    TableService.prototype.deleteTable = function (id) {
        return this._http.delete(this.baseUrl + '/deleteTable/' + id, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    TableService.prototype.editTable = function (table) {
        return this._http.put(this.baseUrl + '/updateTable', JSON.stringify(table), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    TableService.prototype.getTableName = function (tableId) {
        return this._http.get(this.baseUrl + '/getTableName/' + tableId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    TableService.prototype.updateStatus = function (table) {
        return this._http.put(this.baseUrl + '/updateStatus', JSON.stringify(table), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    TableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/all-report/all-report.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/all-report/all-report.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/all-report/all-report.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/all-report/all-report.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"submit\" mat-raised-button color=\"primary\" style=\"float: right; margin-top: 20px; margin-bottom: 30px;\" (click)=\"back()\">Previous Page</button>\n<table datatable id=\"example\" [dtOptions]=\"dtOptions\"  [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" cellspacing=\"0\" width=\"100%\">\n  <thead>\n    <tr>\n      <th>Biling No</th>\n      <th>Waiter Name</th>\n      <th>Table Id</th>\n      <th>Amount</th>\n      <th>GST Amount</th>\n      <th>Service Charge</th>\n      <th>Discount</th>\n      <th>Payment Mode</th> \n    </tr>\n  </thead>\n  <tbody *ngIf=\"billing?.length > 0\"> \n    <tr *ngFor=\"let billings of billing\">\n      <td>{{ billings.billingId }}</td>\n      <td>{{ billings.waiterId }}</td>\n      <td>{{ billings.tableId }}</td>\n      <td>{{ billings.totalAmount}}</td>\n      <td>{{ billings.gstAmount }}</td>\n      <td>{{ billings.serviceCharge }}</td>\n      <td>{{ billings.discount}}</td>\n      <td>{{ billings.cashType }}</td>\n    </tr>\n  </tbody>\n  <tbody *ngIf=\"billing?.length == 0\">\n      <tr>\n        <td class=\"no-data-available\" colspan=\"4\">No Data Available in datatable</td>\n      </tr>\n    </tbody>\n</table>\n\n"

/***/ }),

/***/ "./src/app/restaurants/admin/report/all-report/all-report.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/all-report/all-report.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AllReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReportComponent", function() { return AllReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report.service */ "./src/app/restaurants/admin/report/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllReportComponent = /** @class */ (function () {
    function AllReportComponent(reportService, router) {
        this.reportService = reportService;
        this.router = router;
        this.dtOptions = {};
        this.billing = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    AllReportComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            lengthMenu: [
                [10, 25, 50, -1],
                ['10 rows', '25 rows', '50 rows', 'Show all']
            ],
            dom: 'Blfrtip',
            buttons: [
                'print', 'excel', 'pdf'
            ]
        };
        this.billing = [];
        this.getAllReport();
    };
    AllReportComponent.prototype.getAllReport = function () {
        var _this = this;
        this.reportService.getAllReport().subscribe(function (data) {
            _this.billing = data;
            _this.dtTrigger.next();
        }, function (error) {
            console.log(error);
        });
    };
    AllReportComponent.prototype.back = function () {
        this.router.navigate(['restaurants/admin/report']);
    };
    AllReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-report',
            template: __webpack_require__(/*! ./all-report.component.html */ "./src/app/restaurants/admin/report/all-report/all-report.component.html"),
            styles: [__webpack_require__(/*! ./all-report.component.css */ "./src/app/restaurants/admin/report/all-report/all-report.component.css")]
        }),
        __metadata("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AllReportComponent);
    return AllReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/datewise-report/datewise-report.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/datewise-report/datewise-report.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/datewise-report/datewise-report.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/datewise-report/datewise-report.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"submit\" mat-raised-button color=\"primary\" style=\"float: right; margin-top: 20px; margin-bottom: 30px;\" (click)=\"back()\">Previous Page</button>\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"My date\" [matDatepicker]=\"myDate\" #fromDate >\n        <mat-datepicker-toggle matSuffix [for]=\"myDate\"></mat-datepicker-toggle>\n        <mat-datepicker #myDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"To Date\" #toDate name=\"toDate\" >\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <button type=\"submit\" id=\"newOrder\" mat-raised-button color=\"primary\" (click)=\"getDateWiseReport(fromDate.value,toDate.value)\">Report</button>\n  </div>\n</div>\n<table datatable id=\"example\" [dtOptions]=\"dtOptions\"  [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" cellspacing=\"0\" width=\"100%\">\n  <thead>\n    <tr>\n      <th>Biling No</th>\n      <th>Waiter Name</th>\n      <th>Table Id</th>\n      <th>Amount</th>\n      <th>GST Amount</th>\n      <th>Service Charge</th>\n      <th>Discount</th>\n      <th>Payment Mode</th> \n    </tr>\n  </thead>\n  <tbody ><!--</tbody>*ngIf=\"billing?.length > 0\"> -->\n    <tr *ngFor=\"let billings of billing\">\n      <td>{{ billings.billingId }}</td>\n      <td>{{ billings.waiterId }}</td>\n      <td>{{ billings.tableId }}</td>\n      <td>{{ billings.totalAmount}}</td>\n      <td>{{ billings.gstAmount }}</td>\n      <td>{{ billings.serviceCharge }}</td>\n      <td>{{ billings.discount}}</td>\n      <td>{{ billings.cashType }}</td>\n    </tr>\n  </tbody>\n  <!--<tbody *ngIf=\"billing?.length == 0\">\n      <tr>\n        <td class=\"no-data-available\" colspan=\"4\">No Data Available in datatable</td>\n      </tr>\n    </tbody>-->\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/restaurants/admin/report/datewise-report/datewise-report.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/datewise-report/datewise-report.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DatewiseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatewiseReportComponent", function() { return DatewiseReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../report.service */ "./src/app/restaurants/admin/report/report.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatewiseReportComponent = /** @class */ (function () {
    function DatewiseReportComponent(reportService, datePipe, router) {
        this.reportService = reportService;
        this.datePipe = datePipe;
        this.router = router;
        this.dtOptions = {};
        this.billing = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DatewiseReportComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            infoEmpty: "No entries to show",
            lengthMenu: [
                [10, 25, 50, -1],
                ['10 rows', '25 rows', '50 rows', 'Show all']
            ],
            dom: 'Blfrtip',
            buttons: [
                'print', 'excel', 'pdf'
            ]
        };
        this.billing = [];
    };
    DatewiseReportComponent.prototype.getDateWiseReport = function (fromDate, toDate) {
        var _this = this;
        this.date = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
        this.date2 = this.datePipe.transform(toDate, 'yyyy-MM-dd');
        this.reportService.getDateWiseReport(this.date, this.date2).subscribe(function (data) {
            _this.billing = data;
            _this.dtTrigger.next();
        }, function (error) {
            console.log(error);
        });
    };
    DatewiseReportComponent.prototype.getWaiterWiseReport = function (fromDate, toDate, waiterId) {
        var _this = this;
        this.date = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
        this.date2 = this.datePipe.transform(toDate, 'yyyy-MM-dd');
        this.reportService.getWaiterWiseReport(this.date, this.date2, waiterId).subscribe(function (data) {
            console.log(data);
            _this.billing = data;
            _this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                //paging: false,
                lengthMenu: [
                    [10, 25, 50, -1],
                    ['10 rows', '25 rows', '50 rows', 'Show all']
                ],
                dom: 'Blfrtip',
                buttons: [
                    'print', 'excel', 'pdf'
                ]
            };
            _this.dtTrigger.next();
        }, function (error) {
            console.log(error);
        });
    };
    DatewiseReportComponent.prototype.back = function () {
        this.router.navigate(['restaurants/admin/report']);
    };
    DatewiseReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-datewise-report',
            template: __webpack_require__(/*! ./datewise-report.component.html */ "./src/app/restaurants/admin/report/datewise-report/datewise-report.component.html"),
            styles: [__webpack_require__(/*! ./datewise-report.component.css */ "./src/app/restaurants/admin/report/datewise-report/datewise-report.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DatewiseReportComponent);
    return DatewiseReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/inventory-report/inventory-report.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/inventory-report/inventory-report.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/inventory-report/inventory-report.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/inventory-report/inventory-report.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"From Date\" [matDatepicker]=\"fromDate\" #fromDate>\n        <mat-datepicker-toggle matSuffix [for]=\"fromDate\" ></mat-datepicker-toggle>\n        <mat-datepicker #fromDate></mat-datepicker>\n       </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"To Date\" [matDatepicker]=\"toDate\" #toDate>\n        <mat-datepicker-toggle matSuffix [for]=\"toDate\"></mat-datepicker-toggle>\n        <mat-datepicker #toDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Vendor Name\" aria-label=\"Vendor Name\" [matAutoComplete]=\"auto\" #vendor [formControl]=\"stateCtrl\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let vendor of filteredStates | async\" [value]=vendor.vendorName>\n            <span>{{vendor.vendorName}}</span>\n\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <button type=\"submit\" id=\"newOrder\" mat-raised-button color=\"primary\" (click)=\"getVendorwiseReport(fromDate.value,toDate.value,#vendor.value\">\n    </button>\n  </div>\n</div>\n<mat-divider style=\"margin-top:10px;margin-bottom:10px;\"></mat-divider>\n<table datatable id=\"example\" class=\"display nowrap\" cellspacing=\"0\" width=\"100%\">\n  <thead>\n    <tr>\n      <th>PurchaseId</th>\n      <th>Invoice No</th>\n      <th>Gst Category</th>\n      <th>Date</th>\n      <th>Vendor Name</th>\n      <th>Organization</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let purchase of purchases let i=index\">\n      <td>{{purchase.purchaseId}}</td>\n      <td>{{purchase.invoiceNo}}</td>\n      <td>{{purchase.gstCategory}}</td>\n      <td>{{purchase.v}}</td>\n    </tr>\n  </tbody>\n</table>-->\n"

/***/ }),

/***/ "./src/app/restaurants/admin/report/inventory-report/inventory-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/inventory-report/inventory-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InventoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryReportComponent", function() { return InventoryReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryReportComponent = /** @class */ (function () {
    function InventoryReportComponent() {
    }
    InventoryReportComponent.prototype.ngOnInit = function () {
    };
    InventoryReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inventory-report',
            template: __webpack_require__(/*! ./inventory-report.component.html */ "./src/app/restaurants/admin/report/inventory-report/inventory-report.component.html"),
            styles: [__webpack_require__(/*! ./inventory-report.component.css */ "./src/app/restaurants/admin/report/inventory-report/inventory-report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryReportComponent);
    return InventoryReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/invoice-list/invoice-list.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/invoice-list/invoice-list.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/invoice-list/invoice-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/invoice-list/invoice-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h6>Table</h6>\n    <div class=\"example-container mat-elevation-z8\">\n      <div class=\"example-header\">\n        <mat-form-field>\n          <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n      </div>\n      <mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n        <mat-container matColumnDef=\"billingid\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Table Id</mat-header-cell>\n          <mat-cell *matCellDef=\"let tables\">{{tables.tableId}}</mat-cell>\n        </mat-container>\n  \n        <mat-container matColumnDef=\"tablename\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Table Name</mat-header-cell>\n          <mat-cell *matCellDef=\"let tables\">{{tables.tableName}}</mat-cell>\n        </mat-container>\n  \n        <mat-container matColumnDef=\"waitername\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Table Type</mat-header-cell>\n          <mat-cell *matCellDef=\"let tables\">{{tables.tableType}}</mat-cell>\n        </mat-container>\n  \n        <mat-container matColumnDef=\"date\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Service Charge</mat-header-cell>\n          <mat-cell *matCellDef=\"let tables\">{{tables.serviceCharge}}</mat-cell>\n        </mat-container>\n  \n        <mat-container matColumnDef=\"time\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Table Id</mat-header-cell>\n            <mat-cell *matCellDef=\"let tables\">{{tables.tableId}}</mat-cell>\n          </mat-container>\n    \n          <mat-container matColumnDef=\"cash\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Table Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let tables\">{{tables.tableName}}</mat-cell>\n          </mat-container>\n    \n          <mat-container matColumnDef=\"card\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Table Type</mat-header-cell>\n            <mat-cell *matCellDef=\"let tables\">{{tables.tableType}}</mat-cell>\n          </mat-container>\n    \n          <mat-container matColumnDef=\"totalAmount\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Service Charge</mat-header-cell>\n            <mat-cell *matCellDef=\"let tables\">{{tables.serviceCharge}}</mat-cell>\n          </mat-container>\n        <ng-container matColumnDef=\"actions\">\n          <mat-header-cell *matHeaderCellDef>\n            <button mat-icon-button matTooltip=\"Add Table\" color=\"primary\" (click)=\"createTable()\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n            </button>\n            <button matTooltip=\"Refresh\" mat-icon-button (click)=\"getAllTableList()\">\n              <mat-icon>refresh</mat-icon>\n            </button>\n          </mat-header-cell>\n  \n          <mat-cell *matCellDef=\"let tables; let i=index;\">\n            <button mat-icon-button matTooltip=\"Edit Table\" color=\"accent\" (click)=\"editTable(i, tables.tableId, tables.tableName,tables.tableType,tables.serviceCharge)\">\n              <mat-icon aria-label=\"edit\">edit</mat-icon>\n            </button>\n  \n            <button mat-icon-button matTooltip=\"Delete Table\" color=\"accent\" (click)=\"deleteTable(i, tables.tableId,  tables.tableName,tables.tableType,tables.serviceCharge)\">\n              <mat-icon aria-label=\"delete\">delete</mat-icon>\n            </button>\n  \n          </mat-cell>\n        </ng-container>\n        <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n      </mat-table>\n      <mat-paginator [pageSizeOptions]=\"[ 10, 20]\" showFirstLastButtons></mat-paginator>\n    </div>"

/***/ }),

/***/ "./src/app/restaurants/admin/report/invoice-list/invoice-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/invoice-list/invoice-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../report.service */ "./src/app/restaurants/admin/report/report.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceListComponent = /** @class */ (function () {
    function InvoiceListComponent(reportService, _dialog) {
        this.reportService = reportService;
        this._dialog = _dialog;
        this.displayedColumns = ['billingId', 'tablename', 'waiterName', 'date', 'time', 'cash', 'card', 'totalAmount'];
    }
    InvoiceListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    InvoiceListComponent.prototype.ngOnInit = function () {
        this.getAllInvoice();
    };
    InvoiceListComponent.prototype.getAllInvoice = function () {
        var _this = this;
        this.reportService.getAllReport().subscribe(function (data) {
            _this.billing = data;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], InvoiceListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], InvoiceListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], InvoiceListComponent.prototype, "filter", void 0);
    InvoiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-list',
            template: __webpack_require__(/*! ./invoice-list.component.html */ "./src/app/restaurants/admin/report/invoice-list/invoice-list.component.html"),
            styles: [__webpack_require__(/*! ./invoice-list.component.css */ "./src/app/restaurants/admin/report/invoice-list/invoice-list.component.css")]
        }),
        __metadata("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/main-report/main-report.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/main-report/main-report.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/main-report/main-report.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/main-report/main-report.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-report works!\n</p>\n"

/***/ }),

/***/ "./src/app/restaurants/admin/report/main-report/main-report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/main-report/main-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MainReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainReportComponent", function() { return MainReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainReportComponent = /** @class */ (function () {
    function MainReportComponent() {
    }
    MainReportComponent.prototype.ngOnInit = function () {
    };
    MainReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-report',
            template: __webpack_require__(/*! ./main-report.component.html */ "./src/app/restaurants/admin/report/main-report/main-report.component.html"),
            styles: [__webpack_require__(/*! ./main-report.component.css */ "./src/app/restaurants/admin/report/main-report/main-report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainReportComponent);
    return MainReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/menu-report/menu-report.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/menu-report/menu-report.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-option-img {\r\n    vertical-align: middle;\r\n    margin-right: 8px;\r\n  }\r\n  \r\n  [dir='rtl'] .example-option-img {\r\n    margin-right: 0;\r\n    margin-left: 8px;\r\n  }\r\n  \r\n  table{\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n  \r\n  button{\r\n    background-color: green;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/report/menu-report/menu-report.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/menu-report/menu-report.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"submit\" mat-raised-button color=\"primary\" style=\"float: right; margin-top: 20px; margin-bottom: 30px;\" (click)=\"back()\">Previous Page</button>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"My date\" [matDatepicker]=\"myDate\" #fromDate >\n        <mat-datepicker-toggle matSuffix [for]=\"myDate\"></mat-datepicker-toggle>\n        <mat-datepicker #myDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"To Date\" #toDate name=\"toDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Menu Name\" aria-label=\"Menu Name\" [matAutocomplete]=\"auto\" #menu [formControl]=\"stateCtrl\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let menu of filteredStates | async\" [value]=\"menu.menuName\">\n              <span>{{menu.menuCode}}  :</span> \n              <small>{{menu.menuName}}</small>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <button type=\"submit\" id=\"newOrder\" mat-raised-button color=\"primary\" (click)=\"getMenuWiseReport(fromDate.value,toDate.value,menu.value)\">Report</button>\n  </div>\n</div>\n<mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n  <table datatable  [dtOptions]=\"dtOptions\"  [dtTrigger]=\"dtTrigger\" id=\"example\" class=\"display nowrap\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n      <tr>\n        <th>order No</th>\n        <th>Waiter Name</th>\n        <th>Tabel Name</th>\n        <th>Date</th>\n        <th>Time</th>\n        <th>Menu Name</th>\n        <th>Quantity</th>\n        <th>Amount</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let orders of order let i=index\">\n        <td>{{ orders.orderId}}</td>\n        <td>{{ orders.waiterName }}</td>\n        <td>{{ orders.tableName }}</td>\n        <td>{{ orders.date}}</td>\n        <td>{{ orders.time}}</td>\n        <td>{{orders.menuOrder[0].menuName}}</td>\n        <td>{{orders.menuOrder[0].quantity}}</td>\n        <td>{{orders.menuOrder[0].amount}}</td>\n      </tr>\n    </tbody>\n  </table>"

/***/ }),

/***/ "./src/app/restaurants/admin/report/menu-report/menu-report.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/menu-report/menu-report.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MenuReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuReportComponent", function() { return MenuReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../report.service */ "./src/app/restaurants/admin/report/report.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MenuReportComponent = /** @class */ (function () {
    function MenuReportComponent(menuMasterService, datePipe, router, reportService, http) {
        this.menuMasterService = menuMasterService;
        this.datePipe = datePipe;
        this.router = router;
        this.reportService = reportService;
        this.http = http;
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
    }
    MenuReportComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            draw: true,
            searching: false,
            pagingType: 'full_numbers',
            pageLength: 10,
            lengthMenu: [
                [10, 25, 50, -1],
                ['10 rows', '25 rows', '50 rows', 'Show all']
            ],
            dom: 'Blfrtip',
            buttons: [
                'print', 'excel', 'pdf'
            ]
        };
        this.order = [];
        this.getAllMenuMaster();
    };
    MenuReportComponent.prototype.getAllMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (data) {
            _this.menuMaster = data;
            _this.filteredStates = _this.stateCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return state ? _this._filterStates(state) : _this.menuMaster.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    MenuReportComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.menuMaster.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    MenuReportComponent.prototype.getMenuWiseReport = function (fromDate, toDate, menuName) {
        var _this = this;
        this.date = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
        this.date2 = this.datePipe.transform(toDate, 'yyyy-MM-dd');
        this.reportService.getMenuWiseReport(this.date, this.date2, menuName).subscribe(function (data) {
            _this.order = data;
            _this.dtTrigger.next();
            console.log(_this.order);
        }, function (error) {
            console.log(error);
        });
    };
    MenuReportComponent.prototype.getMenuReport = function () {
        var _this = this;
        this.reportService.getMenuReport().subscribe(function (data) {
            _this.order = data;
            _this.dtTrigger.next();
        }, function (error) {
            console.log(error);
        });
    };
    MenuReportComponent.prototype.back = function () {
        this.router.navigate(['restaurants/admin/report']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"]),
        __metadata("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTableDirective"])
    ], MenuReportComponent.prototype, "datatableElement", void 0);
    MenuReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-report',
            template: __webpack_require__(/*! ./menu-report.component.html */ "./src/app/restaurants/admin/report/menu-report/menu-report.component.html"),
            styles: [__webpack_require__(/*! ./menu-report.component.css */ "./src/app/restaurants/admin/report/menu-report/menu-report.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__["MenuMasterService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
            _report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_8__["Http"]])
    ], MenuReportComponent);
    return MenuReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"submit\" mat-raised-button color=\"primary\" style=\"float: right; margin-top: 20px; margin-bottom: 30px;\" (click)=\"back()\">Previous Page</button>\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"My date\" [matDatepicker]=\"myDate\" #fromDate >\n        <mat-datepicker-toggle matSuffix [for]=\"myDate\"></mat-datepicker-toggle>\n        <mat-datepicker #myDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"To Date\" #toDate name=\"toDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n      <div class=\"form\">    \n          <mat-form-field class=\"example-full-width\">      \n              <mat-select name=\"cashType\" placeholder=\"Payment Type\" #payment >\n                <mat-option value=\"cash\">Cash</mat-option>\n                <mat-option value=\"card\">Card</mat-option>\n                <mat-option value=\"others\">Otherd</mat-option>\n              </mat-select>         \n        </mat-form-field>\n      </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <button type=\"submit\" id=\"newOrder\" mat-raised-button color=\"primary\" (click)=\"getPaymentModeWiseReport(fromDate.value,toDate.value,payment.value)\">Report</button>\n  </div>\n</div>\n<mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n  <table datatable id=\"example\" [dtOptions]=\"dtOptions\"  [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n      <tr>\n        <th>Biling No</th>\n        <th>Waiter Name</th>\n        <th>Table Id</th>\n        <th>Amount</th>\n        <th>GST Amount</th>\n        <th>Service Charge</th>\n        <th>Discount</th>\n        <th>Payment Mode</th> \n      </tr>\n    </thead>\n    <tbody *ngIf=\"billing?.length > 0\"> \n      <tr *ngFor=\"let billings of billing\">\n        <td>{{ billings.billingId }}</td>\n        <td>{{ billings.waiterId }}</td>\n        <td>{{ billings.tableId }}</td>\n        <td>{{ billings.totalAmount}}</td>\n        <td>{{ billings.gstAmount }}</td>\n        <td>{{ billings.serviceCharge }}</td>\n        <td>{{ billings.discount}}</td>\n        <td>{{ billings.cashType }}</td>\n      </tr>\n    </tbody>\n    <tbody *ngIf=\"billing?.length == 0\">\n        <tr>\n          <td class=\"no-data-available\" colspan=\"4\">No Data Available in datatable</td>\n        </tr>\n      </tbody>\n  </table>\n"

/***/ }),

/***/ "./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PaymentwiseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentwiseReportComponent", function() { return PaymentwiseReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../report.service */ "./src/app/restaurants/admin/report/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PaymentwiseReportComponent = /** @class */ (function () {
    function PaymentwiseReportComponent(datePipe, router, reportService) {
        this.datePipe = datePipe;
        this.router = router;
        this.reportService = reportService;
        this.dtOptions = {};
        this.billing = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    PaymentwiseReportComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            lengthMenu: [
                [10, 25, 50, -1],
                ['10 rows', '25 rows', '50 rows', 'Show all']
            ],
            dom: 'Blfrtip',
            buttons: [
                'print', 'excel', 'pdf'
            ]
        };
        this.billing = [];
    };
    PaymentwiseReportComponent.prototype.getPaymentModeWiseReport = function (fromDate, toDate, cashType) {
        var _this = this;
        this.date = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
        this.date2 = this.datePipe.transform(toDate, 'yyyy-MM-dd');
        this.reportService.getPaymentModeWiseReport(this.date, this.date2, cashType).subscribe(function (data) {
            _this.billing = data;
            _this.dtTrigger.next();
        }, function (error) {
            console.log(error);
        });
    };
    PaymentwiseReportComponent.prototype.back = function () {
        this.router.navigate(['restaurants/admin/report']);
    };
    PaymentwiseReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paymentwise-report',
            template: __webpack_require__(/*! ./paymentwise-report.component.html */ "./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.html"),
            styles: [__webpack_require__(/*! ./paymentwise-report.component.css */ "./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.css")],
            providers: [_node_modules_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]])
    ], PaymentwiseReportComponent);
    return PaymentwiseReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/report-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/restaurants/admin/report/report-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.component */ "./src/app/restaurants/admin/report/report.component.ts");
/* harmony import */ var _menu_report_menu_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-report/menu-report.component */ "./src/app/restaurants/admin/report/menu-report/menu-report.component.ts");
/* harmony import */ var _inventory_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory-report/inventory-report.component */ "./src/app/restaurants/admin/report/inventory-report/inventory-report.component.ts");
/* harmony import */ var _all_report_all_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-report/all-report.component */ "./src/app/restaurants/admin/report/all-report/all-report.component.ts");
/* harmony import */ var _datewise_report_datewise_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datewise-report/datewise-report.component */ "./src/app/restaurants/admin/report/datewise-report/datewise-report.component.ts");
/* harmony import */ var _waiterwise_report_waiterwise_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./waiterwise-report/waiterwise-report.component */ "./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.ts");
/* harmony import */ var _tablewise_report_tablewise_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tablewise-report/tablewise-report.component */ "./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.ts");
/* harmony import */ var _paymentwise_report_paymentwise_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./paymentwise-report/paymentwise-report.component */ "./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '', component: _report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"]
    },
    {
        path: 'allReport', component: _all_report_all_report_component__WEBPACK_IMPORTED_MODULE_5__["AllReportComponent"]
    },
    {
        path: 'datewiseReport', component: _datewise_report_datewise_report_component__WEBPACK_IMPORTED_MODULE_6__["DatewiseReportComponent"]
    },
    {
        path: 'waiterwiseReport', component: _waiterwise_report_waiterwise_report_component__WEBPACK_IMPORTED_MODULE_7__["WaiterwiseReportComponent"]
    },
    {
        path: 'tablewiseReport', component: _tablewise_report_tablewise_report_component__WEBPACK_IMPORTED_MODULE_8__["TablewiseReportComponent"]
    },
    {
        path: 'paymentwiseReport', component: _paymentwise_report_paymentwise_report_component__WEBPACK_IMPORTED_MODULE_9__["PaymentwiseReportComponent"]
    },
    {
        path: 'menuReport', component: _menu_report_menu_report_component__WEBPACK_IMPORTED_MODULE_3__["MenuReportComponent"]
    },
    {
        path: 'inventoryReport', component: _inventory_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_4__["InventoryReportComponent"]
    }
];
var ReportRoutingModule = /** @class */ (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/report.component.css":
/*!***************************************************************!*\
  !*** ./src/app/restaurants/admin/report/report.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\nbutton{\r\n    background-color: green;\r\n}\r\n#row1{\r\n    margin-left:100px;\r\n    margin-right:100px;\r\n    margin-bottom:50px;\r\n    margin-top:50px;\r\n\r\n}\r\n#row2{\r\n    margin-left:100px;\r\n    margin-right:100px;\r\n    margin-top:50px;\r\n}\r\n#row3{\r\n    margin-top:50px;\r\n    margin-right:300px;\r\n    margin-left:300px;\r\n}\r\n#row4{\r\n    margin-top:50px;\r\n}\r\nh2{\r\n    margin-top:50px;\r\n}\r\nbutton{\r\n    width:250px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/report/report.component.html":
/*!****************************************************************!*\
  !*** ./src/app/restaurants/admin/report/report.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 style=\"text-align: center;color: orangered\" > <i><u>Reports</u></i></h2>\n  <div class=\"row\" id=\"row1\">\n    <div class=\"col-sm-4\">\n      <button mat-flat-button color=\"primary\"  (click)=\"getAllReport()\">All Report</button>\n    </div>\n    <div class=\"col-sm-4\">\n      <button mat-flat-button color=\"primary\" (click)=\"datewisereport()\">Datewise Report</button>\n    </div>\n    <div class=\"col-sm-4\">\n      <button mat-flat-button color=\"primary\" (click)=\"waiterwisereport()\">Waiterwise Report</button>\n    </div>\n    </div>\n    <div class=\"row\" id=\"row2\">\n    <div class=\"col-sm-4\">\n      <button mat-flat-button color=\"primary\" (click)=\"tablewisereport()\">Tablewise Report</button>\n    </div> \n    <div class=\"col-sm-4\">\n      <button mat-flat-button color=\"primary\" (click)=\"paymentwisereport()\">Paymentwise Report</button>\n    </div>\n    <div class=\"col-sm-4\">\n      \n    </div>\n  </div>\n  <h2 style=\"text-align: center;color:orangered\"><u><i>Menuwise Reports</i></u></h2>\n  <div class=\"row\"  id=\"row3\">\n    <div class=\"col-sm-6\">\n      <button mat-flat-button color=\"primary\" (click)=\"menuReport()\">Menu Report</button>\n    </div>\n    <div class=\"col-sm-6\">\n      <button mat-flat-button color=\"primary\" (click)=\"datewisemenuReport()\">Datewise MenuReport</button>\n    </div>\n    </div>\n    <h2 style=\"text-align: center;color:orangered\"> <u><i>Inventory Report</i></u></h2>\n    <div class=\"row\" id=\"row4\">\n    <div class=\"col-sm-4\">\n      <button mat-flat-button color=\"primary\" (click)=\"inventoryReport()\">Inventory Report</button>\n    </div>\n  </div>\n  </div>\n\n "

/***/ }),

/***/ "./src/app/restaurants/admin/report/report.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurants/admin/report/report.component.ts ***!
  \**************************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportComponent = /** @class */ (function () {
    function ReportComponent(router) {
        this.router = router;
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.getAllReport = function () {
        this.router.navigate(['restaurants/admin/report/allReport']);
    };
    ReportComponent.prototype.datewisereport = function () {
        this.router.navigate(['restaurants/admin/report/datewiseReport']);
    };
    ReportComponent.prototype.waiterwisereport = function () {
        this.router.navigate(['restaurants/admin/report/waiterwiseReport']);
    };
    ReportComponent.prototype.tablewisereport = function () {
        this.router.navigate(['restaurants/admin/report/tablewiseReport']);
    };
    ReportComponent.prototype.paymentwisereport = function () {
        this.router.navigate(['restaurants/admin/report/paymentwiseReport']);
    };
    ReportComponent.prototype.menuReport = function () {
        this.router.navigate(['restaurants/admin/report/menuReport']);
    };
    ReportComponent.prototype.inventoryReport = function () {
        this.router.navigate(['restaurants/admin/report/inventoryReport']);
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/restaurants/admin/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/restaurants/admin/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/report.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/restaurants/admin/report/report.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.component */ "./src/app/restaurants/admin/report/report.component.ts");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/restaurants/admin/report/report-routing.module.ts");
/* harmony import */ var _main_report_main_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-report/main-report.component */ "./src/app/restaurants/admin/report/main-report/main-report.component.ts");
/* harmony import */ var _menu_report_menu_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-report/menu-report.component */ "./src/app/restaurants/admin/report/menu-report/menu-report.component.ts");
/* harmony import */ var _inventory_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory-report/inventory-report.component */ "./src/app/restaurants/admin/report/inventory-report/inventory-report.component.ts");
/* harmony import */ var _KOT_table_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./report.service */ "./src/app/restaurants/admin/report/report.service.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _HRM_employee_employee_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../HRM/employee/employee.service */ "./src/app/restaurants/admin/HRM/employee/employee.service.ts");
/* harmony import */ var _KOT_order_order_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _all_report_all_report_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./all-report/all-report.component */ "./src/app/restaurants/admin/report/all-report/all-report.component.ts");
/* harmony import */ var _datewise_report_datewise_report_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./datewise-report/datewise-report.component */ "./src/app/restaurants/admin/report/datewise-report/datewise-report.component.ts");
/* harmony import */ var _timewise_report_timewise_report_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./timewise-report/timewise-report.component */ "./src/app/restaurants/admin/report/timewise-report/timewise-report.component.ts");
/* harmony import */ var _waiterwise_report_waiterwise_report_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./waiterwise-report/waiterwise-report.component */ "./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.ts");
/* harmony import */ var _tablewise_report_tablewise_report_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tablewise-report/tablewise-report.component */ "./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.ts");
/* harmony import */ var _paymentwise_report_paymentwise_report_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./paymentwise-report/paymentwise-report.component */ "./src/app/restaurants/admin/report/paymentwise-report/paymentwise-report.component.ts");
/* harmony import */ var _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./invoice-list/invoice-list.component */ "./src/app/restaurants/admin/report/invoice-list/invoice-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _report_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"]
            ],
            providers: [
                _KOT_table_table_service__WEBPACK_IMPORTED_MODULE_7__["TableService"], _report_service__WEBPACK_IMPORTED_MODULE_10__["ReportService"], _HRM_employee_employee_service__WEBPACK_IMPORTED_MODULE_14__["EmployeeService"], _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_8__["MenuMasterService"], _KOT_order_order_service__WEBPACK_IMPORTED_MODULE_15__["OrderService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_report_component__WEBPACK_IMPORTED_MODULE_2__["ReportComponent"], _main_report_main_report_component__WEBPACK_IMPORTED_MODULE_4__["MainReportComponent"], _menu_report_menu_report_component__WEBPACK_IMPORTED_MODULE_5__["MenuReportComponent"], _inventory_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_6__["InventoryReportComponent"], _all_report_all_report_component__WEBPACK_IMPORTED_MODULE_16__["AllReportComponent"], _datewise_report_datewise_report_component__WEBPACK_IMPORTED_MODULE_17__["DatewiseReportComponent"], _timewise_report_timewise_report_component__WEBPACK_IMPORTED_MODULE_18__["TimewiseReportComponent"], _waiterwise_report_waiterwise_report_component__WEBPACK_IMPORTED_MODULE_19__["WaiterwiseReportComponent"], _tablewise_report_tablewise_report_component__WEBPACK_IMPORTED_MODULE_20__["TablewiseReportComponent"], _paymentwise_report_paymentwise_report_component__WEBPACK_IMPORTED_MODULE_21__["PaymentwiseReportComponent"], _invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_22__["InvoiceListComponent"]]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/report.service.ts":
/*!************************************************************!*\
  !*** ./src/app/restaurants/admin/report/report.service.ts ***!
  \************************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = /** @class */ (function () {
    function ReportService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    ReportService.prototype.getAllReport = function () {
        return this._http.get(this.baseUrl + '/getAllReport', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    ReportService.prototype.getDateWiseReport = function (fromDate, toDate) {
        return this._http.get(this.baseUrl + '/getDateWiseReport/' + fromDate + '/' + toDate, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    ReportService.prototype.getTimeWiseReport = function (date, fromTime, toTime) {
        return this._http.get(this.baseUrl + '/getTimeWiseReport/' + date + '/' + fromTime + '/' + toTime, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    ReportService.prototype.getWaiterWiseReport = function (fromDate, toDate, waiterId) {
        return this._http.get(this.baseUrl + '/getWaiterWiseReport/' + fromDate + '/' + toDate + '/' + waiterId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    ReportService.prototype.getTableWiseReport = function (fromDate, toDate, tableId) {
        return this._http.get(this.baseUrl + '/getTableWiseReport/' + fromDate + '/' + toDate + '/' + tableId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    ReportService.prototype.getPaymentModeWiseReport = function (fromDate, toDate, cashType) {
        return this._http.get(this.baseUrl + '/getPaymentModeWiseReport/' + fromDate + '/' + toDate + '/' + cashType, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    ReportService.prototype.getMenuWiseReport = function (fromDate, toDate, menuName) {
        return this._http.get(this.baseUrl + '/getMenuWiseReport/' + fromDate + '/' + toDate + '/' + menuName, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    ReportService.prototype.getMenuReport = function () {
        return this._http.get(this.baseUrl + '/getMenuReport', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    ReportService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"submit\" mat-raised-button color=\"primary\" style=\"float: right; margin-top: 20px; margin-bottom: 30px;\" (click)=\"back()\">Previous Page</button>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"My date\" [matDatepicker]=\"myDate\" #fromDate>\n        <mat-datepicker-toggle matSuffix [for]=\"myDate\"></mat-datepicker-toggle>\n        <mat-datepicker #myDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"To Date\" #toDate name=\"toDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n      <div class=\"form\">\n          <mat-form-field class=\"example-full-width\">\n              <input matInput  placeholder=\"Table Name\" aria-label=\"Table Name\" [matAutocomplete]=\"table1\" #tableId [formControl]=\"stateCtrl\">\n              <mat-autocomplete #table1=\"matAutocomplete\">\n                  <mat-option #table1 *ngFor=\"let tables of table\" [value]=\"tables.tableId\">\n                          {{tables.tableName}}\n                  </mat-option>\n              </mat-autocomplete>\n          </mat-form-field>\n      </div>\n    </div>\n  <div class=\"col-sm-3\">\n    <button type=\"submit\" id=\"newOrder\" mat-raised-button color=\"primary\" (click)=\"getTableWiseReport(fromDate.value,toDate.value,tableId.value)\">Report</button>\n  </div>\n</div>\n<mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n  <table datatable id=\"example\" [dtOptions]=\"dtOptions\"  [dtTrigger]=\"dtTrigger\" class=\"display nowrap\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n      <tr>\n        <th>Biling No</th>\n        <th>Waiter Name</th>\n        <th>Table Id</th>\n        <th>Amount</th>\n        <th>GST Amount</th>\n        <th>Service Charge</th>\n        <th>Discount</th>\n        <th>Payment Mode</th> \n      </tr>\n    </thead>\n    <tbody *ngIf=\"billing?.length > 0\"> \n      <tr *ngFor=\"let billings of billing\">\n        <td>{{ billings.billingId }}</td>\n        <td>{{ billings.waiterId }}</td>\n        <td>{{ billings.tableId }}</td>\n        <td>{{ billings.totalAmount}}</td>\n        <td>{{ billings.gstAmount }}</td>\n        <td>{{ billings.serviceCharge }}</td>\n        <td>{{ billings.discount}}</td>\n        <td>{{ billings.cashType }}</td>\n      </tr>\n    </tbody>\n    <tbody *ngIf=\"billing?.length == 0\">\n        <tr>\n          <td class=\"no-data-available\" colspan=\"4\">No Data Available in datatable</td>\n        </tr>\n      </tbody>\n  </table>\n"

/***/ }),

/***/ "./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TablewiseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablewiseReportComponent", function() { return TablewiseReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../report.service */ "./src/app/restaurants/admin/report/report.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _KOT_table_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TablewiseReportComponent = /** @class */ (function () {
    function TablewiseReportComponent(reportService, datePipe, router, tableService) {
        this.reportService = reportService;
        this.datePipe = datePipe;
        this.router = router;
        this.tableService = tableService;
        this.dtOptions = {};
        this.billing = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    TablewiseReportComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            lengthMenu: [
                [10, 25, 50, -1],
                ['10 rows', '25 rows', '50 rows', 'Show all']
            ],
            dom: 'Blfrtip',
            buttons: [
                'print', 'excel', 'pdf'
            ]
        };
        this.billing = [];
        this.table = [];
        this.getAllTable();
    };
    TablewiseReportComponent.prototype.getAllTable = function () {
        var _this = this;
        this.tableService.getAllTableList().subscribe(function (data) {
            _this.table = data;
            console.log(_this.table);
        }, function (error) {
            console.log(error);
        });
    };
    TablewiseReportComponent.prototype.getTableWiseReport = function (fromDate, toDate, tableId) {
        var _this = this;
        this.date = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
        this.date2 = this.datePipe.transform(toDate, 'yyyy-MM-dd');
        this.reportService.getTableWiseReport(this.date, this.date2, tableId).subscribe(function (data) {
            _this.billing = data;
            _this.dtTrigger.next();
        }, function (error) {
            console.log(error);
        });
    };
    TablewiseReportComponent.prototype.back = function () {
        this.router.navigate(['restaurants/admin/report']);
    };
    TablewiseReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tablewise-report',
            template: __webpack_require__(/*! ./tablewise-report.component.html */ "./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.html"),
            styles: [__webpack_require__(/*! ./tablewise-report.component.css */ "./src/app/restaurants/admin/report/tablewise-report/tablewise-report.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _KOT_table_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"]])
    ], TablewiseReportComponent);
    return TablewiseReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/timewise-report/timewise-report.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/timewise-report/timewise-report.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/timewise-report/timewise-report.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/timewise-report/timewise-report.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  timewise-report works!\n</p>\n"

/***/ }),

/***/ "./src/app/restaurants/admin/report/timewise-report/timewise-report.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/timewise-report/timewise-report.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TimewiseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimewiseReportComponent", function() { return TimewiseReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimewiseReportComponent = /** @class */ (function () {
    function TimewiseReportComponent() {
    }
    TimewiseReportComponent.prototype.ngOnInit = function () {
    };
    TimewiseReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timewise-report',
            template: __webpack_require__(/*! ./timewise-report.component.html */ "./src/app/restaurants/admin/report/timewise-report/timewise-report.component.html"),
            styles: [__webpack_require__(/*! ./timewise-report.component.css */ "./src/app/restaurants/admin/report/timewise-report/timewise-report.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimewiseReportComponent);
    return TimewiseReportComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"submit\" mat-raised-button color=\"primary\" style=\"float: right; margin-top: 20px; margin-bottom: 30px;\" (click)=\"back()\">Previous Page</button>\n<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"My date\" [matDatepicker]=\"myDate\" #fromDate (click)=\"refresh()\">\n        <mat-datepicker-toggle matSuffix [for]=\"myDate\"></mat-datepicker-toggle>\n        <mat-datepicker #myDate></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"form\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker1\" placeholder=\"To Date\" #toDate name=\"toDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n        <mat-datepicker #picker1></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <mat-form-field class=\"example-full-width\">\n      <input matInput #input placeholder=\"Waiter Name\" aria-label=\"Waiter Name\" [matAutocomplete]=\"auto3\" [formControl]=\"waiterCtrl\">\n      <mat-autocomplete #auto3=\"matAutocomplete\">\n          <mat-option #waiter *ngFor=\"let state of waiter | async\" [value]=\"state.employeeName\" (click)=\"getWaiterId(state.employeeId)\">\n              {{state.employeeName}}\n          </mat-option>\n      </mat-autocomplete>\n  </mat-form-field>\n  </div>\n  <div class=\"col-sm-3\">\n    <button type=\"submit\" id=\"newOrder\" mat-raised-button color=\"primary\" (click)=\"getWaiterWiseReport(fromDate.value,toDate.value)\">Report</button>\n  </div>\n</div>\n<mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n<table datatable id=\"example\" [dtOptions]=\"dtOptions\"  [dtTrigger]=\"dtTrigger\" class=\"row-border hover\" cellspacing=\"0\" width=\"100%\">\n  <thead>\n    <tr>\n      <th>Biling No</th>\n      <th>Waiter Name</th>\n      <th>Table Id</th>\n      <th>Amount</th>\n      <th>GST Amount</th>\n      <th>Service Charge</th>\n      <th>Discount</th>\n      <th>Payment Mode</th> \n    </tr>\n  </thead>\n  <tbody *ngIf=\"billing?.length > 0\"> \n    <tr *ngFor=\"let billings of billing\">\n      <td>{{ billings.billingId }}</td>\n      <td>{{ billings.waiterId }}</td>\n      <td>{{ billings.tableId }}</td>\n      <td>{{ billings.totalAmount}}</td>\n      <td>{{ billings.gstAmount }}</td>\n      <td>{{ billings.serviceCharge }}</td>\n      <td>{{ billings.discount}}</td>\n      <td>{{ billings.cashType }}</td>\n    </tr>\n  </tbody>\n  <tbody *ngIf=\"billing?.length == 0\">\n      <tr>\n        <td class=\"no-data-available\" colspan=\"4\">No Data Available in datatable</td>\n      </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: WaiterwiseReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaiterwiseReportComponent", function() { return WaiterwiseReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report.service */ "./src/app/restaurants/admin/report/report.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _KOT_order_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WaiterwiseReportComponent = /** @class */ (function () {
    function WaiterwiseReportComponent(reportService, datePipe, router, orderService) {
        this.reportService = reportService;
        this.datePipe = datePipe;
        this.router = router;
        this.orderService = orderService;
        this.dtOptions = {};
        this.billing = [];
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.waiterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.employeeName = [];
    }
    WaiterwiseReportComponent.prototype.ngOnInit = function () {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            retrieve: true,
            destroy: true,
            infoEmpty: "No entries to show",
            lengthMenu: [
                [10, 25, 50, -1],
                ['10 rows', '25 rows', '50 rows', 'Show all']
            ],
            dom: 'Blfrtip',
            buttons: [
                'print', 'excel', 'pdf'
            ]
        };
        this.billing = [];
        this.getAllWaiter();
    };
    WaiterwiseReportComponent.prototype.getAllWaiter = function () {
        var _this = this;
        this.orderService.getAllWaiter().subscribe(function (data) {
            _this.employee = data;
            _this.billing = [];
            _this.waiter = _this.waiterCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterState(state) : _this.employee.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    WaiterwiseReportComponent.prototype._filterState = function (value) {
        var filterValue = value.toLowerCase();
        return this.employee.filter(function (emp) { return emp.employeeName.toLowerCase().indexOf(filterValue) === 0; });
    };
    WaiterwiseReportComponent.prototype.getWaiterId = function (waiterId) {
        console.log(waiterId);
        this.waiterId = waiterId;
    };
    WaiterwiseReportComponent.prototype.getWaiterWiseReport = function (fromDate, toDate) {
        var _this = this;
        console.log(this.waiterId);
        this.date = this.datePipe.transform(fromDate, 'yyyy-MM-dd');
        this.date2 = this.datePipe.transform(toDate, 'yyyy-MM-dd');
        this.reportService.getWaiterWiseReport(this.date, this.date2, this.waiterId).subscribe(function (data) {
            console.log(data);
            _this.billing = data;
            _this.dtOptions = {
                pagingType: 'full_numbers',
                pageLength: 10,
                retrieve: true,
                destroy: true,
                lengthMenu: [
                    [10, 25, 50, -1],
                    ['10 rows', '25 rows', '50 rows', 'Show all']
                ],
                dom: 'Blfrtip',
                buttons: [
                    'print', 'excel', 'pdf'
                ]
            };
            _this.dtTrigger.next();
        }, function (error) {
            console.log(error);
        });
    };
    WaiterwiseReportComponent.prototype.back = function () {
        this.router.navigate(['restaurants/admin/report']);
    };
    WaiterwiseReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waiterwise-report',
            template: __webpack_require__(/*! ./waiterwise-report.component.html */ "./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.html"),
            styles: [__webpack_require__(/*! ./waiterwise-report.component.css */ "./src/app/restaurants/admin/report/waiterwise-report/waiterwise-report.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _KOT_order_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]])
    ], WaiterwiseReportComponent);
    return WaiterwiseReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=report-report-module.js.map