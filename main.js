(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <app-header></app-header>\r\n  <div class=\"main-content\">\r\n    <router-outlet></router-outlet>\r\n    <app-alert></app-alert>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fight-card/fight-card.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fight-card/fight-card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let fight of fights\">\r\n  <div class=\"game-label cursor\"\r\n       [ngStyle]=\"fight.titleFight && {'background-color': 'gold'}\"\r\n       (click)=\"fightClick(fight)\"\r\n  >\r\n    <span class=\"person-label column right\">{{this.getPerson(fight.title)}}</span>\r\n    <span class=\"at-label column\">vs.</span>\r\n    <span class=\"person-label column\">{{this.getPerson(fight.title, false)}}</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/media-search-widget/media-search-widget.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/media-search-widget/media-search-widget.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sport-ctn media-search\">\r\n  <mat-accordion>\r\n    <mat-expansion-panel\r\n      (opened)=\"expanded = true\"\r\n      (closed)=\"close()\"\r\n      class=\"expansion\"\r\n    >\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <div>\r\n            Media Search\r\n          </div>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div class=\"search\">\r\n        <input type=\"text\" (keyup.enter)=\"search()\" [formControl]=\"control\">\r\n        <mat-icon (click)=\"search()\">search</mat-icon>\r\n      </div>\r\n      <div id=\"result-container\" *ngIf=\"searchResults?.length > 0 || hasSearched || hasError\">\r\n        <div class=\"results\" *ngFor=\"let result of searchResults\">\r\n          <p>{{result}}</p>\r\n        </div>\r\n        <div class=\"results\" *ngIf=\"searchResults?.length === 0 && hasSearched\">\r\n          <p>No Results</p>\r\n        </div>\r\n\r\n        <div class=\"results error\" *ngIf=\"hasError\">\r\n          <p>Error Occurred</p>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </mat-accordion>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mma-widget/mma-widget.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mma-widget/mma-widget.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sport-ctn\" *ngIf=\"this.settingsService.showMma && fightCard?.main?.length > 0\">\r\n  <div class=\"sport-title\">MMA</div>\r\n  <div class=\"sport-game-ctn\">\r\n    <div class=\"date-label\">{{fightCard.date}}</div>\r\n\r\n    <!--            MAIN CARD-->\r\n    <div class=\"date-label\">Main Card</div>\r\n    <app-fight-card [fights]=\"fightCard.main\"></app-fight-card>\r\n\r\n    <!--            UNDER CARD-->\r\n    <div class=\"date-label\" *ngIf=\"fightCard?.under?.length > 0\">\r\n      Under Card\r\n    </div>\r\n    <app-fight-card [fights]=\"fightCard.under\"></app-fight-card>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sport-widget/sport-widget.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sport-widget/sport-widget.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sport-ctn\"\r\n     *ngIf=\"shouldShow() && gamesPerDate?.games?.length > 0\">\r\n  <div class=\"sport-title\">{{this.isBasketball ? 'Basketball' : 'Football'}}</div>\r\n  <div class=\"sport-game-ctn\">\r\n    <span class=\"date-label\">{{gamesPerDate.date}}</span>\r\n    <div *ngFor=\"let game of gamesPerDate.games\">\r\n      <div class=\"game-label\">\r\n        <div (click)=\"imgClick(game, false)\" class=\"cursor\">\r\n          <!--                  <span class=\"at-label column\" *ngIf=\"game.opponentImageLink\">-->\r\n          <!--                    <img src=\"{{game.opponentImageLink}}\" alt=\"Visiting Team Image\" (click)=\"imgClick(game, false)\">-->\r\n          <!--                  </span>-->\r\n          <span class=\"away-label column\">{{game.opponent}}</span>\r\n        </div>\r\n        <span class=\"at-label column\">@</span>\r\n        <div (click)=\"imgClick(game)\" class=\"cursor\">\r\n          <!--                  <span class=\"at-label column\" *ngIf=\"game.homeImageLink\" (click)=\"imgClick(game)\">-->\r\n          <!--                    <img src=\"{{game.homeImageLink}}\" alt=\"Home Team Image\">-->\r\n          <!--                  </span>-->\r\n          <span class=\"home-label column\">{{game.home}}</span>\r\n        </div>\r\n        <span class=\"time-label column\">{{this.liveTime(game.time)}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div class=\"header-div\">\r\n    <header data-header-title>{{this.settingsService.title}}</header>\r\n  </div>\r\n\r\n  <app-media-search-widget></app-media-search-widget>\r\n\r\n  <div data-content-div>\r\n    <app-sport-widget [gamesPerDate]=\"basketball\"></app-sport-widget>\r\n    <app-sport-widget [gamesPerDate]=\"football\" [isBasketball]=\"false\"></app-sport-widget>\r\n    <app-mma-widget [fightCard]=\"mma\"></app-mma-widget>\r\n  </div>\r\n\r\n  <span class=\"refresh-count\">Refresh count: {{this.refreshCount}}</span>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div class=\"header-div\">\r\n    <header data-header-title>Settings</header>\r\n  </div>\r\n\r\n  <div data-settings-input>\r\n    <!-- TITLE  -->\r\n    <div class=\"settings-value-ctn\">\r\n      <div data-title-label class=\"settings-value-label\">Title</div>\r\n      <mat-form-field class=\"settings-value-form-field\">\r\n        <input matInput data-title\r\n               type=\"text\"\r\n               rows=\"1\"\r\n               [formControl]=\"titleControl\"\r\n        >\r\n        <mat-error data-basic-error *ngIf=\"!titleControl.valid\">\r\n          Title is required\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n    <!-- REFRESH RATE  -->\r\n    <div class=\"settings-value-ctn\">\r\n      <div data-refresh-rate-input-label class=\"settings-value-label\">Refresh Rate (min)</div>\r\n      <mat-form-field class=\"settings-value-form-field\">\r\n        <input matInput data-refresh-rate-input\r\n               type=\"number\"\r\n               rows=\"1\"\r\n               [formControl]=\"refreshRateControl\"\r\n        >\r\n        <mat-error data-basic-error *ngIf=\"!refreshRateControl.hasError('required')\">\r\n          Refresh Rate is required\r\n        </mat-error>\r\n        <mat-error data-max-error *ngIf=\"!refreshRateControl.hasError('max')\">\r\n          Refresh Rate cannot exceed 1000\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <!-- show basketball?  -->\r\n    <app-yes-no-dropdown [control]=\"showBasketballControl\"\r\n                         [htmlId]=\"'show-basketball'\"\r\n                         [name]=\"'Show Basketball Games'\"\r\n    ></app-yes-no-dropdown>\r\n    <!-- show football?  -->\r\n    <app-yes-no-dropdown [control]=\"showFootballControl\"\r\n                         [htmlId]=\"'show-football'\"\r\n                         [name]=\"'Show Football Games'\"\r\n    ></app-yes-no-dropdown>\r\n    <!-- show mma?  -->\r\n    <app-yes-no-dropdown [control]=\"showMmaControl\"\r\n                         [htmlId]=\"'show-mma'\"\r\n                         [name]=\"'Show MMA Fights'\"\r\n    ></app-yes-no-dropdown>\r\n    <!-- which basketball?  -->\r\n    <app-yes-no-dropdown [control]=\"whichBasketballControl\"\r\n                         [htmlId]=\"'which-basketball'\"\r\n                         [yesOption]=\"this.settingsService.TODAY\"\r\n                         [noOption]=\"this.settingsService.UPCOMING\"\r\n                         [name]=\"'Which Basketball Games'\"\r\n    ></app-yes-no-dropdown>\r\n    <!-- which football?  -->\r\n    <app-yes-no-dropdown [control]=\"whichFootballControl\"\r\n                         [htmlId]=\"'which-football'\"\r\n                         [yesOption]=\"this.settingsService.TODAY\"\r\n                         [noOption]=\"this.settingsService.UPCOMING\"\r\n                         [name]=\"'Which Football Games'\"\r\n    ></app-yes-no-dropdown>\r\n    <!-- which mma?  -->\r\n    <app-yes-no-dropdown [control]=\"whichMmaControl\"\r\n                         [htmlId]=\"'which-mma'\"\r\n                         [yesOption]=\"this.settingsService.TODAY\"\r\n                         [noOption]=\"this.settingsService.UPCOMING\"\r\n                         [name]=\"'Which MMA Fights'\"\r\n    ></app-yes-no-dropdown>\r\n    <!-- COLOR  -->\r\n    <div class=\"dropdown-ctn\">\r\n      <div data-dropdown-label class=\"dropdown__label\">\r\n        Color - *Applies Immediately\r\n      </div>\r\n      <div class=\"dropdown__data\">\r\n        <mat-form-field class=\"dropdown-form-field\">\r\n          <mat-label>Select Value</mat-label>\r\n          <mat-select [formControl]=\"colorControl\" (selectionChange)=\"setColor()\"\r\n                      [ngStyle]=\"{'background-color': getBackgroundColor(this.colorControl.value)}\">\r\n            <mat-option *ngFor=\"let color of this.colors\" data-dropdown-option [value]=\"color.value\"\r\n                        [ngStyle]=\"{'background-color': getBackgroundColor(color.value)}\"\r\n            >\r\n              {{color.name}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"buttons\">\r\n    <button data-button-apply\r\n            (click)=\"applyToSettings()\"\r\n            [disabled]=\"!this.settingsFormGroup.valid\"\r\n            class=\"apply-button\">Apply\r\n    </button>\r\n    <div>\r\n      <button data-button-reset-everything\r\n              (click)=\"resetEverything()\"\r\n              class=\"reset-button\">Reset Everything\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/settings-page/settings-page.component */ "./src/app/pages/settings-page/settings-page.component.ts");





const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'home',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: 'settings',
        component: _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_4__["SettingsPageComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'home-page';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_alert_alert_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/alert/alert.module */ "./src/app/components/alert/alert.module.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/settings-page/settings-page.component */ "./src/app/pages/settings-page/settings-page.component.ts");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _components_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/confirmation-popup/confirmation-popup.component */ "./src/app/components/confirmation-popup/confirmation-popup.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_yes_no_dropdown_yes_no_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/yes-no-dropdown/yes-no-dropdown.component */ "./src/app/components/yes-no-dropdown/yes-no-dropdown.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_sport_widget_sport_widget_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sport-widget/sport-widget.component */ "./src/app/components/sport-widget/sport-widget.component.ts");
/* harmony import */ var _components_mma_widget_mma_widget_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/mma-widget/mma-widget.component */ "./src/app/components/mma-widget/mma-widget.component.ts");
/* harmony import */ var _components_fight_card_fight_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/fight-card/fight-card.component */ "./src/app/components/fight-card/fight-card.component.ts");
/* harmony import */ var _components_media_search_widget_media_search_widget_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/media-search-widget/media-search-widget.component */ "./src/app/components/media-search-widget/media-search-widget.component.ts");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationPopupComponent"],
            _components_fight_card_fight_card_component__WEBPACK_IMPORTED_MODULE_19__["FightCardComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _components_media_search_widget_media_search_widget_component__WEBPACK_IMPORTED_MODULE_20__["MediaSearchWidgetComponent"],
            _components_mma_widget_mma_widget_component__WEBPACK_IMPORTED_MODULE_18__["MmaWidgetComponent"],
            _pages_settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_10__["SettingsPageComponent"],
            _components_sport_widget_sport_widget_component__WEBPACK_IMPORTED_MODULE_17__["SportWidgetComponent"],
            _components_yes_no_dropdown_yes_no_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["YesNoDropdownComponent"]
        ],
        entryComponents: [_components_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmationPopupComponent"]],
        imports: [
            _components_alert_alert_module__WEBPACK_IMPORTED_MODULE_8__["AlertModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"]
        ],
        providers: [
            _services_settings_service__WEBPACK_IMPORTED_MODULE_11__["SettingsService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/alert/alert.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("[data-alert-container] {\n  background-color: antiquewhite;\n  max-width: 600px;\n  border-radius: 10px;\n  position: fixed;\n  bottom: 10px;\n  right: 50px;\n}\n\n[data-a] {\n  font-size: xx-large;\n  padding-right: 5px;\n  padding-left: 5px;\n  cursor: default;\n}\n\n[data-span] {\n  font-size: xx-large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9jOlxcd29ya3NwYWNlXFxob21lLXBhZ2Uvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFsZXJ0XFxhbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbZGF0YS1hbGVydC1jb250YWluZXJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbltkYXRhLWFdIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbltkYXRhLXNwYW5dIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcbiIsIltkYXRhLWFsZXJ0LWNvbnRhaW5lcl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogNTBweDtcbn1cblxuW2RhdGEtYV0ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbltkYXRhLXNwYW5dIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _models_alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/alert.model */ "./src/app/models/alert.model.ts");





let AlertComponent = class AlertComponent {
    constructor(router, alertService) {
        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
    }
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
            // clear alerts when an empty alert is received
            if (!alert.message) {
                // filter out alerts without 'keepAfterRouteChange' flag
                this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);
                // remove 'keepAfterRouteChange' flag on the rest
                this.alerts.forEach(x => delete x.keepAfterRouteChange);
                return;
            }
            // add alert to array
            this.alerts.push(alert);
            // auto close alert if required
            if (alert.autoClose) {
                setTimeout(() => this.removeAlert(alert), 3000);
            }
        });
        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.alertService.clear(this.id);
            }
        });
    }
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        if (this.alertSubscription)
            this.alertSubscription.unsubscribe();
        if (this.routeSubscription)
            this.routeSubscription.unsubscribe();
    }
    removeAlert(alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert)) {
            return;
        }
        if (this.fade) {
            // fade out alert
            this.alerts.find(x => x === alert).fade = true;
            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        }
        else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        const classes = ['alert', 'alert-dismissable'];
        const alertTypeClass = {
            [_models_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success]: 'alert alert-success',
            [_models_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error]: 'alert alert-danger',
            [_models_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info]: 'alert alert-info',
            [_models_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning]: 'alert alert-warning'
        };
        classes.push(alertTypeClass[alert.type]);
        if (alert.fade) {
            classes.push('fade');
        }
        return classes.join(' ');
    }
};
AlertComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlertComponent.prototype, "fade", void 0);
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alert',
        template: `
    <div *ngFor="let alert of alerts" class="{{cssClass(alert)}}" data-alert-container>
      <a class="close" (click)="removeAlert(alert)" data-a>&times;</a>
      <span [innerHTML]="alert.message" data-span></span>
    </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alert.component.scss */ "./src/app/components/alert/alert.component.scss")).default]
    })
], AlertComponent);



/***/ }),

/***/ "./src/app/components/alert/alert.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/alert/alert.module.ts ***!
  \**************************************************/
/*! exports provided: AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.component */ "./src/app/components/alert/alert.component.ts");




let AlertModule = class AlertModule {
};
AlertModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
        exports: [_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]]
    })
], AlertModule);



/***/ }),

/***/ "./src/app/components/confirmation-popup/confirmation-popup.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/confirmation-popup/confirmation-popup.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n.right {\n  align-items: end;\n}\n.cursor {\n  cursor: pointer;\n  display: inline-block;\n}\n.sport-ctn {\n  display: flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.sport-title {\n  font-size: x-large;\n  font-weight: 500;\n  padding: 5px;\n  align-self: center;\n}\n.date-label {\n  align-self: center;\n  padding: 1vh 0;\n}\n.at-label, .time-label {\n  padding: 0 0.5vw;\n}\n.away-label, .home-label {\n  width: 8vw;\n}\n.person-label {\n  width: 13vw;\n}\n.game-label {\n  min-width: 8vw;\n  border-radius: 5vw;\n  margin-bottom: 0.25vh;\n}\n.sport-game-ctn {\n  display: flex;\n  align-self: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n.confirm-label {\n  padding: 5px;\n  font-size: x-large;\n  font-weight: 400;\n}\n[data-popup-ctn] {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n.button-div {\n  text-align: center;\n  font-size: large;\n}\n[data-confirm-button], [data-cancel-button] {\n  height: 30px;\n  margin: 10px;\n  width: 100px;\n  font-size: large;\n  font-weight: 400;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24tcG9wdXAvYzpcXHdvcmtzcGFjZVxcaG9tZS1wYWdlL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybWF0aW9uLXBvcHVwL2NvbmZpcm1hdGlvbi1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24tcG9wdXAvYzpcXHdvcmtzcGFjZVxcaG9tZS1wYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjb25maXJtYXRpb24tcG9wdXBcXGNvbmZpcm1hdGlvbi1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0UsWUFBQTtBQ0FGO0FER0E7RUFDRSxTQUFBO0VBQ0EsaURBQUE7QUNBRjtBRG1EQTtFQVhFLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLCtCQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG1CQUFBO0VBQ0EsOEJBQUE7RUFHRSx1QkFBQTtFQUNBLGlDQUFBO0VBREEsdUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsMkJBQUE7RUFHRSx5QkFBQTtFQUNBLGlDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGdDQUFBO0VBREEsc0JBQUE7RUFDQSxnQ0FBQTtFQUxGLDBCQUFBO0VBQ0Esa0NBQUE7RUFHRSw2QkFBQTtFQUNBLHFDQUFBO0VBREEsNkJBQUE7RUFDQSxxQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsNEJBQUE7RUFHRSx5QkFBQTtFQUNBLGdDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLGdDQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG9CQUFBO0VBQ0Esd0JBQUE7RUFHRSx1QkFBQTtFQUNBLCtCQUFBO0VBREEsdUJBQUE7RUFDQSwrQkFBQTtFQUxGLHVCQUFBO0VBQ0EsNEJBQUE7RUFHRSwwQkFBQTtFQUNBLGlDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsOEJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsd0JBQUE7RUFDQSxrQ0FBQTtFQVdGLG1DQUFBO0VBQ0EsdUNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ2NGO0FEWEE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDY0Y7QURYQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNjRjtBRFhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2NGO0FEWEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsVUFBQTtBQ2NGO0FEWEE7RUFDRSxXQUFBO0FDY0Y7QURYQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZUFBQTtFQUNBLHFCQUFBO0FDYUY7QUMzSUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDhJRjtBQzNJQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEOElGO0FDM0lBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRDhJRjtBQzNJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUZHQSw4QkFBQTtFQUNBLG9CQUFBO0FDNElGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25maXJtYXRpb24tcG9wdXAvY29uZmlybWF0aW9uLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gYm94KCRoZWlnaHQ6IDYwcHgsICR3aWR0aDogNjBweCkge1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxuICB3aWR0aDogJHdpZHRoO1xyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2VGb250IHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25TdHlsaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XHJcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbn1cclxuXHJcbiR0YXJnZXQtY29sb3JzOiAoXHJcbiAgYmx1ZS1jb2xvcjogIzIzNjM2NyxcclxuICB3aGl0ZS1jb2xvcjogI2ZmZixcclxuICBibGFjay1jb2xvcjogIzQyNDEzZCxcclxuICBncmF5LWNvbG9yOiAjQTlBOUE5LFxyXG4gIGdyYXktZGFyay1jb2xvcjogIzgwODA4MCxcclxuICBncmVlbi1jb2xvcjogIzIwYWU0NCxcclxuICBwaW5rLWNvbG9yOiAjZmY0MTI0LFxyXG4gIHJlZC1jb2xvcjogI0ZGMDAwMCxcclxuICBwdXJwbGUtY29sb3I6ICM0QTIzNUEsXHJcbiAgb3JhbmdlLWNvbG9yOiAjRkY2NjAwLFxyXG4gIHllbGxvdy1jb2xvcjogI2ZhZTM2MSxcclxuKTtcclxuXHJcbiR0b25lczogNDAsIDgwO1xyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpIHtcclxuICAtLSN7JGtleX06ICN7JHZhbHVlfTtcclxuICAtLSN7JGtleX0tcmdiOiAje3JlZCgkdmFsdWUpfSwje2dyZWVuKCR2YWx1ZSl9LCN7Ymx1ZSgkdmFsdWUpfTtcclxuICBAZWFjaCAkdG9uZSBpbiAkdG9uZXMge1xyXG4gICAgJHNjYWxlLXZhbHVlOiBhZGp1c3QtY29sb3IoJHZhbHVlLCAkbGlnaHRuZXNzOiAkdG9uZSAvIDIgKiAxJSk7XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX06ICN7JHNjYWxlLXZhbHVlfTtcclxuICAgIC0tI3ska2V5fS0jeyR0b25lfS1yZ2I6ICN7cmVkKCRzY2FsZS12YWx1ZSl9LCN7Z3JlZW4oJHNjYWxlLXZhbHVlKX0sI3tibHVlKCRzY2FsZS12YWx1ZSl9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3IgUGFsZXR0ZTogVHJpYWRpYyBTY2hlbWVcclxuXHJcbjpyb290IHtcclxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRhcmdldC1jb2xvcnMge1xyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyKCRrZXksICR2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAtLWJ1dHRvbkNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTQwKTtcclxuICAtLWJhY2tncm91bmRDb2xvcjogdmFyKC0tYmx1ZS1jb2xvci04MCk7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG5cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNwb3J0LWN0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3BvcnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRlLWxhYmVsIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXZoIDA7XHJcbn1cclxuXHJcbi5hdC1sYWJlbCwgLnRpbWUtbGFiZWwge1xyXG4gIHBhZGRpbmc6IDAgLjV2dztcclxufVxyXG5cclxuLmF3YXktbGFiZWwsIC5ob21lLWxhYmVsIHtcclxuICB3aWR0aDogOHZ3O1xyXG59XHJcblxyXG4ucGVyc29uLWxhYmVsIHtcclxuICB3aWR0aDogMTN2dztcclxufVxyXG5cclxuLmdhbWUtbGFiZWwge1xyXG4gIG1pbi13aWR0aDogOHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDV2dztcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1dmg7XHJcbn1cclxuXHJcbi5zcG9ydC1nYW1lLWN0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1ibHVlLWNvbG9yOiAjMjM2MzY3O1xuICAtLWJsdWUtY29sb3ItcmdiOiAzNSw5OSwxMDM7XG4gIC0tYmx1ZS1jb2xvci00MDogIzNkYWNiMztcbiAgLS1ibHVlLWNvbG9yLTQwLXJnYjogNjEsMTcyLDE3OTtcbiAgLS1ibHVlLWNvbG9yLTgwOiAjODJkMGQ0O1xuICAtLWJsdWUtY29sb3ItODAtcmdiOiAxMzAsMjA4LDIxMjtcbiAgLS13aGl0ZS1jb2xvcjogI2ZmZjtcbiAgLS13aGl0ZS1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLXdoaXRlLWNvbG9yLTQwOiB3aGl0ZTtcbiAgLS13aGl0ZS1jb2xvci00MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLXdoaXRlLWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS13aGl0ZS1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWJsYWNrLWNvbG9yOiAjNDI0MTNkO1xuICAtLWJsYWNrLWNvbG9yLXJnYjogNjYsNjUsNjE7XG4gIC0tYmxhY2stY29sb3ItNDA6ICM3Nzc1NmU7XG4gIC0tYmxhY2stY29sb3ItNDAtcmdiOiAxMTksMTE3LDExMDtcbiAgLS1ibGFjay1jb2xvci04MDogI2E5YThhMjtcbiAgLS1ibGFjay1jb2xvci04MC1yZ2I6IDE2OSwxNjgsMTYyO1xuICAtLWdyYXktY29sb3I6ICNBOUE5QTk7XG4gIC0tZ3JheS1jb2xvci1yZ2I6IDE2OSwxNjksMTY5O1xuICAtLWdyYXktY29sb3ItNDA6IGdhaW5zYm9ybztcbiAgLS1ncmF5LWNvbG9yLTQwLXJnYjogMjIwLDIyMCwyMjA7XG4gIC0tZ3JheS1jb2xvci04MDogd2hpdGU7XG4gIC0tZ3JheS1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWdyYXktZGFyay1jb2xvcjogIzgwODA4MDtcbiAgLS1ncmF5LWRhcmstY29sb3ItcmdiOiAxMjgsMTI4LDEyODtcbiAgLS1ncmF5LWRhcmstY29sb3ItNDA6ICNiM2IzYjM7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwLXJnYjogMTc5LDE3OSwxNzk7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTgwOiAjZTZlNmU2O1xuICAtLWdyYXktZGFyay1jb2xvci04MC1yZ2I6IDIzMCwyMzAsMjMwO1xuICAtLWdyZWVuLWNvbG9yOiAjMjBhZTQ0O1xuICAtLWdyZWVuLWNvbG9yLXJnYjogMzIsMTc0LDY4O1xuICAtLWdyZWVuLWNvbG9yLTQwOiAjNTRlMDc4O1xuICAtLWdyZWVuLWNvbG9yLTQwLXJnYjogODQsMjI0LDEyMDtcbiAgLS1ncmVlbi1jb2xvci04MDogI2FiZWZiYztcbiAgLS1ncmVlbi1jb2xvci04MC1yZ2I6IDE3MSwyMzksMTg4O1xuICAtLXBpbmstY29sb3I6ICNmZjQxMjQ7XG4gIC0tcGluay1jb2xvci1yZ2I6IDI1NSw2NSwzNjtcbiAgLS1waW5rLWNvbG9yLTQwOiAjZmY5OThhO1xuICAtLXBpbmstY29sb3ItNDAtcmdiOiAyNTUsMTUzLDEzODtcbiAgLS1waW5rLWNvbG9yLTgwOiAjZmZmMmYwO1xuICAtLXBpbmstY29sb3ItODAtcmdiOiAyNTUsMjQyLDI0MDtcbiAgLS1yZWQtY29sb3I6ICNGRjAwMDA7XG4gIC0tcmVkLWNvbG9yLXJnYjogMjU1LDAsMDtcbiAgLS1yZWQtY29sb3ItNDA6ICNmZjY2NjY7XG4gIC0tcmVkLWNvbG9yLTQwLXJnYjogMjU1LDEwMiwxMDI7XG4gIC0tcmVkLWNvbG9yLTgwOiAjZmZjY2NjO1xuICAtLXJlZC1jb2xvci04MC1yZ2I6IDI1NSwyMDQsMjA0O1xuICAtLXB1cnBsZS1jb2xvcjogIzRBMjM1QTtcbiAgLS1wdXJwbGUtY29sb3ItcmdiOiA3NCwzNSw5MDtcbiAgLS1wdXJwbGUtY29sb3ItNDA6ICM4NjQwYTM7XG4gIC0tcHVycGxlLWNvbG9yLTQwLXJnYjogMTM0LDY0LDE2MztcbiAgLS1wdXJwbGUtY29sb3ItODA6ICNiNTdkY2M7XG4gIC0tcHVycGxlLWNvbG9yLTgwLXJnYjogMTgxLDEyNSwyMDQ7XG4gIC0tb3JhbmdlLWNvbG9yOiAjRkY2NjAwO1xuICAtLW9yYW5nZS1jb2xvci1yZ2I6IDI1NSwxMDIsMDtcbiAgLS1vcmFuZ2UtY29sb3ItNDA6ICNmZmEzNjY7XG4gIC0tb3JhbmdlLWNvbG9yLTQwLXJnYjogMjU1LDE2MywxMDI7XG4gIC0tb3JhbmdlLWNvbG9yLTgwOiAjZmZlMGNjO1xuICAtLW9yYW5nZS1jb2xvci04MC1yZ2I6IDI1NSwyMjQsMjA0O1xuICAtLXllbGxvdy1jb2xvcjogI2ZhZTM2MTtcbiAgLS15ZWxsb3ctY29sb3ItcmdiOiAyNTAsMjI3LDk3O1xuICAtLXllbGxvdy1jb2xvci00MDogI2ZkZjVjNDtcbiAgLS15ZWxsb3ctY29sb3ItNDAtcmdiOiAyNTMsMjQ1LDE5NjtcbiAgLS15ZWxsb3ctY29sb3ItODA6IHdoaXRlO1xuICAtLXllbGxvdy1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWJ1dHRvbkNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTQwKTtcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItODApO1xufVxuXG4ucmlnaHQge1xuICBhbGlnbi1pdGVtczogZW5kO1xufVxuXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zcG9ydC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2x1bW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNwb3J0LXRpdGxlIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmRhdGUtbGFiZWwge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDF2aCAwO1xufVxuXG4uYXQtbGFiZWwsIC50aW1lLWxhYmVsIHtcbiAgcGFkZGluZzogMCAwLjV2dztcbn1cblxuLmF3YXktbGFiZWwsIC5ob21lLWxhYmVsIHtcbiAgd2lkdGg6IDh2dztcbn1cblxuLnBlcnNvbi1sYWJlbCB7XG4gIHdpZHRoOiAxM3Z3O1xufVxuXG4uZ2FtZS1sYWJlbCB7XG4gIG1pbi13aWR0aDogOHZ3O1xuICBib3JkZXItcmFkaXVzOiA1dnc7XG4gIG1hcmdpbi1ib3R0b206IDAuMjV2aDtcbn1cblxuLnNwb3J0LWdhbWUtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbmZpcm0tbGFiZWwge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuW2RhdGEtcG9wdXAtY3RuXSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5idXR0b24tZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5bZGF0YS1jb25maXJtLWJ1dHRvbl0sIFtkYXRhLWNhbmNlbC1idXR0b25dIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uQ29sb3IpO1xuICBib3JkZXItc3R5bGU6IGdyb292ZTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4uY29uZmlybS1sYWJlbCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5bZGF0YS1wb3B1cC1jdG5dIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJ1dHRvbi1kaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG5bZGF0YS1jb25maXJtLWJ1dHRvbl0sIFtkYXRhLWNhbmNlbC1idXR0b25dIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgQGluY2x1ZGUgYnV0dG9uU3R5bGluZygpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/confirmation-popup/confirmation-popup.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/confirmation-popup/confirmation-popup.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConfirmationPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPopupComponent", function() { return ConfirmationPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmationPopupComponent = class ConfirmationPopupComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.PERFORM_THIS_ACTION = 'Are you sure you want to perform this action?';
        this.dialogRef.disableClose = true;
    }
    ngOnInit() {
        if (this.data) {
            this.label = this.data.label;
        }
    }
    closeDialog(shouldPerformAction) {
        this.dialogRef.close(shouldPerformAction);
    }
};
ConfirmationPopupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
ConfirmationPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation-popup',
        template: `
    <div data-border-div>
      <div data-popup-ctn>
        <div data-question-label class="confirm-label">{{label}}</div>
        <div data-perform-action class="confirm-label">{{PERFORM_THIS_ACTION}}</div>
        <div class="button-div">
          <button data-confirm-button mat-stroked-button
                  type="button"
                  (click)="closeDialog(true)">
            Confirm
          </button>
          <button type="button" data-cancel-button mat-stroked-button (click)="closeDialog(false)">
            Cancel
          </button>
        </div>
      </div>
    </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation-popup.component.scss */ "./src/app/components/confirmation-popup/confirmation-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmationPopupComponent);



/***/ }),

/***/ "./src/app/components/fight-card/fight-card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/fight-card/fight-card.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n.right {\n  align-items: end;\n}\n.cursor {\n  cursor: pointer;\n  display: inline-block;\n}\n.sport-ctn {\n  display: flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.sport-title {\n  font-size: x-large;\n  font-weight: 500;\n  padding: 5px;\n  align-self: center;\n}\n.date-label {\n  align-self: center;\n  padding: 1vh 0;\n}\n.at-label, .time-label {\n  padding: 0 0.5vw;\n}\n.away-label, .home-label {\n  width: 8vw;\n}\n.person-label {\n  width: 13vw;\n}\n.game-label {\n  min-width: 8vw;\n  border-radius: 5vw;\n  margin-bottom: 0.25vh;\n}\n.sport-game-ctn {\n  display: flex;\n  align-self: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWdodC1jYXJkL2M6XFx3b3Jrc3BhY2VcXGhvbWUtcGFnZS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2ZpZ2h0LWNhcmQvZmlnaHQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0UsWUFBQTtBQ0FGO0FER0E7RUFDRSxTQUFBO0VBQ0EsaURBQUE7QUNBRjtBRG1EQTtFQVhFLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLCtCQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG1CQUFBO0VBQ0EsOEJBQUE7RUFHRSx1QkFBQTtFQUNBLGlDQUFBO0VBREEsdUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsMkJBQUE7RUFHRSx5QkFBQTtFQUNBLGlDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGdDQUFBO0VBREEsc0JBQUE7RUFDQSxnQ0FBQTtFQUxGLDBCQUFBO0VBQ0Esa0NBQUE7RUFHRSw2QkFBQTtFQUNBLHFDQUFBO0VBREEsNkJBQUE7RUFDQSxxQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsNEJBQUE7RUFHRSx5QkFBQTtFQUNBLGdDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLGdDQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG9CQUFBO0VBQ0Esd0JBQUE7RUFHRSx1QkFBQTtFQUNBLCtCQUFBO0VBREEsdUJBQUE7RUFDQSwrQkFBQTtFQUxGLHVCQUFBO0VBQ0EsNEJBQUE7RUFHRSwwQkFBQTtFQUNBLGlDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsOEJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsd0JBQUE7RUFDQSxrQ0FBQTtFQVdGLG1DQUFBO0VBQ0EsdUNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ2NGO0FEWEE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDY0Y7QURYQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNjRjtBRFhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2NGO0FEWEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsVUFBQTtBQ2NGO0FEWEE7RUFDRSxXQUFBO0FDY0Y7QURYQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZUFBQTtFQUNBLHFCQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpZ2h0LWNhcmQvZmlnaHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIGJveCgkaGVpZ2h0OiA2MHB4LCAkd2lkdGg6IDYwcHgpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxufVxyXG5cclxuQG1peGluIGxhcmdlRm9udCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uU3R5bGluZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uQ29sb3IpO1xyXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG59XHJcblxyXG4kdGFyZ2V0LWNvbG9yczogKFxyXG4gIGJsdWUtY29sb3I6ICMyMzYzNjcsXHJcbiAgd2hpdGUtY29sb3I6ICNmZmYsXHJcbiAgYmxhY2stY29sb3I6ICM0MjQxM2QsXHJcbiAgZ3JheS1jb2xvcjogI0E5QTlBOSxcclxuICBncmF5LWRhcmstY29sb3I6ICM4MDgwODAsXHJcbiAgZ3JlZW4tY29sb3I6ICMyMGFlNDQsXHJcbiAgcGluay1jb2xvcjogI2ZmNDEyNCxcclxuICByZWQtY29sb3I6ICNGRjAwMDAsXHJcbiAgcHVycGxlLWNvbG9yOiAjNEEyMzVBLFxyXG4gIG9yYW5nZS1jb2xvcjogI0ZGNjYwMCxcclxuICB5ZWxsb3ctY29sb3I6ICNmYWUzNjEsXHJcbik7XHJcblxyXG4kdG9uZXM6IDQwLCA4MDtcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXIoJGtleSwgJHZhbHVlKSB7XHJcbiAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XHJcbiAgLS0jeyRrZXl9LXJnYjogI3tyZWQoJHZhbHVlKX0sI3tncmVlbigkdmFsdWUpfSwje2JsdWUoJHZhbHVlKX07XHJcbiAgQGVhY2ggJHRvbmUgaW4gJHRvbmVzIHtcclxuICAgICRzY2FsZS12YWx1ZTogYWRqdXN0LWNvbG9yKCR2YWx1ZSwgJGxpZ2h0bmVzczogJHRvbmUgLyAyICogMSUpO1xyXG4gICAgLS0jeyRrZXl9LSN7JHRvbmV9OiAjeyRzY2FsZS12YWx1ZX07XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX0tcmdiOiAje3JlZCgkc2NhbGUtdmFsdWUpfSwje2dyZWVuKCRzY2FsZS12YWx1ZSl9LCN7Ymx1ZSgkc2NhbGUtdmFsdWUpfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvbG9yIFBhbGV0dGU6IFRyaWFkaWMgU2NoZW1lXHJcblxyXG46cm9vdCB7XHJcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0YXJnZXQtY29sb3JzIHtcclxuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XHJcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItODApO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zcG9ydC1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNwb3J0LXRpdGxlIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0ZS1sYWJlbCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDF2aCAwO1xyXG59XHJcblxyXG4uYXQtbGFiZWwsIC50aW1lLWxhYmVsIHtcclxuICBwYWRkaW5nOiAwIC41dnc7XHJcbn1cclxuXHJcbi5hd2F5LWxhYmVsLCAuaG9tZS1sYWJlbCB7XHJcbiAgd2lkdGg6IDh2dztcclxufVxyXG5cclxuLnBlcnNvbi1sYWJlbCB7XHJcbiAgd2lkdGg6IDEzdnc7XHJcbn1cclxuXHJcbi5nYW1lLWxhYmVsIHtcclxuICBtaW4td2lkdGg6IDh2dztcclxuICBib3JkZXItcmFkaXVzOiA1dnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXZoO1xyXG59XHJcblxyXG4uc3BvcnQtZ2FtZS1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0tYmx1ZS1jb2xvcjogIzIzNjM2NztcbiAgLS1ibHVlLWNvbG9yLXJnYjogMzUsOTksMTAzO1xuICAtLWJsdWUtY29sb3ItNDA6ICMzZGFjYjM7XG4gIC0tYmx1ZS1jb2xvci00MC1yZ2I6IDYxLDE3MiwxNzk7XG4gIC0tYmx1ZS1jb2xvci04MDogIzgyZDBkNDtcbiAgLS1ibHVlLWNvbG9yLTgwLXJnYjogMTMwLDIwOCwyMTI7XG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XG4gIC0td2hpdGUtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci00MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItNDAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci04MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ibGFjay1jb2xvcjogIzQyNDEzZDtcbiAgLS1ibGFjay1jb2xvci1yZ2I6IDY2LDY1LDYxO1xuICAtLWJsYWNrLWNvbG9yLTQwOiAjNzc3NTZlO1xuICAtLWJsYWNrLWNvbG9yLTQwLXJnYjogMTE5LDExNywxMTA7XG4gIC0tYmxhY2stY29sb3ItODA6ICNhOWE4YTI7XG4gIC0tYmxhY2stY29sb3ItODAtcmdiOiAxNjksMTY4LDE2MjtcbiAgLS1ncmF5LWNvbG9yOiAjQTlBOUE5O1xuICAtLWdyYXktY29sb3ItcmdiOiAxNjksMTY5LDE2OTtcbiAgLS1ncmF5LWNvbG9yLTQwOiBnYWluc2Jvcm87XG4gIC0tZ3JheS1jb2xvci00MC1yZ2I6IDIyMCwyMjAsMjIwO1xuICAtLWdyYXktY29sb3ItODA6IHdoaXRlO1xuICAtLWdyYXktY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ncmF5LWRhcmstY29sb3I6ICM4MDgwODA7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLXJnYjogMTI4LDEyOCwxMjg7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwOiAjYjNiM2IzO1xuICAtLWdyYXktZGFyay1jb2xvci00MC1yZ2I6IDE3OSwxNzksMTc5O1xuICAtLWdyYXktZGFyay1jb2xvci04MDogI2U2ZTZlNjtcbiAgLS1ncmF5LWRhcmstY29sb3ItODAtcmdiOiAyMzAsMjMwLDIzMDtcbiAgLS1ncmVlbi1jb2xvcjogIzIwYWU0NDtcbiAgLS1ncmVlbi1jb2xvci1yZ2I6IDMyLDE3NCw2ODtcbiAgLS1ncmVlbi1jb2xvci00MDogIzU0ZTA3ODtcbiAgLS1ncmVlbi1jb2xvci00MC1yZ2I6IDg0LDIyNCwxMjA7XG4gIC0tZ3JlZW4tY29sb3ItODA6ICNhYmVmYmM7XG4gIC0tZ3JlZW4tY29sb3ItODAtcmdiOiAxNzEsMjM5LDE4ODtcbiAgLS1waW5rLWNvbG9yOiAjZmY0MTI0O1xuICAtLXBpbmstY29sb3ItcmdiOiAyNTUsNjUsMzY7XG4gIC0tcGluay1jb2xvci00MDogI2ZmOTk4YTtcbiAgLS1waW5rLWNvbG9yLTQwLXJnYjogMjU1LDE1MywxMzg7XG4gIC0tcGluay1jb2xvci04MDogI2ZmZjJmMDtcbiAgLS1waW5rLWNvbG9yLTgwLXJnYjogMjU1LDI0MiwyNDA7XG4gIC0tcmVkLWNvbG9yOiAjRkYwMDAwO1xuICAtLXJlZC1jb2xvci1yZ2I6IDI1NSwwLDA7XG4gIC0tcmVkLWNvbG9yLTQwOiAjZmY2NjY2O1xuICAtLXJlZC1jb2xvci00MC1yZ2I6IDI1NSwxMDIsMTAyO1xuICAtLXJlZC1jb2xvci04MDogI2ZmY2NjYztcbiAgLS1yZWQtY29sb3ItODAtcmdiOiAyNTUsMjA0LDIwNDtcbiAgLS1wdXJwbGUtY29sb3I6ICM0QTIzNUE7XG4gIC0tcHVycGxlLWNvbG9yLXJnYjogNzQsMzUsOTA7XG4gIC0tcHVycGxlLWNvbG9yLTQwOiAjODY0MGEzO1xuICAtLXB1cnBsZS1jb2xvci00MC1yZ2I6IDEzNCw2NCwxNjM7XG4gIC0tcHVycGxlLWNvbG9yLTgwOiAjYjU3ZGNjO1xuICAtLXB1cnBsZS1jb2xvci04MC1yZ2I6IDE4MSwxMjUsMjA0O1xuICAtLW9yYW5nZS1jb2xvcjogI0ZGNjYwMDtcbiAgLS1vcmFuZ2UtY29sb3ItcmdiOiAyNTUsMTAyLDA7XG4gIC0tb3JhbmdlLWNvbG9yLTQwOiAjZmZhMzY2O1xuICAtLW9yYW5nZS1jb2xvci00MC1yZ2I6IDI1NSwxNjMsMTAyO1xuICAtLW9yYW5nZS1jb2xvci04MDogI2ZmZTBjYztcbiAgLS1vcmFuZ2UtY29sb3ItODAtcmdiOiAyNTUsMjI0LDIwNDtcbiAgLS15ZWxsb3ctY29sb3I6ICNmYWUzNjE7XG4gIC0teWVsbG93LWNvbG9yLXJnYjogMjUwLDIyNyw5NztcbiAgLS15ZWxsb3ctY29sb3ItNDA6ICNmZGY1YzQ7XG4gIC0teWVsbG93LWNvbG9yLTQwLXJnYjogMjUzLDI0NSwxOTY7XG4gIC0teWVsbG93LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS15ZWxsb3ctY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcbn1cblxuLnJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3BvcnQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcG9ydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kYXRlLWxhYmVsIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxdmggMDtcbn1cblxuLmF0LWxhYmVsLCAudGltZS1sYWJlbCB7XG4gIHBhZGRpbmc6IDAgMC41dnc7XG59XG5cbi5hd2F5LWxhYmVsLCAuaG9tZS1sYWJlbCB7XG4gIHdpZHRoOiA4dnc7XG59XG5cbi5wZXJzb24tbGFiZWwge1xuICB3aWR0aDogMTN2dztcbn1cblxuLmdhbWUtbGFiZWwge1xuICBtaW4td2lkdGg6IDh2dztcbiAgYm9yZGVyLXJhZGl1czogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAwLjI1dmg7XG59XG5cbi5zcG9ydC1nYW1lLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/fight-card/fight-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/fight-card/fight-card.component.ts ***!
  \***************************************************************/
/*! exports provided: FightCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightCardComponent", function() { return FightCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/window.service */ "./src/app/services/window.service.ts");



let FightCardComponent = class FightCardComponent {
    constructor(windowService) {
        this.windowService = windowService;
        this.fights = [];
    }
    fightClick(fight) {
        this.windowService.openBlank(fight.link);
    }
    getPerson(title, firstPerson = true) {
        const vsIndex = title.indexOf("vs");
        if (title.length == 0) {
            return "";
        }
        else if (firstPerson) {
            return title.substring(0, vsIndex - 1).trim();
        }
        else {
            return title.substring(vsIndex + 3).trim();
        }
    }
};
FightCardComponent.ctorParameters = () => [
    { type: _services_window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FightCardComponent.prototype, "fights", void 0);
FightCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fight-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fight-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fight-card/fight-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fight-card.component.scss */ "./src/app/components/fight-card/fight-card.component.scss")).default]
    })
], FightCardComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav {\n  float: left;\n  width: 100%;\n}\n\n.nav-bar-bar {\n  height: 50px;\n}\n\n.nav-bar-link {\n  margin: 15px;\n  border: black;\n  font-size: large;\n}\n\n.nav-bar-div {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvYzpcXHdvcmtzcGFjZVxcaG9tZS1wYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXYtYmFyLWJhciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubmF2LWJhci1saW5rIHtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgYm9yZGVyOiBibGFjaztcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4ubmF2LWJhci1kaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuIiwibmF2IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubmF2LWJhci1iYXIge1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5uYXYtYmFyLWxpbmsge1xuICBtYXJnaW46IDE1cHg7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5uYXYtYmFyLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: `
    <div>
      <div class="nav-bar-bar">
        <nav mat-tab-nav-bar>
          <div class="nav-bar-div">
            <a mat-tab-link
               mat-theme="accent"
               [routerLink]="['/home']"
               class="nav-bar-link"
               data-home-nav>Home</a>
            <a mat-tab-link
               mat-theme="accent"
               [routerLink]="['/settings']"
               class="nav-bar-link"
               data-settings-nav>Settings</a>
          </div>
        </nav>
      </div>
    </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/media-search-widget/media-search-widget.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/media-search-widget/media-search-widget.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n.right {\n  align-items: end;\n}\n.cursor {\n  cursor: pointer;\n  display: inline-block;\n}\n.sport-ctn {\n  display: flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.sport-title {\n  font-size: x-large;\n  font-weight: 500;\n  padding: 5px;\n  align-self: center;\n}\n.date-label {\n  align-self: center;\n  padding: 1vh 0;\n}\n.at-label, .time-label {\n  padding: 0 0.5vw;\n}\n.away-label, .home-label {\n  width: 8vw;\n}\n.person-label {\n  width: 13vw;\n}\n.game-label {\n  min-width: 8vw;\n  border-radius: 5vw;\n  margin-bottom: 0.25vh;\n}\n.sport-game-ctn {\n  display: flex;\n  align-self: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n.results {\n  display: flex;\n  flex-direction: column;\n}\n.search {\n  display: flex;\n}\ninput {\n  width: 200px;\n}\np {\n  margin: 0 5px 0 5px;\n}\n#result-container {\n  border: 2px solid grey;\n  margin-top: 10px;\n  width: -webkit-fit-content;\n  width: fit-content;\n}\n.expansion {\n  background-color: #3AAFA9 !important;\n}\nmat-accordion {\n  width: 40vw;\n}\n.media-search {\n  align-items: center;\n  margin: 20px 0 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZWRpYS1zZWFyY2gtd2lkZ2V0L2M6XFx3b3Jrc3BhY2VcXGhvbWUtcGFnZS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lZGlhLXNlYXJjaC13aWRnZXQvbWVkaWEtc2VhcmNoLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZWRpYS1zZWFyY2gtd2lkZ2V0L2M6XFx3b3Jrc3BhY2VcXGhvbWUtcGFnZS9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWVkaWEtc2VhcmNoLXdpZGdldFxcbWVkaWEtc2VhcmNoLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0UsWUFBQTtBQ0FGO0FER0E7RUFDRSxTQUFBO0VBQ0EsaURBQUE7QUNBRjtBRG1EQTtFQVhFLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLCtCQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG1CQUFBO0VBQ0EsOEJBQUE7RUFHRSx1QkFBQTtFQUNBLGlDQUFBO0VBREEsdUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsMkJBQUE7RUFHRSx5QkFBQTtFQUNBLGlDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGdDQUFBO0VBREEsc0JBQUE7RUFDQSxnQ0FBQTtFQUxGLDBCQUFBO0VBQ0Esa0NBQUE7RUFHRSw2QkFBQTtFQUNBLHFDQUFBO0VBREEsNkJBQUE7RUFDQSxxQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsNEJBQUE7RUFHRSx5QkFBQTtFQUNBLGdDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLGdDQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG9CQUFBO0VBQ0Esd0JBQUE7RUFHRSx1QkFBQTtFQUNBLCtCQUFBO0VBREEsdUJBQUE7RUFDQSwrQkFBQTtFQUxGLHVCQUFBO0VBQ0EsNEJBQUE7RUFHRSwwQkFBQTtFQUNBLGlDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsOEJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsd0JBQUE7RUFDQSxrQ0FBQTtFQVdGLG1DQUFBO0VBQ0EsdUNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ2NGO0FEWEE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDY0Y7QURYQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNjRjtBRFhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2NGO0FEWEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsVUFBQTtBQ2NGO0FEWEE7RUFDRSxXQUFBO0FDY0Y7QURYQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZUFBQTtFQUNBLHFCQUFBO0FDYUY7QUMzSUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUQ4SUY7QUMzSUE7RUFDRSxhQUFBO0FEOElGO0FDM0lBO0VBQ0UsWUFBQTtBRDhJRjtBQzNJQTtFQUNFLG1CQUFBO0FEOElGO0FDM0lBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7QUQ4SUY7QUMzSUE7RUFDRSxvQ0FBQTtBRDhJRjtBQzNJQTtFQUNFLFdBQUE7QUQ4SUY7QUMzSUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FEOElGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZWRpYS1zZWFyY2gtd2lkZ2V0L21lZGlhLXNlYXJjaC13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5odG1sLCBib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBib3goJGhlaWdodDogNjBweCwgJHdpZHRoOiA2MHB4KSB7XHJcbiAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gIHdpZHRoOiAkd2lkdGg7XHJcbn1cclxuXHJcbkBtaXhpbiBsYXJnZUZvbnQge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuQG1peGluIGNlbnRlckZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIGJ1dHRvblN0eWxpbmcge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbkNvbG9yKTtcclxuICBib3JkZXItc3R5bGU6IGdyb292ZTtcclxufVxyXG5cclxuJHRhcmdldC1jb2xvcnM6IChcclxuICBibHVlLWNvbG9yOiAjMjM2MzY3LFxyXG4gIHdoaXRlLWNvbG9yOiAjZmZmLFxyXG4gIGJsYWNrLWNvbG9yOiAjNDI0MTNkLFxyXG4gIGdyYXktY29sb3I6ICNBOUE5QTksXHJcbiAgZ3JheS1kYXJrLWNvbG9yOiAjODA4MDgwLFxyXG4gIGdyZWVuLWNvbG9yOiAjMjBhZTQ0LFxyXG4gIHBpbmstY29sb3I6ICNmZjQxMjQsXHJcbiAgcmVkLWNvbG9yOiAjRkYwMDAwLFxyXG4gIHB1cnBsZS1jb2xvcjogIzRBMjM1QSxcclxuICBvcmFuZ2UtY29sb3I6ICNGRjY2MDAsXHJcbiAgeWVsbG93LWNvbG9yOiAjZmFlMzYxLFxyXG4pO1xyXG5cclxuJHRvbmVzOiA0MCwgODA7XHJcblxyXG5AbWl4aW4gZ2VuZXJhdGUtY29sb3ItdmFyKCRrZXksICR2YWx1ZSkge1xyXG4gIC0tI3ska2V5fTogI3skdmFsdWV9O1xyXG4gIC0tI3ska2V5fS1yZ2I6ICN7cmVkKCR2YWx1ZSl9LCN7Z3JlZW4oJHZhbHVlKX0sI3tibHVlKCR2YWx1ZSl9O1xyXG4gIEBlYWNoICR0b25lIGluICR0b25lcyB7XHJcbiAgICAkc2NhbGUtdmFsdWU6IGFkanVzdC1jb2xvcigkdmFsdWUsICRsaWdodG5lc3M6ICR0b25lIC8gMiAqIDElKTtcclxuICAgIC0tI3ska2V5fS0jeyR0b25lfTogI3skc2NhbGUtdmFsdWV9O1xyXG4gICAgLS0jeyRrZXl9LSN7JHRvbmV9LXJnYjogI3tyZWQoJHNjYWxlLXZhbHVlKX0sI3tncmVlbigkc2NhbGUtdmFsdWUpfSwje2JsdWUoJHNjYWxlLXZhbHVlKX07XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb2xvciBQYWxldHRlOiBUcmlhZGljIFNjaGVtZVxyXG5cclxuOnJvb3Qge1xyXG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkdGFyZ2V0LWNvbG9ycyB7XHJcbiAgICBAaW5jbHVkZSBnZW5lcmF0ZS1jb2xvci12YXIoJGtleSwgJHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC0tYnV0dG9uQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItNDApO1xyXG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG59XHJcblxyXG4uY3Vyc29yIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3BvcnQtY3RuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5zcG9ydC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGUtbGFiZWwge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxdmggMDtcclxufVxyXG5cclxuLmF0LWxhYmVsLCAudGltZS1sYWJlbCB7XHJcbiAgcGFkZGluZzogMCAuNXZ3O1xyXG59XHJcblxyXG4uYXdheS1sYWJlbCwgLmhvbWUtbGFiZWwge1xyXG4gIHdpZHRoOiA4dnc7XHJcbn1cclxuXHJcbi5wZXJzb24tbGFiZWwge1xyXG4gIHdpZHRoOiAxM3Z3O1xyXG59XHJcblxyXG4uZ2FtZS1sYWJlbCB7XHJcbiAgbWluLXdpZHRoOiA4dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogNXZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMjV2aDtcclxufVxyXG5cclxuLnNwb3J0LWdhbWUtY3RuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuOnJvb3Qge1xuICAtLWJsdWUtY29sb3I6ICMyMzYzNjc7XG4gIC0tYmx1ZS1jb2xvci1yZ2I6IDM1LDk5LDEwMztcbiAgLS1ibHVlLWNvbG9yLTQwOiAjM2RhY2IzO1xuICAtLWJsdWUtY29sb3ItNDAtcmdiOiA2MSwxNzIsMTc5O1xuICAtLWJsdWUtY29sb3ItODA6ICM4MmQwZDQ7XG4gIC0tYmx1ZS1jb2xvci04MC1yZ2I6IDEzMCwyMDgsMjEyO1xuICAtLXdoaXRlLWNvbG9yOiAjZmZmO1xuICAtLXdoaXRlLWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0td2hpdGUtY29sb3ItNDA6IHdoaXRlO1xuICAtLXdoaXRlLWNvbG9yLTQwLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0td2hpdGUtY29sb3ItODA6IHdoaXRlO1xuICAtLXdoaXRlLWNvbG9yLTgwLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tYmxhY2stY29sb3I6ICM0MjQxM2Q7XG4gIC0tYmxhY2stY29sb3ItcmdiOiA2Niw2NSw2MTtcbiAgLS1ibGFjay1jb2xvci00MDogIzc3NzU2ZTtcbiAgLS1ibGFjay1jb2xvci00MC1yZ2I6IDExOSwxMTcsMTEwO1xuICAtLWJsYWNrLWNvbG9yLTgwOiAjYTlhOGEyO1xuICAtLWJsYWNrLWNvbG9yLTgwLXJnYjogMTY5LDE2OCwxNjI7XG4gIC0tZ3JheS1jb2xvcjogI0E5QTlBOTtcbiAgLS1ncmF5LWNvbG9yLXJnYjogMTY5LDE2OSwxNjk7XG4gIC0tZ3JheS1jb2xvci00MDogZ2FpbnNib3JvO1xuICAtLWdyYXktY29sb3ItNDAtcmdiOiAyMjAsMjIwLDIyMDtcbiAgLS1ncmF5LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS1ncmF5LWNvbG9yLTgwLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tZ3JheS1kYXJrLWNvbG9yOiAjODA4MDgwO1xuICAtLWdyYXktZGFyay1jb2xvci1yZ2I6IDEyOCwxMjgsMTI4O1xuICAtLWdyYXktZGFyay1jb2xvci00MDogI2IzYjNiMztcbiAgLS1ncmF5LWRhcmstY29sb3ItNDAtcmdiOiAxNzksMTc5LDE3OTtcbiAgLS1ncmF5LWRhcmstY29sb3ItODA6ICNlNmU2ZTY7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTgwLXJnYjogMjMwLDIzMCwyMzA7XG4gIC0tZ3JlZW4tY29sb3I6ICMyMGFlNDQ7XG4gIC0tZ3JlZW4tY29sb3ItcmdiOiAzMiwxNzQsNjg7XG4gIC0tZ3JlZW4tY29sb3ItNDA6ICM1NGUwNzg7XG4gIC0tZ3JlZW4tY29sb3ItNDAtcmdiOiA4NCwyMjQsMTIwO1xuICAtLWdyZWVuLWNvbG9yLTgwOiAjYWJlZmJjO1xuICAtLWdyZWVuLWNvbG9yLTgwLXJnYjogMTcxLDIzOSwxODg7XG4gIC0tcGluay1jb2xvcjogI2ZmNDEyNDtcbiAgLS1waW5rLWNvbG9yLXJnYjogMjU1LDY1LDM2O1xuICAtLXBpbmstY29sb3ItNDA6ICNmZjk5OGE7XG4gIC0tcGluay1jb2xvci00MC1yZ2I6IDI1NSwxNTMsMTM4O1xuICAtLXBpbmstY29sb3ItODA6ICNmZmYyZjA7XG4gIC0tcGluay1jb2xvci04MC1yZ2I6IDI1NSwyNDIsMjQwO1xuICAtLXJlZC1jb2xvcjogI0ZGMDAwMDtcbiAgLS1yZWQtY29sb3ItcmdiOiAyNTUsMCwwO1xuICAtLXJlZC1jb2xvci00MDogI2ZmNjY2NjtcbiAgLS1yZWQtY29sb3ItNDAtcmdiOiAyNTUsMTAyLDEwMjtcbiAgLS1yZWQtY29sb3ItODA6ICNmZmNjY2M7XG4gIC0tcmVkLWNvbG9yLTgwLXJnYjogMjU1LDIwNCwyMDQ7XG4gIC0tcHVycGxlLWNvbG9yOiAjNEEyMzVBO1xuICAtLXB1cnBsZS1jb2xvci1yZ2I6IDc0LDM1LDkwO1xuICAtLXB1cnBsZS1jb2xvci00MDogIzg2NDBhMztcbiAgLS1wdXJwbGUtY29sb3ItNDAtcmdiOiAxMzQsNjQsMTYzO1xuICAtLXB1cnBsZS1jb2xvci04MDogI2I1N2RjYztcbiAgLS1wdXJwbGUtY29sb3ItODAtcmdiOiAxODEsMTI1LDIwNDtcbiAgLS1vcmFuZ2UtY29sb3I6ICNGRjY2MDA7XG4gIC0tb3JhbmdlLWNvbG9yLXJnYjogMjU1LDEwMiwwO1xuICAtLW9yYW5nZS1jb2xvci00MDogI2ZmYTM2NjtcbiAgLS1vcmFuZ2UtY29sb3ItNDAtcmdiOiAyNTUsMTYzLDEwMjtcbiAgLS1vcmFuZ2UtY29sb3ItODA6ICNmZmUwY2M7XG4gIC0tb3JhbmdlLWNvbG9yLTgwLXJnYjogMjU1LDIyNCwyMDQ7XG4gIC0teWVsbG93LWNvbG9yOiAjZmFlMzYxO1xuICAtLXllbGxvdy1jb2xvci1yZ2I6IDI1MCwyMjcsOTc7XG4gIC0teWVsbG93LWNvbG9yLTQwOiAjZmRmNWM0O1xuICAtLXllbGxvdy1jb2xvci00MC1yZ2I6IDI1MywyNDUsMTk2O1xuICAtLXllbGxvdy1jb2xvci04MDogd2hpdGU7XG4gIC0teWVsbG93LWNvbG9yLTgwLXJnYjogMjU1LDI1NSwyNTU7XG4gIC0tYnV0dG9uQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItNDApO1xuICAtLWJhY2tncm91bmRDb2xvcjogdmFyKC0tYmx1ZS1jb2xvci04MCk7XG59XG5cbi5yaWdodCB7XG4gIGFsaWduLWl0ZW1zOiBlbmQ7XG59XG5cbi5jdXJzb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNwb3J0LWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2x1bW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3BvcnQtdGl0bGUge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZGF0ZS1sYWJlbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogMXZoIDA7XG59XG5cbi5hdC1sYWJlbCwgLnRpbWUtbGFiZWwge1xuICBwYWRkaW5nOiAwIDAuNXZ3O1xufVxuXG4uYXdheS1sYWJlbCwgLmhvbWUtbGFiZWwge1xuICB3aWR0aDogOHZ3O1xufVxuXG4ucGVyc29uLWxhYmVsIHtcbiAgd2lkdGg6IDEzdnc7XG59XG5cbi5nYW1lLWxhYmVsIHtcbiAgbWluLXdpZHRoOiA4dnc7XG4gIGJvcmRlci1yYWRpdXM6IDV2dztcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXZoO1xufVxuXG4uc3BvcnQtZ2FtZS1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4ucmVzdWx0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxucCB7XG4gIG1hcmdpbjogMCA1cHggMCA1cHg7XG59XG5cbiNyZXN1bHQtY29udGFpbmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuXG4uZXhwYW5zaW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBQUZBOSAhaW1wb3J0YW50O1xufVxuXG5tYXQtYWNjb3JkaW9uIHtcbiAgd2lkdGg6IDQwdnc7XG59XG5cbi5tZWRpYS1zZWFyY2gge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDIwcHggMCA1cHggMDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4ucmVzdWx0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW46IDAgNXB4IDAgNXB4O1xyXG59XHJcblxyXG4jcmVzdWx0LWNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmV4cGFuc2lvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNBQUZBOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtYWNjb3JkaW9uIHtcclxuICB3aWR0aDogNDB2dztcclxufVxyXG5cclxuLm1lZGlhLXNlYXJjaCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggMCA1cHggMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/media-search-widget/media-search-widget.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/media-search-widget/media-search-widget.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MediaSearchWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaSearchWidgetComponent", function() { return MediaSearchWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_home_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home-api.service */ "./src/app/services/home-api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let MediaSearchWidgetComponent = class MediaSearchWidgetComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.expanded = false;
        this.hasSearched = false;
        this.hasError = false;
        this.searchResults = [];
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    search() {
        this.hasError = false;
        this.searchResults = [];
        this.apiService.searchMedia(this.control.value).subscribe(results => {
            this.hasSearched = true;
            this.searchResults = results;
        }, () => {
            this.hasError = true;
        });
    }
    ;
    close() {
        this.expanded = false;
        this.hasSearched = false;
        this.hasError = false;
        this.searchResults = [];
        this.control.setValue('');
    }
    ;
};
MediaSearchWidgetComponent.ctorParameters = () => [
    { type: _services_home_api_service__WEBPACK_IMPORTED_MODULE_2__["HomeApiService"] }
];
MediaSearchWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-media-search-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./media-search-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/media-search-widget/media-search-widget.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./media-search-widget.component.scss */ "./src/app/components/media-search-widget/media-search-widget.component.scss")).default]
    })
], MediaSearchWidgetComponent);



/***/ }),

/***/ "./src/app/components/mma-widget/mma-widget.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/mma-widget/mma-widget.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n.right {\n  align-items: end;\n}\n.cursor {\n  cursor: pointer;\n  display: inline-block;\n}\n.sport-ctn {\n  display: flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.sport-title {\n  font-size: x-large;\n  font-weight: 500;\n  padding: 5px;\n  align-self: center;\n}\n.date-label {\n  align-self: center;\n  padding: 1vh 0;\n}\n.at-label, .time-label {\n  padding: 0 0.5vw;\n}\n.away-label, .home-label {\n  width: 8vw;\n}\n.person-label {\n  width: 13vw;\n}\n.game-label {\n  min-width: 8vw;\n  border-radius: 5vw;\n  margin-bottom: 0.25vh;\n}\n.sport-game-ctn {\n  display: flex;\n  align-self: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tbWEtd2lkZ2V0L2M6XFx3b3Jrc3BhY2VcXGhvbWUtcGFnZS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21tYS13aWRnZXQvbW1hLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0UsWUFBQTtBQ0FGO0FER0E7RUFDRSxTQUFBO0VBQ0EsaURBQUE7QUNBRjtBRG1EQTtFQVhFLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLCtCQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG1CQUFBO0VBQ0EsOEJBQUE7RUFHRSx1QkFBQTtFQUNBLGlDQUFBO0VBREEsdUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsMkJBQUE7RUFHRSx5QkFBQTtFQUNBLGlDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGdDQUFBO0VBREEsc0JBQUE7RUFDQSxnQ0FBQTtFQUxGLDBCQUFBO0VBQ0Esa0NBQUE7RUFHRSw2QkFBQTtFQUNBLHFDQUFBO0VBREEsNkJBQUE7RUFDQSxxQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsNEJBQUE7RUFHRSx5QkFBQTtFQUNBLGdDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLGdDQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG9CQUFBO0VBQ0Esd0JBQUE7RUFHRSx1QkFBQTtFQUNBLCtCQUFBO0VBREEsdUJBQUE7RUFDQSwrQkFBQTtFQUxGLHVCQUFBO0VBQ0EsNEJBQUE7RUFHRSwwQkFBQTtFQUNBLGlDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsOEJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsd0JBQUE7RUFDQSxrQ0FBQTtFQVdGLG1DQUFBO0VBQ0EsdUNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ2NGO0FEWEE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDY0Y7QURYQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNjRjtBRFhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2NGO0FEWEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsVUFBQTtBQ2NGO0FEWEE7RUFDRSxXQUFBO0FDY0Y7QURYQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZUFBQTtFQUNBLHFCQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21tYS13aWRnZXQvbW1hLXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIGJveCgkaGVpZ2h0OiA2MHB4LCAkd2lkdGg6IDYwcHgpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxufVxyXG5cclxuQG1peGluIGxhcmdlRm9udCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uU3R5bGluZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uQ29sb3IpO1xyXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG59XHJcblxyXG4kdGFyZ2V0LWNvbG9yczogKFxyXG4gIGJsdWUtY29sb3I6ICMyMzYzNjcsXHJcbiAgd2hpdGUtY29sb3I6ICNmZmYsXHJcbiAgYmxhY2stY29sb3I6ICM0MjQxM2QsXHJcbiAgZ3JheS1jb2xvcjogI0E5QTlBOSxcclxuICBncmF5LWRhcmstY29sb3I6ICM4MDgwODAsXHJcbiAgZ3JlZW4tY29sb3I6ICMyMGFlNDQsXHJcbiAgcGluay1jb2xvcjogI2ZmNDEyNCxcclxuICByZWQtY29sb3I6ICNGRjAwMDAsXHJcbiAgcHVycGxlLWNvbG9yOiAjNEEyMzVBLFxyXG4gIG9yYW5nZS1jb2xvcjogI0ZGNjYwMCxcclxuICB5ZWxsb3ctY29sb3I6ICNmYWUzNjEsXHJcbik7XHJcblxyXG4kdG9uZXM6IDQwLCA4MDtcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXIoJGtleSwgJHZhbHVlKSB7XHJcbiAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XHJcbiAgLS0jeyRrZXl9LXJnYjogI3tyZWQoJHZhbHVlKX0sI3tncmVlbigkdmFsdWUpfSwje2JsdWUoJHZhbHVlKX07XHJcbiAgQGVhY2ggJHRvbmUgaW4gJHRvbmVzIHtcclxuICAgICRzY2FsZS12YWx1ZTogYWRqdXN0LWNvbG9yKCR2YWx1ZSwgJGxpZ2h0bmVzczogJHRvbmUgLyAyICogMSUpO1xyXG4gICAgLS0jeyRrZXl9LSN7JHRvbmV9OiAjeyRzY2FsZS12YWx1ZX07XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX0tcmdiOiAje3JlZCgkc2NhbGUtdmFsdWUpfSwje2dyZWVuKCRzY2FsZS12YWx1ZSl9LCN7Ymx1ZSgkc2NhbGUtdmFsdWUpfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvbG9yIFBhbGV0dGU6IFRyaWFkaWMgU2NoZW1lXHJcblxyXG46cm9vdCB7XHJcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0YXJnZXQtY29sb3JzIHtcclxuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XHJcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItODApO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zcG9ydC1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNwb3J0LXRpdGxlIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0ZS1sYWJlbCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDF2aCAwO1xyXG59XHJcblxyXG4uYXQtbGFiZWwsIC50aW1lLWxhYmVsIHtcclxuICBwYWRkaW5nOiAwIC41dnc7XHJcbn1cclxuXHJcbi5hd2F5LWxhYmVsLCAuaG9tZS1sYWJlbCB7XHJcbiAgd2lkdGg6IDh2dztcclxufVxyXG5cclxuLnBlcnNvbi1sYWJlbCB7XHJcbiAgd2lkdGg6IDEzdnc7XHJcbn1cclxuXHJcbi5nYW1lLWxhYmVsIHtcclxuICBtaW4td2lkdGg6IDh2dztcclxuICBib3JkZXItcmFkaXVzOiA1dnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXZoO1xyXG59XHJcblxyXG4uc3BvcnQtZ2FtZS1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0tYmx1ZS1jb2xvcjogIzIzNjM2NztcbiAgLS1ibHVlLWNvbG9yLXJnYjogMzUsOTksMTAzO1xuICAtLWJsdWUtY29sb3ItNDA6ICMzZGFjYjM7XG4gIC0tYmx1ZS1jb2xvci00MC1yZ2I6IDYxLDE3MiwxNzk7XG4gIC0tYmx1ZS1jb2xvci04MDogIzgyZDBkNDtcbiAgLS1ibHVlLWNvbG9yLTgwLXJnYjogMTMwLDIwOCwyMTI7XG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XG4gIC0td2hpdGUtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci00MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItNDAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci04MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ibGFjay1jb2xvcjogIzQyNDEzZDtcbiAgLS1ibGFjay1jb2xvci1yZ2I6IDY2LDY1LDYxO1xuICAtLWJsYWNrLWNvbG9yLTQwOiAjNzc3NTZlO1xuICAtLWJsYWNrLWNvbG9yLTQwLXJnYjogMTE5LDExNywxMTA7XG4gIC0tYmxhY2stY29sb3ItODA6ICNhOWE4YTI7XG4gIC0tYmxhY2stY29sb3ItODAtcmdiOiAxNjksMTY4LDE2MjtcbiAgLS1ncmF5LWNvbG9yOiAjQTlBOUE5O1xuICAtLWdyYXktY29sb3ItcmdiOiAxNjksMTY5LDE2OTtcbiAgLS1ncmF5LWNvbG9yLTQwOiBnYWluc2Jvcm87XG4gIC0tZ3JheS1jb2xvci00MC1yZ2I6IDIyMCwyMjAsMjIwO1xuICAtLWdyYXktY29sb3ItODA6IHdoaXRlO1xuICAtLWdyYXktY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ncmF5LWRhcmstY29sb3I6ICM4MDgwODA7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLXJnYjogMTI4LDEyOCwxMjg7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwOiAjYjNiM2IzO1xuICAtLWdyYXktZGFyay1jb2xvci00MC1yZ2I6IDE3OSwxNzksMTc5O1xuICAtLWdyYXktZGFyay1jb2xvci04MDogI2U2ZTZlNjtcbiAgLS1ncmF5LWRhcmstY29sb3ItODAtcmdiOiAyMzAsMjMwLDIzMDtcbiAgLS1ncmVlbi1jb2xvcjogIzIwYWU0NDtcbiAgLS1ncmVlbi1jb2xvci1yZ2I6IDMyLDE3NCw2ODtcbiAgLS1ncmVlbi1jb2xvci00MDogIzU0ZTA3ODtcbiAgLS1ncmVlbi1jb2xvci00MC1yZ2I6IDg0LDIyNCwxMjA7XG4gIC0tZ3JlZW4tY29sb3ItODA6ICNhYmVmYmM7XG4gIC0tZ3JlZW4tY29sb3ItODAtcmdiOiAxNzEsMjM5LDE4ODtcbiAgLS1waW5rLWNvbG9yOiAjZmY0MTI0O1xuICAtLXBpbmstY29sb3ItcmdiOiAyNTUsNjUsMzY7XG4gIC0tcGluay1jb2xvci00MDogI2ZmOTk4YTtcbiAgLS1waW5rLWNvbG9yLTQwLXJnYjogMjU1LDE1MywxMzg7XG4gIC0tcGluay1jb2xvci04MDogI2ZmZjJmMDtcbiAgLS1waW5rLWNvbG9yLTgwLXJnYjogMjU1LDI0MiwyNDA7XG4gIC0tcmVkLWNvbG9yOiAjRkYwMDAwO1xuICAtLXJlZC1jb2xvci1yZ2I6IDI1NSwwLDA7XG4gIC0tcmVkLWNvbG9yLTQwOiAjZmY2NjY2O1xuICAtLXJlZC1jb2xvci00MC1yZ2I6IDI1NSwxMDIsMTAyO1xuICAtLXJlZC1jb2xvci04MDogI2ZmY2NjYztcbiAgLS1yZWQtY29sb3ItODAtcmdiOiAyNTUsMjA0LDIwNDtcbiAgLS1wdXJwbGUtY29sb3I6ICM0QTIzNUE7XG4gIC0tcHVycGxlLWNvbG9yLXJnYjogNzQsMzUsOTA7XG4gIC0tcHVycGxlLWNvbG9yLTQwOiAjODY0MGEzO1xuICAtLXB1cnBsZS1jb2xvci00MC1yZ2I6IDEzNCw2NCwxNjM7XG4gIC0tcHVycGxlLWNvbG9yLTgwOiAjYjU3ZGNjO1xuICAtLXB1cnBsZS1jb2xvci04MC1yZ2I6IDE4MSwxMjUsMjA0O1xuICAtLW9yYW5nZS1jb2xvcjogI0ZGNjYwMDtcbiAgLS1vcmFuZ2UtY29sb3ItcmdiOiAyNTUsMTAyLDA7XG4gIC0tb3JhbmdlLWNvbG9yLTQwOiAjZmZhMzY2O1xuICAtLW9yYW5nZS1jb2xvci00MC1yZ2I6IDI1NSwxNjMsMTAyO1xuICAtLW9yYW5nZS1jb2xvci04MDogI2ZmZTBjYztcbiAgLS1vcmFuZ2UtY29sb3ItODAtcmdiOiAyNTUsMjI0LDIwNDtcbiAgLS15ZWxsb3ctY29sb3I6ICNmYWUzNjE7XG4gIC0teWVsbG93LWNvbG9yLXJnYjogMjUwLDIyNyw5NztcbiAgLS15ZWxsb3ctY29sb3ItNDA6ICNmZGY1YzQ7XG4gIC0teWVsbG93LWNvbG9yLTQwLXJnYjogMjUzLDI0NSwxOTY7XG4gIC0teWVsbG93LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS15ZWxsb3ctY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcbn1cblxuLnJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3BvcnQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcG9ydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kYXRlLWxhYmVsIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxdmggMDtcbn1cblxuLmF0LWxhYmVsLCAudGltZS1sYWJlbCB7XG4gIHBhZGRpbmc6IDAgMC41dnc7XG59XG5cbi5hd2F5LWxhYmVsLCAuaG9tZS1sYWJlbCB7XG4gIHdpZHRoOiA4dnc7XG59XG5cbi5wZXJzb24tbGFiZWwge1xuICB3aWR0aDogMTN2dztcbn1cblxuLmdhbWUtbGFiZWwge1xuICBtaW4td2lkdGg6IDh2dztcbiAgYm9yZGVyLXJhZGl1czogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAwLjI1dmg7XG59XG5cbi5zcG9ydC1nYW1lLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/mma-widget/mma-widget.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/mma-widget/mma-widget.component.ts ***!
  \***************************************************************/
/*! exports provided: MmaWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MmaWidgetComponent", function() { return MmaWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _models_fight_card_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/fight-card.model */ "./src/app/models/fight-card.model.ts");




let MmaWidgetComponent = class MmaWidgetComponent {
    constructor(settingsService) {
        this.settingsService = settingsService;
        this.fightCard = new _models_fight_card_model__WEBPACK_IMPORTED_MODULE_3__["FightCard"]();
    }
};
MmaWidgetComponent.ctorParameters = () => [
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MmaWidgetComponent.prototype, "fightCard", void 0);
MmaWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mma-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mma-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mma-widget/mma-widget.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mma-widget.component.scss */ "./src/app/components/mma-widget/mma-widget.component.scss")).default]
    })
], MmaWidgetComponent);



/***/ }),

/***/ "./src/app/components/sport-widget/sport-widget.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/sport-widget/sport-widget.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n.right {\n  align-items: end;\n}\n.cursor {\n  cursor: pointer;\n  display: inline-block;\n}\n.sport-ctn {\n  display: flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.sport-title {\n  font-size: x-large;\n  font-weight: 500;\n  padding: 5px;\n  align-self: center;\n}\n.date-label {\n  align-self: center;\n  padding: 1vh 0;\n}\n.at-label, .time-label {\n  padding: 0 0.5vw;\n}\n.away-label, .home-label {\n  width: 8vw;\n}\n.person-label {\n  width: 13vw;\n}\n.game-label {\n  min-width: 8vw;\n  border-radius: 5vw;\n  margin-bottom: 0.25vh;\n}\n.sport-game-ctn {\n  display: flex;\n  align-self: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\nimg {\n  height: 2vh;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcG9ydC13aWRnZXQvYzpcXHdvcmtzcGFjZVxcaG9tZS1wYWdlL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc3BvcnQtd2lkZ2V0L3Nwb3J0LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zcG9ydC13aWRnZXQvYzpcXHdvcmtzcGFjZVxcaG9tZS1wYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzcG9ydC13aWRnZXRcXHNwb3J0LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0UsWUFBQTtBQ0FGO0FER0E7RUFDRSxTQUFBO0VBQ0EsaURBQUE7QUNBRjtBRG1EQTtFQVhFLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLCtCQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG1CQUFBO0VBQ0EsOEJBQUE7RUFHRSx1QkFBQTtFQUNBLGlDQUFBO0VBREEsdUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsMkJBQUE7RUFHRSx5QkFBQTtFQUNBLGlDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGdDQUFBO0VBREEsc0JBQUE7RUFDQSxnQ0FBQTtFQUxGLDBCQUFBO0VBQ0Esa0NBQUE7RUFHRSw2QkFBQTtFQUNBLHFDQUFBO0VBREEsNkJBQUE7RUFDQSxxQ0FBQTtFQUxGLHNCQUFBO0VBQ0EsNEJBQUE7RUFHRSx5QkFBQTtFQUNBLGdDQUFBO0VBREEseUJBQUE7RUFDQSxpQ0FBQTtFQUxGLHFCQUFBO0VBQ0EsMkJBQUE7RUFHRSx3QkFBQTtFQUNBLGdDQUFBO0VBREEsd0JBQUE7RUFDQSxnQ0FBQTtFQUxGLG9CQUFBO0VBQ0Esd0JBQUE7RUFHRSx1QkFBQTtFQUNBLCtCQUFBO0VBREEsdUJBQUE7RUFDQSwrQkFBQTtFQUxGLHVCQUFBO0VBQ0EsNEJBQUE7RUFHRSwwQkFBQTtFQUNBLGlDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsNkJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsMEJBQUE7RUFDQSxrQ0FBQTtFQUxGLHVCQUFBO0VBQ0EsOEJBQUE7RUFHRSwwQkFBQTtFQUNBLGtDQUFBO0VBREEsd0JBQUE7RUFDQSxrQ0FBQTtFQVdGLG1DQUFBO0VBQ0EsdUNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ2NGO0FEWEE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDY0Y7QURYQTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUNjRjtBRFhBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2NGO0FEWEE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUNjRjtBRFhBO0VBQ0UsZ0JBQUE7QUNjRjtBRFhBO0VBQ0UsVUFBQTtBQ2NGO0FEWEE7RUFDRSxXQUFBO0FDY0Y7QURYQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDY0Y7QURYQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBRUEsZUFBQTtFQUNBLHFCQUFBO0FDYUY7QUMzSUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRDhJRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BvcnQtd2lkZ2V0L3Nwb3J0LXdpZGdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIGJveCgkaGVpZ2h0OiA2MHB4LCAkd2lkdGg6IDYwcHgpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxufVxyXG5cclxuQG1peGluIGxhcmdlRm9udCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uU3R5bGluZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uQ29sb3IpO1xyXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG59XHJcblxyXG4kdGFyZ2V0LWNvbG9yczogKFxyXG4gIGJsdWUtY29sb3I6ICMyMzYzNjcsXHJcbiAgd2hpdGUtY29sb3I6ICNmZmYsXHJcbiAgYmxhY2stY29sb3I6ICM0MjQxM2QsXHJcbiAgZ3JheS1jb2xvcjogI0E5QTlBOSxcclxuICBncmF5LWRhcmstY29sb3I6ICM4MDgwODAsXHJcbiAgZ3JlZW4tY29sb3I6ICMyMGFlNDQsXHJcbiAgcGluay1jb2xvcjogI2ZmNDEyNCxcclxuICByZWQtY29sb3I6ICNGRjAwMDAsXHJcbiAgcHVycGxlLWNvbG9yOiAjNEEyMzVBLFxyXG4gIG9yYW5nZS1jb2xvcjogI0ZGNjYwMCxcclxuICB5ZWxsb3ctY29sb3I6ICNmYWUzNjEsXHJcbik7XHJcblxyXG4kdG9uZXM6IDQwLCA4MDtcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXIoJGtleSwgJHZhbHVlKSB7XHJcbiAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XHJcbiAgLS0jeyRrZXl9LXJnYjogI3tyZWQoJHZhbHVlKX0sI3tncmVlbigkdmFsdWUpfSwje2JsdWUoJHZhbHVlKX07XHJcbiAgQGVhY2ggJHRvbmUgaW4gJHRvbmVzIHtcclxuICAgICRzY2FsZS12YWx1ZTogYWRqdXN0LWNvbG9yKCR2YWx1ZSwgJGxpZ2h0bmVzczogJHRvbmUgLyAyICogMSUpO1xyXG4gICAgLS0jeyRrZXl9LSN7JHRvbmV9OiAjeyRzY2FsZS12YWx1ZX07XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX0tcmdiOiAje3JlZCgkc2NhbGUtdmFsdWUpfSwje2dyZWVuKCRzY2FsZS12YWx1ZSl9LCN7Ymx1ZSgkc2NhbGUtdmFsdWUpfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvbG9yIFBhbGV0dGU6IFRyaWFkaWMgU2NoZW1lXHJcblxyXG46cm9vdCB7XHJcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0YXJnZXQtY29sb3JzIHtcclxuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XHJcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItODApO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zcG9ydC1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNwb3J0LXRpdGxlIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0ZS1sYWJlbCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDF2aCAwO1xyXG59XHJcblxyXG4uYXQtbGFiZWwsIC50aW1lLWxhYmVsIHtcclxuICBwYWRkaW5nOiAwIC41dnc7XHJcbn1cclxuXHJcbi5hd2F5LWxhYmVsLCAuaG9tZS1sYWJlbCB7XHJcbiAgd2lkdGg6IDh2dztcclxufVxyXG5cclxuLnBlcnNvbi1sYWJlbCB7XHJcbiAgd2lkdGg6IDEzdnc7XHJcbn1cclxuXHJcbi5nYW1lLWxhYmVsIHtcclxuICBtaW4td2lkdGg6IDh2dztcclxuICBib3JkZXItcmFkaXVzOiA1dnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXZoO1xyXG59XHJcblxyXG4uc3BvcnQtZ2FtZS1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0tYmx1ZS1jb2xvcjogIzIzNjM2NztcbiAgLS1ibHVlLWNvbG9yLXJnYjogMzUsOTksMTAzO1xuICAtLWJsdWUtY29sb3ItNDA6ICMzZGFjYjM7XG4gIC0tYmx1ZS1jb2xvci00MC1yZ2I6IDYxLDE3MiwxNzk7XG4gIC0tYmx1ZS1jb2xvci04MDogIzgyZDBkNDtcbiAgLS1ibHVlLWNvbG9yLTgwLXJnYjogMTMwLDIwOCwyMTI7XG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XG4gIC0td2hpdGUtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci00MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItNDAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci04MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ibGFjay1jb2xvcjogIzQyNDEzZDtcbiAgLS1ibGFjay1jb2xvci1yZ2I6IDY2LDY1LDYxO1xuICAtLWJsYWNrLWNvbG9yLTQwOiAjNzc3NTZlO1xuICAtLWJsYWNrLWNvbG9yLTQwLXJnYjogMTE5LDExNywxMTA7XG4gIC0tYmxhY2stY29sb3ItODA6ICNhOWE4YTI7XG4gIC0tYmxhY2stY29sb3ItODAtcmdiOiAxNjksMTY4LDE2MjtcbiAgLS1ncmF5LWNvbG9yOiAjQTlBOUE5O1xuICAtLWdyYXktY29sb3ItcmdiOiAxNjksMTY5LDE2OTtcbiAgLS1ncmF5LWNvbG9yLTQwOiBnYWluc2Jvcm87XG4gIC0tZ3JheS1jb2xvci00MC1yZ2I6IDIyMCwyMjAsMjIwO1xuICAtLWdyYXktY29sb3ItODA6IHdoaXRlO1xuICAtLWdyYXktY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ncmF5LWRhcmstY29sb3I6ICM4MDgwODA7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLXJnYjogMTI4LDEyOCwxMjg7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwOiAjYjNiM2IzO1xuICAtLWdyYXktZGFyay1jb2xvci00MC1yZ2I6IDE3OSwxNzksMTc5O1xuICAtLWdyYXktZGFyay1jb2xvci04MDogI2U2ZTZlNjtcbiAgLS1ncmF5LWRhcmstY29sb3ItODAtcmdiOiAyMzAsMjMwLDIzMDtcbiAgLS1ncmVlbi1jb2xvcjogIzIwYWU0NDtcbiAgLS1ncmVlbi1jb2xvci1yZ2I6IDMyLDE3NCw2ODtcbiAgLS1ncmVlbi1jb2xvci00MDogIzU0ZTA3ODtcbiAgLS1ncmVlbi1jb2xvci00MC1yZ2I6IDg0LDIyNCwxMjA7XG4gIC0tZ3JlZW4tY29sb3ItODA6ICNhYmVmYmM7XG4gIC0tZ3JlZW4tY29sb3ItODAtcmdiOiAxNzEsMjM5LDE4ODtcbiAgLS1waW5rLWNvbG9yOiAjZmY0MTI0O1xuICAtLXBpbmstY29sb3ItcmdiOiAyNTUsNjUsMzY7XG4gIC0tcGluay1jb2xvci00MDogI2ZmOTk4YTtcbiAgLS1waW5rLWNvbG9yLTQwLXJnYjogMjU1LDE1MywxMzg7XG4gIC0tcGluay1jb2xvci04MDogI2ZmZjJmMDtcbiAgLS1waW5rLWNvbG9yLTgwLXJnYjogMjU1LDI0MiwyNDA7XG4gIC0tcmVkLWNvbG9yOiAjRkYwMDAwO1xuICAtLXJlZC1jb2xvci1yZ2I6IDI1NSwwLDA7XG4gIC0tcmVkLWNvbG9yLTQwOiAjZmY2NjY2O1xuICAtLXJlZC1jb2xvci00MC1yZ2I6IDI1NSwxMDIsMTAyO1xuICAtLXJlZC1jb2xvci04MDogI2ZmY2NjYztcbiAgLS1yZWQtY29sb3ItODAtcmdiOiAyNTUsMjA0LDIwNDtcbiAgLS1wdXJwbGUtY29sb3I6ICM0QTIzNUE7XG4gIC0tcHVycGxlLWNvbG9yLXJnYjogNzQsMzUsOTA7XG4gIC0tcHVycGxlLWNvbG9yLTQwOiAjODY0MGEzO1xuICAtLXB1cnBsZS1jb2xvci00MC1yZ2I6IDEzNCw2NCwxNjM7XG4gIC0tcHVycGxlLWNvbG9yLTgwOiAjYjU3ZGNjO1xuICAtLXB1cnBsZS1jb2xvci04MC1yZ2I6IDE4MSwxMjUsMjA0O1xuICAtLW9yYW5nZS1jb2xvcjogI0ZGNjYwMDtcbiAgLS1vcmFuZ2UtY29sb3ItcmdiOiAyNTUsMTAyLDA7XG4gIC0tb3JhbmdlLWNvbG9yLTQwOiAjZmZhMzY2O1xuICAtLW9yYW5nZS1jb2xvci00MC1yZ2I6IDI1NSwxNjMsMTAyO1xuICAtLW9yYW5nZS1jb2xvci04MDogI2ZmZTBjYztcbiAgLS1vcmFuZ2UtY29sb3ItODAtcmdiOiAyNTUsMjI0LDIwNDtcbiAgLS15ZWxsb3ctY29sb3I6ICNmYWUzNjE7XG4gIC0teWVsbG93LWNvbG9yLXJnYjogMjUwLDIyNyw5NztcbiAgLS15ZWxsb3ctY29sb3ItNDA6ICNmZGY1YzQ7XG4gIC0teWVsbG93LWNvbG9yLTQwLXJnYjogMjUzLDI0NSwxOTY7XG4gIC0teWVsbG93LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS15ZWxsb3ctY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcbn1cblxuLnJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3BvcnQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcG9ydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kYXRlLWxhYmVsIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxdmggMDtcbn1cblxuLmF0LWxhYmVsLCAudGltZS1sYWJlbCB7XG4gIHBhZGRpbmc6IDAgMC41dnc7XG59XG5cbi5hd2F5LWxhYmVsLCAuaG9tZS1sYWJlbCB7XG4gIHdpZHRoOiA4dnc7XG59XG5cbi5wZXJzb24tbGFiZWwge1xuICB3aWR0aDogMTN2dztcbn1cblxuLmdhbWUtbGFiZWwge1xuICBtaW4td2lkdGg6IDh2dztcbiAgYm9yZGVyLXJhZGl1czogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAwLjI1dmg7XG59XG5cbi5zcG9ydC1nYW1lLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbmltZyB7XG4gIGhlaWdodDogMnZoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDJ2aDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/sport-widget/sport-widget.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sport-widget/sport-widget.component.ts ***!
  \*******************************************************************/
/*! exports provided: SportWidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportWidgetComponent", function() { return SportWidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _models_games_per_date_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/games-per-date.model */ "./src/app/models/games-per-date.model.ts");
/* harmony import */ var _services_window_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/window.service */ "./src/app/services/window.service.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/constants */ "./src/app/constants/constants.ts");






let SportWidgetComponent = class SportWidgetComponent {
    constructor(settingsService, windowService) {
        this.settingsService = settingsService;
        this.windowService = windowService;
        this.gamesPerDate = new _models_games_per_date_model__WEBPACK_IMPORTED_MODULE_3__["GamesPerDate"]({ games: [] });
        this.isBasketball = true;
    }
    shouldShow() {
        return (this.isBasketball ? this.settingsService.showBasketball : this.settingsService.showFootball);
    }
    imgClick(game, isHome = true) {
        let url = isHome ? game.homeTeamLink : game.opponentTeamLink;
        this.windowService.openBlank(url);
    }
    getImage(game, isHome = true) {
        return isHome ? game.home : game.opponentImageLink;
    }
    liveTime(time) {
        return Object(_constants_constants__WEBPACK_IMPORTED_MODULE_5__["liveTime"])(time);
    }
};
SportWidgetComponent.ctorParameters = () => [
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] },
    { type: _services_window_service__WEBPACK_IMPORTED_MODULE_4__["WindowService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SportWidgetComponent.prototype, "gamesPerDate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SportWidgetComponent.prototype, "isBasketball", void 0);
SportWidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sport-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sport-widget.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sport-widget/sport-widget.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sport-widget.component.scss */ "./src/app/components/sport-widget/sport-widget.component.scss")).default]
    })
], SportWidgetComponent);



/***/ }),

/***/ "./src/app/components/yes-no-dropdown/yes-no-dropdown.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/yes-no-dropdown/yes-no-dropdown.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dropdown-ctn {\n  display: flex;\n  align-items: center;\n}\n\n.dropdown {\n  display: flex;\n  align-items: center;\n}\n\n.dropdown__label {\n  font-weight: 500;\n  min-width: 260px;\n}\n\n.dropdown-form-field {\n  min-width: 100px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n\n::ng-deep .mat-option {\n  white-space: pre-wrap !important;\n  text-indent: 0;\n}\n\n::ng-deep .mat-option-text {\n  line-height: 1.5em !important;\n  padding: 8px;\n  box-sizing: content-box;\n}\n\n::ng-deep .mat-select {\n  overflow: visible;\n}\n\n::ng-deep .mat-select-value-text {\n  word-wrap: break-word !important;\n  white-space: pre-wrap !important;\n  box-sizing: content-box;\n  padding: 5px;\n}\n\n::ng-deep .mat-form-field .mat-select {\n  height: 24px;\n  overflow: visible;\n}\n\n::ng-deep .mat-form-field .mat-select .mat-select-value-text {\n  overflow: visible;\n  display: flex;\n}\n\n::ng-deep .mat-form-field .mat-select-value {\n  overflow: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy95ZXMtbm8tZHJvcGRvd24vYzpcXHdvcmtzcGFjZVxcaG9tZS1wYWdlL3NyY1xcYXBwXFxjb21wb25lbnRzXFx5ZXMtbm8tZHJvcGRvd25cXHllcy1uby1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy95ZXMtbm8tZHJvcGRvd24veWVzLW5vLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0NBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURJRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREdJO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDRE47O0FES0U7RUFDRSxpQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy95ZXMtbm8tZHJvcGRvd24veWVzLW5vLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLWN0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duX19sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtaW4td2lkdGg6IDI2MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tZm9ybS1maWVsZCB7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24ge1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcCAhaW1wb3J0YW50O1xyXG4gIHRleHQtaW5kZW50OiAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Qge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWUtdGV4dCB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXBcclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAubWF0LXNlbGVjdCB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcclxuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbn1cclxuXHJcbiIsIi5kcm9wZG93bi1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZHJvcGRvd24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZHJvcGRvd25fX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWluLXdpZHRoOiAyNjBweDtcbn1cblxuLmRyb3Bkb3duLWZvcm0tZmllbGQge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtb3B0aW9uIHtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gIHRleHQtaW5kZW50OiAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1vcHRpb24tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG46Om5nLWRlZXAgLm1hdC1zZWxlY3Qge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlLXRleHQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3Qge1xuICBoZWlnaHQ6IDI0cHg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdCAubWF0LXNlbGVjdC12YWx1ZS10ZXh0IHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/yes-no-dropdown/yes-no-dropdown.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/yes-no-dropdown/yes-no-dropdown.component.ts ***!
  \*************************************************************************/
/*! exports provided: YesNoDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YesNoDropdownComponent", function() { return YesNoDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let YesNoDropdownComponent = class YesNoDropdownComponent {
    constructor() {
        this.yesOption = 'Yes';
        this.noOption = 'No';
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    get className() {
        return this.htmlId + '-option';
    }
    onChange() {
        this.changeEvent.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], YesNoDropdownComponent.prototype, "control", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], YesNoDropdownComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], YesNoDropdownComponent.prototype, "htmlId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], YesNoDropdownComponent.prototype, "yesOption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], YesNoDropdownComponent.prototype, "noOption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], YesNoDropdownComponent.prototype, "changeEvent", void 0);
YesNoDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-yes-no-dropdown',
        template: `
    <div class="dropdown-ctn">
      <div data-dropdown-label class="dropdown__label">
        {{name}}
      </div>
      <div class="dropdown__data">
        <mat-form-field class="dropdown-form-field">
          <mat-label>Select Value</mat-label>
          <mat-select [formControl]="control" (selectionChange)="onChange()"
                      [id]="htmlId">
            <mat-option data-dropdown-option [value]="true" [ngClass]="className">
              {{yesOption}}
            </mat-option>
            <mat-option data-dropdown-option [value]="false" [ngClass]="className">
              {{noOption}}
            </mat-option>
          </mat-select>
          <mat-error data-basic-error *ngIf="!control.valid">
            {{name}} is required
          </mat-error>
        </mat-form-field>
      </div>
    </div>
  `,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yes-no-dropdown.component.scss */ "./src/app/components/yes-no-dropdown/yes-no-dropdown.component.scss")).default]
    })
], YesNoDropdownComponent);



/***/ }),

/***/ "./src/app/constants/constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/*! exports provided: RESET_EVERYTHING_MESSAGE, ACTION_CANCELLED_MESSAGE, RESET_SETTINGS_SUCCESS_MESSAGE, APPLY_SETTING_SUCCESS_MESSAGE, PERFORM_THIS_ACTION, COLOR_OPTIONS, TITLE_DEFAULT, COLOR_DEFAULT, REFRESH_RATE_DEFAULT, SHOW_SPORTS_DEFAULT, WHICH_SELECTION_DEFAULT, TODAY, UPCOMING, isNullOrUndefined, toBoolean, liveTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_EVERYTHING_MESSAGE", function() { return RESET_EVERYTHING_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACTION_CANCELLED_MESSAGE", function() { return ACTION_CANCELLED_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_SETTINGS_SUCCESS_MESSAGE", function() { return RESET_SETTINGS_SUCCESS_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPLY_SETTING_SUCCESS_MESSAGE", function() { return APPLY_SETTING_SUCCESS_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERFORM_THIS_ACTION", function() { return PERFORM_THIS_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_OPTIONS", function() { return COLOR_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_DEFAULT", function() { return TITLE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_DEFAULT", function() { return COLOR_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_RATE_DEFAULT", function() { return REFRESH_RATE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_SPORTS_DEFAULT", function() { return SHOW_SPORTS_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHICH_SELECTION_DEFAULT", function() { return WHICH_SELECTION_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODAY", function() { return TODAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPCOMING", function() { return UPCOMING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return toBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liveTime", function() { return liveTime; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const RESET_EVERYTHING_MESSAGE = 'This will reset everything to the default settings.';
const ACTION_CANCELLED_MESSAGE = 'Action Cancelled.';
const RESET_SETTINGS_SUCCESS_MESSAGE = 'Setting reset successfully.';
const APPLY_SETTING_SUCCESS_MESSAGE = 'Settings applied successfully.';
const PERFORM_THIS_ACTION = 'Are you sure you want to perform this action?';
const COLOR_OPTIONS = [
    {
        name: 'Black',
        value: '--black-color-'
    },
    {
        name: 'Blue',
        value: '--blue-color-'
    },
    {
        name: 'Gray',
        value: '--gray-color-'
    },
    {
        name: 'Gray Dark',
        value: '--gray-dark-color-'
    },
    {
        name: 'Green',
        value: '--green-color-'
    },
    {
        name: 'Orange',
        value: '--orange-color-'
    },
    {
        name: 'Pink',
        value: '--pink-color-'
    },
    {
        name: 'Purple',
        value: '--purple-color-'
    },
    {
        name: 'Red',
        value: '--red-color-'
    },
    {
        name: 'Yellow',
        value: '--yellow-color-'
    },
    {
        name: 'White',
        value: '--white-color-'
    }
];
const TITLE_DEFAULT = 'Home Page';
const COLOR_DEFAULT = '--blue-color-';
const REFRESH_RATE_DEFAULT = 60;
const SHOW_SPORTS_DEFAULT = true;
const WHICH_SELECTION_DEFAULT = false;
const TODAY = 'Today';
const UPCOMING = 'Upcoming';
function isNullOrUndefined(str) {
    return str == null || str === 'undefined' || str === 'null';
}
function toBoolean(value) {
    switch (value) {
        case true:
        case 'true':
        case 1:
        case '1':
        case 'on':
        case 'yes':
            return true;
        default:
            return false;
    }
}
function liveTime(time) {
    if (time.length > 0) {
        return time;
    }
    else {
        return 'LIVE';
    }
}


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");





let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [],
        imports: [
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]
        ],
        exports: [
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"]
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/models/alert.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/alert.model.ts ***!
  \***************************************/
/*! exports provided: Alert, AlertType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertType", function() { return AlertType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(init) {
        this.autoClose = true;
        this.keepAfterRouteChange = false;
        this.fade = true;
        Object.assign(this, init);
    }
}
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));


/***/ }),

/***/ "./src/app/models/fight-card.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/fight-card.model.ts ***!
  \********************************************/
/*! exports provided: FightCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FightCard", function() { return FightCard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class FightCard {
    constructor(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/models/games-per-date.model.ts":
/*!************************************************!*\
  !*** ./src/app/models/games-per-date.model.ts ***!
  \************************************************/
/*! exports provided: GamesPerDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPerDate", function() { return GamesPerDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GamesPerDate {
    constructor(init) {
        Object.assign(this, init);
    }
}


/***/ }),

/***/ "./src/app/models/item.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/item.model.ts ***!
  \**************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Item {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}


/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n.right {\n  align-items: end;\n}\n.cursor {\n  cursor: pointer;\n  display: inline-block;\n}\n.sport-ctn {\n  display: flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.sport-title {\n  font-size: x-large;\n  font-weight: 500;\n  padding: 5px;\n  align-self: center;\n}\n.date-label {\n  align-self: center;\n  padding: 1vh 0;\n}\n.at-label, .time-label {\n  padding: 0 0.5vw;\n}\n.away-label, .home-label {\n  width: 8vw;\n}\n.person-label {\n  width: 13vw;\n}\n.game-label {\n  min-width: 8vw;\n  border-radius: 5vw;\n  margin-bottom: 0.25vh;\n}\n.sport-game-ctn {\n  display: flex;\n  align-self: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n.header-div {\n  text-align: center;\n}\n[data-header-title] {\n  font-size: xx-large;\n  padding: 5px;\n}\n[data-content-div] {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 50px;\n}\n.refresh-count {\n  margin-right: 3vw;\n  margin-bottom: 3vh;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jOlxcd29ya3NwYWNlXFxob21lLXBhZ2Uvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2M6XFx3b3Jrc3BhY2VcXGhvbWUtcGFnZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTtFQUNFLFlBQUE7QUNBRjtBREdBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0FDQUY7QURtREE7RUFYRSxxQkFBQTtFQUNBLDJCQUFBO0VBR0Usd0JBQUE7RUFDQSwrQkFBQTtFQURBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFMRixtQkFBQTtFQUNBLDhCQUFBO0VBR0UsdUJBQUE7RUFDQSxpQ0FBQTtFQURBLHVCQUFBO0VBQ0EsaUNBQUE7RUFMRixzQkFBQTtFQUNBLDJCQUFBO0VBR0UseUJBQUE7RUFDQSxpQ0FBQTtFQURBLHlCQUFBO0VBQ0EsaUNBQUE7RUFMRixxQkFBQTtFQUNBLDZCQUFBO0VBR0UsMEJBQUE7RUFDQSxnQ0FBQTtFQURBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFMRiwwQkFBQTtFQUNBLGtDQUFBO0VBR0UsNkJBQUE7RUFDQSxxQ0FBQTtFQURBLDZCQUFBO0VBQ0EscUNBQUE7RUFMRixzQkFBQTtFQUNBLDRCQUFBO0VBR0UseUJBQUE7RUFDQSxnQ0FBQTtFQURBLHlCQUFBO0VBQ0EsaUNBQUE7RUFMRixxQkFBQTtFQUNBLDJCQUFBO0VBR0Usd0JBQUE7RUFDQSxnQ0FBQTtFQURBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFMRixvQkFBQTtFQUNBLHdCQUFBO0VBR0UsdUJBQUE7RUFDQSwrQkFBQTtFQURBLHVCQUFBO0VBQ0EsK0JBQUE7RUFMRix1QkFBQTtFQUNBLDRCQUFBO0VBR0UsMEJBQUE7RUFDQSxpQ0FBQTtFQURBLDBCQUFBO0VBQ0Esa0NBQUE7RUFMRix1QkFBQTtFQUNBLDZCQUFBO0VBR0UsMEJBQUE7RUFDQSxrQ0FBQTtFQURBLDBCQUFBO0VBQ0Esa0NBQUE7RUFMRix1QkFBQTtFQUNBLDhCQUFBO0VBR0UsMEJBQUE7RUFDQSxrQ0FBQTtFQURBLHdCQUFBO0VBQ0Esa0NBQUE7RUFXRixtQ0FBQTtFQUNBLHVDQUFBO0FDY0Y7QURYQTtFQUNFLGdCQUFBO0FDY0Y7QURYQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ2NGO0FEWEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNjRjtBRFhBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ2NGO0FEWEE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDY0Y7QURYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNjRjtBRFhBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDY0Y7QURYQTtFQUNFLGdCQUFBO0FDY0Y7QURYQTtFQUNFLFVBQUE7QUNjRjtBRFhBO0VBQ0UsV0FBQTtBQ2NGO0FEWEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ2NGO0FEWEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUVBLGVBQUE7RUFDQSxxQkFBQTtBQ2FGO0FDM0lBO0VBQ0Usa0JBQUE7QUQ4SUY7QUMzSUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUQ4SUY7QUMzSUE7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBRDhJRjtBQzNJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FEOElGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gYm94KCRoZWlnaHQ6IDYwcHgsICR3aWR0aDogNjBweCkge1xyXG4gIGhlaWdodDogJGhlaWdodDtcclxuICB3aWR0aDogJHdpZHRoO1xyXG59XHJcblxyXG5AbWl4aW4gbGFyZ2VGb250IHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbkBtaXhpbiBjZW50ZXJGbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b25TdHlsaW5nIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b25Db2xvcik7XHJcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XHJcbn1cclxuXHJcbiR0YXJnZXQtY29sb3JzOiAoXHJcbiAgYmx1ZS1jb2xvcjogIzIzNjM2NyxcclxuICB3aGl0ZS1jb2xvcjogI2ZmZixcclxuICBibGFjay1jb2xvcjogIzQyNDEzZCxcclxuICBncmF5LWNvbG9yOiAjQTlBOUE5LFxyXG4gIGdyYXktZGFyay1jb2xvcjogIzgwODA4MCxcclxuICBncmVlbi1jb2xvcjogIzIwYWU0NCxcclxuICBwaW5rLWNvbG9yOiAjZmY0MTI0LFxyXG4gIHJlZC1jb2xvcjogI0ZGMDAwMCxcclxuICBwdXJwbGUtY29sb3I6ICM0QTIzNUEsXHJcbiAgb3JhbmdlLWNvbG9yOiAjRkY2NjAwLFxyXG4gIHllbGxvdy1jb2xvcjogI2ZhZTM2MSxcclxuKTtcclxuXHJcbiR0b25lczogNDAsIDgwO1xyXG5cclxuQG1peGluIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpIHtcclxuICAtLSN7JGtleX06ICN7JHZhbHVlfTtcclxuICAtLSN7JGtleX0tcmdiOiAje3JlZCgkdmFsdWUpfSwje2dyZWVuKCR2YWx1ZSl9LCN7Ymx1ZSgkdmFsdWUpfTtcclxuICBAZWFjaCAkdG9uZSBpbiAkdG9uZXMge1xyXG4gICAgJHNjYWxlLXZhbHVlOiBhZGp1c3QtY29sb3IoJHZhbHVlLCAkbGlnaHRuZXNzOiAkdG9uZSAvIDIgKiAxJSk7XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX06ICN7JHNjYWxlLXZhbHVlfTtcclxuICAgIC0tI3ska2V5fS0jeyR0b25lfS1yZ2I6ICN7cmVkKCRzY2FsZS12YWx1ZSl9LCN7Z3JlZW4oJHNjYWxlLXZhbHVlKX0sI3tibHVlKCRzY2FsZS12YWx1ZSl9O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3IgUGFsZXR0ZTogVHJpYWRpYyBTY2hlbWVcclxuXHJcbjpyb290IHtcclxuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJHRhcmdldC1jb2xvcnMge1xyXG4gICAgQGluY2x1ZGUgZ2VuZXJhdGUtY29sb3ItdmFyKCRrZXksICR2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAtLWJ1dHRvbkNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTQwKTtcclxuICAtLWJhY2tncm91bmRDb2xvcjogdmFyKC0tYmx1ZS1jb2xvci04MCk7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG5cclxuLmN1cnNvciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNwb3J0LWN0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3BvcnQtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRlLWxhYmVsIHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXZoIDA7XHJcbn1cclxuXHJcbi5hdC1sYWJlbCwgLnRpbWUtbGFiZWwge1xyXG4gIHBhZGRpbmc6IDAgLjV2dztcclxufVxyXG5cclxuLmF3YXktbGFiZWwsIC5ob21lLWxhYmVsIHtcclxuICB3aWR0aDogOHZ3O1xyXG59XHJcblxyXG4ucGVyc29uLWxhYmVsIHtcclxuICB3aWR0aDogMTN2dztcclxufVxyXG5cclxuLmdhbWUtbGFiZWwge1xyXG4gIG1pbi13aWR0aDogOHZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDV2dztcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1dmg7XHJcbn1cclxuXHJcbi5zcG9ydC1nYW1lLWN0biB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgLS1ibHVlLWNvbG9yOiAjMjM2MzY3O1xuICAtLWJsdWUtY29sb3ItcmdiOiAzNSw5OSwxMDM7XG4gIC0tYmx1ZS1jb2xvci00MDogIzNkYWNiMztcbiAgLS1ibHVlLWNvbG9yLTQwLXJnYjogNjEsMTcyLDE3OTtcbiAgLS1ibHVlLWNvbG9yLTgwOiAjODJkMGQ0O1xuICAtLWJsdWUtY29sb3ItODAtcmdiOiAxMzAsMjA4LDIxMjtcbiAgLS13aGl0ZS1jb2xvcjogI2ZmZjtcbiAgLS13aGl0ZS1jb2xvci1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLXdoaXRlLWNvbG9yLTQwOiB3aGl0ZTtcbiAgLS13aGl0ZS1jb2xvci00MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLXdoaXRlLWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS13aGl0ZS1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWJsYWNrLWNvbG9yOiAjNDI0MTNkO1xuICAtLWJsYWNrLWNvbG9yLXJnYjogNjYsNjUsNjE7XG4gIC0tYmxhY2stY29sb3ItNDA6ICM3Nzc1NmU7XG4gIC0tYmxhY2stY29sb3ItNDAtcmdiOiAxMTksMTE3LDExMDtcbiAgLS1ibGFjay1jb2xvci04MDogI2E5YThhMjtcbiAgLS1ibGFjay1jb2xvci04MC1yZ2I6IDE2OSwxNjgsMTYyO1xuICAtLWdyYXktY29sb3I6ICNBOUE5QTk7XG4gIC0tZ3JheS1jb2xvci1yZ2I6IDE2OSwxNjksMTY5O1xuICAtLWdyYXktY29sb3ItNDA6IGdhaW5zYm9ybztcbiAgLS1ncmF5LWNvbG9yLTQwLXJnYjogMjIwLDIyMCwyMjA7XG4gIC0tZ3JheS1jb2xvci04MDogd2hpdGU7XG4gIC0tZ3JheS1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWdyYXktZGFyay1jb2xvcjogIzgwODA4MDtcbiAgLS1ncmF5LWRhcmstY29sb3ItcmdiOiAxMjgsMTI4LDEyODtcbiAgLS1ncmF5LWRhcmstY29sb3ItNDA6ICNiM2IzYjM7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwLXJnYjogMTc5LDE3OSwxNzk7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTgwOiAjZTZlNmU2O1xuICAtLWdyYXktZGFyay1jb2xvci04MC1yZ2I6IDIzMCwyMzAsMjMwO1xuICAtLWdyZWVuLWNvbG9yOiAjMjBhZTQ0O1xuICAtLWdyZWVuLWNvbG9yLXJnYjogMzIsMTc0LDY4O1xuICAtLWdyZWVuLWNvbG9yLTQwOiAjNTRlMDc4O1xuICAtLWdyZWVuLWNvbG9yLTQwLXJnYjogODQsMjI0LDEyMDtcbiAgLS1ncmVlbi1jb2xvci04MDogI2FiZWZiYztcbiAgLS1ncmVlbi1jb2xvci04MC1yZ2I6IDE3MSwyMzksMTg4O1xuICAtLXBpbmstY29sb3I6ICNmZjQxMjQ7XG4gIC0tcGluay1jb2xvci1yZ2I6IDI1NSw2NSwzNjtcbiAgLS1waW5rLWNvbG9yLTQwOiAjZmY5OThhO1xuICAtLXBpbmstY29sb3ItNDAtcmdiOiAyNTUsMTUzLDEzODtcbiAgLS1waW5rLWNvbG9yLTgwOiAjZmZmMmYwO1xuICAtLXBpbmstY29sb3ItODAtcmdiOiAyNTUsMjQyLDI0MDtcbiAgLS1yZWQtY29sb3I6ICNGRjAwMDA7XG4gIC0tcmVkLWNvbG9yLXJnYjogMjU1LDAsMDtcbiAgLS1yZWQtY29sb3ItNDA6ICNmZjY2NjY7XG4gIC0tcmVkLWNvbG9yLTQwLXJnYjogMjU1LDEwMiwxMDI7XG4gIC0tcmVkLWNvbG9yLTgwOiAjZmZjY2NjO1xuICAtLXJlZC1jb2xvci04MC1yZ2I6IDI1NSwyMDQsMjA0O1xuICAtLXB1cnBsZS1jb2xvcjogIzRBMjM1QTtcbiAgLS1wdXJwbGUtY29sb3ItcmdiOiA3NCwzNSw5MDtcbiAgLS1wdXJwbGUtY29sb3ItNDA6ICM4NjQwYTM7XG4gIC0tcHVycGxlLWNvbG9yLTQwLXJnYjogMTM0LDY0LDE2MztcbiAgLS1wdXJwbGUtY29sb3ItODA6ICNiNTdkY2M7XG4gIC0tcHVycGxlLWNvbG9yLTgwLXJnYjogMTgxLDEyNSwyMDQ7XG4gIC0tb3JhbmdlLWNvbG9yOiAjRkY2NjAwO1xuICAtLW9yYW5nZS1jb2xvci1yZ2I6IDI1NSwxMDIsMDtcbiAgLS1vcmFuZ2UtY29sb3ItNDA6ICNmZmEzNjY7XG4gIC0tb3JhbmdlLWNvbG9yLTQwLXJnYjogMjU1LDE2MywxMDI7XG4gIC0tb3JhbmdlLWNvbG9yLTgwOiAjZmZlMGNjO1xuICAtLW9yYW5nZS1jb2xvci04MC1yZ2I6IDI1NSwyMjQsMjA0O1xuICAtLXllbGxvdy1jb2xvcjogI2ZhZTM2MTtcbiAgLS15ZWxsb3ctY29sb3ItcmdiOiAyNTAsMjI3LDk3O1xuICAtLXllbGxvdy1jb2xvci00MDogI2ZkZjVjNDtcbiAgLS15ZWxsb3ctY29sb3ItNDAtcmdiOiAyNTMsMjQ1LDE5NjtcbiAgLS15ZWxsb3ctY29sb3ItODA6IHdoaXRlO1xuICAtLXllbGxvdy1jb2xvci04MC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAtLWJ1dHRvbkNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTQwKTtcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItODApO1xufVxuXG4ucmlnaHQge1xuICBhbGlnbi1pdGVtczogZW5kO1xufVxuXG4uY3Vyc29yIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zcG9ydC1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb2x1bW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNwb3J0LXRpdGxlIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmRhdGUtbGFiZWwge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDF2aCAwO1xufVxuXG4uYXQtbGFiZWwsIC50aW1lLWxhYmVsIHtcbiAgcGFkZGluZzogMCAwLjV2dztcbn1cblxuLmF3YXktbGFiZWwsIC5ob21lLWxhYmVsIHtcbiAgd2lkdGg6IDh2dztcbn1cblxuLnBlcnNvbi1sYWJlbCB7XG4gIHdpZHRoOiAxM3Z3O1xufVxuXG4uZ2FtZS1sYWJlbCB7XG4gIG1pbi13aWR0aDogOHZ3O1xuICBib3JkZXItcmFkaXVzOiA1dnc7XG4gIG1hcmdpbi1ib3R0b206IDAuMjV2aDtcbn1cblxuLnNwb3J0LWdhbWUtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbltkYXRhLWhlYWRlci10aXRsZV0ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbltkYXRhLWNvbnRlbnQtZGl2XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ucmVmcmVzaC1jb3VudCB7XG4gIG1hcmdpbi1yaWdodDogM3Z3O1xuICBtYXJnaW4tYm90dG9tOiAzdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4uaGVhZGVyLWRpdiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5bZGF0YS1oZWFkZXItdGl0bGVdIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuW2RhdGEtY29udGVudC1kaXZdIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWZyZXNoLWNvdW50IHtcclxuICBtYXJnaW4tcmlnaHQ6IDN2dztcclxuICBtYXJnaW4tYm90dG9tOiAzdmg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _models_fight_card_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/fight-card.model */ "./src/app/models/fight-card.model.ts");
/* harmony import */ var _services_home_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/home-api.service */ "./src/app/services/home-api.service.ts");
/* harmony import */ var _models_games_per_date_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/games-per-date.model */ "./src/app/models/games-per-date.model.ts");






let HomeComponent = class HomeComponent {
    constructor(homeApiService, settingsService) {
        this.homeApiService = homeApiService;
        this.settingsService = settingsService;
        this.basketball = new _models_games_per_date_model__WEBPACK_IMPORTED_MODULE_5__["GamesPerDate"]();
        this.football = new _models_games_per_date_model__WEBPACK_IMPORTED_MODULE_5__["GamesPerDate"]();
        this.mma = new _models_fight_card_model__WEBPACK_IMPORTED_MODULE_3__["FightCard"]();
        this.refreshCount = 0;
        this.title = '';
    }
    ngOnInit() {
        this.startUp();
        this.settingsService.settingsReset.subscribe(() => {
            this.startUp();
        });
    }
    startUp(doLoop = true) {
        this.settingsService.readLocalStorage();
        this.getSubscriptionsStarted();
        doLoop ? this.setTimerLoop() : null;
    }
    setTimerLoop() {
        // 1 min = 60k milliseconds
        let timeout = this.settingsService.refreshRate * 60000;
        const value = (() => {
            this.startUp(false);
            this.refreshCount++;
        });
        window.setInterval(() => {
            this.startUp(false);
            this.refreshCount++;
        }, timeout);
    }
    ngOnDestroy() {
        this.settingsService.ngOnDestroy();
    }
    getSubscriptionsStarted() {
        const basketball = this.settingsService.whichBasketball ?
            this.homeApiService.getBasketballToday() :
            this.homeApiService.getBasketballUpcoming();
        basketball.subscribe(games => {
            this.basketball = games;
        });
        const football = this.settingsService.whichFootball ?
            this.homeApiService.getFootballToday() :
            this.homeApiService.getFootballUpcoming();
        football.subscribe(games => {
            this.football = games;
        });
        const mma = this.settingsService.whichMma ?
            this.homeApiService.getMmaToday() :
            this.homeApiService.getMmaUpcoming();
        mma.subscribe(fightCard => {
            this.mma = fightCard;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_home_api_service__WEBPACK_IMPORTED_MODULE_4__["HomeApiService"] },
    { type: _services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n}\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n:root {\n  --blue-color: #236367;\n  --blue-color-rgb: 35,99,103;\n  --blue-color-40: #3dacb3;\n  --blue-color-40-rgb: 61,172,179;\n  --blue-color-80: #82d0d4;\n  --blue-color-80-rgb: 130,208,212;\n  --white-color: #fff;\n  --white-color-rgb: 255,255,255;\n  --white-color-40: white;\n  --white-color-40-rgb: 255,255,255;\n  --white-color-80: white;\n  --white-color-80-rgb: 255,255,255;\n  --black-color: #42413d;\n  --black-color-rgb: 66,65,61;\n  --black-color-40: #77756e;\n  --black-color-40-rgb: 119,117,110;\n  --black-color-80: #a9a8a2;\n  --black-color-80-rgb: 169,168,162;\n  --gray-color: #A9A9A9;\n  --gray-color-rgb: 169,169,169;\n  --gray-color-40: gainsboro;\n  --gray-color-40-rgb: 220,220,220;\n  --gray-color-80: white;\n  --gray-color-80-rgb: 255,255,255;\n  --gray-dark-color: #808080;\n  --gray-dark-color-rgb: 128,128,128;\n  --gray-dark-color-40: #b3b3b3;\n  --gray-dark-color-40-rgb: 179,179,179;\n  --gray-dark-color-80: #e6e6e6;\n  --gray-dark-color-80-rgb: 230,230,230;\n  --green-color: #20ae44;\n  --green-color-rgb: 32,174,68;\n  --green-color-40: #54e078;\n  --green-color-40-rgb: 84,224,120;\n  --green-color-80: #abefbc;\n  --green-color-80-rgb: 171,239,188;\n  --pink-color: #ff4124;\n  --pink-color-rgb: 255,65,36;\n  --pink-color-40: #ff998a;\n  --pink-color-40-rgb: 255,153,138;\n  --pink-color-80: #fff2f0;\n  --pink-color-80-rgb: 255,242,240;\n  --red-color: #FF0000;\n  --red-color-rgb: 255,0,0;\n  --red-color-40: #ff6666;\n  --red-color-40-rgb: 255,102,102;\n  --red-color-80: #ffcccc;\n  --red-color-80-rgb: 255,204,204;\n  --purple-color: #4A235A;\n  --purple-color-rgb: 74,35,90;\n  --purple-color-40: #8640a3;\n  --purple-color-40-rgb: 134,64,163;\n  --purple-color-80: #b57dcc;\n  --purple-color-80-rgb: 181,125,204;\n  --orange-color: #FF6600;\n  --orange-color-rgb: 255,102,0;\n  --orange-color-40: #ffa366;\n  --orange-color-40-rgb: 255,163,102;\n  --orange-color-80: #ffe0cc;\n  --orange-color-80-rgb: 255,224,204;\n  --yellow-color: #fae361;\n  --yellow-color-rgb: 250,227,97;\n  --yellow-color-40: #fdf5c4;\n  --yellow-color-40-rgb: 253,245,196;\n  --yellow-color-80: white;\n  --yellow-color-80-rgb: 255,255,255;\n  --buttonColor: var(--blue-color-40);\n  --backgroundColor: var(--blue-color-80);\n}\n.right {\n  align-items: end;\n}\n.cursor {\n  cursor: pointer;\n  display: inline-block;\n}\n.sport-ctn {\n  display: flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.column {\n  display: inline-flex;\n  flex-direction: column;\n}\n.sport-title {\n  font-size: x-large;\n  font-weight: 500;\n  padding: 5px;\n  align-self: center;\n}\n.date-label {\n  align-self: center;\n  padding: 1vh 0;\n}\n.at-label, .time-label {\n  padding: 0 0.5vw;\n}\n.away-label, .home-label {\n  width: 8vw;\n}\n.person-label {\n  width: 13vw;\n}\n.game-label {\n  min-width: 8vw;\n  border-radius: 5vw;\n  margin-bottom: 0.25vh;\n}\n.sport-game-ctn {\n  display: flex;\n  align-self: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  align-content: center;\n}\n.header-div {\n  text-align: center;\n  margin-bottom: 50px;\n}\n[data-settings-input] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n[data-header-title] {\n  font-size: xx-large;\n  padding: 5px;\n}\n.buttons {\n  text-align: center;\n  margin-top: 50px;\n}\n.apply-button {\n  height: 30px;\n  margin: 10px;\n  width: 100px;\n  font-size: large;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n[data-button-export] {\n  height: 30px;\n  margin: 10px;\n  font-size: large;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n.reset-button {\n  margin: 15px;\n  font-size: large;\n  background: var(--buttonColor);\n  border-style: groove;\n}\n.settings-value-label {\n  font-weight: 500;\n  min-width: 260px;\n}\n.settings-value-form-field {\n  min-width: 100px;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n.settings-value-ctn {\n  display: flex;\n  align-items: center;\n}\n.dropdown__label {\n  font-weight: 500;\n  min-width: 260px;\n}\n.dropdown-ctn {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MtcGFnZS9jOlxcd29ya3NwYWNlXFxob21lLXBhZ2Uvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy1wYWdlL2M6XFx3b3Jrc3BhY2VcXGhvbWUtcGFnZS9zcmNcXGFwcFxccGFnZXNcXHNldHRpbmdzLXBhZ2VcXHNldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTtFQUNFLFlBQUE7QUNBRjtBREdBO0VBQ0UsU0FBQTtFQUNBLGlEQUFBO0FDQUY7QURtREE7RUFYRSxxQkFBQTtFQUNBLDJCQUFBO0VBR0Usd0JBQUE7RUFDQSwrQkFBQTtFQURBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFMRixtQkFBQTtFQUNBLDhCQUFBO0VBR0UsdUJBQUE7RUFDQSxpQ0FBQTtFQURBLHVCQUFBO0VBQ0EsaUNBQUE7RUFMRixzQkFBQTtFQUNBLDJCQUFBO0VBR0UseUJBQUE7RUFDQSxpQ0FBQTtFQURBLHlCQUFBO0VBQ0EsaUNBQUE7RUFMRixxQkFBQTtFQUNBLDZCQUFBO0VBR0UsMEJBQUE7RUFDQSxnQ0FBQTtFQURBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFMRiwwQkFBQTtFQUNBLGtDQUFBO0VBR0UsNkJBQUE7RUFDQSxxQ0FBQTtFQURBLDZCQUFBO0VBQ0EscUNBQUE7RUFMRixzQkFBQTtFQUNBLDRCQUFBO0VBR0UseUJBQUE7RUFDQSxnQ0FBQTtFQURBLHlCQUFBO0VBQ0EsaUNBQUE7RUFMRixxQkFBQTtFQUNBLDJCQUFBO0VBR0Usd0JBQUE7RUFDQSxnQ0FBQTtFQURBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFMRixvQkFBQTtFQUNBLHdCQUFBO0VBR0UsdUJBQUE7RUFDQSwrQkFBQTtFQURBLHVCQUFBO0VBQ0EsK0JBQUE7RUFMRix1QkFBQTtFQUNBLDRCQUFBO0VBR0UsMEJBQUE7RUFDQSxpQ0FBQTtFQURBLDBCQUFBO0VBQ0Esa0NBQUE7RUFMRix1QkFBQTtFQUNBLDZCQUFBO0VBR0UsMEJBQUE7RUFDQSxrQ0FBQTtFQURBLDBCQUFBO0VBQ0Esa0NBQUE7RUFMRix1QkFBQTtFQUNBLDhCQUFBO0VBR0UsMEJBQUE7RUFDQSxrQ0FBQTtFQURBLHdCQUFBO0VBQ0Esa0NBQUE7RUFXRixtQ0FBQTtFQUNBLHVDQUFBO0FDY0Y7QURYQTtFQUNFLGdCQUFBO0FDY0Y7QURYQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtBQ2NGO0FEWEE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNjRjtBRFhBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ2NGO0FEWEE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0FDY0Y7QURYQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNjRjtBRFhBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDY0Y7QURYQTtFQUNFLGdCQUFBO0FDY0Y7QURYQTtFQUNFLFVBQUE7QUNjRjtBRFhBO0VBQ0UsV0FBQTtBQ2NGO0FEWEE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ2NGO0FEWEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUVBLGVBQUE7RUFDQSxxQkFBQTtBQ2FGO0FDM0lBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRDhJRjtBQzNJQTtFRmVFLGFBQUE7RUFDQSxtQkFBQTtFRWRBLHNCQUFBO0FEK0lGO0FDNUlBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEK0lGO0FDNUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRCtJRjtBQzVJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VGQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQytJRjtBQzdJQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUZOQSw4QkFBQTtFQUNBLG9CQUFBO0FDdUpGO0FDOUlBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VGWkEsOEJBQUE7RUFDQSxvQkFBQTtBQzhKRjtBQy9JQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QURrSkY7QUMvSUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QURrSkY7QUMvSUE7RUZoQ0UsYUFBQTtFQUNBLG1CQUFBO0FDbUxGO0FDaEpBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRG1KRjtBQ2hKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRG1KRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIGJveCgkaGVpZ2h0OiA2MHB4LCAkd2lkdGg6IDYwcHgpIHtcclxuICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgd2lkdGg6ICR3aWR0aDtcclxufVxyXG5cclxuQG1peGluIGxhcmdlRm9udCB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5AbWl4aW4gY2VudGVyRmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uU3R5bGluZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uQ29sb3IpO1xyXG4gIGJvcmRlci1zdHlsZTogZ3Jvb3ZlO1xyXG59XHJcblxyXG4kdGFyZ2V0LWNvbG9yczogKFxyXG4gIGJsdWUtY29sb3I6ICMyMzYzNjcsXHJcbiAgd2hpdGUtY29sb3I6ICNmZmYsXHJcbiAgYmxhY2stY29sb3I6ICM0MjQxM2QsXHJcbiAgZ3JheS1jb2xvcjogI0E5QTlBOSxcclxuICBncmF5LWRhcmstY29sb3I6ICM4MDgwODAsXHJcbiAgZ3JlZW4tY29sb3I6ICMyMGFlNDQsXHJcbiAgcGluay1jb2xvcjogI2ZmNDEyNCxcclxuICByZWQtY29sb3I6ICNGRjAwMDAsXHJcbiAgcHVycGxlLWNvbG9yOiAjNEEyMzVBLFxyXG4gIG9yYW5nZS1jb2xvcjogI0ZGNjYwMCxcclxuICB5ZWxsb3ctY29sb3I6ICNmYWUzNjEsXHJcbik7XHJcblxyXG4kdG9uZXM6IDQwLCA4MDtcclxuXHJcbkBtaXhpbiBnZW5lcmF0ZS1jb2xvci12YXIoJGtleSwgJHZhbHVlKSB7XHJcbiAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XHJcbiAgLS0jeyRrZXl9LXJnYjogI3tyZWQoJHZhbHVlKX0sI3tncmVlbigkdmFsdWUpfSwje2JsdWUoJHZhbHVlKX07XHJcbiAgQGVhY2ggJHRvbmUgaW4gJHRvbmVzIHtcclxuICAgICRzY2FsZS12YWx1ZTogYWRqdXN0LWNvbG9yKCR2YWx1ZSwgJGxpZ2h0bmVzczogJHRvbmUgLyAyICogMSUpO1xyXG4gICAgLS0jeyRrZXl9LSN7JHRvbmV9OiAjeyRzY2FsZS12YWx1ZX07XHJcbiAgICAtLSN7JGtleX0tI3skdG9uZX0tcmdiOiAje3JlZCgkc2NhbGUtdmFsdWUpfSwje2dyZWVuKCRzY2FsZS12YWx1ZSl9LCN7Ymx1ZSgkc2NhbGUtdmFsdWUpfTtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvbG9yIFBhbGV0dGU6IFRyaWFkaWMgU2NoZW1lXHJcblxyXG46cm9vdCB7XHJcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICR0YXJnZXQtY29sb3JzIHtcclxuICAgIEBpbmNsdWRlIGdlbmVyYXRlLWNvbG9yLXZhcigka2V5LCAkdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XHJcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6IHZhcigtLWJsdWUtY29sb3ItODApO1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbn1cclxuXHJcbi5jdXJzb3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5zcG9ydC1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNwb3J0LXRpdGxlIHtcclxuICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uZGF0ZS1sYWJlbCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDF2aCAwO1xyXG59XHJcblxyXG4uYXQtbGFiZWwsIC50aW1lLWxhYmVsIHtcclxuICBwYWRkaW5nOiAwIC41dnc7XHJcbn1cclxuXHJcbi5hd2F5LWxhYmVsLCAuaG9tZS1sYWJlbCB7XHJcbiAgd2lkdGg6IDh2dztcclxufVxyXG5cclxuLnBlcnNvbi1sYWJlbCB7XHJcbiAgd2lkdGg6IDEzdnc7XHJcbn1cclxuXHJcbi5nYW1lLWxhYmVsIHtcclxuICBtaW4td2lkdGg6IDh2dztcclxuICBib3JkZXItcmFkaXVzOiA1dnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4yNXZoO1xyXG59XHJcblxyXG4uc3BvcnQtZ2FtZS1jdG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgLy9hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG46cm9vdCB7XG4gIC0tYmx1ZS1jb2xvcjogIzIzNjM2NztcbiAgLS1ibHVlLWNvbG9yLXJnYjogMzUsOTksMTAzO1xuICAtLWJsdWUtY29sb3ItNDA6ICMzZGFjYjM7XG4gIC0tYmx1ZS1jb2xvci00MC1yZ2I6IDYxLDE3MiwxNzk7XG4gIC0tYmx1ZS1jb2xvci04MDogIzgyZDBkNDtcbiAgLS1ibHVlLWNvbG9yLTgwLXJnYjogMTMwLDIwOCwyMTI7XG4gIC0td2hpdGUtY29sb3I6ICNmZmY7XG4gIC0td2hpdGUtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci00MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItNDAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS13aGl0ZS1jb2xvci04MDogd2hpdGU7XG4gIC0td2hpdGUtY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ibGFjay1jb2xvcjogIzQyNDEzZDtcbiAgLS1ibGFjay1jb2xvci1yZ2I6IDY2LDY1LDYxO1xuICAtLWJsYWNrLWNvbG9yLTQwOiAjNzc3NTZlO1xuICAtLWJsYWNrLWNvbG9yLTQwLXJnYjogMTE5LDExNywxMTA7XG4gIC0tYmxhY2stY29sb3ItODA6ICNhOWE4YTI7XG4gIC0tYmxhY2stY29sb3ItODAtcmdiOiAxNjksMTY4LDE2MjtcbiAgLS1ncmF5LWNvbG9yOiAjQTlBOUE5O1xuICAtLWdyYXktY29sb3ItcmdiOiAxNjksMTY5LDE2OTtcbiAgLS1ncmF5LWNvbG9yLTQwOiBnYWluc2Jvcm87XG4gIC0tZ3JheS1jb2xvci00MC1yZ2I6IDIyMCwyMjAsMjIwO1xuICAtLWdyYXktY29sb3ItODA6IHdoaXRlO1xuICAtLWdyYXktY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1ncmF5LWRhcmstY29sb3I6ICM4MDgwODA7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLXJnYjogMTI4LDEyOCwxMjg7XG4gIC0tZ3JheS1kYXJrLWNvbG9yLTQwOiAjYjNiM2IzO1xuICAtLWdyYXktZGFyay1jb2xvci00MC1yZ2I6IDE3OSwxNzksMTc5O1xuICAtLWdyYXktZGFyay1jb2xvci04MDogI2U2ZTZlNjtcbiAgLS1ncmF5LWRhcmstY29sb3ItODAtcmdiOiAyMzAsMjMwLDIzMDtcbiAgLS1ncmVlbi1jb2xvcjogIzIwYWU0NDtcbiAgLS1ncmVlbi1jb2xvci1yZ2I6IDMyLDE3NCw2ODtcbiAgLS1ncmVlbi1jb2xvci00MDogIzU0ZTA3ODtcbiAgLS1ncmVlbi1jb2xvci00MC1yZ2I6IDg0LDIyNCwxMjA7XG4gIC0tZ3JlZW4tY29sb3ItODA6ICNhYmVmYmM7XG4gIC0tZ3JlZW4tY29sb3ItODAtcmdiOiAxNzEsMjM5LDE4ODtcbiAgLS1waW5rLWNvbG9yOiAjZmY0MTI0O1xuICAtLXBpbmstY29sb3ItcmdiOiAyNTUsNjUsMzY7XG4gIC0tcGluay1jb2xvci00MDogI2ZmOTk4YTtcbiAgLS1waW5rLWNvbG9yLTQwLXJnYjogMjU1LDE1MywxMzg7XG4gIC0tcGluay1jb2xvci04MDogI2ZmZjJmMDtcbiAgLS1waW5rLWNvbG9yLTgwLXJnYjogMjU1LDI0MiwyNDA7XG4gIC0tcmVkLWNvbG9yOiAjRkYwMDAwO1xuICAtLXJlZC1jb2xvci1yZ2I6IDI1NSwwLDA7XG4gIC0tcmVkLWNvbG9yLTQwOiAjZmY2NjY2O1xuICAtLXJlZC1jb2xvci00MC1yZ2I6IDI1NSwxMDIsMTAyO1xuICAtLXJlZC1jb2xvci04MDogI2ZmY2NjYztcbiAgLS1yZWQtY29sb3ItODAtcmdiOiAyNTUsMjA0LDIwNDtcbiAgLS1wdXJwbGUtY29sb3I6ICM0QTIzNUE7XG4gIC0tcHVycGxlLWNvbG9yLXJnYjogNzQsMzUsOTA7XG4gIC0tcHVycGxlLWNvbG9yLTQwOiAjODY0MGEzO1xuICAtLXB1cnBsZS1jb2xvci00MC1yZ2I6IDEzNCw2NCwxNjM7XG4gIC0tcHVycGxlLWNvbG9yLTgwOiAjYjU3ZGNjO1xuICAtLXB1cnBsZS1jb2xvci04MC1yZ2I6IDE4MSwxMjUsMjA0O1xuICAtLW9yYW5nZS1jb2xvcjogI0ZGNjYwMDtcbiAgLS1vcmFuZ2UtY29sb3ItcmdiOiAyNTUsMTAyLDA7XG4gIC0tb3JhbmdlLWNvbG9yLTQwOiAjZmZhMzY2O1xuICAtLW9yYW5nZS1jb2xvci00MC1yZ2I6IDI1NSwxNjMsMTAyO1xuICAtLW9yYW5nZS1jb2xvci04MDogI2ZmZTBjYztcbiAgLS1vcmFuZ2UtY29sb3ItODAtcmdiOiAyNTUsMjI0LDIwNDtcbiAgLS15ZWxsb3ctY29sb3I6ICNmYWUzNjE7XG4gIC0teWVsbG93LWNvbG9yLXJnYjogMjUwLDIyNyw5NztcbiAgLS15ZWxsb3ctY29sb3ItNDA6ICNmZGY1YzQ7XG4gIC0teWVsbG93LWNvbG9yLTQwLXJnYjogMjUzLDI0NSwxOTY7XG4gIC0teWVsbG93LWNvbG9yLTgwOiB3aGl0ZTtcbiAgLS15ZWxsb3ctY29sb3ItODAtcmdiOiAyNTUsMjU1LDI1NTtcbiAgLS1idXR0b25Db2xvcjogdmFyKC0tYmx1ZS1jb2xvci00MCk7XG4gIC0tYmFja2dyb3VuZENvbG9yOiB2YXIoLS1ibHVlLWNvbG9yLTgwKTtcbn1cblxuLnJpZ2h0IHtcbiAgYWxpZ24taXRlbXM6IGVuZDtcbn1cblxuLmN1cnNvciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3BvcnQtY3RuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbHVtbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcG9ydC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kYXRlLWxhYmVsIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nOiAxdmggMDtcbn1cblxuLmF0LWxhYmVsLCAudGltZS1sYWJlbCB7XG4gIHBhZGRpbmc6IDAgMC41dnc7XG59XG5cbi5hd2F5LWxhYmVsLCAuaG9tZS1sYWJlbCB7XG4gIHdpZHRoOiA4dnc7XG59XG5cbi5wZXJzb24tbGFiZWwge1xuICB3aWR0aDogMTN2dztcbn1cblxuLmdhbWUtbGFiZWwge1xuICBtaW4td2lkdGg6IDh2dztcbiAgYm9yZGVyLXJhZGl1czogNXZ3O1xuICBtYXJnaW4tYm90dG9tOiAwLjI1dmg7XG59XG5cbi5zcG9ydC1nYW1lLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXItZGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5bZGF0YS1zZXR0aW5ncy1pbnB1dF0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5bZGF0YS1oZWFkZXItdGl0bGVdIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmFwcGx5LWJ1dHRvbiB7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbkNvbG9yKTtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG59XG5cbltkYXRhLWJ1dHRvbi1leHBvcnRdIHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbkNvbG9yKTtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG59XG5cbi5yZXNldC1idXR0b24ge1xuICBtYXJnaW46IDE1cHg7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbkNvbG9yKTtcbiAgYm9yZGVyLXN0eWxlOiBncm9vdmU7XG59XG5cbi5zZXR0aW5ncy12YWx1ZS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1pbi13aWR0aDogMjYwcHg7XG59XG5cbi5zZXR0aW5ncy12YWx1ZS1mb3JtLWZpZWxkIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG59XG5cbi5zZXR0aW5ncy12YWx1ZS1jdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZHJvcGRvd25fX2xhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWluLXdpZHRoOiAyNjBweDtcbn1cblxuLmRyb3Bkb3duLWN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuLmhlYWRlci1kaXYge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG5bZGF0YS1zZXR0aW5ncy1pbnB1dF0ge1xyXG4gIEBpbmNsdWRlIGNlbnRlckZsZXgoKTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5bZGF0YS1oZWFkZXItdGl0bGVdIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uYXBwbHktYnV0dG9uIHtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIEBpbmNsdWRlIGJ1dHRvblN0eWxpbmcoKTtcclxufVxyXG5cclxuW2RhdGEtYnV0dG9uLWV4cG9ydF0ge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBAaW5jbHVkZSBidXR0b25TdHlsaW5nKCk7XHJcbn1cclxuXHJcbi5yZXNldC1idXR0b24ge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIEBpbmNsdWRlIGJ1dHRvblN0eWxpbmcoKTtcclxufVxyXG5cclxuLnNldHRpbmdzLXZhbHVlLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1pbi13aWR0aDogMjYwcHg7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy12YWx1ZS1mb3JtLWZpZWxkIHtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5zZXR0aW5ncy12YWx1ZS1jdG4ge1xyXG4gIEBpbmNsdWRlIGNlbnRlckZsZXgoKTtcclxufVxyXG5cclxuLmRyb3Bkb3duX19sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtaW4td2lkdGg6IDI2MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tY3RuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_components_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/confirmation-popup/confirmation-popup.component */ "./src/app/components/confirmation-popup/confirmation-popup.component.ts");
/* harmony import */ var src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _services_date_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/date.service */ "./src/app/services/date.service.ts");









let SettingsPageComponent = class SettingsPageComponent {
    constructor(dialog, alertService, dateService, settingsService) {
        this.dialog = dialog;
        this.alertService = alertService;
        this.dateService = dateService;
        this.settingsService = settingsService;
        this.colors = _constants_constants__WEBPACK_IMPORTED_MODULE_7__["COLOR_OPTIONS"];
        this.refreshRateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(1000),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9.]*$'),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.titleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.showFootballControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.showBasketballControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.showMmaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.whichFootballControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.whichBasketballControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.whichMmaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.colorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
    }
    ngOnInit() {
        this.settingsFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            refreshRate: this.refreshRateControl,
            title: this.titleControl,
            showFootball: this.showFootballControl,
            showBasketball: this.showBasketballControl,
            showMma: this.showMmaControl,
            whichFootball: this.whichFootballControl,
            whichBasketball: this.whichBasketballControl,
            whichMma: this.whichMmaControl,
            applyNextRound: this.colorControl,
        });
        this.applySettingsValuesToFormControls();
    }
    ngOnDestroy() {
        this.settingsService.ngOnDestroy();
    }
    resetEverything() {
        const dialogRef = this.dialog.open(src_app_components_confirmation_popup_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationPopupComponent"], {
            data: {
                label: _constants_constants__WEBPACK_IMPORTED_MODULE_7__["RESET_EVERYTHING_MESSAGE"]
            },
            id: 'confirmation-modal',
            width: '35vw'
        });
        if (dialogRef) {
            dialogRef.afterClosed().subscribe(shouldReset => {
                if (shouldReset) {
                    this.settingsService.resetEverything();
                    this.applySettingsValuesToFormControls();
                    this.alertService.success(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["RESET_SETTINGS_SUCCESS_MESSAGE"], this.dateService.now());
                }
                else {
                    this.alertService.warn(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["ACTION_CANCELLED_MESSAGE"], this.dateService.now());
                }
            });
        }
    }
    applyToSettings() {
        this.settingsService.applySettings(this.refreshRateControl.value, [
            this.showBasketballControl.value,
            this.showFootballControl.value,
            this.showMmaControl.value,
        ], [
            this.whichBasketballControl.value,
            this.whichFootballControl.value,
            this.whichMmaControl.value,
        ], this.titleControl.value);
        this.alertService.success(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["APPLY_SETTING_SUCCESS_MESSAGE"], this.dateService.now());
    }
    applySettingsValuesToFormControls() {
        this.showBasketballControl.setValue(this.settingsService.showBasketball);
        this.showFootballControl.setValue(this.settingsService.showFootball);
        this.showMmaControl.setValue(this.settingsService.showMma);
        this.whichBasketballControl.setValue(this.settingsService.whichBasketball);
        this.whichFootballControl.setValue(this.settingsService.whichFootball);
        this.whichMmaControl.setValue(this.settingsService.whichMma);
        this.titleControl.setValue(this.settingsService.title);
        this.refreshRateControl.setValue(this.settingsService.refreshRate);
        this.colorControl.setValue(this.settingsService.color);
    }
    setColor() {
        this.settingsService.setColor(this.colorControl.value);
    }
    getBackgroundColor(value) {
        return 'var(' + value + 40 + ')';
    }
};
SettingsPageComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _services_date_service__WEBPACK_IMPORTED_MODULE_8__["DateService"] },
    { type: src_app_services_settings_service__WEBPACK_IMPORTED_MODULE_6__["SettingsService"] }
];
SettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings-page.component.scss */ "./src/app/pages/settings-page/settings-page.component.scss")).default]
    })
], SettingsPageComponent);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_alert_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/alert.model */ "./src/app/models/alert.model.ts");





let AlertService = class AlertService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.defaultId = 'default-alert';
    }
    // enable subscribing to alerts observable
    onAlert(id = this.defaultId) {
        return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(x => x && x.id === id));
    }
    // convenience methods
    success(message, options) {
        this.alert(new _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success, message })));
    }
    error(message, options) {
        this.alert(new _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error, message })));
    }
    info(message, options) {
        this.alert(new _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Info, message })));
    }
    warn(message, options) {
        this.alert(new _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"](Object.assign({}, options, { type: _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning, message })));
    }
    // main alert method
    alert(alert) {
        alert.id = alert.id || this.defaultId;
        this.subject.next(alert);
    }
    // clear alerts
    clear(id = this.defaultId) {
        this.subject.next(new _models_alert_model__WEBPACK_IMPORTED_MODULE_4__["Alert"]({ id }));
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AlertService);



/***/ }),

/***/ "./src/app/services/date.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/date.service.ts ***!
  \******************************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DateService = class DateService {
    now() {
        return Date.now();
    }
};
DateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DateService);



/***/ }),

/***/ "./src/app/services/home-api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/home-api.service.ts ***!
  \**********************************************/
/*! exports provided: HomeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeApiService", function() { return HomeApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let HomeApiService = class HomeApiService {
    constructor(http) {
        this.http = http;
        this.homeUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].homePageApiUrl;
        this.gamesPerDate = 'games-per-date/';
        this.fightCard = 'fight-card';
    }
    searchMedia(criteria) {
        return this.http.get(`${this.homeUrl}/home-media-search?criteria=${criteria}`);
    }
    getBasketballToday() {
        return this.http.get(this.getBasketballUrl());
    }
    getBasketballUpcoming() {
        return this.http.get(this.getBasketballUrl(false));
    }
    getFootballToday() {
        return this.http.get(this.getFootballUrl());
    }
    getFootballUpcoming() {
        return this.http.get(this.getFootballUrl(false));
    }
    getMmaToday() {
        return this.http.get(this.getMmaUrl());
    }
    getMmaUpcoming() {
        return this.http.get(this.getMmaUrl(false));
    }
    getBasketballUrl(today = true) {
        return this.getUrl('basketball', today);
    }
    getFootballUrl(today = true) {
        return this.getUrl('football', today);
    }
    getMmaUrl(today = true) {
        return `${this.homeUrl}/${this.fightCard}/` + (today ? 'today' : 'upcoming');
    }
    getUrl(sport, today = true) {
        return `${this.homeUrl}/${this.gamesPerDate}${sport}/` + (today ? 'today' : 'upcoming');
    }
};
HomeApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HomeApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], HomeApiService);



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/item.model */ "./src/app/models/item.model.ts");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./window.service */ "./src/app/services/window.service.ts");







let SettingsService = class SettingsService {
    constructor(windowService) {
        this.windowService = windowService;
        this._settingsResetSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.TODAY = _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TODAY"];
        this.UPCOMING = _constants_constants__WEBPACK_IMPORTED_MODULE_4__["UPCOMING"];
        this.readFromLocalStorage();
    }
    ngOnDestroy() {
        this.saveToLocalStorage();
    }
    get settingsReset() {
        return this._settingsResetSubject;
    }
    setColor(value) {
        this.color = value;
        this.saveColorToLocalStorage();
        const root = document.documentElement;
        let buttonValue = value + 40;
        let backgroundValue = value + 80;
        root.style.setProperty('--buttonColor', `var(${buttonValue})`);
        root.style.setProperty('--backgroundColor', `var(${backgroundValue})`);
    }
    applySettings(refreshRate, showSports, whichSelection, title) {
        this.title = title;
        this.refreshRate = refreshRate;
        this.showBasketball = showSports[0];
        this.showFootball = showSports[1];
        this.showMma = showSports[2];
        this.whichBasketball = whichSelection[0];
        this.whichFootball = whichSelection[1];
        this.whichMma = whichSelection[2];
        this.saveToLocalStorage();
    }
    resetEverything() {
        window.localStorage.clear();
        this.showBasketball = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["SHOW_SPORTS_DEFAULT"]);
        this.showFootball = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["SHOW_SPORTS_DEFAULT"]);
        this.showMma = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["SHOW_SPORTS_DEFAULT"]);
        this.whichBasketball = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["WHICH_SELECTION_DEFAULT"]);
        this.whichFootball = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["WHICH_SELECTION_DEFAULT"]);
        this.whichMma = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["WHICH_SELECTION_DEFAULT"]);
        this.refreshRate = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["REFRESH_RATE_DEFAULT"]);
        this.title = lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["TITLE_DEFAULT"]);
        this.setColor(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](_constants_constants__WEBPACK_IMPORTED_MODULE_4__["COLOR_DEFAULT"]));
        this.saveToLocalStorage();
        this._settingsResetSubject.next(true);
    }
    readLocalStorage() {
        this.readFromLocalStorage();
    }
    readFromLocalStorage() {
        this.title = this.windowService.getItem('home-page-title', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["TITLE_DEFAULT"]);
        this.refreshRate = +this.windowService.getItem('home-page-refresh-rate', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["REFRESH_RATE_DEFAULT"]);
        this.showBasketball = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(this.windowService.getItem('home-page-show-basketball', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["SHOW_SPORTS_DEFAULT"]));
        this.showFootball = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(this.windowService.getItem('home-page-show-football', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["SHOW_SPORTS_DEFAULT"]));
        this.showMma = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(this.windowService.getItem('home-page-show-mma', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["SHOW_SPORTS_DEFAULT"]));
        this.whichBasketball = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(this.windowService.getItem('home-page-which-basketball', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["WHICH_SELECTION_DEFAULT"]));
        this.whichFootball = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(this.windowService.getItem('home-page-which-football', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["WHICH_SELECTION_DEFAULT"]));
        this.whichMma = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_4__["toBoolean"])(this.windowService.getItem('home-page-which-mma', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["WHICH_SELECTION_DEFAULT"]));
        this.setColor(this.windowService.getItem('home-page-color', _constants_constants__WEBPACK_IMPORTED_MODULE_4__["COLOR_DEFAULT"]));
    }
    saveToLocalStorage() {
        [
            new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-show-basketball', this.showBasketball.toString()),
            new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-show-football', this.showFootball.toString()),
            new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-show-mma', this.showMma.toString()),
            new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-which-basketball', this.whichBasketball.toString()),
            new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-which-football', this.whichFootball.toString()),
            new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-which-mma', this.whichMma.toString()),
            new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-title', this.title),
            new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-refresh-rate', this.refreshRate.toString())
        ].forEach(item => {
            this.windowService.setItem(item);
        });
        this.saveColorToLocalStorage();
    }
    saveColorToLocalStorage() {
        this.windowService.setItem(new _models_item_model__WEBPACK_IMPORTED_MODULE_5__["Item"]('home-page-color', this.color));
    }
};
SettingsService.ctorParameters = () => [
    { type: _window_service__WEBPACK_IMPORTED_MODULE_6__["WindowService"] }
];
SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SettingsService);



/***/ }),

/***/ "./src/app/services/window.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/window.service.ts ***!
  \********************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/constants */ "./src/app/constants/constants.ts");




let WindowService = class WindowService {
    setInterval(func, timeout) {
        window.setInterval(func, timeout);
    }
    openBlank(url) {
        window.open(url, "_blank");
    }
    getItem(item, defaultValue) {
        const value = window.localStorage.getItem(item);
        return !Object(_constants_constants__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(value) ? value : lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](defaultValue);
    }
    setItem(item) {
        window.localStorage.setItem(item.name, item.value);
    }
};
WindowService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WindowService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    homePageApiUrl: '/home-page-api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\workspace\home-page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map