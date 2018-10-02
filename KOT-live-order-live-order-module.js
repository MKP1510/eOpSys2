(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KOT-live-order-live-order-module"],{

/***/ "./src/app/restaurants/admin/KOT/live-order/live-order-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/live-order-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: LiveOrederRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveOrederRoutingModule", function() { return LiveOrederRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _live_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-order.component */ "./src/app/restaurants/admin/KOT/live-order/live-order.component.ts");
/* harmony import */ var _view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-menu/view-menu.component */ "./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _live_order_component__WEBPACK_IMPORTED_MODULE_2__["LiveOrderComponent"],
    },
    {
        path: 'viewmenu', component: _view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_3__["ViewMenuComponent"],
    }
];
var LiveOrederRoutingModule = /** @class */ (function () {
    function LiveOrederRoutingModule() {
    }
    LiveOrederRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LiveOrederRoutingModule);
    return LiveOrederRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/live-order/live-order.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/live-order.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    width: 150px;\r\n}\r\nh6{\r\n    font-size: 14px;\r\n}\r\n#newOrder{\r\n    \r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/live-order/live-order.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/live-order.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <button type=\"submit\" id=\"newOrder\"  mat-raised-button color=\"primary\" (click)=\"newOrder()\">New Order</button>\n  <div *ngFor=\"let orders of order\">\n    <div *ngIf=\"orders.status!='payment'\">\n      <mat-card>\n        <div class=\"row\">\n          <div class=\"col-sm-2\">\n            <h6>Order Id: {{orders.orderId}}</h6>\n          </div>\n          <div class=\"col-sm-2\">\n            <h6>Waiter Name: {{orders.waiterName}}</h6>\n            <h6>Table Name: {{orders.tableName}}</h6>\n          </div>\n          <div class=\"col-sm-2\">\n            <h6>Date: {{orders.date}}</h6>\n            <h6>Time: {{orders.time}}</h6>\n          </div>\n          <div class=\"col-sm-2\">\n            {{countDown}}\n          </div>\n          <div class=\"col-sm-2\">\n  \n          </div>\n          <div class=\"col-sm-2\">\n              <div *ngIf=\"orders.status!='close'\">\n                  <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"viewMenu(orders.orderId)\">View Order</button>\n                  <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"editOrder(orders.orderId)\">ReOrder</button>\n              </div>\n            <div *ngIf=\"orders.status=='order'\">\n              <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"pay(orders.tableId,orders.orderId)\">Close Order</button>\n            </div>\n            <div *ngIf=\"orders.status=='close'\">\n              <button type=\"submit\"  mat-raised-button color=\"accent\" (click)=\"billing(orders.orderId)\">Payment</button>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/live-order/live-order.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/live-order.component.ts ***!
  \**************************************************************************/
/*! exports provided: LiveOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveOrderComponent", function() { return LiveOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-menu/view-menu.component */ "./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.ts");
/* harmony import */ var _table_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../table/table */ "./src/app/restaurants/admin/KOT/table/table.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LiveOrderComponent = /** @class */ (function () {
    function LiveOrderComponent(orderService, router, dialog, tableService) {
        this.orderService = orderService;
        this.router = router;
        this.dialog = dialog;
        this.tableService = tableService;
    }
    LiveOrderComponent.prototype.ngOnInit = function () {
        this.getAllOrder();
        this.table = new _table_table__WEBPACK_IMPORTED_MODULE_6__["Table"]();
    };
    LiveOrderComponent.prototype.getAllOrder = function () {
        var _this = this;
        this.orderService.getAllOrder().subscribe(function (data) {
            _this.order = data;
            console.log(data);
            if (data.length >= 1) {
                console.log(_this.order);
            }
            else {
                alert("Not Data Fount!");
            }
        }, function (error) {
            console.log(error);
        });
    };
    LiveOrderComponent.prototype.viewMenu = function (orderId) {
        var _this = this;
        this.orderId = orderId;
        var dialogRef = this.dialog.open(_view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_4__["ViewMenuComponent"], {
            data: { orderId: orderId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.getAllOrder();
            }
        });
    };
    LiveOrderComponent.prototype.hotkeys = function (event) {
        if (event.keyCode == 86) {
            this.viewMenu(event);
        }
    };
    LiveOrderComponent.prototype.editOrder = function (orderId) {
        this.router.navigate(['restaurants/admin/order/editOrder', orderId]);
    };
    LiveOrderComponent.prototype.pay = function (tableId, orderId) {
        var _this = this;
        this.table.tableId = tableId;
        this.table.status = 'payment';
        this.tableService.updateStatus(this.table).subscribe(function (data) {
            console.log(data);
            _this.orderService.updateOrderStatus(orderId).subscribe(function (data) {
                console.log(data);
                _this.getAllOrder();
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    LiveOrderComponent.prototype.billing = function (orderId) {
        this.router.navigate(['restaurants/admin/billing', orderId]);
    };
    LiveOrderComponent.prototype.hotkeys1 = function (event) {
        if (event.keyCode == 78) {
            this.newOrder();
        }
        if (event.keyCode == 78) {
            this.newOrder();
        }
    };
    LiveOrderComponent.prototype.newOrder = function () {
        this.router.navigate(['restaurants/admin/order']);
    };
    LiveOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-order',
            host: { '(window:keydown)': 'hotkeys($event)' },
            template: __webpack_require__(/*! ./live-order.component.html */ "./src/app/restaurants/admin/KOT/live-order/live-order.component.html"),
            styles: [__webpack_require__(/*! ./live-order.component.css */ "./src/app/restaurants/admin/KOT/live-order/live-order.component.css")]
        }),
        __metadata("design:paramtypes", [_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _table_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"]])
    ], LiveOrderComponent);
    return LiveOrderComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/live-order/live-order.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/live-order.module.ts ***!
  \***********************************************************************/
/*! exports provided: LiveOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveOrderModule", function() { return LiveOrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _KOT_live_order_live_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../KOT/live-order/live-order.component */ "./src/app/restaurants/admin/KOT/live-order/live-order.component.ts");
/* harmony import */ var _live_order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./live-order-routing.module */ "./src/app/restaurants/admin/KOT/live-order/live-order-routing.module.ts");
/* harmony import */ var _live_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live-order.service */ "./src/app/restaurants/admin/KOT/live-order/live-order.service.ts");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _KOT_live_order_view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../KOT/live-order/view-menu/view-menu.component */ "./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.ts");
/* harmony import */ var _table_table_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var LiveOrderModule = /** @class */ (function () {
    function LiveOrderModule() {
    }
    LiveOrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _live_order_routing_module__WEBPACK_IMPORTED_MODULE_3__["LiveOrederRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"]
            ],
            providers: [
                _live_order_service__WEBPACK_IMPORTED_MODULE_4__["LiveOrderService"], _order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _table_table_service__WEBPACK_IMPORTED_MODULE_9__["TableService"]
            ],
            entryComponents: [
                _KOT_live_order_view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_8__["ViewMenuComponent"]
            ],
            declarations: [_KOT_live_order_live_order_component__WEBPACK_IMPORTED_MODULE_2__["LiveOrderComponent"], _KOT_live_order_view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_8__["ViewMenuComponent"]]
        })
    ], LiveOrderModule);
    return LiveOrderModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/live-order/live-order.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/live-order.service.ts ***!
  \************************************************************************/
/*! exports provided: LiveOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveOrderService", function() { return LiveOrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LiveOrderService = /** @class */ (function () {
    function LiveOrderService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    Object.defineProperty(LiveOrderService.prototype, "data", {
        get: function () {
            return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    LiveOrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LiveOrderService);
    return LiveOrderService;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n#menulist{\r\n    margin-top: 10px;\r\n}\r\nbutton{\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <h6>MenuId</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>MenuName</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>Quantity</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>Amount</h6>\n    </div>\n  </div>\n  <mat-divider></mat-divider>\n  <div *ngFor=\"let menu of menuOrder\">\n    <div class=\"row\" id=\"menulist\">\n      <div class=\"col-sm-3\">\n        <h6>{{menu.menuId}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>{{menu.menuName}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>{{menu.quantity}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>{{menu.amount}}</h6>\n      </div>\n    </div>\n  </div>\n  <button  mat-raised-button color=\"primary\" style=\"float: right;\" (click)=\" onNoClick()\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ViewMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMenuComponent", function() { return ViewMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _order_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../order/order */ "./src/app/restaurants/admin/KOT/order/order.ts");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ViewMenuComponent = /** @class */ (function () {
    function ViewMenuComponent(dialogRef, data, orderService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.orderService = orderService;
    }
    ViewMenuComponent.prototype.ngOnInit = function () {
        console.log('Order', this.data.orderId);
        this.getOrder();
    };
    ViewMenuComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderService.getMenuOrder(this.data.orderId).subscribe(function (data) {
            _this.menuOrder = data;
            console.log('menu', _this.menuOrder.length);
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenuComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ViewMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-menu',
            template: __webpack_require__(/*! ./view-menu.component.html */ "./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.html"),
            styles: [__webpack_require__(/*! ./view-menu.component.css */ "./src/app/restaurants/admin/KOT/live-order/view-menu/view-menu.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _order_order__WEBPACK_IMPORTED_MODULE_2__["Order"],
            _order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], ViewMenuComponent);
    return ViewMenuComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/order.ts":
/*!******************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/order.ts ***!
  \******************************************************/
/*! exports provided: Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
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



/***/ })

}]);
//# sourceMappingURL=KOT-live-order-live-order-module.js.map