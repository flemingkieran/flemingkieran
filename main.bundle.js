webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__front_front_component__ = __webpack_require__("../../../../../src/app/front/front.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__front_front_component__["a" /* FrontComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div>\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nav_nav_module__ = __webpack_require__("../../../../../src/app/nav/nav.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_module__ = __webpack_require__("../../../../../src/app/gallery/gallery.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_module__ = __webpack_require__("../../../../../src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manager_manager_module__ = __webpack_require__("../../../../../src/app/manager/manager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_photo_api_service__ = __webpack_require__("../../../../../src/app/services/photo-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_photo_url_service__ = __webpack_require__("../../../../../src/app/services/photo-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__front_front_component__ = __webpack_require__("../../../../../src/app/front/front.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__front_front_component__["a" /* FrontComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__nav_nav_module__["a" /* NavModule */],
            __WEBPACK_IMPORTED_MODULE_5__gallery_gallery_module__["a" /* GalleryModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_7__manager_manager_module__["a" /* ManagerModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_11__services_auth_guard_service__["a" /* AuthGuardService */], __WEBPACK_IMPORTED_MODULE_9__services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_14__services_photo_url_service__["a" /* PhotoUrlService */], __WEBPACK_IMPORTED_MODULE_12__services_gallery_service__["a" /* GalleryService */], __WEBPACK_IMPORTED_MODULE_13__services_photo_api_service__["a" /* PhotoApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/front/front.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fullscreen{\r\n    position: absolute;\r\n    height: 100%;\r\n    width:100%;\r\n    top:0;\r\n    z-index: 1000;\r\n    background: black;\r\n}\r\n\r\n.fullscreen-content {\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.flex-item {\r\n    background: white;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n\r\n.flex-row {\r\n    width: 50%;\r\n    height: 50%;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}\r\n\r\n.flex-col {\r\n    width: 50%;\r\n    height: 50%;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    \r\n    -webkit-box-pack: center;\r\n    \r\n        -ms-flex-pack: center;\r\n    \r\n            justify-content: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-line-pack: center;\r\n        align-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/front/front.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fullscreen\">\n  <div class=\"fullscreen-content\">\n    <div class=\"flex-row\">\n    <div class=\"flex-col\">\n      <div class=\"button flex-item\" (click)=\"setServer(true)\">\n        Connect to Internet Server (Demo)\n      </div>\n      <div class=\"button flex-item\" (click)=\"setServer(false)\">\n        Connect to Local Server\n      </div>\n    </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/front/front.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FrontComponent = (function () {
    function FrontComponent(service, route) {
        this.service = service;
        this.route = route;
    }
    FrontComponent.prototype.ngOnInit = function () {
    };
    FrontComponent.prototype.setServer = function (isWeb) {
        this.service.setCurrentConnection(isWeb);
        this.route.navigate(['login']);
    };
    return FrontComponent;
}());
FrontComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-front',
        template: __webpack_require__("../../../../../src/app/front/front.component.html"),
        styles: [__webpack_require__("../../../../../src/app/front/front.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], FrontComponent);

var _a, _b;
//# sourceMappingURL=front.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-card/gallery-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n  height: inherit;\r\n  overflow: hidden;\r\n  display: block;\r\n  min-height: 100%;\r\n  margin: auto;\r\n   max-height: inherit;\r\n\r\n}\r\n\r\n\r\n.selected {\r\n  border-color: blue;\r\n  border-style: solid;\r\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n}    \r\n\r\n.selected .check-icon {\r\n  color: blue;\r\n}\r\n\r\n\r\n\r\n.rate-overlay {\r\n  position:absolute;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  font-size: 32px;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(255, 255, 255, 0.79);\r\n}\r\n\r\n.large-icon {\r\n  font-size: 46px;\r\n}\r\n\r\n.media-card {\r\n    background-color: #fff;\r\n    position:relative;\r\n    /*max-width: 300px;*/\r\n    height: 100%;\r\n     max-height: inherit;\r\n    max-width: inherit;\r\n\r\n}\r\n\r\n.card-detail {\r\n  position: absolute;\r\n  background: #007bff;\r\n  color: white;\r\n  z-index: 1000;\r\n}\r\n\r\n.small-size{\r\n  font-size: 12px;\r\n}\r\n\r\n.check-icon {\r\n  color: white;\r\n}\r\n\r\n\r\n.card-thumbnail {\r\n  /*min-height: 180px; */\r\n  border-radius: 4px;\r\n  height: 100%;\r\n   max-height: inherit;\r\n    max-width: inherit;\r\n\r\n  /*\r\n  max-width: 300px;\r\n  max-height: 200px;\r\n  */\r\n  overflow: hidden;\r\n  margin: 0;\r\n  display: block;\r\n}\r\n\r\n\r\n.right-corner {\r\n  position: absolute;\r\n  color: rgba(255, 255, 255, 1);\r\n  top: 0;\r\n  right: 0;\r\n  cursor: pointer; \r\n  z-index: 1000;\r\n}\r\n\r\n\r\n.preview {\r\n  position:absolute;\r\n  z-index: 300;\r\n  top:0;\r\n  height: inherit;\r\n  left: 0;\r\n}\r\n\r\n\r\n.options-overlay {\r\n  position: absolute;\r\n  top:0;\r\n  left:0;\r\n  z-index: 1000;\r\n}\r\n\r\n.tooltip {\r\n  position: absolute;\r\n  background: rgba(0, 0, 0, 0.2);\r\n  color:rgba(255, 255, 255, 1);\r\n}\r\n\r\n.option {\r\n  color: rgba(255, 255, 255, 1);\r\n  background: rgba(0, 0, 0, 0.2);\r\n  cursor: pointer;\r\n}\r\n\r\n.option:hover {\r\n  color: rgb(0, 147, 255);\r\n}\r\n\r\n.option:hover > .tooltip {\r\n  display:block;\r\n  opacity: .75;\r\n  \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-card/gallery-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"media-card\" \n[ngClass] = \"{'selected' : photo.selected}\" #card\n>\n<!--<img class=\"preview\"  *ngIf=\"showPreview && photo.kind == 'image'\"  src=\"http://localhost:8000/files/{{photo.id}}/preview/{{photo.id}}-big.jpg\"> -->\n    <!--<div \n        class=\"glyphicon glyphicon-ok-circle icon\" aria-hidden=\"true\"\n        (click)=\"onChecked($event)\"\n        [ngClass] = \"{'checked' : isChecked}\"\n        *ngIf=showCheck();>\n    </div>-->\n    <div class=\"rate-overlay\" *ngIf=\"rated\">\n        <i class=\"material-icons large-icon\">{{rateType}}</i>\n    </div>\n    <div class=\"card-thumbnail\"  ><!--(click)=\"showMedia($event)\"-->\n        <img *ngIf=\"!frame\" src=\"{{photoUrlService.getUrl(this.photo, true)}}\" alt=\"Photo here\"(dblclick)=\"openPhoto()\" (click)=\"previewPhoto()\">\n\n        <video (click) = \"openPhoto()\" class=\"preview\"  *ngIf=\"showPreview && photo.kind == 'video'\"  src=\"http://localhost:8000/files/photos/{{photo.id}}/preview/{{photo.id}}_small.mp4\" loop autoplay>\n        </video>\n        \n\n        <div class=\"right-corner\"   aria-hidden=\"true\">\n            <div class=\"flex-row space-around\" *ngIf=\"!showCheck() && photo.kind == 'video'\">\n                <div class=\"small-size\">{{photo.duration}}</div>\n                <i class=\"material-icons\">play_circle_outline</i>\n            </div>\n            <div class=\"check-icon\" *ngIf=\"showCheck()\" (click)=\"selectPhoto()\"> \n                <i class=\"material-icons space-around\">check_circle</i>\n            </div>\n        </div>\n\n        <div class=\"options-overlay\" *ngIf=\"showPreview\">\n            <div class=\"flex-row space-around\">\n                <div class=\"option\" (click)=\"onRate(3)\">\n                    <i class=\"material-icons\">archive</i>\n                    <div class=\"tooltip\">Archive</div>\n                </div>\n                <div class=\"option\" (click)=\"onRate(1)\">\n                    <i class=\"material-icons\">delete</i>\n                    <div class=\"tooltip\">Delete</div>\n                </div>\n                <div class=\"option\" (click)=\"onRate(5)\">\n                    <i class=\"material-icons\">favorite_border</i>\n                    <div class=\"tooltip\">Showcase</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--\n<div class=\"card-detail\" *ngIf=\"showPreview\">\n    {{photo.title}}\n    <div class=\"flex-row\" *ngIf=\"photo.tags\">\n        <div *ngFor=\"let item of photo.tags\">\n            {{tag}}\n        </div>\n    </div>\n</div>\n-->\n\n "

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-card/gallery-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_service__ = __webpack_require__("../../../../../src/app/gallery/selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__ = __webpack_require__("../../../../../src/app/services/photo-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_photo_url_service__ = __webpack_require__("../../../../../src/app/services/photo-url.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GalleryCardComponent = (function () {
    function GalleryCardComponent(router, photoUrlService, selectionService, cdRef, galleryService, photoApiService, route) {
        this.router = router;
        this.photoUrlService = photoUrlService;
        this.selectionService = selectionService;
        this.cdRef = cdRef;
        this.galleryService = galleryService;
        this.photoApiService = photoApiService;
        this.route = route;
        this.show_check = false;
        this.isChecked = false;
        this.previewTimer = null;
        this.isMouseIn = false;
        this.showPreview = false;
        this.showImage = true;
        this.rated = false;
        this.rateType = "";
    }
    GalleryCardComponent.prototype.selectPhoto = function () {
        this.selectionService.selectMedia(this.photo);
    };
    GalleryCardComponent.prototype.ngAfterViewChecked = function () {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        //console.log("checked card");
    };
    GalleryCardComponent.prototype.onMouseEnter = function () {
        this.showPreview = !this.showPreview;
        this.galleryService.photoHover(this.photo);
    };
    GalleryCardComponent.prototype.onMouseLeave = function () {
        this.showPreview = !this.showPreview;
        this.galleryService.photoHover(null);
    };
    GalleryCardComponent.prototype.ngOnInit = function () {
    };
    GalleryCardComponent.prototype.togglePlay = function () {
        this.showPreview = !this.showPreview;
    };
    GalleryCardComponent.prototype.previewPhoto = function () {
        if (this.selectionService.photosSelected) {
            this.selectPhoto();
        }
        else {
            this.galleryService.photoClicked(this.photo);
        }
    };
    GalleryCardComponent.prototype.openPhoto = function () {
        this.router.navigate(['media', this.photo.id], { relativeTo: this.route });
    };
    GalleryCardComponent.prototype.onRate = function (rating) {
        var _this = this;
        this.photo.rating = rating;
        this.photoApiService.updatePhoto(this.photo).subscribe(function (resp) { return _this.onUpdate(resp); });
    };
    GalleryCardComponent.prototype.onUpdate = function (resp) {
        console.log(resp);
        var types = ['archive', 'delete', 'favorite_border'];
        this.rateType = types[resp.rating % 3];
        this.rated = true;
    };
    GalleryCardComponent.prototype.doneExpand = function (e) {
    };
    GalleryCardComponent.prototype.showCheck = function () {
        return this.showPreview || this.photo.selected;
    };
    return GalleryCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GalleryCardComponent.prototype, "photo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GalleryCardComponent.prototype, "frame", void 0);
GalleryCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gallery-card',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-card/gallery-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-card/gallery-card.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_photo_url_service__["a" /* PhotoUrlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_photo_url_service__["a" /* PhotoUrlService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__selection_service__["a" /* SelectionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_gallery_service__["a" /* GalleryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__["a" /* PhotoApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__["a" /* PhotoApiService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object])
], GalleryCardComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=gallery-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/gallery-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".map-container {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n\r\n.grid-container {\r\n    position: absolute;\r\n    width: 50%;\r\n    left: 50px;\r\n    height: 100%;\r\n    z-index: 50;\r\n}\r\n\r\n.grid-blur {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 25;\r\n    -webkit-filter: blur(10px);\r\n            filter: blur(10px);\r\n    /* opacity: .9; */\r\n    background-color: #ffffff33\r\n}\r\n\r\n\r\n\r\n.bot {\r\n    position: absolute;\r\n    width: 40%;\r\n    height: 10%;\r\n    left: 60%;\r\n    bottom: 0;\r\n}\r\n\r\n\r\n.middle {\r\n    left: 50%;\r\n    width: 12%;\r\n    height: 100%;\r\n}\r\n\r\n.top {\r\n    position: absolute;\r\n    width: 40%;\r\n    height: 10%;\r\n    left: 60%;\r\n    top: 0;\r\n}\r\n    \r\n\r\n\r\n\r\n.main-layout {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.active {\r\n    background: lightblue;\r\n}\r\n\r\n\r\n\r\n.btn-light {\r\n    padding: .25rem;\r\n    background: white;\r\n}\r\n\r\n\r\n\r\n.form-control {\r\n    border-top: 0;\r\n    border-left: 0;\r\n    box-shadow: none;\r\n    border-radius: 0;\r\n}\r\n\r\n.small-select {\r\n    width: 100%;\r\n    padding: 0;\r\n    margin-left: 0;\r\n    font-size: 12px;\r\n}\r\n.side-bar{\r\n    width: 60px;\r\n    padding-left: 0;\r\n    position: absolute;\r\n    z-index: 100;\r\n}\r\n \r\nul {\r\n  font-size: 14px;\r\n  line-height: 3;\r\n  font-weight: 400;\r\n  padding-top: 50px;\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n    padding: 5px 0 0 5px;\r\n    display: block;\r\n}\r\n\r\nli:hover {\r\n    background-color: #d7daec;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/gallery-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-container\"   [@expandNav]=\"menuState\">\n    <app-top-bar></app-top-bar>\n</div>\n\n<router-outlet></router-outlet>\n<app-gallery-selection></app-gallery-selection>\n<div class=\"main-wrapper\">\n  <div class=\"main-inner\">\n  <div class=\"main-layout\">\n    <div class=\"main-wrapper\">\n  <ng-container >\n    <div class=\"grid-container\"    [@scaleBack]=\"menuState\" (@scaleBack.done)=\"expandGrid($event)\"  >\n      <app-grid [iconSize]=\"layoutSettings.iconSize\" [layoutStyle]=\"layoutSettings.layout\"></app-grid>\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"layoutSettings.layout\"  >\n    <div class=\"map-container\"   [@slideInOut]=\"menuState\" >\n      <app-map></app-map>\n    </div>\n  </ng-container>\n  </div>\n  </div>\n</div>\n<div class=\"grid-blur inshape\" *ngIf=\"layoutSettings.layout\">\n  \n</div>\n\n\n<div class=\"side-bar\">\n  <form [formGroup]=\"viewForm\">\n  <ul>\n    <li>\n      <div class=\"flex-col\">\n        <button class=\"btn-small btn-light btn \" (click)=\"toggleMap()\" [ngClass]=\"{'active': mapOn}\">\n          <div class=\"flex-col\">\n              <i class=\"material-icons\">map</i>\n              <div>Map</div>\n          </div>\n            \n          <!--\n          <label for=\"name\">Layout</label>\n        <select  class=\"form-control small-select\"  formControlName=\"layout\"\n                required\n                name=\"timeFromShift\">\n          <option *ngFor=\"let option of layoutOptions\" [value]=\"option\">{{option}}</option>\n        </select>\n        -->\n        </button>\n        <!--\n        <div class=\"icon\">\n          <span class=\"glyphicon glyphicon-object-align-horizontal\" aria-hidden=\"true\"></span> \n        </div>\n        -->\n      </div>\n    </li>\n    <!--\n    <li>\n      <div class=\"flex-row\">\n        <div class=\"list-text\">\n          <label for=\"name\">Size</label>\n        <select  class=\"form-control small-select\"  formControlName=\"size\"\n                required\n                name=\"timeFromShift\">\n          <option *ngFor=\"let option of iconOptions\" [value]=\"option\">{{option}}</option>\n        </select>\n        </div>\n      </div>\n    </li>\n    -->\n  </ul>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/gallery-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryLayoutComponent = (function () {
    function GalleryLayoutComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.layoutSettings = {
            width: 0,
            layout: true,
            iconSize: 1
        };
        this.menuState = "in";
        this.layoutOptions = ['Grid', 'Split'];
        this.iconOptions = ['Small', 'Medium', 'Large'];
        this.mapOn = true;
    }
    GalleryLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.viewForm = this.formBuilder.group({
            'size': ['Medium'],
            'layout': ['Split']
        });
        this.viewForm.valueChanges.subscribe(function (data) { return _this.onValueChange(data); });
    };
    GalleryLayoutComponent.prototype.onValueChange = function (data) {
        console.log(data);
        this.layoutSettings.iconSize = this.iconOptions.indexOf(data.size);
        //this.layoutSettings.layout = this.layoutOptions.indexOf(data.layout);
        /*
        if (this.layoutSettings.layout == 0) {
          this.layoutSettings.width = 100;
        }
        else {
          this.layoutSettings.width = 55;
        }*/
    };
    GalleryLayoutComponent.prototype.toggleMap = function () {
        console.log("Should close");
        //
        this.mapOn = !this.mapOn;
        if (this.mapOn) {
            this.layoutSettings.layout = true;
        }
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    GalleryLayoutComponent.prototype.expandGrid = function (e) {
        if (!this.mapOn) {
            this.layoutSettings.layout = false;
        }
        this.layoutSettings.iconSize = (this.layoutSettings.iconSize + 1) % 2;
        console.log(this.layoutSettings.layout);
        console.log("Changed");
    };
    return GalleryLayoutComponent;
}());
GalleryLayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gallery-layout',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-layout/gallery-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-layout/gallery-layout.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('slideInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    transform: 'translate3d(100%,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('expandNav', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    "width": 'calc(45vw)',
                    left: '55vw',
                    'background-color': '#ffffff00'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    width: '100%',
                    left: '0',
                    'background-color': 'white'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('scaleBack', [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    "width": 'calc(55% - 55px)',
                    height: '100%',
                    top: 0
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({
                    width: 'calc(100% - 55px)',
                    height: 'calc(100% - 55px)',
                    top: '30px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('400ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object])
], GalleryLayoutComponent);

var _a;
//# sourceMappingURL=gallery-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-day/grid-day.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-day/grid-day.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-day\" [ngStyle]=\"{'height': (section.size.height) + 'px', 'width': (section.size.width) + 'px',\n'top': section.position.top + 'px', 'left': section.position.left + 'px'}\">\n\n<!-- \n'transform' : 'translate3d(' + section.position.left + 'px,' +  section.position.top + 'px, 0)'}\">  -->\n\n<ng-container *ngIf=\"section.display\">\n  <div class=\"section-title\">\n  {{section.date | date}}\n  </div>\n  <div class=\"photo-day-container\" [ngStyle]=\"{ 'transform': 'scale(' + section.scale.x + ',' + section.scale.y + ')'}\" >\n  <ng-container *ngFor=\"let photo of section.photos; trackBy: photoByFn\">\n      <div class=\"photo-wrapper\" *ngIf=\"photo.content.show\" \n        [ngStyle]=\"{'height': photo.height  + 'px', 'width': photo.width  + 'px',\n        'top': photo.top + 'px', 'left': photo.left + 'px', 'transform': 'scale(' + photo.scale + ')'}\" >\n       \n                      <!-- \n                        'transform' : 'translate3d(' + photo.left + 'px,' +  photo.top + 'px, 0) scale(' + photo.scale + ')'}\">  -->\n        <app-gallery-card [photo]=\"photo.content\"> </app-gallery-card>\n      </div>\n  </ng-container>\n  </div>\n</ng-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-day/grid-day.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridDayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GridDayComponent = (function () {
    function GridDayComponent(cdRef) {
        this.cdRef = cdRef;
    }
    GridDayComponent.prototype.photoByFn = function (index, photo) {
        return photo.id;
    };
    GridDayComponent.prototype.ngOnInit = function () {
    };
    return GridDayComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridDayComponent.prototype, "section", void 0);
GridDayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grid-day',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-day/grid-day.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-day/grid-day.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object])
], GridDayComponent);

var _a;
//# sourceMappingURL=grid-day.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-scroll-bar/grid-scroll-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.month-name {\r\n    display:none;\r\n}\r\n\r\n\r\n.tooltip-month-name {\r\n    display:none;\r\n}\r\n\r\n.month-scroll:hover > .tooltip-month-name{\r\n    display: block;\r\n\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    position:absolute; \r\n    right: 110%;\r\n    \r\n\r\n}\r\n\r\n.custom-scroller {\r\n    cursor:pointer;\r\n    top: 0px;\r\n    max-height: 100%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    right: 0;\r\n    width: 40px;\r\n    z-index: 50;    \r\n\r\n}\r\n\r\nh3 {\r\n    font-size: 16px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.scroll-line {\r\n    position: absolute;\r\n    background-color: #bfbfbf;\r\n    height: 2px;\r\n    width: 10px;\r\n    will-change: transform;\r\n}\r\n\r\n.month-scroll {\r\n    background-color: #E1F5FE;\r\n    \r\n}\r\n\r\n.month-scroll-bar {\r\n    background-color: #0091EA;\r\n    height: 2px;\r\n    width: 20px;\r\n    \r\n}\r\n\r\n.month-scroll:hover > .month-name{\r\n    display: block;\r\n\r\n    width: 120px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    border-radius: 6px;\r\n    padding: 5px 0;\r\n    position:absolute; \r\n    right: 110%;\r\n    \r\n\r\n}\r\n\r\n.static-month-name {\r\n    color: #000000ed;\r\n    font-size: 12px; \r\n    position: relative;\r\n    top: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-scroll-bar/grid-scroll-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-scroller\" #scrollbar (click)=\"onClick($event)\"  [ngStyle]=\"{'height': height + 'px'}\" [@fade]=\"fadeState\" (mouseenter)=\"hoverOn()\" (mouseleave)=\"hoverOff()\">\n  <div class=\"scroll-line\" [ngStyle]=\"{'transform': 'translate3d(0,' + scrollLocation + 'px, 0)', 'height': scrollSize + 'px'}\"></div>\n    <div class=\"month-scroll shadow-2\" *ngFor=\"let month of months\"[ngStyle]=\"{'height': (getMonthHeight(month)) + 'px'}\">\n      <div class=\"month-scroll-bar\">\n          \n      </div>   \n      <div *ngIf=\"getMonthHeight(month) > 22\" class=\"static-month-name\">\n          {{month.date | date:'MMM yy'}}\n      </div> \n      <div class=\"tooltip-month-name\">\n          \n          {{month.date | date:'MMM y'}}\n      </div>\n  </div>               \n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-scroll-bar/grid-scroll-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridScrollBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_service__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridScrollBarComponent = (function () {
    function GridScrollBarComponent(gridService, cdRef) {
        this.gridService = gridService;
        this.cdRef = cdRef;
        this.scrollSize = 1;
        this.fadeTimer = null;
        this.fadeState = "in";
        this.hover = false;
        this.onJump = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    GridScrollBarComponent.prototype.ngOnInit = function () {
    };
    GridScrollBarComponent.prototype.ngOnChanges = function (changes) {
        if (changes['groupHeight']) {
            this.scrollSize = (this.height) * (this.height / this.groupHeight);
            if (this.scrollSize > this.height) {
                this.scrollSize = this.height;
            }
        }
        this.softFade();
    };
    GridScrollBarComponent.prototype.hoverOn = function () {
        this.fadeState = 'in';
        this.hover = true;
    };
    GridScrollBarComponent.prototype.hoverOff = function () {
        this.hover = false;
        this.softFade();
    };
    GridScrollBarComponent.prototype.fadeIn = function () {
        this.fadeState = 'in';
    };
    GridScrollBarComponent.prototype.softFade = function () {
        var _this = this;
        this.fadeState = 'in';
        //this.cdRef.detectChanges();
        if (!this.fadeTimer) {
            this.fadeTimer = setTimeout(function (e) { return _this.fadeOut(e); }, 5000);
        }
    };
    GridScrollBarComponent.prototype.fadeOut = function (e) {
        if (!this.hover) {
            this.fadeState = 'out';
        }
        this.fadeTimer = null;
    };
    GridScrollBarComponent.prototype.getMonthHeight = function (month) {
        return (month.end - month.start) * (this.height / this.groupHeight);
    };
    GridScrollBarComponent.prototype.onClick = function (e) {
        var data = (e.clientY - 50) * (this.groupHeight / (this.height));
        this.onJump.emit(data);
    };
    return GridScrollBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridScrollBarComponent.prototype, "months", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridScrollBarComponent.prototype, "height", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridScrollBarComponent.prototype, "width", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridScrollBarComponent.prototype, "groupHeight", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridScrollBarComponent.prototype, "scrollLocation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], GridScrollBarComponent.prototype, "onJump", void 0);
GridScrollBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grid-scroll-bar',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-scroll-bar/grid-scroll-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-scroll-bar/grid-scroll-bar.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('fade', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({})),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('1000ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('50ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__grid_service__["a" /* GridService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__grid_service__["a" /* GridService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _b || Object])
], GridScrollBarComponent);

var _a, _b;
//# sourceMappingURL=grid-scroll-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-section.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GridScroll */
/* unused harmony export GridRow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GridPlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridDay; });
/* unused harmony export PhotoWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GridSection; });
var GridScroll = (function () {
    function GridScroll(minRowHeight, rowData, vH) {
        this.minRowHeight = minRowHeight;
        this.rowData = rowData;
        this.viewHeight = vH;
    }
    GridScroll.prototype.init = function () {
        var rowsPerView = Math.ceil(this.viewHeight / this.minRowHeight);
        this.arrayLength = 1 + rowsPerView;
        this.indices = [];
        this.ordering = [];
        this.fakeArray = [];
        this.lastPosition = 0;
        this.reset(this.arrayLength);
    };
    GridScroll.prototype.buildSearchTree = function () {
        var index = this.rowData.length / 2;
    };
    GridScroll.prototype.reset = function (rows) {
        var rowsPerView = Math.ceil(this.viewHeight / this.minRowHeight);
        this.arrayLength = 1 + rowsPerView;
        this.middleIndex = Math.floor(this.arrayLength / 2);
        if (rows < this.arrayLength) {
            this.arrayLength = rows;
            this.middleIndex = Math.floor(this.arrayLength / 2);
        }
        //console.log(rows);
        this.indices = [];
        this.ordering = [];
        this.fakeArray = [];
        for (var i = 0; i < this.arrayLength; i++) {
            this.indices[i] = i;
            this.ordering[i] = i;
            this.fakeArray[i] = i;
        }
        this.indexPositions = { '-1': this.arrayLength - 1, '1': 0 };
        if (this.arrayLength < 3) {
            this.minBuffer = { '-1': 0, '1': this.rowData[this.indices[this.ordering[this.middleIndex]]].position.top };
        }
        else {
            this.minBuffer = { '-1': 0, '1': this.rowData[this.indices[this.ordering[this.middleIndex + 1]]].position.top };
        }
        //console.log(this.middleIndex, this.indices[this.ordering[this.middleIndex+1]])
    };
    GridScroll.prototype.mod = function (n) {
        var m = this.arrayLength;
        return ((n % m) + m) % m;
    };
    GridScroll.prototype.updateIndices = function (amt, dir) {
        var base = this.indices[this.ordering[this.indexPositions[-dir]]] + dir;
        this.updates = [];
        if (base >= this.rowData.length || base < 0) {
            return;
        }
        if (base + (amt * dir) > this.rowData.length || base + (amt * dir) < -1) {
            amt = (this.rowData.length - (((base) * dir) % this.rowData.length)) % this.rowData.length;
        }
        if (amt === 0) {
            amt = 1;
        }
        //console.log(amt, base, this.rowData.length);
        for (var i = 0; i < amt; i++) {
            var index = this.indices[this.ordering[this.mod(this.indexPositions[dir] + (i * dir))]];
            var update = { old: index, new: null };
            this.indices[this.ordering[this.mod(this.indexPositions[dir] + (i * dir))]] = base + (i * dir);
            update.new = this.indices[this.ordering[this.mod(this.indexPositions[dir] + (i * dir))]];
            if (update.new != update.old) {
                this.updates.push(update);
            }
        }
        for (var i = 0; i < this.arrayLength; i++) {
            this.ordering[i] = this.mod(this.ordering[i] + (amt * dir));
        }
        var downLoc = this.indices[this.ordering[this.indexPositions[-1]]];
        var upLoc = this.indices[this.ordering[this.indexPositions[1]]];
        if (downLoc >= this.rowData.length - 1) {
            downLoc = this.rowData.length - 1;
            this.minBuffer = { '-1': this.viewHeight, '1': this.rowData[upLoc].size.height };
        }
        else if (upLoc <= 0) {
            this.minBuffer = { '-1': this.rowData[downLoc].size.height, '1': this.viewHeight };
        }
        else {
            this.minBuffer = { '-1': this.rowData[downLoc].size.height, '1': this.rowData[upLoc].size.height };
        }
        //console.log(this.indices);
        //console.log(this.ordering);
        //console.log(upLoc, amt, base);
    };
    GridScroll.prototype.getUpdates = function () {
        return this.updates;
    };
    GridScroll.prototype.getIndex = function (minIndex, maxIndex, scrollTop) {
        var currentIndex, currentElement;
        var groups = this.rowData;
        var scrollBot = scrollTop + this.viewHeight;
        //console.log({minIndex, maxIndex, scrollTop});
        while (minIndex <= maxIndex) {
            currentIndex = (minIndex + maxIndex) / 2 | 0;
            currentElement = groups[currentIndex];
            var groupTop = groups[currentIndex].position.top;
            var groupBot = groupTop + groups[currentIndex].size.height;
            //console.log(groupBot)
            if (groupBot <= scrollTop) {
                minIndex = currentIndex + 1;
            }
            else if (groupTop >= scrollBot) {
                maxIndex = currentIndex - 1;
            }
            else {
                break;
            }
        }
        //console.log({minIndex, maxIndex, currentIndex});
        return currentIndex;
    };
    GridScroll.prototype.checkDifference = function (scrollTop, dir) {
        var amt = 0;
        var diff = Math.abs(this.lastPosition - scrollTop);
        if (diff < this.minBuffer[dir]) {
            amt = 0;
        }
        else {
            var i1 = this.indices[this.ordering[this.indexPositions[-dir]]]; //Tweak
            var i2 = this.indices[this.ordering[this.middleIndex + dir]]; //+ Math.round((diff - this.minBuffer[dir]) / this.minRowHeight);
            var newIndex = (dir > 0) ? this.getIndex(i2, i1, scrollTop) : this.getIndex(i1, i2, scrollTop);
            amt = Math.abs(this.indices[this.ordering[this.middleIndex]] - newIndex);
        }
        /*
        else {
            let i1 = this.indices[this.ordering[this.mod(dir)]]; //Tweak
            let i2 = Math.round(scrollTop / this.minRowHeight);  this.indices[this.ordering[this.middleIndex + dir]] + ((diff - this.minBuffer[dir]) / this.minRowHeight);
            amt = (diff > 0) ? this.getIndex(i1, i2, scrollTop) : this.getIndex(i2, i1, scrollTop);
        }
        */
        return amt;
    };
    GridScroll.prototype.checkDisplay = function (scrollTop) {
        var dir = (this.lastPosition > scrollTop) ? -1 : 1;
        var amt = this.checkDifference(scrollTop, dir);
        if (amt > 0) {
            this.updateIndices(amt, dir);
            this.lastPosition = scrollTop;
            return true;
        }
        else {
            return false;
        }
    };
    return GridScroll;
}());

var GridRow = (function () {
    function GridRow(viewWidth, top, height, firstItem) {
        this.position = { top: 0, left: 0 };
        this.size = { height: 0, width: 0 };
        this.cursor = { top: 0, left: 0 };
        this.maxWidth = 720;
        this.days = [];
        this.display = false;
        this.size.height = firstItem.size.height;
        this.maxWidth = viewWidth;
        this.viewWidth = viewWidth;
        this.expectedWidth = firstItem.size.width;
        this.size.width = firstItem.size.width;
        this.position.top = top;
        this.position.left = 0;
        this.cursor = { top: 0, left: 0 };
        this.currentDay = firstItem;
        this.rowHeight = this.currentDay.size.height;
        this.rowMax = this.currentDay;
        this.rowTop = this.cursor.top + this.currentDay.dayPadding.top;
        this.currentDay.position.left = this.cursor.left;
        this.currentDay.position.top = this.cursor.top;
        this.lastDay = firstItem;
        this.days.push(firstItem);
    }
    GridRow.prototype.initRow = function (firstItem) {
        this.size.height = firstItem.size.height;
        this.expectedWidth = firstItem.size.width;
        this.size.width = firstItem.size.width;
        this.cursor = { top: 0, left: 0 };
        this.currentDay = firstItem;
        this.rowHeight = this.currentDay.size.height;
        this.rowMax = this.currentDay;
        this.rowTop = this.cursor.top + this.currentDay.dayPadding.top;
        this.currentDay.position.left = this.cursor.left;
        this.currentDay.position.top = this.cursor.top;
        this.lastDay = firstItem;
        this.days.push(firstItem);
    };
    GridRow.prototype.endRow = function () {
        var len = this.days.length;
        var space_per = (this.viewWidth - (this.cursor.left + this.lastDay.size.width)) / len;
        //let test = (this.viewWidth - (this.days[0].dayPadding.left * len));
        var vw = this.viewWidth;
        var totalRatio = 0;
        var temp = 0;
        var totalPadding = 0;
        for (var j_1 = 0; j_1 < this.days.length; j_1++) {
            var gridDay = this.days[j_1];
            if (gridDay.position.left != this.rowMax.position.left) {
                if (j_1 + 1 < this.days.length && this.days[j_1 + 1].position.top > this.rowTop) {
                    temp += gridDay.currentRatio;
                }
                else {
                    temp += gridDay.currentRatio;
                    totalPadding += gridDay.dayPadding.left;
                    totalRatio += (1 / temp);
                    temp = 0;
                }
            }
        }
        var trueHeight = this.rowMax.size.height;
        var mu = (this.viewWidth - totalPadding) / ((this.rowMax.size.width) + (trueHeight * totalRatio));
        var beta = trueHeight * mu;
        temp = 0;
        var tempIndexs = [];
        var left = 0;
        var j = 0;
        var top = 0;
        this.rowHeight = 0;
        while (j < this.days.length) {
            var gridDay = this.days[j];
            var pad = gridDay.dayPadding.top;
            if (j + 1 < this.days.length && this.days[j + 1].position.top > this.rowTop) {
                temp += gridDay.size.height;
                tempIndexs.push(j);
            }
            else {
                temp += gridDay.size.height;
                tempIndexs.push(j);
                var scale = beta / temp;
                top = 0;
                //gridDay.scale(scale);
                for (var i = 0; i < tempIndexs.length; i++) {
                    var currDay = this.days[tempIndexs[i]];
                    //let prevDay = this.days[tempIndexs[i-1]]
                    currDay.scaleDay(scale, this.maxSize);
                    currDay.position.top = this.rowTop + top;
                    currDay.position.left = left;
                    top += currDay.size.height * currDay.scale.y;
                }
                tempIndexs = [];
                temp = 0;
                left += (gridDay.size.width * gridDay.scale.x) + gridDay.dayPadding.left;
            }
            if (top > this.rowHeight) {
                this.rowHeight = top;
            }
            j++;
            top = 0;
        }
        this.cursor.top = this.rowTop + this.rowHeight; // lastDay.size.height;
        this.size.height = this.rowTop + this.rowHeight;
        this.cursor.left = 0;
    };
    GridRow.prototype.addBelow = function () {
        this.cursor.top += this.lastDay.size.height;
        this.currentDay.position.left = this.cursor.left;
        this.currentDay.position.top = this.cursor.top;
        if (this.currentDay.size.width < this.lastDay.size.width) {
            this.currentDay.size.width = this.lastDay.size.width;
            this.currentDay.currentRatio = (this.currentDay.size.height - this.currentDay.dayPadding.top) / (this.currentDay.size.width - this.currentDay.dayPadding.left);
        }
        if (this.rowHeight < (this.cursor.top - this.rowTop) + this.currentDay.size.height) {
            this.rowHeight = (this.cursor.top - this.rowTop) + this.currentDay.size.height;
            this.rowMax = { size: { height: this.rowHeight, width: this.currentDay.size.width }, dayPadding: { top: this.currentDay.dayPadding.top, left: this.currentDay.dayPadding.left }, position: { left: this.cursor.left } };
        }
        this.days.push(this.currentDay);
        this.lastDay = this.currentDay;
    };
    GridRow.prototype.addNext = function () {
        this.cursor.top = this.rowTop;
        this.cursor.left += this.lastDay.size.width;
        if (this.rowHeight < this.currentDay.size.height) {
            this.rowHeight = this.currentDay.size.height;
            this.rowMax = this.currentDay;
        }
        this.currentDay.position.left = this.cursor.left;
        this.currentDay.position.top = this.rowTop;
        this.days.push(this.currentDay);
        this.lastDay = this.currentDay;
    };
    GridRow.prototype.checkRow = function (item) {
        this.currentDay = item;
        if (((this.cursor.top - this.rowTop) + this.lastDay.size.height + item.size.height < this.rowHeight)
            || (this.cursor.top == this.rowTop && this.lastDay.rows == (this.currentDay.rows == 1))) {
            this.addBelow();
            return true;
        }
        else {
            var temp1 = 0;
            var temp2 = 0;
            var rH = this.rowHeight;
            var cD = item;
            var pD = this.lastDay;
            var eW = this.expectedWidth;
            if (this.rowHeight == item.size.height) {
                temp1 = item.size.width;
                temp2 = this.expectedWidth;
            }
            else if (this.rowHeight > item.size.height) {
                temp1 = ((this.rowHeight) * (1 / item.currentRatio));
                temp2 = this.expectedWidth;
            }
            else if (this.rowHeight < item.size.height) {
                temp1 = ((item.size.height) / (this.rowHeight)) * this.expectedWidth;
                temp2 = item.size.width;
            }
            var eq = temp1 + temp2;
            //console.log(rH, cD, pD, eW, eq);
            if (eq < this.viewWidth) {
                this.addNext();
                this.expectedWidth = eq;
                return true;
            }
            else {
                return false;
            }
        }
    };
    GridRow.prototype.reRender = function () {
    };
    GridRow.prototype.clearData = function (top) {
        this.position.top = top;
        this.position.left = 0;
        this.days = [];
    };
    GridRow.prototype.addItem = function (day) {
        if (this.days.length == 0) {
            this.initRow(day);
            console.log("Init Row");
            return true;
        }
        else if (this.checkRow(day)) {
            this.display = true;
            return true;
        }
        else {
            this.endRow();
            return false;
        }
    };
    return GridRow;
}());

var GridPlacement = (function () {
    function GridPlacement(vW, size, items, vH) {
        this.groupedItems = [];
        this.currentRow = [];
        this.dayPadding = { top: 20, left: 10 };
        this.position = { 'top': 0, 'left': 0 };
        this.viewWidth = vW;
        this.viewHeight = vH;
        this.size = size;
        this.groupedItems = items;
        this.minSize = this.size * .7;
        this.maxSize = this.size * 2;
    }
    GridPlacement.prototype.scrolled = function (scrollTop) {
        if (this.scrollHandler.checkDisplay(scrollTop)) {
            return this.scrollHandler.getUpdates();
        }
        else {
            return null;
        }
    };
    GridPlacement.prototype.checkMonth = function (date) {
        this.currentMonth.end = this.position.top;
        var temp = this.currentMonth.end;
        this.months.push(this.currentMonth);
        this.currentMonth = { start: temp, end: 0, date: date };
    };
    GridPlacement.prototype.getMonths = function () {
        return this.months;
    };
    GridPlacement.prototype.getTotalHeight = function () {
        return this.totalHeight;
    };
    GridPlacement.prototype.getRow = function (index) {
        return this.gridRows[index];
    };
    GridPlacement.prototype.init = function (vW, size) {
        this.viewWidth = vW;
        this.size = size;
        this.minSize = this.size * .7;
        this.maxSize = this.size * 1.5;
        this.lastTop = 0;
        var first = false;
        this.gridRows = [];
        this.currentMonth = { start: 0, end: 0, date: this.groupedItems[0].date };
        this.months = [];
        this.position = { top: 0, left: 0 };
        for (var i = 0; i < this.groupedItems.length; i++) {
            var gridDay = this.groupedItems[i];
            gridDay.initialize(this.minSize);
            gridDay.arrangePhotos(this.viewWidth, this.minSize, this.maxSize);
            if (!first) {
                this.currentGridRow = new GridRow(this.viewWidth, this.position.top, this.minSize, gridDay);
                this.checkMonth(gridDay.date);
                first = true;
            }
            else {
                if (!this.currentGridRow.addItem(gridDay)) {
                    this.position.top += this.currentGridRow.size.height;
                    this.gridRows.push(this.currentGridRow);
                    this.currentGridRow = new GridRow(this.viewWidth, this.position.top, this.minSize, gridDay);
                    this.checkMonth(gridDay.date);
                }
            }
        }
        this.currentGridRow.endRow();
        this.position.top += this.currentGridRow.size.height;
        this.gridRows.push(this.currentGridRow);
        this.totalHeight = this.position.top;
        this.currentMonth.end = this.position.top;
        this.months.push(this.currentMonth);
        this.scrollHandler = new GridScroll(this.minSize, this.gridRows, this.viewHeight);
        this.scrollHandler.init();
        return this.scrollHandler.fakeArray;
    };
    GridPlacement.prototype.resizedGrid = function (viewWidth, size) {
        this.viewWidth = viewWidth;
        this.size = size;
        this.minSize = this.size * .7;
        this.maxSize = this.size * 1.5;
        var rowIndex = 0;
        this.months = [];
        this.position.top = 0;
        var currentRow = this.gridRows[rowIndex];
        currentRow.clearData(0);
        for (var i = 0; i < this.groupedItems.length; i++) {
            var gridDay = this.groupedItems[i];
            gridDay.initialize(this.minSize);
            if (!currentRow.addItem(gridDay)) {
                rowIndex++;
                this.position.top += this.currentGridRow.size.height;
                currentRow = this.gridRows[rowIndex];
                currentRow.clearData(this.position.top);
                currentRow.addItem(gridDay);
                this.checkMonth(gridDay.date);
            }
        }
        this.currentGridRow.endRow();
        this.position.top += currentRow.size.height;
        this.currentMonth.end = this.position.top;
        this.months.push(this.currentMonth);
        this.scrollHandler.reset(this.scrollHandler.arrayLength);
        return this.scrollHandler.fakeArray;
    };
    GridPlacement.prototype.checkDisplay = function () {
        var rowIndex = 0;
        this.months = [];
        this.position.top = 0;
        var currentRow = this.gridRows[rowIndex];
        currentRow.clearData(0);
        for (var i = 0; i < this.groupedItems.length; i++) {
            var gridDay = this.groupedItems[i];
            gridDay.initialize(this.minSize);
            if (gridDay.display) {
                gridDay.arrangePhotos(this.viewWidth, this.minSize, this.maxSize);
                if (!currentRow.addItem(gridDay)) {
                    rowIndex++;
                    this.position.top += currentRow.size.height;
                    console.log(currentRow);
                    currentRow = this.gridRows[rowIndex];
                    currentRow.clearData(this.position.top);
                    currentRow.addItem(gridDay);
                    this.checkMonth(gridDay.date);
                }
            }
        }
        currentRow.endRow();
        this.position.top += currentRow.size.height;
        this.currentMonth.end = this.position.top;
        this.months.push(this.currentMonth);
        this.totalHeight = this.position.top;
        this.scrollHandler.reset(rowIndex + 1);
        return this.scrollHandler.fakeArray;
    };
    return GridPlacement;
}());

var GridDay = (function () {
    function GridDay(viewWidth, date, itemPadding, dayPadding) {
        this.name = "";
        this.size = { height: 0, width: 0 };
        this.position = { top: 0, left: 0 };
        this.padding = { top: 0, left: 0 };
        this.dayPadding = { top: 0, left: 0 };
        this.cursor = { top: 0, left: 0 };
        this.display = true;
        this.firstIndex = 0;
        this.scrollDisplay = false;
        this.maxWidth = 720;
        this.maxSize = 0;
        this.scale = { x: 1, y: 1 };
        this.minRow = 0;
        this.minSizes = { 'height': 0, 'width': 0 };
        //CONST_RATIO = 21/9;
        this.wrapped = false;
        this.photos = [];
        this.rowWidths = [];
        this.date = date;
        this.padding = itemPadding;
        this.dayPadding = dayPadding;
        this.size.height = 0;
        this.maxWidth = viewWidth;
        this.size.width = 0;
        this.position.top = 0;
        this.position.left = 0;
    }
    GridDay.prototype.resize = function (newHeight) {
        var viewWidth = 0;
        var minIndex = 0;
        var maxIndex = this.photos.length - 1;
        var currentIndex = (minIndex + maxIndex) / 2 | 0;
        //console.log(this.photos)
        //console.log(this.photos[currentIndex]);
        while (this.photos[currentIndex].left < viewWidth && currentIndex != maxIndex) {
            currentIndex += 1;
        }
        if (currentIndex == maxIndex) {
            return;
        }
        var cursor = { top: this.photos[currentIndex].height, left: 0 };
        for (var i = currentIndex; i < this.photos.length; i++) {
            var photo = this.photos[i];
            if (cursor.left + photo.width > viewWidth) {
                cursor.left = 0;
                cursor.top += photo.height + this.padding.top;
            }
            photo.left = cursor.left;
            photo.top = cursor.top;
            cursor.left += photo.width + this.padding.left;
        }
        this.size.height = cursor.top + this.photos[currentIndex].height + this.dayPadding.top;
        this.size.width = viewWidth + this.dayPadding.left;
    };
    GridDay.prototype.initRender = function (viewWidth, minSize, maxSize) {
        var CONST_RATIO = 21 / 9;
        var tWidth = 0;
        var display = false;
        var tCount = 0;
        for (var i = 0; i < this.photos.length; i++) {
            var photo_1 = this.photos[i];
            if (photo_1.content.show) {
                if (!display) {
                    display = true;
                    this.firstIndex = i;
                }
                tCount += 1;
                tWidth += photo_1.width;
                //break;
            }
        }
        this.display = display;
        var expectedRows = Math.ceil(Math.sqrt(tWidth / (minSize * CONST_RATIO)));
        var rows = expectedRows;
        if (rows > tCount) {
            rows = tCount;
        }
        this.rowWidth = tWidth / rows;
        var maxWidth = 0;
        if (this.rowWidth > viewWidth) {
            this.rowWidth = viewWidth;
        }
        var rowHeight = (1 / CONST_RATIO) * this.rowWidth / expectedRows;
        if (rowHeight < minSize) {
            rowHeight = minSize;
        }
        var pIndex = this.firstIndex;
        var photo = this.photos[pIndex];
        //console.log(this.date);
        //console.log(this.photos);
        //console.log(this.photos[0].height);
        var cursor = { left: 0, top: 0 };
        var currentRow = [];
        var photoRows = [];
        while (pIndex < this.photos.length) {
            while (pIndex < this.photos.length && cursor.left + (photo.width / 2) <= this.rowWidth) {
                cursor.left += photo.width;
                currentRow.push(photo);
                pIndex++;
                photo = this.photos[pIndex];
                while (pIndex < this.photos.length && !photo.content.show) {
                    pIndex++;
                    photo = this.photos[pIndex];
                }
            }
            photoRows.push(currentRow);
            if (cursor.left > this.maxRowWidth) {
                this.maxRowWidth = cursor.left;
            }
            this.rows++;
            cursor.left = 0;
            currentRow = [];
        }
        cursor = { left: 0, top: 0 };
        var currentRow = [];
        while (pIndex < this.photos.length) {
            while (pIndex < this.photos.length && cursor.left + (photo.width / 2) <= this.rowWidth) {
                cursor.left += photo.width;
                currentRow.push(photo);
                pIndex++;
                photo = this.photos[pIndex];
                while (pIndex < this.photos.length && !photo.content.show) {
                    pIndex++;
                    photo = this.photos[pIndex];
                }
            }
            cursor.top += this.buildRow(currentRow, cursor.top, this.rowWidth, CONST_RATIO, rowHeight, cursor.left, minSize, maxSize);
            //console.log(currentRow, top, this.rowWidth, CONST_RATIO, rowHeight, tWidth, minSize, maxSize);
            //console.log(cursor.top);
            this.rows++;
            cursor.left = 0;
            currentRow = [];
        }
        this.currentRatio = cursor.top / this.maxRowWidth;
        this.minSizes.height = this.rows * minSize;
        this.minSizes.width = this.minSizes.height / this.currentRatio;
        this.size.height = cursor.top; // + this.dayPadding.top;
        this.scale = { x: 1, y: 1 };
        //console.log({rowHeight: rowHeight, rowWidth: rowWidth, rows: rows})
        this.size.width = this.maxRowWidth; //+ this.dayPadding.left;
    };
    GridDay.prototype.checkDays = function () {
    };
    GridDay.prototype.reRender = function (viewWidth, minSize, maxSize) {
        var CONST_RATIO = 21 / 9;
        //this.rowWidth = viewWidth;     
        //var rowHeight = rowHeight = minSize;
        var totalWidth;
        this.rows = 0;
        var tWidth = 0;
        var display = false;
        var tCount = 0;
        for (var i = 0; i < this.photos.length; i++) {
            var photo_2 = this.photos[i];
            if (photo_2.content.show) {
                if (!display) {
                    display = true;
                    this.firstIndex = i;
                }
                tCount += 1;
                tWidth += photo_2.width;
                //break;
            }
        }
        this.display = display;
        if (!display) {
            return;
        }
        var expectedRows = Math.ceil(Math.sqrt(tWidth / (minSize * CONST_RATIO)));
        var rows = expectedRows;
        if (rows > tCount) {
            rows = tCount;
        }
        this.rowWidth = tWidth / rows;
        var maxWidth = 0;
        if (this.rowWidth > viewWidth) {
            this.rowWidth = viewWidth;
        }
        var rowHeight = (1 / CONST_RATIO) * this.rowWidth / expectedRows;
        if (rowHeight < minSize) {
            rowHeight = minSize;
        }
        var pIndex = this.firstIndex;
        var photo = this.photos[pIndex];
        //console.log(this.date);
        //console.log(this.photos);
        //console.log(this.photos[0].height);
        var cursor = { left: 0, top: 0 };
        var currentRow = [];
        while (pIndex < this.photos.length) {
            while (pIndex < this.photos.length && cursor.left + (photo.width / 2) <= this.rowWidth) {
                cursor.left += photo.width;
                currentRow.push(photo);
                pIndex++;
                photo = this.photos[pIndex];
                while (pIndex < this.photos.length && !photo.content.show) {
                    pIndex++;
                    photo = this.photos[pIndex];
                }
            }
            if (cursor.left > this.maxRowWidth) {
                this.maxRowWidth = cursor.left;
            }
            this.rows++;
            cursor.left = 0;
            currentRow = [];
        }
        this.currentRatio = cursor.top / this.maxRowWidth;
        this.minSizes.height = this.rows * minSize;
        this.minSizes.width = this.minSizes.height / this.currentRatio;
        this.size.height = cursor.top; // + this.dayPadding.top;
        this.scale = { x: 1, y: 1 };
        //console.log({rowHeight: rowHeight, rowWidth: rowWidth, rows: rows})
        this.size.width = this.maxRowWidth; //+ this.dayPadding.left;
    };
    GridDay.prototype.scaleDay = function (scaler, maxSize) {
        var tempHeight = ((this.size.height) * scaler);
        if (tempHeight > maxSize * this.rows) {
            //console.log(this.date);
            //console.log(this.size.height);
            //console.log(maxSize * this.rows);
            scaler = (maxSize * this.rows) / (this.size.height);
            tempHeight = ((this.size.height) * scaler);
        }
        scaler = tempHeight / this.size.height;
        this.scale.y = scaler;
        //this.size.height = tempHeight;
        this.scale.x = scaler;
        //this.size.width =  * scaler;
        /*
        for (var i = 0;  i < this.photos.length; i++) {
            let photo = this.photos[i];
            //photo.height *= scaler;
            //photo.width *= scaler;
            photo.scale *= scaler;
            photo.top *= scaler;
            photo.left *= scaler;
        }
        let nHeight = this.size.height;
        let nWidth = this.size.width;
        let mRow = this.minRow;
        this.minRow *= scaler;
        let nRow = this.minRow;
        */
    };
    GridDay.prototype.buildRow = function (currentRow, top, rowWidth, CONST_RATIO, rowHeight, tWidth, minSize, maxHeight) {
        //console.log(currentRow, top, rowWidth, CONST_RATIO, rowHeight, tWidth, minSize, maxHeight);
        var cursor = { left: 0, top: top };
        var nHeight = (rowHeight * rowWidth) / tWidth;
        var nWidth = rowWidth;
        if (nHeight < minSize) {
            nHeight = minSize;
            nWidth = (nHeight * tWidth) / rowHeight;
            this.rowWidth = nWidth;
        }
        if (nHeight > maxHeight) {
            nHeight = maxHeight;
            nWidth = (nHeight * tWidth) / rowHeight;
            this.rowWidth = nWidth;
        }
        var currentRowWidth = 0;
        for (var i = 0; i < currentRow.length; i++) {
            var photo = currentRow[i];
            var scaler = nHeight / photo.height;
            photo.scale = scaler;
            //photo.height = nHeight;
            //photo.width = photo.content.aspect_ratio * nHeight;
            //currentRowWidth += photo.width;
            photo.left = cursor.left;
            cursor.left += (photo.width * scaler);
            photo.top = cursor.top;
        }
        if (nHeight < this.minRow) {
            this.minRow = nHeight;
        }
        if (cursor.left > this.maxRowWidth) {
            this.maxRowWidth = cursor.left;
        }
        this.rowWidths.push(cursor.left);
        return nHeight;
    };
    GridDay.prototype.scaleRow = function () {
        var pIndex = this.firstIndex;
        var photo = this.photos[pIndex];
        var firstPhoto = photo;
        var oldHeight = photo.height;
        var cursor = { left: 0, top: 0 };
        var currentRow = [];
        var r = 0;
        //console.log(this.date);
        while (pIndex < this.photos.length) {
            var scaler = this.maxRowWidth / this.rowWidths[r];
            var oHeight = photo.height;
            var nHeight = oHeight * scaler;
            //console.log({oHeight, nHeight})
            this.size.height += (nHeight - oldHeight);
            while (pIndex < this.photos.length && cursor.left + (photo.width / 2) <= this.rowWidth) {
                cursor.left += photo.width;
                //photo.height *= scaler;
                //photo.width *= scaler;
                photo.scale = scaler;
                photo.top *= scaler;
                photo.left *= scaler;
                pIndex++;
                photo = this.photos[pIndex];
                while (pIndex < this.photos.length && !photo.content.show) {
                    pIndex++;
                    photo = this.photos[pIndex];
                }
            }
            cursor.left = 0;
            r++;
        }
    };
    GridDay.prototype.buildRows2 = function (viewWidth, minSize, maxSize) {
        var CONST_RATIO = 21 / 9;
        //console.log(this.size.height);
        var expectedRows = Math.ceil(Math.sqrt(this.size.width / (this.size.height * CONST_RATIO)));
        var rows = expectedRows;
        if (rows > this.photos.length) {
            rows = this.photos.length;
        }
        this.rowWidth = this.size.width / rows;
        var maxWidth = 0;
        if (this.rowWidth > viewWidth) {
            this.rowWidth = viewWidth;
        }
        var rowHeight = (1 / CONST_RATIO) * this.rowWidth / expectedRows;
        if (rowHeight < minSize) {
            rowHeight = minSize;
        }
        var totalWidth;
        var pIndex = this.firstIndex;
        var photo = this.photos[pIndex];
        var cursor = { left: 0, top: 0 };
        var currentRow = [];
        while (pIndex < this.photos.length) {
            while (pIndex < this.photos.length && cursor.left + (photo.width / 2) <= this.rowWidth) {
                cursor.left += photo.width;
                currentRow.push(photo);
                pIndex++;
                photo = this.photos[pIndex];
                while (pIndex < this.photos.length && !photo.content.show) {
                    pIndex++;
                    photo = this.photos[pIndex];
                }
            }
            cursor.top += this.buildRow(currentRow, cursor.top, this.rowWidth, CONST_RATIO, rowHeight, cursor.left, minSize, maxSize);
            this.rows++;
            cursor.left = 0;
            currentRow = [];
        }
        this.currentRatio = cursor.top / this.maxRowWidth;
        this.minSizes.height = this.rows * minSize;
        this.minSizes.width = this.minSizes.height / this.currentRatio;
        this.size.height = cursor.top; // + this.dayPadding.top;
        this.scale = { x: 1, y: 1 };
        //console.log({rowHeight: rowHeight, rowWidth: rowWidth, rows: rows})
        this.size.width = this.maxRowWidth; //+ this.dayPadding.left;
        //this.scaleRow();
    };
    GridDay.prototype.buildRow2 = function (currentRow, top, rowWidth, CONST_RATIO, rowHeight, tWidth, minSize, maxHeight) {
        //console.log(currentRow, top, rowWidth, CONST_RATIO, rowHeight, tWidth, minSize, maxHeight);
        var cursor = { left: 0, top: top };
        var nHeight = (rowHeight * rowWidth) / tWidth;
        var nWidth = rowWidth;
        var space = 0;
        if (nHeight > minSize * 1.2) {
            nHeight = minSize * 1.2;
            nWidth = (nHeight * tWidth) / rowHeight;
            //space = (rowWidth - nWidth) /2;
            cursor.left = space;
        }
        var currentRowWidth = 0;
        for (var i = 0; i < currentRow.length; i++) {
            var photo = currentRow[i];
            var scaler = nHeight / photo.height;
            photo.scale = scaler;
            //photo.height = nHeight;
            //photo.width = photo.content.aspect_ratio * nHeight;
            //currentRowWidth += photo.width;
            photo.left = cursor.left;
            cursor.left += (photo.width * scaler);
            photo.top = cursor.top;
        }
        if (nHeight < this.minRow) {
            this.minRow = nHeight;
        }
        this.rowWidths.push(cursor.left);
        return nHeight;
    };
    GridDay.prototype.arrangePhotos = function (viewWidth, minSize, maxSize) {
        var CONST_RATIO = 21 / 9;
        //console.log(this.size.height);
        var expectedRows = Math.ceil(Math.sqrt(this.size.width / (this.size.height * CONST_RATIO)));
        var rows = expectedRows;
        if (rows > this.photos.length) {
            rows = this.photos.length;
        }
        this.rowWidth = this.size.width / rows;
        var maxWidth = 0;
        if (this.rowWidth > viewWidth) {
            this.rowWidth = viewWidth;
        }
        var rowHeight = (1 / CONST_RATIO) * this.rowWidth / expectedRows;
        if (rowHeight < minSize) {
            rowHeight = minSize;
        }
        var totalWidth;
        var pIndex = this.firstIndex;
        var photo = this.photos[pIndex];
        //first pass
        var cursor = { left: 0, top: 0 };
        var currentRow = [];
        while (pIndex < this.photos.length) {
            while (pIndex < this.photos.length && cursor.left + (photo.width / 2) <= this.rowWidth) {
                cursor.left += photo.width;
                pIndex++;
                photo = this.photos[pIndex];
                while (pIndex < this.photos.length && !photo.content.show) {
                    pIndex++;
                    photo = this.photos[pIndex];
                }
            }
            if (cursor.left > this.maxRowWidth) {
                this.maxRowWidth = cursor.left;
            }
            this.rows++;
            cursor.left = 0;
        }
        //second pass
        cursor = { left: 0, top: 0 };
        var currentRow = [];
        pIndex = this.firstIndex;
        var photo = this.photos[pIndex];
        while (pIndex < this.photos.length) {
            while (pIndex < this.photos.length && cursor.left + (photo.width / 2) <= this.rowWidth) {
                cursor.left += photo.width;
                currentRow.push(photo);
                pIndex++;
                photo = this.photos[pIndex];
                while (pIndex < this.photos.length && !photo.content.show) {
                    pIndex++;
                    photo = this.photos[pIndex];
                }
            }
            if (pIndex - this.firstIndex == this.photos.length - 1 && currentRow.length > 2) {
                cursor.left += photo.width;
                currentRow.push(photo);
                pIndex++;
                photo = this.photos[pIndex];
            }
            cursor.top += this.buildRow2(currentRow, cursor.top, this.maxRowWidth, CONST_RATIO, rowHeight, cursor.left, minSize, maxSize);
            cursor.left = 0;
            currentRow = [];
        }
        this.currentRatio = cursor.top / this.maxRowWidth;
        this.minSizes.height = this.rows * minSize;
        this.minSizes.width = this.minSizes.height / this.currentRatio;
        this.size.height = cursor.top; // + this.dayPadding.top;
        this.scale = { x: 1, y: 1 };
        //console.log({rowHeight: rowHeight, rowWidth: rowWidth, rows: rows})
        this.size.width = this.maxRowWidth; //+ this.dayPadding.left;
        //this.scaleRow();
    };
    GridDay.prototype.buildRows = function (viewWidth, minSize) {
        var CONST_RATIO = 5 / 3;
        var expectedRows = Math.ceil(Math.sqrt(this.size.width / (this.size.height * CONST_RATIO)));
        var rows = expectedRows;
        if (rows > this.photos.length) {
            rows = this.photos.length;
        }
        var rowWidth = this.size.width / rows;
        var rowHeight = this.size.height;
        var maxWidth = 0;
        if (rowWidth > viewWidth) {
            rowWidth = viewWidth;
        }
        rowHeight = (1 / CONST_RATIO) * rowWidth / expectedRows;
        if (rowHeight < minSize) {
            rowHeight = minSize;
        }
        this.size.height = rowHeight + this.dayPadding.top;
        var pIndex = 0;
        for (var r = 0; r <= rows; r++) {
            var cursor = { left: 0, top: rowHeight * r };
            while (pIndex < this.photos.length) {
                var photo = this.photos[pIndex];
                photo.height = rowHeight;
                photo.width = photo.content.aspect_ratio * rowHeight;
                if (cursor.left + photo.width > rowWidth) {
                    this.rows += 1;
                    this.size.height += rowHeight;
                    break;
                }
                photo.top = cursor.top;
                photo.left = cursor.left;
                cursor.left += photo.width;
                pIndex++;
            }
            if (cursor.left > maxWidth) {
                maxWidth = cursor.left;
            }
        }
        //console.log({rowHeight: rowHeight, rowWidth: rowWidth, rows: rows})
        this.size.width = maxWidth + this.dayPadding.left;
    };
    GridDay.prototype.initialize = function (size) {
        this.scale = { x: 1, y: 1 };
        this.position.top = 0;
        this.position.left = 0;
        var cursor = 0;
        this.size = { width: 0, height: size };
        this.maxRowWidth = 0;
        this.rowWidth = 0;
        this.rows = 0;
        this.rowWidths = [];
        this.minRow = size;
        var display = false;
        var first = false;
        var firstIndex;
        for (var i = 0; i < this.photos.length; i++) {
            var photo = this.photos[i];
            if (!photo.content.show) {
                photo.scale = 0;
                photo.height = size;
                photo.width = photo.content.aspect_ratio * size;
                //photo.height = 0;
                //photo.width = 0;
                photo.display = false;
                continue;
            }
            if (!first) {
                this.firstIndex = i;
                first = true;
                display = true;
            }
            photo.scale = 1;
            photo.height = size;
            photo.width = photo.content.aspect_ratio * size;
            this.size.width += photo.width;
            photo.origin = cursor;
            cursor += photo.width;
        }
        this.display = display;
    };
    GridDay.prototype.addPhoto = function (photo) {
        var photoWrapper = new PhotoWrapper(photo);
        this.photos.push(photoWrapper);
    };
    return GridDay;
}());

var PhotoWrapper = (function () {
    function PhotoWrapper(photo) {
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.content = photo;
    }
    return PhotoWrapper;
}());

var GridSection = (function () {
    function GridSection(viewWidth, padding) {
        this.name = "";
        this.children = [];
        this.size = { height: 0, width: 0 };
        this.position = { top: 0, left: 0 };
        this.padding = { top: 0, left: 0 };
        this.cursor = { top: 0, left: 0 };
        this.display = true;
        this.maxWidth = 720;
        this.wrapped = false;
        this.photos = [];
        this.padding = padding;
        this.size.height = 0;
        this.maxWidth = viewWidth;
        this.size.width = 0;
        this.position.top = 0;
        this.position.left = 0;
    }
    GridSection.prototype.render = function (sizeIndex) {
        var sizeOptions = [150, 200, 300];
        this.position = { left: 0, top: 0 };
        this.cursor = { top: 0, left: 0 };
        this.size = { height: 0, width: 0 };
        var currentRow = [];
        var rowHeight = 0;
        var cSize = sizeOptions[sizeIndex];
        var first = true;
        this.wrapped = false;
        var i = 0;
        var display = false;
        for (i = 0; i < this.children.length; i++) {
            this.children[i].render(sizeIndex);
            var section = this.children[i];
            if (!section.display) {
                section.size.height = 0;
                section.size.width = 0;
                continue;
            }
            display = true;
            this.size.width = this.maxWidth;
            if (first) {
                first = false;
                this.size.height = section.size.height;
                rowHeight = section.size.height;
            }
            else {
                if (section.wrapped || section.size.width + this.cursor.left > this.maxWidth) {
                    this.cursor.left = 0;
                    this.cursor.top += rowHeight + this.padding.top;
                    rowHeight = section.size.height;
                    this.size.height += section.size.height + this.padding.top;
                    this.wrapped = true;
                }
                else {
                    rowHeight = section.size.height;
                }
            }
            section.position.top = this.cursor.top;
            section.position.left = this.cursor.left;
            this.cursor.left += section.size.width + this.padding.left;
        }
        var lastPhoto = null;
        for (i = 0; i < this.photos.length; i++) {
            var photo = this.photos[i];
            if (!photo.content.show) {
                photo.height = 0;
                photo.width = 0;
                photo.display = false;
                continue;
            }
            lastPhoto = photo;
            display = true;
            photo.height = cSize;
            photo.width = photo.content.aspect_ratio * cSize;
            if (first) {
                first = false;
                currentRow.push(photo);
                this.size.height = photo.height;
                this.size.width += photo.width + this.padding.left;
                photo.top = 0;
                photo.left = 0;
                rowHeight = photo.height;
                this.cursor.left += photo.width + this.padding.left;
            }
            else {
                if (photo.width + this.cursor.left > this.maxWidth) {
                    var expectedWidth = photo.width + this.cursor.left;
                    var newHeight = rowHeight * this.maxWidth / expectedWidth;
                    rowHeight = newHeight;
                    var left = 0;
                    for (var j in currentRow) {
                        currentRow[j].width *= newHeight / currentRow[j].height;
                        currentRow[j].left = left;
                        left += currentRow[j].width + this.padding.left;
                        currentRow[j].height = newHeight;
                    }
                    photo.width *= newHeight / photo.height;
                    photo.height = newHeight;
                    photo.top = this.cursor.top;
                    photo.left = left;
                    if (!this.wrapped) {
                        this.size.height = newHeight;
                        this.size.width = this.maxWidth;
                        this.wrapped = true;
                        this.cursor.left = 0;
                        this.cursor.top += rowHeight; //TODO: Add Padding too!
                    }
                    else {
                        this.cursor.left = 0;
                        this.cursor.top += rowHeight; //TODO: Add Padding too!
                        this.size.height += rowHeight;
                        this.size.width = this.maxWidth;
                    }
                    currentRow = [];
                }
                else {
                    currentRow.push(photo);
                    if (!this.wrapped) {
                        this.size.width += photo.width + this.padding.left;
                    }
                    photo.top = this.cursor.top;
                    rowHeight = photo.height;
                    photo.left = this.cursor.left;
                    this.cursor.left += photo.width + this.padding.left;
                }
            }
        }
        if (this.photos.length > 0 && this.wrapped && currentRow.length > 0) {
            this.size.height += lastPhoto.height;
        }
        this.display = display;
        //console.log(this.display);
    };
    GridSection.prototype.addChild = function (section) {
        this.children.push(section);
    };
    GridSection.prototype.addPhoto = function (photo) {
        this.photos.push(photo);
    };
    return GridSection;
}());

//# sourceMappingURL=grid-section.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-section/grid-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-section/grid-section.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"loaded\">\n<div class=\"grid-section\" [ngStyle]=\"{\n'transform' : 'translate3d(' + getLeft() + 'px,' +  getTop() + 'px, 0)'}\">\n\n\n<!-- \n'top': section.position.top + 'px', 'left': section.position.left + 'px'}\">  'height': getHeight() + 'px', 'width': getWidth() + 'px',-->\n\n  <ng-container *ngFor=\"let child of section.days\">\n    <app-grid-day [section]=\"child\"></app-grid-day>\n  </ng-container>\n</div>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid-section/grid-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_service__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridSectionComponent = (function () {
    /*
      @Input('sectionS')
      set sectionS(value) {
        if (!this.section) {
          this.section = value;
          this.loaded= true;
          this.cdRef.detectChanges();
        }
    
        if (this.section.position.top != value.position.top) {
          this.loaded= false;
          this.section = value;
          this.updateView();
          
          
        }
      }
      */
    function GridSectionComponent(cdRef, gridService) {
        var _this = this;
        this.cdRef = cdRef;
        this.gridService = gridService;
        //@Input() section:GridGroup = null;
        this.loaded = false;
        this.section = null;
        this.changeTimer = null;
        this.sub = this.gridService.onRowUpdate.subscribe(function (data) { return _this.checkNew(data); });
    }
    GridSectionComponent.prototype.checkNew = function (data) {
        if (data == null) {
            this.updateView();
        }
        else {
            var index = data[this.index];
            if (!this.section || data.old == this.currentIndex) {
                this.updateRow(data.new);
            }
        }
    };
    GridSectionComponent.prototype.updateRow = function (index) {
        this.currentIndex = index;
        this.section = this.gridService.getRow(index);
        this.updateView();
    };
    GridSectionComponent.prototype.updateView = function () {
        this.loaded = true;
        this.cdRef.detectChanges();
        this.changeTimer = null;
    };
    GridSectionComponent.prototype.ngOnInit = function () {
        this.cdRef.detach();
        this.updateRow(this.index);
    };
    GridSectionComponent.prototype.getHeight = function () {
        return this.section.size.height;
    };
    GridSectionComponent.prototype.getWidth = function () {
        return this.section.size.width;
    };
    GridSectionComponent.prototype.getLeft = function () {
        return this.section.position.left;
    };
    GridSectionComponent.prototype.getTop = function () {
        return this.section.position.top;
    };
    GridSectionComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
    };
    GridSectionComponent.prototype.photoByFn = function (index, photo) {
        return photo.photos.length;
    };
    GridSectionComponent.prototype.trackGridFn = function (index, element) {
        return element.position.left;
    };
    GridSectionComponent.prototype.ngAfterViewChecked = function () {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    };
    GridSectionComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("Destroyed");
        this.sub.unsubscribe();
    };
    return GridSectionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], GridSectionComponent.prototype, "index", void 0);
GridSectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grid-section',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-section/grid-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-section/grid-section.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__grid_service__["a" /* GridService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__grid_service__["a" /* GridService */]) === "function" && _b || Object])
], GridSectionComponent);

var _a, _b;
//# sourceMappingURL=grid-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gallery-wrapper {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n    top: 0;\r\n}\r\n\r\n.grid-group{\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n\r\n::-webkit-scrollbar { \r\n    display: none; \r\n}\r\n\r\n.gallery-placeholder {\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n    \r\n}\r\n\r\n\r\n.page-wrapper {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: relative;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    z-index: 400;\r\n    will-change: transform;\r\n}\r\n\r\n.page-container {\r\n    padding: 0 40px 0 40px;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n<div class=\"page-wrapper\" #mediacontainer>\n<ng-container *ngIf=\"loaded\">\n    <div class=\"gallery-wrapper\" >\n      <div class=\"gallery-placeholder\" [style.height]=\"totalHeight + 'px'\">\n\n      </div>\n      <div *ngFor=\"let index of fakeArray; trackBy: trackRowFn\">\n        <app-grid-section [index]=\"index\" ></app-grid-section>\n    </div>\n      <!--\n      <div *ngFor=\"let row of activeIndexes\">\n          <app-grid-section [section]=\"allRows[row]\"></app-grid-section>\n      </div>\n      -->\n\n      <!--\n      <div *ngFor=\"let group of testData\">\n        \n        <app-grid-section [section]=\"group\"></app-grid-section>\n      </div>\n    -->\n      <!--<app-grid-section [section]=\"sections\"></app-grid-section>-->\n    </div>\n    \n    \n</ng-container>\n</div>\n<ng-container *ngIf=\"loaded\">\n<div class=\"scroll-bar\">\n      <app-grid-scroll-bar (onJump)=\"scrollJump($event)\" [scrollLocation]=\"scrollLine\"  [months]=\"clientMonths\" [height]=\"clientHeight\" [groupHeight]=\"totalHeight\" [width]=\"clientWidth\"></app-grid-scroll-bar>\n    </div>\n</ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid_service__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GridComponent = (function () {
    function GridComponent(service, render, galleryService, _zone, cdRef) {
        var _this = this;
        this.service = service;
        this.render = render;
        this.galleryService = galleryService;
        this._zone = _zone;
        this.cdRef = cdRef;
        this.layoutStyle = 1;
        this.iconSize = 0;
        this.clientWidth = 1000;
        this.mediaData = [];
        this.onScrolling = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.clientHeight = 0;
        this.lastPos = 2000;
        this.clientMonths = [];
        this.currentDisplay = { start: 0, end: 3, indices: [] };
        this.scrollLine = 0;
        this.totalHeight = 0;
        this.testData = [];
        this.activeIndexes = [];
        this.activeRowsIndices = [];
        this.allRows = [];
        this.sections = [];
        this.subs = [];
        this.loaded = false;
        this.subs.push(this.onScrolling.debounceTime(25).distinctUntilChanged().subscribe(function (evt) { return _this._onScroll2(); }));
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.push(this.galleryService.onMapChanged.subscribe(function (resp) { return _this.onMapChange(resp); }));
        //this.myMediaContainer.nativeElement.clientWidth;
    };
    GridComponent.prototype.trackRowFn = function (index, element) {
        return element;
    };
    GridComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        this._zone.runOutsideAngular(function () { _this.scrollDetection = _this.render.listen(_this.myMediaContainer.nativeElement, 'scroll', function (evt) { return _this.onScrolling.next(evt); }); });
    };
    GridComponent.prototype.ngOnChanges = function (changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        console.log(changes);
        console.log(this.iconSize);
        if (changes.iconSize && this.loaded) {
            console.log(changes.iconSize);
            this.renderSections();
        }
        if (changes.layoutStyle && this.loaded) {
            console.log(changes.layoutStyle);
            this.resizeGrid();
        }
    };
    GridComponent.prototype.dayByFn = function (index, section) {
        return section.photos.length;
    };
    GridComponent.prototype.onMapChange = function (bounds) {
        var _this = this;
        //console.log(bounds);
        this.loaded = false;
        var hasChanged = false;
        if (bounds == null) {
            for (var i in this.mediaData) {
                this.mediaData[i]['show'] = true;
                hasChanged = true;
            }
        }
        else {
            var temp = [];
            for (var i in this.mediaData) {
                var media = this.mediaData[i];
                ////console.log("" + (bounds.min.x >= media.gpslat) + " " + (bounds.max.x <= media.gpslat) + " " + (bounds.min.y >= media.gpslong) +  " "+ (bounds.max.y <= media.gpslong))
                ////console.log("" + media.gpslat + " " + media.gpslong);
                var before = media.show;
                if ((bounds.min.x >= media.gpslat) &&
                    (bounds.max.x <= media.gpslat) &&
                    (bounds.min.y <= media.gpslong) &&
                    (bounds.max.y >= media.gpslong)) {
                    media.show = true;
                }
                else {
                    media.show = false;
                }
                if (media.show != before) {
                    hasChanged = true;
                }
            }
        }
        if (hasChanged) {
            this._zone.run(function () { _this.reRenderSections(); });
            this.cdRef.detectChanges();
        }
        else {
            this.loaded = true;
        }
        //this.sections.render(this.iconSize);
        //this.changed = !this.changed;
    };
    GridComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log(this.myMediaContainer);
        this.galleryService.fetchPreData();
        this.subs.push(this.galleryService.data$.subscribe(function (resp) { return _this.prepareData(resp); }));
    };
    GridComponent.prototype.scrollJump = function (loc) {
        this.myMediaContainer.nativeElement.scrollTop = loc;
        this._onScroll2();
    };
    GridComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("Grid destroyed");
        this.scrollDetection();
        for (var i = 0; i < this.subs.length; i++) {
            this.subs[i].unsubscribe();
        }
    };
    GridComponent.prototype.reRenderSections = function () {
        //console.log(this.myMediaContainer.nativeElement);
        this.loaded = false;
        this.clientHeight = this.myMediaContainer.nativeElement.clientHeight;
        this.clientWidth = this.myMediaContainer.nativeElement.clientWidth;
        this.fakeArray = this.service.onMapMove();
        this.clientMonths = this.service.getMonths();
        this.totalHeight = this.service.getTotalHeight();
        this._onScroll2();
        this.loaded = true;
        this.cdRef.detectChanges();
        console.log(this.totalHeight);
    };
    GridComponent.prototype.renderSections = function () {
        this.fakeArray = [];
        this.cdRef.detectChanges();
        this.loaded = false;
        //console.log(this.myMediaContainer.nativeElement);
        this.clientHeight = this.myMediaContainer.nativeElement.clientHeight;
        this.clientWidth = this.myMediaContainer.nativeElement.clientWidth;
        this.fakeArray = this.service.requestRender(this.clientWidth, this.iconSize, this.clientHeight);
        this.totalHeight = this.service.getTotalHeight();
        this.clientMonths = this.service.getMonths();
        this._onScroll2();
        this.loaded = true;
        //this.sections.display = true;
    };
    GridComponent.prototype.ngAfterViewChecked = function () {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        //console.log("checked grid");
    };
    GridComponent.prototype.resizeGrid = function () {
        this.fakeArray = [];
        this.cdRef.detectChanges();
        this.loaded = false;
        //this.sections = this.service.buildDays(this.myMediaContainer.nativeElement.clientWidth);
        console.log(this.sections);
        this.renderSections();
        ////console.log(this.service.getMonths());
        this._onScroll2();
        this.loaded = true;
    };
    GridComponent.prototype.prepareData = function (data) {
        this.fakeArray = [];
        this.cdRef.detectChanges();
        this.loaded = false;
        this.service.resetGrid();
        this.mediaData = data.slice(0, data.length);
        var groups = this.service.buildSections(this.mediaData);
        this.sections = this.service.buildDays(this.myMediaContainer.nativeElement.clientWidth);
        console.log(this.sections);
        this.renderSections();
        //this.sections.render(this.iconSize);
        this.loaded = true;
        this._onScroll2();
    };
    /*
    onScroll(e) {
        if (!this.scrollTimer) {
            this.scrollTimer = setTimeout((e) => this._onScroll(e), 100);
        }
    }
    */
    GridComponent.prototype.updateView = function () {
        this.cdRef.detectChanges();
    };
    GridComponent.prototype.groupTrackBy = function (index, group) {
        return group.height;
    };
    GridComponent.prototype._onScroll2 = function () {
        var _this = this;
        var scrollTop = this.myMediaContainer.nativeElement.scrollTop;
        this.service.scrollCheck(scrollTop);
        this._zone.run(function () { _this.scrollLine = _this.myMediaContainer.nativeElement.scrollTop * (_this.clientHeight / _this.totalHeight); });
    };
    return GridComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('mediacontainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], GridComponent.prototype, "myMediaContainer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridComponent.prototype, "layoutStyle", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GridComponent.prototype, "iconSize", void 0);
GridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grid',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__grid_service__["a" /* GridService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__grid_service__["a" /* GridService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Renderer2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_gallery_service__["a" /* GalleryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _f || Object])
], GridComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/grid/grid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid_section__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-section.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridService = (function () {
    function GridService() {
        this.months = [];
        this.items = [];
        this.sortedItems = [];
        this.rowUpdate = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.onRowUpdate = this.rowUpdate.asObservable();
        this.groupV = [];
        this.loadedGrid = false;
        this.updates = [];
        this.stillUpdating = false;
    }
    GridService.prototype.getMonths = function () {
        return this.gridPlacement.getMonths();
    };
    GridService.prototype.requestRender = function (viewWidth, iconSize, viewHeight) {
        var sizeOptions = [150, 200, 300];
        var size = sizeOptions[iconSize];
        if (!this.loadedGrid) {
            this.gridPlacement = new __WEBPACK_IMPORTED_MODULE_2__grid_section__["b" /* GridPlacement */](viewWidth, size, this.groupedItems, viewHeight);
            this.loadedGrid = true;
        }
        var fakeArray = this.gridPlacement.init(viewWidth, size);
        return fakeArray;
    };
    GridService.prototype.resizeGrid = function (viewWidth, iconSize, viewHeight) {
        var sizeOptions = [150, 200, 300];
        var size = sizeOptions[iconSize];
        var fakeArray = this.gridPlacement.resizedGrid(viewWidth, size);
        return fakeArray;
    };
    GridService.prototype.onMapMove = function () {
        var fakeArray = this.gridPlacement.checkDisplay();
        this.rowUpdate.next(null);
        return fakeArray;
    };
    GridService.prototype.getTotalHeight = function () {
        return this.gridPlacement.getTotalHeight();
    };
    GridService.prototype.getRow = function (index) {
        return this.gridPlacement.getRow(index);
    };
    GridService.prototype.updateRows = function () {
        this.stillUpdating = true;
        this.updateLoop();
    };
    GridService.prototype.updateLoop = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.updates.length > 0) {
                var rowIndex = _this.updates.shift();
                _this.rowUpdate.next(rowIndex);
                _this.updateLoop();
            }
            else {
                _this.stillUpdating = false;
            }
        }, 25);
    };
    GridService.prototype.scrollCheck = function (scrollTop) {
        var nextUpdates = this.gridPlacement.scrolled(scrollTop);
        if (nextUpdates) {
            for (var i in nextUpdates) {
                this.updates.push(nextUpdates[i]);
            }
            if (!this.stillUpdating) {
                this.updateRows();
            }
        }
    };
    GridService.prototype.renderGroups = function (viewWidth) {
        for (var i = 0; i < this.groupedItems.length; i++) {
            var gridGroup = this.groupedItems[i];
            gridGroup.render(0);
        }
    };
    GridService.prototype.resetGrid = function () {
        this.loadedGrid = false;
    };
    GridService.prototype.buildDays = function (viewWidth) {
        var size = 1;
        var index = 0;
        var days = this.items; //PLACEHOLDER DATA SHOULD BE COMING FROM INPUT
        //var view_width = 1711; //PLACEHOLDER DATA SHOULD BE COMING FROM INPUT
        var prev_date = new Date(days[0].date);
        var gridDays = [];
        var count = 0;
        var items_per_group = 30;
        var gridGroups = [];
        var day_group = new __WEBPACK_IMPORTED_MODULE_2__grid_section__["c" /* GridSection */](viewWidth, { top: 50, left: 0 });
        //day_group.position.top = 30; //BAD BAD BAD hacking to get the top date to show.
        ////console.log(days);
        var prev_month_height = 0;
        var currentMonth = { date: prev_date, height: 0 };
        var cSize = 225;
        switch (size) {
            case 0:
                cSize = 150;
                break;
            case 1:
                cSize = 225;
                break;
            case 2:
                cSize = 300;
                break;
        }
        //Iterate through each day
        while (index < days.length) {
            //let gridGroup = new GridGroup(viewWidth);
            count = 0;
            while (count < items_per_group && index < days.length) {
                count += days[index]['content'].length;
                var current_date = new Date(days[index].date);
                var items = days[index]['content'];
                ////console.log(items);
                var currentDay = new __WEBPACK_IMPORTED_MODULE_2__grid_section__["a" /* GridDay */]((viewWidth - 10), days[index].date, { top: 5, left: 5 }, { top: 20, left: 10 });
                var item_index = 0;
                //Iterate within the day
                while (item_index < items.length) {
                    ////console.log(items[item_index]);
                    items[item_index]['show'] = true;
                    currentDay.addPhoto(items[item_index]);
                    //item_group.addPeople(items[item_index].people);
                    //item_group.addAddress(items[item_index].address.building);
                    item_index++;
                }
                count += days[index]['content'].length;
                index++;
                ////console.log(item_group);
                gridGroups.push(currentDay);
                // //console.log(day_group.height + group.height + item_group.height);
            }
            ////console.log(day_group.top);
            //gridGroups.push(gridGroup);
        }
        this.groupedItems = gridGroups;
        //Dont forget left over days
        //console.log("Done calc");
        return gridGroups;
    };
    GridService.prototype.buildSections = function (data) {
        var items = data;
        //items = items.concat(data);
        items.forEach(function (a) {
            a.date = new Date(a.date);
        });
        items.sort(function (a, b) {
            return b.date.valueOf() - a.date.valueOf();
        });
        //console.time('sort');
        this.sortedItems = [];
        this.sortedItems = this.sortedItems.concat(items);
        var index = 0;
        ////console.log(items);
        var prev_date = new Date(items[0].date);
        var time_zone = prev_date.getTimezoneOffset() * 1000 * 60;
        var days = [];
        var count = 0;
        var groups = [];
        var end_time;
        var sections = [];
        while (index < items.length) {
            var end_index = index;
            //let section = new GridSection();
            var day_data = {};
            day_data['content'] = [];
            var temp_date = items[index].date - time_zone;
            end_time = new Date(items[index].date.getFullYear(), items[index].date.getMonth(), items[index].date.getDate() - 1);
            end_time = end_time.valueOf();
            //Find the last item of the day
            //console.log(index + '|' + items[index].date + ':' + end_time);
            while (end_index < items.length && items[end_index].date.valueOf() > end_time.valueOf()) {
                ////console.log(items[index])
                ////console.log(items[index].date + ' ' + index)
                end_index++;
                //index++;       
            }
            //console.log(index + '|' + end_time);
            day_data['date'] = items[index].date;
            //section.name = items[index].date; 
            //section.photos = items.slice(index, end_index);
            day_data['content'] = items.slice(index, end_index); //Seperate the items
            index = end_index;
            days.push(day_data);
            //sections.push(section);
        }
        ////console.log(days);
        this.items = days;
        //console.timeEnd('sort');
        return days;
    };
    GridService.prototype.renderSections = function (viewWidth) {
        var size = 1;
        var index = 0;
        var days = this.items; //PLACEHOLDER DATA SHOULD BE COMING FROM INPUT
        //var view_width = 1711; //PLACEHOLDER DATA SHOULD BE COMING FROM INPUT
        var prev_date = new Date(days[0].date);
        var count = 0;
        var items_per_group = 30;
        var day_group = new __WEBPACK_IMPORTED_MODULE_2__grid_section__["c" /* GridSection */](viewWidth, { top: 50, left: 0 });
        //day_group.position.top = 30; //BAD BAD BAD hacking to get the top date to show.
        ////console.log(days);
        var prev_month_height = 0;
        var currentMonth = { date: prev_date, height: 0 };
        var cSize = 225;
        switch (size) {
            case 0:
                cSize = 150;
                break;
            case 1:
                cSize = 225;
                break;
            case 2:
                cSize = 300;
                break;
        }
        //Iterate through each day
        while (index < days.length) {
            var group = new __WEBPACK_IMPORTED_MODULE_2__grid_section__["c" /* GridSection */](viewWidth, { top: 25, left: 5 });
            group.display = false;
            count = 0;
            while (count < items_per_group && index < days.length) {
                count += days[index]['content'].length;
                var current_date = new Date(days[index].date);
                //Index the months for later
                if (current_date.getMonth() != prev_date.getMonth()) {
                    currentMonth.height = day_group.size.height + group.size.height - prev_month_height;
                    prev_month_height = day_group.size.height + group.size.height;
                    this.months.push(currentMonth);
                    currentMonth = { date: current_date, height: 0 };
                    prev_date = current_date;
                }
                var items = days[index]['content'];
                ////console.log(items);
                var item_group = new __WEBPACK_IMPORTED_MODULE_2__grid_section__["c" /* GridSection */](viewWidth, { top: 0, left: 0 });
                item_group.name = days[index].date;
                var item_index = 0;
                //Iterate within the day
                while (item_index < items.length) {
                    ////console.log(items[item_index]);
                    items[item_index]['show'] = true;
                    item_group.addPhoto({ top: 0, left: 0, width: items[item_index].aspect_ratio * cSize, height: cSize, content: items[item_index], index: item_index + count, isItem: true });
                    //item_group.addPeople(items[item_index].people);
                    //item_group.addAddress(items[item_index].address.building);
                    item_index++;
                }
                count += days[index]['content'].length;
                index++;
                ////console.log(item_group);
                group.addChild(item_group);
                // //console.log(day_group.height + group.height + item_group.height);
            }
            day_group.addChild(group);
            ////console.log(day_group.top);
            //groups.add(day_group);
        }
        this.groupedItems = day_group;
        //Dont forget left over days
        //console.log("Done calc");
        return day_group;
    };
    return GridService;
}());
GridService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], GridService);

//# sourceMappingURL=grid.service.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/layout-options/layout-options.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/layout-options/layout-options.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  layout-options works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/layout-options/layout-options.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutOptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutOptionsComponent = (function () {
    function LayoutOptionsComponent() {
    }
    LayoutOptionsComponent.prototype.ngOnInit = function () {
    };
    return LayoutOptionsComponent;
}());
LayoutOptionsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-layout-options',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-layout/layout-options/layout-options.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-layout/layout-options/layout-options.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LayoutOptionsComponent);

//# sourceMappingURL=layout-options.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mapid {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n}\r\n\r\n.abs {\r\n    position: absolute;\r\n    bottom: 12%;\r\n    right:2%;\r\n    z-index: 999;\r\n}\r\n\r\n.modal-media-view {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: block;\r\n}\r\n\r\n.map-area {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 401;\r\n    overflow:hidden;\r\n}\r\n\r\n.map-photo {\r\n    position: absolute;\r\n    z-index:1001;\r\n    top:40px;\r\n    left:55%;\r\n    width: 30%;\r\n    height: 30%;\r\n}\r\n\r\ninner-area {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    width: 60%;\r\n    z-index: 401;\r\n}\r\n\r\n\r\n\r\n\r\n.map-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 100%;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"map-wrapper\">\n    <div class=\"map-photo\" *ngIf=\"activePhoto\">\n                <img class=\"modal-media-view\" *ngIf=\"activePhoto.kind == 'image'\" src=\"http://res.cloudinary.com/kyon/image/upload/v1487010928/photos/full/{{activePhoto.hashTitle}}.jpg\" alt=\"Photo here\">\n                <!-- <img class=\"modal-media-view\" *ngIf=\"mediaItem.kind == 'image'\" src=\"http://localhost:8000/files/photos/{{mediaItem.id}}/orginal/{{mediaItem.title}}\" alt=\"Photo here\">-->\n                <video class=\"modal-media-view\" *ngIf=\"activePhoto.kind == 'video'\" controls src = \"http://localhost:8000/files/photos/{{mediaItem.id}}/preview/{{mediaItem.id}}.mp4\" #content autoplay ></video>\n      \n    </div>\n    <div class=\"abs\">\n        <div class=\"form-check\">\n            <label class=\"form-check-label\">\n            <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"syncMap\" (change)=\"toggleSync()\">\n            Sync Map and Media\n            </label>\n        </div>\n    </div>\n\n    <app-shared-map (mapReady)=\"onMapReady($event)\" [cluster]=\"markerClusterData\"></app-shared-map>\n    <!--\n    <div id=\"mapid\" #realMap sytle=\"height: 300px\"\n        leaflet [leafletOptions]=\"options\"\n        [leafletMarkerClusterOptions]=\"markerClusterOptions\"\n        [leafletMarkerCluster]=\"markerClusterData\"\n        (leafletMapReady)=\"onMapReady($event)\"\n        (leafletMarkerClusterReady)=\"markerClusterReady($event)\"\n        >\n    </div>-->\n\n</div>\n<div class=\"map-area inshape\">\n    <div class=\"inner-area \" #maparea>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-layout/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapComponent = (function () {
    function MapComponent(galleryService, _ngZone) {
        this.galleryService = galleryService;
        this._ngZone = _ngZone;
        this.mymap = null;
        this.cloneKey = {};
        this.markerClusterData = [];
        this.areaPoints = [];
        this.markerClusterOptions = { spiderfyDistanceMultiplier: 3 };
        this.syncMap = true;
        this.markers = {};
        this.currentCluster = null;
        this.subs = [];
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.markerClusterData = L.markerClusterGroup({ spiderfyDistanceMultiplier: 3 });
        this.subs.push(this.galleryService.data$.subscribe(function (resp) { return _this.onLoadMarkers(resp); }));
        this.subs.push(this.galleryService.selectedPhoto.subscribe(function (photo) { return _this.moveFocus(photo); }));
        this.subs.push(this.galleryService.hoveredPhoto.subscribe(function (photo) { return _this.onMarkerChange(photo); }));
    };
    MapComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log("Map destroyed");
        for (var i = 0; i < this.subs.length; i++) {
            this.subs[i].unsubscribe();
        }
    };
    MapComponent.prototype.moveFocus = function (photo) {
        var bounds = L.latLngBounds(L.latLng(photo.gpslat, photo.gpslong), L.latLng(photo.gpslat, photo.gpslong));
        this.mymap.flyToBounds(bounds, { paddingTopLeft: this.areaPoints[0], maxZoom: 15, animate: false });
        //this.activePhoto = photo;
    };
    MapComponent.prototype.onMarkerChange = function (media) {
        /*
        if (this.currentCluster != null) {
          this.markerClusterGroup['_hideCoverage']({layer: this.currentCluster});
        }
        if(media == null) {
          this.currentCluster = null;
          return;
        }
        //console.log(media);
        this.currentCluster = this.markerClusterGroup.getVisibleParent(this.markers[media.id]);
        //console.log(this.currentCluster)
        if (this.currentCluster == null) {
          return;
        }
        //console.log(this.currentCluster._bounds);
        if (this.currentCluster._bounds === undefined) {
          return;
        }
        this.markerClusterGroup['_showCoverage']({layer: this.currentCluster});
        */
    };
    MapComponent.prototype.onLoadMarkers = function (data) {
        var defaultIcon = L.icon({ iconUrl: 'assets/marker-icon.png', shadowUrl: 'assets/marker-shadow.png' });
        var vid, marker, tooltip, media;
        var markerlist = [];
        console.log("newvids");
        //this.markerMedia = {};
        //console.log(new_media);
        //this.markerlist = [];
        var count = 0;
        for (var i = 0; i < data.length; i++) {
            count++;
            media = data[i];
            if (media.gpslat) {
                //let myIcon = L.icon({iconUrl: `http://localhost:8000/files/${media.id}/preview/${media.id}-smallest.jpg`, iconSize: [200,100]});
                marker = L.marker([media.gpslat, media.gpslong], { icon: defaultIcon, draggable: false, alt: media.title, title: media.title });
                this.markers[media.id] = marker;
            }
            else {
                //this.unplacedMedia.push(vid);
                continue;
                //marker = L.marker([0, 0], { draggable: false, alt: vid } ).addTo(this.mymap);
            }
            //console.log("adding media " +  media + " |"+ media.GPSLat + "," + vid.GPSLong);
            //this.markerMedia[media.id] = marker;
            //this.media_marker[vid] = media;
            if (media.kind == "video") {
                marker.bindTooltip("<img *ngIf=\"showPreview\" src=\"http://localhost:8000/files/" + media.id + "/preview/" + media.id + ".gif\">");
            }
            else if (media.kind == "image") {
                marker.bindTooltip("<img *ngIf=\"showPreview\" src=\"http://localhost:8000/files/" + media.id + "/preview/" + media.id + "-smallest.jpg\">");
            }
            marker.bindPopup(media.title);
            //<img *ngIf="showPreview" src="thumbnails/${media.title}.gif">
            //marker.on("click", (e) => this.onClickVid(e))
            markerlist.push(marker);
        }
        //console.log(markerlist);
        this.markerClusterData = markerlist;
        //this.loaded = true;
        //this.mymap.addLayer(this.markers);
        //console.log(count);
        //this.updateList();
        //console.log("Shown Media: " + this.shown_media);
    };
    MapComponent.prototype.loadTile = function (e) {
        //console.log(e);
        //let container = this.layRef.getContainer();
        var clone = e.tile.cloneNode(true);
        this.mapArea.nativeElement.appendChild(clone);
        //console.log(clone);
        this.cloneKey[e.coords] = clone;
        clone.classList.add('tile-blur');
        clone.style.opacity = 1;
    };
    MapComponent.prototype.unloadTile = function (e) {
        if (this.cloneKey[e.coords] != null) {
            this.mapArea.nativeElement.removeChild(this.cloneKey[e.coords]);
        }
    };
    MapComponent.prototype.onMapReady = function (map) {
        var _this = this;
        this.mymap = map;
        console.log(this.mymap.getPanes());
        this.mymap.eachLayer(function (layer) {
            layer.on('tileload', function (e) { return _this.loadTile(e); });
            layer.on('tileunload', function (e) { return _this.unloadTile(e); });
        });
        this.mymap.on('moveend', function () { return _this.updateBounds(); });
        this.mymap.on('move', function () { return _this.createBlur(); });
        var mapSize = this.mymap.getSize();
        var x1 = mapSize.x * .55;
        var y1 = mapSize.y * .1;
        var x2 = mapSize.x;
        var y2 = .9 * mapSize.y;
        this.areaPoints = [L.point(x1, y1), L.point(x2, y2)];
        this.mapOffSet = L.point((mapSize.x * (1.45 / 2)), (mapSize.y / 2));
        this.mapPane = this.mymap.getPane('mapPane');
        this.mapArea.nativeElement.style = this.mapPane.style;
        var padding = 20;
        var maxX = (mapSize.x - padding) * .35;
        var startX = (mapSize.x - padding) - maxX;
        var bounds = maxX;
        if (maxX < mapSize.y) {
            bounds = maxX;
        }
        else {
            bounds = mapSize.y;
        }
        //console.log(bounds, mapSize.y);
        var topleft = L.point(startX, (mapSize.y / 2) - (bounds / 2));
        var botright = L.point(startX + bounds, (mapSize.y / 2) + (bounds / 2));
        this.blurBounds = L.bounds(topleft, botright);
        //console.log(this.blurBounds);
        // Do stuff with map
    };
    MapComponent.prototype.toggleSync = function () {
        this.syncMap = !this.syncMap;
        if (!this.syncMap) {
            this.galleryService.mapChange(null);
        }
    };
    MapComponent.prototype.createBlur = function () {
        this.mapArea.nativeElement.style.transform = this.mapPane.style.transform;
    };
    MapComponent.prototype.updateBounds = function () {
        if (!this.syncMap) {
            return;
        }
        var point1 = this.mymap.containerPointToLatLng(this.areaPoints[0]);
        var point2 = this.mymap.containerPointToLatLng(this.areaPoints[1]);
        var bounds = { 'min': { 'x': point1.lat, 'y': point1.lng }, 'max': { 'x': point2.lat, 'y': point2.lng } };
        //let mapBounds = this.mymap.getBounds();
        //let bounds = {'min': {'x': mapBounds.getNorth(), 'y': mapBounds.getWest() }, 'max': {'x': mapBounds.getSouth(), 'y': mapBounds.getEast()}};
        this.galleryService.mapChange(bounds);
    };
    return MapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('maparea'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MapComponent.prototype, "mapArea", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('realMap'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], MapComponent.prototype, "realMap", void 0);
MapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-layout/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-layout/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _d || Object])
], MapComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_layout_gallery_layout_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/gallery-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_modal_media_modal_component__ = __webpack_require__("../../../../../src/app/gallery/media-modal/media-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search_component__ = __webpack_require__("../../../../../src/app/gallery/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var galleryRoutes = [
    { path: 'photos', component: __WEBPACK_IMPORTED_MODULE_2__gallery_layout_gallery_layout_component__["a" /* GalleryLayoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]],
        children: [
            {
                path: 'media/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__media_modal_media_modal_component__["a" /* MediaModalComponent */],
            },
            {
                path: 'search',
                component: __WEBPACK_IMPORTED_MODULE_4__search_search_component__["a" /* SearchComponent */],
            }
        ] },
];
var GalleryRoutingModule = (function () {
    function GalleryRoutingModule() {
    }
    return GalleryRoutingModule;
}());
GalleryRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(galleryRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], GalleryRoutingModule);

//# sourceMappingURL=gallery-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-selection/gallery-selection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-selection/gallery-selection.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-top-bar nav-overlay\" *ngIf=\"isPhotoSelected()\">\n  <div class=\"nav-bar-left\">\n      <div class=\"back-arrow\">\n          <button type=\"button\" (click)=\"goBack()\" class=\"btn-default\">\n              <i class=\"material-icons\">arrow_back</i>\n          </button>\n      </div>\n  </div>\n  <div class=\"nav-bar-center\" (click)=\"gotoSearch()\">\n    \n  </div>\n  <div class=\"nav-bar-right\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/gallery-selection/gallery-selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallerySelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selection_service__ = __webpack_require__("../../../../../src/app/gallery/selection.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GallerySelectionComponent = (function () {
    function GallerySelectionComponent(galleryService, selectionService) {
        this.galleryService = galleryService;
        this.selectionService = selectionService;
    }
    GallerySelectionComponent.prototype.ngOnInit = function () {
    };
    GallerySelectionComponent.prototype.goBack = function () {
        this.selectionService.endEdit();
    };
    GallerySelectionComponent.prototype.isPhotoSelected = function () {
        return this.selectionService.photosSelected;
    };
    return GallerySelectionComponent;
}());
GallerySelectionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gallery-selection',
        template: __webpack_require__("../../../../../src/app/gallery/gallery-selection/gallery-selection.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/gallery-selection/gallery-selection.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__selection_service__["a" /* SelectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__selection_service__["a" /* SelectionService */]) === "function" && _b || Object])
], GallerySelectionComponent);

var _a, _b;
//# sourceMappingURL=gallery-selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/gallery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_layout_gallery_layout_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/gallery-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_layout_grid_grid_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gallery_layout_map_map_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__("../../../../../src/app/gallery/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gallery_card_gallery_card_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-card/gallery-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gallery_layout_grid_grid_section_grid_section_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-section/grid-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gallery_routing_module__ = __webpack_require__("../../../../../src/app/gallery/gallery-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_module__ = __webpack_require__("../../../../../src/app/nav/nav.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selection_service__ = __webpack_require__("../../../../../src/app/gallery/selection.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gallery_layout_grid_grid_service__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__gallery_layout_layout_options_layout_options_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/layout-options/layout-options.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__media_modal_media_modal_component__ = __webpack_require__("../../../../../src/app/gallery/media-modal/media-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__media_modal_media_modal_details_media_modal_details_component__ = __webpack_require__("../../../../../src/app/gallery/media-modal/media-modal-details/media-modal-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__gallery_layout_grid_grid_scroll_bar_grid_scroll_bar_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-scroll-bar/grid-scroll-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gallery_layout_grid_grid_day_grid_day_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-layout/grid/grid-day/grid-day.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__gallery_selection_gallery_selection_component__ = __webpack_require__("../../../../../src/app/gallery/gallery-selection/gallery-selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var GalleryModule = (function () {
    function GalleryModule() {
    }
    return GalleryModule;
}());
GalleryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__nav_nav_module__["a" /* NavModule */],
            __WEBPACK_IMPORTED_MODULE_19__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__gallery_routing_module__["a" /* GalleryRoutingModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__gallery_layout_gallery_layout_component__["a" /* GalleryLayoutComponent */], __WEBPACK_IMPORTED_MODULE_3__gallery_layout_grid_grid_component__["a" /* GridComponent */], __WEBPACK_IMPORTED_MODULE_4__gallery_layout_map_map_component__["a" /* MapComponent */], __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */], __WEBPACK_IMPORTED_MODULE_6__gallery_card_gallery_card_component__["a" /* GalleryCardComponent */], __WEBPACK_IMPORTED_MODULE_7__gallery_layout_grid_grid_section_grid_section_component__["a" /* GridSectionComponent */], __WEBPACK_IMPORTED_MODULE_13__gallery_layout_layout_options_layout_options_component__["a" /* LayoutOptionsComponent */], __WEBPACK_IMPORTED_MODULE_14__media_modal_media_modal_component__["a" /* MediaModalComponent */], __WEBPACK_IMPORTED_MODULE_15__media_modal_media_modal_details_media_modal_details_component__["a" /* MediaModalDetailsComponent */], __WEBPACK_IMPORTED_MODULE_16__gallery_layout_grid_grid_scroll_bar_grid_scroll_bar_component__["a" /* GridScrollBarComponent */], __WEBPACK_IMPORTED_MODULE_17__gallery_layout_grid_grid_day_grid_day_component__["a" /* GridDayComponent */], __WEBPACK_IMPORTED_MODULE_18__gallery_selection_gallery_selection_component__["a" /* GallerySelectionComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_12__gallery_layout_grid_grid_service__["a" /* GridService */], __WEBPACK_IMPORTED_MODULE_11__selection_service__["a" /* SelectionService */]]
    })
], GalleryModule);

//# sourceMappingURL=gallery.module.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/media-modal/media-modal-details/media-modal-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  background: #ffffff;\r\n  color: #000;\r\n  position: fixed;\r\n  left: auto;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 360px;\r\n  z-index: 9999;\r\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n}\r\n \r\nul {\r\n  font-size: 18px;\r\n  line-height: 3;\r\n  font-weight: 400;\r\n  padding-top: 50px;\r\n  list-style: none;\r\n}\r\n\r\n.small-circle {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n\r\n.media-details {\r\n  padding: 10px;\r\n\r\n}\r\n\r\n.detail-content {\r\n  padding: 10px;\r\n}\r\n\r\n.map {\r\n  width: 98%;\r\n}\r\n\r\n.flex-row {\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n\r\n.face-thumbnail {\r\n  height: 80px;\r\n  width: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/media-modal/media-modal-details/media-modal-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"media_item\" class=\"media-details\">\n    <div class=\"flex-column\">\n        <h3>{{media_item.title}}</h3>\n        <p>{{media_item.date  |date:'MM/dd/yyyy @ h:mma'}}</p>\n        \n        <div class=\"flex-row\">\n            <div class=\"detail-title\">\n                Tags\n             </div>\n            <!--<input class=\"form-control\" type=\"text\" [(ngModel)]=\"keyword\"  placeholder=\"Add tag\" (keyup.enter)=\"addTag($event)\" />-->\n            <div class=\"flex-row detail-content\">\n            <button \n                class=\"btn btn-info btn-sm\" \n                type=\"button\" \n                (click)=\"addTag(item)\"\n                *ngFor = \"let item of media_item.tags\">\n                {{item.name}}\n            </button>\n            </div>\n        </div>\n        <div class=\"flex-column\">\n            <div class=\"detail-title\">\n                People\n            </div>\n            <!--<input class=\"form-control\" type=\"text\"  [(ngModel)]=\"people\" placeholder=\"Add person\" (keyup.enter)=\"addPeople($event)\" />-->\n            <div class=\"flex-row detail-content\">\n            <button \n                class=\"btn btn-primary btn-sm\" \n                type=\"button\" \n                (click) = \"gotoTags('people',item)\"\n                *ngFor = \"let item of media_item.people\">\n                {{item.name}} \n            </button>\n            </div>\n        </div>\n        <div class=\"flex-column\">\n                <div class=\"detail-title\">\n                        Camera\n                    </div>\n            <button \n                class=\"btn btn-primary btn-sm\" \n                type=\"button\" \n                (click) = \"gotoTags('Camera',media_item.Camera)\">\n                <span class=\"glyphicon glyphicon-camera\"></span>\n                {{media_item.camera}} \n            </button>\n        </div>\n        <ng-container *ngFor=\"let item of detections\">\n            <div class=\"flex-row\">\n                <img class=\"small-circle\" src=\"http://localhost:8000/files/photos/{{media_item.id}}/detections/{{item.index}}.jpg\">\n                <input type=\"text\" [(ngModel)]=\"item.person.name\" placeholder=\"Who is this?\">\n                <button (click)=\"tagPerson(item)\">Y</button>\n            </div>\n        </ng-container>\n        <div class=\"flex-column\">\n            <div class=\"flex-row\">\n            <div *ngFor=\"let faces of media_item.extra\">\n                <img class=\"face-thumbnail\" src=\"http://localhost:8000/files/{{media_item.id}}/detections/{{faces[0].index}}.jpg\">\n            </div>\n            </div>\n        </div>\n        <div class=\"flex-column\">\n            <div class=\"rating\">\n                <!--<p-rating (onRate)=\"handleRate($event)\" [(ngModel)]=\"media_item.rating\" (onCancel)=\"handleCancel($event)\"></p-rating>-->\n            </div>\n        </div>\n        <!--\n        <map-viewer *ngIf=\"display_map\" class=\"map\" (click)=\"openMap()\" [selected_video]=\"media_item\"></map-viewer>\n        -->\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery/media-modal/media-modal-details/media-modal-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaModalDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaModalDetailsComponent = (function () {
    function MediaModalDetailsComponent(galleryService, router) {
        this.galleryService = galleryService;
        this.router = router;
        this.detections = [];
    }
    MediaModalDetailsComponent.prototype.ngOnInit = function () {
    };
    MediaModalDetailsComponent.prototype.addTag = function (item) {
        var query = this.galleryService.getQuery();
        query.tags.push(item);
        this.galleryService.updateQuery(query);
        this.router.navigate(['photos']);
    };
    MediaModalDetailsComponent.prototype.tagPerson = function (detection) {
        console.log(detection);
        detection.correct = true;
        this.galleryService.tagPerson(detection).subscribe(function (resp) { return detection = resp; });
    };
    MediaModalDetailsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add 'implements OnChanges' to the class.
        if (this.media_item) {
            this.galleryService.getDetections(this.media_item.id).subscribe(function (resp) { return _this.loadDetections(resp); });
        }
    };
    MediaModalDetailsComponent.prototype.loadDetections = function (resp) {
        console.log(resp);
        resp.forEach(function (element) {
            if (!element.person) {
                element.person = { 'name': "" };
            }
        });
        this.detections = resp;
    };
    return MediaModalDetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], MediaModalDetailsComponent.prototype, "media_item", void 0);
MediaModalDetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-media-modal-details',
        template: __webpack_require__("../../../../../src/app/gallery/media-modal/media-modal-details/media-modal-details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/media-modal/media-modal-details/media-modal-details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], MediaModalDetailsComponent);

var _a, _b;
//# sourceMappingURL=media-modal-details.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/media-modal/media-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Modal (background) */\r\n.modal {\r\n    display: block; /* Hidden by default */\r\n    position: absolute; /* Stay in place */\r\n    z-index:1001;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: hidden; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n.back-icon {\r\n    font-size: 20px;\r\n    color: white;\r\n    background: transparent;\r\n    border: 0;\r\n    padding: 20px;\r\n}\r\n\r\n.box-overlay {\r\n    position: absolute;\r\n    border: black solid;\r\n}\r\n\r\n.image-container {\r\n    height:100%;\r\n    width:100%;\r\n}\r\n\r\n\r\n/* Modal Content/Box */\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    border: 0;\r\n    width: 100%; /* Could be more or less, depending on screen size */\r\n    height: 100%;\r\n    display: block;\r\n}\r\n\r\n.search-input {\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 1 auto;\r\n            flex: 0 1 auto;\r\n}\r\n\r\n/* The Close Button */\r\n.close {\r\n    color: #aaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n}\r\n\r\n.back {\r\n    float: left;\r\n    color: black;\r\n    opacity: 0.1;\r\n    position: absolute;\r\n    top:0;\r\n    z-index: 999;\r\n}\r\n\r\n.modal-nav {\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    width: 100%;\r\n    height: 60px;\r\n    z-index: 10;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.nav-right {\r\n    margin-left: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n\r\n}\r\n\r\n.nav-left {\r\n    margin-right: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n\r\n\r\n.modal-media-view {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: block;\r\n    margin: auto;\r\n}\r\n\r\n.frame-button {\r\n    position: absolute;\r\n    z-index: 999;\r\n    right: 80px;\r\n}\r\n\r\n.modal-button {\r\n    position: absolute;\r\n    z-index: 999;\r\n    right: 5px;\r\n\r\n}\r\n\r\n.media-area{\r\n    width: 100%;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    \r\n}\r\n\r\n\r\n\r\n.aligncenter {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    flex-align: center;\r\n    -webkit-box-pack: center;\r\n    flex-pack: center;\r\n}\r\n\r\n.back:hover {\r\n\r\n    opacity: 0.7;\r\n}\r\n\r\n.back-arrow {\r\n    color: black;\r\n    opacity: 0.4;\r\n    position: absolute;\r\n}\r\n\r\n.back-arrow:hover {\r\n    opacity: 1;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.left-side {\r\n    left: 0;\r\n}\r\n\r\n.nav-arrow {\r\n    position: absolute;\r\n    top: 40%;\r\n    font-size: 36px;\r\n    padding: 25px;\r\n    color: white;\r\n    display: none\r\n}\r\n\r\n\r\n.nav-box {\r\n    z-index: 0;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 25%;\r\n}\r\n\r\n.nav-box:hover > .nav-arrow {\r\n    display: block;\r\n}\r\n\r\n.right-side {\r\n    right: 0;\r\n    \r\n}\r\n\r\n\r\n.dark-theme {\r\n    background-color: #000000;\r\n}\r\n\r\n.light-theme {\r\n    background-color: #E0E0E0;\r\n}\r\n\r\n.dropdown-content {\r\n    display: block;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n.story-container {\r\n    position: absolute;\r\n    width: 300px;\r\n    height: 400px;\r\n    top: 20%;\r\n    background-color: #fefefe;\r\n}\r\n\r\n.story-modal {\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 600;\r\n\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/media-modal/media-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-media-modal-details [@slideInOut]=\"menuState\" [media_item]=\"mediaItem\" class=\"shadow-5\" ></app-media-modal-details>\n\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\" #modal [@scaleBack]=\"menuState\"  >\n\n<div class=\"story-modal\" (click)=\"toggleStories()\" *ngIf=\"displayStories\">\n    <div class=\"flex-column\">\n    <div class=\"story-container\">\n    <div class=\"flex-column\">\n        <div *ngFor=\"let item of stories\" (click)=\"addToStory(item)\">\n            <h3>{{item.title}}</h3>\n        </div>\n    </div>\n    </div>\n    </div>\n</div>\n\n    <!-- Modal content -->\n    <div class=\"modal-content dark-theme\" >\n        <div class=\"modal-nav\">\n            <div class=\"nav-left\">\n                <button type=\"button\" (click)=\"close()\" class=\"back-icon\">\n                    <i class=\"material-icons\">arrow_back</i>\n                </button>\n            </div>\n\n            <div class=\"nav-right\">\n              <!--\n                <button (click)=\"toggleOptions()\"  (blur)=\"toggleOptions(false)\"  class=\"dropbtn\">+</button>\n                <div id=\"myDropdown\" class=\"dropdown-content\" *ngIf=\"displayOptions\">\n                    <a (mousedown)=\"toggleStories()\" >Add to story...</a>\n                </div>\n                <button (click)=\"findSimilar()\"  class=\"dropbtn\">HM</button>\n                -->\n                <button \n                class=\"btn-info btn\" \n                type=\"button\"    \n                (click)=\"showDetections()\">\n                <i class=\"material-icons\">info_outline</i>\n                </button>\n                <button \n                    class=\"btn-danger btn\" \n                    type=\"button\"    \n                    (click)=\"gotoDetails()\">\n                    <i class=\"material-icons\">info_outline</i>\n                </button>\n\n            </div>\n\n        </div>\n\n        <!--\n        <button type=\"button\" (click)=\"close()\" class=\"btn-lg btn-default back-arrow\">\n            <span class=\"glyphicon glyphicon-arrow-left\" ></span>\n        </button>\n        <div class=\"dropdown\">\n            <button (click)=\"toggleOptions()\" class=\"dropbtn\">+</button>\n            <div id=\"myDropdown\" class=\"dropdown-content\" *ngIf=\"displayOptions\">\n                <a (click)=\"showStories()\">Add to story...</a>\n            </div>\n        </div>\n        <button \n                class=\"btn-danger btn frame-button\" \n                type=\"button\"    \n                (click)=\"gotoFrames()\">\n                Frames\n        </button>\n        \n        <button \n            class=\"btn-danger btn modal-button\" \n            type=\"button\"    \n            (click)=\"gotoDetails()\">\n            Details\n        </button>\n        -->\n        <div class=\"media-area dark-theme\" *ngIf=\"mediaItem\">\n            <div class=\"nav-box left-side\" (click)=\"nextItem(-1)\"><div class=\"left-side nav-arrow\"><i class=\"material-icons\">chevron_left</i></div></div>\n            <div class=\"nav-box right-side\"  (click)=\"nextItem(1)\"><div class=\"right-side nav-arrow\"><i class=\"material-icons\">chevron_right</i></div></div>\n            <!-- http://res.cloudinary.com/kyon/image/upload/v1487010928/ -->\n            <div class=\"image-container\">\n                <ng-container *ngFor=\"let box of objectBoxes\">\n                    <div class=\"box-overlay\" [ngStyle]=\"{'height': box.height + 'px', 'width': box.width + 'px',\n                    'transform' : 'translate3d(' + box.left + 'px,' +  box.top + 'px, 0)'}\">\n                    {{box.name}}\n                    </div>\n                </ng-container>\n            <img class=\"modal-media-view\" *ngIf=\"mediaItem.kind == 'image'\" src=\"{{photoUrlService.getUrl(this.mediaItem, false)}}\" #image alt=\"Photo here\">\n\n            </div>\n           <!-- <img class=\"modal-media-view\" *ngIf=\"mediaItem.kind == 'image'\" src=\"http://localhost:8000/files/photos/{{mediaItem.id}}/orginal/{{mediaItem.title}}\" alt=\"Photo here\">-->\n            <video class=\"modal-media-view\" *ngIf=\"mediaItem.kind == 'video'\" controls src = \"http://localhost:8000/files/photos/{{mediaItem.id}}/preview/{{mediaItem.id}}.mp4\" #content autoplay ></video>\n        </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/gallery/media-modal/media-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__ = __webpack_require__("../../../../../src/app/services/photo-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_photo_url_service__ = __webpack_require__("../../../../../src/app/services/photo-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MediaModalComponent = (function () {
    function MediaModalComponent(route, router, photoApiService, galleryService, photoUrlService, cdr) {
        this.route = route;
        this.router = router;
        this.photoApiService = photoApiService;
        this.galleryService = galleryService;
        this.photoUrlService = photoUrlService;
        this.cdr = cdr;
        this.display_map = false;
        this.menuState = 'in';
        this.bload = false;
        this.stories = [];
        this.displayStories = false;
        this.displayOptions = false;
    }
    MediaModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.loadMedia(params['id']); });
    };
    MediaModalComponent.prototype.loadMedia = function (id) {
        var _this = this;
        console.log(this.route.data);
        this.photoApiService.getMediaByID(id).subscribe(function (resp) { return _this.mediaItem = resp; });
        this.photoApiService.getObjectDetections(id).subscribe(function (resp) { return _this.loadObjectDetections(resp); });
        this.objectBoxes = [];
        //this.service.setCurrentIndex(id);
    };
    MediaModalComponent.prototype.showDetections = function () {
        if (this.mediaItem.kind == "image" && this.myImageContainer !== undefined) {
            console.log(this.myImageContainer);
            var height = this.myImageContainer.nativeElement.clientHeight;
            var width = this.myImageContainer.nativeElement.clientWidth;
            var leftOffset = this.myImageContainer.nativeElement.offsetLeft;
            var topOffset = this.myImageContainer.nativeElement.offsetTop;
            for (var i = 0; i < this.objectDetections.length; i++) {
                var obj = this.objectDetections[i];
                var boxHeight = (height / 100) * (obj.box[2] - obj.box[0]);
                var boxWidth = (width / 100) * (obj.box[3] - obj.box[1]);
                var box = { top: (obj.box[0] * height / 100) + topOffset, left: (obj.box[1] * width / 100) + leftOffset, height: boxHeight, width: boxWidth, name: obj.class_name };
                this.objectBoxes.push(box);
            }
            console.log(this.objectBoxes);
            this.cdr.detectChanges();
        }
    };
    MediaModalComponent.prototype.nextItem = function (dir) {
        var item = this.galleryService.nextItem(this.mediaItem, dir);
        this.router.navigate(['photos', 'media', item]);
    };
    MediaModalComponent.prototype.gotoDetails = function () {
        console.log("Should close");
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    MediaModalComponent.prototype.loadObjectDetections = function (resp) {
        console.log(resp);
        resp.forEach(function (element) {
            if (!element.person) {
                element.person = { 'name': "" };
            }
        });
        this.objectDetections = resp;
    };
    MediaModalComponent.prototype.close = function () {
        this.router.navigate(['../../'], { relativeTo: this.route });
    };
    return MediaModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('image'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], MediaModalComponent.prototype, "myImageContainer", void 0);
MediaModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-media-modal',
        template: __webpack_require__("../../../../../src/app/gallery/media-modal/media-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/media-modal/media-modal.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('slideInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    transform: 'translate3d(0,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    transform: 'translate3d(100%,0,0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out'))
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('scaleBack', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    "width": 'calc(100% - 360px)', height: '100%'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    width: '100%', height: '100%'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('400ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__["a" /* PhotoApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__["a" /* PhotoApiService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_gallery_service__["a" /* GalleryService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_photo_url_service__["a" /* PhotoUrlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_photo_url_service__["a" /* PhotoUrlService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ChangeDetectorRef */]) === "function" && _g || Object])
], MediaModalComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=media-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\r\n    display: block;\r\n    background-color: white;\r\n    border-radius: 2px;\r\n    position: relative;\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 100%;\r\n    max-width: 720px;\r\n\r\n}\r\n\r\n\r\n.flex-wrap {\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n\r\n.modal-search {\r\n    display: block; /* Hidden by default */\r\n    position: absolute; /* Stay in place */\r\n    \r\n    left: 0;\r\n    top: 50px;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: hidden; /* Enable scroll if needed */\r\n    background-color: rgba(0, 0, 0, 0.22); /* Fallback color */\r\n    \r\n}\r\n\r\n.search-nav {\r\n    height: 48px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    \r\n}\r\n\r\n.back-arrow {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    width: 50px;\r\n    z-index: 1000;\r\n}\r\n\r\n.small-item {\r\n    padding: 5px;\r\n}\r\n\r\n.placeholder {\r\n    width: 50px;\r\n    height: 40px;\r\n}\r\n\r\n.search-field {\r\n    margin: auto;\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n\r\n.small-font {\r\n    font-size: 12px;\r\n}\r\n\r\n.btn-noradius {\r\n    border-radius: 0;\r\n}\r\n\r\n.active-option {\r\n    color: #111;\r\n    background-color: #dae0e5;\r\n}\r\n\r\n.small-input{\r\n    -ms-flex-negative: 1;\r\n        flex-shrink: 1;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    padding: 0;\r\n    margin: 0;\r\n    max-width: 40px;\r\n    border: none;\r\n    display: block;\r\n    outline: none;\r\n}\r\n\r\n.search-card {\r\n    z-index: 350;\r\n    margin-top: 0;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    max-width: 720px;\r\n    -webkit-box-flex: 0;\r\n        -ms-flex: 0 1 50vw;\r\n            flex: 0 1 50vw;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.search-wrapper {\r\n    height: 100%;\r\n}\r\n\r\n.search-below {\r\n    display: block;\r\n    background-color: white;\r\n    border-radius: 2px;\r\n    position: relative;\r\n    margin-top: 0;\r\n    margin-bottom: 16px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    width: 100%;\r\n    max-width: 720px;\r\n\r\n}\r\n\r\n.search-bar {\r\n    z-index: 200;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.search-container {\r\n    z-index: 1001;\r\n    display: block; /* Hidden by default */\r\n    position: fixed; /* Stay in place */    \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow-y: hidden; /* Enable scroll if needed */\r\n    background-color: rgba(0,0,0,0.62); /* Black w/ opacity */\r\n}\r\n\r\n\r\n.icon {\r\n    height: 36px;\r\n    width: 40px;\r\n\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nli {\r\n    padding: 5px 0 0 5px;\r\n    display: block;\r\n}\r\n\r\nli:hover {\r\n    background-color: #d7daec;\r\n}\r\n\r\n\r\n\r\n.nav-bar-left {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    padding: 0 0 0 0;\r\n}\r\n\r\n.nav-bar-center {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.nav-bar-right {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    min-width: 50px;\r\n}\r\n\r\n\r\n.nav-content {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n}\r\n\r\n.nav-bar {\r\n    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.12);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background-color: white;\r\n    width: 100%;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    height: 50px;\r\n    z-index: 600;\r\n    position: fixed;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.card-header {\r\n    font-size: 18px;\r\n    padding: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"search-container\">\n  <div class=\"nav-bar\">\n  <div class=\"nav-bar-left\">\n      <div class=\"back-arrow\">\n          <button type=\"button\" (click)=\"goBack()\" class=\"btn-default\">\n              <i class=\"material-icons\">arrow_back</i>\n          </button>\n      </div>\n  </div>\n  <div class=\"nav-bar-center\">\n      <div class=\"search-card\" >\n          <div class=\"input-group search-group\">\n              <div class=\"input-group-addon\"><i class=\"material-icons\">search</i></div>  \n              <div  class=\"input-chips form-control search-field\" >\n                <!--\n                  <button *ngFor=\"let item of search.keywords\" type=\"button\" class=\"btn btn-info chip\">\n                      {{item.name}}\n                  </button>-->\n                  <input class=\" search-field\" [(ngModel)]=\"searchStr\" (input)=\"onInput($event)\"  type=\"text\" placeholder=\"Search Here\" id=\"search\" autofocus>  \n              </div>\n          </div>\n      </div>\n  </div>\n  <div class=\"nav-bar-right\">\n\n  </div>\n  </div>\n  \n  \n  <div class=\"modal-search\">\n    <div class=\"search-wrapper\" (click)=\"closeModal($event)\">\n        \n        <div class= \"search-below shadow-1\">\n          <div class=\"flex-row flex-container\">\n            <div class=\"flex-row flex-start\">\n              <div class=\"btn-small btn btn-noradius\" *ngFor=\"let item of options\" [ngClass]=\"{'btn-primary':item.value==search.type}\" (click)=\"updateType(item.value)\">\n                {{item.name}}\n              </div>\n            </div>\n            <div class=\"flex-row flex-end\">\n              <div class=\"btn-small btn btn-noradius\" *ngFor=\"let item of ratingTypes\" [ngClass]=\"{'btn-primary':item.value==search.rating}\" (click)=\"updateRating(item.value)\">\n                {{item.name}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--\n        <div class=\"card shadow-1\">\n          <div class=\"flex-row\">\n\n            <span class=\"glyphicon glyphicon-user\"></span>\n            <h4>Properties</h4>\n          </div>\n            <ul>\n              <div class=\"flex-row flex-container\">\n                <div class=\"flex-row flex-start\">\n                  <div class=\"btn-small btn btn-noradius\" *ngFor=\"let item of durationRanges\" (click)=\"updateBuffer(item.value)\">\n                    {{item.name}}\n                  </div>\n                </div>\n                <div class=\"flex-row flex-end\">\n                  {{bufferInput[0]}}:{{bufferInput[1]}} to {{bufferInput[2]}}:{{bufferInput[3]}}\n                  \n                  <input class=\"small-input\" type=\"number\" [(ngModel)]=bufferInput[0]/>\n                  :\n                  <input class=\"small-input\" type=\"number\"  [(ngModel)]=bufferInput[1]/>\n                  \n                </div>\n              </div>\n                \n              </ul>\n        </div>\n        -->\n\n        <div class=\"card shadow-1\">\n          <div class=\"flex-row\">\n            <div class=\"card-header\">\n              People  \n            </div>\n            <div class=\"flex-row\">\n              <div *ngFor=\"let item of search.people; let i=index\">\n                <button \n                  class=\"btn btn-primary btn-sm\" \n                  type=\"button\"\n                  (click)=\"removePerson(i)\" >\n                {{item.name}}\n                </button>\n              </div>\n            </div>\n          </div>\n            <ul>\n                <li *ngFor=\"let item of filteredPeople\" (click)=\"addPerson(item)\">\n                  {{item.name}}\n                  <!--<app-person-widget [person]=\"item\"></app-person-widget>--></li>\n            </ul>\n        </div>\n\n        <div class=\"card shadow-1\" >\n          <div class=\"flex-row\">\n            <div class=\"card-header\">\n              Tags  \n            </div>\n            <div class=\"flex-row\">\n              <div *ngFor=\"let item of search.tags; let i=index\">\n                <button \n                  class=\"btn btn-primary btn-sm\" \n                  type=\"button\"\n                  (click)=\"removeTag(i)\" >\n                {{item.name}}\n                </button>\n              </div>\n            </div>\n          </div>\n          <div class=\"flex-row flex-wrap\">\n            <div *ngFor=\"let item of filteredTags\" (click)=\"addTag(item)\" class=\"small-item \">\n              <div class=\"btn-small btn-dark btn\">\n              {{item.name}} \n              <div class=\"small-font\">\n                ({{item.photo__count}})\n              </div>\n              </div>\n          </div>\n          </div>\n          \n        </div>\n        <div class=\"card shadow-1\">\n          <div class=\"flex-row\">\n            <h4>Date</h4>\n          </div>\n          <!--<app-date-picker></app-date-picker>-->\n        </div>\n    </div>\n  </div>\n    \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/gallery/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__ = __webpack_require__("../../../../../src/app/services/photo-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = (function () {
    function SearchComponent(router, route, photoApiService, galleryService) {
        this.router = router;
        this.route = route;
        this.photoApiService = photoApiService;
        this.galleryService = galleryService;
        this.search = {
            tags: [],
            people: [],
            rating: 0,
            duration: [-1, 0],
            type: "",
            $limit: 10000,
            private: false,
            "$sort[date]": -1
        };
        this.searchData = {
            tags: [],
            people: [],
        };
        this.searchStr = "";
        this.options = [{ 'name': 'All', 'value': "" }, { 'name': 'Photos', 'value': "image" }, { 'name': 'Videos', 'value': "video" }];
        this.ratingTypes = [{ 'name': 'Current', 'value': 0 }, { 'name': 'Archived', 'value': 3 }, { 'name': 'Showcase', 'value': 5 }, { 'name': 'Deleted', 'value': 1 },];
        this.durationRanges = [{ 'name': 'Short', 'value': [0, 60] }, { 'name': 'Medium', 'value': [61, 360] }, { 'name': 'Long', 'value': [-1, -1] }];
        this.bufferInput = [0, 0, 0, 0];
        this.filteredTags = [];
        this.filteredPeople = [];
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.search = this.galleryService.getQuery();
        this.loadKeywords();
    };
    SearchComponent.prototype.goBack = function () {
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    SearchComponent.prototype.closeModal = function (e) {
        console.log(e);
        if (e.target.className == "search-wrapper") {
            this.goBack();
        }
    };
    SearchComponent.prototype.updateBuffer = function (data) {
        this.bufferInput[0] = Math.floor(data[0] / 60);
        this.bufferInput[1] = data[0] % 60;
        this.bufferInput[2] = Math.floor(data[1] / 60);
        this.bufferInput[3] = data[1] % 60;
    };
    SearchComponent.prototype.loadKeywords = function () {
        var _this = this;
        this.photoApiService.getTags(this.search).subscribe(function (resp) { _this.searchData.tags = resp; _this.filterData(); });
        this.photoApiService.getPeople().subscribe(function (resp) { _this.searchData.people = resp; _this.filterData(); });
    };
    SearchComponent.prototype.filterData = function () {
        if (this.searchData.tags) {
            this.filteredTags = this.searchData.tags.slice(0, 20);
        }
        if (this.searchData.people) {
            this.filteredPeople = this.searchData.people.slice(0, 20);
        }
    };
    SearchComponent.prototype.onInput = function (e) {
        var value = e.target.value;
        if (value == "") {
            this.filterData();
        }
        else {
            this.filterKeywords(value);
        }
    };
    SearchComponent.prototype.filterKeywords = function (query) {
        console.log(query);
        this.filteredTags = [];
        this.filteredPeople = [];
        var tags = this.searchData.tags;
        console.log(this.searchData.tags);
        for (var i = 0; i < tags.length; i++) {
            var keyword = tags[i].name;
            console.log(keyword);
            if (keyword.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                this.filteredTags.push(tags[i]);
            }
        }
        tags = this.searchData.people;
        for (var i = 0; i < tags.length; i++) {
            var keyword = tags[i].name;
            console.log(keyword);
            if (keyword.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                this.filteredPeople.push(tags[i]);
            }
        }
    };
    SearchComponent.prototype.updateSearch = function () {
        this.galleryService.updateQuery(this.search);
        this.loadKeywords();
    };
    SearchComponent.prototype.addTag = function (tag) {
        this.search.tags.push(tag);
        this.updateSearch();
    };
    SearchComponent.prototype.addPerson = function (person) {
        this.search.people.push(person);
        this.updateSearch();
    };
    SearchComponent.prototype.updateType = function (type) {
        this.search.type = type;
        this.updateSearch();
    };
    SearchComponent.prototype.updateRating = function (rating) {
        this.search.rating = rating;
        this.updateSearch();
    };
    SearchComponent.prototype.removeTag = function (index) {
        this.search.tags.splice(index, 1);
        this.updateSearch();
    };
    SearchComponent.prototype.removePerson = function (index) {
        this.search.people.splice(index, 1);
        this.updateSearch();
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        template: __webpack_require__("../../../../../src/app/gallery/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery/search/search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__["a" /* PhotoApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_photo_api_service__["a" /* PhotoApiService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_gallery_service__["a" /* GalleryService */]) === "function" && _d || Object])
], SearchComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery/selection.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectionService = (function () {
    function SelectionService() {
        this.photosSelected = false;
        this.selectedMedia = [];
    }
    SelectionService.prototype.selectMedia = function (media) {
        if (media.selected == null || !media.selected) {
            media.selected = true;
            this.photosSelected = true;
            if (this.selectedMedia.indexOf(media) == -1) {
                this.selectedMedia.push(media);
            }
        }
        else {
            media.selected = false;
            var index = this.selectedMedia.indexOf(media);
            this.selectedMedia.splice(index, 1);
        }
        console.log(media);
    };
    SelectionService.prototype.endEdit = function () {
        for (var i = 0; i < this.selectedMedia.length; i++) {
            var media = this.selectedMedia[i];
            media.selected = false;
        }
        this.selectedMedia = [];
        this.photosSelected = false;
    };
    return SelectionService;
}());
SelectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SelectionService);

//# sourceMappingURL=selection.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var loginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] },
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(loginRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Login</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n        <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authService.login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                console.log("Logged in!");
                _this.router.navigate(['photos']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_routing_module__ = __webpack_require__("../../../../../src/app/login/login-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__login_routing_module__["a" /* LoginRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/manager/manager-export/manager-export.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".small-card {\r\n    height: 200px;\r\n    width: 300px;\r\n    background: white;\r\n    border-radius: 3px;\r\n    border: solid 1px grey;\r\n\r\n}\r\n\r\n.content {\r\n    padding: .25rem;\r\n}\r\n\r\n.btn-small {\r\n    padding: .25rem;\r\n    font-size: .75rem;\r\n}\r\n\r\n.btn {\r\n    border: solid 1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/manager-export/manager-export.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"small-card\">\n  <div class=\"content\">\n    <div class=\"flex-col flex-container\">\n      <div class=\"flex-row flex-start\">\n        <div class=\"btn-small btn btn-noradius\" *ngFor=\"let item of options\" [ngClass]=\"{'btn-primary':item.value==exportParams.type}\" (click)=\"updateType(item.value)\">\n          {{item.name}}\n        </div>\n      </div>\n      <div class=\"flex-row flex-end\">\n        <div class=\"btn-small btn btn-noradius\" *ngFor=\"let item of ratingTypes\" [ngClass]=\"{'btn-primary':item.value==exportParams.rating}\" (click)=\"updateRating(item.value)\">\n          {{item.name}}\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-small btn btn-noradius\">Export</div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manager/manager-export/manager-export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerExportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagerExportComponent = (function () {
    function ManagerExportComponent() {
        this.options = [{ 'name': 'All', 'value': "" }, { 'name': 'Photos', 'value': "image" }, { 'name': 'Videos', 'value': "video" }];
        this.ratingTypes = [{ 'name': 'Current', 'value': 0 }, { 'name': 'Archived', 'value': 3 }, { 'name': 'Showcase', 'value': 5 }, { 'name': 'Deleted', 'value': 1 },];
        this.exportParams = { type: 'image', rating: 5 };
    }
    ManagerExportComponent.prototype.ngOnInit = function () {
    };
    ManagerExportComponent.prototype.updateType = function (type) {
        this.exportParams.type = type;
    };
    ManagerExportComponent.prototype.updateRating = function (rating) {
        this.exportParams.rating = rating;
    };
    return ManagerExportComponent;
}());
ManagerExportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manager-export',
        template: __webpack_require__("../../../../../src/app/manager/manager-export/manager-export.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manager/manager-export/manager-export.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ManagerExportComponent);

//# sourceMappingURL=manager-export.component.js.map

/***/ }),

/***/ "../../../../../src/app/manager/manager-home/manager-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manager/manager-home/manager-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"router-padding\"> \n  <div>\n    <router-outlet></router-outlet>\n  </div>\n  <div class=\"small-card\" (click)=\"runCommand('detect_objects')\">\n    Run Object Detection\n  </div>\n  <div class=\"small-card\" (click)=\"runCommand('queue')\">\n      Check for new media\n    </div>\n  <div class=\"router-padding\">\n    <input type=\"file\" (change)=\"onFileSelect($event)\">\n    <div *ngFor=\"let file of files\">\n      <div>{{file.name}}</div>\n      <div>{{file.size}}</div>\n    </div>\n    <button (click)=\"upload()\">Import</button>\n    \n  </div>\n  <div [routerLink]=\"['export']\">\n    Export\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manager/manager-home/manager-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_photo_api_service__ = __webpack_require__("../../../../../src/app/services/photo-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManagerHomeComponent = (function () {
    function ManagerHomeComponent(authService, photoApiService) {
        this.authService = authService;
        this.photoApiService = photoApiService;
        this.files = [];
        this.method = 'POST';
        this.url = "https://young-everglades-73675.herokuapp.com/upload";
        this.progress = 0;
        this.name = "files";
    }
    ManagerHomeComponent.prototype.ngOnInit = function () {
    };
    ManagerHomeComponent.prototype.runCommand = function (cmd) {
        this.photoApiService.execCommand(cmd).subscribe(function (resp) { return console.log(resp); });
    };
    ManagerHomeComponent.prototype.isFileSelected = function (file) {
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var sFile = _a[_i];
            if ((sFile.name + sFile.type + sFile.size) === (file.name + file.type + file.size)) {
                return true;
            }
        }
        return false;
    };
    ManagerHomeComponent.prototype.onFileSelect = function (event) {
        var files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (!this.isFileSelected(file)) {
                this.files.push(files[i]);
            }
        }
    };
    ManagerHomeComponent.prototype.upload = function () {
        var xhr = new XMLHttpRequest(), formData = new FormData();
        for (var i = 0; i < this.files.length; i++) {
            formData.append(this.name, this.files[i], this.files[i].name);
        }
        xhr.open(this.method, this.url, true);
        xhr.setRequestHeader("Authorization", 'JWT ' + this.authService.token);
        xhr.send(formData);
    };
    return ManagerHomeComponent;
}());
ManagerHomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-manager-home',
        template: __webpack_require__("../../../../../src/app/manager/manager-home/manager-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/manager/manager-home/manager-home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_photo_api_service__["a" /* PhotoApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_photo_api_service__["a" /* PhotoApiService */]) === "function" && _b || Object])
], ManagerHomeComponent);

var _a, _b;
//# sourceMappingURL=manager-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/manager/manager-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_home_manager_home_component__ = __webpack_require__("../../../../../src/app/manager/manager-home/manager-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_export_manager_export_component__ = __webpack_require__("../../../../../src/app/manager/manager-export/manager-export.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var managerRoutes = [
    { path: 'manager', component: __WEBPACK_IMPORTED_MODULE_2__manager_home_manager_home_component__["a" /* ManagerHomeComponent */],
        children: [
            {
                path: 'export',
                component: __WEBPACK_IMPORTED_MODULE_3__manager_export_manager_export_component__["a" /* ManagerExportComponent */],
            },
        ] },
];
var ManagerRoutingModule = (function () {
    function ManagerRoutingModule() {
    }
    return ManagerRoutingModule;
}());
ManagerRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(managerRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], ManagerRoutingModule);

//# sourceMappingURL=manager-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/manager/manager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manager_home_manager_home_component__ = __webpack_require__("../../../../../src/app/manager/manager-home/manager-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager_export_manager_export_component__ = __webpack_require__("../../../../../src/app/manager/manager-export/manager-export.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manager_routing_module__ = __webpack_require__("../../../../../src/app/manager/manager-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ManagerModule = (function () {
    function ManagerModule() {
    }
    return ManagerModule;
}());
ManagerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__manager_routing_module__["a" /* ManagerRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__manager_home_manager_home_component__["a" /* ManagerHomeComponent */], __WEBPACK_IMPORTED_MODULE_3__manager_export_manager_export_component__["a" /* ManagerExportComponent */]]
    })
], ManagerModule);

//# sourceMappingURL=manager.module.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/nav/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/nav/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/nav/search-bar/search-bar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavModule = (function () {
    function NavModule() {
    }
    return NavModule;
}());
NavModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__top_bar_top_bar_component__["a" /* TopBarComponent */], __WEBPACK_IMPORTED_MODULE_3__side_bar_side_bar_component__["a" /* SideBarComponent */], __WEBPACK_IMPORTED_MODULE_5__search_bar_search_bar_component__["a" /* SearchBarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__top_bar_top_bar_component__["a" /* TopBarComponent */]]
    })
], NavModule);

//# sourceMappingURL=nav.module.js.map

/***/ }),

/***/ "../../../../../src/app/nav/search-bar/search-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-bar {\r\n    min-width: 360px;\r\n    max-width: 720px;\r\n    padding: .25rem;\r\n    max-height: 38px;\r\n}\r\n\r\n.btn-wrapper {\r\n    padding: .1rem;\r\n}\r\n\r\n.btn-small {\r\n    padding: .25rem;\r\n    font-size: .75rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group search-group\">\n  <span class=\"input-group-addon\"><i class=\"material-icons\">search</i></span>\n  <div class=\"flex-row form-control search-bar\">\n    <div class=\"btn-wrapper\" *ngIf=\"query.type\">\n      <div class=\"btn-small btn-primary btn\">\n      {{query.type}}\n      </div>\n    </div>\n    <div class=\"btn-wrapper\">\n      <div class=\"btn-small btn-primary btn\">\n      {{ratingTypes[query.rating]}}\n      </div>\n    </div>\n    <div class=\"btn-wrapper\" *ngFor=\"let item of query.people\">\n      <div class=\"btn-small btn-primary btn\">\n      {{item.name}}\n      </div>\n    </div>\n    <div class=\"btn-wrapper\" *ngFor=\"let item of query.tags\">\n      <div class=\"btn-small btn-primary btn\">\n      {{item.name}}\n      </div>\n    </div>\n  \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/nav/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__ = __webpack_require__("../../../../../src/app/services/gallery.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBarComponent = (function () {
    function SearchBarComponent(galleryService) {
        this.galleryService = galleryService;
        this.query = null;
        this.ratingTypes = { '0': 'Current', '3': 'Archived', '5': 'Showcase', '1': 'Deleted' };
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.query = this.galleryService.query;
    };
    SearchBarComponent.prototype.getQuery = function () {
        this.query = this.galleryService.getQuery();
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-bar',
        template: __webpack_require__("../../../../../src/app/nav/search-bar/search-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/search-bar/search-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gallery_service__["a" /* GalleryService */]) === "function" && _a || Object])
], SearchBarComponent);

var _a;
//# sourceMappingURL=search-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    background: #ffffff;\r\n    color: rgba(0, 0, 0, 0.79);\r\n    position: fixed;\r\n    top: 0;\r\n    left: -280px;\r\n    bottom: 0;\r\n    width: 280px;\r\n    z-index: 500;\r\n    font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif;\r\n  }\r\n  \r\n  \r\n   \r\n  ul {\r\n    font-size: 18px;\r\n    line-height: 3;\r\n    font-weight: 400;\r\n    padding-top: 50px;\r\n    list-style: none;\r\n  }\r\n  \r\n  li {\r\n      padding: 5px 0 0 5px;\r\n      display: block;\r\n  }\r\n  \r\n  li:hover {\r\n      background-color: #d7daec;\r\n  }\r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul>\n    <li role=\"presentation\" [routerLink] = \"['/photos']\"  >Timeline</li>\n    <li role=\"presentation\" [routerLink] = \"['/helpmate']\"  >HelpMate</li>\n    <li role=\"presentation\" [routerLink] = \"['/manager']\"  >Manager</li>\n    <li>About</li>\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideBarComponent = (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/nav/side-bar/side-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/side-bar/side-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SideBarComponent);

//# sourceMappingURL=side-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/top-bar/top-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.nav-bar-left {\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    padding: 0 5px 0 50px;\r\n    cursor: pointer;\r\n}\r\n\r\n.nav-bar-center {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.nav-bar-right {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    min-width: 50px;\r\n    padding-right: 50px;\r\n}\r\n\r\n:host {\r\n    background: inherit;\r\n    left: inherit;\r\n    width: inherit;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-side-bar [@slideInOut]=\"menuState\" class=\"shadow-5\" (click)=\"hideSide()\"></app-side-bar>\n\n<div class=\"nav-top-bar\">\n  <div class=\"nav-bar-left\" (click)=\"toggleMenu()\">\n    <div class=\"nav-content\">\n      \n      <span class=\"glyphicon glyphicon-th-large\"></span>\n      <div class=\"logo\" >\n        Memoria\n      </div>\n      <div class=\"sublogo\">\n      </div>\n    </div>\n    \n  </div>\n  <div class=\"nav-bar-center\" (click)=\"gotoSearch()\">\n    <app-search-bar></app-search-bar>\n  </div>\n  <div class=\"nav-bar-right\">\n    <div>\n      <!--\n      <div *ngIf=\"authService.loggedin\">\n        {{authService.username}}\n      </div> -->\n      <div [routerLink] = \"['/login']\">\n        Login\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/nav/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopBarComponent = (function () {
    function TopBarComponent(route, router) {
        this.route = route;
        this.router = router;
        this.menuState = 'in';
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent.prototype.gotoSearch = function () {
        this.router.navigate(['search'], { relativeTo: this.route });
    };
    TopBarComponent.prototype.hideSide = function () {
        this.menuState = 'in';
    };
    TopBarComponent.prototype.toggleMenu = function () {
        console.log("Toggle menu");
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    };
    return TopBarComponent;
}());
TopBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-top-bar',
        template: __webpack_require__("../../../../../src/app/nav/top-bar/top-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/top-bar/top-bar.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('slideInOut', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({
                    transform: 'translate3d(100%, 0, 0)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('400ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('400ms ease-in-out'))
            ]),
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TopBarComponent);

var _a, _b;
//# sourceMappingURL=top-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': 'JWT ',
            Accept: 'application/json'
        });
        // https://media-database.herokuapp.com  http://localhost:3030
        this.api_url = 'https://young-everglades-73675.herokuapp.com';
        this.loggedin = false;
        this.token = "";
        this.username = "";
    }
    ApiService.prototype.setBaseUrl = function (url) {
        this.api_url = url;
    };
    ApiService.prototype.getJson = function (response) {
        console.log(response.json());
        return response.json();
    };
    ApiService.prototype.updateAuth = function () {
        this.headers.set('Authorization', 'JWT ');
    };
    ApiService.prototype.setAuth = function (token) {
        this.headers.set('Authorization', 'JWT ' + token);
    };
    ApiService.prototype.getMap = function (path) {
        return this.http.get("" + path, { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); })
            .map(this.getJson);
    };
    ApiService.prototype.checkForError = function (response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    };
    ApiService.prototype.put = function (path, data) {
        console.log(this.api_url + path);
        return this.http.put("" + this.api_url + path, JSON.stringify(data), { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); })
            .map(this.getJson);
    };
    ApiService.prototype.get = function (path, extras) {
        if (extras === void 0) { extras = {}; }
        console.log(this.api_url + path);
        return this.http.get("" + this.api_url + path, { headers: this.headers, params: extras })
            .map(this.checkForError)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); })
            .map(this.getJson);
    };
    ApiService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        return this.http.post(this.api_url + "/api-token-auth/", JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                _this.username = username;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this.setAuth(token);
                _this.loggedin = true;
                //this.api.setAuth(token);
                //this.apiService.setAuth(this.token);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    ApiService.prototype.post = function (path, body) {
        return this.http.post("" + this.api_url + path, JSON.stringify(body), { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); })
            .map(this.getJson);
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + this.api_url + path, { headers: this.headers })
            .map(this.checkForError)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); })
            .map(this.getJson);
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuardService.prototype.onCheck = function (isLoggedIn) {
        if (isLoggedIn) {
            return true;
        }
        else {
            // Store the attempted URL for redirecting
            //his.authService.redirectUrl = url;
            console.log("Not Logged In");
            // Navigate to the login page with extras
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuardService.prototype.checkLogin = function (url) {
        var _this = this;
        return this.authService.isLoggedIn().map(function (resp) { return _this.onCheck(resp); });
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__photo_url_service__ = __webpack_require__("../../../../../src/app/services/photo-url.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, apiService, photoUrlService) {
        this.http = http;
        this.apiService = apiService;
        this.photoUrlService = photoUrlService;
        this.token = "";
        this.username = "";
        this.currentConnection = "http://localhost:8000";
        this.isWeb = false;
        this.loggedIn = false;
        this.webAddress = "https://young-everglades-73675.herokuapp.com";
        this.localAddress = "http://localhost:8000";
        this.isConnected = false;
        console.log("Construct called");
    }
    AuthService.prototype.isLoggedIn = function () {
        console.log("Checking ", this.isConnected);
        if (!this.isConnected) {
            return this.checkStorage();
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(this.loggedIn);
        }
    };
    AuthService.prototype.checkStorage = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser && currentUser.username;
        this.token = currentUser && currentUser.token;
        this.currentConnection = localStorage.getItem('currentConnection');
        return this.checkLogin();
    };
    AuthService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.username = currentUser && currentUser.username;
        this.token = currentUser && currentUser.token;
        return this.token;
    };
    AuthService.prototype.updateServices = function () {
        var address = this.currentConnection;
        var isWeb = address != this.localAddress;
        console.log({ isWeb: isWeb, address: address });
        this.apiService.setAuth(this.token);
        this.apiService.setBaseUrl(address);
        this.photoUrlService.setServer(isWeb);
    };
    AuthService.prototype.setCurrentConnection = function (isWeb) {
        var address;
        if (isWeb) {
            address = this.webAddress;
        }
        else {
            address = this.localAddress;
        }
        this.apiService.setBaseUrl(address);
        this.photoUrlService.setServer(isWeb);
        this.currentConnection = address;
        localStorage.setItem('currentConnection', address);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.currentConnection + "/api-token-auth/", JSON.stringify({ username: username, password: password }), options)
            .map(this.checkForError)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err); })
            .map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                _this.apiService.setAuth(_this.token);
                _this.username = username;
                _this.loggedIn = true;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                _this.isConnected = true;
                //this.api.setAuth(token);
                //this.apiService.setAuth(this.token);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthService.prototype.checkLogin = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.post(this.currentConnection + "/api-token-verify/", JSON.stringify({ "token": this.token }), options)
            .map(this.checkForError)
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(false); })
            .map(function (response) {
            if (!response) {
                return false;
            }
            var token = response.json() && response.json().token;
            if (token) {
                _this.isConnected = true;
                _this.loggedIn = true;
                _this.updateServices();
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthService.prototype.checkForError = function (response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__photo_url_service__["a" /* PhotoUrlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__photo_url_service__["a" /* PhotoUrlService */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/gallery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_api_service__ = __webpack_require__("../../../../../src/app/services/photo-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryService = (function () {
    function GalleryService(apiService) {
        this.apiService = apiService;
        this.path = '/media';
        this.dataSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"](1);
        this.hoverPhoto = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.hoveredPhoto = this.hoverPhoto.asObservable();
        this.selectPhoto = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.selectedPhoto = this.selectPhoto.asObservable();
        this.data$ = this.dataSubject.asObservable();
        this.dataLocal = [];
        this.mapBounds = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.onMapChanged = this.mapBounds.asObservable();
        this.query = {
            tags: [],
            people: [],
            rating: 5,
            duration: [-1, 0],
            type: "",
            $limit: 10000,
            private: false,
            "$sort[date]": -1
        };
    }
    GalleryService.prototype.fetchPreData = function () {
        var _this = this;
        this.apiService.queryMedia(this.query).subscribe(function (res) { return _this.loadData(res); });
    };
    GalleryService.prototype.photoHover = function (photo) {
        this.hoverPhoto.next(photo);
    };
    GalleryService.prototype.loadData = function (res) {
        this.dataSubject.next(res);
        this.dataLocal = res.map(function (e) { return e.id; });
    };
    GalleryService.prototype.photoClicked = function (photo) {
        this.selectPhoto.next(photo);
    };
    GalleryService.prototype.updateQuery = function (newQuery) {
        this.query = newQuery;
        this.fetchPreData();
    };
    GalleryService.prototype.nextItem = function (media, dir) {
        console.log(media);
        console.log(this.dataLocal);
        var index = this.dataLocal.indexOf(media.id);
        console.log(index);
        return this.dataLocal[(index + dir)];
    };
    GalleryService.prototype.getPhotoUrl = function (photo, preview) {
    };
    GalleryService.prototype.mapChange = function (data) {
        //console.log(data);
        this.mapBounds.next(data);
    };
    GalleryService.prototype.getQuery = function () {
        return this.query;
    };
    GalleryService.prototype.getDetections = function (mediaID) {
        return this.apiService.getPersonDetections(mediaID);
    };
    GalleryService.prototype.tagPerson = function (detection) {
        return this.apiService.updatePersonDetection(detection);
    };
    return GalleryService;
}());
GalleryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__photo_api_service__["a" /* PhotoApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__photo_api_service__["a" /* PhotoApiService */]) === "function" && _a || Object])
], GalleryService);

var _a;
//# sourceMappingURL=gallery.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/photo-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/services/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhotoApiService = (function () {
    function PhotoApiService(apiService) {
        this.apiService = apiService;
        this.path = '/media';
    }
    PhotoApiService.prototype.queryMedia = function (query) {
        return this.apiService.post(this.path + "/search", query);
    };
    PhotoApiService.prototype.getMediaByID = function (id) {
        return this.apiService.get("/media_id/" + id);
    };
    PhotoApiService.prototype.getTags = function (data) {
        return this.apiService.post("/metadata/tags/", data);
    };
    PhotoApiService.prototype.getPeople = function () {
        return this.apiService.get("/metadata/people/");
    };
    PhotoApiService.prototype.getObjectDetections = function (id) {
        return this.apiService.get("/objects/" + id);
    };
    PhotoApiService.prototype.updatePhoto = function (photo) {
        return this.apiService.put("/media_id/" + photo.id, photo);
    };
    PhotoApiService.prototype.getPersonDetections = function (personID) {
        return this.apiService.get("/detections/" + personID);
    };
    PhotoApiService.prototype.updatePersonDetection = function (detection) {
        return this.apiService.put("/detections/" + detection.id + "/", detection);
    };
    PhotoApiService.prototype.execCommand = function (command) {
        return this.apiService.get("/admin", { 'command': command });
    };
    return PhotoApiService;
}());
PhotoApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], PhotoApiService);

var _a;
//# sourceMappingURL=photo-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/photo-url.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUrlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoUrlService = (function () {
    function PhotoUrlService() {
        this.serverBase = {
            web: "http://res.cloudinary.com/kyon/photos",
            local: "http://localhost:8000/files/photos"
        };
        this.activeServer = 'web';
    }
    PhotoUrlService.prototype.setServer = function (option) {
        this.activeServer = option ? 'web' : 'local';
    };
    PhotoUrlService.prototype.getUrl = function (photo, isPreview) {
        var endUrl;
        var subUrl;
        var finalUrl;
        if (this.activeServer == 'web') {
            if (isPreview) {
                finalUrl = this.serverBase[this.activeServer] + "/preview/" + photo.hashTitle + ".jpg";
            }
            else {
                finalUrl = this.serverBase[this.activeServer] + "/full/" + photo.hashTitle + ".jpg";
            }
        }
        else {
            if (isPreview) {
                finalUrl = this.serverBase[this.activeServer] + "/" + photo.id + "/preview/" + photo.id + "-small.jpg";
            }
            else {
                finalUrl = this.serverBase[this.activeServer] + "/" + photo.id + "/orginal/" + photo.title;
            }
        }
        return finalUrl;
    };
    return PhotoUrlService;
}());
PhotoUrlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PhotoUrlService);

//# sourceMappingURL=photo-url.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mapid { height: 100%; width: 100%} \r\n\r\n.map-container {\r\n    height:100%;\r\n    width: 100%;\r\n}\r\n\r\n:host {\r\n    height:100%;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\n  <div id=\"mapid\" ></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedMapComponent = (function () {
    function SharedMapComponent(_zone) {
        this._zone = _zone;
        this.cluster = [];
        this.mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SharedMapComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    SharedMapComponent.prototype.ngOnChanges = function () {
        if (this.mymap != null) {
            this.markers.clearLayers();
            this.markers.addLayers(this.cluster);
            //this.loaded = true;
            this.mymap.addLayer(this.markers);
            console.log(this.cluster);
            console.log(this.markers);
        }
    };
    SharedMapComponent.prototype.initMap = function () {
        console.log(L);
        L.mapbox.accessToken = 'pk.eyJ1Ijoia3lyb25lIiwiYSI6ImNpeGtvZmYxYzAwNGszMmwxenhibnJlYzcifQ.p8RUBkfy_5vLbNOtO71E1w';
        this.mymap = this._zone.runOutsideAngular(function () { return L.mapbox.map('mapid', 'https://api.mapbox.com/v4/mapbox.mapbox-streets-v7.json', { zoomControl: false, zoomAnimation: false, renderer: L.canvas() }).setView([36.2168, -81.6746], 13); });
        var styleLayer = L.mapbox.styleLayer("mapbox://styles/kyrone/cixrz4eda001l2rn2l2idkf9o")
            .addTo(this.mymap);
        this.markers = L.markerClusterGroup({ spiderfyDistanceMultiplier: 3 });
        //this.layer = L.tileLayer('https://api.mapbox.com/styles/v1/kyrone/cixrz4eda001l2rn2l2idkf9o/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3lyb25lIiwiYSI6ImNpeGtvZmYxYzAwNGszMmwxenhibnJlYzcifQ.p8RUBkfy_5vLbNOtO71E1w', {zoomControl: false})
        this.mapReady.next(this.mymap);
        this.markers.addLayers(this.cluster);
        this.mymap.addLayer(this.markers);
        //this.mymap.addLayer(this.layer)
    };
    return SharedMapComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SharedMapComponent.prototype, "cluster", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SharedMapComponent.prototype, "mapReady", void 0);
SharedMapComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-shared-map',
        template: __webpack_require__("../../../../../src/app/shared/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/map/map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object])
], SharedMapComponent);

var _a;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_component__ = __webpack_require__("../../../../../src/app/shared/map/map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* SharedMapComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__map_map_component__["a" /* SharedMapComponent */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map