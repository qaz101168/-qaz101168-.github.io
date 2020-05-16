(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-main-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/main/home/home.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/main/home/home.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-3\">\r\n    <form\r\n        [formGroup]=\"contractForm\"\r\n        (ngSubmit)=\"getProfile(contractForm.value.contract)\"\r\n    >\r\n        <div class=\"input-group mb-2 mr-sm-2\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"輸入交易位址\" [formControlName]=\"'contract'\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"contractForm.invalid\">查詢</button>\r\n        </div>\r\n    </form>\r\n    <div class=\"card\" *ngIf=\"loaded && profile\">\r\n        <div class=\"card-body\">\r\n            <h2 class=\"card-title\">Book Name:{{ profile.name }}</h2>\r\n        </div>\r\n        \r\n        <div class=\"card-body\">\r\n            <h3>租借人名稱</h3>\r\n            <p><b>{{ profile.autobiography }}</b></p>\r\n            <hr>\r\n        </div>\r\n\r\n        <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\"><b>租借天數：</b>{{ profile.age }}</li>\r\n                <li class=\"list-group-item\"><b>聯絡電話：</b>{{ profile.contact }}</li>\r\n                <li class=\"list-group-item\"><b>租借人帳戶：</b>{{ profile.account }}</li>\r\n                <br>\r\n            </ul>\r\n        \r\n        <div class=\"card-body\">\r\n            <h3>販售資訊</h3>  \r\n            <hr>\r\n            \r\n        </div>\r\n        <ul class=\"list-group list-group-flush\" *ngFor=\"let edu of profile.educations.items\">\r\n            <li class=\"list-group-item\"><b>廠商名稱:：</b>{{ edu.schoolName }}</li>\r\n            <li class=\"list-group-item\"><b>販售價格：</b>{{ edu.major }}</li>\r\n            \r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/main/home/home-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/main/home/home-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/main/home/home.component.ts");




var routes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/main/home/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/main/home/home.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/main/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_base_component_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/base/component.base */ "./src/app/base/component.base.ts");
/* harmony import */ var src_app_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/types */ "./src/app/types/index.ts");







var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(injector, formBuilder) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.formBuilder = formBuilder;
        _this.profile = null;
        _this.skills = null;
        _this.loaded = false;
        _this.contractForm = _this.formBuilder.group({
            contract: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _this.addressValidator]]
        });
        return _this;
    }
    HomeComponent.prototype.getProfile = function (contract) {
        var _this = this;
        var resume = this.providerSvc.getResume(contract);
        var countReq = [];
        this.loaded = true;
        this.profile = new src_app_types__WEBPACK_IMPORTED_MODULE_6__["ProfileModel"](resume);
        countReq.push(this.providerSvc.executeMethod(resume.methods.getEducationCount().call()));
        countReq.push(this.providerSvc.executeMethod(resume.methods.getExperienceCount().call()));
        countReq.push(this.providerSvc.executeMethod(resume.methods.getSkillCount().call()));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(countReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (res) {
            _this.profile.setCounts(res);
            return _this.profile.setEducations();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.profile.setExperiences(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.profile.setSkills(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(function () {
            _this.dealSkills();
            _this.loaded = true;
        });
    };
    HomeComponent.prototype.dealSkills = function () {
        var skills = this.profile.skills.items;
        var classBuffer = skills.map(function (x) { return x.class; });
        var noRepeatClass = classBuffer.filter(function (val, i, arr) { return arr.indexOf(val) === i; });
        var sk = [];
        noRepeatClass.forEach(function (key) {
            sk.push({
                class: key,
                items: skills.filter(function (x) { return x.class === key; }).map(function (x) { return x.name; })
            });
        });
        this.skills = sk;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/main/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}(src_app_base_component_base__WEBPACK_IMPORTED_MODULE_5__["ComponentBase"]));



/***/ }),

/***/ "./src/app/modules/main/home/home.module.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/main/home/home.module.ts ***!
  \**************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/main/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.component */ "./src/app/modules/main/home/home.component.ts");






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-main-home-home-module-es5.js.map