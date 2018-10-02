(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kitchen-dashboard-kitchen-dashboard-module"],{

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 18px;\r\n}\r\n.container{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color:springgreen;\r\n   }"

/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6 style=\"margin-top: 50px;color: violet;\">Today Avalible Menu Percentage</h6>\n<h6>{{display}}</h6>\n<mat-tab-group  mat-stretch-tabs style=\"height: 300px;background-color: springgreen\" >\n  <mat-tab label=\"Available Menu\">\n    <div class=\"container\">\n      <div *ngFor=\"let temp of Option\">\n        <div *ngIf=\"temp.menuId!=''\">\n          <div class=\"row\" style=\"width: 100%\">\n            <div class=\"col-sm-4\">\n              <h6>{{temp.menuName}}</h6>\n            </div>\n            <div class=\"col-sm-8\" style=\"margin-top: 10px;\">\n              <mat-progress-bar matTooltip=\"{{temp.menuName}} : {{temp.precentquantity}}%\" mode=\"determinate\" value=\"{{temp.precentquantity}}\"></mat-progress-bar>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AvailableMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableMenuComponent", function() { return AvailableMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin/KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _admin_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin/dashboard/dashboard.service */ "./src/app/restaurants/admin/dashboard/dashboard.service.ts");
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
            template: __webpack_require__(/*! ./available-menu.component.html */ "./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.html"),
            styles: [__webpack_require__(/*! ./available-menu.component.css */ "./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__["MenuMasterService"],
            _admin_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
    ], AvailableMenuComponent);
    return AvailableMenuComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: KitchenDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenDashboardRoutingModule", function() { return KitchenDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kitchen_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kitchen-dashboard.component */ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _kitchen_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["KitchenDashboardComponent"]
    }
];
var KitchenDashboardRoutingModule = /** @class */ (function () {
    function KitchenDashboardRoutingModule() {
    }
    KitchenDashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], KitchenDashboardRoutingModule);
    return KitchenDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 150px;\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <button mat-raised-button color=\"primary\" (click)=\"stockreduce()\">\n        &nbsp;Auto Stock Reduce\n      </button>\n    </div>\n    <div class=\"col-sm-3\">\n      <button mat-raised-button color=\"primary\" (click)=\"b()\">\n        &nbsp;Today Menu\n      </button>\n    </div>\n    <div class=\"col-sm-3\">\n      <button mat-raised-button (click)=\"closeKitchen()\" color=\"primary\">\n        &nbsp;Close Kitchen\n      </button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n        <app-available-menu></app-available-menu>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.ts ***!
  \**************************************************************************************/
/*! exports provided: KitchenDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenDashboardComponent", function() { return KitchenDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kitchen_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kitchen-dashboard.service */ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KitchenDashboardComponent = /** @class */ (function () {
    function KitchenDashboardComponent(datePipe, kitchenDashboardService) {
        this.datePipe = datePipe;
        this.kitchenDashboardService = kitchenDashboardService;
    }
    KitchenDashboardComponent.prototype.ngOnInit = function () {
    };
    KitchenDashboardComponent.prototype.closeKitchen = function () {
        this.time = this.datePipe.transform(new Date(), 'hh:mm:ss');
        this.date = this.datePipe.transform(new Date(), "yyyy-MM-dd");
        this.kitchenDashboardService.closeKitchen(this.date).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    KitchenDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen-dashboard',
            template: __webpack_require__(/*! ./kitchen-dashboard.component.html */ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./kitchen-dashboard.component.css */ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
            _kitchen_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["KitchenDashboardService"]])
    ], KitchenDashboardComponent);
    return KitchenDashboardComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.module.ts ***!
  \***********************************************************************************/
/*! exports provided: KitchenDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenDashboardModule", function() { return KitchenDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kitchen_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kitchen-dashboard.component */ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.component.ts");
/* harmony import */ var _kitchen_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kitchen-dashboard-routing.module */ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard-routing.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _kitchen_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kitchen-dashboard.service */ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.service.ts");
/* harmony import */ var _available_menu_available_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./available-menu/available-menu.component */ "./src/app/restaurants/kitchen/kitchen-dashboard/available-menu/available-menu.component.ts");
/* harmony import */ var _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../admin/KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _admin_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/dashboard/dashboard.service */ "./src/app/restaurants/admin/dashboard/dashboard.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var KitchenDashboardModule = /** @class */ (function () {
    function KitchenDashboardModule() {
    }
    KitchenDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _kitchen_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["KitchenDashboardRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"]
            ],
            providers: [
                _kitchen_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["KitchenDashboardService"], _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_7__["MenuMasterService"], _admin_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"]
            ],
            declarations: [
                _kitchen_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["KitchenDashboardComponent"],
                _available_menu_available_menu_component__WEBPACK_IMPORTED_MODULE_6__["AvailableMenuComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], KitchenDashboardModule);
    return KitchenDashboardModule;
}());



/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.service.ts":
/*!************************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-dashboard/kitchen-dashboard.service.ts ***!
  \************************************************************************************/
/*! exports provided: KitchenDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenDashboardService", function() { return KitchenDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var KitchenDashboardService = /** @class */ (function () {
    function KitchenDashboardService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    KitchenDashboardService.prototype.closeKitchen = function (date) {
        return this.http.get(this.baseUrl + '/closeKitchen/' + date, this.options)
            .pipe(Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }), Object(_node_modules_rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error);
        }));
    };
    KitchenDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], KitchenDashboardService);
    return KitchenDashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=kitchen-dashboard-kitchen-dashboard-module.js.map