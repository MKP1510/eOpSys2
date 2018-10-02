(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 18px;\r\n}\r\n.container{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color:springgreen;\r\n   }"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 style=\"margin-top: 100px;color: violet;\">Today Avalible Menu Percentage</h6>\n<h6>{{display}}</h6>\n<mat-tab-group  mat-stretch-tabs style=\"height: 300px;background-color: springgreen\" >\n  <mat-tab label=\"Available Menu\">\n    <div class=\"container\">\n      <div *ngFor=\"let temp of Option\">\n        <div *ngIf=\"temp.menuId!=''\">\n          <div class=\"row\" style=\"width: 100%\">\n            <div class=\"col-sm-4\">\n              <h6>{{temp.menuName}}</h6>\n            </div>\n            <div class=\"col-sm-8\" style=\"margin-top: 10px;\">\n              <mat-progress-bar matTooltip=\"{{temp.menuName}} : {{temp.precentquantity}}%\" mode=\"determinate\" value=\"{{temp.precentquantity}}\"></mat-progress-bar>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AvailableMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableMenuComponent", function() { return AvailableMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/restaurants/admin/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AvailableMenuComponent = /** @class */ (function () {
    function AvailableMenuComponent(datePipe, menuMasterService, dashboardService) {
        this.datePipe = datePipe;
        this.menuMasterService = menuMasterService;
        this.dashboardService = dashboardService;
        this.quantity = [];
        this.Option = [{ menuId: '', menuName: '', quantity: '', availableMenuQuantity: '', precentquantity: '' }];
    }
    AvailableMenuComponent.prototype.ngOnInit = function () {
        this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.getAllTempRecipes();
        this.getAllMenuMaster();
    };
    AvailableMenuComponent.prototype.getAllTempRecipes = function () {
        var _this = this;
        this.dashboardService.getAllTempRecipes().subscribe(function (data) {
            _this.tempRecipes = data;
            var i = 0;
            var quantity;
            if (_this.tempRecipes.length == 0) {
                _this.dispaly = "Today Menu don't Available";
            }
            _this.tempRecipes.forEach(function (res) {
                if (res.unit == 'KiloGram') {
                    quantity = res.quantity;
                    quantity = quantity / 1000;
                }
                else {
                    quantity = res.quantity;
                }
                _this.Option[i].quantity = quantity.toString();
                _this.quantity[i] = quantity;
                _this.Option.push({ menuId: '', menuName: '', quantity: '', availableMenuQuantity: '', precentquantity: '' });
                i++;
            });
            _this.getAllMenuMaster();
        }, function (error) {
            console.log(error);
        });
    };
    AvailableMenuComponent.prototype.getAllMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (data) {
            _this.menuMaster = data;
            var i = 0;
            var qty = 0;
            _this.menuMaster.forEach(function (res) {
                if (res.date == _this.date) {
                    _this.Option[i].menuId = res.menuId.toString();
                    _this.Option[i].menuName = res.menuName;
                    _this.Option[i].availableMenuQuantity = res.availableMenuQuantity.toString();
                    _this.Option.push({ menuId: '', menuName: '', quantity: '', availableMenuQuantity: '', precentquantity: '' });
                    qty = Number(_this.Option[i].availableMenuQuantity) / Number(_this.Option[i].quantity) * 100;
                    _this.Option[i].precentquantity = qty.toString();
                    i++;
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    AvailableMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-available-menu',
            template: __webpack_require__(/*! ./available-menu.component.html */ "./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.html"),
            styles: [__webpack_require__(/*! ./available-menu.component.css */ "./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__["MenuMasterService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], AvailableMenuComponent);
    return AvailableMenuComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/dashboard-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: DashbordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashbordRoutingModule", function() { return DashbordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/restaurants/admin/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    }
];
var DashbordRoutingModule = /** @class */ (function () {
    function DashbordRoutingModule() {
    }
    DashbordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashbordRoutingModule);
    return DashbordRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    margin-left: 100px;\r\n    margin-top: 20px;\r\n}\r\ntable{\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\">\n  <h1 style=\"font-size: 3rem\">\n    {{title}}\n  </h1>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-6\">\n    <app-inversamount></app-inversamount>\n    <app-available-menu></app-available-menu>\n  </div>\n  <div class=\"col-sm-6\">\n      <app-sales-chart></app-sales-chart>\n      <app-purchase-chart></app-purchase-chart>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.title = "eOpSys";
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/restaurants/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/restaurants/admin/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/restaurants/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/restaurants/admin/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _KOT_order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/restaurants/admin/dashboard/dashboard.service.ts");
/* harmony import */ var _sales_chart_sales_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sales-chart/sales-chart.component */ "./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _purchase_chart_purchase_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./purchase-chart/purchase-chart.component */ "./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.ts");
/* harmony import */ var _inversamount_inversamount_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inversamount/inversamount.component */ "./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.ts");
/* harmony import */ var _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _available_menu_available_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./available-menu/available-menu.component */ "./src/app/restaurants/admin/dashboard/available-menu/available-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashbordRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"]
            ], providers: [_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"], _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_13__["MenuMasterService"]],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _sales_chart_sales_chart_component__WEBPACK_IMPORTED_MODULE_9__["SalesChartComponent"], _purchase_chart_purchase_chart_component__WEBPACK_IMPORTED_MODULE_11__["PurchaseChartComponent"], _inversamount_inversamount_component__WEBPACK_IMPORTED_MODULE_12__["InversamountComponent"], _available_menu_available_menu_component__WEBPACK_IMPORTED_MODULE_14__["AvailableMenuComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report{\r\n    margin-top: 100px;\r\n    height: 200px;\r\n}\r\nh6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6 style=\"margin-top: 50px; font-size: 20px;color: violet;\">Report</h6>\n  <mat-card style=\"margin-top: 50px;height: 200px; background-color: springgreen\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <mat-card style=\"margin-top: 30px;color: violet;\">\n              <h6>Today Inverse Amount</h6>\n              <h6>{{inverseAmount}}</h6>\n          </mat-card>\n      </div>\n      <div class=\"col-sm-6\">\n          <mat-card style=\"margin-top: 30px;color: violet;\">\n            <h6>Today Sales Target Amount</h6>\n            <h6>{{salesAmount}}</h6>\n          </mat-card>\n      </div>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.ts ***!
  \************************************************************************************/
/*! exports provided: InversamountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InversamountComponent", function() { return InversamountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/restaurants/admin/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InversamountComponent = /** @class */ (function () {
    function InversamountComponent(menuMasterService, dashboardService) {
        this.menuMasterService = menuMasterService;
        this.dashboardService = dashboardService;
    }
    InversamountComponent.prototype.ngOnInit = function () {
        this.getOverAllSalesAmount();
        this.getTotalInversAmount();
    };
    InversamountComponent.prototype.getOverAllSalesAmount = function () {
        var _this = this;
        this.salesAmount = 0;
        this.dashboardService.getDayMenuMaster().subscribe(function (data) {
            _this.menuMaster = data;
            _this.menuMaster.forEach(function (res) {
                var amount = res.basicAmount * res.availableMenuQuantity;
                _this.salesAmount = _this.salesAmount + amount;
            });
        }, function (error) {
            console.log(error);
        });
    };
    InversamountComponent.prototype.getTotalInversAmount = function () {
        var _this = this;
        this.inverseAmount = 0;
        this.dashboardService.getAllTempRecipes().subscribe(function (data) {
            _this.tempRecipes = data;
            _this.tempRecipes.forEach(function (res) {
                _this.inverseAmount = _this.inverseAmount + res.totalAmount;
            });
        }, function (error) {
            console.log(error);
        });
    };
    InversamountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inversamount',
            template: __webpack_require__(/*! ./inversamount.component.html */ "./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.html"),
            styles: [__webpack_require__(/*! ./inversamount.component.css */ "./src/app/restaurants/admin/dashboard/inversamount/inversamount.component.css")]
        }),
        __metadata("design:paramtypes", [_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__["MenuMasterService"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], InversamountComponent);
    return InversamountComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <button mat-raised-button color=\"primary\" type=\"submit\" (color)=\"primary\" (click)=\"getPurchaseAmountByDay()\">Day</button>\n  </div>\n  <div class=\"col-sm-4\">\n    <button mat-raised-button color=\"primary\" type=\"submit\" (color)=\"primary\" (click)=\"getPurchaseAmountByWeek()\">Week</button>\n  </div>\n  <div class=\"col-sm-4\">\n    <button mat-raised-button color=\"primary\" type=\"submit\" (color)=\"primary\" (click)=\"getPurchaseAmountByMonth()\">Month</button>\n  </div>\n</div>\n<table >\n    <tr>\n      <td style=\"width:600px; height:400px;\">\n        <canvas id=\"lineChart\"></canvas>\n      </td>\n    </tr>\n  </table>\n\n"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PurchaseChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseChartComponent", function() { return PurchaseChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/restaurants/admin/dashboard/dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PurchaseChartComponent = /** @class */ (function () {
    function PurchaseChartComponent(datePipe, dashboardService) {
        this.datePipe = datePipe;
        this.dashboardService = dashboardService;
        this.day = [];
        this.amount = [];
        this.amount1 = [];
        this.amount2 = [];
        this.Week = [];
        this.month = [];
    }
    PurchaseChartComponent.prototype.ngOnInit = function () {
        this.date = this.datePipe.transform(new Date(), 'EE');
        this.time = this.datePipe.transform(new Date(), 'HH:mm:ss');
        this.getDay();
        this.getPurchaseAmountByDay();
    };
    PurchaseChartComponent.prototype.getDay = function () {
        if (this.date == 'Sun') {
            this.day = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
        }
        else if (this.date == 'Mon') {
            this.day = ['Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun', 'Mon'];
        }
        else if (this.date == 'Tue') {
            this.day = ['Wed', 'Thurs', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
        }
        else if (this.date == 'Wed') {
            this.day = ['Thurs', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
        }
        else if (this.date == 'Thurs') {
            this.day = ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thurs'];
        }
        else if (this.date == 'Fri') {
            this.day = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri'];
        }
        else if (this.date == 'Sat') {
            this.day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
        }
    };
    PurchaseChartComponent.prototype.getPurchaseAmountByDay = function () {
        var _this = this;
        this.dashboardService.getPurchaseAmountByDay().subscribe(function (data) {
            _this.purchase = data;
            _this.amount = [];
            _this.purchase.forEach(function (res) {
                _this.amount.push(res.totalAmount);
            });
            _this.LineChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('lineChart', {
                type: 'line',
                data: {
                    labels: _this.day,
                    datasets: [
                        {
                            label: 'Purchase Amount By Day Wise',
                            data: _this.amount,
                            fill: false,
                            borderColor: "red",
                            borderWidth: 1
                        }
                    ],
                },
                options: {
                    title: {
                        text: "Puchase Chart",
                        display: true
                    },
                    legend: {
                        display: true
                    },
                    scales: {
                        yAxes: [{
                                id: 'A',
                                type: 'linear',
                                position: 'left',
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                    }
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    PurchaseChartComponent.prototype.getPurchaseAmountByWeek = function () {
        var _this = this;
        this.dashboardService.getPurchaseAmountByWeek().subscribe(function (data) {
            _this.purchase = data;
            _this.amount1 = [];
            _this.Week = [];
            _this.purchase.forEach(function (res) {
                _this.amount1.push(res.totalAmount);
                _this.Week.push(res.weekOfMonth);
            });
            _this.LineChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('lineChart', {
                type: 'line',
                data: {
                    labels: _this.Week,
                    datasets: [
                        {
                            label: 'Purchase Amount By Week Wise',
                            data: _this.amount1,
                            fill: false,
                            borderColor: "red",
                            borderWidth: 1
                        }
                    ],
                },
                options: {
                    title: {
                        text: "Puchase Chart",
                        display: true
                    },
                    legend: {
                        display: true
                    },
                    scales: {
                        yAxes: [{
                                id: 'A',
                                type: 'linear',
                                position: 'left',
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                    }
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    PurchaseChartComponent.prototype.getPurchaseAmountByMonth = function () {
        var _this = this;
        this.dashboardService.getPurchaseAmountByMonth().subscribe(function (data) {
            _this.purchase = data;
            _this.amount2 = [];
            _this.month = [];
            _this.purchase.forEach(function (res) {
                _this.amount2.push(res.totalAmount);
                _this.month.push(res.weekOfMonth);
            });
            _this.LineChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('lineChart', {
                type: 'line',
                data: {
                    labels: _this.month,
                    datasets: [
                        {
                            label: 'Purchase Amount By Month Wise',
                            data: _this.amount2,
                            fill: false,
                            borderColor: "red",
                            borderWidth: 1
                        }
                    ],
                },
                options: {
                    title: {
                        text: "Puchase Chart",
                        display: true
                    },
                    legend: {
                        display: true
                    },
                    scales: {
                        yAxes: [{
                                id: 'A',
                                type: 'linear',
                                position: 'left',
                                ticks: {
                                    beginAtZero: true
                                }
                            }],
                    }
                }
            });
        }, function (error) {
            console.log(error);
        });
    };
    PurchaseChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-purchase-chart',
            template: __webpack_require__(/*! ./purchase-chart.component.html */ "./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.html"),
            styles: [__webpack_require__(/*! ./purchase-chart.component.css */ "./src/app/restaurants/admin/dashboard/purchase-chart/purchase-chart.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], PurchaseChartComponent);
    return PurchaseChartComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n    margin-top: -60px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin-left: 30px\">\n  <div class=\"col-sm-6\">\n    <div class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"employeeDOB\" [(ngModel)]=\"billings.date\" name=\"employeeDOB\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n      </mat-form-field>\n    </div>\n  </div>\n  <div class=\"col-sm-6\">\n    <button mat-raised-button color=\"primary\" type=\"submit\" (color)=\"primary\" (click)=\"getSalesAmount()\">OK</button>\n  </div>\n</div>\n<table>\n  <tr>\n    <td style=\"width:600px; height:400px;\">\n      <canvas id=\"lineChart1\"></canvas>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SalesChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesChartComponent", function() { return SalesChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/restaurants/admin/dashboard/dashboard.service.ts");
/* harmony import */ var _KOT_billing_billing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../KOT/billing/billing */ "./src/app/restaurants/admin/KOT/billing/billing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SalesChartComponent = /** @class */ (function () {
    function SalesChartComponent(datePipe, dashboardService) {
        this.datePipe = datePipe;
        this.dashboardService = dashboardService;
        this.time1 = [];
        this.amount = [];
        this.amount1 = [];
    }
    SalesChartComponent.prototype.ngOnInit = function () {
        this.billings = new _KOT_billing_billing__WEBPACK_IMPORTED_MODULE_4__["Billing"]();
        this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.time = this.datePipe.transform(new Date(), 'HH:mm:ss');
        this.getSalesAmount();
        if (this.time >= '06:00:00' && this.time <= '07::00:00') {
            this.time1 = ["06:AM", "07:AM"];
        }
        else if (this.time >= '07:00:00' && this.time <= '08:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM",];
        }
        else if (this.time >= '08:00:00' && this.time <= '09:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM"];
        }
        else if (this.time >= '09:00:00' && this.time <= '10:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM"];
        }
        else if (this.time >= '10:00:00' && this.time <= '11::00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM"];
        }
        else if (this.time >= '11:00:00' && this.time <= '12:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM"];
        }
        else if (this.time >= '12:00:00' && this.time <= '13:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM"];
        }
        else if (this.time >= '13:00:00' && this.time <= '14:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM"];
        }
        else if (this.time >= '14:00:00' && this.time <= '15:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM"];
        }
        else if (this.time >= '15:00:00' && this.time <= '16:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM"];
        }
        else if (this.time >= '16:00:00' && this.time <= '17:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM", "5:PM"];
        }
        else if (this.time >= '17:00:00' && this.time <= '18:00:00') {
            console.log("welcome");
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM", "5:PM", "06:PM"];
        }
        else if (this.time >= '18:00:00' && this.time <= '19:00:00') {
            console.log("welcome33");
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM", "5:PM", "06:PM", "07:PM"];
        }
        else if (this.time >= '19:00:00' && this.time <= '20:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM", "5:PM", "06:PM", "07:PM", "08:PM"];
        }
        else if (this.time >= '20:00:00' && this.time <= '21:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM", "5:PM", "06:PM", "07:PM", "08:PM", "09:PM"];
        }
        else if (this.time >= '21:00:00' && this.time <= '22:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM", "5:PM", "06:PM", "07:PM", "08:PM", "09:PM", "10:PM"];
        }
        else if (this.time >= '22:00:00' && this.time <= '23:00:00') {
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM", "5:PM", "06:PM", "07:PM", "08:PM", "09:PM", "10:PM", "11:PM"];
        }
    };
    SalesChartComponent.prototype.getSalesAmount = function () {
        var _this = this;
        this.amount = [];
        this.amount1 = [];
        if (this.billings.date != null) {
            this.date = this.datePipe.transform(this.billings.date, 'yyyy-MM-dd');
            this.time1 = ["06:AM", "07:AM", "08:AM", "09:AM", "10:AM", "11:AM", "12:PM", "1:PM", "2:AM", "3:AM", "4:PM", "5:PM", "06:PM", "07:PM", "08:PM", "09:PM", "10:PM", "11:PM"];
        }
        this.dashboardService.getSalesTimeReport(this.date).subscribe(function (data) {
            _this.billing = data;
            _this.billing.forEach(function (s) {
                _this.amount.push(s.amount);
            });
            _this.dashboardService.getSalesDayReport(_this.date).subscribe(function (data) {
                _this.billing = data;
                _this.billing.forEach(function (s) {
                    _this.amount1.push(s.amount);
                });
                _this.LineChart = new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('lineChart1', {
                    type: 'line',
                    data: {
                        labels: _this.time1,
                        datasets: [
                            {
                                label: 'Sales Amount By Time Interval',
                                data: _this.amount1,
                                fill: false,
                                borderColor: "red",
                                borderWidth: 1
                            },
                            {
                                label: 'Total Sales Amount By Day',
                                data: _this.amount,
                                fill: false,
                                borderColor: "green",
                                borderWidth: 1
                            }
                        ],
                    },
                    options: {
                        title: {
                            text: "Sales Chart",
                            display: true
                        },
                        legend: {
                            display: true
                        },
                        scales: {
                            yAxes: [{
                                    id: 'A',
                                    type: 'linear',
                                    position: 'left',
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }],
                        }
                    }
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    SalesChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sales-chart',
            template: __webpack_require__(/*! ./sales-chart.component.html */ "./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.html"),
            styles: [__webpack_require__(/*! ./sales-chart.component.css */ "./src/app/restaurants/admin/dashboard/sales-chart/sales-chart.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
            _dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]])
    ], SalesChartComponent);
    return SalesChartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map