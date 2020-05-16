(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-government-government-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/government/components/create/government-create-resume.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/government/components/create/government-create-resume.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-3\" *ngIf=\"!isConfirmed && !isError\">\r\n    <form\r\n        [formGroup]=\"deployForm\"\r\n        (ngSubmit)=\"deployResume(deployForm.value)\"\r\n    >\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">書籍名稱</label>\r\n            <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"name\"\r\n                placeholder=\"輸入名稱\"\r\n                [formControlName]=\"'name'\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"address\">租借人帳戶位址</label>\r\n            <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"address\"\r\n                placeholder=\"輸入帳戶位址\"\r\n                [formControlName]=\"'address'\"\r\n            >\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n            <label for=\"age\">租借天數(最多31天)</label>\r\n            <select  class=\"form-control\" id=\"age\" [formControlName]=\"'age'\">\r\n                <option *ngFor=\"let age of ageRange\" [ngValue]=\"age\">{{ age }}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"deployForm.invalid || isPending\">建立</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isConfirmed\">\r\n    <div class=\"card\">\r\n        <ul class=\"list-group list-group-flush\">\r\n            <li class=\"list-group-item\">{{ resumeInfo.name }}</li>\r\n            <li class=\"list-group-item\">{{ resumeInfo.age }}</li>\r\n            <li class=\"list-group-item\">{{ hostGender }}</li>\r\n            <li class=\"list-group-item\"><b>{{ resumeInfo.address }}</b></li>\r\n        </ul>\r\n        <div class=\"card-body text-right\">\r\n            <button class=\"btn btn-primary\" (click)=\"resetConfirmState()\">關閉</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isError\">\r\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n        <strong>發生錯誤</strong> {{ errorMessage }}\r\n        <button type=\"button\" class=\"close\" (click)=\"resetErrorState()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/government/components/edit/government-edit-permission.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/government/components/edit/government-edit-permission.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-3\" *ngIf=\"!isConfirmed && !isError\">\r\n    <form\r\n        [formGroup]=\"editForm\"\r\n        (ngSubmit)=\"editPermission(editForm.value)\"\r\n    >\r\n        <div class=\"form-group\">\r\n            <label for=\"contract\">書籍交易位址</label>\r\n            <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"contract\"\r\n                placeholder=\"輸入交易位址\"\r\n                [formControlName]=\"'contract'\"\r\n            >\r\n        </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"address\">帳戶位址</label>\r\n              <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"address\"\r\n                  placeholder=\"輸入帳戶位址\"\r\n                  [formControlName]=\"'address'\"\r\n              >\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"permission\">編輯權限</label>\r\n              <select class=\"form-control\" id=\"permission\" [formControlName]=\"'permission'\">\r\n                  <option [ngValue]=\"true\">是</option>\r\n                  <option [ngValue]=\"false\">否</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"name\">廠商名稱</label>\r\n              <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  id=\"name\"\r\n                  placeholder=\"輸入廠商名稱\"\r\n                  [formControlName]=\"'name'\"\r\n              >\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"type\">機構類別</label>\r\n              <select class=\"form-control\" id=\"type\" [formControlName]=\"'type'\">\r\n                  <option [ngValue]=\"1\">販售商單位</option>\r\n                  \r\n              </select>\r\n          </div>\r\n          <div class=\"text-right\">\r\n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"editForm.invalid || isPending\">送出</button>\r\n          </div>\r\n      </form>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isConfirmed\">\r\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n        <strong>編輯完成</strong>\r\n        <button type=\"button\" class=\"close\" (click)=\"resetConfirmState()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isError\">\r\n  <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n      <strong>發生錯誤</strong> {{ errorMessage }}\r\n      <button type=\"button\" class=\"close\" (click)=\"resetErrorState()\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/government/government.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/government/government.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\r\n    <div class=\"jumbotron jumbotron-fluid\">\r\n        <div class=\"container\">\r\n            \r\n            <h1 class=\"display-4\">擁有者(權限)專區</h1>\r\n            <p class=\"lead\">提供書籍擁有者新增交易明細以及販售單位權限</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <ngb-tabset>\r\n        <ngb-tab title=\"建立交易\">\r\n            <ng-template ngbTabContent>\r\n                <app-government-create-resume></app-government-create-resume>\r\n                </ng-template>\r\n            </ngb-tab>\r\n        <ngb-tab title=\"編輯販售權限\">\r\n            <ng-template ngbTabContent>\r\n                <app-government-edit-permission></app-government-edit-permission>\r\n            </ng-template>\r\n        </ngb-tab>\r\n    </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main/government/components/create/government-create-resume.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/government/components/create/government-create-resume.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9nb3Zlcm5tZW50L2NvbXBvbmVudHMvY3JlYXRlL2dvdmVybm1lbnQtY3JlYXRlLXJlc3VtZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/main/government/components/create/government-create-resume.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/government/components/create/government-create-resume.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GovernmentCreateResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentCreateResumeComponent", function() { return GovernmentCreateResumeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/types */ "./src/app/types/index.ts");
/* harmony import */ var src_app_base_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base/component.base */ "./src/app/base/component.base.ts");





var GovernmentCreateResumeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GovernmentCreateResumeComponent, _super);
    function GovernmentCreateResumeComponent(injector, formBuider) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.formBuider = formBuider;
        _this.deployForm = _this.formBuider.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this.addressValidator]],
            age: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: [src_app_types__WEBPACK_IMPORTED_MODULE_3__["Gender"].male, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        return _this;
    }
    Object.defineProperty(GovernmentCreateResumeComponent.prototype, "ageRange", {
        get: function () {
            var range = [];
            for (var i = 1; i <= 31; i++) {
                range.push(i);
            }
            return range;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GovernmentCreateResumeComponent.prototype, "hostGender", {
        get: function () {
            var result = '';
            switch (this.resumeInfo.gender) {
                case src_app_types__WEBPACK_IMPORTED_MODULE_3__["Gender"].male:
                    result = '';
                    break;
                case src_app_types__WEBPACK_IMPORTED_MODULE_3__["Gender"].female:
                    result = '';
                    break;
                case src_app_types__WEBPACK_IMPORTED_MODULE_3__["Gender"].other:
                    result = '';
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    GovernmentCreateResumeComponent.prototype.deployResume = function (data) {
        var _this = this;
        if (Array.isArray(data.age)) {
            data.age = data.age[0];
        }
        this.isPending = true;
        this.setFormDisabled(this.deployForm);
        this.providerSvc.deployResume(data).subscribe(function (instance) {
            _this.transactionConfirmed();
            _this.setFormDisabled(_this.deployForm, false);
            _this.deployForm.reset();
            _this.resumeInfo = data;
            _this.resumeInfo.address = instance.address;
        }, function (err) {
            _this.transactionError(err.message);
            _this.setFormDisabled(_this.deployForm, false);
            _this.deployForm.reset();
        });
    };
    GovernmentCreateResumeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    GovernmentCreateResumeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-government-create-resume',
            template: __webpack_require__(/*! raw-loader!./government-create-resume.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/government/components/create/government-create-resume.component.html"),
            styles: [__webpack_require__(/*! ./government-create-resume.component.scss */ "./src/app/modules/main/government/components/create/government-create-resume.component.scss")]
        })
    ], GovernmentCreateResumeComponent);
    return GovernmentCreateResumeComponent;
}(src_app_base_component_base__WEBPACK_IMPORTED_MODULE_4__["ComponentBase"]));



/***/ }),

/***/ "./src/app/modules/main/government/components/edit/government-edit-permission.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/main/government/components/edit/government-edit-permission.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9nb3Zlcm5tZW50L2NvbXBvbmVudHMvZWRpdC9nb3Zlcm5tZW50LWVkaXQtcGVybWlzc2lvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/main/government/components/edit/government-edit-permission.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/main/government/components/edit/government-edit-permission.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: GovernmentEditPermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentEditPermissionComponent", function() { return GovernmentEditPermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_base_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base/component.base */ "./src/app/base/component.base.ts");
/* harmony import */ var src_app_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/types */ "./src/app/types/index.ts");






var GovernmentEditPermissionComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GovernmentEditPermissionComponent, _super);
    function GovernmentEditPermissionComponent(injector, formBuilder) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.formBuilder = formBuilder;
        _this.editForm = _this.formBuilder.group({
            contract: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this.addressValidator]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this.addressValidator]],
            permission: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: [src_app_types__WEBPACK_IMPORTED_MODULE_5__["OrganizationType"].school, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        return _this;
    }
    GovernmentEditPermissionComponent.prototype.editPermission = function (data) {
        var _this = this;
        this.isPending = true;
        this.setFormDisabled(this.editForm);
        var resume = this.providerSvc.getResume(data.contract);
        if (data.permission) {
            this.providerSvc.executeMethod(resume.methods.setPermission(data.address, data.name, data.type, data.permission)
                .send({ from: this.providerSvc.defaultAccount })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (receipt) {
                _this.transactionConfirmed();
                _this.editForm.reset();
                _this.setFormDisabled(_this.editForm, false);
            }, function (err) {
                _this.transactionError(err.message);
                _this.editForm.reset();
                _this.setFormDisabled(_this.editForm, false);
            });
        }
        else {
            this.providerSvc.executeMethod(resume.methods.removePermission(data.address)
                .send({ from: this.providerSvc.defaultAccount })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (receipt) {
                _this.transactionConfirmed();
                _this.editForm.reset();
                _this.setFormDisabled(_this.editForm, false);
            }, function (err) {
                _this.transactionError(err.message);
                _this.editForm.reset();
                _this.setFormDisabled(_this.editForm, false);
            });
        }
    };
    GovernmentEditPermissionComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    GovernmentEditPermissionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-government-edit-permission',
            template: __webpack_require__(/*! raw-loader!./government-edit-permission.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/government/components/edit/government-edit-permission.component.html"),
            styles: [__webpack_require__(/*! ./government-edit-permission.component.scss */ "./src/app/modules/main/government/components/edit/government-edit-permission.component.scss")]
        })
    ], GovernmentEditPermissionComponent);
    return GovernmentEditPermissionComponent;
}(src_app_base_component_base__WEBPACK_IMPORTED_MODULE_4__["ComponentBase"]));



/***/ }),

/***/ "./src/app/modules/main/government/government-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/main/government/government-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: GovernmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentRoutingModule", function() { return GovernmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _government_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./government.component */ "./src/app/modules/main/government/government.component.ts");




var routes = [
    { path: '', component: _government_component__WEBPACK_IMPORTED_MODULE_3__["GovernmentComponent"] }
];
var GovernmentRoutingModule = /** @class */ (function () {
    function GovernmentRoutingModule() {
    }
    GovernmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GovernmentRoutingModule);
    return GovernmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/main/government/government.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/main/government/government.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9nb3Zlcm5tZW50L2dvdmVybm1lbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/main/government/government.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/main/government/government.component.ts ***!
  \*****************************************************************/
/*! exports provided: GovernmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentComponent", function() { return GovernmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GovernmentComponent = /** @class */ (function () {
    function GovernmentComponent() {
    }
    GovernmentComponent.prototype.ngOnInit = function () {
    };
    GovernmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-government',
            template: __webpack_require__(/*! raw-loader!./government.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/government/government.component.html"),
            styles: [__webpack_require__(/*! ./government.component.scss */ "./src/app/modules/main/government/government.component.scss")]
        })
    ], GovernmentComponent);
    return GovernmentComponent;
}());



/***/ }),

/***/ "./src/app/modules/main/government/government.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/main/government/government.module.ts ***!
  \**************************************************************/
/*! exports provided: GovernmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentModule", function() { return GovernmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/bootstrap/bootstrap.module */ "./src/app/modules/shared/bootstrap/bootstrap.module.ts");
/* harmony import */ var _government_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./government-routing.module */ "./src/app/modules/main/government/government-routing.module.ts");
/* harmony import */ var _government_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./government.component */ "./src/app/modules/main/government/government.component.ts");
/* harmony import */ var _components_create_government_create_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create/government-create-resume.component */ "./src/app/modules/main/government/components/create/government-create-resume.component.ts");
/* harmony import */ var _components_edit_government_edit_permission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/edit/government-edit-permission.component */ "./src/app/modules/main/government/components/edit/government-edit-permission.component.ts");









var GovernmentModule = /** @class */ (function () {
    function GovernmentModule() {
    }
    GovernmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _government_component__WEBPACK_IMPORTED_MODULE_6__["GovernmentComponent"],
                _components_create_government_create_resume_component__WEBPACK_IMPORTED_MODULE_7__["GovernmentCreateResumeComponent"],
                _components_edit_government_edit_permission_component__WEBPACK_IMPORTED_MODULE_8__["GovernmentEditPermissionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["BootstrapModule"],
                _government_routing_module__WEBPACK_IMPORTED_MODULE_5__["GovernmentRoutingModule"]
            ]
        })
    ], GovernmentModule);
    return GovernmentModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-main-government-government-module-es5.js.map