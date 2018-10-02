(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KOT-billing-billing-module"],{

/***/ "./src/app/restaurants/admin/KOT/billing/billing-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/billing/billing-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: BillingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingRoutingModule", function() { return BillingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _billing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./billing.component */ "./src/app/restaurants/admin/KOT/billing/billing.component.ts");
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

/***/ "./src/app/restaurants/admin/KOT/billing/billing.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/billing/billing.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 50px;\r\n    margin-left: 50px;\r\n    margin-right: 100px;\r\n    background-color:aliceblue;\r\n    width: 1100px;\r\n}\r\nh6{\r\n    text-align: center;\r\n    font-size: 14px;\r\n}\r\n#order{\r\nmargin-top: 10px;\r\npadding-top: 10px;\r\nmargin-bottom: 10px;\r\n}\r\n#menuname{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n#menulist{\r\n    margin-top: 10px;\r\n}\r\n#amount{\r\n    margin-top: 10px;\r\n}\r\nbutton{\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/billing/billing.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/billing/billing.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\" id=\"order\">\n    <div class=\"col-sm-2\">\n      <h6>Order Id: {{orderId}}</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>Waiter Name: {{waiterName}}</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>Table Name: {{tableName}}</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>Date: {{order.date}}</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>Time: {{order.time}}</h6>\n    </div>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"row\" id=\"menuname\">\n    <div class=\"col-sm-3\">\n      <h6>Menu Id</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6> Menu Name</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>Quantity</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>Amount</h6>\n    </div>\n  </div>\n  <mat-divider></mat-divider>\n  <div *ngFor=\"let menu of menuOrder\">\n    <div class=\"row\" id=\"menulist\">\n      <div class=\"col-sm-3\">\n        <h6>{{menu.menuId}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>{{menu.menuName}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>{{menu.quantity}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>{{menu.amount}}</h6>\n      </div>\n    </div>\n  </div>\n  <mat-divider style=\"margin-top: 10px;\"></mat-divider>\n  <div class=\"row\" id=\"amount\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\">\n      <h6>Amount</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>{{amount}}</h6>\n    </div>\n  </div>\n  <div *ngIf=\"tableType=='AC'\">\n    <div class=\"row\" id=\"amount\">\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-3\"></div>\n      <div class=\"col-sm-3\">\n        <h6>Service Amount</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>{{serviceCharge}}</h6>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\">\n      <h6>  \n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\"  style=\"width: 100px; \">\n            <mat-select name=\"discount\" placeholder=\"Discount\" required>\n              <mat-option #dis1 value=\"0\" (click)=\"discounts(dis1.value)\">0%</mat-option>\n              <mat-option #dis2 value=\"5\" (click)=\"discounts(dis2.value)\">5%</mat-option>\n              <mat-option #dis3 value=\"10\" (click)=\"discounts(dis3.value)\">10%</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>{{discount}}</h6>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\">\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\"  style=\"width: 100px; \">\n            <mat-select name=\"gst\" placeholder=\"GST\" [(ngModel)]=\"billing.gst\" required>\n              <div *ngFor=\"let gsts of gst\">\n                <div *ngIf=\"gsts.gstType=='intergstdealer'\">\n                    <mat-option value=\"{{gsts.gst}}\" (click)=\"calgst(gsts.gst)\">{{gsts.gst}}</mat-option>\n                </div> \n              </div>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>{{gsts}}</h6>\n    </div>\n  </div>\n  <div class=\"row\" id=\"amount\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\">\n      <h6>Total Amount</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>{{totalamount}}</h6>\n    </div>\n  </div>\n  <mat-divider style=\"margin-top: 10px;\"></mat-divider>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"form\">\n            <mat-form-field class=\"example-full-width \">\n              <mat-select name=\"cashType\" placeholder=\"Cash Type\" [(ngModel)]=\"billing.cashType\" required>\n                <mat-option  value=\"cash\">Cash</mat-option>\n                <mat-option value=\"card\">Card</mat-option>\n                <mat-option value=\"cash\">Other</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <mat-form-field class=\"example-full-width\">\n            <input matInput #input placeholder=\"Customer Mobile No\" aria-label=\"Customer Mobile No\" [matAutocomplete]=\"auto\" [(ngModel)]=\"billing.customerMobileNo\" >\n            <mat-autocomplete #auto=\"matAutocomplete\">\n                <mat-option #waiter *ngFor=\"let customers of customer\" [value]=\"customers.phoneNo\" (click)=\"customer1(customers.phoneNo)\">     \n                        {{customers.phoneNo}}\n                </mat-option>\n            </mat-autocomplete>\n        </mat-form-field>\n    </div>\n    <div class=\"col-sm-3\">\n        <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"payment()\">Pay</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/billing/billing.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/billing/billing.component.ts ***!
  \********************************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _table_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _settings_gst_gst_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../settings/gst/gst.service */ "./src/app/restaurants/admin/settings/gst/gst.service.ts");
/* harmony import */ var _billing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billing */ "./src/app/restaurants/admin/KOT/billing/billing.ts");
/* harmony import */ var _CRM_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../CRM/customer/customer.service */ "./src/app/restaurants/admin/CRM/customer/customer.service.ts");
/* harmony import */ var _billing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./billing.service */ "./src/app/restaurants/admin/KOT/billing/billing.service.ts");
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
    function BillingComponent(orderService, activatedRoute, tableService, gstService, customerService, billingService, router) {
        this.orderService = orderService;
        this.activatedRoute = activatedRoute;
        this.tableService = tableService;
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
        this.getAllGst();
        this.getAllCustomer();
        this.billing = new _billing__WEBPACK_IMPORTED_MODULE_5__["Billing"]();
    };
    BillingComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderService.getOrder(this.orderId).subscribe(function (data) {
            _this.order = data;
            _this.tableId = _this.order.tableId;
            _this.waiterId = _this.order.waiterId;
            _this.date = _this.order.date;
            _this.time = _this.order.time;
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
            _this.tableName = _this.table.tableName;
            _this.tableType = _this.table.tableType;
            _this.serviceCharge = _this.table.serviceCharge;
            console.log('tableName', _this.table);
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.getWaiter = function () {
        var _this = this;
        console.log('WaiterId', this.waiterId);
        this.orderService.getWaiter(this.waiterId).subscribe(function (data) {
            _this.employee = data;
            console.log(_this.employee);
            _this.waiterName = _this.employee.employeeName;
            console.log(_this.employee);
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.getMenuOrder = function () {
        var _this = this;
        this.orderService.getMenuOrder(this.orderId).subscribe(function (data) {
            _this.menuOrder = data;
            console.log('menu', _this.amount);
            for (var _i = 0, _a = _this.menuOrder; _i < _a.length; _i++) {
                var i = _a[_i];
                _this.quantity = _this.quantity + i.quantity;
                _this.amount = _this.amount + i.amount;
            }
            _this.totalamount = _this.amount;
            _this.totalamount1 = _this.totalamount;
            console.log('amount', _this.amount);
            console.log('service', _this.serviceCharge);
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.getAllGst = function () {
        var _this = this;
        this.gstService.getGst().subscribe(function (data) {
            _this.gst = data;
            console.log('gst', _this.gst);
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.discounts = function (discounts) {
        console.log(discounts);
        this.discount = 0;
        this.totalamount = this.totalamount1 + this.serviceCharge;
        this.discount = this.totalamount * discounts / 100;
        console.log(this.discount);
        this.totalamount = this.totalamount - this.discount;
        this.totalamount2 = this.totalamount;
    };
    BillingComponent.prototype.calgst = function (gst) {
        this.gsts = 0;
        this.gsts = this.totalamount * gst / 100;
        this.totalamount = this.totalamount2 + this.gsts;
    };
    BillingComponent.prototype.getAllCustomer = function () {
        var _this = this;
        this.customerService.getCustomer().subscribe(function (data) {
            _this.customer = data;
            console.log('customer', _this.customer);
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent.prototype.customer1 = function (phoneNo) {
        console.log(phoneNo);
        this.phoneNo = phoneNo;
    };
    BillingComponent.prototype.payment = function () {
        var _this = this;
        this.billing.orderId = this.orderId;
        this.billing.waiterId = this.waiterId;
        this.billing.tableId = this.tableId;
        this.billing.date = this.date;
        this.billing.time = this.time;
        this.billing.amount = this.amount;
        this.billing.serviceCharge = this.serviceCharge;
        this.billing.discount = this.discount;
        this.billing.gstAmount = this.gsts;
        this.billing.totalAmount = this.totalamount;
        this.billing.customerMobileNo = this.phoneNo;
        console.log('payment', this.billing);
        this.billingService.saveBilling(this.billing).subscribe(function (data) {
            console.log(data);
            _this.table.tableId = _this.tableId;
            _this.table.status = 'available';
            _this.orderService.deleteTempOrderByTableId(_this.tableId).subscribe(function (data) {
                _this.tableService.updateStatus(_this.table).subscribe(function (data) {
                    _this.orderService.updateOrderStatus(_this.orderId).subscribe(function (data) {
                        console.log(data);
                        _this.router.navigate(['restaurants/admin/liveorder']);
                    }, function (error) {
                        console.log(error);
                    });
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        });
    };
    BillingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/restaurants/admin/KOT/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.css */ "./src/app/restaurants/admin/KOT/billing/billing.component.css")]
        }),
        __metadata("design:paramtypes", [_order_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _table_table_service__WEBPACK_IMPORTED_MODULE_3__["TableService"],
            _settings_gst_gst_service__WEBPACK_IMPORTED_MODULE_4__["GstService"],
            _CRM_customer_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"],
            _billing_service__WEBPACK_IMPORTED_MODULE_7__["BillingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/billing/billing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/billing/billing.module.ts ***!
  \*****************************************************************/
/*! exports provided: BillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _KOT_billing_billing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../KOT/billing/billing.component */ "./src/app/restaurants/admin/KOT/billing/billing.component.ts");
/* harmony import */ var _billing_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing-routing.module */ "./src/app/restaurants/admin/KOT/billing/billing-routing.module.ts");
/* harmony import */ var _billing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./billing.service */ "./src/app/restaurants/admin/KOT/billing/billing.service.ts");
/* harmony import */ var _order_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../order/order.service */ "./src/app/restaurants/admin/KOT/order/order.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _table_table_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _settings_gst_gst_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../settings/gst/gst.service */ "./src/app/restaurants/admin/settings/gst/gst.service.ts");
/* harmony import */ var _CRM_customer_customer_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../CRM/customer/customer.service */ "./src/app/restaurants/admin/CRM/customer/customer.service.ts");
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
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]
            ],
            providers: [
                _billing_service__WEBPACK_IMPORTED_MODULE_4__["BillingService"], _order_order_service__WEBPACK_IMPORTED_MODULE_5__["OrderService"], _table_table_service__WEBPACK_IMPORTED_MODULE_9__["TableService"], _settings_gst_gst_service__WEBPACK_IMPORTED_MODULE_10__["GstService"], _CRM_customer_customer_service__WEBPACK_IMPORTED_MODULE_11__["CustomerService"]
            ],
            declarations: [_KOT_billing_billing_component__WEBPACK_IMPORTED_MODULE_2__["BillingComponent"]]
        })
    ], BillingModule);
    return BillingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/billing/billing.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/billing/billing.service.ts ***!
  \******************************************************************/
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
    BillingService.prototype.deleteBilling = function (billingId) {
        return this._http.delete(this.baseUrl + '/deleteBilling/' + billingId, this.options)
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

/***/ "./src/app/restaurants/admin/KOT/billing/billing.ts":
/*!**********************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/billing/billing.ts ***!
  \**********************************************************/
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
//# sourceMappingURL=KOT-billing-billing-module.js.map