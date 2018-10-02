(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KOT-order-order-module"],{

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

/***/ "./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#c1{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(201, 39, 128);\r\n}\r\nmat-card{\r\n    width: 160px;\r\n    font-size: 11px;\r\n    height: 100px;\r\n    margin-top: 20px;\r\n}\r\n#c2{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color:rgb(229, 238, 247);\r\n}\r\n.form{\r\n    width: 40px;\r\n    text-align: center;\r\n}\r\n.example-full-width {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\nh6{\r\n      font-size: 14px;\r\n  }\r\n.header{\r\n      padding-top: 30px;\r\n  }"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <div>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput #input placeholder=\"Table Name\" style=\"text-align: center\" name=\"tableName\" value=\"{{waiterName}}\" readonly>\n            </mat-form-field>\n        </div>\n    </div>\n    <div class=\"col-sm-6\">\n        <div>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput #input placeholder=\"Table Name\" style=\"text-align: center\" name=\"tableName\" value=\"{{tableName}}\" readonly>\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n<div class=\"row\" style=\"height: 640px;\">\n    <div class=\"col-md-7 col-sm-7\">\n        <div class=\"container\" id=\"c1\">\n            <mat-tab-group mat-stretch-tabs>\n                <mat-tab label=\"Veg\">\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div *ngFor=\"let menu of menuMaster\">\n                            <div *ngIf=\"menu.menuCategory=='vegetarian' && menu.availableMenuQuantity>=1\">\n                                <div class=\"col-sm-4\">\n                                    <mat-card matBadge=\"{{menu.availableMenuQuantity}}\" matBadgeSize=\"large\" matBadgePosition=\"after\" (click)=\"saveTempOrder(i,menu.menuId,menu.menuName,menu.quantity,menu.basicAmount)\">\n                                        <p>{{menu.menuName}}</p>\n                                        <P>RS:{{menu.basicAmount}}</P>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Non-Veg\">\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div *ngFor=\"let menu of menuMaster\">\n                            <div *ngIf=\"menu.menuCategory=='non-vegetarian' && menu.availableMenuQuantity>=1 \">\n                                <div class=\"col-sm-4\">\n                                    <mat-card matBadge=\"{{menu.availableMenuQuantity}}\" matBadgePosition=\"after\" (click)=\"saveTempOrder(i,menu.menuId,menu.menuName,menu.quantity,menu.basicAmount)\">\n                                        <p>{{menu.menuName}}</p>\n                                        <P>RS:{{menu.basicAmount}}</P>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Others\">\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div *ngFor=\"let menu of menuMaster\">\n                            <div *ngIf=\"menu.menuCategory=='others'\">\n                                <div class=\"col-sm-4\">\n                                    <mat-card matBadge=\"{{menu.availableMenuQuantity}}\" matBadgePosition=\"after\" (click)=\"saveTempOrder(i,menu.menuId,menu.menuName,menu.quantity,menu.basicAmount)\">\n                                        <p>{{menu.menuName}}</p>\n                                        <P>RS:{{menu.basicAmount}}</P>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n        </div>\n    </div>\n    <div class=\"col-md-5 col-sm-5\">\n        <div class=\"container\" id=\"c2\">\n            <div class=\"header\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <h6>Date: {{today | date}}</h6>\n                    </div>\n\n                    <div class=\"col-sm-6\" style=\"text-align: right\">\n                        <h6>Time: {{today | date:'shortTime'}}</h6>\n                    </div>\n                </div>\n                <mat-divider style=\"margin-top: 10px;\"></mat-divider>\n                <div class=\"row\" style=\"margin-top: 10px;\">\n                    <div class=\"col-sm-3\">\n                        <h6>Menu Name</h6>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <h6>Amount</h6>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <h6>Quantity</h6>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <h6>Total Amout</h6>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <h6>Quantity</h6>\n                    </div>\n                </div>\n                <mat-divider style=\"margin-top: 10px;\"></mat-divider>\n                <div *ngFor=\"let temp of tempOrders\">\n                    <div class=\"row\" style=\"margin-top: 10px;\">\n                        <div class=\"col-sm-3\">\n                            <h6>{{temp.menuName}} </h6>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <h6>{{temp.basicAmount}} </h6>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <h6>\n                                <div class=\"form\">\n                                    <mat-form-field color=\"accent\" style=\"width: 50px; margin-top: -40px;\">\n                                        <input matInput #input type=\"number\" value=\"{{temp.quantity}}\" (change)=\"increasequantity(temp.tempOrderId,temp.quantity,temp.basicAmount,input.value)\"\n                                            name=\"quantity\" style=\"width: 50px; text-align: center;\">\n                                    </mat-form-field>\n                                </div>\n                            </h6>\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <h6>{{temp.amount}}</h6>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button mat-icon-button matTooltip=\"Delete the Menu\" color=\"accent\" (click)=\"deleteTempOrder(temp.tempOrderId)\">\n                                <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                              </button>\n                        </div>\n                    </div>\n                </div>\n                <mat-divider></mat-divider>\n                <button type=\"submit\" mat-raised-button color=\"primary\" style=\"float: right; margin-top: 10px;\" (click)=\"updateOrder(table.tableId)\">Order</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderComponent", function() { return EditOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _temp_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../temp-order */ "./src/app/restaurants/admin/KOT/order/temp-order.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order */ "./src/app/restaurants/admin/KOT/order/order.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
    function EditOrderComponent(menuMasterService, orderService, activatedRoute, tableService, router, datePipe, _dialog) {
        this.menuMasterService = menuMasterService;
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.tableService = tableService;
        this.router = router;
        this.datePipe = datePipe;
        this._dialog = _dialog;
        this.today = Date.now();
    }
    EditOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get the value for Url 
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.orderId = paramsId.orderId;
        });
        this.getOrder();
        //Call the Menu Master 
        this.getMenuMaster();
        //call the Table method
        //this.getWaiter();
        this.tempOrder = new _temp_order__WEBPACK_IMPORTED_MODULE_4__["TempOrder"]();
        this.order = new _order__WEBPACK_IMPORTED_MODULE_6__["Order"]();
    };
    EditOrderComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderService.getOrder(this.orderId).subscribe(function (data) {
            _this.order = data;
            _this.tableId = _this.order.tableId;
            _this.waiterId = _this.order.waiterId;
            _this.date = _this.order.date;
            _this.time = _this.order.time;
            console.log('Order', _this.order);
            _this.getTableName();
            _this.getWaiter();
            _this.getTempOrderByTableId();
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.getTableName = function () {
        var _this = this;
        this.tableService.getTableName(this.tableId).subscribe(function (data) {
            _this.table = data;
            _this.tableName = _this.table.tableName;
            console.log('tableName', _this.table);
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.getWaiter = function () {
        var _this = this;
        this.orderService.getWaiter(this.waiterId).subscribe(function (data) {
            _this.employee = data;
            _this.waiterName = _this.employee.employeeName;
            console.log(_this.employee);
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.getMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (data) {
            _this.menuMaster = data;
            console.log('MenuMaster', _this.menuMaster);
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.getAllWaiter = function () {
        var _this = this;
        this.orderService.getAllWaiter().subscribe(function (data) {
            _this.employee = data;
            console.log('employee', _this.employee);
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.selectWaiter = function (employeeId, firstName) {
        this.waiterId = employeeId;
        this.waiterName = firstName;
    };
    EditOrderComponent.prototype.saveTempOrder = function (i, menuId, menuName, quantity, basicAmount) {
        var _this = this;
        this.tempOrder.tempOrderId = null;
        this.tempOrder.waiterId = this.waiterId;
        this.tempOrder.tableId = this.tableId;
        this.tempOrder.menuId = menuId;
        this.tempOrder.menuName = menuName;
        this.tempOrder.quantity = quantity;
        this.tempOrder.basicAmount = basicAmount;
        this.tempOrder.amount = basicAmount;
        console.log('save', this.tempOrder);
        this.orderService.saveTempOrder(this.tempOrder).subscribe(function (data) {
            console.log("save");
            _this.getTempOrderByTableId();
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.getTempOrderByTableId = function () {
        var _this = this;
        this.orderService.getTempOrderByTableId(this.tableId).subscribe(function (data) {
            _this.tempOrders = data;
            // this.tempOrder1=data;
            // this.amount = this.tempOrder.amount
            console.log("table", _this.tempOrders);
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.increasequantity = function (tempOrderId, quantity, basicAmount, value) {
        var _this = this;
        console.log('value', tempOrderId);
        var qty;
        var Amount;
        if (value > quantity) {
            qty = quantity + 1;
        }
        else {
            qty = quantity - 1;
        }
        Amount = basicAmount * qty;
        this.tempOrder.tempOrderId = tempOrderId;
        this.tempOrder.quantity = qty;
        this.tempOrder.amount = Amount;
        this.orderService.updateQuantity(this.tempOrder).subscribe(function (data) {
            _this.getTempOrderByTableId();
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent.prototype.deleteTempOrder = function (tempOrderId) {
        var _this = this;
        console.log(tempOrderId);
        this.orderService.deleteTempOrder(tempOrderId).subscribe(function (data) {
            console.log(data);
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
            _this.router.navigateByUrl('restaurants/admin/liveorder');
        }, function (error) {
            console.log(error);
        });
    };
    EditOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-order',
            template: __webpack_require__(/*! ./edit-order.component.html */ "./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.html"),
            styles: [__webpack_require__(/*! ./edit-order.component.css */ "./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__["MenuMasterService"],
            _order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _table_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], EditOrderComponent);
    return EditOrderComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/order-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/order-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderRoutingModule", function() { return OrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component */ "./src/app/restaurants/admin/KOT/order/order.component.ts");
/* harmony import */ var _view_tables_view_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-tables/view-tables.component */ "./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.ts");
/* harmony import */ var _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-order/edit-order.component */ "./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'menu/:tableId', component: _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"],
    },
    {
        path: '', component: _view_tables_view_tables_component__WEBPACK_IMPORTED_MODULE_3__["ViewTablesComponent"],
    },
    {
        path: 'editOrder/:orderId', component: _edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_4__["EditOrderComponent"],
    }
];
var OrderRoutingModule = /** @class */ (function () {
    function OrderRoutingModule() {
    }
    OrderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrderRoutingModule);
    return OrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/order.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/order.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/order.component.html":
/*!******************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/order.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-view-menus></app-view-menus>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/order.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/order.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, activatedRoute) {
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/restaurants/admin/KOT/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.css */ "./src/app/restaurants/admin/KOT/order/order.component.css")]
        }),
        __metadata("design:paramtypes", [_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/order.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/order.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _KOT_order_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../KOT/order/order.component */ "./src/app/restaurants/admin/KOT/order/order.component.ts");
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-routing.module */ "./src/app/restaurants/admin/KOT/order/order-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _table_table_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _KOT_order_view_tables_view_tables_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../KOT/order/view-tables/view-tables.component */ "./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.ts");
/* harmony import */ var _KOT_order_view_menus_view_menus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../KOT/order/view-menus/view-menus.component */ "./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.ts");
/* harmony import */ var _menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _KOT_order_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../KOT/order/edit-order/edit-order.component */ "./src/app/restaurants/admin/KOT/order/edit-order/edit-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _order_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrderRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"]
            ],
            providers: [
                _order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"],
                _table_table_service__WEBPACK_IMPORTED_MODULE_8__["TableService"],
                _menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_11__["MenuMasterService"]
            ],
            declarations: [_KOT_order_order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"], _KOT_order_view_tables_view_tables_component__WEBPACK_IMPORTED_MODULE_9__["ViewTablesComponent"], _KOT_order_view_menus_view_menus_component__WEBPACK_IMPORTED_MODULE_10__["ViewMenusComponent"], _KOT_order_edit_order_edit_order_component__WEBPACK_IMPORTED_MODULE_12__["EditOrderComponent"]]
        })
    ], OrderModule);
    return OrderModule;
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

/***/ "./src/app/restaurants/admin/KOT/order/temp-order.ts":
/*!***********************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/temp-order.ts ***!
  \***********************************************************/
/*! exports provided: TempOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempOrder", function() { return TempOrder; });
var TempOrder = /** @class */ (function () {
    function TempOrder() {
    }
    return TempOrder;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#c1{\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: rgb(201, 39, 128);\r\n    margin-bottom: 100px;\r\n}\r\nmat-card{\r\n    width: 160px;\r\n    font-size: 11px;\r\n    height: 100px;\r\n    margin-top: 20px;\r\n}\r\n#c2{\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color:rgb(229, 238, 247);\r\n}\r\n.form{\r\n    width: 40px;\r\n    text-align: center;\r\n}\r\n.example-full-width {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\nh6{\r\n      font-size: 14px;\r\n      text-align: center;\r\n  }\r\n.header{\r\n      padding-top: 30px;\r\n  }\r\nmat-tab-group{\r\n      height: 600px;\r\n  }"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-6\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput #input placeholder=\"Waiter Name\" aria-label=\"Waiter Name\" [matAutocomplete]=\"auto3\" [formControl]=\"waiterCtrl\">\n            <mat-autocomplete #auto3=\"matAutocomplete\">\n                <mat-option #waiter *ngFor=\"let state of waiter | async\" [value]=\"state.employeeName\" (click)=\"selectWaiter(state.employeeId,state.employeeName)\">\n                    {{state.employeeName}}\n                </mat-option>\n            </mat-autocomplete>\n        </mat-form-field>\n    </div>\n    <div class=\"col-sm-6\">\n        <div>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput #input placeholder=\"Table Name\" style=\"text-align: center\" name=\"tableName\" value=\"{{tableName}}\" readonly>\n            </mat-form-field>\n        </div>\n    </div>\n</div>\n<div class=\"row\" style=\"height: 640px;\">\n    <div class=\"col-md-7 col-sm-7\">\n        <div class=\"container\" id=\"c1\">\n            <mat-tab-group mat-stretch-tabs>\n                <mat-tab label=\"Veg\">\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"vegCtrl\">\n                                <mat-autocomplete #auto=\"matAutocomplete\">\n                                    <mat-option *ngFor=\"let state of veg | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount)\">\n                                        {{state.menuCode}}: {{state.menuName}}\n                                    </mat-option>\n                                </mat-autocomplete>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div *ngFor=\"let menu of menuMaster\">\n                            <div *ngIf=\"menu.menuCategory=='vegetarian'\">\n                                <div class=\"col-sm-4\">\n                                    <mat-card matBadge=\"{{menu.availableMenuQuantity}}\" matBadgeSize=\"large\" matBadgePosition=\"after\" (click)=\"saveTempOrder(menu.menuId,menu.menuName,menu.quantity,menu.basicAmount)\">\n                                        <p>{{menu.menuName}}</p>\n                                        <P>RS:{{menu.basicAmount}}</P>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Non-Veg\">\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto1\" [formControl]=\"nonvegCtrl\">\n                                <mat-autocomplete #auto1=\"matAutocomplete\">\n                                    <mat-option *ngFor=\"let state of nonveg | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount)\">\n                                        {{state.menuCode}}: {{state.menuName}}\n                                    </mat-option>\n                                </mat-autocomplete>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div *ngFor=\"let menu of menuMaster\">\n                            <div *ngIf=\"menu.menuCategory=='non-vegetarian'\">\n                                <div class=\"col-sm-4\">\n                                    <mat-card matBadge=\"{{menu.availableMenuQuantity}}\" matBadgePosition=\"after\" (click)=\"saveTempOrder(menu.menuId,menu.menuName,menu.quantity,menu.basicAmount)\">\n                                        <p>{{menu.menuName}}</p>\n                                        <P>RS:{{menu.basicAmount}}</P>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n                <mat-tab label=\"Others\">\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div class=\"col-sm-6\">\n                            <mat-form-field class=\"example-full-width\">\n                                <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto2\" [formControl]=\"othersCtrl\">\n                                <mat-autocomplete #auto2=\"matAutocomplete\">\n                                    <mat-option *ngFor=\"let state of others | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount)\">\n                                        {{state.menuCode}}: {{state.menuName}}\n                                    </mat-option>\n                                </mat-autocomplete>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"width: 100%\">\n                        <div *ngFor=\"let menu of menuMaster\">\n                            <div *ngIf=\"menu.menuCategory=='others'\">\n                                <div class=\"col-sm-4\">\n                                    <mat-card matBadge=\"{{menu.availableMenuQuantity}}\" matBadgePosition=\"after\" (click)=\"saveTempOrder(menu.menuId,menu.menuName,menu.quantity,menu.basicAmount)\">\n                                        <p>{{menu.menuName}}</p>\n                                        <P>RS:{{menu.basicAmount}}</P>\n                                    </mat-card>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-tab>\n            </mat-tab-group>\n        </div>\n    </div>\n    <div class=\"col-md-5 col-sm-5\">\n        <div class=\"container\" id=\"c2\">\n            <div class=\"header\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <h6>Date: {{today | date}}</h6>\n                    </div>\n\n                    <div class=\"col-sm-6\" style=\"text-align: right\">\n                        <h6>Time: {{today | date:'shortTime'}}</h6>\n                    </div>\n                </div>\n                <mat-divider style=\"margin-top: 10px;\"></mat-divider>\n                <div class=\"row\" style=\"margin-top: 10px;\">\n                    <div class=\"col-sm-3\">\n                        <h6>Menu Name</h6>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <h6>Amount</h6>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <h6>Quantity</h6>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <h6>Total Amout</h6>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <h6>Quantity</h6>\n                    </div>\n                </div>\n                <mat-divider style=\"margin-top: 10px;\"></mat-divider>\n                <div *ngFor=\"let temp of tempOrders\">\n                    <div class=\"row\" style=\"margin-top: 10px;\">\n                        <div class=\"col-sm-3\">\n                            <h6>{{temp.menuName}} </h6>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <h6>{{temp.basicAmount}} </h6>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <h6>\n                                <div class=\"form\">\n                                    <mat-form-field color=\"accent\" style=\"width: 50px; margin-top: -40px;\">\n                                        <input matInput #input type=\"text\"   [(ngModel)]=\"temp.quantity\" (ngModelChange)=\"increasequantity(temp.tempOrderId,temp.quantity,temp.basicAmount)\"\n                                            name=\"quantity\" style=\"width: 50px; text-align: center;\">\n                                    </mat-form-field>\n                                </div>\n                            </h6>\n                        </div>\n                        <div class=\"col-sm-3\">\n                            <h6>{{temp.amount}}</h6>\n                        </div>\n                        <div class=\"col-sm-2\">\n                            <button mat-icon-button matTooltip=\"Delete the Menu\" color=\"accent\" (click)=\"deleteTempOrder(temp.tempOrderId)\">\n                                <mat-icon aria-label=\"Delete\">delete</mat-icon>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <mat-divider></mat-divider>\n                <button type=\"submit\" mat-raised-button color=\"primary\" style=\"float: right; margin-top: 10px;\" (click)=\"orders(table.tableId)\">Order</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewMenusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMenusComponent", function() { return ViewMenusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _temp_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../temp-order */ "./src/app/restaurants/admin/KOT/order/temp-order.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../order */ "./src/app/restaurants/admin/KOT/order/order.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ViewMenusComponent = /** @class */ (function () {
    function ViewMenusComponent(menuMasterService, orderService, activatedRoute, tableService, router, datePipe, _dialog) {
        this.menuMasterService = menuMasterService;
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.tableService = tableService;
        this.router = router;
        this.datePipe = datePipe;
        this._dialog = _dialog;
        this.vegCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.nonvegCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.othersCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.waiterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.today = Date.now();
    }
    ViewMenusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.time = this.datePipe.transform(new Date(), 'hh:mm:ss');
        //Get the value for Url 
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.tableId = paramsId.tableId;
            console.log(_this.tableId);
        });
        //Call the Menu Master 
        this.getMenuMaster();
        this.getVegMenu();
        this.getNonVegMenu();
        this.getOtherMenu();
        //call the Table method
        this.getTableName();
        this.getAllWaiter();
        this.getTempOrderByTableId();
        this.tempOrder = new _temp_order__WEBPACK_IMPORTED_MODULE_4__["TempOrder"]();
        this.order = new _order__WEBPACK_IMPORTED_MODULE_6__["Order"]();
    };
    ViewMenusComponent.prototype.getMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (data) {
            _this.menuMaster = data;
            console.log(_this.menuMaster);
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenusComponent.prototype.getVegMenu = function () {
        var _this = this;
        this.orderService.getVegMenu().subscribe(function (data) {
            _this.vegMenu = data;
            console.log('1', _this.menuMaster);
            _this.veg = _this.vegCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (state) { return state ? _this._filterStateveg(state) : _this.vegMenu.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenusComponent.prototype._filterStateveg = function (value) {
        var filterValue = value.toLowerCase();
        return this.vegMenu.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    ViewMenusComponent.prototype.getNonVegMenu = function () {
        var _this = this;
        this.orderService.getNonVegMenu().subscribe(function (data) {
            _this.nonVegMenu = data;
            console.log('2', _this.menuMaster);
            _this.nonveg = _this.nonvegCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (state) { return state ? _this._filterStateNonVeg(state) : _this.nonVegMenu.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenusComponent.prototype._filterStateNonVeg = function (value) {
        var filterValue = value.toLowerCase();
        return this.nonVegMenu.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    ViewMenusComponent.prototype.getOtherMenu = function () {
        var _this = this;
        this.orderService.getOtherMenu().subscribe(function (data) {
            _this.otherMenu = data;
            console.log('3', data);
            _this.others = _this.othersCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (state) { return state ? _this._filterStateOther(state) : _this.otherMenu.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenusComponent.prototype._filterStateOther = function (value) {
        var filterValue = value.toLowerCase();
        return this.otherMenu.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    ViewMenusComponent.prototype.getTableName = function () {
        var _this = this;
        this.tableService.getTableName(this.tableId).subscribe(function (data) {
            _this.table = data;
            _this.tableName = _this.table.tableName;
            console.log('tableName', _this.table);
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenusComponent.prototype.getAllWaiter = function () {
        var _this = this;
        this.orderService.getAllWaiter().subscribe(function (data) {
            _this.employee = data;
            _this.waiter = _this.waiterCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (state) { return state ? _this._filterState(state) : _this.employee.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenusComponent.prototype._filterState = function (value) {
        var filterValue = value.toLowerCase();
        return this.employee.filter(function (emp) { return emp.employeeName.toLowerCase().indexOf(filterValue) === 0; });
    };
    ViewMenusComponent.prototype.selectWaiter = function (employeeId, firstName) {
        this.waiterId = employeeId;
        this.waiterName = firstName;
        console.log('ww', this.waiterId);
    };
    ViewMenusComponent.prototype.saveTempOrder = function (menuId, menuName, quantity, basicAmount) {
        var _this = this;
        if (this.waiterId != null) {
            this.tempOrder.tempOrderId = null;
            this.tempOrder.waiterId = this.waiterId;
            this.tempOrder.tableId = this.tableId;
            this.tempOrder.menuId = menuId;
            this.tempOrder.menuName = menuName;
            this.tempOrder.quantity = quantity;
            this.tempOrder.basicAmount = basicAmount;
            this.tempOrder.amount = basicAmount;
            console.log('save', this.tempOrder);
            this.orderService.saveTempOrder(this.tempOrder).subscribe(function (data) {
                _this.getTempOrderByTableId();
                _this.table.tableId = _this.tableId;
                _this.table.status = 'order';
                _this.tableService.updateStatus(_this.table).subscribe(function (data) {
                    console.log(data);
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alert("Please Select Waiter Name");
        }
    };
    ViewMenusComponent.prototype.getTempOrderByTableId = function () {
        var _this = this;
        this.orderService.getTempOrderByTableId(this.tableId).subscribe(function (data) {
            _this.tempOrders = data;
            // this.tempOrder1=data;
            _this.amount = _this.tempOrder.amount;
            console.log("table", _this.tempOrders);
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenusComponent.prototype.increasequantity = function (tempOrderId, quantity, basicAmount, value) {
        var _this = this;
        console.log('value', quantity);
        var Amount;
        Amount = basicAmount * quantity;
        this.tempOrder.tempOrderId = tempOrderId;
        this.tempOrder.quantity = quantity;
        this.tempOrder.amount = Amount;
        this.orderService.updateQuantity(this.tempOrder).subscribe(function (data) {
            _this.getTempOrderByTableId();
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenusComponent.prototype.deleteTempOrder = function (tempOrderId) {
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
    ViewMenusComponent.prototype.hotkeys = function (event) {
        if (event.keyCode == 79) {
            this.orders(this.tableId, this.date, this.time);
        }
    };
    ViewMenusComponent.prototype.orders = function (tableId, dates, time) {
        var _this = this;
        if (this.waiterId != null) {
            this.order.waiterId = this.waiterId;
            var s = void 0;
            s = this.date;
            this.order.tableId = tableId;
            this.order.waiterName = this.waiterName;
            this.order.tableName = this.tableName;
            this.order.date = this.date;
            this.order.time = this.time;
            console.log('order', this.order);
            this.orderService.saveOrder(this.order).subscribe(function (data) {
                _this.router.navigateByUrl('restaurants/admin/liveorder');
            }, function (error) {
                console.log(error);
            });
        }
        else {
            alert("Please Select Waiter Name");
        }
    };
    ViewMenusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-menus',
            host: { '(window:keydown)': 'hotkeys($event)' },
            template: __webpack_require__(/*! ./view-menus.component.html */ "./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.html"),
            styles: [__webpack_require__(/*! ./view-menus.component.css */ "./src/app/restaurants/admin/KOT/order/view-menus/view-menus.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
        }),
        __metadata("design:paramtypes", [_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_1__["MenuMasterService"],
            _order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _table_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], ViewMenusComponent);
    return ViewMenusComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    background-color: azure;\r\n    width: 800px;\r\n    margin-top: 100px;\r\n    height: 400px;\r\n}\r\nmat-tab-group{\r\n    width: 100%;\r\n}\r\nbutton{\r\n    width: 80px;\r\n    margin-left: 20px;\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <mat-tab-group mat-stretch-tabs>\n        <mat-tab label=\"AC\">\n            <div class=\"row\" style=\"width: 100%\">\n                <div *ngFor=\"let tables of table\">\n                    <div *ngIf=\"tables.tableType=='AC'\">\n                        <div class=\"col-sm-3\">\n                            <div *ngIf=\"tables.status=='available'\">\n                                <button mat-button style=\"background-color:green; color: white;\" [routerLink]=\"['../menu', tables.tableId]\">{{tables.tableName}}</button>\n                            </div>\n                            <div *ngIf=\"tables.status=='order'\">\n                                <button mat-button style=\"background-color:rgb(250, 6, 148); color: white;\" [routerLink]=\"['../menu', tables.tableId]\" disabled>{{tables.tableName}}</button>\n                            </div>\n                            <div *ngIf=\"tables.status=='payment'\">\n                                <button mat-button style=\"background-color:rgb(250, 9, 9); color: white;\" [routerLink]=\"['../menu', tables.tableId]\" disabled>{{tables.tableName}}</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"NON-AC\">\n            <div class=\"row\" style=\"width: 100%;\">\n                <div *ngFor=\"let tables of table\">\n                    <div *ngIf=\"tables.tableType=='Non-AC'\">\n                        <div class=\"col-sm-3\">\n                            <div *ngIf=\"tables.status=='available'\">\n                                <button mat-button style=\"background-color:green; color: white;\" [routerLink]=\"['../menu', tables.tableId]\">{{tables.tableName}}</button>\n                            </div>\n                            <div *ngIf=\"tables.status=='order'\">\n                                <button mat-button style=\"background-color:rgb(250, 6, 148); color: white;\" [routerLink]=\"['../menu', tables.tableId]\" disabled>{{tables.tableName}}</button>\n                            </div>\n                            <div *ngIf=\"tables.status=='payment'\">\n                                <button mat-button style=\"background-color:rgb(250, 9, 9); color: white;\" [routerLink]=\"['../menu', tables.tableId]\" disabled>{{tables.tableName}}</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </mat-tab>\n        <mat-tab label=\"Parcel\">\n                <div class=\"row\" style=\"width: 100%;\">\n                    <div *ngFor=\"let tables of table\">\n                        <div *ngIf=\"tables.tableType=='Parcel'\">\n                            <div class=\"col-sm-3\">\n                                <div *ngIf=\"tables.status=='available'\">\n                                    <button mat-button style=\"background-color:green; color: white;\" [routerLink]=\"['../menu', tables.tableId]\">{{tables.tableName}}</button>\n                                </div>\n                                <div *ngIf=\"tables.status=='order'\">\n                                    <button mat-button style=\"background-color:rgb(250, 6, 148); color: white;\" [routerLink]=\"['../menu', tables.tableId]\" disabled>{{tables.tableName}}</button>\n                                </div>\n                                <div *ngIf=\"tables.status=='payment'\">\n                                    <button mat-button style=\"background-color:rgb(250, 9, 9); color: white;\" [routerLink]=\"['../menu', tables.tableId]\" disabled>{{tables.tableName}}</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </mat-tab>\n    </mat-tab-group>\n\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ViewTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTablesComponent", function() { return ViewTablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _table_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewTablesComponent = /** @class */ (function () {
    function ViewTablesComponent(tableService, router, orderService) {
        this.tableService = tableService;
        this.router = router;
        this.orderService = orderService;
    }
    ViewTablesComponent.prototype.ngOnInit = function () {
        this.getTable();
    };
    ViewTablesComponent.prototype.getTable = function () {
        var _this = this;
        this.tableService.getAllTableList().subscribe(function (data) {
            _this.table = data;
            console.log(_this.table);
        }, function (error) {
            console.log(error);
        });
    };
    ViewTablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-tables',
            template: __webpack_require__(/*! ./view-tables.component.html */ "./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.html"),
            styles: [__webpack_require__(/*! ./view-tables.component.css */ "./src/app/restaurants/admin/KOT/order/view-tables/view-tables.component.css")]
        }),
        __metadata("design:paramtypes", [_table_table_service__WEBPACK_IMPORTED_MODULE_1__["TableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], ViewTablesComponent);
    return ViewTablesComponent;
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
//# sourceMappingURL=KOT-order-order-module.js.map