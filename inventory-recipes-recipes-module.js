(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-recipes-recipes-module"],{

/***/ "./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width,h6,.form{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n}\r\n.container{\r\n    margin-top: 50px;\r\n    margin-left: 100px;\r\n    width: 800px;\r\n}\r\nh6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n  }\r\n "

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6>Add Recipes</h6>\n  <form (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput #name  placeholder=\"Menu Name\" #input aria-label=\"State\" [(ngModel)]=\"recipes.menuName\"  [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n          <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"getMenuName($event.option.value)\">\n            <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.menuName\" >\n              <span>{{state.menuCode}}  |  </span>\n              <small>{{state.menuName}}</small>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput #inputstate #name  placeholder=\"Quantity\" [(ngModel)]=\"recipes.quantity\" name=\"quantity\" required>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-select name=\"Unit\" #input placeholder=\"Unit\" [(ngModel)]=\"recipes.unit\" (ngModelChange)=\"calcMenuUnit(recipes.quantity,recipes.unit)\"\n              required>\n              <mat-option value=\"KiloGram\">KG</mat-option>\n              <mat-option value=\"Gram\">GRAM</mat-option>\n              <mat-option value=\"Litre\">LITER</mat-option>\n              <mat-option value=\"MilliLitre\">ML</mat-option>\n              <mat-option value=\"Pieces\">Pieces</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <h6>Item Name</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>Quantity</h6>\n      </div>\n      <div class=\"col-sm-3\">\n        <h6>Unit</h6>\n      </div>\n      <div class=\"col-sm-2\">\n        <h6>Action</h6>\n      </div>\n    </div>\n    <mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n    <div *ngFor=\"let options of Option; let in=index;\" class=\"row\" id=\"item\">\n      <div class=\"col-sm-4\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\" style=\"width: 150px;\">\n            <input matInput #input placeholder=\"Item Name\" aria-label=\"itemName\"  name=\"itemName{{in}}\" [matAutocomplete]=\"auto2\" [formControl]=\"testCtrl\">\n            <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)=\"getItemName($event.option.value,in)\">\n              <mat-option #waiter *ngFor=\"let state of filteredtest | async\" [value]=\"state.itemName\">\n                <span>{{state.itemCode}}  |  </span>\n                <small>{{state.itemName}}</small>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\" style=\"width: 150px;\">\n            <input matInput placeholder=\"Quantity\" [(ngModel)]=\"Option[in].quantity\" name=\"quantity{{in}}\" required>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\" style=\"width: 150px;\">\n            <mat-select placeholder=\"Unit\" [(ngModel)]=\"Option[in].unit\" name=\"unit{{in}}\" (ngModelChange)=\"calcItemUnit(in,Option[in].quantity,Option[in].unit)\"\n               required>\n              <mat-option value=\"KiloGram\">KG</mat-option>\n              <mat-option value=\"Gram\">GRAM</mat-option>\n              <mat-option value=\"Litre\">LITRE</mat-option>\n              <mat-option value=\"MilliLitre\">ML</mat-option>\n              <mat-option value=\"Pieces\">Pieces</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-sm-2\">\n        <div class=\"form\">\n          <button mat-icon-button (click)=\"add()\" [disabled]=\"!formControl.valid\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"remove(in)\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n      </div>\n      <div class=\"col-sm-4\">\n        <button mat-raised-button color=\"primary\" style=\"margin-left: 20px;\" [type]=\"submit\" (click)=\" saveRecipes()\">Save F2</button>\n        <button mat-raised-button color=\"accent\" style=\"margin-left: 20px;\" (click)=\"onNoClick()\" type=\"reset\">Cancel F4</button>\n      </div>\n      <div class=\"col-sm-4\">\n      </div>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddrecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddrecipesComponent", function() { return AddrecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes.service */ "./src/app/restaurants/admin/inventory/recipes/recipes.service.ts");
/* harmony import */ var _item_master_item_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../item-master/item-master.service */ "./src/app/restaurants/admin/inventory/item-master/item-master.service.ts");
/* harmony import */ var _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipes */ "./src/app/restaurants/admin/inventory/recipes/recipes.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddrecipesComponent = /** @class */ (function () {
    function AddrecipesComponent(recipesService, itemMasterService, menuMasterService, router) {
        this.recipesService = recipesService;
        this.itemMasterService = itemMasterService;
        this.menuMasterService = menuMasterService;
        this.router = router;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.testCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.quantity1 = [];
        this.Option = [{ itemId: '', itemName: '', quantity: '', unit: '' }];
    }
    AddrecipesComponent.prototype.ngOnInit = function () {
        this.recipes = new _recipes__WEBPACK_IMPORTED_MODULE_4__["Recipes"]();
        this.getAllMenuMaster();
        this.getAllItemMaster();
    };
    AddrecipesComponent.prototype.hotkeys = function (event) {
        if (event.keyCode == 113) {
            this.saveRecipes();
        }
        if (event.keyCode == 115) {
            this.onNoClick();
        }
    };
    AddrecipesComponent.prototype.getAllMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (data) {
            _this.menuMaster = data;
            console.log(_this.menuMaster);
            _this.filteredStates = _this.stateCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterStates(state) : _this.menuMaster.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    AddrecipesComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.menuMaster.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    AddrecipesComponent.prototype.getMenuName = function (menuName) {
        var _this = this;
        this.menuMasterService.getMenuDetails(menuName).subscribe(function (data) {
            _this.menuMaster1 = data;
            _this.recipes.menuId = _this.menuMaster1.menuId;
        }, function (error) {
            console.log(error);
        });
    };
    AddrecipesComponent.prototype.getAllItemMaster = function () {
        var _this = this;
        this.itemMasterService.getAllItemMaster().subscribe(function (data) {
            _this.itemMaster = data;
            console.log(_this.itemMaster);
            _this.filteredtest = _this.testCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (state) { return state ? _this._filterState(state) : _this.itemMaster.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    AddrecipesComponent.prototype._filterState = function (value) {
        var filterValue = value.toLowerCase();
        return this.itemMaster.filter(function (item) { return item.itemCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    AddrecipesComponent.prototype.getItemName = function (itemName, i) {
        var _this = this;
        this.Option[i].itemName = itemName;
        this.itemMasterService.getItemMasterByItemName(itemName).subscribe(function (data) {
            _this.itemMaster1 = data;
            _this.Option[i].itemId = _this.itemMaster1.itemId.toString();
        }, function (error) {
            console.log(error);
        });
    };
    AddrecipesComponent.prototype.selectIdemId = function (i, itemId, itemName) {
        this.Option[i].itemId = itemId.toString();
        this.Option[i].itemName = itemName;
        console.log(this.Option);
    };
    AddrecipesComponent.prototype.calcMenuUnit = function (quantity, unit) {
        console.log('unit', unit, 'q', quantity);
        if (unit == 'Gram' || unit == 'MilliLitre' || unit == 'Pieces') {
            console.log('1', this.quantity);
            this.quantity = quantity;
            console.log('2', this.quantity);
        }
        else if (unit == 'KiloGram' || unit == 'Litre') {
            console.log('1', this.quantity);
            this.quantity = quantity * 1000;
            console.log('2', this.quantity);
        }
        console.log(this.quantity);
    };
    AddrecipesComponent.prototype.calcItemUnit = function (i, quantity, unit) {
        if (unit == 'Gram' || unit == 'MilliLitre' || unit == 'Pieces') {
            this.quantity1[i] = quantity;
        }
        else if (unit == 'KiloGram' || unit == 'Litre') {
            this.quantity1[i] = quantity * 1000;
        }
        console.log(this.quantity1[i]);
        console.log(this.quantity1);
    };
    AddrecipesComponent.prototype.add = function () {
        this.Option.push({ itemId: '', itemName: '', quantity: '', unit: '' });
    };
    AddrecipesComponent.prototype.remove = function (i) {
        this.Option.splice(i, 1);
    };
    AddrecipesComponent.prototype.saveRecipes = function () {
        var _this = this;
        var i;
        this.recipes.quantity = this.quantity;
        for (i = 0; i < this.quantity1.length; i++) {
            this.Option[i].quantity = this.quantity1[i];
        }
        this.recipes.ingredients = this.Option;
        console.log(this.recipes);
        this.recipesService.saveRecipes(this.recipes).subscribe(function (data) {
            _this.router.navigate(['restaurants/admin/recipes']);
            alert('Save Recipes');
        }, function (error) {
            alert("All Ready this recipes are Added");
        });
    };
    AddrecipesComponent.prototype.onNoClick = function () {
        this.router.navigate(['restaurants/admin/recipes']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("name"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AddrecipesComponent.prototype, "nameField", void 0);
    AddrecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addrecipes',
            host: { '(window:keydown)': 'hotkeys($event)' },
            template: __webpack_require__(/*! ./addrecipes.component.html */ "./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.html"),
            styles: [__webpack_require__(/*! ./addrecipes.component.css */ "./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.css")]
        }),
        __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"],
            _item_master_item_master_service__WEBPACK_IMPORTED_MODULE_2__["ItemMasterService"],
            _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_3__["MenuMasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AddrecipesComponent);
    return AddrecipesComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    \r\n}\r\np,h3{\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3 mat-dialog-title>Are you sure want to permenantly delete?</h3>\n  <div mat-dialog-content>\n    <p> Recipes Id: {{data.recipesId}}</p>\n    <p>Menu Name : {{data.menuName}}</p>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-raised-button color=\"primary\" style=\"margin-left: 20px;\" [mat-dialog-close]=\"1\" (click)=\"confirmDeleteRecipes()\">Delete</button>\n    <button mat-raised-button color=\"accent\" style=\"margin-left: 20px;\" (click)=\"onNoClick()\" tabindex=\"-1\">Cancel</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DeleterecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleterecipesComponent", function() { return DeleterecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes.service */ "./src/app/restaurants/admin/inventory/recipes/recipes.service.ts");
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes */ "./src/app/restaurants/admin/inventory/recipes/recipes.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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




var DeleterecipesComponent = /** @class */ (function () {
    function DeleterecipesComponent(recipesService, dialogRef, data) {
        this.recipesService = recipesService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleterecipesComponent.prototype.ngOnInit = function () {
    };
    DeleterecipesComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DeleterecipesComponent.prototype.confirmDeleteRecipes = function () {
        this.recipesService.deleteRecipes(this.data.recipesId).subscribe(function (data) {
            alert('Delete Successfully');
        }, function (error) {
            console.log(error);
        });
    };
    DeleterecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deleterecipes',
            template: __webpack_require__(/*! ./deleterecipes.component.html */ "./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.html"),
            styles: [__webpack_require__(/*! ./deleterecipes.component.css */ "./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _recipes__WEBPACK_IMPORTED_MODULE_2__["Recipes"]])
    ], DeleterecipesComponent);
    return DeleterecipesComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width.form{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n}\r\n.container{\r\n    margin-top: 50px;\r\n    margin-left: 100px;\r\n    width: 800px;\r\n}\r\nh6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6>Edit Recipes</h6>\n  <form (ngSubmit)=\"submit\" #formControl=\"ngForm\">\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Menu Name\" aria-label=\"State\" [(ngModel)]=\"recipes.menuName\" [matAutocomplete]=\"auto\" [formControl]=\"stateCtrl\">\n          <mat-autocomplete #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.menuName\" (click)=\"selectMenuId(state.menuId)\">\n              <span>{{state.menuCode}} </span>\n              <small>{{state.menuName}}</small>\n            </mat-option>\n          </mat-autocomplete>\n        </mat-form-field>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput #inputstate placeholder=\"Quantity\" [(ngModel)]=\"recipes.quantity\" name=\"quantity\" required>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\">\n            <mat-select name=\"Unit\" placeholder=\"Unit\" [(ngModel)]=\"recipes.unit\" (ngModelChange)=\"calcMenuUnit(recipes.quantity,recipes.unit)\"\n              required>\n              <mat-option value=\"kiloGram\">KG</mat-option>\n              <mat-option value=\"gram\">GRAM</mat-option>\n              <mat-option value=\"litre\">LITER</mat-option>\n              <mat-option value=\"milliLitre\">ML</mat-option>\n              <mat-option value=\"others\">Others</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <h6>Item Name</h6>\n      </div>\n      <div class=\"col-sm-4\">\n        <h6>Quantity</h6>\n      </div>\n      <div class=\"col-sm-4\">\n        <h6>Unit</h6>\n      </div>\n    </div>\n    <mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n    <div *ngFor=\"let options of Option; let in=index;\" class=\"row\" id=\"item\">\n      <div class=\"col-sm-4\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\" style=\"width: 150px;\">\n            <input matInput #input placeholder=\"Item Name\" aria-label=\"itemName\" [(ngModel)]=\"Option[in].itemName\" (ngModelChange)=\"select(in,Option[in].itemName)\"\n              name=\"itemName{{in}}\" [matAutocomplete]=\"auto2\">\n            <mat-autocomplete #auto2=\"matAutocomplete\">\n              <mat-option #waiter *ngFor=\"let state of filteredtest | async\" [value]=\"state.itemName\" (click)=\"selectIdemId(in,state.itemId)\">\n                <span>{{state.itemCode}}</span>\n                <small>{{state.itemName}}</small>\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\" style=\"width: 150px;\">\n            <input matInput placeholder=\"Quantity\" [(ngModel)]=\"Option[in].quantity\" name=\"quantity{{in}}\" required>\n          </mat-form-field>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"form\">\n          <mat-form-field class=\"example-full-width\" style=\"width: 150px;\">\n            <mat-select placeholder=\"Unit\" [(ngModel)]=\"Option[in].unit\" name=\"name{{in}}\" required>\n              <mat-option value=\"KiloGram\">KG</mat-option>\n              <mat-option value=\"Gram\">GRAM</mat-option>\n              <mat-option value=\"Litre\">LITRE</mat-option>\n              <mat-option value=\"MilliLitre\">ML</mat-option>\n              <mat-option value=\"Pieces\">Pieces</mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-10\">\n      </div>\n      <div class=\"col-sm-2\">\n        <div class=\"form\">\n          <button mat-icon-button (click)=\"add()\" [disabled]=\"!formControl.valid\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"remove()\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n    <mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n\n      </div>\n      <div class=\"col-sm-4\">\n        <button mat-raised-button color=\"primary\" style=\"margin-left: 20px;\" [type]=\"submit\" (click)=\" updateRecipes()\">Save</button>\n        <button mat-raised-button color=\"accent\" style=\"margin-left: 20px;\" (click)=\"onNoClick()\" type=\"reset\">Cancel</button>\n      </div>\n      <div class=\"col-sm-4\">\n\n      </div>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditrecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditrecipesComponent", function() { return EditrecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes.service */ "./src/app/restaurants/admin/inventory/recipes/recipes.service.ts");
/* harmony import */ var _item_master_item_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../item-master/item-master.service */ "./src/app/restaurants/admin/inventory/item-master/item-master.service.ts");
/* harmony import */ var _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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







var EditrecipesComponent = /** @class */ (function () {
    function EditrecipesComponent(recipesService, itemMasterService, router, menuMasterService, activatedRoute) {
        this.recipesService = recipesService;
        this.itemMasterService = itemMasterService;
        this.router = router;
        this.menuMasterService = menuMasterService;
        this.activatedRoute = activatedRoute;
        this.stateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.testCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.quantity1 = [];
        this.Option = [{ itemId: '', itemName: '', quantity: '', unit: '' }];
    }
    EditrecipesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (paramsId) {
            _this.recipesId = paramsId.recipesId;
            console.log(_this.recipesId);
        });
        this.getRecipes();
        this.getAllMenuMaster();
        this.getAllItemMaster();
    };
    EditrecipesComponent.prototype.getAllMenuMaster = function () {
        var _this = this;
        this.menuMasterService.getMenuMaster().subscribe(function (data) {
            _this.menuMaster = data;
            console.log(_this.menuMaster);
            _this.filteredStates = _this.stateCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filterStates(state) : _this.menuMaster.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    EditrecipesComponent.prototype._filterStates = function (value) {
        var filterValue = value.toLowerCase();
        return this.menuMaster.filter(function (menu) { return menu.menuCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    EditrecipesComponent.prototype.getAllItemMaster = function () {
        var _this = this;
        this.itemMasterService.getAllItemMaster().subscribe(function (data) {
            _this.itemMaster = data;
            console.log(_this.itemMaster);
            _this.filteredtest = _this.testCtrl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return state ? _this._filterState(state) : _this.itemMaster.slice(); }));
        }, function (error) {
            console.log(error);
        });
    };
    EditrecipesComponent.prototype._filterState = function (value) {
        var filterValue = value.toLowerCase();
        return this.itemMaster.filter(function (item) { return item.itemCode.toLowerCase().indexOf(filterValue) === 0; });
    };
    EditrecipesComponent.prototype.selectMenuId = function (menuId) {
        this.recipes.menuId = menuId;
    };
    EditrecipesComponent.prototype.selectIdemId = function (i, itemId) {
        this.Option[i].itemId = itemId.toString();
        console.log(this.Option[i].itemId);
    };
    EditrecipesComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipesService.getRecipes(this.recipesId).subscribe(function (data) {
            console.log(data);
            _this.recipes = data;
            var i;
            _this.Option = _this.recipes.ingredients;
            for (i = 0; i < _this.Option.length; i++) {
                if (_this.Option[i].unit == 'Gram' || _this.Option[i].unit == 'MilliLitre' || _this.Option[i].unit == 'Pieces') {
                    _this.Option[i].quantity = _this.Option[i].quantity;
                }
                else if (_this.Option[i].unit == 'KiloGram' || _this.Option[i].unit == 'Litre') {
                    var s = Number(_this.Option[i].quantity);
                    s = s / 1000;
                    _this.Option[i].quantity = s.toString();
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    EditrecipesComponent.prototype.select = function (i, itemName) {
        this.Option[i].itemName = itemName;
        console.log(this.Option[i].itemName);
    };
    EditrecipesComponent.prototype.add = function () {
        this.Option.push({ itemId: '', itemName: '', quantity: '', unit: '' });
    };
    EditrecipesComponent.prototype.remove = function () {
        this.Option.pop();
    };
    EditrecipesComponent.prototype.updateRecipes = function () {
        var _this = this;
        var i;
        for (i = 0; i < this.Option.length; i++) {
            if (this.Option[i].unit == 'Gram' || this.Option[i].unit == 'MilliLitre' || this.Option[i].unit == 'Pieces') {
                this.Option[i].quantity = this.Option[i].quantity;
            }
            else if (this.Option[i].unit == 'KiloGram' || this.Option[i].unit == 'Litre') {
                var s = Number(this.Option[i].quantity);
                s = s * 1000;
                this.Option[i].quantity = s.toString();
            }
        }
        this.recipes.ingredients = this.Option;
        console.log(this.recipes);
        this.recipesService.updateRecipes(this.recipes).subscribe(function (data) {
            alert('Update Successfully');
            _this.router.navigate(['restaurants/admin/recipes']);
        }, function (error) {
            console.log(error);
        });
    };
    EditrecipesComponent.prototype.onNoClick = function () {
        this.router.navigate(['restaurants/admin/recipes']);
    };
    EditrecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editrecipes',
            template: __webpack_require__(/*! ./editrecipes.component.html */ "./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.html"),
            styles: [__webpack_require__(/*! ./editrecipes.component.css */ "./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.css")]
        }),
        __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"],
            _item_master_item_master_service__WEBPACK_IMPORTED_MODULE_2__["ItemMasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_3__["MenuMasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], EditrecipesComponent);
    return EditrecipesComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/recipes-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/recipes-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RecipesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesRoutingModule", function() { return RecipesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.component */ "./src/app/restaurants/admin/inventory/recipes/recipes.component.ts");
/* harmony import */ var _addrecipes_addrecipes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addrecipes/addrecipes.component */ "./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.ts");
/* harmony import */ var _editrecipes_editrecipes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editrecipes/editrecipes.component */ "./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '', component: _recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"]
    },
    {
        path: 'addRecipes', component: _addrecipes_addrecipes_component__WEBPACK_IMPORTED_MODULE_3__["AddrecipesComponent"]
    },
    {
        path: 'editRecipes/:recipesId', component: _editrecipes_editrecipes_component__WEBPACK_IMPORTED_MODULE_4__["EditrecipesComponent"]
    }
];
var RecipesRoutingModule = /** @class */ (function () {
    function RecipesRoutingModule() {
    }
    RecipesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RecipesRoutingModule);
    return RecipesRoutingModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/recipes.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/recipes.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n  .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n    padding-left: 20px;\r\n    padding-top: 20px;\r\n    padding-right: 20px;\r\n  }\r\n\r\n  button{\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  h6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/recipes.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/recipes.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h6>Recipes</h6>\n  <div class=\"example-container mat-elevation-z8\">\n    <div class=\"example-header\">\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n      </mat-form-field>\n    </div>\n    <mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n      <mat-container matColumnDef=\"recpiesId\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Recipes Id</mat-header-cell>\n        <mat-cell *matCellDef=\"let recipes\">{{recipes.recipesId}}</mat-cell>\n      </mat-container>\n\n      <mat-container matColumnDef=\"recpiesName\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Recipes Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let recipes\">{{recipes.menuName}}</mat-cell>\n      </mat-container>\n\n      <mat-container matColumnDef=\"quantity\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Quantity</mat-header-cell>\n        <mat-cell *matCellDef=\"let recipes\">{{recipes.quantity}}</mat-cell>\n      </mat-container>\n\n\n      <mat-container matColumnDef=\"unit\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Unit</mat-header-cell>\n        <mat-cell *matCellDef=\"let recipes\">{{recipes.unit}}</mat-cell>\n      </mat-container>\n      <mat-container matColumnDef=\"ingredients\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Ingredients</mat-header-cell>\n        <mat-cell *matCellDef=\"let recipes\">\n          <button mat-icon-button matTooltip=\"View Ingredients\" color=\"accent\" (click)=\"viewIngredients(recipes.recipesId)\">\n            <mat-icon aria-label=\"Edit\">open_in_new</mat-icon>\n          </button>\n          </mat-cell>\n      </mat-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>\n          <button mat-icon-button matTooltip=\"Add Recipes\" color=\"primary\" (click)=\"addRecipes()\">\n            <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n          </button>\n          <button matTooltip=\"Refresh\" mat-icon-button (click)=\"refresh()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n        </mat-header-cell>\n\n        <mat-cell *matCellDef=\"let recipes; let i=index;\">\n          <button mat-icon-button matTooltip=\"Edit Recipes\" color=\"accent\" (click)=\"editRecipes(i,recipes.recipesId)\">\n            <mat-icon aria-label=\"Edit\">edit </mat-icon>\n          </button>\n\n          <button mat-icon-button matTooltip=\"Delete Recipes\" color=\"accent\" (click)=\"deleteRecipes(i,recipes.recipesId,recipes.menuName,recipes.quantity)\">\n            <mat-icon aria-label=\"Delete\">delete </mat-icon>\n          </button>\n\n        </mat-cell>\n      </ng-container>\n      <mat-header-row mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[ 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/recipes.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/recipes.component.ts ***!
  \**************************************************************************/
/*! exports provided: RecipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesComponent", function() { return RecipesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes.service */ "./src/app/restaurants/admin/inventory/recipes/recipes.service.ts");
/* harmony import */ var _view_ingredients_view_ingredients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-ingredients/view-ingredients.component */ "./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.ts");
/* harmony import */ var _deleterecipes_deleterecipes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deleterecipes/deleterecipes.component */ "./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(router, recipesService, dialog) {
        this.router = router;
        this.recipesService = recipesService;
        this.dialog = dialog;
        this.displayedColumns = ['recpiesId', 'recpiesName', 'quantity', 'unit', 'ingredients', 'actions'];
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.getAllRecipes();
    };
    RecipesComponent.prototype.hotkeys = function (event) {
        if (event.keyCode == 113) {
            this.addRecipes();
        }
    };
    RecipesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    RecipesComponent.prototype.getAllRecipes = function () {
        var _this = this;
        this.recipesService.getAllRecipes().subscribe(function (data) {
            _this.recipes = data;
            var i;
            for (i = 0; i < _this.recipes.length; i++) {
                if (_this.recipes[i].unit == 'Gram' || _this.recipes[i].unit == 'MilliLitre' || _this.recipes[i].unit == 'Pieces') {
                    _this.recipes[i].quantity = _this.recipes[i].quantity;
                }
                else if (_this.recipes[i].unit == 'KiloGram' || _this.recipes[i].unit == 'Litre') {
                    _this.recipes[i].quantity = _this.recipes[i].quantity / 1000;
                }
            }
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.recipes);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }, function (error) {
            console.log(error);
        });
    };
    RecipesComponent.prototype.addRecipes = function () {
        this.router.navigate(['restaurants/admin/recipes/addRecipes']);
    };
    RecipesComponent.prototype.refresh = function () {
        this.getAllRecipes();
    };
    RecipesComponent.prototype.viewIngredients = function (recipesId) {
        var _this = this;
        var dialogRef = this.dialog.open(_view_ingredients_view_ingredients_component__WEBPACK_IMPORTED_MODULE_4__["ViewIngredientsComponent"], {
            data: { recipesId: recipesId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.getAllRecipes();
            }
        });
    };
    RecipesComponent.prototype.deleteRecipes = function (i, recipesId, menuName, quantity) {
        var _this = this;
        var dialogRef = this.dialog.open(_deleterecipes_deleterecipes_component__WEBPACK_IMPORTED_MODULE_5__["DeleterecipesComponent"], {
            data: { recipesId: recipesId, menuName: menuName, guantity: quantity }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 1) {
                _this.getAllRecipes();
            }
        });
    };
    RecipesComponent.prototype.editRecipes = function (i, recipesId) {
        this.router.navigate(['restaurants/admin/recipes/editRecipes/' + recipesId]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], RecipesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RecipesComponent.prototype, "filter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], RecipesComponent.prototype, "sort", void 0);
    RecipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipes',
            host: { '(window:keydown)': 'hotkeys($event)' },
            template: __webpack_require__(/*! ./recipes.component.html */ "./src/app/restaurants/admin/inventory/recipes/recipes.component.html"),
            styles: [__webpack_require__(/*! ./recipes.component.css */ "./src/app/restaurants/admin/inventory/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _recipes_service__WEBPACK_IMPORTED_MODULE_3__["RecipesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/recipes.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/recipes.module.ts ***!
  \***********************************************************************/
/*! exports provided: RecipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesModule", function() { return RecipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _recipes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes.component */ "./src/app/restaurants/admin/inventory/recipes/recipes.component.ts");
/* harmony import */ var _recipes_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipes-routing.module */ "./src/app/restaurants/admin/inventory/recipes/recipes-routing.module.ts");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipes.service */ "./src/app/restaurants/admin/inventory/recipes/recipes.service.ts");
/* harmony import */ var _item_master_item_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item-master/item-master.service */ "./src/app/restaurants/admin/inventory/item-master/item-master.service.ts");
/* harmony import */ var _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../KOT/menu-master/menu-master.service */ "./src/app/restaurants/admin/KOT/menu-master/menu-master.service.ts");
/* harmony import */ var _addrecipes_addrecipes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addrecipes/addrecipes.component */ "./src/app/restaurants/admin/inventory/recipes/addrecipes/addrecipes.component.ts");
/* harmony import */ var _editrecipes_editrecipes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editrecipes/editrecipes.component */ "./src/app/restaurants/admin/inventory/recipes/editrecipes/editrecipes.component.ts");
/* harmony import */ var _deleterecipes_deleterecipes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deleterecipes/deleterecipes.component */ "./src/app/restaurants/admin/inventory/recipes/deleterecipes/deleterecipes.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _view_ingredients_view_ingredients_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-ingredients/view-ingredients.component */ "./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var RecipesModule = /** @class */ (function () {
    function RecipesModule() {
    }
    RecipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _recipes_routing_module__WEBPACK_IMPORTED_MODULE_3__["RecipesRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_11__["DataTablesModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"]
            ],
            providers: [
                _recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"], _item_master_item_master_service__WEBPACK_IMPORTED_MODULE_5__["ItemMasterService"], _KOT_menu_master_menu_master_service__WEBPACK_IMPORTED_MODULE_6__["MenuMasterService"]
            ], schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            entryComponents: [
                _view_ingredients_view_ingredients_component__WEBPACK_IMPORTED_MODULE_14__["ViewIngredientsComponent"], _deleterecipes_deleterecipes_component__WEBPACK_IMPORTED_MODULE_9__["DeleterecipesComponent"]
            ],
            declarations: [_recipes_component__WEBPACK_IMPORTED_MODULE_2__["RecipesComponent"], _addrecipes_addrecipes_component__WEBPACK_IMPORTED_MODULE_7__["AddrecipesComponent"], _editrecipes_editrecipes_component__WEBPACK_IMPORTED_MODULE_8__["EditrecipesComponent"], _deleterecipes_deleterecipes_component__WEBPACK_IMPORTED_MODULE_9__["DeleterecipesComponent"], _view_ingredients_view_ingredients_component__WEBPACK_IMPORTED_MODULE_14__["ViewIngredientsComponent"]]
        })
    ], RecipesModule);
    return RecipesModule;
}());



/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h6{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n}\r\ntable{\r\n    text-align: center;\r\n    font-family: 'Times New Roman', Times, serif;\r\n    font-size: 14px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <table datatable id=\"example\" class=\"row-border hover\" cellspacing=\"0\" width=\"100%\">\n    <thead>\n      <th>Ingredients Id</th>\n      <th>Item Name</th>\n      <th>Quantity</th>\n      <th>Unit</th>\n    </thead>\n    <tbody *ngIf=\"ingredients?.length > 0\">\n      <tr *ngFor=\"let in of ingredients\">\n        <td>{{in.ingredientId}}</td>\n        <td>{{in.itemName}}</td>\n        <td>{{in.quantity}}</td>\n        <td>{{in.unit}}</td>\n      </tr>\n    </tbody>\n    <tbody *ngIf=\"ingredients?.length == 0\">\n      <tr>\n        <td class=\"no-data-available\" colspan=\"4\">No Data Available in datatable</td>\n      </tr>\n    </tbody>\n  </table>\n  <mat-divider style=\"margin-top: 10px; margin-bottom: 10px;\"></mat-divider>\n  <button mat-button style=\"float: right;\" (click)=\"onNoClick()\" tabindex=\"-1\">Close</button>\n</div>"

/***/ }),

/***/ "./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ViewIngredientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewIngredientsComponent", function() { return ViewIngredientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes.service */ "./src/app/restaurants/admin/inventory/recipes/recipes.service.ts");
/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes */ "./src/app/restaurants/admin/inventory/recipes/recipes.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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




var ViewIngredientsComponent = /** @class */ (function () {
    function ViewIngredientsComponent(recipesService, dialogRef, data) {
        this.recipesService = recipesService;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ViewIngredientsComponent.prototype.ngOnInit = function () {
        this.ingredients = [];
        this.recipes = this.data;
        this.recipesId = this.recipes.recipesId;
        this.getRecipes();
    };
    ViewIngredientsComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipesService.getRecipes(this.recipesId).subscribe(function (data) {
            _this.recipes = data;
            _this.ingredients = _this.recipes.ingredients;
            var i;
            for (i = 0; i < _this.ingredients.length; i++) {
                if (_this.ingredients[i].unit == 'Gram' || _this.ingredients[i].unit == 'MilliLitre' || _this.ingredients[i].unit == 'Pieces') {
                    _this.ingredients[i].quantity = _this.ingredients[i].quantity;
                }
                else if (_this.ingredients[i].unit == 'KiloGram' || _this.ingredients[i].unit == 'Litre') {
                    _this.ingredients[i].quantity = _this.ingredients[i].quantity / 1000;
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    ViewIngredientsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ViewIngredientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-ingredients',
            template: __webpack_require__(/*! ./view-ingredients.component.html */ "./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.html"),
            styles: [__webpack_require__(/*! ./view-ingredients.component.css */ "./src/app/restaurants/admin/inventory/recipes/view-ingredients/view-ingredients.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _recipes__WEBPACK_IMPORTED_MODULE_2__["Recipes"]])
    ], ViewIngredientsComponent);
    return ViewIngredientsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=inventory-recipes-recipes-module.js.map