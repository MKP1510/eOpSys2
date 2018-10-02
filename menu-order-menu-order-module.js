(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-order-menu-order-module"],{

/***/ "./src/app/restaurants/waiter/menu-order/menu-order-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/menu-order-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: MenuOrderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOrderRoutingModule", function() { return MenuOrderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-order.component */ "./src/app/restaurants/waiter/menu-order/menu-order.component.ts");
/* harmony import */ var _view_tables_view_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-tables/view-tables.component */ "./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.ts");
/* harmony import */ var _reorder_reorder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reorder/reorder.component */ "./src/app/restaurants/waiter/menu-order/reorder/reorder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: _view_tables_view_tables_component__WEBPACK_IMPORTED_MODULE_3__["ViewTablesComponent"]
    },
    {
        path: 'viewMenu/:tableId', component: _menu_order_component__WEBPACK_IMPORTED_MODULE_2__["MenuOrderComponent"]
    },
    {
        path: 'reorder/:orderId', component: _reorder_reorder_component__WEBPACK_IMPORTED_MODULE_4__["ReorderComponent"]
    }
];
var MenuOrderRoutingModule = /** @class */ (function () {
    function MenuOrderRoutingModule() {
    }
    MenuOrderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MenuOrderRoutingModule);
    return MenuOrderRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/menu-order.component.css":
/*!************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/menu-order.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/menu-order.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/menu-order.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-view-menu></app-view-menu>"

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/menu-order.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/menu-order.component.ts ***!
  \***********************************************************************/
/*! exports provided: MenuOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOrderComponent", function() { return MenuOrderComponent; });
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

var MenuOrderComponent = /** @class */ (function () {
    function MenuOrderComponent() {
    }
    MenuOrderComponent.prototype.ngOnInit = function () {
    };
    MenuOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-order',
            template: __webpack_require__(/*! ./menu-order.component.html */ "./src/app/restaurants/waiter/menu-order/menu-order.component.html"),
            styles: [__webpack_require__(/*! ./menu-order.component.css */ "./src/app/restaurants/waiter/menu-order/menu-order.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuOrderComponent);
    return MenuOrderComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/menu-order.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/menu-order.module.ts ***!
  \********************************************************************/
/*! exports provided: MenuOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuOrderModule", function() { return MenuOrderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-order.component */ "./src/app/restaurants/waiter/menu-order/menu-order.component.ts");
/* harmony import */ var _menu_order_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-order-routing.module */ "./src/app/restaurants/waiter/menu-order/menu-order-routing.module.ts");
/* harmony import */ var _view_tables_view_tables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-tables/view-tables.component */ "./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.ts");
/* harmony import */ var _view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-menu/view-menu.component */ "./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.ts");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../admin/KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _admin_KOT_menu_group_master_menu_group_master_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../admin/KOT/menu-group-master/menu-group-master.service */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.service.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _menu_order_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-order.service */ "./src/app/restaurants/waiter/menu-order/menu-order.service.ts");
/* harmony import */ var _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order-menu/order-menu.component */ "./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.ts");
/* harmony import */ var _reorder_reorder_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reorder/reorder.component */ "./src/app/restaurants/waiter/menu-order/reorder/reorder.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MenuOrderModule = /** @class */ (function () {
    function MenuOrderModule() {
    }
    MenuOrderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _menu_order_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuOrderRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"]
            ],
            declarations: [
                _menu_order_component__WEBPACK_IMPORTED_MODULE_2__["MenuOrderComponent"], _view_tables_view_tables_component__WEBPACK_IMPORTED_MODULE_4__["ViewTablesComponent"], _view_menu_view_menu_component__WEBPACK_IMPORTED_MODULE_5__["ViewMenuComponent"], _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_14__["OrderMenuComponent"], _reorder_reorder_component__WEBPACK_IMPORTED_MODULE_15__["ReorderComponent"]
            ],
            entryComponents: [
                _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_14__["OrderMenuComponent"]
            ],
            providers: [
                _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"], _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_8__["MenuMasterService"], _admin_KOT_menu_group_master_menu_group_master_service__WEBPACK_IMPORTED_MODULE_9__["MenuGroupMasterService"], _menu_order_service__WEBPACK_IMPORTED_MODULE_13__["MenuOrderService"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
        })
    ], MenuOrderModule);
    return MenuOrderModule;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 600px;\r\n    height: 100%;\r\n}\r\nh6{\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n    text-align: center;\r\n}\r\nmat-divider{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\nbutton{\r\n    \r\n    \r\n}"

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h6>Table Name: {{tableName}}</h6>\n    </div>\n    <div class=\"col-sm-6\">\n      <h6>Waiter Name: {{waiterName}}</h6>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <h6>Date: {{today | date}}</h6>\n    </div>\n    <div class=\"col-sm-6\">\n      <h6>Time: {{today | date:'shortTime'}}</h6>\n    </div>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n      <h6>Menu Name</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>Basic Amount</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>Quantity</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>Amount</h6>\n    </div>\n    <div class=\"col-sm-2\">\n        <h6>Action</h6>\n      </div>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"row\" *ngFor=\"let temp of tempOrder\">\n    <div class=\"col-sm-3\">\n      <h6>{{temp.menuName}}</h6>\n    </div>\n    <div class=\"col-sm-3\">\n      <h6>{{temp.basicAmount}}</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>{{temp.quantity}}</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>{{temp.amount}}</h6>\n    </div>\n    <div class=\"col-sm-2\">\n        <button mat-icon-button matTooltip=\"Delete Item Group\" color=\"accent\" (click)=\"deleteTempOrder(temp.tempOrderId)\">\n            <mat-icon aria-label=\"delete\">delete </mat-icon>\n          </button>\n      </div>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"row\">\n    <div class=\"col-sm-3\">\n    </div>\n    <div class=\"col-sm-3\">\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>{{quantity}}</h6>\n    </div>\n    <div class=\"col-sm-2\">\n      <h6>{{amount}}</h6>\n    </div>\n    \n  </div>\n  <div class=\"row\" style=\"text-align: center; margin-top: 20px;\">\n      <div class=\"col-sm-3\">\n        </div>\n        <div class=\"col-sm-3\">\n        </div>\n    <div class=\"col-sm-3\">\n        <button mat-button  [type]=\"submit\" style=\"background-color: MediumSeaGreen;color:white;\" [mat-dialog-close]=\"1\"  (click)=\" saveOrder()\">Order</button>\n    </div>\n    <div class=\"col-sm-3\">\n        <button mat-raised-button color=\"primary\" [type]=\"submit\" [mat-dialog-close]=\"1\"  (click)=\" onNoClick()\">Close</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.ts ***!
  \**********************************************************************************/
/*! exports provided: OrderMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderMenuComponent", function() { return OrderMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-order.service */ "./src/app/restaurants/waiter/menu-order/menu-order.service.ts");
/* harmony import */ var _admin_KOT_order_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/KOT/order/order */ "./src/app/restaurants/admin/KOT/order/order.ts");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var OrderMenuComponent = /** @class */ (function () {
    function OrderMenuComponent(matDialog, data, menuOrderService, tableService, datePipe, router) {
        this.matDialog = matDialog;
        this.data = data;
        this.menuOrderService = menuOrderService;
        this.tableService = tableService;
        this.datePipe = datePipe;
        this.router = router;
        this.today = Date.now();
    }
    OrderMenuComponent.prototype.ngOnInit = function () {
        this.order = new _admin_KOT_order_order__WEBPACK_IMPORTED_MODULE_3__["Order"]();
        console.log(this.data);
        this.tableId = this.data.tableId;
        this.waiterId = this.data.waiterId;
        this.orderId = this.data.orderId;
        this.getTempOreder();
        this.getTableName();
        this.getWaiterName();
    };
    OrderMenuComponent.prototype.getTempOreder = function () {
        var _this = this;
        this.amount = 0;
        this.quantity = 0;
        this.menuOrderService.getTempOrderByTableId(this.tableId, this.waiterId).subscribe(function (data) {
            _this.tempOrder = data;
            _this.tempOrder.forEach(function (res) {
                _this.amount = _this.amount + res.amount;
                ;
                _this.quantity = _this.quantity + res.quantity;
            });
        }, function (error) {
            console.log(error);
        });
    };
    OrderMenuComponent.prototype.getWaiterName = function () {
        var _this = this;
        this.menuOrderService.getWaiter(this.waiterId).subscribe(function (data) {
            _this.employee = data;
            _this.waiterName = _this.employee.employeeName;
        }, function (error) {
            console.log(error);
        });
    };
    OrderMenuComponent.prototype.getTableName = function () {
        var _this = this;
        this.tableService.getTableName(this.tableId).subscribe(function (data) {
            _this.table = data;
            _this.tableName = _this.table.tableName;
        }, function (error) {
            console.log(error);
        });
    };
    OrderMenuComponent.prototype.onNoClick = function () {
        this.matDialog.close();
    };
    OrderMenuComponent.prototype.saveOrder = function () {
        var _this = this;
        if (this.orderId >= 1) {
            this.order.orderId = this.orderId;
        }
        this.order.tableId = this.tableId;
        this.order.waiterId = this.waiterId;
        this.order.tableName = this.tableName;
        this.order.waiterName = this.waiterName;
        this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.time = this.datePipe.transform(new Date(), 'HH:MM:SS');
        this.order.date = this.date;
        this.order.time = this.time;
        console.log('tablename', this.order);
        this.menuOrderService.saveOrder(this.order).subscribe(function (date) {
            _this.router.navigateByUrl('restaurants/waiter/liveOrders');
        }, function (err) {
            alert('error');
        });
    };
    OrderMenuComponent.prototype.deleteTempOrder = function (tempOrderId) {
        var _this = this;
        console.log(tempOrderId);
        this.menuOrderService.deleteTempOrder(tempOrderId).subscribe(function (data) {
            console.log(data);
            _this.getTempOreder();
        }, function (error) {
            console.log(error);
        });
    };
    OrderMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-menu',
            template: __webpack_require__(/*! ./order-menu.component.html */ "./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.html"),
            styles: [__webpack_require__(/*! ./order-menu.component.css */ "./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _menu_order_service__WEBPACK_IMPORTED_MODULE_2__["MenuOrderService"],
            _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], OrderMenuComponent);
    return OrderMenuComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/reorder/reorder.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/reorder/reorder.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-card{\r\n    width: 230px;\r\n    font-size: 11px;\r\n    height: 200px;\r\n    margin-top: 20px;\r\n    margin-bottom: 50px;\r\n    background-color:#f9d5e5;\r\n}\r\nh6{\r\n    color: white;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\nbutton{\r\n    float: right;\r\n \r\n   }\r\n.container{\r\n    margin-top: 70px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color:#feb236;\r\n   }\r\nmat-tab-group{\r\n    margin: 15px,15px,15px,15px;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-bottom: 15px;\r\n   }\r\n.amount{\r\n       font-family: 'Times New Roman', Times, serif;\r\n       font-size: 20px;\r\n       text-align: center;\r\n   }\r\n.details{\r\n       padding-top: 20px;\r\n       margin-top: 20px;\r\n   }\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n "

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/reorder/reorder.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/reorder/reorder.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"details\">\n      <div class=\"row\">\n        <div class=\"col-sm-3\">\n          <h6>Waiter Name:  {{waiterName}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>Table Name:  {{tableName}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>Date: {{date}}</h6>\n        </div>\n        <div class=\"col-sm-3\">\n          <h6>Time: {{time}}</h6>\n        </div>\n      </div>\n    </div>\n    <mat-tab-group mat-stretch-tabs>\n      <mat-tab label=\"TIFFIN\" style=\"color: white\">\n        <div class=\"row\" style=\"width: 100%\">\n          <div *ngFor=\"let menuMasters of menuMaster\">\n            <div *ngIf=\"menuMasters.menuCategory=='TIFFIN'\">\n              <div class=\"col-sm-6\" style=\"margin-left: 40px;\">\n                <mat-card class=\"example-card\">\n                  <img mat-card-image src=\"biryani.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                    width=\"200px\">\n                  <mat-card-content style=\"margin-top: -10px;\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span>{{menuMasters.menuName}}</span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions style=\"margin-top: -30px;\">\n                    <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div *ngFor=\"let temp of tempOrders\">\n                          <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                            <button mat-icon-button>\n                              <span class=\"amount\">{{temp.quantity}}</span>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\" hidden>\n                        <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                      </div>\n                    </div>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"MEALS\" style=\"color: white\">\n        <div class=\"row\" style=\"width: 100%\">\n          <div *ngFor=\"let menuMasters of menuMaster\">\n            <div *ngIf=\"menuMasters.menuCategory=='MEALS' && menuMasters.availableMenuQuantity>=1\">\n              <div class=\"col-sm-6\" style=\"margin-left: 40px;\">\n                <mat-card class=\"example-card\">\n                  <img mat-card-image src=\"biryani.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                    width=\"200px\">\n                  <mat-card-content style=\"margin-top: -10px;\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span>{{menuMasters.menuName}}</span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions style=\"margin-top: -30px;\">\n                    <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div *ngFor=\"let temp of tempOrders\">\n                          <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                            <button mat-icon-button>\n                              <span class=\"amount\">{{temp.quantity}}</span>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\" hidden>\n                        <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                      </div>\n                    </div>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n      <mat-tab label=\"Others Items\" style=\"color: white\">\n        <div class=\"row\" style=\"width: 100%\">\n          <div *ngFor=\"let menuMasters of menuMaster\">\n            <div *ngIf=\"menuMasters.menuCategory=='others'&& menuMasters.availableMenuQuantity>=1\">\n              <div class=\"col-sm-6\" style=\"margin-left: 40px;\">\n                <mat-card class=\"example-card\">\n                  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                    width=\"200px\">\n                  <mat-card-content style=\"margin-top: -10px;\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-8\">\n                        <span>{{menuMasters.menuName}}</span>\n                      </div>\n                      <div class=\"col-sm-4\">\n                        <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                      </div>\n                    </div>\n                  </mat-card-content>\n                  <mat-card-actions style=\"margin-top: -30px;\">\n                    <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon>add</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <div *ngFor=\"let temp of tempOrders\">\n                          <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                            <button mat-icon-button>\n                              <span class=\"amount\">{{temp.quantity}}</span>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-sm-3\">\n                        <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount)\">\n                          <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                        </button>\n                      </div>\n                      <div class=\"col-sm-3\" hidden>\n                        <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                      </div>\n                    </div>\n                  </mat-card-actions>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n  <mat-toolbar color=\"primary\" class=\"fixed-bottom\">\n    <mat-toolbar-row>\n      <span>Cart</span>\n      <span class=\"example-spacer\"></span>\n      <span style=\"margin-left: -10px\"> {{count}}</span>\n      <button mat-icon-button style=\"margin-left: 10px\" (click)=\"orders()\">\n        <mat-icon>room_service</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>"

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/reorder/reorder.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/reorder/reorder.component.ts ***!
  \****************************************************************************/
/*! exports provided: ReorderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReorderComponent", function() { return ReorderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _admin_KOT_menu_group_master_menu_group_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/KOT/menu-group-master/menu-group-master.service */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.service.ts");
/* harmony import */ var _menu_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-order.service */ "./src/app/restaurants/waiter/menu-order/menu-order.service.ts");
/* harmony import */ var _admin_KOT_order_temp_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../admin/KOT/order/temp-order */ "./src/app/restaurants/admin/KOT/order/temp-order.ts");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_KOT_order_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../admin/KOT/order/order */ "./src/app/restaurants/admin/KOT/order/order.ts");
/* harmony import */ var _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../order-menu/order-menu.component */ "./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ReorderComponent = /** @class */ (function () {
    function ReorderComponent(activatedRoute, menuMasterService, menuGroupMasterService, orderService, tableService, datePipe, matDialog, router) {
        this.activatedRoute = activatedRoute;
        this.menuMasterService = menuMasterService;
        this.menuGroupMasterService = menuGroupMasterService;
        this.orderService = orderService;
        this.tableService = tableService;
        this.datePipe = datePipe;
        this.matDialog = matDialog;
        this.router = router;
    }
    ReorderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.orderId = paramsId.orderId;
            console.log(_this.orderId);
        });
        this.tempOrder = new _admin_KOT_order_temp_order__WEBPACK_IMPORTED_MODULE_6__["TempOrder"]();
        this.order = new _admin_KOT_order_order__WEBPACK_IMPORTED_MODULE_9__["Order"]();
        this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.time = this.datePipe.transform(new Date(), 'HH:MM:SS');
        this.getOrder();
        this.getMenuMaster();
    };
    ReorderComponent.prototype.getMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (menuList) {
            _this.menuMaster = menuList;
            console.log('menuList', menuList);
        }, function (err) {
            alert("don't get");
        });
    };
    ReorderComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderService.getOrder(this.orderId).subscribe(function (data) {
            _this.order = data;
            _this.tableId = _this.order.tableId;
            _this.waiterId = _this.order.waiterId;
            _this.tableName = _this.order.tableName;
            _this.waiterName = _this.order.waiterName;
            _this.date = _this.order.date;
            _this.time = _this.order.time;
            console.log(_this.order);
            _this.getTempOrderByTableId();
            _this.getMenuCount();
        }, function (error) {
            console.log(error);
        });
    };
    ReorderComponent.prototype.getTempOrderByTableId = function () {
        var _this = this;
        this.orderService.getTempOrderByTableId(this.tableId, this.waiterId).subscribe(function (data) {
            _this.tempOrders = data;
            console.log("table", _this.tempOrders);
        }, function (error) {
            console.log(error);
        });
    };
    ReorderComponent.prototype.getMenuCount = function () {
        var _this = this;
        this.orderService.getMenuCount(this.tableId, this.waiterId).subscribe(function (data) {
            console.log(data);
            _this.count = data;
        }, function (error) {
            console.log(error);
        });
    };
    ReorderComponent.prototype.addquantity = function (menuId, menuName, basicAmount) {
        this.saveTempOrder(menuId, menuName, basicAmount);
    };
    ReorderComponent.prototype.subquantity = function (menuId, menuName, basicAmount) {
        var _this = this;
        this.tempOrder.tempOrderId = null;
        this.tempOrder.tableId = this.tableId;
        this.tempOrder.quantity = 1;
        this.tempOrder.menuId = menuId;
        this.tempOrder.menuName = menuName;
        this.tempOrder.basicAmount = basicAmount;
        this.tempOrder.amount = basicAmount;
        this.tempOrder.waiterId = this.waiterId;
        this.orderService.decreaseQuantity(this.tempOrder).subscribe(function (data) {
            _this.getTempOrderByTableId();
            _this.getMenuCount();
        }, function (error) {
            console.log(error);
        });
    };
    ReorderComponent.prototype.deleteMenu = function () {
    };
    ReorderComponent.prototype.saveTempOrder = function (menuId, menuName, basicAmount) {
        var _this = this;
        this.tempOrder.tempOrderId = null;
        this.tempOrder.tableId = this.tableId;
        this.tempOrder.quantity = 1;
        this.tempOrder.menuId = menuId;
        this.tempOrder.menuName = menuName;
        this.tempOrder.basicAmount = basicAmount;
        this.tempOrder.amount = basicAmount;
        this.tempOrder.waiterId = this.waiterId;
        this.orderService.saveTempOrder(this.tempOrder).subscribe(function (data) {
            _this.getTempOrderByTableId();
            _this.getMenuCount();
        }, function (error) {
            console.log(error);
        });
    };
    ReorderComponent.prototype.orders = function () {
        var _this = this;
        var dialogRef = this.matDialog.open(_order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_10__["OrderMenuComponent"], {
            data: { orderId: this.orderId, tableId: this.tableId, waiterId: this.waiterId },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getOrder();
            _this.getMenuMaster();
            _this.getTempOrderByTableId();
            _this.getMenuCount();
        });
    };
    ReorderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reorder',
            template: __webpack_require__(/*! ./reorder.component.html */ "./src/app/restaurants/waiter/menu-order/reorder/reorder.component.html"),
            styles: [__webpack_require__(/*! ./reorder.component.css */ "./src/app/restaurants/waiter/menu-order/reorder/reorder.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_3__["MenuMasterService"],
            _admin_KOT_menu_group_master_menu_group_master_service__WEBPACK_IMPORTED_MODULE_4__["MenuGroupMasterService"],
            _menu_order_service__WEBPACK_IMPORTED_MODULE_5__["MenuOrderService"], _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_7__["TableService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReorderComponent);
    return ReorderComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-card{\r\n    width: 230px;\r\n    font-size: 11px;\r\n    height: 200px;\r\n    margin-top: 20px;\r\n    margin-bottom: 50px;\r\n    background-color:#f9d5e5;\r\n}\r\nh6{\r\n    color: white;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\nbutton{\r\n    float: right;\r\n \r\n   }\r\n.container{\r\n    margin-top: 70px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color:#feb236;\r\n   }\r\nmat-tab-group{\r\n    margin: 15px,15px,15px,15px;\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-bottom: 15px;\r\n   }\r\n.amount{\r\n       font-family: 'Times New Roman', Times, serif;\r\n       font-size: 20px;\r\n       text-align: center;\r\n   }\r\n.details{\r\n       padding-top: 20px;\r\n       margin-top: 20px;\r\n   }\r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n "

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"details\">\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <h6>Waiter Name: {{waiterName}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>Table Name: {{tableName}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>Date: {{today | date}}</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>Time: {{today | date:'shortTime'}}</h6>\n      </div>\n    </div>\n  </div>\n  <mat-tab-group mat-stretch-tabs>\n    <mat-tab label=\"Tiffin Items\" style=\"color: white\">\n      <div class=\"row\" style=\"width: 100%\">\n        <div class=\"col-sm-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"vegCtrl\">\n            <mat-autocomplete #auto=\"matAutocomplete\">\n              <mat-option *ngFor=\"let state of veg | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount,state.gst)\">\n                <span *ngIf=\"state.menuCategory=='TIFFIN'\">\n                  {{state.menuCode}}: {{state.menuName}}\n                </span>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" style=\"width: 100%\">\n        <div *ngFor=\"let menuMasters of menuMaster\">\n          <div *ngIf=\"menuMasters.menuCategory=='TIFFIN'  && ((menuMasters.availableMenuQuantity>=1 || menuMasters.availableMenuQuantity>=0) && date===menuMasters.date)\">\n            <div class=\"col-sm-6\">\n              <mat-card class=\"example-card\">\n                <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                  width=\"200px\">\n                <mat-card-content style=\"margin-top: -10px;\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-8\">\n                      <span>{{menuMasters.menuName}}</span>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                    </div>\n                  </div>\n                </mat-card-content>\n                <mat-card-actions style=\"margin-top: -30px;\">\n                  <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                    <div class=\"col-sm-3\">\n                      <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount,menuMasters.gst)\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div *ngFor=\"let temp of tempOrders\">\n                        <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                          <button mat-icon-button>\n                            <span class=\"amount\">{{temp.quantity}}</span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount,menuMasters.gst)\">\n                        <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                      </button>\n                    </div>\n                    <div class=\"col-sm-3\" hidden>\n                      <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                    </div>\n                  </div>\n                </mat-card-actions>\n              </mat-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Meals Items\" style=\"color: white\">\n      <div class=\"row\" style=\"width: 100%\">\n        <div class=\"col-sm-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto1\" [formControl]=\"nonvegCtrl\">\n            <mat-autocomplete #auto1=\"matAutocomplete\">\n              <mat-option *ngFor=\"let state of nonveg | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount,state.gst)\">\n                <div *ngIf=\"state.menuCategory=='MEALS'\">\n                  <span>\n                    {{state.menuCode}}: {{state.menuName}}\n                  </span>\n                </div>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" style=\"width: 100%\">\n        <div *ngFor=\"let menuMasters of menuMaster\">\n          <div *ngIf=\"menuMasters.menuCategory=='MEALS' && ((menuMasters.availableMenuQuantity>=1 || menuMasters.availableMenuQuantity>=0) && date===menuMasters.date)\">\n            <div class=\"col-sm-6\" style=\"margin-left: 40px;\">\n              <mat-card class=\"example-card\">\n                <img mat-card-image src=\"biryani.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                  width=\"200px\">\n                <mat-card-content style=\"margin-top: -10px;\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-8\">\n                      <span>{{menuMasters.menuName}}</span>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                    </div>\n                  </div>\n                </mat-card-content>\n                <mat-card-actions style=\"margin-top: -30px;\">\n                  <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                    <div class=\"col-sm-3\">\n                      <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount,menuMasters.gst)\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div *ngFor=\"let temp of tempOrders\">\n                        <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                          <button mat-icon-button>\n                            <span class=\"amount\">{{temp.quantity}}</span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount,menuMasters.gst)\">\n                        <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                      </button>\n                    </div>\n                    <div class=\"col-sm-3\" hidden>\n                      <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                    </div>\n                  </div>\n                </mat-card-actions>\n              </mat-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Others Items\" style=\"color: white\">\n      <div class=\"row\" style=\"width: 100%\">\n        <div class=\"col-sm-6\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [matAutocomplete]=\"auto2\" [formControl]=\"othersCtrl\">\n            <mat-autocomplete #auto2=\"matAutocomplete\">\n              <mat-option *ngFor=\"let state of others | async\" [value]=\"state.menuName\" (click)=\"saveTempOrder(state.menuId,state.menuName,state.quantity,state.basicAmount,state.gst)\">\n                <div *ngIf=\"state.menuCategory=='others'\">\n                  <span>\n                    {{state.menuCode}}: {{state.menuName}}\n                  </span>\n                </div>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"row\" style=\"width: 100%\">\n        <div *ngFor=\"let menuMasters of menuMaster\">\n          <div *ngIf=\"menuMasters.menuCategory=='others'&& ((menuMasters.availableMenuQuantity>=1 || menuMasters.availableMenuQuantity>=0) && date===menuMasters.date)\">\n            <div class=\"col-sm-6\" style=\"margin-left: 40px;\">\n              <mat-card class=\"example-card\">\n                <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\" height=\"130px\"\n                  width=\"200px\">\n                <mat-card-content style=\"margin-top: -10px;\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-8\">\n                      <span>{{menuMasters.menuName}}</span>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <span style=\"float: right;\">RS:{{menuMasters.basicAmount}}</span>\n                    </div>\n                  </div>\n                </mat-card-content>\n                <mat-card-actions style=\"margin-top: -30px;\">\n                  <div class=\"row\" style=\"text-align: center;margin-left: 40px;\">\n                    <div class=\"col-sm-3\">\n                      <button mat-icon-button (click)=\"addquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount,menuMasters.gst)\">\n                        <mat-icon>add</mat-icon>\n                      </button>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <div *ngFor=\"let temp of tempOrders\">\n                        <div *ngIf=\"temp.menuId==menuMasters.menuId\">\n                          <button mat-icon-button>\n                            <span class=\"amount\">{{temp.quantity}}</span>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                      <button mat-icon-button (click)=\"subquantity(menuMasters.menuId,menuMasters.menuName,menuMasters.basicAmount,menuMasters.gst)\">\n                        <mat-icon style=\"margin-top: -10px\">minimize</mat-icon>\n                      </button>\n                    </div>\n                    <div class=\"col-sm-3\" hidden>\n                      <mat-icon (click)=\"deleteMenu()\">cancel</mat-icon>\n                    </div>\n                  </div>\n                </mat-card-actions>\n              </mat-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n<mat-toolbar color=\"primary\" class=\"fixed-bottom\">\n  <mat-toolbar-row>\n    <span>Cart</span>\n    <span class=\"example-spacer\"></span>\n    <span style=\"margin-left: -10px\"> {{count}}</span>\n    <button mat-icon-button style=\"margin-left: 10px\" (click)=\"orders()\">\n      <mat-icon>room_service</mat-icon>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: ViewMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMenuComponent", function() { return ViewMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../admin/KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _admin_KOT_menu_group_master_menu_group_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../admin/KOT/menu-group-master/menu-group-master.service */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.service.ts");
/* harmony import */ var _menu_order_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-order.service */ "./src/app/restaurants/waiter/menu-order/menu-order.service.ts");
/* harmony import */ var _admin_KOT_order_temp_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../admin/KOT/order/temp-order */ "./src/app/restaurants/admin/KOT/order/temp-order.ts");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_KOT_order_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../admin/KOT/order/order */ "./src/app/restaurants/admin/KOT/order/order.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../order-menu/order-menu.component */ "./src/app/restaurants/waiter/menu-order/order-menu/order-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ViewMenuComponent = /** @class */ (function () {
    function ViewMenuComponent(activatedRoute, menuMasterService, menuGroupMasterService, orderService, tableService, datePipe, matDialog, router) {
        this.activatedRoute = activatedRoute;
        this.menuMasterService = menuMasterService;
        this.menuGroupMasterService = menuGroupMasterService;
        this.orderService = orderService;
        this.tableService = tableService;
        this.datePipe = datePipe;
        this.matDialog = matDialog;
        this.router = router;
        this.vegCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.amount = 0;
        this.nonvegCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.othersCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.waiterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]();
        this.today = Date.now();
    }
    ViewMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        this.employeeid = this.user.employeeId;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.tableId = paramsId.tableId;
        });
        this.getMenuMaster();
        this.getWaiterName();
        this.getTableName();
        this.getTempOrderByTableId();
        this.getMenuCount();
        this.tempOrder = new _admin_KOT_order_temp_order__WEBPACK_IMPORTED_MODULE_6__["TempOrder"]();
        this.order = new _admin_KOT_order_order__WEBPACK_IMPORTED_MODULE_9__["Order"]();
        this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
        this.time = this.datePipe.transform(new Date(), 'HH:MM:SS');
    };
    ViewMenuComponent.prototype.getMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (menuList) {
            _this.menuMaster = menuList;
        }, function (err) {
            alert("don't get");
        });
    };
    ViewMenuComponent.prototype.getTableName = function () {
        var _this = this;
        this.tableService.getTableName(this.tableId).subscribe(function (data) {
            _this.table = data;
            _this.tableName = _this.table.tableName;
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenuComponent.prototype.getWaiterName = function () {
        var _this = this;
        this.orderService.getWaiter(this.employeeid).subscribe(function (data) {
            _this.employee = data;
            _this.waiterName = _this.employee.employeeName;
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenuComponent.prototype.getTempOrderByTableId = function () {
        var _this = this;
        this.orderService.getTempOrderByTableId(this.tableId, this.employeeid).subscribe(function (data) {
            _this.tempOrders = data;
            _this.amount = _this.tempOrder.amount;
        }, function (error) {
            console.log(error);
        });
    };
    /*Count the Menu Quantity*/
    ViewMenuComponent.prototype.getMenuCount = function () {
        var _this = this;
        this.orderService.getMenuCount(this.tableId, this.employeeid).subscribe(function (data) {
            _this.count = data;
        }, function (error) {
            console.log(error);
            _this.count = 0;
        });
    };
    ViewMenuComponent.prototype.getVegMenu = function () {
        var _this = this;
        this.orderService.getVegMenu().subscribe(function (data) {
            _this.vegMenu = data;
            _this.veg = _this.vegCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (state) { return state ? _this._filterStateveg(state) : _this.vegMenu.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenuComponent.prototype._filterStateveg = function (value) {
        var filterValue = value.toLowerCase();
        return this.vegMenu.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    ViewMenuComponent.prototype.getNonVegMenu = function () {
        var _this = this;
        this.orderService.getNonVegMenu().subscribe(function (data) {
            _this.nonVegMenu = data;
            _this.nonveg = _this.nonvegCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (state) { return state ? _this._filterStateNonVeg(state) : _this.nonVegMenu.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenuComponent.prototype._filterStateNonVeg = function (value) {
        var filterValue = value.toLowerCase();
        return this.nonVegMenu.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    ViewMenuComponent.prototype.getOtherMenu = function () {
        var _this = this;
        this.orderService.getOtherMenu().subscribe(function (data) {
            _this.otherMenu = data;
            _this.others = _this.othersCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (state) { return state ? _this._filterStateOther(state) : _this.otherMenu.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    ViewMenuComponent.prototype._filterStateOther = function (value) {
        var filterValue = value.toLowerCase();
        return this.otherMenu.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    ViewMenuComponent.prototype.getMenuGroup = function () {
        var _this = this;
        this.menuGroupMasterService.getMenuGroup().subscribe(function (menuGroupList) {
            _this.menuGroupMaster = menuGroupList;
        }, function (err) {
            alert("don't get");
        });
    };
    ViewMenuComponent.prototype.addquantity = function (menuId, menuName, basicAmount, gst) {
        if (this.amount == 0) {
            var quantity = 1;
            this.saveTempOrder(menuId, menuName, quantity, basicAmount, gst);
        }
        else {
            var quantity = 2;
            this.saveTempOrder(menuId, menuName, quantity, basicAmount, gst);
        }
    };
    ViewMenuComponent.prototype.subquantity = function (menuId, menuName, basicAmount, gst) {
        var _this = this;
        this.tempOrder.tempOrderId = null;
        this.tempOrder.tableId = this.tableId;
        this.tempOrder.quantity = 1;
        this.tempOrder.menuId = menuId;
        this.tempOrder.menuName = menuName;
        this.tempOrder.gst = gst;
        this.tempOrder.basicAmount = basicAmount;
        this.tempOrder.amount = basicAmount;
        this.tempOrder.waiterId = this.employeeid;
        this.orderService.decreaseQuantity(this.tempOrder).subscribe(function (data) {
            _this.getTempOrderByTableId();
            _this.getMenuCount();
        }, function (error) {
            console.log(error);
        });
    };
    /*Save Temp Order*/
    ViewMenuComponent.prototype.saveTempOrder = function (menuId, menuName, quantity, basicAmount, gst) {
        var _this = this;
        this.tempOrder.tempOrderId = null;
        this.tempOrder.tableId = this.tableId;
        this.tempOrder.quantity = 1;
        this.tempOrder.menuId = menuId;
        this.tempOrder.menuName = menuName;
        this.tempOrder.gst = gst;
        this.tempOrder.basicAmount = basicAmount;
        this.tempOrder.amount = basicAmount;
        this.tempOrder.waiterId = this.employeeid;
        this.orderService.saveTempOrder(this.tempOrder).subscribe(function (data) {
            _this.getTempOrderByTableId();
            _this.getMenuCount();
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
    };
    /*Get  Order Menu view By Table Id*/
    /*View the Order Dialog*/
    ViewMenuComponent.prototype.orders = function () {
        var _this = this;
        var orderId = 0;
        if (this.count != 0) {
            var dialogRef = this.matDialog.open(_order_menu_order_menu_component__WEBPACK_IMPORTED_MODULE_12__["OrderMenuComponent"], {
                data: { orderId: orderId, tableId: this.tableId, waiterId: this.employeeid },
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.getMenuMaster();
                _this.getWaiterName();
                _this.getTableName();
                _this.getTempOrderByTableId();
                _this.getMenuCount();
            });
        }
        else {
            alert("Please select any one Menu");
        }
    };
    ViewMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-menu',
            template: __webpack_require__(/*! ./view-menu.component.html */ "./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.html"),
            styles: [__webpack_require__(/*! ./view-menu.component.css */ "./src/app/restaurants/waiter/menu-order/view-menu/view-menu.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _admin_KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_3__["MenuMasterService"],
            _admin_KOT_menu_group_master_menu_group_master_service__WEBPACK_IMPORTED_MODULE_4__["MenuGroupMasterService"],
            _menu_order_service__WEBPACK_IMPORTED_MODULE_5__["MenuOrderService"], _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_7__["TableService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"],
            _node_modules_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ViewMenuComponent);
    return ViewMenuComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 70px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgb(245, 202, 224);\r\n}\r\nmat-card{\r\n    text-align: center;\r\n    margin-top: 15px;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: 10px;\r\n    margin-bottom: 15px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-tab-group mat-stretch-tabs>\n    <mat-tab label=\"AC\">\n      <div class=\"row\" style=\"width: 100%;\">\n        <div *ngFor=\"let tables of table\">\n          <div *ngIf=\"tables.tableType=='AC'\">\n            <div class=\"col-sm-4\">\n              <div *ngIf=\"tables.status=='available'\">\n                <mat-card style=\"background-color:green; color: white;\" [routerLink]=\"['../viewMenu',tables.tableId]\">\n                  <span>{{tables.tableName}}</span>\n                </mat-card>\n              </div>\n              <div *ngIf=\"tables.status=='order'\">\n                <mat-card style=\"background-color:rgb(250, 6, 148); color: white;\" [routerLink]=\"['../viewMenu',tables.tableId]\" disabled>\n                  <span>{{tables.tableName}}</span>\n                </mat-card>\n              </div>\n              <div *ngIf=\"tables.status=='payment'\">\n                <mat-card style=\"background-color:rgb(250, 9, 9); color: white;\" [routerLink]=\"['../viewMenu',tables.tableId]\" disabled>\n                  <span>{{tables.tableName}}</span>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Non-AC\">\n      <div class=\"row\" style=\"width: 100%;\">\n        <div *ngFor=\"let tables of table\">\n          <div *ngIf=\"tables.tableType=='NON-AC'\">\n            <div class=\"col-sm-4\">\n              <div *ngIf=\"tables.status=='available'\">\n                <mat-card style=\"background-color:green; color: white;\" [routerLink]=\"['../viewMenu',tables.tableId]\">\n                  <span>{{tables.tableName}}</span>\n                </mat-card>\n              </div>\n              <div *ngIf=\"tables.status=='order'\">\n                <mat-card style=\"background-color:rgb(250, 6, 148); color: white;\" [routerLink]=\"['../viewMenu',tables.tableId]\" disabled>\n                  <span>{{tables.tableName}}</span>\n                </mat-card>\n              </div>\n              <div *ngIf=\"tables.status=='payment'\">\n                <mat-card style=\"background-color:rgb(250, 9, 9); color: white;\" [routerLink]=\"['../viewMenu',tables.tableId]\" disabled>\n                  <span>{{tables.tableName}}</span>\n                </mat-card>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.ts ***!
  \************************************************************************************/
/*! exports provided: ViewTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewTablesComponent", function() { return ViewTablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../admin/KOT/table/table.service */ "./src/app/restaurants/admin/KOT/table/table.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ViewTablesComponent(tableService, router) {
        this.tableService = tableService;
        this.router = router;
        this.displayedColumns = ['tableId'];
    }
    ViewTablesComponent.prototype.ngOnInit = function () {
        this.getAllTableList();
    };
    ViewTablesComponent.prototype.getAllTableList = function () {
        var _this = this;
        this.tableService.getAllTableList().subscribe(function (viewTables) {
            console.log('viewTables', viewTables);
            _this.table = viewTables;
        }, function (err) {
            alert("don't get");
        });
    };
    ViewTablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-tables',
            template: __webpack_require__(/*! ./view-tables.component.html */ "./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.html"),
            styles: [__webpack_require__(/*! ./view-tables.component.css */ "./src/app/restaurants/waiter/menu-order/view-tables/view-tables.component.css")]
        }),
        __metadata("design:paramtypes", [_admin_KOT_table_table_service__WEBPACK_IMPORTED_MODULE_1__["TableService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ViewTablesComponent);
    return ViewTablesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=menu-order-menu-order-module.js.map