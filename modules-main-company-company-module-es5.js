(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-company-company-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/company/company.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/company/company.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\r\n  <div class=\"jumbotron jumbotron-fluid\">\r\n      <div class=\"container\">\r\n          <h1 class=\"display-4\">印刷商單位專區</h1>\r\n          <p class=\"lead\">提供印刷單位填寫名稱及印刷日期</p>\r\n      </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <ngb-tabset>\r\n      <ngb-tab title=\"填寫印刷資訊\">\r\n          <ng-template ngbTabContent>\r\n              <app-company-experience-add></app-company-experience-add>\r\n          </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"填寫二刷時間\">\r\n          <ng-template ngbTabContent>\r\n              <app-company-experience-end></app-company-experience-end>\r\n          </ng-template>\r\n      </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/company/components/date/company-experience-end.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/company/components/date/company-experience-end.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-3\" *ngIf=\"!isConfirmed && !isError\">\r\n    <form\r\n        [formGroup]=\"endDateForm\"\r\n        (ngSubmit)=\"setEndDate(endDateForm.value)\"\r\n    >\r\n        <div class=\"form-group\">\r\n            <label for=\"contract\">履歷位址</label>\r\n            <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"contract\"\r\n                placeholder=\"輸入履歷位址\"\r\n                [formControlName]=\"'contract'\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>離職日</label>\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                    ngbDatepicker #d=\"ngbDatepicker\" [formControlName]=\"'endDate'\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">+</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"endDateForm.invalid || isPending\">確定</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isConfirmed\">\r\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n        <strong>編輯完成</strong>\r\n        <button type=\"button\" class=\"close\" (click)=\"resetConfirmState()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isError\">\r\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n        <strong>發生錯誤</strong> {{ errorMessage }}\r\n        <button type=\"button\" class=\"close\" (click)=\"resetErrorState()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/company/components/experience/company-experience-add.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/company/components/experience/company-experience-add.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"my-3\" *ngIf=\"!isConfirmed && !isError\">\r\n    <form\r\n        [formGroup]=\"experienceForm\"\r\n        (ngSubmit)=\"addExperience(experienceForm.value)\"\r\n    >\r\n        <div class=\"form-group\">\r\n            <label for=\"contract\">履歷位址</label>\r\n            <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"contract\"\r\n                placeholder=\"輸入履歷位址\"\r\n                [formControlName]=\"'contract'\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"position\">印刷廠商</label>\r\n            <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"position\"\r\n                placeholder=\"輸入職稱\"\r\n                [formControlName]=\"'position'\"\r\n            >\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>印刷日</label>\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                    ngbDatepicker #d=\"ngbDatepicker\" [formControlName]=\"'startDate'\">\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">+</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"text-right\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"experienceForm.invalid || isPending\">新增</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isConfirmed\">\r\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n        <strong>編輯完成</strong>\r\n        <button type=\"button\" class=\"close\" (click)=\"resetConfirmState()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isError\">\r\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n        <strong>發生錯誤</strong> {{ errorMessage }}\r\n        <button type=\"button\" class=\"close\" (click)=\"resetErrorState()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/main/company/company-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/main/company/company-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.component */ "./src/app/modules/main/company/company.component.ts");




var routes = [
    { path: '', component: _company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"] }
];
var CompanyRoutingModule = /** @class */ (function () {
    function CompanyRoutingModule() {
    }
    CompanyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CompanyRoutingModule);
    return CompanyRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/main/company/company.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/modules/main/company/company.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/main/company/company.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/main/company/company.component.ts ***!
  \***********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! raw-loader!./company.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.scss */ "./src/app/modules/main/company/company.component.scss")]
        })
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/modules/main/company/company.module.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/main/company/company.module.ts ***!
  \********************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/bootstrap/bootstrap.module */ "./src/app/modules/shared/bootstrap/bootstrap.module.ts");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/modules/main/company/company-routing.module.ts");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company.component */ "./src/app/modules/main/company/company.component.ts");
/* harmony import */ var _components_experience_company_experience_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/experience/company-experience-add.component */ "./src/app/modules/main/company/components/experience/company-experience-add.component.ts");
/* harmony import */ var _components_date_company_experience_end_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/date/company-experience-end.component */ "./src/app/modules/main/company/components/date/company-experience-end.component.ts");









var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"],
                _components_experience_company_experience_add_component__WEBPACK_IMPORTED_MODULE_7__["CompanyExperienceAddComponent"],
                _components_date_company_experience_end_component__WEBPACK_IMPORTED_MODULE_8__["CompanyExperienceEndComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_bootstrap_bootstrap_module__WEBPACK_IMPORTED_MODULE_4__["BootstrapModule"],
                _company_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanyRoutingModule"]
            ]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ }),

/***/ "./src/app/modules/main/company/components/date/company-experience-end.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/main/company/components/date/company-experience-end.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wYW55L2NvbXBvbmVudHMvZGF0ZS9jb21wYW55LWV4cGVyaWVuY2UtZW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/main/company/components/date/company-experience-end.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/main/company/components/date/company-experience-end.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CompanyExperienceEndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyExperienceEndComponent", function() { return CompanyExperienceEndComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_base_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base/component.base */ "./src/app/base/component.base.ts");





var CompanyExperienceEndComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompanyExperienceEndComponent, _super);
    function CompanyExperienceEndComponent(injector, formBuilder) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.formBuilder = formBuilder;
        _this.endDateForm = _this.formBuilder.group({
            contract: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this.addressValidator]],
            endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        return _this;
    }
    CompanyExperienceEndComponent.prototype.setEndDate = function (data) {
        var _this = this;
        data.endDate = new Date(data.endDate.year, data.endDate.month - 1, data.endDate.day).valueOf();
        this.isPending = true;
        this.setFormDisabled(this.endDateForm);
        var resume = this.providerSvc.getResume(data.contract);
        this.providerSvc.executeMethod(resume.methods.setJobEndDate(data.endDate)
            .send({ from: this.providerSvc.defaultAccount })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (receipt) {
            _this.transactionConfirmed();
            _this.endDateForm.reset();
            _this.setFormDisabled(_this.endDateForm, false);
        }, function (err) {
            _this.transactionError();
            _this.endDateForm.reset();
            _this.setFormDisabled(_this.endDateForm, false);
        });
    };
    CompanyExperienceEndComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    CompanyExperienceEndComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-experience-end',
            template: __webpack_require__(/*! raw-loader!./company-experience-end.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/company/components/date/company-experience-end.component.html"),
            styles: [__webpack_require__(/*! ./company-experience-end.component.scss */ "./src/app/modules/main/company/components/date/company-experience-end.component.scss")]
        })
    ], CompanyExperienceEndComponent);
    return CompanyExperienceEndComponent;
}(src_app_base_component_base__WEBPACK_IMPORTED_MODULE_4__["ComponentBase"]));



/***/ }),

/***/ "./src/app/modules/main/company/components/experience/company-experience-add.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/main/company/components/experience/company-experience-add.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9jb21wYW55L2NvbXBvbmVudHMvZXhwZXJpZW5jZS9jb21wYW55LWV4cGVyaWVuY2UtYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/main/company/components/experience/company-experience-add.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/main/company/components/experience/company-experience-add.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CompanyExperienceAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyExperienceAddComponent", function() { return CompanyExperienceAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_base_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/base/component.base */ "./src/app/base/component.base.ts");





var CompanyExperienceAddComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CompanyExperienceAddComponent, _super);
    function CompanyExperienceAddComponent(injector, formBuilder) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.formBuilder = formBuilder;
        _this.experienceForm = _this.formBuilder.group({
            contract: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this.addressValidator]],
            position: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        return _this;
    }
    CompanyExperienceAddComponent.prototype.addExperience = function (data) {
        var _this = this;
        data.startDate = new Date(data.startDate.year, data.startDate.month - 1, data.startDate.day).valueOf();
        this.isPending = true;
        this.setFormDisabled(this.experienceForm);
        var resume = this.providerSvc.getResume(data.contract);
        this.providerSvc.executeMethod(resume.methods.setExperience(data.position, data.startDate)
            .send({ from: this.providerSvc.defaultAccount })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function (receipt) {
            _this.transactionConfirmed();
            _this.experienceForm.reset();
            _this.setFormDisabled(_this.experienceForm, false);
        }, function (err) {
            _this.transactionError();
            _this.experienceForm.reset();
            _this.setFormDisabled(_this.experienceForm, false);
        });
    };
    CompanyExperienceAddComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    CompanyExperienceAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-experience-add',
            template: __webpack_require__(/*! raw-loader!./company-experience-add.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/company/components/experience/company-experience-add.component.html"),
            styles: [__webpack_require__(/*! ./company-experience-add.component.scss */ "./src/app/modules/main/company/components/experience/company-experience-add.component.scss")]
        })
    ], CompanyExperienceAddComponent);
    return CompanyExperienceAddComponent;
}(src_app_base_component_base__WEBPACK_IMPORTED_MODULE_4__["ComponentBase"]));



/***/ })

}]);
//# sourceMappingURL=modules-main-company-company-module-es5.js.map