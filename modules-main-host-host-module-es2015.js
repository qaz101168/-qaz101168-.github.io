(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-host-host-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/host/host.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/host/host.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\r\n    <div class=\"jumbotron jumbotron-fluid\">\r\n        <div class=\"container\">\r\n            <h1 class=\"display-4\">租借人專區</h1>\r\n            <p class=\"lead\">提供租借人相關基本聯絡資訊的頁面</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"my-3\" *ngIf=\"!isConfirmed && !isError\">\r\n        <form\r\n            [formGroup]=\"profileForm\"\r\n            (ngSubmit)=\"updateProfile(profileForm.value)\"\r\n        >\r\n            <div class=\"form-group\">\r\n                <label for=\"contract\">書籍交易位址</label>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"contract\"\r\n                    placeholder=\"輸入交易位址\"\r\n                    [formControlName]=\"'contract'\"\r\n                >\r\n            </div>\r\n            <div class=\"form-group\">\r\n                    <label for=\"autobiography\">租借人名稱</label>\r\n                    <textarea\r\n                        class=\"form-control\"\r\n                        id=\"autobiography\"\r\n                        placeholder=\"輸入名稱\"\r\n                        rows=\"1\"\r\n                        [formControlName]=\"'autobiography'\"\r\n                    ></textarea>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"contact\">聯絡方式</label>\r\n                <input\r\n                    type=\"text\"\r\n                    class=\"form-control\"\r\n                    id=\"contact\"\r\n                    placeholder=\"輸入聯絡方式\"\r\n                    [formControlName]=\"'contact'\"\r\n                >\r\n            </div>\r\n            \r\n            \r\n            <button type=\"button\" class=\"btn btn-info btn-circle\" (click)=\"addSkillField()\">+</button>\r\n            <div class=\"text-right\">\r\n                <button type=\"submit\" class=\"btn btn-primary\" >新增</button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n<div class=\"my-3\" *ngIf=\"isConfirmed\">\r\n    <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n        <strong>更新完成</strong>\r\n        <button type=\"button\" class=\"close\" (click)=\"resetConfirmState()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"my-3\" *ngIf=\"isError\">\r\n    <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n        <strong>發生錯誤</strong> {{ errorMessage }}\r\n        <button type=\"button\" class=\"close\" (click)=\"resetErrorState()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/main/host/host-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/main/host/host-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: HostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostRoutingModule", function() { return HostRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _host_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./host.component */ "./src/app/modules/main/host/host.component.ts");




const routes = [
    { path: '', component: _host_component__WEBPACK_IMPORTED_MODULE_3__["HostComponent"] }
];
let HostRoutingModule = class HostRoutingModule {
};
HostRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HostRoutingModule);



/***/ }),

/***/ "./src/app/modules/main/host/host.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/main/host/host.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-circle {\n  width: 30px;\n  height: 30px;\n  padding: 6px 0px;\n  border-radius: 15px;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.42857;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL2hvc3QvQzpcXFVzZXJzXFx1c2VyXFxEZXNrdG9wXFxCbG9ja2NoYWluUmVzdW1lL3NyY1xcYXBwXFxtb2R1bGVzXFxtYWluXFxob3N0XFxob3N0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL21haW4vaG9zdC9ob3N0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9ob3N0L2hvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBhZGRpbmc6IDZweCAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XHJcbn1cclxuIiwiLmJ0bi1jaXJjbGUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA2cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/main/host/host.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/host/host.component.ts ***!
  \*****************************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_base_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/base/component.base */ "./src/app/base/component.base.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let HostComponent = class HostComponent extends src_app_base_component_base__WEBPACK_IMPORTED_MODULE_3__["ComponentBase"] {
    constructor(injector, formBuilder) {
        super(injector);
        this.injector = injector;
        this.formBuilder = formBuilder;
        this.profileForm = this.formBuilder.group({
            contract: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.addressValidator]],
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            autobiography: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            skills: this.formBuilder.array([this.createSkillFields()])
        });
    }
    updateProfile(data) {
        this.isPending = true;
        this.setFormDisabled(this.profileForm);
        const resume = this.providerSvc.getResume(data.contract);
        const request = [];
        request.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(resume.methods.setContact(data.contact).send({ from: this.providerSvc.defaultAccount })), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(resume.methods.setAutobiography(data.autobiography).send({ from: this.providerSvc.defaultAccount })));
        for (const skill of data.skills) {
            request.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(resume.methods.setSkill(skill.class, skill.name).send({ from: this.providerSvc.defaultAccount })));
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(res => {
            this.transactionConfirmed();
            this.profileForm.reset();
            this.setFormDisabled(this.profileForm, false);
        }, err => {
            this.transactionError(err.message);
            this.profileForm.reset();
            this.setFormDisabled(this.profileForm, false);
        });
    }
    addSkillField() {
        const skills = this.profileForm.controls.skills;
        skills.push(this.createSkillFields());
    }
    removeSkillField(index) {
        const skills = this.profileForm.controls.skills;
        skills.removeAt(index);
    }
    createSkillFields() {
        return this.formBuilder.group({
            class: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
};
HostComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
HostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-host',
        template: __webpack_require__(/*! raw-loader!./host.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/host/host.component.html"),
        styles: [__webpack_require__(/*! ./host.component.scss */ "./src/app/modules/main/host/host.component.scss")]
    })
], HostComponent);



/***/ }),

/***/ "./src/app/modules/main/host/host.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/main/host/host.module.ts ***!
  \**************************************************/
/*! exports provided: HostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostModule", function() { return HostModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _host_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./host-routing.module */ "./src/app/modules/main/host/host-routing.module.ts");
/* harmony import */ var _host_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./host.component */ "./src/app/modules/main/host/host.component.ts");






let HostModule = class HostModule {
};
HostModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _host_component__WEBPACK_IMPORTED_MODULE_5__["HostComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _host_routing_module__WEBPACK_IMPORTED_MODULE_4__["HostRoutingModule"]
        ]
    })
], HostModule);



/***/ })

}]);
//# sourceMappingURL=modules-main-host-host-module-es2015.js.map