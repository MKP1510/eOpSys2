(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KOT-menu-group-master-menu-group-master-module"],{

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n  }\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  .example-full-width {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .container{\r\n      width: 300px;\r\n  }\r\n  button{\r\n      margin-left: 30px;\r\n  }"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6> Add Menu Group</h6>\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n    <div class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput #input placeholder=\"Menu group Name\" name=\"menuGroupName\" [(ngModel)]=\"menuGroup.menuGroupName\" required>\n      </mat-form-field>\n    </div>\n    <div class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-select name=\"menuGroupCategory\" placeholder=\"Menu Group Category\" [(ngModel)]=\"menuGroup.menuGroupCategory\" required>\n          <mat-option value=\"TIFFIN\">Tiffin</mat-option>\n          <mat-option value=\"MEALS\">Meals</mat-option>\n          <mat-option value=\"SIDE DISH\">Side Dish</mat-option>\n          <mat-option value=\"OTHERS\">Others</mat-option>\n          </mat-select>\n      </mat-form-field>\n    </div>\n    <button type=\"submit\" mat-raised-button color=\"primary\"  (click)=\"saveMenuGroup()\">Save</button>\n    <button type=\"reset\" mat-raised-button color=\"accent\" (click)=\" onNoClick()\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: AddMenuGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenuGroupComponent", function() { return AddMenuGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_group_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-group-master */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.ts");
/* harmony import */ var _menu_group_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-group-master.service */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.service.ts");
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




var AddMenuGroupComponent = /** @class */ (function () {
    function AddMenuGroupComponent(dialogRef, data, menuGroupService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.menuGroupService = menuGroupService;
    }
    AddMenuGroupComponent.prototype.ngOnInit = function () {
        this.menuGroup = this.menuGroupService.getter();
        this.menuGroup = new _menu_group_master__WEBPACK_IMPORTED_MODULE_2__["MenuGroupMaster"]();
    };
    AddMenuGroupComponent.prototype.saveMenuGroup = function () {
        var _this = this;
        this.menuGroupService.saveMenuGroup(this.menuGroup).subscribe(function (data) {
            alert("Save Successfully");
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
        });
    };
    AddMenuGroupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddMenuGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-menu-group',
            template: __webpack_require__(/*! ./add-menu-group.component.html */ "./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.html"),
            styles: [__webpack_require__(/*! ./add-menu-group.component.css */ "./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _menu_group_master__WEBPACK_IMPORTED_MODULE_2__["MenuGroupMaster"],
            _menu_group_master_service__WEBPACK_IMPORTED_MODULE_3__["MenuGroupMasterService"]])
    ], AddMenuGroupComponent);
    return AddMenuGroupComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.css ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6,p{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n  }\r\n  button{\r\n    margin-left: 30px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6 mat-dialog-title>Are you sure?</h6>\n  <div mat-dialog-content>\n    <p> Menu Group Id: {{data.menuGroupId}}</p>\n    <p> Menu Group Name: {{data.menuGroupName}}</p>\n    <p> Menu Group Category: {{data.menuGroupCategory}}</p>\n  </div>\n  <div mat-dialog-actions>\n    <button type=\"submit\" mat-raised-button color=\"primary\"  (click)=\"deleteMenuGroup()\">Delete</button>\n    <button type=\"reset\" mat-raised-button color=\"accent\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: DeleteMenuGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteMenuGroupComponent", function() { return DeleteMenuGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_group_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-group-master */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.ts");
/* harmony import */ var _menu_group_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-group-master.service */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.service.ts");
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




var DeleteMenuGroupComponent = /** @class */ (function () {
    function DeleteMenuGroupComponent(dialogRef, data, menuGroupService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.menuGroupService = menuGroupService;
    }
    DeleteMenuGroupComponent.prototype.ngOnInit = function () {
    };
    DeleteMenuGroupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleteMenuGroupComponent.prototype.deleteMenuGroup = function () {
        var _this = this;
        this.menuGroupService.deleteMenuGroup(this.data.menuGroupId).subscribe(function (data) {
            alert("Delete Successfully");
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
        });
    };
    DeleteMenuGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-menu-group',
            template: __webpack_require__(/*! ./delete-menu-group.component.html */ "./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.html"),
            styles: [__webpack_require__(/*! ./delete-menu-group.component.css */ "./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _menu_group_master__WEBPACK_IMPORTED_MODULE_2__["MenuGroupMaster"],
            _menu_group_master_service__WEBPACK_IMPORTED_MODULE_3__["MenuGroupMasterService"]])
    ], DeleteMenuGroupComponent);
    return DeleteMenuGroupComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n  }\r\n  .example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  .example-full-width {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n  .container{\r\n      width: 300px;\r\n  }\r\n  button{\r\n      margin-left: 30px;\r\n  }"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6>Edit Menu Group</h6>\n  <form class=\"mat-dialog-content\" (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n    <div class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput #input placeholder=\"Menu group Name\" name=\"menuGroupName\" [(ngModel)]=\"data.menuGroupName\" required>\n      </mat-form-field>\n    </div>\n    <div class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-select name=\"menuGroupCategory\" placeholder=\"Menu Group Category\" [(ngModel)]=\"data.menuGroupCategory\" required>\n          <mat-option value=\"TIFFIN\">Tiffin</mat-option>\n          <mat-option value=\"MEALS\">Meals</mat-option>\n          <mat-option value=\"SIDE DISH\">Side Dish</mat-option>\n          <mat-option value=\"OTHERS\">Others</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <button type=\"submit\" mat-raised-button color=\"primary\" (click)=\"updateMenuGroup()\">Save</button>\n    <button type=\"reset\" mat-raised-button color=\"accent\" (click)=\" onNoClick()\">Cancel</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EditMenuGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMenuGroupComponent", function() { return EditMenuGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _menu_group_master__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-group-master */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.ts");
/* harmony import */ var _menu_group_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu-group-master.service */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.service.ts");
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




var EditMenuGroupComponent = /** @class */ (function () {
    function EditMenuGroupComponent(dialogRef, data, menuGroupService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.menuGroupService = menuGroupService;
    }
    EditMenuGroupComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    EditMenuGroupComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditMenuGroupComponent.prototype.updateMenuGroup = function () {
        var _this = this;
        this.menuGroupService.updateMenuGroup(this.data).subscribe(function (data) {
            alert("Edit Successfully");
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
        });
    };
    EditMenuGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-menu-group',
            template: __webpack_require__(/*! ./edit-menu-group.component.html */ "./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.html"),
            styles: [__webpack_require__(/*! ./edit-menu-group.component.css */ "./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _menu_group_master__WEBPACK_IMPORTED_MODULE_2__["MenuGroupMaster"],
            _menu_group_master_service__WEBPACK_IMPORTED_MODULE_3__["MenuGroupMasterService"]])
    ], EditMenuGroupComponent);
    return EditMenuGroupComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: MenuGroupMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGroupMasterRoutingModule", function() { return MenuGroupMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _menu_group_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-group-master.component */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _menu_group_master_component__WEBPACK_IMPORTED_MODULE_2__["MenuGroupMasterComponent"],
    }
];
var MenuGroupMasterRoutingModule = /** @class */ (function () {
    function MenuGroupMasterRoutingModule() {
    }
    MenuGroupMasterRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MenuGroupMasterRoutingModule);
    return MenuGroupMasterRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n  padding-left: 20px;\r\n  padding-top: 20px;\r\n  padding-right: 20px;\r\n}\r\n\r\nbutton{\r\n  margin-left: 20px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.example-container {\r\n  overflow: auto;\r\n}\r\n\r\nh6{\r\n  text-align: center;\r\n  font-family: 'Times New Roman', Times, serif;\r\n  font-size: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <div class=\"container\">\n   <h6>Menu Group</h6>\n  <div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-header\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n    </div>\n    <mat-header-cell *matHeaderCellDef>\n      <button mat-icon-button color=\"primary\" (click)=\"addNew()\">\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n      </button>\n    </mat-header-cell>\n    <table mat-table #table [dataSource]=\"dataSource\" matSort >\n  \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"menuGroupId\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Menu Group Id </th>\n        <td mat-cell *matCellDef=\"let menugroup\"> {{menugroup.menuGroupId}} </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"menuGroupName\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Menu Group Name </th>\n        <td mat-cell *matCellDef=\"let menugroup\"> {{menugroup.menuGroupName}} </td>\n      </ng-container>\n  \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"menuGroupCategory\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Menu Group Category</th>\n        <td mat-cell *matCellDef=\"let menugroup\"> {{menugroup.menuGroupCategory}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>\n          <button mat-icon-button matTooltip=\"Add Menu Group\" color=\"primary\" (click)=\"addMenuGroup()\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n          </button>\n          <button mat-icon-button matTooltip=\"Refresh\" (click)=\"MenuGroupList()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let menugroup; let i=index;\">\n          <button mat-icon-button matTooltip=\"Edit Menu Group\" color=\"accent\" (click)=\"editMenuGroup(i,menugroup.menuGroupId,menugroup.menuGroupName,menugroup.menuGroupCategory)\">\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\n          </button>\n          <button mat-icon-button matTooltip=\"Delete Menu Group\" color=\"accent\" (click)=\"deleteMenuGroup(i,menugroup.menuGroupId,menugroup.menuGroupName,menugroup.menuGroupCategory)\">\n            <mat-icon aria-label=\"Delete\">delete</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let menugroup; columns: displayedColumns;\"></tr>\n\n    </table>\n    <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MenuGroupMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGroupMasterComponent", function() { return MenuGroupMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _menu_group_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-group-master.service */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.service.ts");
/* harmony import */ var _add_menu_group_add_menu_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-menu-group/add-menu-group.component */ "./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.ts");
/* harmony import */ var _delete_menu_group_delete_menu_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delete-menu-group/delete-menu-group.component */ "./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.ts");
/* harmony import */ var _edit_menu_group_edit_menu_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-menu-group/edit-menu-group.component */ "./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MenuGroupMasterComponent = /** @class */ (function () {
    function MenuGroupMasterComponent(_menuGroupServiceservice, _router, _http, _dialog) {
        this._menuGroupServiceservice = _menuGroupServiceservice;
        this._router = _router;
        this._http = _http;
        this._dialog = _dialog;
        this.displayedColumns = ['menuGroupId', 'menuGroupName', 'menuGroupCategory', 'actions'];
    }
    MenuGroupMasterComponent.prototype.ngOnInit = function () {
        this.getMenuGroup();
    };
    MenuGroupMasterComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    MenuGroupMasterComponent.prototype.MenuGroupList = function () {
        this.getMenuGroup();
    };
    MenuGroupMasterComponent.prototype.getMenuGroup = function () {
        var _this = this;
        this._menuGroupServiceservice.getMenuGroup().subscribe(function (data) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    MenuGroupMasterComponent.prototype.addMenuGroup = function (menuGroup) {
        var _this = this;
        var dialogRef = this._dialog.open(_add_menu_group_add_menu_group_component__WEBPACK_IMPORTED_MODULE_5__["AddMenuGroupComponent"], {
            data: { menuGroup: menuGroup }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMenuGroup();
        });
    };
    MenuGroupMasterComponent.prototype.editMenuGroup = function (i, menuGroupId, menuGroupName, menuGroupCategory) {
        var _this = this;
        var dialogRef = this._dialog.open(_edit_menu_group_edit_menu_group_component__WEBPACK_IMPORTED_MODULE_7__["EditMenuGroupComponent"], {
            data: { menuGroupId: menuGroupId, menuGroupName: menuGroupName, menuGroupCategory: menuGroupCategory }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMenuGroup();
        });
    };
    MenuGroupMasterComponent.prototype.deleteMenuGroup = function (i, menuGroupId, menuGroupName, menuGroupCategory) {
        var _this = this;
        var dialogRef = this._dialog.open(_delete_menu_group_delete_menu_group_component__WEBPACK_IMPORTED_MODULE_6__["DeleteMenuGroupComponent"], {
            data: { menuGroupId: menuGroupId, menuGroupName: menuGroupName, menuGroupCategory: menuGroupCategory }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getMenuGroup();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], MenuGroupMasterComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MenuGroupMasterComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], MenuGroupMasterComponent.prototype, "sort", void 0);
    MenuGroupMasterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-group-master',
            template: __webpack_require__(/*! ./menu-group-master.component.html */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.html"),
            styles: [__webpack_require__(/*! ./menu-group-master.component.css */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.css")]
        }),
        __metadata("design:paramtypes", [_menu_group_master_service__WEBPACK_IMPORTED_MODULE_4__["MenuGroupMasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MenuGroupMasterComponent);
    return MenuGroupMasterComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.module.ts ***!
  \*************************************************************************************/
/*! exports provided: MenuGroupMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGroupMasterModule", function() { return MenuGroupMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu_group_master_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-group-master.component */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.component.ts");
/* harmony import */ var _menu_group_master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-group-master-routing.module */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master-routing.module.ts");
/* harmony import */ var _menu_group_master_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-group-master.service */ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _KOT_menu_group_master_add_menu_group_add_menu_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../KOT/menu-group-master/add-menu-group/add-menu-group.component */ "./src/app/restaurants/admin/KOT/menu-group-master/add-menu-group/add-menu-group.component.ts");
/* harmony import */ var _KOT_menu_group_master_edit_menu_group_edit_menu_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../KOT/menu-group-master/edit-menu-group/edit-menu-group.component */ "./src/app/restaurants/admin/KOT/menu-group-master/edit-menu-group/edit-menu-group.component.ts");
/* harmony import */ var _KOT_menu_group_master_delete_menu_group_delete_menu_group_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../KOT/menu-group-master/delete-menu-group/delete-menu-group.component */ "./src/app/restaurants/admin/KOT/menu-group-master/delete-menu-group/delete-menu-group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MenuGroupMasterModule = /** @class */ (function () {
    function MenuGroupMasterModule() {
    }
    MenuGroupMasterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _menu_group_master_routing_module__WEBPACK_IMPORTED_MODULE_3__["MenuGroupMasterRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"]
            ], providers: [
                _menu_group_master_service__WEBPACK_IMPORTED_MODULE_4__["MenuGroupMasterService"]
            ], schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ], entryComponents: [
                _KOT_menu_group_master_add_menu_group_add_menu_group_component__WEBPACK_IMPORTED_MODULE_8__["AddMenuGroupComponent"], _KOT_menu_group_master_edit_menu_group_edit_menu_group_component__WEBPACK_IMPORTED_MODULE_9__["EditMenuGroupComponent"], _KOT_menu_group_master_delete_menu_group_delete_menu_group_component__WEBPACK_IMPORTED_MODULE_10__["DeleteMenuGroupComponent"]
            ],
            declarations: [_menu_group_master_component__WEBPACK_IMPORTED_MODULE_2__["MenuGroupMasterComponent"], _KOT_menu_group_master_add_menu_group_add_menu_group_component__WEBPACK_IMPORTED_MODULE_8__["AddMenuGroupComponent"], _KOT_menu_group_master_edit_menu_group_edit_menu_group_component__WEBPACK_IMPORTED_MODULE_9__["EditMenuGroupComponent"], _KOT_menu_group_master_delete_menu_group_delete_menu_group_component__WEBPACK_IMPORTED_MODULE_10__["DeleteMenuGroupComponent"]]
        })
    ], MenuGroupMasterModule);
    return MenuGroupMasterModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.ts":
/*!******************************************************************************!*\
  !*** ./src/app/restaurants/admin/KOT/menu-group-master/menu-group-master.ts ***!
  \******************************************************************************/
/*! exports provided: MenuGroupMaster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuGroupMaster", function() { return MenuGroupMaster; });
var MenuGroupMaster = /** @class */ (function () {
    function MenuGroupMaster() {
    }
    return MenuGroupMaster;
}());



/***/ })

}]);
//# sourceMappingURL=KOT-menu-group-master-menu-group-master-module.js.map