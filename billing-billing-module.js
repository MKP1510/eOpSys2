(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-billing-module"],{

/***/ "./src/app/restaurants/admin/KOT/order/menu-order.ts":
/*!***********************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/order/menu-order.ts ***!
  \***********************************************************/
/*! exports provided: MenuOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOrder", function() { return MenuOrder; });
var MenuOrder = /** @class */ (function () {
    function MenuOrder() {
    }
    return MenuOrder;
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

/***/ "./src/app/restaurants/waiter/billing/billing-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/billing-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: BillingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingRoutingModule", function() { return BillingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _billing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing.component */ "./src/app/restaurants/waiter/billing/billing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _billing_component__WEBPACK_IMPORTED_MODULE_2__["BillingComponent"],
    }
];
var BillingRoutingModule = /** @class */ (function () {
    function BillingRoutingModule() {
    }
    BillingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BillingRoutingModule);
    return BillingRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/billing/billing.component.css":
/*!******************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/billing.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 150px;\r\n    background-color:aliceblue;\r\n    width: 100%;\r\n}\r\n.row{\r\n    margin-top: 10px;\r\n}\r\nh6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 18px;\r\n}\r\n.example-full-width {\r\n    width: 100%;\r\n    text-align: center;\r\n  }"

/***/ }),

/***/ "./src/app/restaurants/waiter/billing/billing.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/billing.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div class=\"row\" style=\"width: 100%\">\n        <div class=\"col-sm-2\">\n          <h6>Order Id: {{orderId}}</h6>\n        </div>\n        <div class=\"col-sm-2\">\n          <h6>Waiter Name: {{waiterName}}</h6>\n        </div>\n        <div class=\"col-sm-2\">\n          <h6>Table Name: {{tableName}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>Date:  {{date}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>Time: {{time}}</h6>\n        </div>\n      </div>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n    <div class=\"row\">\n      <div class=\"col-sm-2\">\n        <h6>Description</h6>\n      </div>\n      <div class=\"col-sm-1\">\n        <h6> Qty</h6>\n      </div>\n      <div class=\"col-sm-1\">\n        <h6>MRP</h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>Rate</h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>Discount</h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>GST</h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>Amount</h6>\n      </div>\n    </div>\n    <mat-divider style=\"margin-bottom: 10px;\"></mat-divider>\n    <div class=\"row\" *ngFor=\"let menu of menuOrder\">\n      <div class=\"col-sm-2\">\n        <h6>{{menu.menuName}}</h6>\n      </div>\n      <div class=\"col-sm-1\">\n        <h6>{{menu.quantity}}</h6>\n      </div>\n      <div class=\"col-sm-1\">\n        <h6>{{menu.basicAmount}}</h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>{{menu.amount}}</h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>\n          <div class=\"form\">\n            <mat-form-field color=\"accent\" style=\"width: 50px; margin-top: -40px;\">\n              <input matInput #input type=\"text\" [(ngModel)]=\"menu.discount\" (ngModelChange)=\"discounts(menu.menuOrderId,menu.gst,menu.discount,menu.amount)\"\n                name=\"quantity\" style=\"width: 50px; text-align: center;\">\n            </mat-form-field>\n          </div>\n        </h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>{{menu.gstAmount}}</h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>{{menu.totalAmount}}</h6>\n      </div>\n    </div>\n    <mat-divider></mat-divider>\n    <mat-card-content>\n      <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-2\">\n          <h6>Total</h6>\n        </div>\n        <div class=\"col-sm-1\">\n          <h6>{{quantity}}</h6>\n        </div>\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-2\">\n          <h6>{{discount}}</h6>\n        </div>\n        <div class=\"col-sm-2\">\n          <h6>{{gstAmount}}</h6>\n        </div>\n        <div class=\"col-sm-2\">\n          <h6>{{amount}}</h6>\n        </div>\n      </div>\n      <div *ngIf=\"tableType=='AC'\">\n        <div class=\"row\" id=\"amount\">\n          <div class=\"col-sm-4\"></div>\n          <div class=\"col-sm-4\"></div>\n          <div class=\"col-sm-2\">\n            <h6>Service Amount</h6>\n          </div>\n          <div class=\"col-sm-2\">\n            <h6>{{serviceCharge}}</h6>\n          </div>\n        </div>\n      </div>\n      <mat-divider></mat-divider>\n    </mat-card-content>\n    <div class=\"row\">\n      <div class=\"col-sm-8\"></div>\n      <div class=\"col-sm-2\">Net Amount</div>\n      <div class=\"col-sm-2\"><h6>{{totalamount}}</h6></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n\n      </div>\n      <div class=\"col-sm-2\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-select name=\"cashType\" placeholder=\"Cash Type\" [(ngModel)]=\"billing.cashType\" required>\n              <mat-option value=\"cash\">Cash</mat-option>\n              <mat-option value=\"card\">Card</mat-option>\n              <mat-option value=\"cash and card\">Cash & Card</mat-option>\n              <mat-option value=\"cash\">Other</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n        <div class=\"col-sm-2\" *ngIf=\"billing.cashType=='cash and card'\"> \n          <mat-form-field class=\"example-full-width\">\n            <input matInput #cash type=\"text\" [(ngModel)]=\"billing.cashAmount\" name=\"cash\" (ngModelChange)=\"cashs(cash.value)\" style=\"width: 100px; text-align: center;\">\n          </mat-form-field>\n        </div>\n        <div class=\"col-sm-2\" *ngIf=\"billing.cashType=='cash and card'\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput #card type=\"text\" [(ngModel)]=\"billing.cardAmount\" name=\"card\" (ngModelChange)=\"cards(card.value)\" style=\"width: 100px; text-align: center;\">\n          </mat-form-field>\n        </div>\n    </div>\n    <mat-card-actions>\n      <div class=\"row\">\n        <div class=\"col-sm-8\"></div>\n        <div class=\"col-sm-2\">\n            <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"payment()\">Pay</button>\n        </div>\n        <div class=\"col-sm-2\">\n            <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"print()\">Print</button>\n        </div>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/waiter/billing/billing.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/billing.component.ts ***!
  \*****************************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../admin/KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _admin_KOT_order_menu_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin/KOT/order/menu-order */ "./src/app/restaurants/admin/KOT/order/menu-order.ts");
/* harmony import */ var _admin_settings_gst_gst_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/settings/gst/gst.service */ "./src/app/restaurants/admin/settings/gst/gst.service.ts");
/* harmony import */ var _billing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./billing */ "./src/app/restaurants/waiter/billing/billing.ts");
/* harmony import */ var _admin_CRM_customer_customer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../admin/CRM/customer/customer.service */ "./src/app/restaurants/admin/CRM/customer/customer.service.ts");
/* harmony import */ var _billing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./billing.service */ "./src/app/restaurants/waiter/billing/billing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./print/print.component */ "./src/app/restaurants/waiter/billing/print/print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





;







var BillingComponent = /** @class */ (function () {
    function BillingComponent(orderService, activatedRoute, tableService, _dialog, gstService, customerService, billingService, router) {
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.tableService = tableService;
        this._dialog = _dialog;
        this.gstService = gstService;
        this.customerService = customerService;
        this.billingService = billingService;
        this.router = router;
        this.amount = 0;
        this.totalamount = 0;
        this.totalamount1 = 0;
        this.totalamount2 = 0;
        this.quantity = 0;
    }
    BillingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.orderId = paramsId.orderId;
            console.log(_this.orderId);
        });
        this.getOrder();
        this.getMenuOrder();
        this.getAllCustomer();
        this.billing = new _billing__WEBPACK_IMPORTED_MODULE_6__["Billing"]();
        this.menuOrders = new _admin_KOT_order_menu_order__WEBPACK_IMPORTED_MODULE_4__["MenuOrder"]();
    };
    BillingComponent.prototype.hotkeys = function (event) {
        if (event.keyCode == 113) {
            this.payment();
        }
    };
    BillingComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderService.getOrder(this.orderId).subscribe(function (data) {
            _this.order = data;
            _this.tableId = _this.order.tableId;
            _this.waiterId = _this.order.waiterId;
            _this.date = _this.order.date;
            _this.time = _this.order.time;
            console.log(_this.order);
            _this.getTableName();
            _this.getWaiter();
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.getTableName = function () {
        var _this = this;
        this.tableService.getTableName(this.tableId).subscribe(function (data) {
            _this.table = data;
            _this.serviceCharge = 0;
            _this.tableName = _this.table.tableName;
            _this.tableType = _this.table.tableType;
            _this.serviceCharge = _this.table.serviceCharge;
            console.log('amount', _this.amount);
            _this.serviceCharge = _this.amount * _this.serviceCharge / 100;
            _this.totalamount = _this.totalamount + _this.serviceCharge;
            _this.totalamount = Math.round(_this.totalamount);
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.getWaiter = function () {
        var _this = this;
        this.orderService.getWaiter(this.waiterId).subscribe(function (data) {
            _this.employee = data;
            _this.waiterName = _this.employee.employeeName;
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.getMenuOrder = function () {
        var _this = this;
        this.orderService.getMenuOrder(this.orderId).subscribe(function (data) {
            _this.menuOrder = data;
            _this.quantity = 0;
            _this.amount = 0;
            _this.gstAmount = 0;
            _this.discount = 0;
            _this.totalamount = 0;
            for (var _i = 0, _a = _this.menuOrder; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.quantity = _this.quantity + i.quantity;
                _this.amount = _this.amount + i.totalAmount;
                _this.gstAmount = _this.gstAmount + i.gstAmount;
                _this.discount = _this.discount + i.discount;
            }
            _this.totalamount = _this.amount;
            _this.getTableName();
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.discounts = function (menuOrderId, gst, discount, amount) {
        var _this = this;
        this.menuOrders.menuOrderId = menuOrderId;
        this.menuOrders.discount = discount;
        amount = amount - discount;
        gst = amount * gst / 100;
        this.menuOrders.gstAmount = gst;
        amount = amount + gst;
        this.menuOrders.totalAmount = amount;
        this.billingService.updateDiscount(this.menuOrders).subscribe(function (data) {
            _this.getMenuOrder();
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.getAllCustomer = function () {
        var _this = this;
        this.customerService.getCustomer().subscribe(function (data) {
            _this.customer = data;
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.customer1 = function (phoneNo) {
        console.log(phoneNo);
        this.phoneNo = phoneNo;
    };
    BillingComponent.prototype.cashs = function (cahsAmount) {
        console.log(cahsAmount);
        this.billing.cardAmount = this.totalamount - cahsAmount;
    };
    BillingComponent.prototype.cards = function (cardAmount) {
        console.log(cardAmount);
        this.billing.cashAmount = this.totalamount - cardAmount;
    };
    BillingComponent.prototype.payment = function () {
        var _this = this;
        console.log(this.billing.cashType);
        if (this.billing.cashType == null) {
            alert("Please Select Cash type");
        }
        else {
            this.billing.orderId = this.orderId;
            this.billing.waiterId = this.waiterId;
            this.billing.tableId = this.tableId;
            this.billing.date = this.date;
            this.billing.time = this.time;
            this.billing.amount = this.amount;
            this.billing.serviceCharge = this.serviceCharge;
            this.billing.discount = this.discount;
            this.billing.gstAmount = this.gstAmount;
            this.billing.quantity = this.quantity;
            this.billing.totalAmount = this.totalamount;
            this.billing.customerMobileNo = this.phoneNo;
            //this.saveItemMaster(this.orderId);
            this.billingService.saveBilling(this.billing).subscribe(function (data) {
                _this.saveItemMaster(_this.orderId);
            }, function (error) {
                console.log(error);
            });
        }
    };
    BillingComponent.prototype.saveItemMaster = function (orderId) {
        var dialogRef = this._dialog.open(_print_print_component__WEBPACK_IMPORTED_MODULE_10__["PrintComponent"], {
            data: { orderId: orderId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.getAllItemMaster();
        });
    };
    BillingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'round' }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing',
            host: { '(window:keydown)': 'hotkeys($event)' },
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/restaurants/waiter/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.css */ "./src/app/restaurants/waiter/billing/billing.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _admin_settings_gst_gst_service__WEBPACK_IMPORTED_MODULE_5__["GstService"],
            _admin_CRM_customer_customer_service__WEBPACK_IMPORTED_MODULE_7__["CustomerService"],
            _billing_service__WEBPACK_IMPORTED_MODULE_8__["BillingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/billing/billing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/billing.module.ts ***!
  \**************************************************************/
/*! exports provided: BillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _billing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing.component */ "./src/app/restaurants/waiter/billing/billing.component.ts");
/* harmony import */ var _billing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing-routing.module */ "./src/app/restaurants/waiter/billing/billing-routing.module.ts");
/* harmony import */ var _billing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billing.service */ "./src/app/restaurants/waiter/billing/billing.service.ts");
/* harmony import */ var _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin/KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _admin_settings_gst_gst_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../admin/settings/gst/gst.service */ "./src/app/restaurants/admin/settings/gst/gst.service.ts");
/* harmony import */ var _admin_CRM_customer_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../admin/CRM/customer/customer.service */ "./src/app/restaurants/admin/CRM/customer/customer.service.ts");
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./print/print.component */ "./src/app/restaurants/waiter/billing/print/print.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BillingModule = /** @class */ (function () {
    function BillingModule() {
    }
    BillingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _billing_routing_module__WEBPACK_IMPORTED_MODULE_3__["BillingRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]
            ], entryComponents: [
                _print_print_component__WEBPACK_IMPORTED_MODULE_12__["PrintComponent"]
            ],
            providers: [
                _billing_service__WEBPACK_IMPORTED_MODULE_4__["BillingService"], _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_9__["TableService"], _admin_settings_gst_gst_service__WEBPACK_IMPORTED_MODULE_10__["GstService"], _admin_CRM_customer_customer_service__WEBPACK_IMPORTED_MODULE_11__["CustomerService"]
            ],
            declarations: [_billing_component__WEBPACK_IMPORTED_MODULE_2__["BillingComponent"], _print_print_component__WEBPACK_IMPORTED_MODULE_12__["PrintComponent"]]
        })
    ], BillingModule);
    return BillingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/billing/billing.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/billing.service.ts ***!
  \***************************************************************/
/*! exports provided: BillingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingService", function() { return BillingService; });
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




var BillingService = /** @class */ (function () {
    function BillingService(_http) {
        this._http = _http;
        this.baseUrl = 'http://localhost:8080/api';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.headers });
    }
    BillingService.prototype.setter = function (billing) {
        this.billing = billing;
    };
    BillingService.prototype.getter = function () {
        return this.billing;
    };
    BillingService.prototype.saveBilling = function (billing) {
        return this._http.post(this.baseUrl + '/saveBilling', JSON.stringify(billing), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    BillingService.prototype.getAllBilling = function () {
        return this._http.get(this.baseUrl + '/getAllBilling', this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    BillingService.prototype.updateBilling = function (billing) {
        return this._http.put(this.baseUrl + '/updateBilling', JSON.stringify(billing), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    BillingService.prototype.getBilling = function (billingId) {
        return this._http.get(this.baseUrl + '/getBilling/' + billingId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    BillingService.prototype.getBillingbyOrderId = function (orderId) {
        return this._http.get(this.baseUrl + '/getBillingbyOrderId/' + orderId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    BillingService.prototype.deleteBilling = function (billingId) {
        return this._http.delete(this.baseUrl + '/deleteBilling/' + billingId, this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    BillingService.prototype.updateDiscount = function (menuOrder) {
        return this._http.put(this.baseUrl + '/updateDisount', JSON.stringify(menuOrder), this.options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error);
        }));
    };
    BillingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], BillingService);
    return BillingService;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/billing/billing.ts":
/*!*******************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/billing.ts ***!
  \*******************************************************/
/*! exports provided: Billing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Billing", function() { return Billing; });
var Billing = /** @class */ (function () {
    function Billing() {
    }
    return Billing;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/billing/print/print.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/print/print.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/waiter/billing/print/print.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/print/print.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\n  \n</table>"

/***/ }),

/***/ "./src/app/restaurants/waiter/billing/print/print.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/restaurants/waiter/billing/print/print.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintComponent", function() { return PrintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../admin/KOT/order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _billing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../billing.service */ "./src/app/restaurants/waiter/billing/billing.service.ts");
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




var PrintComponent = /** @class */ (function () {
    function PrintComponent(dialogRef, data, orderService, billingService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.orderService = orderService;
        this.billingService = billingService;
    }
    PrintComponent.prototype.ngOnInit = function () {
        this.orderId = this.data.orderId;
        console.log(this.orderId);
        this.getBilling();
        this.getMenuOrder();
    };
    PrintComponent.prototype.getMenuOrder = function () {
        var _this = this;
        this.orderService.getMenuOrder(this.orderId).subscribe(function (getMenuOrder) {
            _this.menuOrder = getMenuOrder;
            console.log(_this.menuOrder);
        });
    };
    PrintComponent.prototype.getBilling = function () {
        var _this = this;
        this.billingService.getBillingbyOrderId(this.orderId).subscribe(function (data) {
            _this.billing = data;
            console.log(_this.billing);
        }, function (error) {
            console.log(error);
        });
    };
    PrintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-print',
            template: __webpack_require__(/*! ./print.component.html */ "./src/app/restaurants/waiter/billing/print/print.component.html"),
            styles: [__webpack_require__(/*! ./print.component.css */ "./src/app/restaurants/waiter/billing/print/print.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _admin_KOT_order_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _billing_service__WEBPACK_IMPORTED_MODULE_3__["BillingService"]])
    ], PrintComponent);
    return PrintComponent;
}());



/***/ })

}]);
//# sourceMappingURL=billing-billing-module.js.map