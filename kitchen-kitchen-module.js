(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kitchen-kitchen-module"],{

/***/ "./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n  mat-icon{\r\n    color: #FB8C00;\r\n    font-size: 30px;\r\n  }\r\n  \r\n  span{\r\n      color:rgb(255, 115, 0);\r\n      font-size: 20px;\r\n      font-family: 'Times New Roman', Times, serif;\r\n  }"

/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"fixed-top\">\n    <mat-toolbar-row>\n      <span>eOpSys</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n        <mat-icon>list</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <mat-menu #menu=\"matMenu\" color=\"primary\">\n      <button mat-menu-item color=\"primary\" [routerLinkActive]=\"['router-link-active']\"> \n        <mat-icon color=\"#FB8C00\">table_chart</mat-icon>\n        <span></span>\n      </button>\n    <button mat-menu-item color=\"primary\"  routerLink=\"./kitchenDashboard\" [routerLinkActive]=\"['router-link-active']\"> \n      <mat-icon color=\"#FB8C00\">home</mat-icon>\n      <span>Home</span>\n    </button>\n    <button mat-menu-item color=\"primary\" routerLink=\"./stock\" [routerLinkActive]=\"['router-link-active']\">\n      <mat-icon color=\"#FB8C00\">store</mat-icon>\n      <span>Stock Entry</span>\n    </button>\n    <button mat-menu-item color=\"primary\" routerLink=\"./todayMenu\" [routerLinkActive]=\"['router-link-active']\">\n      <mat-icon color=\"#FB8C00\">restaurant_menu</mat-icon>\n      <span>Today Menu</span>\n    </button>\n    <button mat-menu-item color=\"primary\" routerLink=\"./liveOrders\" [routerLinkActive]=\"['router-link-active']\">\n      <mat-icon color=\"#FB8C00\">room_service</mat-icon>\n      <span>Live Order</span>\n    </button>\n    <button mat-menu-item color=\"primary\" routerLink=\"./todayMenu\" [routerLinkActive]=\"['router-link-active']\">\n      <mat-icon color=\"#FB8C00\">person</mat-icon>\n      <span>Profile</span>\n    </button>\n    <button mat-menu-item color=\"primary\" (click)=\"logout()\" >\n      <mat-icon color=\"#FB8C00\">power_settings_new</mat-icon>\n      <span>Logout</span>\n    </button>\n  </mat-menu>"

/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.ts ***!
  \********************************************************************************/
/*! exports provided: KitchenHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenHeaderComponent", function() { return KitchenHeaderComponent; });
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


var KitchenHeaderComponent = /** @class */ (function () {
    function KitchenHeaderComponent(router) {
        this.router = router;
    }
    KitchenHeaderComponent.prototype.ngOnInit = function () {
    };
    KitchenHeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    KitchenHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen-header',
            template: __webpack_require__(/*! ./kitchen-header.component.html */ "./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.html"),
            styles: [__webpack_require__(/*! ./kitchen-header.component.css */ "./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], KitchenHeaderComponent);
    return KitchenHeaderComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: KitchenRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenRoutingModule", function() { return KitchenRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kitchen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kitchen.component */ "./src/app/restaurants/kitchen/kitchen.component.ts");
/* harmony import */ var _shared_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/guard */ "./src/app/shared/guard/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _kitchen_component__WEBPACK_IMPORTED_MODULE_2__["KitchenComponent"],
        children: [
            { path: '', redirectTo: 'kitchenDashboard' },
            { path: 'kitchenDashboard', loadChildren: './kitchen-dashboard/kitchen-dashboard.module#KitchenDashboardModule', canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_3__["Auth3Guard"]] },
            { path: 'todayMenu', loadChildren: './today-menu/today-menu.module#TodayMenuModule', canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_3__["Auth3Guard"]] },
            { path: 'stock', loadChildren: './kitchen-balance-stock/kitchen-balance-stock.module#KitchenBalanceStockModule', canActivate: [_shared_guard__WEBPACK_IMPORTED_MODULE_3__["Auth3Guard"]] }
        ]
    }
];
var KitchenRoutingModule = /** @class */ (function () {
    function KitchenRoutingModule() {
    }
    KitchenRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], KitchenRoutingModule);
    return KitchenRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen.component.css":
/*!***********************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen.component.html":
/*!************************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-kitchen-header></app-kitchen-header>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen.component.ts ***!
  \**********************************************************/
/*! exports provided: KitchenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenComponent", function() { return KitchenComponent; });
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

var KitchenComponent = /** @class */ (function () {
    function KitchenComponent() {
    }
    KitchenComponent.prototype.ngOnInit = function () {
    };
    KitchenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kitchen',
            template: __webpack_require__(/*! ./kitchen.component.html */ "./src/app/restaurants/kitchen/kitchen.component.html"),
            styles: [__webpack_require__(/*! ./kitchen.component.css */ "./src/app/restaurants/kitchen/kitchen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KitchenComponent);
    return KitchenComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/kitchen/kitchen.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/restaurants/kitchen/kitchen.module.ts ***!
  \*******************************************************/
/*! exports provided: KitchenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenModule", function() { return KitchenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kitchen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kitchen.component */ "./src/app/restaurants/kitchen/kitchen.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _kitchen_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kitchen-routing.module */ "./src/app/restaurants/kitchen/kitchen-routing.module.ts");
/* harmony import */ var _kitchen_header_kitchen_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kitchen-header/kitchen-header.component */ "./src/app/restaurants/kitchen/kitchen-header/kitchen-header.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var KitchenModule = /** @class */ (function () {
    function KitchenModule() {
    }
    KitchenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared__WEBPACK_IMPORTED_MODULE_3__["StatModule"],
                _kitchen_routing_module__WEBPACK_IMPORTED_MODULE_4__["KitchenRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            declarations: [_kitchen_component__WEBPACK_IMPORTED_MODULE_2__["KitchenComponent"], _kitchen_header_kitchen_header_component__WEBPACK_IMPORTED_MODULE_5__["KitchenHeaderComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], KitchenModule);
    return KitchenModule;
}());



/***/ })

}]);
//# sourceMappingURL=kitchen-kitchen-module.js.map