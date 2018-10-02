(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["live-orders-live-orders-module"],{

/***/ "./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main{\r\n     margin-top: 50px;\r\n   }\r\nmat-card{\r\n    width: 160px;\r\n    font-size: 11px;\r\n    height: 100px;\r\n    margin-top: 20px;\r\n    background-color: bisque;\r\n}\r\nh6{\r\n    font-size: 14px;\r\n    text-align: center;\r\n   \r\n}\r\n#c1{\r\n    height: 500px;\r\n    background-color: rgb(243, 192, 174);\r\n    margin-left: 50px;\r\n   \r\n}\r\n#c2{\r\n    height: 500px;\r\n  width:500px;\r\n    background-color: rgb(247, 238, 164);\r\n\r\n}\r\nbutton{\r\n    float: right;\r\n   \r\n}\r\nmat-tab{\r\n    font-size: 14px;\r\n}\r\n#name{\r\n    color: blue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"details\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <h6>Waiter Name: {{waiterName}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>Table Name: {{tableName}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>Date: {{today | date}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>Time: {{today | date:'shortTime'}}</h6>\n        </div>\n      </div>\n    </div>\n    <mat-tab-group mat-stretch-tabs>\n      <mat-tab label=\"VEG Items\" style=\"color: white\">\n        <div class=\"row\" style=\"width: 100%\">\n          <div class=\"col-sm-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"vegCtrl\">\n              <mat-autocomplete #auto=\"matAutocomplete\">\n                <mat-option *ngFor=\"let state of veg | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount)\">\n                  <span *ngIf=\"state.menuCategory=='vegetarian'\">\n                    {{state.menuCode}}: {{state.menuName}}\n                  </span>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" style=\"width: 100%\">\n          <div *ngFor=\"let menuMasters of menuMaster\">\n            <div *ngIf=\"menuMasters.menuCategory=='vegetarian'\">\n              <div class=\"col-sm-6\" style=\"margin-left: 40px;\">\n                <mat-card class=\"example-card\">\n                  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                    width=\"200px\">\n                  <mat-card-content style=\"margin-top: -10px;\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span>{{menuMasters.menuName}}</span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions style=\"margin-top: -30px;\">\n                    <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div *ngFor=\"let temp of tempOrders\">\n                          <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                            <button mat-icon-button>\n                              <span class=\"amount\">{{temp.quantity}}</span>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\" hidden>\n                        <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                      </div>\n                    </div>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Non-VEG Items\" style=\"color: white\">\n        <div class=\"row\" style=\"width: 100%\">\n          <div class=\"col-sm-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto1\" [formControl]=\"nonvegCtrl\">\n              <mat-autocomplete #auto1=\"matAutocomplete\">\n                <mat-option *ngFor=\"let state of nonveg | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount)\">\n                  <div *ngIf=\"state.menuCategory=='non-vegetarian'\">\n                    <span>\n                      {{state.menuCode}}: {{state.menuName}}\n                    </span>\n                  </div>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" style=\"width: 100%\">\n          <div *ngFor=\"let menuMasters of menuMaster\">\n            <div *ngIf=\"menuMasters.menuCategory=='non-vegetarian' && menuMasters.availableMenuQuantity>=1\">\n              <div class=\"col-sm-6\" style=\"margin-left: 40px;\">\n                <mat-card class=\"example-card\">\n                  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                    width=\"200px\">\n                  <mat-card-content style=\"margin-top: -10px;\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span>{{menuMasters.menuName}}</span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions style=\"margin-top: -30px;\">\n                    <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div *ngFor=\"let temp of tempOrders\">\n                          <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                            <button mat-icon-button>\n                              <span class=\"amount\">{{temp.quantity}}</span>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\" hidden>\n                        <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                      </div>\n                    </div>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Others Items\" style=\"color: white\">\n        <div class=\"row\" style=\"width: 100%\">\n          <div class=\"col-sm-6\">\n            <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto2\" [formControl]=\"othersCtrl\">\n              <mat-autocomplete #auto2=\"matAutocomplete\">\n                <mat-option *ngFor=\"let state of others | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount)\">\n                  <div *ngIf=\"state.menuCategory=='others'\">\n                    <span>\n                      {{state.menuCode}}: {{state.menuName}}\n                    </span>\n                  </div>\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </div>\n        </div>\n        <div class=\"row\" style=\"width: 100%\">\n          <div *ngFor=\"let menuMasters of menuMaster\">\n            <div *ngIf=\"menuMasters.menuCategory=='others'&& menuMasters.availableMenuQuantity>=1\">\n              <div class=\"col-sm-6\" style=\"margin-left: 40px;\">\n                <mat-card class=\"example-card\">\n                  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                    width=\"200px\">\n                  <mat-card-content style=\"margin-top: -10px;\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span>{{menuMasters.menuName}}</span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions style=\"margin-top: -30px;\">\n                    <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div *ngFor=\"let temp of tempOrders\">\n                          <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                            <button mat-icon-button>\n                              <span class=\"amount\">{{temp.quantity}}</span>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\" hidden>\n                        <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                      </div>\n                    </div>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n"

/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderComponent", function() { return EditOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_KOT_order_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin/KOT/order/order */ "./src/app/restaurants/admin/KOT/order/order.ts");
/* harmony import */ var _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../admin/KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _admin_KOT_order_temp_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../admin/KOT/order/temp-order */ "./src/app/restaurants/admin/KOT/order/temp-order.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditOrderComponent = /** @class */ (function () {
    function EditOrderComponent(activatedRoute, orderService, tableService, menuMasterService, router) {
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.tableService = tableService;
        this.menuMasterService = menuMasterService;
        this.router = router;
        this.vegCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.nonvegCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.othersCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
        this.waiterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]();
    }
    EditOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.orderId = paramsId.orderId;
        });
        this.order = new _admin_KOT_order_order__WEBPACK_IMPORTED_MODULE_2__["Order"]();
        this.getOrder();
        this.getMenuMaster();
        this.tempOrder = new _admin_KOT_order_temp_order__WEBPACK_IMPORTED_MODULE_6__["TempOrder"]();
    };
    EditOrderComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderService.getOrder(this.orderId).subscribe(function (orderlist) {
            console.log('orderlist', orderlist);
            _this.order = orderlist;
            _this.waiterId = _this.order.waiterId;
            _this.time = _this.order.time;
            _this.date = _this.order.date;
            _this.tableId = _this.order.tableId;
            console.log('table', _this.tableId);
            _this.getTableName();
            _this.getTempOrderByTableId();
        }, function (err) {
            alert('error');
        });
    };
    EditOrderComponent.prototype.getTableName = function () {
        var _this = this;
        this.tableService.getTableName(this.tableId).subscribe(function (tableName) {
            _this.table = tableName;
            _this.tableName = _this.table.tableName;
            console.log('tableName', _this.tableName);
            _this.waierName = 'A';
        }, function (err) {
            alert('err');
        });
    };
    EditOrderComponent.prototype.getMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (menuList) {
            _this.menuMaster = menuList;
            _this.veg = _this.vegCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (state) { return state ? _this._filterStates(state) : _this.menuMaster.slice(); }));
            _this.nonveg = _this.nonvegCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (state) { return state ? _this._filterStates(state) : _this.menuMaster.slice(); }));
            _this.others = _this.othersCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (state) { return state ? _this._filterStates(state) : _this.menuMaster.slice(); }));
            console.log('menuList', menuList);
        }, function (err) {
            alert("don't get");
        });
    };
    EditOrderComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.menuMaster.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    EditOrderComponent.prototype.saveTempOrder = function (menuId, menuName, quantity, basicAmount) {
        var _this = this;
        this.tempOrder.tempOrderId = null;
        this.tempOrder.tableId = this.tableId;
        this.tempOrder.quantity = quantity;
        this.tempOrder.menuId = menuId;
        this.tempOrder.menuName = menuName;
        this.tempOrder.basicAmount = basicAmount;
        this.tempOrder.amount = basicAmount;
        this.tempOrder.waiterId = 1;
        this.orderService.saveTempOrder(this.tempOrder).subscribe(function (data) {
            _this.getTempOrderByTableId();
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.getTempOrderByTableId = function () {
        var _this = this;
        this.orderService.getTempOrderByTableId(this.tableId).subscribe(function (data) {
            _this.tempOrders = data;
            _this.amount = _this.tempOrder.basicAmount;
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.increaseQuantity = function (tempOrderId, quantity, basicAmount, value) {
        var _this = this;
        var quantitys;
        if (value > quantity) {
            quantitys = quantity + 1;
        }
        else {
            quantitys = quantity - 1;
        }
        var Amount = basicAmount * quantitys;
        this.tempOrder.tempOrderId = tempOrderId;
        this.tempOrder.quantity = quantitys;
        this.tempOrder.amount = Amount;
        console.log('quantity', quantitys, 'Amount', Amount);
        this.orderService.updateQuantity(this.tempOrder).subscribe(function (data) {
            console.log("save");
            _this.getTempOrderByTableId();
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.updateOrder = function () {
        var _this = this;
        console.log(this.order);
        this.orderService.updateOrder(this.order).subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl('restaurants/waiter/liveOrders');
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.deleteTempOrder = function (tempOrderId) {
        var _this = this;
        console.log(tempOrderId);
        this.orderService.deleteTempOrder(tempOrderId).subscribe(function (data) {
            console.log(data);
            _this.orderService.checkTemOrderByTableId(_this.tableId).subscribe(function (data) {
            }, function (error) {
                console.log(error);
            });
            _this.getTempOrderByTableId();
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-order',
            template: __webpack_require__(/*! ./edit-order.component.html */ "./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.html"),
            styles: [__webpack_require__(/*! ./edit-order.component.css */ "./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"],
            _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_5__["MenuMasterService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditOrderComponent);
    return EditOrderComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/live-orders-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/live-orders-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: LiveOrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveOrdersRoutingModule", function() { return LiveOrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _live_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-orders.component */ "./src/app/restaurants/waiter/live-orders/live-orders.component.ts");
/* harmony import */ var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-order/edit-order.component */ "./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _live_orders_component__WEBPACK_IMPORTED_MODULE_2__["LiveOrdersComponent"]
    }, {
        path: 'editOrder/:orderId', component: _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_3__["EditOrderComponent"]
    }
];
var LiveOrdersRoutingModule = /** @class */ (function () {
    function LiveOrdersRoutingModule() {
    }
    LiveOrdersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LiveOrdersRoutingModule);
    return LiveOrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/live-orders.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/live-orders.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#viewMenuPage{\r\n    background-color: rgb(248, 157, 157);\r\n}\r\n#reOrder{\r\n    background-color: rgb(248, 212, 158);\r\n}\r\nbutton{\r\n    width: 100%;\r\n}\r\n#newOrder{\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n#closeOrder{\r\n    background-color: rgb(119, 184, 128);\r\n}\r\n.container{\r\n    margin-top: 55px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/live-orders.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/live-orders.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <button mat-raised-button color=\"primary\" id=\"newOrder\" (click)=\"newOrder()\">New Order</button>\n  <div *ngFor=\"let orders of order\">\n    <div *ngIf=\"orders.status!='payment'\">\n      <mat-card style=\"width: 100%\">\n        <div class=\"row\" style=\"width: 100%\">\n          <div class=\"col-sm-2\" style=\"width: 100%\">\n            <h6>OrderId:{{orders.orderId}}</h6>\n          </div>\n          <div class=\"col-sm-2\" style=\"width: 100%\">\n            <h6>WaiterId:{{orders.waiterId}}</h6>\n            <h6>TableId:{{orders.tableId}}</h6>\n          </div>\n\n          <div class=\"col-sm-2\" style=\"width: 100%\">\n            <h6>Date:{{orders.date}}</h6>\n            <h6>Time:{{orders.time}}</h6>\n          </div>\n          <div class=\"col-sm-4\" style=\"width: 100%\">\n          </div>\n          <div class=\"col-sm-2\" style=\"float: right;width: 100%\">\n            <div *ngIf=\"orders.status!='close'\">\n              <button id=\"viewMenuPage\" mat-raised-button (click)=\"viewMenuPage(orders.orderId)\">View Menu</button>\n              <button id=\"reOrder\" mat-raised-button (click)=\"reOrder(orders.orderId)\">ReOrder</button>\n            </div>\n            <div *ngIf=\"orders.status=='order'\">\n              <button id=\"closeOrder\" mat-raised-button (click)=\"pay(orders.tableId,orders.orderId)\">Close Order</button>\n            </div>\n            <div *ngIf=\"orders.status=='close'\">\n              <button type=\"submit\" mat-raised-button color=\"accent\" (click)=\"billing(orders.orderId)\">Payment</button>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/live-orders.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/live-orders.component.ts ***!
  \*************************************************************************/
/*! exports provided: LiveOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveOrdersComponent", function() { return LiveOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-menu/view-menu.component */ "./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _admin_KOT_table_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../admin/KOT/table/table */ "./src/app/restaurants/admin/KOT/table/table.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LiveOrdersComponent = /** @class */ (function () {
    function LiveOrdersComponent(orderService, _dialog, router, tableService) {
        this.orderService = orderService;
        this._dialog = _dialog;
        this.router = router;
        this.tableService = tableService;
    }
    LiveOrdersComponent.prototype.ngOnInit = function () {
        this.getAllOrder();
        this.table = new _admin_KOT_table_table__WEBPACK_IMPORTED_MODULE_6__["Table"]();
    };
    LiveOrdersComponent.prototype.hotkeys = function (event) {
        if (event.keyCode == 78) {
            this.newOrder();
        }
        if (event.keyCode == 86) {
        }
        if (event.keyCode == 78) {
        }
        if (event.keyCode == 78) {
        }
        if (event.keyCode == 78) {
        }
    };
    LiveOrdersComponent.prototype.getAllOrder = function () {
        var _this = this;
        this.orderService.getAllOrder().subscribe(function (allOrders) {
            _this.order = allOrders;
        }, function (err) {
            alert('error');
        });
    };
    LiveOrdersComponent.prototype.newOrder = function () {
        this.router.navigateByUrl('restaurants/waiter/tableOrder');
    };
    LiveOrdersComponent.prototype.viewMenuPage = function (orderId) {
        var dialogRef = this._dialog.open(_view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_2__["ViewMenuComponent"], {
            data: { orderId: orderId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
            }
        });
    };
    LiveOrdersComponent.prototype.reOrder = function (orderId) {
        this.router.navigate(['restaurants/waiter/tableOrder/reorder/' + orderId]);
    };
    LiveOrdersComponent.prototype.pay = function (tableId, orderId) {
        var _this = this;
        this.table.status = 'payment';
        this.table.tableId = tableId;
        console.log(this.table);
        this.tableService.updateStatus(this.table).subscribe(function (data) {
            _this.orderService.updateOrderStatus(orderId).subscribe(function (data) {
                _this.getAllOrder();
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    LiveOrdersComponent.prototype.billing = function (orderId) {
        this.router.navigate(['restaurants/waiter/billings', orderId]);
    };
    LiveOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-orders',
            host: { '(window:keydown)': 'hotkeys($event)' },
            template: __webpack_require__(/*! ./live-orders.component.html */ "./src/app/restaurants/waiter/live-orders/live-orders.component.html"),
            styles: [__webpack_require__(/*! ./live-orders.component.css */ "./src/app/restaurants/waiter/live-orders/live-orders.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_5__["TableService"]])
    ], LiveOrdersComponent);
    return LiveOrdersComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/live-orders.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/live-orders.module.ts ***!
  \**********************************************************************/
/*! exports provided: LiveOrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveOrdersModule", function() { return LiveOrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _live_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-orders.component */ "./src/app/restaurants/waiter/live-orders/live-orders.component.ts");
/* harmony import */ var _live_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./live-orders-routing.module */ "./src/app/restaurants/waiter/live-orders/live-orders-routing.module.ts");
/* harmony import */ var _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin/KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view-menu/view-menu.component */ "./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.ts");
/* harmony import */ var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-order/edit-order.component */ "./src/app/restaurants/waiter/live-orders/edit-order/edit-order.component.ts");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin/KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _menu_order_menu_order_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../menu-order/menu-order.service */ "./src/app/restaurants/waiter/menu-order/menu-order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var LiveOrdersModule = /** @class */ (function () {
    function LiveOrdersModule() {
    }
    LiveOrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _live_orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["LiveOrdersRoutingModule"],
                _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ],
            declarations: [_live_orders_component__WEBPACK_IMPORTED_MODULE_2__["LiveOrdersComponent"], _view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_7__["ViewMenuComponent"], _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_8__["EditOrderComponent"]],
            providers: [_admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"], _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_9__["TableService"], _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_10__["MenuMasterService"], _menu_order_menu_order_service__WEBPACK_IMPORTED_MODULE_12__["MenuOrderService"]],
            entryComponents: [_view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_7__["ViewMenuComponent"],]
        })
    ], LiveOrdersModule);
    return LiveOrdersModule;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 600px;\r\n    height: 100%;\r\n}\r\nh6{\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\nmat-divider{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <h6>MenuId</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>MenuName</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>Quantity</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>Amount</h6>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <div *ngFor=\"let menu of menuOrder\">\n      <div class=\"row\" id=\"menulist\">\n        <div class=\"col-sm-3\">\n          <h6>{{menu.menuId}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>{{menu.menuName}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>{{menu.quantity}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>{{menu.amount}}</h6>\n        </div>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <button  mat-raised-button color=\"primary\" style=\"float: right;\" (click)=\" onNoClick()\">Close</button>\n  </div>"

/***/ }),

/***/ "./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ViewMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMenuComponent", function() { return ViewMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin/KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
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
        console.log(this.data.orderId);
        this.getMenuOrder();
    };
    ViewMenuComponent.prototype.getMenuOrder = function () {
        var _this = this;
        this.orderService.getMenuOrder(this.data.orderId).subscribe(function (getMenuOrder) {
            _this.menuOrder = getMenuOrder;
            console.log(_this.menuOrder);
        });
    };
    ViewMenuComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ViewMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-menu',
            template: __webpack_require__(/*! ./view-menu.component.html */ "./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.html"),
            styles: [__webpack_require__(/*! ./view-menu.component.css */ "./src/app/restaurants/waiter/live-orders/view-menu/view-menu.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], ViewMenuComponent);
    return ViewMenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=live-orders-live-orders-module.js.map