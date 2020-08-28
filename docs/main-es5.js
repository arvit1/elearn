function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/page-not-found/page-not-found.component */
    "./src/app/pages/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/search-page/search-page.component */
    "./src/app/pages/search-page/search-page.component.ts");
    /* harmony import */


    var _pages_course_detail_page_course_detail_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/course-detail-page/course-detail-page.component */
    "./src/app/pages/course-detail-page/course-detail-page.component.ts");
    /* harmony import */


    var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/landing-page/landing-page.component */
    "./src/app/pages/landing-page/landing-page.component.ts");

    var routes = [{
      path: 'landing',
      component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"]
    }, {
      path: 'search',
      component: _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"]
    }, {
      path: 'search/category/:id',
      component: _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_3__["SearchPageComponent"]
    }, {
      path: 'course/:id',
      component: _pages_course_detail_page_course_detail_page_component__WEBPACK_IMPORTED_MODULE_4__["CourseDetailPageComponent"]
    }, {
      path: '',
      redirectTo: '/landing',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! gsap/CSSRulePlugin */
    "./node_modules/gsap/CSSRulePlugin.js");
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");
    /* harmony import */


    var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! gsap/ScrollTrigger */
    "./node_modules/gsap/ScrollTrigger.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");

    gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_1__["CSSRulePlugin"], gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"]);

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'agastya-elearning';
      this.theme = {
        'learning-dark-theme': false
      };
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 1,
      consts: [["id", "#page", 3, "ngClass"], [1, "App"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.theme);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.App[_ngcontent-%COMP%] {\n  z-index: 2;\n  transform: translateY(0);\n  position: relative;\n  background-color: white;\n}\n\n#page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL3NyY1xcYXBwXFx0aGVtZVxcZ2VuZXJhbC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9ub2RlX21vZHVsZXNcXGluY2x1ZGUtbWVkaWFcXGRpc3RcXF9pbmNsdWRlLW1lZGlhLnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNaRjs7QUN1aUJJO0VGL2hCSjtJQU1JLGFBQUE7SUFDQSxpQkFBQTtFQ1ZGO0FBQ0Y7O0FDaWlCSTtFRi9oQko7SUFVSSxhQUFBO0lBQ0EsaUJBQUE7RUNSRjtBQUNGOztBQzJoQkk7RUYvaEJKO0lBY0ksV0FBQTtJQUNBLGVBQUE7RUNORjtBQUNGOztBRE9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEo7O0FDZ2hCSTtFRjlnQkY7SUFLSSxlQUFBO0VDSEo7QUFDRjs7QURLRTtFQUNFLG1CQUFBO0FDSEo7O0FES0U7RUFDRSw4QkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDSEo7O0FFcERBO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkhITTtBQzBEUjs7QUVuREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUZzREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2luY2x1ZGUtbWVkaWEvZGlzdC9pbmNsdWRlLW1lZGlhXCI7XHJcblxyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4keWVsbG93OiByZ2IoMjQzLCAyNDMsIDIwNSk7XHJcbiRncmV5OiByZ2JhKDEwMCwgOTcsIDk3LCAwLjUxNCk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICBcInBob25lXCI6IDQyNXB4LFxyXG4gIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gIFwiZGVza3RvcFwiOiAxMzY2cHgsXHJcbiAgXCJMR2Rlc2t0b3BcIjogMTkyMHB4LFxyXG4pO1xyXG5cclxuLnBhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTU2MHB4O1xyXG4gIG1pbi13aWR0aDogMTU2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTU2MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICAgIG1pbi13aWR0aDogMTA4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTA4MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52LWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTU2MHB4O1xuICBtaW4td2lkdGg6IDE1NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTYwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyODBweDtcbiAgICBtaW4td2lkdGg6IDEyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTA4MHB4O1xuICAgIG1pbi13aWR0aDogMTA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRhaW5lciAucm93IHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnYtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lci1mbHVpZCAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uQXBwIHtcbiAgei1pbmRleDogMjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4jcGFnZSAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4vdGhlbWUvZ2VuZXJhbC5zY3NzXCI7XHJcbi5BcHAge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbiNwYWdlIHtcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/search-page/search-page.component */
    "./src/app/pages/search-page/search-page.component.ts");
    /* harmony import */


    var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/landing-page/landing-page.component */
    "./src/app/pages/landing-page/landing-page.component.ts");
    /* harmony import */


    var _pages_aboutus_page_aboutus_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/aboutus-page/aboutus-page.component */
    "./src/app/pages/aboutus-page/aboutus-page.component.ts");
    /* harmony import */


    var _pages_course_detail_page_course_detail_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/course-detail-page/course-detail-page.component */
    "./src/app/pages/course-detail-page/course-detail-page.component.ts");
    /* harmony import */


    var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/page-not-found/page-not-found.component */
    "./src/app/pages/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _pages_banner_banner_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/banner/banner.component */
    "./src/app/pages/banner/banner.component.ts");
    /* harmony import */


    var _pages_featured_featured_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/featured/featured.component */
    "./src/app/pages/featured/featured.component.ts");
    /* harmony import */


    var _pages_intro_overlay_intro_overlay_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/intro-overlay/intro-overlay.component */
    "./src/app/pages/intro-overlay/intro-overlay.component.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _utility_click_outside_directive__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./utility/click-outside.directive */
    "./src/app/utility/click-outside.directive.ts");
    /* harmony import */


    var _svg_arrow_left_arrow_left_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./svg/arrow-left/arrow-left.component */
    "./src/app/svg/arrow-left/arrow-left.component.ts");
    /* harmony import */


    var _svg_arrow_right_arrow_right_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./svg/arrow-right/arrow-right.component */
    "./src/app/svg/arrow-right/arrow-right.component.ts");
    /* harmony import */


    var _utility_image_preload_directive__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./utility/image-preload.directive */
    "./src/app/utility/image-preload.directive.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _svg_uparrow_uparrow_circle_uparrow_circle_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./svg/uparrow/uparrow-circle/uparrow-circle.component */
    "./src/app/svg/uparrow/uparrow-circle/uparrow-circle.component.ts");
    /* harmony import */


    var _pages_course_detail_page_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./pages/course-detail-page/dialog-box/dialog-box.component */
    "./src/app/pages/course-detail-page/dialog-box/dialog-box.component.ts");
    /* harmony import */


    var _pages_recent_courses_recent_courses_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./pages/recent-courses/recent-courses.component */
    "./src/app/pages/recent-courses/recent-courses.component.ts");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ViewportRuler"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_33__["LayoutModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__["FontAwesomeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_21__["SearchPageComponent"], _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_22__["LandingPageComponent"], _pages_aboutus_page_aboutus_page_component__WEBPACK_IMPORTED_MODULE_23__["AboutusPageComponent"], _pages_course_detail_page_course_detail_page_component__WEBPACK_IMPORTED_MODULE_24__["CourseDetailPageComponent"], _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__["PageNotFoundComponent"], _pages_banner_banner_component__WEBPACK_IMPORTED_MODULE_26__["BannerComponent"], _pages_featured_featured_component__WEBPACK_IMPORTED_MODULE_27__["FeaturedComponent"], _pages_intro_overlay_intro_overlay_component__WEBPACK_IMPORTED_MODULE_28__["IntroOverlayComponent"], _utility_click_outside_directive__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideDirective"], _svg_arrow_left_arrow_left_component__WEBPACK_IMPORTED_MODULE_35__["ArrowLeftComponent"], _svg_arrow_right_arrow_right_component__WEBPACK_IMPORTED_MODULE_36__["ArrowRightComponent"], _utility_image_preload_directive__WEBPACK_IMPORTED_MODULE_37__["ImagePreloadDirective"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_39__["MenuComponent"], _svg_uparrow_uparrow_circle_uparrow_circle_component__WEBPACK_IMPORTED_MODULE_40__["UparrowCircleComponent"], _pages_course_detail_page_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_41__["DialogBoxComponent"], _pages_recent_courses_recent_courses_component__WEBPACK_IMPORTED_MODULE_42__["RecentCoursesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_33__["LayoutModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__["FontAwesomeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _pages_search_page_search_page_component__WEBPACK_IMPORTED_MODULE_21__["SearchPageComponent"], _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_22__["LandingPageComponent"], _pages_aboutus_page_aboutus_page_component__WEBPACK_IMPORTED_MODULE_23__["AboutusPageComponent"], _pages_course_detail_page_course_detail_page_component__WEBPACK_IMPORTED_MODULE_24__["CourseDetailPageComponent"], _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_25__["PageNotFoundComponent"], _pages_banner_banner_component__WEBPACK_IMPORTED_MODULE_26__["BannerComponent"], _pages_featured_featured_component__WEBPACK_IMPORTED_MODULE_27__["FeaturedComponent"], _pages_intro_overlay_intro_overlay_component__WEBPACK_IMPORTED_MODULE_28__["IntroOverlayComponent"], _utility_click_outside_directive__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideDirective"], _svg_arrow_left_arrow_left_component__WEBPACK_IMPORTED_MODULE_35__["ArrowLeftComponent"], _svg_arrow_right_arrow_right_component__WEBPACK_IMPORTED_MODULE_36__["ArrowRightComponent"], _utility_image_preload_directive__WEBPACK_IMPORTED_MODULE_37__["ImagePreloadDirective"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_39__["MenuComponent"], _svg_uparrow_uparrow_circle_uparrow_circle_component__WEBPACK_IMPORTED_MODULE_40__["UparrowCircleComponent"], _pages_course_detail_page_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_41__["DialogBoxComponent"], _pages_recent_courses_recent_courses_component__WEBPACK_IMPORTED_MODULE_42__["RecentCoursesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_33__["LayoutModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_38__["FontAwesomeModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_43__["MatGridListModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"]],
          providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClient"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_32__["ViewportRuler"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          entryComponents: [_pages_course_detail_page_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_41__["DialogBoxComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/constants.ts":
  /*!******************************!*\
    !*** ./src/app/constants.ts ***!
    \******************************/

  /*! exports provided: default */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var CONSTANTS = {
      CONTENT_SERVICE_URL: 'https://agastya-elearning-cms.herokuapp.com/',
      CONTENT_SERVICE_URL1: 'https://agastya-elearning-cms.herokuapp.com'
    };
    /* harmony default export */

    __webpack_exports__["default"] = CONSTANTS;
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-brands-svg-icons */
    "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);

        this.facebook = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFacebookSquare"];
        this.insta = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagramSquare"];
        this.youtube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutubeSquare"];
        this.twitter = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTwitterSquare"];
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 73,
      vars: 4,
      consts: [[1, "container"], [1, "row"], [1, "col"], [1, "col-title"], [1, "col-content"], [1, "contact"], [1, "address-line1"], [1, "address-line2"], [1, "address-line3"], [1, "phone"], [1, "email"], [1, "sites"], [1, "site"], ["href", "https://www.agastya.org/how-you-can-help/", "target", "_blank"], ["href", "https://agastya.networkforgood.com/", "target", "_blank"], ["href", "https://give2asia.org/agastya/", "target", "_blank"], ["href", "https://www.agastya.org/donate/", "target", "_blank"], ["href", "https://www.agastya.org/", "target", "_blank"], ["href", "http://www.jignyasa.org/agastya.php", "target", "_blank"], ["href", "https://www.agastyausa.org/", "target", "_blank"], [1, "socials"], ["href", "https://www.facebook.com/Agastya.Foundation/", "target", "_blank"], [3, "icon"], ["href", "https://www.instagram.com/agastya.foundation/", "target", "_blank"], ["href", "https://twitter.com/AgastyaSparks/", "target", "_blank"], ["href", "https://www.youtube.com/c/agastyaorg/", "target", "_blank"], [1, "row", "copyright", "v-center"], [1, "logo"], ["src", "assets/images/Agastya-Logo.jpg", "alt", ""], [1, "copy-text"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Agastya International Foundation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 101 Varsav Plaza, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " 12 Jaymahal Main Road, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Bangalore - 560046, INDIA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tel No. (+91 80) 41124132 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " (+91 80) 23545054 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Email: info@agastya.org ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Help us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "How you can help?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "NetworkForGood");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Give to Asia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Learn More");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Our Sites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Agastya International Flagship");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Jignyasa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Agastya USA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Follow Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "fa-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "fa-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "fa-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "fa-icon", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Copyright \xA9 2020 Agastya International Foundation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.facebook);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.insta);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.twitter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.youtube);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  margin-top: 5vh;\n}\n\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  margin: 15px 0;\n}\n\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-flow: wrap;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    width: 50%;\n    border-top: thin solid #555454;\n    padding: 2vh 0;\n  }\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-of-type(3), footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:nth-of-type(4) {\n    border-bottom: thin solid #555454;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  font-size: small;\n  font-weight: 700;\n  border-left: thick solid orangered;\n  padding-left: 10px;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: smaller;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  margin-top: 1vh;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  text-decoration: none;\n  color: black;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: rgba(100, 97, 97, 0.514);\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: black;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60px;\n  width: auto;\n}\n\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row.copyright[_ngcontent-%COMP%] {\n  justify-items: center;\n  justify-content: start;\n}\n\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row.copyright[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n\nfooter[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .copy-text[_ngcontent-%COMP%] {\n  font-size: small;\n  margin-left: 1vw;\n  font-weight: 400;\n}\n\n@media (max-width: 768px) {\n  footer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .copy-text[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9zcmNcXGFwcFxcdGhlbWVcXGdlbmVyYWwuc2NzcyIsInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9ub2RlX21vZHVsZXNcXGluY2x1ZGUtbWVkaWFcXGRpc3RcXF9pbmNsdWRlLW1lZGlhLnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNaRjs7QUN1aUJJO0VGL2hCSjtJQU1JLGFBQUE7SUFDQSxpQkFBQTtFQ1ZGO0FBQ0Y7O0FDaWlCSTtFRi9oQko7SUFVSSxhQUFBO0lBQ0EsaUJBQUE7RUNSRjtBQUNGOztBQzJoQkk7RUYvaEJKO0lBY0ksV0FBQTtJQUNBLGVBQUE7RUNORjtBQUNGOztBRE9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEo7O0FDZ2hCSTtFRjlnQkY7SUFLSSxlQUFBO0VDSEo7QUFDRjs7QURLRTtFQUNFLG1CQUFBO0FDSEo7O0FES0U7RUFDRSw4QkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDSEo7O0FFbkRBO0VBQ0UsZUFBQTtBRnNERjs7QUN3Zkk7RUM1aUJBO0lBRUksYUFBQTtFRnNETjtBQUNGOztBRXBESTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBRnNETjs7QUMrZUk7RUN2aUJBO0lBSUksZUFBQTtFRndETjtBQUNGOztBRXZETTtFQUNFLFVBQUE7QUZ5RFI7O0FDdWVJO0VDamlCRTtJQUdJLFVBQUE7SUFFQSw4QkFBQTtJQUNBLGNBQUE7RUYwRFI7RUV4RFE7SUFFRSxpQ0FBQTtFRnlEVjtBQUNGOztBRXZEUTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBRnlEVjs7QUV2RFE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FGeURWOztBRXZEWTs7RUFFRSxlQUFBO0FGeURkOztBRXREVTtFQUNFLGVBQUE7QUZ3RFo7O0FFdkRZO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlIaEROO0FDeUdSOztBRXhEYztFQUNFLCtCSGhEVDtBQzBHUDs7QUV0RFU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBRndEWjs7QUV2RFk7RUFDRSxnQkFBQTtBRnlEZDs7QUV4RGM7RUFDRSxZSDVEUjtFRzZEUSxxQkFBQTtBRjBEaEI7O0FFeERnQjtFQUNFLFlIaEVWO0FDMEhSOztBRXhEZ0I7RUFDRSwwQkFBQTtBRjBEbEI7O0FFakRRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUZtRFY7O0FDNmFJO0VDbGVJO0lBSUksWUFBQTtFRnFEVjtBQUNGOztBRWpESTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7QUZtRE47O0FDb2FJO0VDemRBO0lBSUksbUJBQUE7RUZxRE47QUFDRjs7QUVuREk7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUZxRE47O0FDMFpJO0VDbGRBO0lBS0ksZ0JBQUE7RUZ1RE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2luY2x1ZGUtbWVkaWEvZGlzdC9pbmNsdWRlLW1lZGlhXCI7XHJcblxyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4keWVsbG93OiByZ2IoMjQzLCAyNDMsIDIwNSk7XHJcbiRncmV5OiByZ2JhKDEwMCwgOTcsIDk3LCAwLjUxNCk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICBcInBob25lXCI6IDQyNXB4LFxyXG4gIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gIFwiZGVza3RvcFwiOiAxMzY2cHgsXHJcbiAgXCJMR2Rlc2t0b3BcIjogMTkyMHB4LFxyXG4pO1xyXG5cclxuLnBhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTU2MHB4O1xyXG4gIG1pbi13aWR0aDogMTU2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTU2MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICAgIG1pbi13aWR0aDogMTA4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTA4MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52LWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTU2MHB4O1xuICBtaW4td2lkdGg6IDE1NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTYwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyODBweDtcbiAgICBtaW4td2lkdGg6IDEyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTA4MHB4O1xuICAgIG1pbi13aWR0aDogMTA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRhaW5lciAucm93IHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnYtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lci1mbHVpZCAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5mb290ZXIge1xuICBtYXJnaW4tdG9wOiA1dmg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgZm9vdGVyIC5jb250YWluZXIgaHIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmZvb3RlciAuY29udGFpbmVyIC5yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTVweCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGZvb3RlciAuY29udGFpbmVyIC5yb3cge1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgfVxufVxuZm9vdGVyIC5jb250YWluZXIgLnJvdyAuY29sIHtcbiAgd2lkdGg6IDI1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBmb290ZXIgLmNvbnRhaW5lciAucm93IC5jb2wge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogdGhpbiBzb2xpZCAjNTU1NDU0O1xuICAgIHBhZGRpbmc6IDJ2aCAwO1xuICB9XG4gIGZvb3RlciAuY29udGFpbmVyIC5yb3cgLmNvbDpudGgtb2YtdHlwZSgzKSwgZm9vdGVyIC5jb250YWluZXIgLnJvdyAuY29sOm50aC1vZi10eXBlKDQpIHtcbiAgICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkICM1NTU0NTQ7XG4gIH1cbn1cbmZvb3RlciAuY29udGFpbmVyIC5yb3cgLmNvbCAuY29sLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLWxlZnQ6IHRoaWNrIHNvbGlkIG9yYW5nZXJlZDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuZm9vdGVyIC5jb250YWluZXIgLnJvdyAuY29sIC5jb2wtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5yb3cgLmNvbCAuY29sLWNvbnRlbnQgLmNvbnRhY3QgLnBob25lLFxuZm9vdGVyIC5jb250YWluZXIgLnJvdyAuY29sIC5jb2wtY29udGVudCAuY29udGFjdCAuZW1haWwge1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG5mb290ZXIgLmNvbnRhaW5lciAucm93IC5jb2wgLmNvbC1jb250ZW50IC5zb2NpYWxzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuZm9vdGVyIC5jb250YWluZXIgLnJvdyAuY29sIC5jb2wtY29udGVudCAuc29jaWFscyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbmZvb3RlciAuY29udGFpbmVyIC5yb3cgLmNvbCAuY29sLWNvbnRlbnQgLnNvY2lhbHMgYTp2aXNpdGVkIHtcbiAgY29sb3I6IHJnYmEoMTAwLCA5NywgOTcsIDAuNTE0KTtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5yb3cgLmNvbCAuY29sLWNvbnRlbnQgdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5mb290ZXIgLmNvbnRhaW5lciAucm93IC5jb2wgLmNvbC1jb250ZW50IHVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5yb3cgLmNvbCAuY29sLWNvbnRlbnQgdWwgbGkgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuZm9vdGVyIC5jb250YWluZXIgLnJvdyAuY29sIC5jb2wtY29udGVudCB1bCBsaSBhOnZpc2l0ZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5mb290ZXIgLmNvbnRhaW5lciAucm93IC5jb2wgLmNvbC1jb250ZW50IHVsIGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmZvb3RlciAuY29udGFpbmVyIC5yb3cgLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBmb290ZXIgLmNvbnRhaW5lciAucm93IC5sb2dvIGltZyB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5mb290ZXIgLmNvbnRhaW5lciAucm93LmNvcHlyaWdodCB7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBmb290ZXIgLmNvbnRhaW5lciAucm93LmNvcHlyaWdodCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxufVxuZm9vdGVyIC5jb250YWluZXIgLmNvcHktdGV4dCB7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi1sZWZ0OiAxdnc7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgZm9vdGVyIC5jb250YWluZXIgLmNvcHktdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxufSIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuLy8gICAgIF8gICAgICAgICAgICBfICAgICAgICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgICAgXyBfXG4vLyAgICAoXykgICAgICAgICAgfCB8ICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgKF8pXG4vLyAgICAgXyBfIF9fICAgX19ffCB8XyAgIF8gIF9ffCB8IF9fXyAgIF8gX18gX19fICAgX19fICBfX3wgfF8gIF9fIF9cbi8vICAgIHwgfCAnXyBcXCAvIF9ffCB8IHwgfCB8LyBfYCB8LyBfIFxcIHwgJ18gYCBfIFxcIC8gXyBcXC8gX2AgfCB8LyBfYCB8XG4vLyAgICB8IHwgfCB8IHwgKF9ffCB8IHxffCB8IChffCB8ICBfXy8gfCB8IHwgfCB8IHwgIF9fLyAoX3wgfCB8IChffCB8XG4vLyAgICB8X3xffCB8X3xcXF9fX3xffFxcX18sX3xcXF9fLF98XFxfX198IHxffCB8X3wgfF98XFxfX198XFxfXyxffF98XFxfXyxffFxuLy9cbi8vICAgICAgU2ltcGxlLCBlbGVnYW50IGFuZCBtYWludGFpbmFibGUgbWVkaWEgcXVlcmllcyBpbiBTYXNzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHYxLjQuOVxuLy9cbi8vICAgICAgICAgICAgICAgIGh0dHA6Ly9pbmNsdWRlLW1lZGlhLmNvbVxuLy9cbi8vICAgICAgICAgQXV0aG9yczogRWR1YXJkbyBCb3VjYXMgKEBlZHVhcmRvYm91Y2FzKVxuLy8gICAgICAgICAgICAgICAgICBIdWdvIEdpcmF1ZGVsIChAaHVnb2dpcmF1ZGVsKVxuLy9cbi8vICAgICAgVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2VcblxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBsaWJyYXJ5IHB1YmxpYyBjb25maWd1cmF0aW9uXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2YgZ2xvYmFsIGJyZWFrcG9pbnRzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBicmVha3BvaW50IHdpdGggdGhlIGxhYmVsIGBwaG9uZWBcbi8vLyAgJGJyZWFrcG9pbnRzOiAoJ3Bob25lJzogMzIwcHgpO1xuLy8vXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogMzIwcHgsXG4gICd0YWJsZXQnOiA3NjhweCxcbiAgJ2Rlc2t0b3AnOiAxMDI0cHhcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBtZWRpYSB0eXBlIChzY3JlZW4pXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nOiAnc2NyZWVuJyk7XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHN0YXRpYyBleHByZXNzaW9uIHdpdGggbG9naWNhbCBkaXNqdW5jdGlvbiAoT1Igb3BlcmF0b3IpXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKFxuLy8vICAgICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpJ1xuLy8vICApO1xuLy8vXG4kbWVkaWEtZXhwcmVzc2lvbnM6IChcbiAgJ3NjcmVlbic6ICdzY3JlZW4nLFxuICAncHJpbnQnOiAncHJpbnQnLFxuICAnaGFuZGhlbGQnOiAnaGFuZGhlbGQnLFxuICAnbGFuZHNjYXBlJzogJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gICdwb3J0cmFpdCc6ICcob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCAobWluLXJlc29sdXRpb246IDJkcHB4KScsXG4gICdyZXRpbmEzeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSwgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpLCAobWluLXJlc29sdXRpb246IDNkcHB4KSdcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gRGVmaW5lcyBhIG51bWJlciB0byBiZSBhZGRlZCBvciBzdWJ0cmFjdGVkIGZyb20gZWFjaCB1bml0IHdoZW4gZGVjbGFyaW5nIGJyZWFrcG9pbnRzIHdpdGggZXhjbHVzaXZlIGludGVydmFsc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBwaXhlbHMgaXMgZGVmaW5lZCBhcyBgMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjEyOHB4Jykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAxMjlweCkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgZW1zIGlzIGRlZmluZWQgYXMgYDAuMDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yMGVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyMC4wMWVtKSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2Bcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yLjByZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIuMXJlbSkge31cbi8vL1xuJHVuaXQtaW50ZXJ2YWxzOiAoXG4gICdweCc6IDEsXG4gICdlbSc6IDAuMDEsXG4gICdyZW0nOiAwLjEsXG4gICcnOiAwXG4pICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBEZWZpbmVzIHdoZXRoZXIgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBhdmFpbGFibGUsIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2VwYXJhdGUgc3R5bGVzaGVldHNcbi8vLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXMuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRGlzYWJsZXMgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbiRpbS1tZWRpYS1zdXBwb3J0OiB0cnVlICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIGJyZWFrcG9pbnQgdG8gZW11bGF0ZSB3aGVuIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgZGlzYWJsZWQuIE1lZGlhIHF1ZXJpZXMgdGhhdCBzdGFydCBhdCBvclxuLy8vIGludGVyY2VwdCB0aGUgYnJlYWtwb2ludCB3aWxsIGJlIGRpc3BsYXllZCwgYW55IG90aGVycyB3aWxsIGJlIGlnbm9yZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgZG9lcyBub3QgaW50ZXJjZXB0IHRoZSBkZXNrdG9wIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ3RhYmxldCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PWRlc2t0b3AnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIG1lZGlhIGV4cHJlc3Npb25zIGFyZSBhbGxvd2VkIGluIGFuIGV4cHJlc3Npb24gZm9yIGl0IHRvIGJlIHVzZWQgd2hlbiBtZWRpYSBxdWVyaWVzXG4vLy8gYXJlIG5vdCBzdXBwb3J0ZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBhbmQgY29udGFpbnMgb25seSBhY2NlcHRlZCBtZWRpYSBleHByZXNzaW9uc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3NjcmVlbicpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgIC5mb28ge1xuLy8vICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGJ1dCBjb250YWlucyBhIG1lZGlhIGV4cHJlc3Npb24gdGhhdCBpcyBub3QgYWNjZXB0ZWRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdyZXRpbmEyeCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nLCAncG9ydHJhaXQnLCAnbGFuZHNjYXBlJykgIWRlZmF1bHQ7XG5cbi8vLy9cbi8vLyBDcm9zcy1lbmdpbmUgbG9nZ2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBMb2cgYSBtZXNzYWdlIGVpdGhlciB3aXRoIGBAZXJyb3JgIGlmIHN1cHBvcnRlZFxuLy8vIGVsc2Ugd2l0aCBgQHdhcm5gLCB1c2luZyBgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJylgXG4vLy8gdG8gZGV0ZWN0IHN1cHBvcnQuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuLy8vXG5AZnVuY3Rpb24gaW0tbG9nKCRtZXNzYWdlKSB7XG4gIEBpZiBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKSB7XG4gICAgQGVycm9yICRtZXNzYWdlO1xuICB9IEBlbHNlIHtcbiAgICBAd2FybiAkbWVzc2FnZTtcbiAgICAkXzogbm9vcCgpO1xuICB9XG5cbiAgQHJldHVybiAkbWVzc2FnZTtcbn1cblxuXG4vLy9cbi8vLyBXcmFwcGVyIG1peGluIGZvciB0aGUgbG9nIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGggYSBtb3JlIGZyaWVuZGx5XG4vLy8gQVBJIHRoYW4gYEBpZiBpbS1sb2coJy4uJykge31gIG9yIGAkXzogaW0tbG9nKCcuLicpYC4gQmFzaWNhbGx5LCB1c2UgdGhlIGZ1bmN0aW9uXG4vLy8gd2l0aGluIGZ1bmN0aW9ucyBiZWNhdXNlIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW4gYSBmdW5jdGlvblxuLy8vIGFuZCB1c2UgdGhlIG1peGluIGV2ZXJ5d2hlcmUgZWxzZSBiZWNhdXNlIGl0J3MgbXVjaCBtb3JlIGVsZWdhbnQuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuLy8vXG5AbWl4aW4gbG9nKCRtZXNzYWdlKSB7XG4gIEBpZiBpbS1sb2coJG1lc3NhZ2UpIHt9XG59XG5cblxuLy8vXG4vLy8gRnVuY3Rpb24gd2l0aCBubyBgQHJldHVybmAgY2FsbGVkIG5leHQgdG8gYEB3YXJuYCBpbiBTYXNzIDMuM1xuLy8vIHRvIHRyaWdnZXIgYSBjb21waWxpbmcgZXJyb3IgYW5kIHN0b3AgdGhlIHByb2Nlc3MuXG4vLy9cbkBmdW5jdGlvbiBub29wKCkge31cblxuLy8vXG4vLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgbGlzdCBvZiBjb25kaXRpb25zIGlzIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludC5cbi8vL1xuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXG4vLy9cbi8vLyBAcmV0dXJuIHtCb29sZWFufSAtIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29uZGl0aW9ucyBhcmUgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy9cbkBmdW5jdGlvbiBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSB7XG4gICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQpO1xuXG4gIEBpZiBub3QgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUge1xuICAgIEBpZiBpbS1sb2coJ2AjeyRpbS1uby1tZWRpYS1icmVha3BvaW50fWAgaXMgbm90IGEgdmFsaWQgYnJlYWtwb2ludC4nKSB7fVxuICB9XG5cbiAgQGVhY2ggJGNvbmRpdGlvbiBpbiAkY29uZGl0aW9ucyB7XG4gICAgQGlmIG5vdCBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGNvbmRpdGlvbik7XG4gICAgICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgICAgICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGNvbmRpdGlvbiwgJG9wZXJhdG9yKTtcblxuICAgICAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICAgICAgQGlmICgkcHJlZml4ID09ICdtYXgnIGFuZCAkdmFsdWUgPD0gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIG9yXG4gICAgICAgICAgKCRwcmVmaXggPT0gJ21pbicgYW5kICR2YWx1ZSA+ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSB7XG4gICAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBAZWxzZSBpZiBub3QgaW5kZXgoJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICBAcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gdHJ1ZTtcbn1cblxuLy8vL1xuLy8vIFBhcnNpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gR2V0IG9wZXJhdG9yIG9mIGFuIGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBvcGVyYXRvciBmcm9tXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gQW55IG9mIGA+PWAsIGA+YCwgYDw9YCwgYDxgLCBg4omlYCwgYOKJpGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKSB7XG4gIEBlYWNoICRvcGVyYXRvciBpbiAoJz49JywgJz4nLCAnPD0nLCAnPCcsICfiiaUnLCAn4omkJykge1xuICAgIEBpZiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAgICAgQHJldHVybiAkb3BlcmF0b3I7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAkXzogaW0tbG9nKCdObyBvcGVyYXRvciBmb3VuZCBpbiBgI3skZXhwcmVzc2lvbn1gLicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IGRpbWVuc2lvbiBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGB3aWR0aGAgb3IgYGhlaWdodGAgKG9yIHBvdGVudGlhbGx5IGFueXRoaW5nIGVsc2UpXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHBhcnNlZC1kaW1lbnNpb246IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgMCwgJG9wZXJhdG9yLWluZGV4IC0gMSk7XG4gICRkaW1lbnNpb246ICd3aWR0aCc7XG5cbiAgQGlmIHN0ci1sZW5ndGgoJHBhcnNlZC1kaW1lbnNpb24pID4gMCB7XG4gICAgJGRpbWVuc2lvbjogJHBhcnNlZC1kaW1lbnNpb247XG4gIH1cblxuICBAcmV0dXJuICRkaW1lbnNpb247XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBwcmVmaXggYmFzZWQgb24gYW4gb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvclxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGBtaW5gIG9yIGBtYXhgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKSB7XG4gIEByZXR1cm4gaWYoaW5kZXgoKCc8JywgJzw9JywgJ+KJpCcpLCAkb3BlcmF0b3IpLCAnbWF4JywgJ21pbicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCB2YWx1ZSBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgdmFsdWUgZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBBIG51bWVyaWMgdmFsdWVcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICR2YWx1ZTogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAkb3BlcmF0b3ItaW5kZXggKyBzdHItbGVuZ3RoKCRvcGVyYXRvcikpO1xuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xuICAgICR2YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICR2YWx1ZSk7XG4gIH0gQGVsc2Uge1xuICAgICR2YWx1ZTogdG8tbnVtYmVyKCR2YWx1ZSk7XG4gIH1cblxuICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCB1bml0KCR2YWx1ZSkpO1xuXG4gIEBpZiBub3QgJGludGVydmFsIHtcbiAgICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gICAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAgIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgICAkXzogaW0tbG9nKCdVbmtub3duIHVuaXQgYCN7dW5pdCgkdmFsdWUpfWAuJyk7XG4gIH1cblxuICBAaWYgJG9wZXJhdG9yID09ICc+JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgKyAkaW50ZXJ2YWw7XG4gIH0gQGVsc2UgaWYgJG9wZXJhdG9yID09ICc8JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLSAkaW50ZXJ2YWw7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuXG4vLy9cbi8vLyBQYXJzZSBhbiBleHByZXNzaW9uIHRvIHJldHVybiBhIHZhbGlkIG1lZGlhLXF1ZXJ5IGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gcGFyc2Vcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBWYWxpZCBtZWRpYSBxdWVyeVxuLy8vXG5AZnVuY3Rpb24gcGFyc2UtZXhwcmVzc2lvbigkZXhwcmVzc2lvbikge1xuICAvLyBJZiBpdCBpcyBwYXJ0IG9mICRtZWRpYS1leHByZXNzaW9ucywgaXQgaGFzIG5vIG9wZXJhdG9yXG4gIC8vIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCB0byBnbyBhbnkgZnVydGhlciwganVzdCByZXR1cm4gdGhlIHZhbHVlXG4gIEBpZiBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pO1xuICB9XG5cbiAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbik7XG4gICRkaW1lbnNpb246IGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG5cbiAgQHJldHVybiAnKCN7JHByZWZpeH0tI3skZGltZW5zaW9ufTogI3skdmFsdWV9KSc7XG59XG5cbi8vL1xuLy8vIFNsaWNlIGAkbGlzdGAgYmV0d2VlbiBgJHN0YXJ0YCBhbmQgYCRlbmRgIGluZGV4ZXNcbi8vL1xuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vXG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCAtIExpc3QgdG8gc2xpY2Vcbi8vLyBAcGFyYW0ge051bWJlcn0gJHN0YXJ0IFsxXSAtIFN0YXJ0IGluZGV4XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRlbmQgW2xlbmd0aCgkbGlzdCldIC0gRW5kIGluZGV4XG4vLy9cbi8vLyBAcmV0dXJuIHtMaXN0fSBTbGljZWQgbGlzdFxuLy8vXG5AZnVuY3Rpb24gc2xpY2UoJGxpc3QsICRzdGFydDogMSwgJGVuZDogbGVuZ3RoKCRsaXN0KSkge1xuICBAaWYgbGVuZ3RoKCRsaXN0KSA8IDEgb3IgJHN0YXJ0ID4gJGVuZCB7XG4gICAgQHJldHVybiAoKTtcbiAgfVxuXG4gICRyZXN1bHQ6ICgpO1xuXG4gIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgbnRoKCRsaXN0LCAkaSkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG4vLy8vXG4vLy8gU3RyaW5nIHRvIG51bWJlciBjb252ZXJ0ZXJcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBDYXN0cyBhIHN0cmluZyBpbnRvIGEgbnVtYmVyXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYmUgcGFyc2VkXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9XG4vLy9cbkBmdW5jdGlvbiB0by1udW1iZXIoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ251bWJlcicge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnc3RyaW5nJyB7XG4gICAgJF86IGltLWxvZygnVmFsdWUgZm9yIGB0by1udW1iZXJgIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgfVxuXG4gICRmaXJzdC1jaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsIDEsIDEpO1xuICAkcmVzdWx0OiAwO1xuICAkZGlnaXRzOiAwO1xuICAkbWludXM6ICgkZmlyc3QtY2hhcmFjdGVyID09ICctJyk7XG4gICRudW1iZXJzOiAoJzAnOiAwLCAnMSc6IDEsICcyJzogMiwgJzMnOiAzLCAnNCc6IDQsICc1JzogNSwgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5KTtcblxuICAvLyBSZW1vdmUgKy8tIHNpZ24gaWYgcHJlc2VudCBhdCBmaXJzdCBjaGFyYWN0ZXJcbiAgQGlmICgkZmlyc3QtY2hhcmFjdGVyID09ICcrJyBvciAkZmlyc3QtY2hhcmFjdGVyID09ICctJykge1xuICAgICR2YWx1ZTogc3RyLXNsaWNlKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIHN0ci1sZW5ndGgoJHZhbHVlKSB7XG4gICAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgJGksICRpKTtcblxuICAgIEBpZiBub3QgKGluZGV4KG1hcC1rZXlzKCRudW1iZXJzKSwgJGNoYXJhY3Rlcikgb3IgJGNoYXJhY3RlciA9PSAnLicpIHtcbiAgICAgIEByZXR1cm4gdG8tbGVuZ3RoKGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpLCBzdHItc2xpY2UoJHZhbHVlLCAkaSkpXG4gICAgfVxuXG4gICAgQGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcbiAgICAgICRkaWdpdHM6IDE7XG4gICAgfSBAZWxzZSBpZiAkZGlnaXRzID09IDAge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCAqIDEwICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3Rlcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkZGlnaXRzOiAkZGlnaXRzICogMTA7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3RlcikgLyAkZGlnaXRzO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XG59XG5cblxuLy8vXG4vLy8gQWRkIGAkdW5pdGAgdG8gYCR2YWx1ZWBcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBhZGQgdW5pdCB0b1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdW5pdCAtIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdW5pdFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIGAkdmFsdWVgIGV4cHJlc3NlZCBpbiBgJHVuaXRgXG4vLy9cbkBmdW5jdGlvbiB0by1sZW5ndGgoJHZhbHVlLCAkdW5pdCkge1xuICAkdW5pdHM6ICgncHgnOiAxcHgsICdjbSc6IDFjbSwgJ21tJzogMW1tLCAnJSc6IDElLCAnY2gnOiAxY2gsICdwYyc6IDFwYywgJ2luJzogMWluLCAnZW0nOiAxZW0sICdyZW0nOiAxcmVtLCAncHQnOiAxcHQsICdleCc6IDFleCwgJ3Z3JzogMXZ3LCAndmgnOiAxdmgsICd2bWluJzogMXZtaW4sICd2bWF4JzogMXZtYXgpO1xuXG4gIEBpZiBub3QgaW5kZXgobWFwLWtleXMoJHVuaXRzKSwgJHVuaXQpIHtcbiAgICAkXzogaW0tbG9nKCdJbnZhbGlkIHVuaXQgYCN7JHVuaXR9YC4nKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlICogbWFwLWdldCgkdW5pdHMsICR1bml0KTtcbn1cblxuLy8vXG4vLy8gVGhpcyBtaXhpbiBhaW1zIGF0IHJlZGVmaW5pbmcgdGhlIGNvbmZpZ3VyYXRpb24ganVzdCBmb3IgdGhlIHNjb3BlIG9mXG4vLy8gdGhlIGNhbGwuIEl0IGlzIGhlbHBmdWwgd2hlbiBoYXZpbmcgYSBjb21wb25lbnQgbmVlZGluZyBhbiBleHRlbmRlZFxuLy8vIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBjdXN0b20gYnJlYWtwb2ludHMgKHJlZmVycmVkIHRvIGFzIHR3ZWFrcG9pbnRzKVxuLy8vIGZvciBpbnN0YW5jZS5cbi8vL1xuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vha3BvaW50cyBbKCldIC0gTWFwIG9mIHR3ZWFrcG9pbnRzIHRvIGJlIG1lcmdlZCB3aXRoIGAkYnJlYWtwb2ludHNgXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vhay1tZWRpYS1leHByZXNzaW9ucyBbKCldIC0gTWFwIG9mIHR3ZWFrZWQgbWVkaWEgZXhwcmVzc2lvbnMgdG8gYmUgbWVyZ2VkIHdpdGggYCRtZWRpYS1leHByZXNzaW9uYFxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIGJyZWFrcG9pbnRzIHdpdGggYSB0d2Vha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCkpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgbWVkaWEgZXhwcmVzc2lvbnMgd2l0aCBhIGN1c3RvbSBvbmVcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgYm90aCBjb25maWd1cmF0aW9uIG1hcHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSwgKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG5AbWl4aW4gbWVkaWEtY29udGV4dCgkdHdlYWtwb2ludHM6ICgpLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgpKSB7XG4gIC8vIFNhdmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGdsb2JhbC1icmVha3BvaW50czogJGJyZWFrcG9pbnRzO1xuICAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zOiAkbWVkaWEtZXhwcmVzc2lvbnM7XG5cbiAgLy8gVXBkYXRlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRicmVha3BvaW50czogbWFwLW1lcmdlKCRicmVha3BvaW50cywgJHR3ZWFrcG9pbnRzKSAhZ2xvYmFsO1xuICAkbWVkaWEtZXhwcmVzc2lvbnM6IG1hcC1tZXJnZSgkbWVkaWEtZXhwcmVzc2lvbnMsICR0d2Vhay1tZWRpYS1leHByZXNzaW9ucykgIWdsb2JhbDtcblxuICBAY29udGVudDtcblxuICAvLyBSZXN0b3JlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRicmVha3BvaW50czogJGdsb2JhbC1icmVha3BvaW50cyAhZ2xvYmFsO1xuICAkbWVkaWEtZXhwcmVzc2lvbnM6ICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnMgIWdsb2JhbDtcbn1cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgcHVibGljIGV4cG9zZWQgQVBJXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gYSBsaXN0IG9mIGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHNpbmdsZSBzZXQgYnJlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCB0d28gc2V0IGJyZWFrcG9pbnRzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD10YWJsZXQnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzU4cHgnLCAnPDg1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBzZXQgYnJlYWtwb2ludHMgd2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+ZGVza3RvcCcsICc8PTEzNTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzdGF0aWMgZXhwcmVzc2lvblxuLy8vICBAaW5jbHVkZSBtZWRpYSgncmV0aW5hMngnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBNaXhpbmcgZXZlcnl0aGluZ1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNTBweCcsICc8dGFibGV0JywgJ3JldGluYTN4JykgeyB9XG4vLy9cbkBtaXhpbiBtZWRpYSgkY29uZGl0aW9ucy4uLikge1xuICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gIEBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPT0gMCkgb3JcbiAgICAgIChub3QgJGltLW1lZGlhLXN1cHBvcnQgYW5kIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH0gQGVsc2UgaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID4gMCkge1xuICAgIEBtZWRpYSAje3VucXVvdGUocGFyc2UtZXhwcmVzc2lvbihudGgoJGNvbmRpdGlvbnMsIDEpKSl9IHtcbiAgICAgIC8vIFJlY3Vyc2l2ZSBjYWxsXG4gICAgICBAaW5jbHVkZSBtZWRpYShzbGljZSgkY29uZGl0aW9ucywgMikuLi4pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vdGhlbWUvZ2VuZXJhbC5zY3NzXCI7XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDV2aDtcclxuICAuY29udGFpbmVyIHtcclxuICAgIGhyIHtcclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvdyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgIGZsZXgtZmxvdzogd3JhcDtcclxuICAgICAgfVxyXG4gICAgICAuY29sIHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIC8vIG1hcmdpbjogMnZoIDA7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiB0aGluIHNvbGlkIHJnYig4NSwgODQsIDg0KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJ2aCAwO1xyXG4gICAgICAgICAgLy8gYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCByZ2IoODUsIDg0LCA4NCk7XHJcbiAgICAgICAgICAmOm50aC1vZi10eXBlKDMpLFxyXG4gICAgICAgICAgJjpudGgtb2YtdHlwZSg0KSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgcmdiKDg1LCA4NCwgODQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLXRpdGxlIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogdGhpY2sgc29saWQgb3JhbmdlcmVkO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sLWNvbnRlbnQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgICAgIC5jb250YWN0IHtcclxuICAgICAgICAgICAgLnBob25lLFxyXG4gICAgICAgICAgICAuZW1haWwge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnNvY2lhbHMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAmOnZpc2l0ZWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmV5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAmOnZpc2l0ZWQge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ28ge1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93LmNvcHlyaWdodCB7XHJcbiAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNvcHktdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");
    /* harmony import */


    var _menuAnimations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menuAnimations.js */
    "./src/app/header/menuAnimations.js");
    /* harmony import */


    var _services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/content.service */
    "./src/app/services/content.service.ts");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _svg_uparrow_uparrow_circle_uparrow_circle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../svg/uparrow/uparrow-circle/uparrow-circle.component */
    "./src/app/svg/uparrow/uparrow-circle/uparrow-circle.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HeaderComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_11_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.openMenuBar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_12_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.openMenuBar();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Explore");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(contentService, breakpointObserver, viewPortRuler) {
        _classCallCheck(this, HeaderComponent);

        this.contentService = contentService;
        this.breakpointObserver = breakpointObserver;
        this.viewPortRuler = viewPortRuler; // showSearch = false;

        this.menuState = 'close';
        this.handSet = false;
        this.tl1 = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
          paused: true,
          reversed: true
        });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].HandsetPortrait]).subscribe(function (result) {
            if (result.matches) {
              _this.activateHandsetLayout();
            }
          });
          this.vw = this.viewPortRuler.getViewportSize().width;
          this.vh = this.viewPortRuler.getViewportSize().height; //sroll animation

          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to('.header', {
            scrollTrigger: {
              trigger: '.hdrlogo',
              scrub: true,
              refreshPriority: 1,
              // markers: true,
              start: 'top 4%'
            },
            y: -150,
            duration: 0.1
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "activateHandsetLayout",
        value: function activateHandsetLayout() {
          this.handSet = true; // this.showSearch = false;
        } // search(event) {
        //   if (this.searchInput) {
        //     this.categories = this.contentService.searchCategories(this.searchInput);
        //   }
        // }
        // show(event) {
        //   if (!this.showSearch) {
        //     this.tl1
        //       .to('.mobile-search', 0, {
        //         css: { display: 'none' },
        //       })
        //       .to('.search', 1, {
        //         css: { width: this.handSet ? '24vw' : '20vw', display: 'block' },
        //         ease: 'easeOut',
        //       });
        //     this.showSearch = true;
        //     this.tl1.play();
        //   }
        // }
        // close(event) {
        //   if (
        //     typeof event.target.className === 'string' &&
        //     event.target.className.includes('mobile-search')
        //   )
        //     return;
        //   if (this.showSearch) {
        //     this.tl1
        //       .to('.search', 0.5, {
        //         css: { width: 0 },
        //         ease: 'easeOut',
        //       })
        //       .to('.mobile-search', 0, {
        //         css: { display: 'block' },
        //         delay: -0.3,
        //       })
        //       .to('.search', 0, {
        //         css: { display: 'none' },
        //         delay: -0.3,
        //       });
        //     this.showSearch = false;
        //     this.tl1.play();
        //   }
        // }

      }, {
        key: "openMenuBar",
        value: function openMenuBar() {
          this.menuState = 'open'; // gsap.to('.mobile-search', 0, { css: { display: 'none' }, delay: 0.5 });

          Object(_menuAnimations_js__WEBPACK_IMPORTED_MODULE_3__["openMenu"])(this.vw, this.vh, 0.3, this.handSet);
        }
      }, {
        key: "closeMenuBar",
        value: function closeMenuBar() {
          this.menuState = 'close';
          Object(_menuAnimations_js__WEBPACK_IMPORTED_MODULE_3__["closeMenu"])(this.handSet); // gsap.to('.mobile-search', 0, { delay: 1, css: { display: 'block' } });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 15,
      vars: 2,
      consts: [[1, "header"], [1, "container"], [1, "row", "v-center", "space-between"], [1, "hdrlogo"], ["href", "#", "title", "Agastya E-Learning", 1, "logo"], [1, "first-letter"], [1, "search-wrapper"], [1, "nav-toggle"], ["class", "hamburger-menu", 3, "click", 4, "ngIf"], [1, "hamburger-menu-close", 3, "click"], [1, "hamburger-menu", 3, "click"], ["mat-stroked-button", ""]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xC5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GASTYA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_div_11_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_12_Template, 3, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_13_listener() {
            return ctx.closeMenuBar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "uparrow-circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.handSet);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.handSet);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _svg_uparrow_uparrow_circle_uparrow_circle_component__WEBPACK_IMPORTED_MODULE_7__["UparrowCircleComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  height: 110px;\n  z-index: 4;\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%] {\n    height: 96px;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .hdrlogo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  letter-spacing: 0.5rem;\n  color: black;\n  text-decoration: none;\n  font-weight: 700;\n}\n\n.header[_ngcontent-%COMP%]   .hdrlogo[_ngcontent-%COMP%]   .first-letter[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  width: 0;\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  display: none;\n  margin-right: 20px;\n  float: right;\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    font-size: 0.7em;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .show-search[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin: 0 10px;\n  width: 25px;\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    margin: 0 5px;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%] {\n    margin-right: 24px;\n  }\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%] {\n    width: 20px;\n    margin-right: 16px;\n  }\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 0.3rem;\n  background: black;\n  height: 2px;\n  width: 25px;\n  display: block;\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%]   .hamburger-menu[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\n  letter-spacing: 1.2px;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  padding-top: 6px;\n}\n\n.header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%]   .hamburger-menu-close[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%]   .hamburger-menu-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 56px;\n  }\n}\n\n@media (max-width: 425px) {\n  .header[_ngcontent-%COMP%]   .search-wrapper[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%]   .hamburger-menu-close[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 48px;\n  }\n}\n\n.header[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-radius: 50px 50px 50px 50px !important;\n  border: 1px solid currentColor !important;\n}\n\n.header[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-outline-start {\n  border: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9zcmNcXGFwcFxcdGhlbWVcXGdlbmVyYWwuc2NzcyIsInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9ub2RlX21vZHVsZXNcXGluY2x1ZGUtbWVkaWFcXGRpc3RcXF9pbmNsdWRlLW1lZGlhLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vc3JjXFxhcHBcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNaRjs7QUN1aUJJO0VGL2hCSjtJQU1JLGFBQUE7SUFDQSxpQkFBQTtFQ1ZGO0FBQ0Y7O0FDaWlCSTtFRi9oQko7SUFVSSxhQUFBO0lBQ0EsaUJBQUE7RUNSRjtBQUNGOztBQzJoQkk7RUYvaEJKO0lBY0ksV0FBQTtJQUNBLGVBQUE7RUNORjtBQUNGOztBRE9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEo7O0FDZ2hCSTtFRjlnQkY7SUFLSSxlQUFBO0VDSEo7QUFDRjs7QURLRTtFQUNFLG1CQUFBO0FDSEo7O0FES0U7RUFDRSw4QkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDSEo7O0FFbkRBO0VBQ0UsZUFBQTtFQUVBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBRnFERjs7QUNxZkk7RUMvaUJKO0lBT0ksWUFBQTtFRnVERjtBQUNGOztBRXBESTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRnNETjs7QUVwREk7RUFFRSxpQkFBQTtBRnFETjs7QUVsREU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUZvREo7O0FFbkRJO0VBQ0UsUUFBQTtBRnFETjs7QUVuREk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FGcUROOztBQzBkSTtFQ2xoQkE7SUFLSSxnQkFBQTtFRnVETjtBQUNGOztBRXRETTtFQUNFLGlCQUFBO0FGd0RSOztBRXBESTtFQUNFLGNBQUE7QUZzRE47O0FFbkRJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRnFETjs7QUMwY0k7RUNsZ0JBO0lBTUksYUFBQTtFRnNETjtBQUNGOztBRW5ESTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FGcUROOztBQzhiSTtFQ3hmQTtJQU9JLGtCQUFBO0VGdUROO0FBQ0Y7O0FDeWJJO0VDeGZBO0lBVUksV0FBQTtJQUNBLGtCQUFBO0VGeUROO0FBQ0Y7O0FFdERRO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCSHhFRjtFR3lFRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUZ3RFY7O0FFdERRO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUZ3RFY7O0FFckRNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FGdURSOztBQ2lhSTtFQ3ZkSTtJQUVJLFdBQUE7RUZ3RFY7QUFDRjs7QUM0Wkk7RUN2ZEk7SUFLSSxXQUFBO0VGMERWO0FBQ0Y7O0FFcERFO0VBQ0UsNkNBQUE7RUFDQSx5Q0FBQTtBRnNESjs7QUVsREU7RUFDRSxzQkFBQTtBRm9ESiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2luY2x1ZGUtbWVkaWEvZGlzdC9pbmNsdWRlLW1lZGlhXCI7XHJcblxyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4keWVsbG93OiByZ2IoMjQzLCAyNDMsIDIwNSk7XHJcbiRncmV5OiByZ2JhKDEwMCwgOTcsIDk3LCAwLjUxNCk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICBcInBob25lXCI6IDQyNXB4LFxyXG4gIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gIFwiZGVza3RvcFwiOiAxMzY2cHgsXHJcbiAgXCJMR2Rlc2t0b3BcIjogMTkyMHB4LFxyXG4pO1xyXG5cclxuLnBhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTU2MHB4O1xyXG4gIG1pbi13aWR0aDogMTU2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTU2MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICAgIG1pbi13aWR0aDogMTA4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTA4MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52LWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTU2MHB4O1xuICBtaW4td2lkdGg6IDE1NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTYwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyODBweDtcbiAgICBtaW4td2lkdGg6IDEyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTA4MHB4O1xuICAgIG1pbi13aWR0aDogMTA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRhaW5lciAucm93IHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnYtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lci1mbHVpZCAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMTBweDtcbiAgei1pbmRleDogNDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDk2cHg7XG4gIH1cbn1cbi5oZWFkZXIgLmhkcmxvZ28gYSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5oZWFkZXIgLmhkcmxvZ28gLmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmhlYWRlciAuc2VhcmNoLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlciAuc2VhcmNoLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDA7XG59XG4uaGVhZGVyIC5zZWFyY2gtd3JhcHBlciAuc2VhcmNoIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmhlYWRlciAuc2VhcmNoLXdyYXBwZXIgLnNlYXJjaCB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgfVxufVxuLmhlYWRlciAuc2VhcmNoLXdyYXBwZXIgLnNlYXJjaCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbi5oZWFkZXIgLnNlYXJjaC13cmFwcGVyIC5zaG93LXNlYXJjaCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmhlYWRlciAuc2VhcmNoLXdyYXBwZXIgLm1hdC1pY29uIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMCAxMHB4O1xuICB3aWR0aDogMjVweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuaGVhZGVyIC5zZWFyY2gtd3JhcHBlciAubWF0LWljb24ge1xuICAgIG1hcmdpbjogMCA1cHg7XG4gIH1cbn1cbi5oZWFkZXIgLnNlYXJjaC13cmFwcGVyIC5uYXYtdG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXIgLnNlYXJjaC13cmFwcGVyIC5uYXYtdG9nZ2xlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuaGVhZGVyIC5zZWFyY2gtd3JhcHBlciAubmF2LXRvZ2dsZSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICB9XG59XG4uaGVhZGVyIC5zZWFyY2gtd3JhcHBlciAubmF2LXRvZ2dsZSAuaGFtYnVyZ2VyLW1lbnUgc3BhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAyNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5oZWFkZXIgLnNlYXJjaC13cmFwcGVyIC5uYXYtdG9nZ2xlIC5oYW1idXJnZXItbWVudSAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cbi5oZWFkZXIgLnNlYXJjaC13cmFwcGVyIC5uYXYtdG9nZ2xlIC5oYW1idXJnZXItbWVudS1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyIC5zZWFyY2gtd3JhcHBlciAubmF2LXRvZ2dsZSAuaGFtYnVyZ2VyLW1lbnUtY2xvc2Ugc3ZnIHtcbiAgICB3aWR0aDogNTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5oZWFkZXIgLnNlYXJjaC13cmFwcGVyIC5uYXYtdG9nZ2xlIC5oYW1idXJnZXItbWVudS1jbG9zZSBzdmcge1xuICAgIHdpZHRoOiA0OHB4O1xuICB9XG59XG4uaGVhZGVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCA1MHB4IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uL3RoZW1lL2dlbmVyYWwuc2Nzc1wiO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIC8vIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTEwcHg7XHJcbiAgei1pbmRleDogNDtcclxuICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gIH1cclxuXHJcbiAgLmhkcmxvZ28ge1xyXG4gICAgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxuICAgIC5maXJzdC1sZXR0ZXIge1xyXG4gICAgICAvLyBjb2xvcjogb3JhbmdlcmVkO1xyXG4gICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlYXJjaC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgICAgfVxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNob3ctc2VhcmNoIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2LXRvZ2dsZSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGFtYnVyZ2VyLW1lbnUge1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4zcmVtO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjJweDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5oYW1idXJnZXItbWVudS1jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCA1MHB4IDUwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvciAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDI0MiwgMjQzLCAwLjM1NikgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0IHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/menuAnimations.js":
  /*!******************************************!*\
    !*** ./src/app/header/menuAnimations.js ***!
    \******************************************/

  /*! exports provided: openMenu, closeMenu */

  /***/
  function srcAppHeaderMenuAnimationsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "openMenu", function () {
      return openMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "closeMenu", function () {
      return closeMenu;
    });
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");

    var tl = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline();

    var openMenu = function openMenu(width, height, delay, handset) {
      tl.to("nav", 0, {
        css: {
          display: "block"
        },
        delay: delay
      }).to("body", 0, {
        css: {
          overflow: "hidden"
        }
      }).to(".App", 1, {
        y: height,
        ease: "expo.inOut"
      }).to(handset ? ".hamburger-menu span" : ".hamburger-menu button", 0.6, {
        delay: -1,
        scaleX: 0,
        transformOrigin: "50% 0%",
        ease: "expo.inOut"
      }).to("#Path_1", 0.4, {
        delay: -0.6,
        css: {
          strokeDashoffset: 10,
          strokeDasharray: 5
        }
      }).to("#Path_2", 0.4, {
        delay: -0.6,
        css: {
          strokeDashoffset: 10,
          strokeDasharray: 20
        }
      }).to("#Line_1", 0.4, {
        delay: -0.6,
        css: {
          strokeDashoffset: 40,
          strokeDasharray: 18
        }
      }).to("#circle", 0.6, {
        delay: -0.8,
        css: {
          strokeDashoffset: 0
        },
        ease: "expo.inOut"
      }).to(".hamburger-menu-close", 0.6, {
        delay: -0.8,
        css: {
          display: "block"
        }
      });
    };

    var closeMenu = function closeMenu(handset) {
      tl.to(".App", 1, {
        y: 0,
        ease: "expo.inOut"
      }).to("#circle", 0.6, {
        delay: -0.6,
        css: {
          strokeDashoffset: -193,
          strokeDasharray: 227
        }
      }).to("#Path_1", 0.4, {
        delay: -0.6,
        css: {
          strokeDashoffset: 10,
          strokeDasharray: 10
        }
      }).to("#Path_2", 0.4, {
        delay: -0.6,
        css: {
          strokeDashoffset: 10,
          strokeDasharray: 10
        }
      }).to("#Line_1", 0.4, {
        delay: -0.6,
        css: {
          strokeDashoffset: 40,
          strokeDasharray: 40
        }
      }).to(handset ? ".hamburger-menu span" : ".hamburger-menu button", 0.6, {
        delay: -0.6,
        scaleX: 1,
        transformOrigin: "50% 0%",
        ease: "expo.inOut"
      }).to(".hamburger-menu-close", 0, {
        delay: -0.1,
        css: {
          display: "none"
        }
      }).to("body", 0, {
        css: {
          overflow: "auto"
        }
      }).to("nav", 0, {
        css: {
          display: "none"
        }
      });
    };
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_menuAnimations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../header/menuAnimations.js */
    "./src/app/header/menuAnimations.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/content.service */
    "./src/app/services/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function MenuComponent_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.category.image.formats.large ? ctx_r0.category.image.formats.large.url : ctx_r0.category.image.formats.medium.url ? ctx_r0.category.image.formats.medium.url : ctx_r0.category.image.formats.small.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function MenuComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_5_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onClickShowAllCategories();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " All - Categories ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MenuComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onClickShowAllTopics();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "<");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" All - ", ctx_r2.category.name, " ");
      }
    }

    function MenuComponent_ul_9_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MenuComponent_ul_9_li_1_Template_a_mouseover_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var cat_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.onMouseOverCategory(cat_r13);
        })("click", function MenuComponent_ul_9_li_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var cat_r13 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.onClickCategory(cat_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r13.name, " ");
      }
    }

    function MenuComponent_ul_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ul_9_li_1_Template, 3, 1, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.categories);
      }
    }

    function MenuComponent_ul_10_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ul_10_li_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var top_r18 = ctx.$implicit;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r19.onClickTopic(top_r18);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var top_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", top_r18.name, " ");
      }
    }

    function MenuComponent_ul_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ul_10_li_1_Template, 3, 1, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.category.topics);
      }
    }

    function MenuComponent_ul_11_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ul_11_li_1_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.closeMenuAnimation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subTopic_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "course/" + subTopic_r22.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subTopic_r22 == null ? null : subTopic_r22.name, " ");
      }
    }

    function MenuComponent_ul_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_ul_11_li_1_Template, 3, 2, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.topic == null ? null : ctx_r5.topic.subTopics);
      }
    }

    function MenuComponent_li_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MenuComponent_li_19_Template_a_mouseover_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

          var topic_r25 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.onMouseOverTopic(topic_r25);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var topic_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r25 == null ? null : topic_r25.name, " ");
      }
    }

    function MenuComponent_ul_24_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_ul_24_li_3_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r30.closeMenuAnimation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subTopic_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "course/" + subTopic_r29.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subTopic_r29 == null ? null : subTopic_r29.name, " ");
      }
    }

    function MenuComponent_ul_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_ul_24_li_3_Template, 3, 2, "li", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.topic == null ? null : ctx_r7.topic.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.topic == null ? null : ctx_r7.topic.subTopics);
      }
    }

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(breakpointObserver, contentService) {
        _classCallCheck(this, MenuComponent);

        this.breakpointObserver = breakpointObserver;
        this.contentService = contentService;
        this.menuState = 'Categories';
        this.title = 'Categories';
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetLandscape, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].HandsetPortrait]).subscribe(function (result) {
            if (result.matches) {
              _this2.handSet = true;
            }
          });
          this.contentService.getCategories().subscribe(function (data) {
            _this2.categories = data;
            _this2.category = _this2.categories[0];
            _this2.topic = _this2.categories[0].topics[0];
          });
        }
      }, {
        key: "closeMenuAnimation",
        value: function closeMenuAnimation() {
          Object(_header_menuAnimations_js__WEBPACK_IMPORTED_MODULE_1__["closeMenu"])(this.handSet);
        }
      }, {
        key: "setTitle",
        value: function setTitle() {
          switch (this.menuState) {
            case 'Topics':
              this.title = this.category.name;
              break;

            case 'Sub-Topics':
              this.title = this.topic.name;
              break;

            default:
              this.title = 'Categories';
          }
        }
      }, {
        key: "onMouseOverCategory",
        value: function onMouseOverCategory(category) {
          this.category = category;

          if (category.topics) {
            this.topic = category.topics[0];
          } else {
            this.topic = null;
          }
        }
      }, {
        key: "onClickCategory",
        value: function onClickCategory(category) {
          if (this.handSet) {
            this.category = category;

            if (category.topics) {
              this.topic = category.topics[0];
            } else {
              this.topic = null;
            }

            this.menuState = 'Topics';
            this.setTitle();
          }
        }
      }, {
        key: "onClickShowAllCategories",
        value: function onClickShowAllCategories() {
          this.menuState = 'Categories';
          this.setTitle();
        }
      }, {
        key: "onMouseOverTopic",
        value: function onMouseOverTopic(topic) {
          this.topic = topic;
        }
      }, {
        key: "onClickTopic",
        value: function onClickTopic(topic) {
          if (this.handSet) {
            this.topic = topic;
            this.menuState = 'Sub-Topics';
            this.setTitle();
          }
        }
      }, {
        key: "onClickShowAllTopics",
        value: function onClickShowAllTopics() {
          this.menuState = 'Topics';
          this.setTitle();
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      inputs: {
        menuState: "menuState"
      },
      decls: 25,
      vars: 10,
      consts: [["class", "category-image", 3, "src", 4, "ngIf"], [1, "container"], [1, "nav-columns"], [1, "nav-column"], ["class", "nav-label", 3, "click", 4, "ngIf"], [1, "nav-title"], ["class", "nav-links", 4, "ngIf"], [1, "nav-column", "sub-nav"], [1, "nav-label"], [1, "nav-infos"], [1, "nav-info"], [1, "nav-info-label"], [4, "ngFor", "ngForOf"], ["class", "nav-info", 4, "ngIf"], [1, "category-image", 3, "src"], [1, "nav-label", 3, "click"], [1, "left-arrow"], [1, "nav-links"], [3, "mouseover", "click"], [3, "click"], ["routerLinkActive", "active", 3, "routerLink", "click"], [3, "mouseover"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_img_1_Template, 1, 1, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuComponent_div_5_Template, 4, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MenuComponent_div_6_Template, 4, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MenuComponent_ul_9_Template, 2, 1, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MenuComponent_ul_10_Template, 2, 1, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_ul_11_Template, 2, 1, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MenuComponent_li_19_Template, 3, 1, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sub-Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MenuComponent_ul_24_Template, 4, 2, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category.image.formats.large || ctx.category.image.formats.medium || ctx.category.image.formats.small);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.handSet && (ctx.menuState === "Topics" || ctx.menuState === "Sub-Topics"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.handSet && ctx.menuState === "Sub-Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuState === "Categories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.handSet && ctx.menuState === "Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.handSet && ctx.menuState === "Sub-Topics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.category == null ? null : ctx.category.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.category == null ? null : ctx.category.topics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.topic == null ? null : ctx.topic.subTopics.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\nnav[_ngcontent-%COMP%] {\n  left: 0;\n  top: -1px;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: none;\n  position: fixed;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  background: rgba(100, 97, 97, 0.514);\n}\n\nnav[_ngcontent-%COMP%]   .category-image[_ngcontent-%COMP%] {\n  position: fixed;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 0.7;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 2px;\n  display: block;\n  margin-top: 5px;\n  right: 0;\n  background: black;\n  transition: 0.4s ease;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: pink;\n}\n\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n  background: black;\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%] {\n  transform: translateY(125px);\n  display: flex;\n  padding: 0 32px;\n}\n\n@media (max-width: 654px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 654px) and (max-width: 425px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n@media (max-width: 425px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .sub-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%] {\n  width: 45%;\n}\n\n@media (max-width: 654px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]:last-child {\n  width: 55%;\n}\n\n@media (max-width: 654px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]:last-child {\n    width: 100%;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n  font-size: 1em;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n}\n\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    margin-bottom: 1.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    margin-bottom: 0.7rem;\n    text-transform: uppercase;\n    letter-spacing: 0.1rem;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n  font-size: 1em;\n  text-transform: uppercase;\n  letter-spacing: 0.2rem;\n  margin-bottom: 1.6rem;\n}\n\n@media (max-width: 425px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 1rem;\n    margin-top: 2rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    letter-spacing: 0.08rem;\n    color: #585858;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-infos[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n@media (max-width: 654px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-infos[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-infos[_ngcontent-%COMP%]   .nav-info[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 50%;\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-infos[_ngcontent-%COMP%]   .nav-info[_ngcontent-%COMP%]   .nav-info-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-infos[_ngcontent-%COMP%]   .nav-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-weight: 300;\n  list-style: none;\n  font-size: 1.4rem;\n  margin-bottom: 1.2rem;\n}\n\n@media (max-width: 768px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-infos[_ngcontent-%COMP%]   .nav-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-bottom: 1rem;\n  }\n}\n\n@media (max-width: 425px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-infos[_ngcontent-%COMP%]   .nav-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 0.875rem;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-infos[_ngcontent-%COMP%]   .nav-info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n  padding: 0;\n  margin-top: 3rem;\n}\n\n@media (max-width: 425px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 2.4rem;\n}\n\n@media (max-width: 425px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 1.6rem;\n  }\n}\n\nnav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 2.8rem;\n  text-decoration: none;\n  color: black;\n}\n\n@media (max-width: 425px) {\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 2rem;\n    position: relative;\n  }\n  nav[_ngcontent-%COMP%]   .nav-columns[_ngcontent-%COMP%]   .nav-column[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n    content: \"\";\n    position: absolute;\n    height: 2px;\n    display: block;\n    margin-top: 5px;\n    right: 0;\n    background: black;\n    width: 100%;\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vc3JjXFxhcHBcXHRoZW1lXFxnZW5lcmFsLnNjc3MiLCJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vbm9kZV9tb2R1bGVzXFxpbmNsdWRlLW1lZGlhXFxkaXN0XFxfaW5jbHVkZS1tZWRpYS5zY3NzIiwic3JjL2FwcC9tZW51L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9zcmNcXGFwcFxcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURlQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDWkY7O0FDdWlCSTtFRi9oQko7SUFNSSxhQUFBO0lBQ0EsaUJBQUE7RUNWRjtBQUNGOztBQ2lpQkk7RUYvaEJKO0lBVUksYUFBQTtJQUNBLGlCQUFBO0VDUkY7QUFDRjs7QUMyaEJJO0VGL2hCSjtJQWNJLFdBQUE7SUFDQSxlQUFBO0VDTkY7QUFDRjs7QURPRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xKOztBQ2doQkk7RUY5Z0JGO0lBS0ksZUFBQTtFQ0hKO0FBQ0Y7O0FES0U7RUFDRSxtQkFBQTtBQ0hKOztBREtFO0VBQ0UsOEJBQUE7QUNISjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FES0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRW5EQTtFQUNFLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NIUEs7QUM2RFA7O0FFckRFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FGdURKOztBRWpERTtFQUNFLGtCQUFBO0FGbURKOztBRWxESTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsaUJIaENFO0VHaUNGLHFCQUFBO0FGb0ROOztBRWxESTtFQUNFLFdBQUE7QUZvRE47O0FFbkRNO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxpQkh4Q0E7QUM2RlI7O0FFakRFO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRm1ESjs7QUM0Y0k7RUNsZ0JGO0lBS0ksc0JBQUE7RUZxREo7QUFDRjs7QUN1Y0k7RUNsZ0JGO0lBT00sZUFBQTtFRndETjtBQUNGOztBQ2tjSTtFQ3hmQTtJQUVJLGFBQUE7RUZ3RE47QUFDRjs7QUV0REk7RUFDRSxVQUFBO0FGd0ROOztBQzBiSTtFQ25mQTtJQUdJLFdBQUE7RUYwRE47QUFDRjs7QUV6RE07RUFDRSxVQUFBO0FGMkRSOztBQ2tiSTtFQzllRTtJQUdJLFdBQUE7RUY2RFI7QUFDRjs7QUUzRE07RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FGNkRSOztBQ3VhSTtFQ3hlRTtJQU1JLGlCQUFBO0lBQ0EscUJBQUE7RUYrRFI7QUFDRjs7QUNpYUk7RUN4ZUU7SUFVSSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EseUJBQUE7SUFDQSxzQkFBQTtFRmlFUjtBQUNGOztBRTlETTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUZnRVI7O0FDbVpJO0VDdmRFO0lBTUksZUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLHlCQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0VGa0VSO0FBQ0Y7O0FFaEVNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUZrRVI7O0FDb1lJO0VDeGNFO0lBSUksOEJBQUE7RUZvRVI7QUFDRjs7QUVuRVE7RUFDRSxVQUFBO0VBQ0EsVUFBQTtBRnFFVjs7QUVuRVU7RUFDRSxnQkFBQTtBRnFFWjs7QUVuRVU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBRnFFWjs7QUNrWEk7RUMzYk07SUFNSSxpQkFBQTtJQUNBLG1CQUFBO0VGdUVaO0FBQ0Y7O0FDNFdJO0VDM2JNO0lBVUksZUFBQTtJQUNBLHVCQUFBO0VGeUVaO0FBQ0Y7O0FFeEVZO0VBQ0UscUJBQUE7RUFDQSxZSGxJTjtBQzRNUjs7QUVyRU07RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUZ1RVI7O0FDOFZJO0VDdmFFO0lBSUksYUFBQTtFRnlFUjtBQUNGOztBRXhFUTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUYwRVY7O0FDcVZJO0VDamFJO0lBSUkscUJBQUE7RUY0RVY7QUFDRjs7QUUzRVU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZSHZKSjtBQ29PUjs7QUMwVUk7RUMzWk07SUFNSSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFRitFWjtFRTlFWTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFFBQUE7SUFDQSxpQkhuS1I7SUdvS1EsV0FBQTtJQUNBLE9BQUE7RUZnRmQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L2luY2x1ZGUtbWVkaWFcIjtcclxuXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiR5ZWxsb3c6IHJnYigyNDMsIDI0MywgMjA1KTtcclxuJGdyZXk6IHJnYmEoMTAwLCA5NywgOTcsIDAuNTE0KTtcclxuXHJcbiRicmVha3BvaW50czogKFxyXG4gIFwicGhvbmVcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJkZXNrdG9wXCI6IDEzNjZweCxcclxuICBcIkxHZGVza3RvcFwiOiAxOTIwcHgsXHJcbik7XHJcblxyXG4ucGFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxNTYwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD0xNTYwcHhcIikge1xyXG4gICAgd2lkdGg6IDEyODBweDtcclxuICAgIG1pbi13aWR0aDogMTI4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDgwcHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD0xMDgwcHhcIikge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMzJweDtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnYtY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNTYwcHg7XG4gIG1pbi13aWR0aDogMTU2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE1NjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTI4MHB4O1xuICAgIG1pbi13aWR0aDogMTI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDgwcHg7XG4gICAgbWluLXdpZHRoOiAxMDgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFpbmVyIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY29udGFpbmVyIC5yb3cge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxufVxuLmNvbnRhaW5lciAudi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm5hdiB7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDk3LCA5NywgMC41MTQpO1xufVxubmF2IC5jYXRlZ29yeS1pbWFnZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9wYWNpdHk6IDAuNztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5uYXYgYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm5hdiBhOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogcGluaztcbn1cbm5hdiBhOmhvdmVyOmFmdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxubmF2IC5uYXYtY29sdW1ucyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMjVweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDAgMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTRweCkge1xuICBuYXYgLm5hdi1jb2x1bW5zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjU0cHgpIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICBuYXYgLm5hdi1jb2x1bW5zIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICBuYXYgLm5hdi1jb2x1bW5zIC5zdWItbmF2IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5uYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIHtcbiAgd2lkdGg6IDQ1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTRweCkge1xuICBuYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxubmF2IC5uYXYtY29sdW1ucyAubmF2LWNvbHVtbjpsYXN0LWNoaWxkIHtcbiAgd2lkdGg6IDU1JTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTRweCkge1xuICBuYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uOmxhc3QtY2hpbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5uYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBuYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIG5hdiAubmF2LWNvbHVtbnMgLm5hdi1jb2x1bW4gLm5hdi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xuICB9XG59XG5uYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtdGl0bGUge1xuICBmb250LXNpemU6IDFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIG5hdiAubmF2LWNvbHVtbnMgLm5hdi1jb2x1bW4gLm5hdi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhyZW07XG4gICAgY29sb3I6ICM1ODU4NTg7XG4gIH1cbn1cbm5hdiAubmF2LWNvbHVtbnMgLm5hdi1jb2x1bW4gLm5hdi1pbmZvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NTRweCkge1xuICBuYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtaW5mb3Mge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxubmF2IC5uYXYtY29sdW1ucyAubmF2LWNvbHVtbiAubmF2LWluZm9zIC5uYXYtaW5mbyB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiA1MCU7XG59XG5uYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtaW5mb3MgLm5hdi1pbmZvIC5uYXYtaW5mby1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5uYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtaW5mb3MgLm5hdi1pbmZvIGxpIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBuYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtaW5mb3MgLm5hdi1pbmZvIGxpIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgbmF2IC5uYXYtY29sdW1ucyAubmF2LWNvbHVtbiAubmF2LWluZm9zIC5uYXYtaW5mbyBsaSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xuICB9XG59XG5uYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtaW5mb3MgLm5hdi1pbmZvIGxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cbm5hdiAubmF2LWNvbHVtbnMgLm5hdi1jb2x1bW4gLm5hdi1saW5rcyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDNyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgbmF2IC5uYXYtY29sdW1ucyAubmF2LWNvbHVtbiAubmF2LWxpbmtzIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5uYXYgLm5hdi1jb2x1bW5zIC5uYXYtY29sdW1uIC5uYXYtbGlua3MgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyLjRyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgbmF2IC5uYXYtY29sdW1ucyAubmF2LWNvbHVtbiAubmF2LWxpbmtzIGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjZyZW07XG4gIH1cbn1cbm5hdiAubmF2LWNvbHVtbnMgLm5hdi1jb2x1bW4gLm5hdi1saW5rcyBsaSBhIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyLjhyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIG5hdiAubmF2LWNvbHVtbnMgLm5hdi1jb2x1bW4gLm5hdi1saW5rcyBsaSBhIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIG5hdiAubmF2LWNvbHVtbnMgLm5hdi1jb2x1bW4gLm5hdi1saW5rcyBsaSBhOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgfVxufSIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuLy8gICAgIF8gICAgICAgICAgICBfICAgICAgICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgICAgXyBfXG4vLyAgICAoXykgICAgICAgICAgfCB8ICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgKF8pXG4vLyAgICAgXyBfIF9fICAgX19ffCB8XyAgIF8gIF9ffCB8IF9fXyAgIF8gX18gX19fICAgX19fICBfX3wgfF8gIF9fIF9cbi8vICAgIHwgfCAnXyBcXCAvIF9ffCB8IHwgfCB8LyBfYCB8LyBfIFxcIHwgJ18gYCBfIFxcIC8gXyBcXC8gX2AgfCB8LyBfYCB8XG4vLyAgICB8IHwgfCB8IHwgKF9ffCB8IHxffCB8IChffCB8ICBfXy8gfCB8IHwgfCB8IHwgIF9fLyAoX3wgfCB8IChffCB8XG4vLyAgICB8X3xffCB8X3xcXF9fX3xffFxcX18sX3xcXF9fLF98XFxfX198IHxffCB8X3wgfF98XFxfX198XFxfXyxffF98XFxfXyxffFxuLy9cbi8vICAgICAgU2ltcGxlLCBlbGVnYW50IGFuZCBtYWludGFpbmFibGUgbWVkaWEgcXVlcmllcyBpbiBTYXNzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHYxLjQuOVxuLy9cbi8vICAgICAgICAgICAgICAgIGh0dHA6Ly9pbmNsdWRlLW1lZGlhLmNvbVxuLy9cbi8vICAgICAgICAgQXV0aG9yczogRWR1YXJkbyBCb3VjYXMgKEBlZHVhcmRvYm91Y2FzKVxuLy8gICAgICAgICAgICAgICAgICBIdWdvIEdpcmF1ZGVsIChAaHVnb2dpcmF1ZGVsKVxuLy9cbi8vICAgICAgVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2VcblxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBsaWJyYXJ5IHB1YmxpYyBjb25maWd1cmF0aW9uXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2YgZ2xvYmFsIGJyZWFrcG9pbnRzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBicmVha3BvaW50IHdpdGggdGhlIGxhYmVsIGBwaG9uZWBcbi8vLyAgJGJyZWFrcG9pbnRzOiAoJ3Bob25lJzogMzIwcHgpO1xuLy8vXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogMzIwcHgsXG4gICd0YWJsZXQnOiA3NjhweCxcbiAgJ2Rlc2t0b3AnOiAxMDI0cHhcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBtZWRpYSB0eXBlIChzY3JlZW4pXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nOiAnc2NyZWVuJyk7XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHN0YXRpYyBleHByZXNzaW9uIHdpdGggbG9naWNhbCBkaXNqdW5jdGlvbiAoT1Igb3BlcmF0b3IpXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKFxuLy8vICAgICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpJ1xuLy8vICApO1xuLy8vXG4kbWVkaWEtZXhwcmVzc2lvbnM6IChcbiAgJ3NjcmVlbic6ICdzY3JlZW4nLFxuICAncHJpbnQnOiAncHJpbnQnLFxuICAnaGFuZGhlbGQnOiAnaGFuZGhlbGQnLFxuICAnbGFuZHNjYXBlJzogJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gICdwb3J0cmFpdCc6ICcob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCAobWluLXJlc29sdXRpb246IDJkcHB4KScsXG4gICdyZXRpbmEzeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSwgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpLCAobWluLXJlc29sdXRpb246IDNkcHB4KSdcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gRGVmaW5lcyBhIG51bWJlciB0byBiZSBhZGRlZCBvciBzdWJ0cmFjdGVkIGZyb20gZWFjaCB1bml0IHdoZW4gZGVjbGFyaW5nIGJyZWFrcG9pbnRzIHdpdGggZXhjbHVzaXZlIGludGVydmFsc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBwaXhlbHMgaXMgZGVmaW5lZCBhcyBgMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjEyOHB4Jykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAxMjlweCkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgZW1zIGlzIGRlZmluZWQgYXMgYDAuMDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yMGVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyMC4wMWVtKSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2Bcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yLjByZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIuMXJlbSkge31cbi8vL1xuJHVuaXQtaW50ZXJ2YWxzOiAoXG4gICdweCc6IDEsXG4gICdlbSc6IDAuMDEsXG4gICdyZW0nOiAwLjEsXG4gICcnOiAwXG4pICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBEZWZpbmVzIHdoZXRoZXIgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBhdmFpbGFibGUsIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2VwYXJhdGUgc3R5bGVzaGVldHNcbi8vLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXMuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRGlzYWJsZXMgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbiRpbS1tZWRpYS1zdXBwb3J0OiB0cnVlICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIGJyZWFrcG9pbnQgdG8gZW11bGF0ZSB3aGVuIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgZGlzYWJsZWQuIE1lZGlhIHF1ZXJpZXMgdGhhdCBzdGFydCBhdCBvclxuLy8vIGludGVyY2VwdCB0aGUgYnJlYWtwb2ludCB3aWxsIGJlIGRpc3BsYXllZCwgYW55IG90aGVycyB3aWxsIGJlIGlnbm9yZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgZG9lcyBub3QgaW50ZXJjZXB0IHRoZSBkZXNrdG9wIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ3RhYmxldCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PWRlc2t0b3AnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIG1lZGlhIGV4cHJlc3Npb25zIGFyZSBhbGxvd2VkIGluIGFuIGV4cHJlc3Npb24gZm9yIGl0IHRvIGJlIHVzZWQgd2hlbiBtZWRpYSBxdWVyaWVzXG4vLy8gYXJlIG5vdCBzdXBwb3J0ZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBhbmQgY29udGFpbnMgb25seSBhY2NlcHRlZCBtZWRpYSBleHByZXNzaW9uc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3NjcmVlbicpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgIC5mb28ge1xuLy8vICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGJ1dCBjb250YWlucyBhIG1lZGlhIGV4cHJlc3Npb24gdGhhdCBpcyBub3QgYWNjZXB0ZWRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdyZXRpbmEyeCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nLCAncG9ydHJhaXQnLCAnbGFuZHNjYXBlJykgIWRlZmF1bHQ7XG5cbi8vLy9cbi8vLyBDcm9zcy1lbmdpbmUgbG9nZ2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBMb2cgYSBtZXNzYWdlIGVpdGhlciB3aXRoIGBAZXJyb3JgIGlmIHN1cHBvcnRlZFxuLy8vIGVsc2Ugd2l0aCBgQHdhcm5gLCB1c2luZyBgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJylgXG4vLy8gdG8gZGV0ZWN0IHN1cHBvcnQuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuLy8vXG5AZnVuY3Rpb24gaW0tbG9nKCRtZXNzYWdlKSB7XG4gIEBpZiBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKSB7XG4gICAgQGVycm9yICRtZXNzYWdlO1xuICB9IEBlbHNlIHtcbiAgICBAd2FybiAkbWVzc2FnZTtcbiAgICAkXzogbm9vcCgpO1xuICB9XG5cbiAgQHJldHVybiAkbWVzc2FnZTtcbn1cblxuXG4vLy9cbi8vLyBXcmFwcGVyIG1peGluIGZvciB0aGUgbG9nIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGggYSBtb3JlIGZyaWVuZGx5XG4vLy8gQVBJIHRoYW4gYEBpZiBpbS1sb2coJy4uJykge31gIG9yIGAkXzogaW0tbG9nKCcuLicpYC4gQmFzaWNhbGx5LCB1c2UgdGhlIGZ1bmN0aW9uXG4vLy8gd2l0aGluIGZ1bmN0aW9ucyBiZWNhdXNlIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW4gYSBmdW5jdGlvblxuLy8vIGFuZCB1c2UgdGhlIG1peGluIGV2ZXJ5d2hlcmUgZWxzZSBiZWNhdXNlIGl0J3MgbXVjaCBtb3JlIGVsZWdhbnQuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuLy8vXG5AbWl4aW4gbG9nKCRtZXNzYWdlKSB7XG4gIEBpZiBpbS1sb2coJG1lc3NhZ2UpIHt9XG59XG5cblxuLy8vXG4vLy8gRnVuY3Rpb24gd2l0aCBubyBgQHJldHVybmAgY2FsbGVkIG5leHQgdG8gYEB3YXJuYCBpbiBTYXNzIDMuM1xuLy8vIHRvIHRyaWdnZXIgYSBjb21waWxpbmcgZXJyb3IgYW5kIHN0b3AgdGhlIHByb2Nlc3MuXG4vLy9cbkBmdW5jdGlvbiBub29wKCkge31cblxuLy8vXG4vLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgbGlzdCBvZiBjb25kaXRpb25zIGlzIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludC5cbi8vL1xuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXG4vLy9cbi8vLyBAcmV0dXJuIHtCb29sZWFufSAtIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29uZGl0aW9ucyBhcmUgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy9cbkBmdW5jdGlvbiBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSB7XG4gICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQpO1xuXG4gIEBpZiBub3QgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUge1xuICAgIEBpZiBpbS1sb2coJ2AjeyRpbS1uby1tZWRpYS1icmVha3BvaW50fWAgaXMgbm90IGEgdmFsaWQgYnJlYWtwb2ludC4nKSB7fVxuICB9XG5cbiAgQGVhY2ggJGNvbmRpdGlvbiBpbiAkY29uZGl0aW9ucyB7XG4gICAgQGlmIG5vdCBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGNvbmRpdGlvbik7XG4gICAgICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgICAgICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGNvbmRpdGlvbiwgJG9wZXJhdG9yKTtcblxuICAgICAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICAgICAgQGlmICgkcHJlZml4ID09ICdtYXgnIGFuZCAkdmFsdWUgPD0gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIG9yXG4gICAgICAgICAgKCRwcmVmaXggPT0gJ21pbicgYW5kICR2YWx1ZSA+ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSB7XG4gICAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBAZWxzZSBpZiBub3QgaW5kZXgoJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICBAcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gdHJ1ZTtcbn1cblxuLy8vL1xuLy8vIFBhcnNpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gR2V0IG9wZXJhdG9yIG9mIGFuIGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBvcGVyYXRvciBmcm9tXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gQW55IG9mIGA+PWAsIGA+YCwgYDw9YCwgYDxgLCBg4omlYCwgYOKJpGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKSB7XG4gIEBlYWNoICRvcGVyYXRvciBpbiAoJz49JywgJz4nLCAnPD0nLCAnPCcsICfiiaUnLCAn4omkJykge1xuICAgIEBpZiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAgICAgQHJldHVybiAkb3BlcmF0b3I7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAkXzogaW0tbG9nKCdObyBvcGVyYXRvciBmb3VuZCBpbiBgI3skZXhwcmVzc2lvbn1gLicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IGRpbWVuc2lvbiBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGB3aWR0aGAgb3IgYGhlaWdodGAgKG9yIHBvdGVudGlhbGx5IGFueXRoaW5nIGVsc2UpXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHBhcnNlZC1kaW1lbnNpb246IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgMCwgJG9wZXJhdG9yLWluZGV4IC0gMSk7XG4gICRkaW1lbnNpb246ICd3aWR0aCc7XG5cbiAgQGlmIHN0ci1sZW5ndGgoJHBhcnNlZC1kaW1lbnNpb24pID4gMCB7XG4gICAgJGRpbWVuc2lvbjogJHBhcnNlZC1kaW1lbnNpb247XG4gIH1cblxuICBAcmV0dXJuICRkaW1lbnNpb247XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBwcmVmaXggYmFzZWQgb24gYW4gb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvclxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGBtaW5gIG9yIGBtYXhgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKSB7XG4gIEByZXR1cm4gaWYoaW5kZXgoKCc8JywgJzw9JywgJ+KJpCcpLCAkb3BlcmF0b3IpLCAnbWF4JywgJ21pbicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCB2YWx1ZSBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgdmFsdWUgZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBBIG51bWVyaWMgdmFsdWVcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICR2YWx1ZTogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAkb3BlcmF0b3ItaW5kZXggKyBzdHItbGVuZ3RoKCRvcGVyYXRvcikpO1xuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xuICAgICR2YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICR2YWx1ZSk7XG4gIH0gQGVsc2Uge1xuICAgICR2YWx1ZTogdG8tbnVtYmVyKCR2YWx1ZSk7XG4gIH1cblxuICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCB1bml0KCR2YWx1ZSkpO1xuXG4gIEBpZiBub3QgJGludGVydmFsIHtcbiAgICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gICAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAgIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgICAkXzogaW0tbG9nKCdVbmtub3duIHVuaXQgYCN7dW5pdCgkdmFsdWUpfWAuJyk7XG4gIH1cblxuICBAaWYgJG9wZXJhdG9yID09ICc+JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgKyAkaW50ZXJ2YWw7XG4gIH0gQGVsc2UgaWYgJG9wZXJhdG9yID09ICc8JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLSAkaW50ZXJ2YWw7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuXG4vLy9cbi8vLyBQYXJzZSBhbiBleHByZXNzaW9uIHRvIHJldHVybiBhIHZhbGlkIG1lZGlhLXF1ZXJ5IGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gcGFyc2Vcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBWYWxpZCBtZWRpYSBxdWVyeVxuLy8vXG5AZnVuY3Rpb24gcGFyc2UtZXhwcmVzc2lvbigkZXhwcmVzc2lvbikge1xuICAvLyBJZiBpdCBpcyBwYXJ0IG9mICRtZWRpYS1leHByZXNzaW9ucywgaXQgaGFzIG5vIG9wZXJhdG9yXG4gIC8vIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCB0byBnbyBhbnkgZnVydGhlciwganVzdCByZXR1cm4gdGhlIHZhbHVlXG4gIEBpZiBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pO1xuICB9XG5cbiAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbik7XG4gICRkaW1lbnNpb246IGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG5cbiAgQHJldHVybiAnKCN7JHByZWZpeH0tI3skZGltZW5zaW9ufTogI3skdmFsdWV9KSc7XG59XG5cbi8vL1xuLy8vIFNsaWNlIGAkbGlzdGAgYmV0d2VlbiBgJHN0YXJ0YCBhbmQgYCRlbmRgIGluZGV4ZXNcbi8vL1xuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vXG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCAtIExpc3QgdG8gc2xpY2Vcbi8vLyBAcGFyYW0ge051bWJlcn0gJHN0YXJ0IFsxXSAtIFN0YXJ0IGluZGV4XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRlbmQgW2xlbmd0aCgkbGlzdCldIC0gRW5kIGluZGV4XG4vLy9cbi8vLyBAcmV0dXJuIHtMaXN0fSBTbGljZWQgbGlzdFxuLy8vXG5AZnVuY3Rpb24gc2xpY2UoJGxpc3QsICRzdGFydDogMSwgJGVuZDogbGVuZ3RoKCRsaXN0KSkge1xuICBAaWYgbGVuZ3RoKCRsaXN0KSA8IDEgb3IgJHN0YXJ0ID4gJGVuZCB7XG4gICAgQHJldHVybiAoKTtcbiAgfVxuXG4gICRyZXN1bHQ6ICgpO1xuXG4gIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgbnRoKCRsaXN0LCAkaSkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG4vLy8vXG4vLy8gU3RyaW5nIHRvIG51bWJlciBjb252ZXJ0ZXJcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBDYXN0cyBhIHN0cmluZyBpbnRvIGEgbnVtYmVyXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYmUgcGFyc2VkXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9XG4vLy9cbkBmdW5jdGlvbiB0by1udW1iZXIoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ251bWJlcicge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnc3RyaW5nJyB7XG4gICAgJF86IGltLWxvZygnVmFsdWUgZm9yIGB0by1udW1iZXJgIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgfVxuXG4gICRmaXJzdC1jaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsIDEsIDEpO1xuICAkcmVzdWx0OiAwO1xuICAkZGlnaXRzOiAwO1xuICAkbWludXM6ICgkZmlyc3QtY2hhcmFjdGVyID09ICctJyk7XG4gICRudW1iZXJzOiAoJzAnOiAwLCAnMSc6IDEsICcyJzogMiwgJzMnOiAzLCAnNCc6IDQsICc1JzogNSwgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5KTtcblxuICAvLyBSZW1vdmUgKy8tIHNpZ24gaWYgcHJlc2VudCBhdCBmaXJzdCBjaGFyYWN0ZXJcbiAgQGlmICgkZmlyc3QtY2hhcmFjdGVyID09ICcrJyBvciAkZmlyc3QtY2hhcmFjdGVyID09ICctJykge1xuICAgICR2YWx1ZTogc3RyLXNsaWNlKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIHN0ci1sZW5ndGgoJHZhbHVlKSB7XG4gICAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgJGksICRpKTtcblxuICAgIEBpZiBub3QgKGluZGV4KG1hcC1rZXlzKCRudW1iZXJzKSwgJGNoYXJhY3Rlcikgb3IgJGNoYXJhY3RlciA9PSAnLicpIHtcbiAgICAgIEByZXR1cm4gdG8tbGVuZ3RoKGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpLCBzdHItc2xpY2UoJHZhbHVlLCAkaSkpXG4gICAgfVxuXG4gICAgQGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcbiAgICAgICRkaWdpdHM6IDE7XG4gICAgfSBAZWxzZSBpZiAkZGlnaXRzID09IDAge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCAqIDEwICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3Rlcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkZGlnaXRzOiAkZGlnaXRzICogMTA7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3RlcikgLyAkZGlnaXRzO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XG59XG5cblxuLy8vXG4vLy8gQWRkIGAkdW5pdGAgdG8gYCR2YWx1ZWBcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBhZGQgdW5pdCB0b1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdW5pdCAtIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdW5pdFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIGAkdmFsdWVgIGV4cHJlc3NlZCBpbiBgJHVuaXRgXG4vLy9cbkBmdW5jdGlvbiB0by1sZW5ndGgoJHZhbHVlLCAkdW5pdCkge1xuICAkdW5pdHM6ICgncHgnOiAxcHgsICdjbSc6IDFjbSwgJ21tJzogMW1tLCAnJSc6IDElLCAnY2gnOiAxY2gsICdwYyc6IDFwYywgJ2luJzogMWluLCAnZW0nOiAxZW0sICdyZW0nOiAxcmVtLCAncHQnOiAxcHQsICdleCc6IDFleCwgJ3Z3JzogMXZ3LCAndmgnOiAxdmgsICd2bWluJzogMXZtaW4sICd2bWF4JzogMXZtYXgpO1xuXG4gIEBpZiBub3QgaW5kZXgobWFwLWtleXMoJHVuaXRzKSwgJHVuaXQpIHtcbiAgICAkXzogaW0tbG9nKCdJbnZhbGlkIHVuaXQgYCN7JHVuaXR9YC4nKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlICogbWFwLWdldCgkdW5pdHMsICR1bml0KTtcbn1cblxuLy8vXG4vLy8gVGhpcyBtaXhpbiBhaW1zIGF0IHJlZGVmaW5pbmcgdGhlIGNvbmZpZ3VyYXRpb24ganVzdCBmb3IgdGhlIHNjb3BlIG9mXG4vLy8gdGhlIGNhbGwuIEl0IGlzIGhlbHBmdWwgd2hlbiBoYXZpbmcgYSBjb21wb25lbnQgbmVlZGluZyBhbiBleHRlbmRlZFxuLy8vIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBjdXN0b20gYnJlYWtwb2ludHMgKHJlZmVycmVkIHRvIGFzIHR3ZWFrcG9pbnRzKVxuLy8vIGZvciBpbnN0YW5jZS5cbi8vL1xuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vha3BvaW50cyBbKCldIC0gTWFwIG9mIHR3ZWFrcG9pbnRzIHRvIGJlIG1lcmdlZCB3aXRoIGAkYnJlYWtwb2ludHNgXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vhay1tZWRpYS1leHByZXNzaW9ucyBbKCldIC0gTWFwIG9mIHR3ZWFrZWQgbWVkaWEgZXhwcmVzc2lvbnMgdG8gYmUgbWVyZ2VkIHdpdGggYCRtZWRpYS1leHByZXNzaW9uYFxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIGJyZWFrcG9pbnRzIHdpdGggYSB0d2Vha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCkpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgbWVkaWEgZXhwcmVzc2lvbnMgd2l0aCBhIGN1c3RvbSBvbmVcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgYm90aCBjb25maWd1cmF0aW9uIG1hcHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSwgKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG5AbWl4aW4gbWVkaWEtY29udGV4dCgkdHdlYWtwb2ludHM6ICgpLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgpKSB7XG4gIC8vIFNhdmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGdsb2JhbC1icmVha3BvaW50czogJGJyZWFrcG9pbnRzO1xuICAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zOiAkbWVkaWEtZXhwcmVzc2lvbnM7XG5cbiAgLy8gVXBkYXRlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRicmVha3BvaW50czogbWFwLW1lcmdlKCRicmVha3BvaW50cywgJHR3ZWFrcG9pbnRzKSAhZ2xvYmFsO1xuICAkbWVkaWEtZXhwcmVzc2lvbnM6IG1hcC1tZXJnZSgkbWVkaWEtZXhwcmVzc2lvbnMsICR0d2Vhay1tZWRpYS1leHByZXNzaW9ucykgIWdsb2JhbDtcblxuICBAY29udGVudDtcblxuICAvLyBSZXN0b3JlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRicmVha3BvaW50czogJGdsb2JhbC1icmVha3BvaW50cyAhZ2xvYmFsO1xuICAkbWVkaWEtZXhwcmVzc2lvbnM6ICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnMgIWdsb2JhbDtcbn1cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgcHVibGljIGV4cG9zZWQgQVBJXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gYSBsaXN0IG9mIGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHNpbmdsZSBzZXQgYnJlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCB0d28gc2V0IGJyZWFrcG9pbnRzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD10YWJsZXQnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzU4cHgnLCAnPDg1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBzZXQgYnJlYWtwb2ludHMgd2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+ZGVza3RvcCcsICc8PTEzNTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzdGF0aWMgZXhwcmVzc2lvblxuLy8vICBAaW5jbHVkZSBtZWRpYSgncmV0aW5hMngnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBNaXhpbmcgZXZlcnl0aGluZ1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNTBweCcsICc8dGFibGV0JywgJ3JldGluYTN4JykgeyB9XG4vLy9cbkBtaXhpbiBtZWRpYSgkY29uZGl0aW9ucy4uLikge1xuICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gIEBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPT0gMCkgb3JcbiAgICAgIChub3QgJGltLW1lZGlhLXN1cHBvcnQgYW5kIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH0gQGVsc2UgaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID4gMCkge1xuICAgIEBtZWRpYSAje3VucXVvdGUocGFyc2UtZXhwcmVzc2lvbihudGgoJGNvbmRpdGlvbnMsIDEpKSl9IHtcbiAgICAgIC8vIFJlY3Vyc2l2ZSBjYWxsXG4gICAgICBAaW5jbHVkZSBtZWRpYShzbGljZSgkY29uZGl0aW9ucywgMikuLi4pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0IFwiLi4vdGhlbWUvZ2VuZXJhbC5zY3NzXCI7XHJcblxyXG5uYXYge1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgYmFja2dyb3VuZDogJGdyZXk7XHJcbiAgLmNhdGVnb3J5LWltYWdlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIC8vIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHBpbms7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXYtY29sdW1ucyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTI1cHgpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDAgMzJweDtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD02NTRweFwiKSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3ViLW5hdiB7XHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdi1jb2x1bW4ge1xyXG4gICAgICB3aWR0aDogNDUlO1xyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9NjU0cHhcIikge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDU1JTtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9NjU0cHhcIikge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5uYXYtbGFiZWwge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2LXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzU4NTg1ODtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm5hdi1pbmZvcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PTY1NHB4XCIpIHtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1pbmZvIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgICAgICAgIC5uYXYtaW5mby1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm5hdi1saW5rcyB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi40cmVtO1xyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS42cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]
        }, {
          type: _services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]
        }];
      }, {
        menuState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/aboutus-page/aboutus-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/aboutus-page/aboutus-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: AboutusPageComponent */

  /***/
  function srcAppPagesAboutusPageAboutusPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusPageComponent", function () {
      return AboutusPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutusPageComponent = /*#__PURE__*/function () {
      function AboutusPageComponent() {
        _classCallCheck(this, AboutusPageComponent);
      }

      _createClass(AboutusPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusPageComponent;
    }();

    AboutusPageComponent.ɵfac = function AboutusPageComponent_Factory(t) {
      return new (t || AboutusPageComponent)();
    };

    AboutusPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutusPageComponent,
      selectors: [["app-aboutus-page"]],
      decls: 2,
      vars: 0,
      template: function AboutusPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "aboutus-page works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0dXMtcGFnZS9hYm91dHVzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutus-page',
          templateUrl: './aboutus-page.component.html',
          styleUrls: ['./aboutus-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/banner/banner.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/banner/banner.component.ts ***!
    \**************************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppPagesBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);

        this.animationComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BannerComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var tl = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]({
            paused: true,
            reversed: false
          });
          tl.from('.line span', 1.8, {
            y: 100,
            ease: 'power4.out',
            delay: 1,
            skewY: 7,
            stagger: {
              amount: 1
            }
          });
          this.animationComplete.emit(tl);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      inputs: {
        vh: "vh"
      },
      outputs: {
        animationComplete: "animationComplete"
      },
      decls: 10,
      vars: 2,
      consts: [[1, "main"], [1, "container"], [1, "row"], [1, "line"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Learn. Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Evolve.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.vh / 2 + "px");
        }
      },
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.main[_ngcontent-%COMP%] {\n  height: 50vh;\n  background-color: white;\n  box-sizing: border-box;\n}\n\n.main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  flex-direction: column;\n  justify-content: center;\n}\n\n.main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  line-height: 4.2rem;\n  font-weight: 700;\n  z-index: 10;\n  color: white;\n  mix-blend-mode: difference;\n  margin-top: 55px;\n  margin-bottom: 0;\n}\n\n@media (max-width: 768px) {\n  .main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n    line-height: 3rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-top: 72px;\n    font-size: 1.7rem;\n    line-height: 2.2rem;\n  }\n}\n\n.main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  height: 56px;\n  position: relative;\n  overflow: hidden;\n}\n\n@media (max-width: 768px) {\n  .main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n    height: 48px;\n  }\n}\n\n@media (max-width: 425px) {\n  .main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n    height: 32px;\n  }\n}\n\n.main[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFubmVyL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9zcmNcXGFwcFxcdGhlbWVcXGdlbmVyYWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmFubmVyL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9ub2RlX21vZHVsZXNcXGluY2x1ZGUtbWVkaWFcXGRpc3RcXF9pbmNsdWRlLW1lZGlhLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jhbm5lci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vc3JjXFxhcHBcXHBhZ2VzXFxiYW5uZXJcXGJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURlQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDWkY7O0FDdWlCSTtFRi9oQko7SUFNSSxhQUFBO0lBQ0EsaUJBQUE7RUNWRjtBQUNGOztBQ2lpQkk7RUYvaEJKO0lBVUksYUFBQTtJQUNBLGlCQUFBO0VDUkY7QUFDRjs7QUMyaEJJO0VGL2hCSjtJQWNJLFdBQUE7SUFDQSxlQUFBO0VDTkY7QUFDRjs7QURPRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xKOztBQ2doQkk7RUY5Z0JGO0lBS0ksZUFBQTtFQ0hKO0FBQ0Y7O0FES0U7RUFDRSxtQkFBQTtBQ0hKOztBREtFO0VBQ0UsOEJBQUE7QUNISjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FES0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRW5EQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FGc0RGOztBRXJERTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUZ1REo7O0FFdERJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRndETjs7QUN3ZUk7RUN4aUJBO0lBVUksaUJBQUE7SUFDQSxpQkFBQTtFRjBETjtBQUNGOztBQ2tlSTtFQ3hpQkE7SUFjSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7RUY0RE47QUFDRjs7QUUzRE07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGNkRSOztBQ3FkSTtFQ3RoQkU7SUFNSSxZQUFBO0VGK0RSO0FBQ0Y7O0FDZ2RJO0VDdGhCRTtJQVNJLFlBQUE7RUZpRVI7QUFDRjs7QUVoRVE7RUFDRSxrQkFBQTtBRmtFViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2luY2x1ZGUtbWVkaWEvZGlzdC9pbmNsdWRlLW1lZGlhXCI7XHJcblxyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4keWVsbG93OiByZ2IoMjQzLCAyNDMsIDIwNSk7XHJcbiRncmV5OiByZ2JhKDEwMCwgOTcsIDk3LCAwLjUxNCk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICBcInBob25lXCI6IDQyNXB4LFxyXG4gIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gIFwiZGVza3RvcFwiOiAxMzY2cHgsXHJcbiAgXCJMR2Rlc2t0b3BcIjogMTkyMHB4LFxyXG4pO1xyXG5cclxuLnBhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTU2MHB4O1xyXG4gIG1pbi13aWR0aDogMTU2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTU2MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICAgIG1pbi13aWR0aDogMTA4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTA4MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52LWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTU2MHB4O1xuICBtaW4td2lkdGg6IDE1NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTYwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyODBweDtcbiAgICBtaW4td2lkdGg6IDEyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTA4MHB4O1xuICAgIG1pbi13aWR0aDogMTA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRhaW5lciAucm93IHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnYtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lci1mbHVpZCAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFpbiB7XG4gIGhlaWdodDogNTB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubWFpbiAucm93IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbiAucm93IGgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBsaW5lLWhlaWdodDogNC4ycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB6LWluZGV4OiAxMDtcbiAgY29sb3I6IHdoaXRlO1xuICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcbiAgbWFyZ2luLXRvcDogNTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubWFpbiAucm93IGgyIHtcbiAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5tYWluIC5yb3cgaDIge1xuICAgIG1hcmdpbi10b3A6IDcycHg7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbiAgfVxufVxuLm1haW4gLnJvdyBoMiAubGluZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1haW4gLnJvdyBoMiAubGluZSB7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLm1haW4gLnJvdyBoMiAubGluZSB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICB9XG59XG4ubWFpbiAucm93IGgyIC5saW5lIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgICAgICAgICAgaHR0cDovL2luY2x1ZGUtbWVkaWEuY29tXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEh1Z28gR2lyYXVkZWwgKEBodWdvZ2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuXG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIGxpYnJhcnkgcHVibGljIGNvbmZpZ3VyYXRpb25cbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIGJyZWFrcG9pbnQgd2l0aCB0aGUgbGFiZWwgYHBob25lYFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XG4vLy9cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiAzMjBweCxcbiAgJ3RhYmxldCc6IDc2OHB4LFxuICAnZGVza3RvcCc6IDEwMjRweFxuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBzdGF0aWMgZXhwcmVzc2lvbnMgb3IgbWVkaWEgdHlwZXNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbic6ICdzY3JlZW4nKTtcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4vLy8gICAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSknXG4vLy8gICk7XG4vLy9cbiRtZWRpYS1leHByZXNzaW9uczogKFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXG4gICdwcmludCc6ICdwcmludCcsXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgJ3BvcnRyYWl0JzogJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJyxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBEZWZpbmVzIGEgbnVtYmVyIHRvIGJlIGFkZGVkIG9yIHN1YnRyYWN0ZWQgZnJvbSBlYWNoIHVuaXQgd2hlbiBkZWNsYXJpbmcgYnJlYWtwb2ludHMgd2l0aCBleGNsdXNpdmUgaW50ZXJ2YWxzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MTI4cHgnKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDEyOXB4KSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBlbXMgaXMgZGVmaW5lZCBhcyBgMC4wMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIwZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHJlbXMgaXMgZGVmaW5lZCBhcyBgMC4xYCBieSBkZWZhdWx0LCB0byBiZSB1c2VkIHdpdGggYGZvbnQtc2l6ZTogNjIuNSU7YFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIuMHJlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMi4xcmVtKSB7fVxuLy8vXG4kdW5pdC1pbnRlcnZhbHM6IChcbiAgJ3B4JzogMSxcbiAgJ2VtJzogMC4wMSxcbiAgJ3JlbSc6IDAuMSxcbiAgJyc6IDBcbikgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xuLy8vIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllcy5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuJGltLW1lZGlhLXN1cHBvcnQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggYnJlYWtwb2ludCB0byBlbXVsYXRlIHdoZW4gc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBkaXNhYmxlZC4gTWVkaWEgcXVlcmllcyB0aGF0IHN0YXJ0IGF0IG9yXG4vLy8gaW50ZXJjZXB0IHRoZSBicmVha3BvaW50IHdpbGwgYmUgZGlzcGxheWVkLCBhbnkgb3RoZXJzIHdpbGwgYmUgaWdub3JlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAndGFibGV0Jztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCcgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggbWVkaWEgZXhwcmVzc2lvbnMgYXJlIGFsbG93ZWQgaW4gYW4gZXhwcmVzc2lvbiBmb3IgaXQgdG8gYmUgdXNlZCB3aGVuIG1lZGlhIHF1ZXJpZXNcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGFuZCBjb250YWlucyBvbmx5IGFjY2VwdGVkIG1lZGlhIGV4cHJlc3Npb25zXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAgLmZvbyB7XG4vLy8gICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYnV0IGNvbnRhaW5zIGEgbWVkaWEgZXhwcmVzc2lvbiB0aGF0IGlzIG5vdCBhY2NlcHRlZFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicsICdwb3J0cmFpdCcsICdsYW5kc2NhcGUnKSAhZGVmYXVsdDtcblxuLy8vL1xuLy8vIENyb3NzLWVuZ2luZSBsb2dnaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIENhc3RzIGEgc3RyaW5nIGludG8gYSBudW1iZXJcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBiZSBwYXJzZWRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn1cbi8vL1xuQGZ1bmN0aW9uIHRvLW51bWJlcigkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpICE9ICdzdHJpbmcnIHtcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcbiAgJG51bWJlcnM6ICgnMCc6IDAsICcxJzogMSwgJzInOiAyLCAnMyc6IDMsICc0JzogNCwgJzUnOiA1LCAnNic6IDYsICc3JzogNywgJzgnOiA4LCAnOSc6IDkpO1xuXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxuICBAaWYgKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJysnIG9yICRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKSB7XG4gICAgJHZhbHVlOiBzdHItc2xpY2UoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkdmFsdWUpIHtcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xuXG4gICAgQGlmIG5vdCAoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcbiAgICB9XG5cbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xuICAgICAgJGRpZ2l0czogMTtcbiAgICB9IEBlbHNlIGlmICRkaWdpdHMgPT0gMCB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRkaWdpdHM6ICRkaWdpdHMgKiAxMDtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KTtcbn1cblxuXG4vLy9cbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGFkZCB1bml0IHRvXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gYCR2YWx1ZWAgZXhwcmVzc2VkIGluIGAkdW5pdGBcbi8vL1xuQGZ1bmN0aW9uIHRvLWxlbmd0aCgkdmFsdWUsICR1bml0KSB7XG4gICR1bml0czogKCdweCc6IDFweCwgJ2NtJzogMWNtLCAnbW0nOiAxbW0sICclJzogMSUsICdjaCc6IDFjaCwgJ3BjJzogMXBjLCAnaW4nOiAxaW4sICdlbSc6IDFlbSwgJ3JlbSc6IDFyZW0sICdwdCc6IDFwdCwgJ2V4JzogMWV4LCAndncnOiAxdncsICd2aCc6IDF2aCwgJ3ZtaW4nOiAxdm1pbiwgJ3ZtYXgnOiAxdm1heCk7XG5cbiAgQGlmIG5vdCBpbmRleChtYXAta2V5cygkdW5pdHMpLCAkdW5pdCkge1xuICAgICRfOiBpbS1sb2coJ0ludmFsaWQgdW5pdCBgI3skdW5pdH1gLicpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWUgKiBtYXAtZ2V0KCR1bml0cywgJHVuaXQpO1xufVxuXG4vLy9cbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2Zcbi8vLyB0aGUgY2FsbC4gSXQgaXMgaGVscGZ1bCB3aGVuIGhhdmluZyBhIGNvbXBvbmVudCBuZWVkaW5nIGFuIGV4dGVuZGVkXG4vLy8gY29uZmlndXJhdGlvbiBzdWNoIGFzIGN1c3RvbSBicmVha3BvaW50cyAocmVmZXJyZWQgdG8gYXMgdHdlYWtwb2ludHMpXG4vLy8gZm9yIGluc3RhbmNlLlxuLy8vXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9nZW5lcmFsLnNjc3NcIjtcclxuXHJcbi5tYWluIHtcclxuICBoZWlnaHQ6IDUwdmg7IC8vZmFsbGJhY2sgb3B0aW9uXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAucm93IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogNC4ycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTtcclxuICAgICAgbWFyZ2luLXRvcDogNTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3MnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxpbmUge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gLmJ0bi1yb3cge1xyXG4gICAgLy8gICB3aWR0aDogMjU2cHg7XHJcbiAgICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8vICAgei1pbmRleDogMjtcclxuICAgIC8vICAgYSB7XHJcbiAgICAvLyAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAvLyAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy8gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC8vICAgICBAaW5jbHVkZSBtZWRpYShcIjw9dGFibGV0XCIpIHtcclxuICAgIC8vICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgLy8gICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHN2ZyB7XHJcbiAgICAvLyAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIC8vICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgLy8gICAgICAgcGFkZGluZzogMTJweDtcclxuICAgIC8vICAgICAgIGhlaWdodDogMjRweDtcclxuICAgIC8vICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgLy8gICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAvLyAgICAgICB0cmFuc2l0aW9uOiAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgLy8gICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAvLyAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgIC8vICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAvLyAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAvLyAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgIC8vICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAvLyAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgJjpob3ZlciB7XHJcbiAgICAvLyAgICAgICBzdmcge1xyXG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIC8vICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.scss']
        }]
      }], function () {
        return [];
      }, {
        vh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/course-detail-page/course-detail-page.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/course-detail-page/course-detail-page.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CourseDetailPageComponent */

  /***/
  function srcAppPagesCourseDetailPageCourseDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseDetailPageComponent", function () {
      return CourseDetailPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dialog-box/dialog-box.component */
    "./src/app/pages/course-detail-page/dialog-box/dialog-box.component.ts");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var src_app_services_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/content.service */
    "./src/app/services/content.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var _c0 = ["drawer"];

    function CourseDetailPageComponent_mat_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var language_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r6, " ");
      }
    }

    function CourseDetailPageComponent_mat_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var class_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", class_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", class_r7, " ");
      }
    }

    function CourseDetailPageComponent_mat_option_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var language_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r8, " ");
      }
    }

    function CourseDetailPageComponent_mat_option_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var class_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", class_r9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", class_r9, " ");
      }
    }

    function CourseDetailPageComponent_div_63_mat_expansion_panel_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailPageComponent_div_63_mat_expansion_panel_1_div_5_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var content_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r14.onClick($event, content_r13.data);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var content_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", content_r13.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](content_r13.data.name);
      }
    }

    function CourseDetailPageComponent_div_63_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CourseDetailPageComponent_div_63_mat_expansion_panel_1_div_5_Template, 5, 2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var level_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](level_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.getContentByLevel(level_r10));
      }
    }

    function CourseDetailPageComponent_div_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CourseDetailPageComponent_div_63_mat_expansion_panel_1_Template, 6, 3, "mat-expansion-panel", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var level_r10 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.getContentByLevel(level_r10).length > 0);
      }
    }

    var CourseDetailPageComponent = /*#__PURE__*/function () {
      function CourseDetailPageComponent(contentService, snackbar, activatedRoute, matDialog) {
        var _this3 = this;

        _classCallCheck(this, CourseDetailPageComponent);

        this.contentService = contentService;
        this.snackbar = snackbar;
        this.activatedRoute = activatedRoute;
        this.matDialog = matDialog;
        this.languageFilter = "English";
        this.classFilter = "All";
        this.audienceFilter = "student";
        this.levels = ['basic', 'intermediary', 'advanced'];
        this.iconType = ['scorm', 'pdf', 'youtube', 'word'];
        this.activatedRoute.params.subscribe(function (params) {
          _this3.categoryId = parseInt(params['id']);

          _this3.contentService.getSubTopicById(_this3.categoryId).subscribe(function (subTopic) {
            _this3.subTopic = subTopic;

            _this3.clearPrevStateAndSetDefault();

            _this3.loadFilters();

            _this3.distributeContent();
          });
        });
      }

      _createClass(CourseDetailPageComponent, [{
        key: "clearPrevStateAndSetDefault",
        value: function clearPrevStateAndSetDefault() {
          this.languageFilter = "English";
          this.audienceFilter = "student";
          this.classFilter = "All";
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadFilters",
        value: function loadFilters() {
          var languages = new Set();
          var classes = new Set();

          var _iterator = _createForOfIteratorHelper(this.subTopic.contents),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var content = _step.value;
              languages.add(content.language);

              var _iterator2 = _createForOfIteratorHelper(content.classes),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var cls = _step2.value;
                  classes.add(cls.name);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          classes.add('All');
          this.languages = Array.from(languages).sort();
          this.classes = Array.from(classes).sort();
        }
      }, {
        key: "isEligibleAfterFiltering",
        value: function isEligibleAfterFiltering(content) {
          if (content.audience != this.audienceFilter && content.audience != 'both') return false;
          if (!this.isClassEligible(content.classes)) return false;
          if (content.language != this.languageFilter) return false;
          return true;
        }
      }, {
        key: "isClassEligible",
        value: function isClassEligible(classes) {
          var _iterator3 = _createForOfIteratorHelper(classes),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var cls = _step3.value;
              if (cls.name == this.classFilter || this.classFilter == 'All') return true;
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return false;
        }
      }, {
        key: "assignContentByLevel",
        value: function assignContentByLevel(content) {
          if (content.level == 'basic') {
            this.basic.push({
              data: content,
              icon: this.getIcon(content.type)
            });
          } else if (content.level == 'intermediary') {
            this.intermediary.push({
              data: content,
              icon: this.getIcon(content.type)
            });
          } else {
            this.advanced.push({
              data: content,
              icon: this.getIcon(content.type)
            });
          }
        }
      }, {
        key: "distributeContent",
        value: function distributeContent() {
          this.basic = [];
          this.intermediary = [];
          this.advanced = [];

          var _iterator4 = _createForOfIteratorHelper(this.subTopic.contents),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var content = _step4.value;

              if (this.isEligibleAfterFiltering(content)) {
                this.assignContentByLevel(content);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }, {
        key: "getContentByLevel",
        value: function getContentByLevel(level) {
          if (level == 'basic') return this.basic;else if (level == 'intermediary') return this.intermediary;else return this.advanced;
        }
      }, {
        key: "onClick",
        value: function onClick(event, content) {
          if (content == null) {
            this.snackbar.open("Data not present");
          } else {
            var url = content.url;
            if (content.type == 'word') url = 'https://docs.google.com/viewer?url=' + content.url + '&embedded=true';
            this.loadDialogBox(url, content.name);
          }
        }
      }, {
        key: "getIcon",
        value: function getIcon(type) {
          if (type == "scorm") {
            return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCogs"];
          }

          if (type == "pdf") {
            return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFilePdf"];
          }

          if (type == "youtube") {
            return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faVideo"];
          }

          if (type == "word") {
            return _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileWord"];
          }
        }
      }, {
        key: "loadDialogBox",
        value: function loadDialogBox(link, desc) {
          var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.panelClass = 'myapp-no-padding-dialog';
          dialogConfig.data = {
            url: link,
            title: desc
          };
          this.matDialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_2__["DialogBoxComponent"], dialogConfig);
        }
      }, {
        key: "onNavBarOpen",
        value: function onNavBarOpen() {
          document.getElementById('mobile-nav-panel').style.height = '45vh';
          this.sidenav.toggle();
        }
      }, {
        key: "onNavBarClose",
        value: function onNavBarClose() {
          document.getElementById('mobile-nav-panel').style.height = 'fit-content';
          this.sidenav.toggle();
        }
      }]);

      return CourseDetailPageComponent;
    }();

    CourseDetailPageComponent.ɵfac = function CourseDetailPageComponent_Factory(t) {
      return new (t || CourseDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    CourseDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CourseDetailPageComponent,
      selectors: [["app-course-detail-page"]],
      viewQuery: function CourseDetailPageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        }
      },
      decls: 64,
      vars: 23,
      consts: [[1, "page"], [1, "container"], [1, "row"], [1, "course"], [1, "heading"], [1, "banner-image", 3, "src"], [1, "text"], [1, "topic-name"], [1, "subtopic-name"], [1, "main-filter-panel"], [1, "main-filter"], ["appearance", "fill"], [3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "main-btn-group", 3, "ngModel", "ngModelChange", "change"], ["value", "student"], ["value", "teacher"], ["id", "mobile-nav-panel", 1, "mobile-nav-panel"], ["mode", "side", 1, "drawer"], ["drawer", ""], [1, "mobile-filter-panel"], [1, "mobile-btn-group", 3, "ngModel", "ngModelChange", "change"], [1, "mobile-filter"], ["mat-raised-button", "", 1, "closeBtn", 3, "click"], ["id", "navCloseButton", 1, "drawerContent"], [1, "chips"], ["mat-raised-button", "", 3, "click"], ["class", "levels", 4, "ngFor", "ngForOf"], [3, "value"], [1, "levels"], [3, "expanded", 4, "ngIf"], [3, "expanded"], [1, "level"], ["class", "content", 4, "ngFor", "ngForOf"], [1, "content"], ["mat-button", "", 1, "content-btn", 3, "click"], [1, "logo", 3, "icon"]],
      template: function CourseDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseDetailPageComponent_Template_mat_select_ngModelChange_16_listener($event) {
            return ctx.languageFilter = $event;
          })("selectionChange", function CourseDetailPageComponent_Template_mat_select_selectionChange_16_listener() {
            return ctx.distributeContent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CourseDetailPageComponent_mat_option_17_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseDetailPageComponent_Template_mat_select_ngModelChange_21_listener($event) {
            return ctx.classFilter = $event;
          })("selectionChange", function CourseDetailPageComponent_Template_mat_select_selectionChange_21_listener() {
            return ctx.distributeContent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CourseDetailPageComponent_mat_option_22_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-button-toggle-group", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseDetailPageComponent_Template_mat_button_toggle_group_ngModelChange_23_listener($event) {
            return ctx.audienceFilter = $event;
          })("change", function CourseDetailPageComponent_Template_mat_button_toggle_group_change_23_listener() {
            return ctx.distributeContent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-button-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-button-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Teacher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-drawer-container", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-drawer", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-button-toggle-group", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseDetailPageComponent_Template_mat_button_toggle_group_ngModelChange_32_listener($event) {
            return ctx.audienceFilter = $event;
          })("change", function CourseDetailPageComponent_Template_mat_button_toggle_group_change_32_listener() {
            return ctx.distributeContent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-button-toggle", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-button-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Teacher");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Language");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseDetailPageComponent_Template_mat_select_ngModelChange_41_listener($event) {
            return ctx.languageFilter = $event;
          })("selectionChange", function CourseDetailPageComponent_Template_mat_select_selectionChange_41_listener() {
            return ctx.distributeContent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CourseDetailPageComponent_mat_option_42_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CourseDetailPageComponent_Template_mat_select_ngModelChange_46_listener($event) {
            return ctx.classFilter = $event;
          })("selectionChange", function CourseDetailPageComponent_Template_mat_select_selectionChange_46_listener() {
            return ctx.distributeContent();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CourseDetailPageComponent_mat_option_47_Template, 2, 2, "mat-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailPageComponent_Template_button_click_48_listener() {
            return ctx.onNavBarClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-drawer-content", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-chip-list", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](57, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-chip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDetailPageComponent_Template_button_click_61_listener() {
            return ctx.onNavBarOpen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CourseDetailPageComponent_div_63_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.subTopic.image.formats.medium.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subTopic.topic.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subTopic.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.languageFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.classFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.audienceFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.audienceFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.languageFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.classFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 17, ctx.languageFilter));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](57, 19, ctx.classFilter));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 21, ctx.audienceFilter));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.levels);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggle"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatDrawer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatDrawerContent"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChip"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__["MatExpansionPanelTitle"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FaIconComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 15vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25vh;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  opacity: 0.8;\n  -o-object-fit: cover;\n     object-fit: cover;\n  background: grey;\n}\n\n@media (max-width: 425px) {\n  .page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .banner-image[_ngcontent-%COMP%] {\n    width: 100vw;\n    margin-left: -16px;\n  }\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: black;\n  position: absolute;\n  bottom: 4vh;\n  left: 2vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  padding-left: 1vw;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .topic-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: large;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .subtopic-name[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  text-transform: capitalize;\n  line-height: normal;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .main-filter-panel[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 2vh;\n  justify-content: space-between;\n}\n\n@media (max-width: 425px) {\n  .page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .main-filter-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .main-filter-panel[_ngcontent-%COMP%]   .main-filter[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .main-filter-panel[_ngcontent-%COMP%]   .main-btn-group[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .mobile-nav-panel[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 425px) {\n  .page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .mobile-nav-panel[_ngcontent-%COMP%] {\n    display: flex;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    background: none;\n    margin-top: 4vh;\n    margin-bottom: 3vh;\n    justify-content: flex-end;\n  }\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .mobile-nav-panel[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%] {\n  border: none;\n  padding: 5%;\n  border: 1px solid darkgrey;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .mobile-nav-panel[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .mobile-filter-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .mobile-nav-panel[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .mobile-filter-panel[_ngcontent-%COMP%]   .mobile-btn-group[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .mobile-nav-panel[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .mobile-filter-panel[_ngcontent-%COMP%]   .mobile-filter[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 3vh;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .mobile-nav-panel[_ngcontent-%COMP%]   .drawer[_ngcontent-%COMP%]   .mobile-filter-panel[_ngcontent-%COMP%]   .closeBtn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .mobile-nav-panel[_ngcontent-%COMP%]   .drawerContent[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%] {\n  margin-top: 1vh;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  transition: top ease 0.1s;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 30px;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 2vw;\n  font-size: medium;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .content-btn[_ngcontent-%COMP%]:hover {\n  top: -1vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cnNlLWRldGFpbC1wYWdlL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9zcmNcXGFwcFxcdGhlbWVcXGdlbmVyYWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvY291cnNlLWRldGFpbC1wYWdlL2NvdXJzZS1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY291cnNlLWRldGFpbC1wYWdlL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9ub2RlX21vZHVsZXNcXGluY2x1ZGUtbWVkaWFcXGRpc3RcXF9pbmNsdWRlLW1lZGlhLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvdXJzZS1kZXRhaWwtcGFnZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vc3JjXFxhcHBcXHBhZ2VzXFxjb3Vyc2UtZGV0YWlsLXBhZ2VcXGNvdXJzZS1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNiRjs7QURlQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDWkY7O0FDdWlCSTtFRi9oQko7SUFNSSxhQUFBO0lBQ0EsaUJBQUE7RUNWRjtBQUNGOztBQ2lpQkk7RUYvaEJKO0lBVUksYUFBQTtJQUNBLGlCQUFBO0VDUkY7QUFDRjs7QUMyaEJJO0VGL2hCSjtJQWNJLFdBQUE7SUFDQSxlQUFBO0VDTkY7QUFDRjs7QURPRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0xKOztBQ2doQkk7RUY5Z0JGO0lBS0ksZUFBQTtFQ0hKO0FBQ0Y7O0FES0U7RUFDRSxtQkFBQTtBQ0hKOztBREtFO0VBQ0UsOEJBQUE7QUNISjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSkY7O0FES0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRWxESTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBRnFETjs7QUVuRE07RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUZxRFI7O0FFbkRRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0FGcURWOztBQzBlSTtFQ3BpQkk7SUFRSSxZQUFBO0lBQ0Esa0JBQUE7RUZzRFY7QUFDRjs7QUVuRFE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUZxRFY7O0FFbkRVO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBRnFEWjs7QUVsRFU7RUFDRSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUZvRFo7O0FFL0NNO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBRmlEUjs7QUM0Y0k7RUNoZ0JFO0lBTUksYUFBQTtFRmtEUjtBQUNGOztBRWhEUTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBRmtEVjs7QUUvQ1E7RUFDRSwyQkFBQTtFQUFBLHdCQUFBO0VBQUEsbUJBQUE7QUZpRFY7O0FFN0NNO0VBQ0UsYUFBQTtBRitDUjs7QUM4Ykk7RUM5ZUU7SUFJSSxhQUFBO0lBQ0EsMkJBQUE7SUFBQSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtFRmdEUjtBQUNGOztBRTlDUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUZnRFY7O0FFOUNVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FGZ0RaOztBRTdDWTtFQUNFLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBRitDZDs7QUU1Q1k7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0FGOENkOztBRTNDWTtFQUNFLFdBQUE7QUY2Q2Q7O0FFeENRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FGMENWOztBRXRDTTtFQUNFLGVBQUE7QUZ3Q1I7O0FFdENRO0VBQ0UseUJBQUE7QUZ3Q1Y7O0FFcENVO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7QUZzQ1o7O0FFcENZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUZzQ2Q7O0FFbkNZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBRnFDZDs7QUVsQ1U7RUFDRSxTQUFBO0FGb0NaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY291cnNlLWRldGFpbC1wYWdlL2NvdXJzZS1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L2luY2x1ZGUtbWVkaWFcIjtcclxuXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiR5ZWxsb3c6IHJnYigyNDMsIDI0MywgMjA1KTtcclxuJGdyZXk6IHJnYmEoMTAwLCA5NywgOTcsIDAuNTE0KTtcclxuXHJcbiRicmVha3BvaW50czogKFxyXG4gIFwicGhvbmVcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJkZXNrdG9wXCI6IDEzNjZweCxcclxuICBcIkxHZGVza3RvcFwiOiAxOTIwcHgsXHJcbik7XHJcblxyXG4ucGFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxNTYwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD0xNTYwcHhcIikge1xyXG4gICAgd2lkdGg6IDEyODBweDtcclxuICAgIG1pbi13aWR0aDogMTI4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDgwcHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD0xMDgwcHhcIikge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMzJweDtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnYtY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNTYwcHg7XG4gIG1pbi13aWR0aDogMTU2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE1NjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTI4MHB4O1xuICAgIG1pbi13aWR0aDogMTI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDgwcHg7XG4gICAgbWluLXdpZHRoOiAxMDgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFpbmVyIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY29udGFpbmVyIC5yb3cge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxufVxuLmNvbnRhaW5lciAudi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlIC5yb3cgLmNvdXJzZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5oZWFkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1dmg7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLmhlYWRpbmcgLmJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuODtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnBhZ2UgLnJvdyAuY291cnNlIC5oZWFkaW5nIC5iYW5uZXItaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIH1cbn1cbi5wYWdlIC5yb3cgLmNvdXJzZSAuaGVhZGluZyAudGV4dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDR2aDtcbiAgbGVmdDogMnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLmhlYWRpbmcgLnRleHQgLnRvcGljLW5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5oZWFkaW5nIC50ZXh0IC5zdWJ0b3BpYy1uYW1lIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLm1haW4tZmlsdGVyLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMnZoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnBhZ2UgLnJvdyAuY291cnNlIC5tYWluLWZpbHRlci1wYW5lbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5tYWluLWZpbHRlci1wYW5lbCAubWFpbi1maWx0ZXIge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLm1haW4tZmlsdGVyLXBhbmVsIC5tYWluLWJ0bi1ncm91cCB7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLm1vYmlsZS1uYXYtcGFuZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5wYWdlIC5yb3cgLmNvdXJzZSAubW9iaWxlLW5hdi1wYW5lbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogNHZoO1xuICAgIG1hcmdpbi1ib3R0b206IDN2aDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLm1vYmlsZS1uYXYtcGFuZWwgLmRyYXdlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogNSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5tb2JpbGUtbmF2LXBhbmVsIC5kcmF3ZXIgLm1vYmlsZS1maWx0ZXItcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5tb2JpbGUtbmF2LXBhbmVsIC5kcmF3ZXIgLm1vYmlsZS1maWx0ZXItcGFuZWwgLm1vYmlsZS1idG4tZ3JvdXAge1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLm1vYmlsZS1uYXYtcGFuZWwgLmRyYXdlciAubW9iaWxlLWZpbHRlci1wYW5lbCAubW9iaWxlLWZpbHRlciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXRvcDogM3ZoO1xufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5tb2JpbGUtbmF2LXBhbmVsIC5kcmF3ZXIgLm1vYmlsZS1maWx0ZXItcGFuZWwgLmNsb3NlQnRuIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLm1vYmlsZS1uYXYtcGFuZWwgLmRyYXdlckNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5sZXZlbHMge1xuICBtYXJnaW4tdG9wOiAxdmg7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLmxldmVscyAubGV2ZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5sZXZlbHMgLmNvbnRlbnQgLmNvbnRlbnQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IHRvcCBlYXNlIDAuMXM7XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLmxldmVscyAuY29udGVudCAuY29udGVudC1idG4gLmxvZ28ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuLnBhZ2UgLnJvdyAuY291cnNlIC5sZXZlbHMgLmNvbnRlbnQgLmNvbnRlbnQtYnRuIHNwYW4ge1xuICBwYWRkaW5nLWxlZnQ6IDJ2dztcbiAgZm9udC1zaXplOiBtZWRpdW07XG59XG4ucGFnZSAucm93IC5jb3Vyc2UgLmxldmVscyAuY29udGVudCAuY29udGVudC1idG46aG92ZXIge1xuICB0b3A6IC0xdmg7XG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgICAgICAgICAgaHR0cDovL2luY2x1ZGUtbWVkaWEuY29tXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEh1Z28gR2lyYXVkZWwgKEBodWdvZ2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuXG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIGxpYnJhcnkgcHVibGljIGNvbmZpZ3VyYXRpb25cbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIGJyZWFrcG9pbnQgd2l0aCB0aGUgbGFiZWwgYHBob25lYFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XG4vLy9cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiAzMjBweCxcbiAgJ3RhYmxldCc6IDc2OHB4LFxuICAnZGVza3RvcCc6IDEwMjRweFxuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBzdGF0aWMgZXhwcmVzc2lvbnMgb3IgbWVkaWEgdHlwZXNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbic6ICdzY3JlZW4nKTtcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4vLy8gICAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSknXG4vLy8gICk7XG4vLy9cbiRtZWRpYS1leHByZXNzaW9uczogKFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXG4gICdwcmludCc6ICdwcmludCcsXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgJ3BvcnRyYWl0JzogJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJyxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBEZWZpbmVzIGEgbnVtYmVyIHRvIGJlIGFkZGVkIG9yIHN1YnRyYWN0ZWQgZnJvbSBlYWNoIHVuaXQgd2hlbiBkZWNsYXJpbmcgYnJlYWtwb2ludHMgd2l0aCBleGNsdXNpdmUgaW50ZXJ2YWxzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MTI4cHgnKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDEyOXB4KSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBlbXMgaXMgZGVmaW5lZCBhcyBgMC4wMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIwZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHJlbXMgaXMgZGVmaW5lZCBhcyBgMC4xYCBieSBkZWZhdWx0LCB0byBiZSB1c2VkIHdpdGggYGZvbnQtc2l6ZTogNjIuNSU7YFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIuMHJlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMi4xcmVtKSB7fVxuLy8vXG4kdW5pdC1pbnRlcnZhbHM6IChcbiAgJ3B4JzogMSxcbiAgJ2VtJzogMC4wMSxcbiAgJ3JlbSc6IDAuMSxcbiAgJyc6IDBcbikgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xuLy8vIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllcy5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuJGltLW1lZGlhLXN1cHBvcnQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggYnJlYWtwb2ludCB0byBlbXVsYXRlIHdoZW4gc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBkaXNhYmxlZC4gTWVkaWEgcXVlcmllcyB0aGF0IHN0YXJ0IGF0IG9yXG4vLy8gaW50ZXJjZXB0IHRoZSBicmVha3BvaW50IHdpbGwgYmUgZGlzcGxheWVkLCBhbnkgb3RoZXJzIHdpbGwgYmUgaWdub3JlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAndGFibGV0Jztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCcgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggbWVkaWEgZXhwcmVzc2lvbnMgYXJlIGFsbG93ZWQgaW4gYW4gZXhwcmVzc2lvbiBmb3IgaXQgdG8gYmUgdXNlZCB3aGVuIG1lZGlhIHF1ZXJpZXNcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGFuZCBjb250YWlucyBvbmx5IGFjY2VwdGVkIG1lZGlhIGV4cHJlc3Npb25zXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAgLmZvbyB7XG4vLy8gICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYnV0IGNvbnRhaW5zIGEgbWVkaWEgZXhwcmVzc2lvbiB0aGF0IGlzIG5vdCBhY2NlcHRlZFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicsICdwb3J0cmFpdCcsICdsYW5kc2NhcGUnKSAhZGVmYXVsdDtcblxuLy8vL1xuLy8vIENyb3NzLWVuZ2luZSBsb2dnaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIENhc3RzIGEgc3RyaW5nIGludG8gYSBudW1iZXJcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBiZSBwYXJzZWRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn1cbi8vL1xuQGZ1bmN0aW9uIHRvLW51bWJlcigkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpICE9ICdzdHJpbmcnIHtcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcbiAgJG51bWJlcnM6ICgnMCc6IDAsICcxJzogMSwgJzInOiAyLCAnMyc6IDMsICc0JzogNCwgJzUnOiA1LCAnNic6IDYsICc3JzogNywgJzgnOiA4LCAnOSc6IDkpO1xuXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxuICBAaWYgKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJysnIG9yICRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKSB7XG4gICAgJHZhbHVlOiBzdHItc2xpY2UoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkdmFsdWUpIHtcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xuXG4gICAgQGlmIG5vdCAoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcbiAgICB9XG5cbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xuICAgICAgJGRpZ2l0czogMTtcbiAgICB9IEBlbHNlIGlmICRkaWdpdHMgPT0gMCB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRkaWdpdHM6ICRkaWdpdHMgKiAxMDtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KTtcbn1cblxuXG4vLy9cbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGFkZCB1bml0IHRvXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gYCR2YWx1ZWAgZXhwcmVzc2VkIGluIGAkdW5pdGBcbi8vL1xuQGZ1bmN0aW9uIHRvLWxlbmd0aCgkdmFsdWUsICR1bml0KSB7XG4gICR1bml0czogKCdweCc6IDFweCwgJ2NtJzogMWNtLCAnbW0nOiAxbW0sICclJzogMSUsICdjaCc6IDFjaCwgJ3BjJzogMXBjLCAnaW4nOiAxaW4sICdlbSc6IDFlbSwgJ3JlbSc6IDFyZW0sICdwdCc6IDFwdCwgJ2V4JzogMWV4LCAndncnOiAxdncsICd2aCc6IDF2aCwgJ3ZtaW4nOiAxdm1pbiwgJ3ZtYXgnOiAxdm1heCk7XG5cbiAgQGlmIG5vdCBpbmRleChtYXAta2V5cygkdW5pdHMpLCAkdW5pdCkge1xuICAgICRfOiBpbS1sb2coJ0ludmFsaWQgdW5pdCBgI3skdW5pdH1gLicpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWUgKiBtYXAtZ2V0KCR1bml0cywgJHVuaXQpO1xufVxuXG4vLy9cbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2Zcbi8vLyB0aGUgY2FsbC4gSXQgaXMgaGVscGZ1bCB3aGVuIGhhdmluZyBhIGNvbXBvbmVudCBuZWVkaW5nIGFuIGV4dGVuZGVkXG4vLy8gY29uZmlndXJhdGlvbiBzdWNoIGFzIGN1c3RvbSBicmVha3BvaW50cyAocmVmZXJyZWQgdG8gYXMgdHdlYWtwb2ludHMpXG4vLy8gZm9yIGluc3RhbmNlLlxuLy8vXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9nZW5lcmFsLnNjc3NcIjtcclxuLnBhZ2Uge1xyXG4gIC5yb3cge1xyXG4gICAgLmNvdXJzZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXZoO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDI1dmg7XHJcblxyXG4gICAgICAgIC5iYW5uZXItaW1hZ2Uge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcblxyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDR2aDtcclxuICAgICAgICAgIGxlZnQ6IDJ2dztcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDF2dztcclxuXHJcbiAgICAgICAgICAudG9waWMtbmFtZSB7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnN1YnRvcGljLW5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tYWluLWZpbHRlci1wYW5lbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYWluLWZpbHRlciB7XHJcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWFpbi1idG4tZ3JvdXAge1xyXG4gICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5tb2JpbGUtbmF2LXBhbmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHZoO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kcmF3ZXIge1xyXG4gICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1JTtcclxuICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgZGFya2dyZXk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAubW9iaWxlLWZpbHRlci1wYW5lbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC5tb2JpbGUtYnRuLWdyb3VwIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1vYmlsZS1maWx0ZXIge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzdmg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jbG9zZUJ0biB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kcmF3ZXJDb250ZW50e1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sZXZlbHMge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDF2aDtcclxuXHJcbiAgICAgICAgLmxldmVsIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAuY29udGVudC1idG4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIGVhc2UgMC4xcztcclxuXHJcbiAgICAgICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY29udGVudC1idG46aG92ZXIge1xyXG4gICAgICAgICAgICB0b3A6IC0xdmg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-course-detail-page',
          templateUrl: './course-detail-page.component.html',
          styleUrls: ['./course-detail-page.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_content_service__WEBPACK_IMPORTED_MODULE_4__["ContentService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, {
        sidenav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['drawer']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/course-detail-page/dialog-box/dialog-box.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/course-detail-page/dialog-box/dialog-box.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DialogBoxComponent */

  /***/
  function srcAppPagesCourseDetailPageDialogBoxDialogBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function () {
      return DialogBoxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var DialogBoxComponent = /*#__PURE__*/function () {
      function DialogBoxComponent(dialogRef, data, _sanitizer) {
        _classCallCheck(this, DialogBoxComponent);

        this.dialogRef = dialogRef;
        this._sanitizer = _sanitizer;
        this.url = this._sanitizer.bypassSecurityTrustResourceUrl(data.url);
        ;
        this.title = data.title;
      }

      _createClass(DialogBoxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(event) {
          this.dialogRef.close();
        }
      }]);

      return DialogBoxComponent;
    }();

    DialogBoxComponent.ɵfac = function DialogBoxComponent_Factory(t) {
      return new (t || DialogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    DialogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DialogBoxComponent,
      selectors: [["app-dialog-box"]],
      decls: 7,
      vars: 2,
      consts: [[1, "dialog"], [1, "title"], ["aria-hidden", "false", 1, "close", 3, "click"], ["frameborder", "0", "allowfullscreen", "", 1, "content", 3, "src"]],
      template: function DialogBoxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBoxComponent_Template_mat_icon_click_4_listener($event) {
            return ctx.close($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100vw;\n  height: 100vh;\n  background: white;\n}\n\n.dialog[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  padding-left: 2vw;\n  padding-right: 2vw;\n  padding-top: 4vh;\n  display: flex;\n  direction: row;\n  justify-content: space-between;\n}\n\n.dialog[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 100vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cnNlLWRldGFpbC1wYWdlL2RpYWxvZy1ib3gvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL3NyY1xcYXBwXFx0aGVtZVxcZ2VuZXJhbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb3Vyc2UtZGV0YWlsLXBhZ2UvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb3Vyc2UtZGV0YWlsLXBhZ2UvZGlhbG9nLWJveC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vbm9kZV9tb2R1bGVzXFxpbmNsdWRlLW1lZGlhXFxkaXN0XFxfaW5jbHVkZS1tZWRpYS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb3Vyc2UtZGV0YWlsLXBhZ2UvZGlhbG9nLWJveC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vc3JjXFxhcHBcXHBhZ2VzXFxjb3Vyc2UtZGV0YWlsLXBhZ2VcXGRpYWxvZy1ib3hcXGRpYWxvZy1ib3guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDYkY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1pGOztBQ3VpQkk7RUYvaEJKO0lBTUksYUFBQTtJQUNBLGlCQUFBO0VDVkY7QUFDRjs7QUNpaUJJO0VGL2hCSjtJQVVJLGFBQUE7SUFDQSxpQkFBQTtFQ1JGO0FBQ0Y7O0FDMmhCSTtFRi9oQko7SUFjSSxXQUFBO0lBQ0EsZUFBQTtFQ05GO0FBQ0Y7O0FET0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMSjs7QUNnaEJJO0VGOWdCRjtJQUtJLGVBQUE7RUNISjtBQUNGOztBREtFO0VBQ0UsbUJBQUE7QUNISjs7QURLRTtFQUNFLDhCQUFBO0FDSEo7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0pGOztBREtFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNISjs7QUVwREE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FGdURKOztBRXJESTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7QUZ1RFI7O0FFcERJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUZzRFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3Vyc2UtZGV0YWlsLXBhZ2UvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9pbmNsdWRlLW1lZGlhL2Rpc3QvaW5jbHVkZS1tZWRpYVwiO1xyXG5cclxuJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJHllbGxvdzogcmdiKDI0MywgMjQzLCAyMDUpO1xyXG4kZ3JleTogcmdiYSgxMDAsIDk3LCA5NywgMC41MTQpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJwaG9uZVwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImRlc2t0b3BcIjogMTM2NnB4LFxyXG4gIFwiTEdkZXNrdG9wXCI6IDE5MjBweCxcclxuKTtcclxuXHJcbi5wYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDE1NjBweDtcclxuICBtaW4td2lkdGg6IDE1NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PTE1NjBweFwiKSB7XHJcbiAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD1kZXNrdG9wXCIpIHtcclxuICAgIHdpZHRoOiAxMDgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PTEwODBweFwiKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAzMnB4O1xyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudi1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnNwYWNlLWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1NjBweDtcbiAgbWluLXdpZHRoOiAxNTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTU2MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMjgwcHg7XG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwODBweDtcbiAgICBtaW4td2lkdGg6IDEwODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250YWluZXIgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jb250YWluZXIgLnJvdyB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG59XG4uY29udGFpbmVyIC52LWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXItZmx1aWQgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmRpYWxvZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5kaWFsb2cgLnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAydnc7XG4gIHBhZGRpbmctcmlnaHQ6IDJ2dztcbiAgcGFkZGluZy10b3A6IDR2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kaWFsb2cgLmNvbnRlbnQge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2dlbmVyYWwuc2Nzc1wiO1xyXG4uZGlhbG9nIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMnZ3O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDJ2dztcclxuICAgICAgICBwYWRkaW5nLXRvcDogNHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dzsgXHJcbiAgICB9XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dialog-box',
          templateUrl: './dialog-box.component.html',
          styleUrls: ['./dialog-box.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/featured/featured.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/featured/featured.component.ts ***!
    \******************************************************/

  /*! exports provided: FeaturedComponent */

  /***/
  function srcAppPagesFeaturedFeaturedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeaturedComponent", function () {
      return FeaturedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../constants */
    "./src/app/constants.ts");
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");
    /* harmony import */


    var src_app_services_content_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/content.service */
    "./src/app/services/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _utility_image_preload_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../utility/image-preload.directive */
    "./src/app/utility/image-preload.directive.ts");
    /* harmony import */


    var _svg_arrow_left_arrow_left_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../svg/arrow-left/arrow-left.component */
    "./src/app/svg/arrow-left/arrow-left.component.ts");
    /* harmony import */


    var _svg_arrow_right_arrow_right_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../svg/arrow-right/arrow-right.component */
    "./src/app/svg/arrow-right/arrow-right.component.ts");

    var _c0 = ["placeholder1"];
    var _c1 = ["placeholder2"];

    function FeaturedComponent_div_2_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subTopic_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", subTopic_r4 == null ? null : subTopic_r4.topic.categories[0].name, " - ", subTopic_r4 == null ? null : subTopic_r4.topic.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.slice(subTopic_r4.name));
      }
    }

    function FeaturedComponent_div_2_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeaturedComponent_div_2_div_4_div_2_Template, 5, 3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subTopic_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/course/" + subTopic_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subTopic_r4.topic.categories);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", subTopic_r4.image.formats.small ? subTopic_r4.image.formats.small.url : "assets/images/child.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function FeaturedComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeaturedComponent_div_2_div_4_Template, 6, 3, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.displayedTopics);
      }
    }

    function FeaturedComponent_div_3_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FeaturedComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FeaturedComponent_div_3_div_4_Template, 10, 0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.placeholder);
      }
    }

    function FeaturedComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "arrow-left", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturedComponent_div_5_Template_arrow_left_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onLeftArrowClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "arrow-right", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturedComponent_div_5_Template_arrow_right_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onRightArrowClick($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var FeaturedComponent = /*#__PURE__*/function () {
      function FeaturedComponent(cdr, contentService) {
        _classCallCheck(this, FeaturedComponent);

        this.cdr = cdr;
        this.contentService = contentService;
        this.title = 'Featured Courses';
        this.placeholder = ['', '', ''];
        this.start = 0;
        this.end = 1;
        this.url = _constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL1;
      }

      _createClass(FeaturedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this4 = this;

          this.contentService.getFeaturedSubTopic().subscribe(function (data) {
            if (data[0].subTopics) {
              _this4.subTopics = data[0].subTopics;

              _this4.subTopics.forEach(function (subTopic) {
                if (typeof subTopic.topic === 'number') {
                  _this4.contentService.getTopicById(subTopic.topic).subscribe(function (topic) {
                    subTopic.topic = topic; // this.cdr.detectChanges();
                  });
                }
              });

              _this4.start = 0;
              _this4.end = _this4.subTopics.length;

              _this4.setTopicsDisplay();
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.startAnimation();
        }
      }, {
        key: "onLeftArrowClick",
        value: function onLeftArrowClick(event) {
          event.stopPropagation();

          if (this.start) {
            this.start--;
          } else {
            this.start = this.end - 1;
          }

          this.setTopicsDisplay();
        }
      }, {
        key: "onRightArrowClick",
        value: function onRightArrowClick(event) {
          event.stopPropagation();

          if (this.start >= this.end - 1) {
            this.start = 0;
          } else {
            this.start++;
          }

          this.setTopicsDisplay();
        }
      }, {
        key: "setTopicsDisplay",
        value: function setTopicsDisplay() {
          var next = this.start;
          this.displayedTopics = [];

          for (var index = 0; index <= 2; index++) {
            this.displayedTopics[index] = this.subTopics[next];

            if (next === this.end - 1) {
              next = 0;
            } else {
              next++;
            }
          } // console.log(this.displayedTopics);

        }
      }, {
        key: "startAnimation",
        value: function startAnimation() {
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.pl1.toArray().map(function (el) {
            return el.nativeElement;
          }), 0.5, {
            opacity: 0,
            ease: 'expo.inOut',
            yoyo: true,
            repeat: -1
          });
          gsap__WEBPACK_IMPORTED_MODULE_2__["default"].to(this.pl2.toArray().map(function (el) {
            return el.nativeElement;
          }), 0.5, {
            opacity: 0,
            ease: 'expo.inOut',
            yoyo: true,
            repeat: -1
          });
        }
      }, {
        key: "slice",
        value: function slice(str) {
          var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
          return str.length > len ? str.slice(0, len + 1) + '..' : str;
        }
      }]);

      return FeaturedComponent;
    }();

    FeaturedComponent.ɵfac = function FeaturedComponent_Factory(t) {
      return new (t || FeaturedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]));
    };

    FeaturedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FeaturedComponent,
      selectors: [["app-featured"]],
      viewQuery: function FeaturedComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pl1 = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pl2 = _t);
        }
      },
      inputs: {
        title: "title",
        vh: "vh",
        categories: "categories"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 6,
      vars: 5,
      consts: [[1, "cases"], [1, "container"], ["class", "row", 4, "ngIf"], ["class", "row aaa", 4, "ngIf"], [1, "container", 2, "height", "0"], ["class", "cases-navigation", 4, "ngIf"], [1, "row"], [1, "cases-title"], ["class", "case", 4, "ngFor", "ngForOf"], [1, "case"], ["routerLinkActive", "active", 3, "routerLink"], ["class", "case-details", 4, "ngIf"], [1, "case-image"], ["src", "assets/images/child.jpg"], ["default", "assets/images/child.jpg", 1, "img-hidden", 3, "src"], [1, "case-details"], [1, "category-detail"], [1, "row", "aaa"], [1, "placeholder1"], ["placeholder1", ""], [1, "placeholder2"], ["placeholder2", ""], ["src", "assets/images/placeholder.png"], [1, "cases-navigation"], [1, "cases-arrow", "prev"], [3, "click"], [1, "cases-arrow", "next"]],
      template: function FeaturedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeaturedComponent_div_2_Template, 5, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FeaturedComponent_div_3_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FeaturedComponent_div_5_Template, 5, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.vh / 2 + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayedTopics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.displayedTopics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.displayedTopics);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _utility_image_preload_directive__WEBPACK_IMPORTED_MODULE_6__["ImagePreloadDirective"], _svg_arrow_left_arrow_left_component__WEBPACK_IMPORTED_MODULE_7__["ArrowLeftComponent"], _svg_arrow_right_arrow_right_component__WEBPACK_IMPORTED_MODULE_8__["ArrowRightComponent"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.cases[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  position: relative;\n  margin-bottom: 65px;\n}\n\n.cases[_ngcontent-%COMP%]   .cases-navigation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 42%;\n  width: inherit;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 6;\n  padding: 0 37px;\n  box-sizing: border-box;\n}\n\n@media (max-width: 768px) {\n  .cases[_ngcontent-%COMP%]   .cases-navigation[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .cases-navigation[_ngcontent-%COMP%]   .cases-arrow[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.4);\n  height: 72px;\n  width: 72px;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cases[_ngcontent-%COMP%]   .cases-navigation[_ngcontent-%COMP%]   .cases-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: white;\n  height: 28px;\n  width: 28px;\n}\n\n.cases[_ngcontent-%COMP%]   .cases-navigation[_ngcontent-%COMP%]   .cases-arrow.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n@media (max-width: 768px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cases-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  padding-left: 20px;\n  box-sizing: border-box;\n  font-weight: 400;\n  font-size: 20px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  border-left: thick solid orangered;\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cases-title[_ngcontent-%COMP%] {\n    top: -25px;\n    padding-left: 10px;\n    font-size: 16px;\n    letter-spacing: 1.5px;\n    margin: 0 16px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 33.33333vw;\n  background: black;\n  cursor: pointer;\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]:hover   .case-image[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n@media (max-width: 768px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%] {\n    width: 100vw;\n    min-height: 50vh;\n    padding: 0;\n    position: absolute;\n    z-index: 0;\n  }\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]:nth-of-type(1) {\n    z-index: 1;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 32px;\n  box-sizing: border-box;\n  z-index: 1;\n  position: relative;\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .category-detail[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 500;\n  font-size: 0.8rem;\n  margin-top: 200px;\n  opacity: 1;\n  color: white;\n  font-weight: 600;\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .category-detail[_ngcontent-%COMP%] {\n    margin-top: 230px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .topic-detail[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  margin-top: 10px;\n  opacity: 0.8;\n  color: white;\n  font-weight: 600;\n}\n\n@media (max-width: 1366px) and (min-width: 769px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .topic-detail[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .topic-detail[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    line-height: 2.2rem;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  line-height: 3.4rem;\n  width: 85%;\n  margin-top: 5px;\n  color: white;\n}\n\n@media (max-width: 1366px) and (min-width: 769px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 2.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    line-height: 2.2rem;\n    margin-top: 8px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder1[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  font-size: 1.6rem;\n  opacity: 0.3;\n  width: 90%;\n  color: white;\n  font-weight: 600;\n  background-color: lightgrey;\n}\n\n@media (max-width: 1366px) and (min-width: 769px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder1[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    line-height: 2.2rem;\n    margin-top: 210px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder2[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: lightgrey;\n  opacity: 0.3;\n  font-size: 2.4rem;\n  line-height: 2.8rem;\n  width: 75%;\n  margin-top: 16px;\n  color: white;\n}\n\n@media (max-width: 1366px) and (min-width: 769px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 2.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    line-height: 2.2rem;\n    margin-top: 8px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-image[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  opacity: 0.65;\n  transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-image[_ngcontent-%COMP%]   .image-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-image[_ngcontent-%COMP%]   .image-loaded[_ngcontent-%COMP%] {\n  display: inline-block;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVhdHVyZWQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL3NyY1xcYXBwXFx0aGVtZVxcZ2VuZXJhbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9mZWF0dXJlZC9mZWF0dXJlZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVhdHVyZWQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL25vZGVfbW9kdWxlc1xcaW5jbHVkZS1tZWRpYVxcZGlzdFxcX2luY2x1ZGUtbWVkaWEuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmVhdHVyZWQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL3NyY1xcYXBwXFxwYWdlc1xcZmVhdHVyZWRcXGZlYXR1cmVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNaRjs7QUN1aUJJO0VGL2hCSjtJQU1JLGFBQUE7SUFDQSxpQkFBQTtFQ1ZGO0FBQ0Y7O0FDaWlCSTtFRi9oQko7SUFVSSxhQUFBO0lBQ0EsaUJBQUE7RUNSRjtBQUNGOztBQzJoQkk7RUYvaEJKO0lBY0ksV0FBQTtJQUNBLGVBQUE7RUNORjtBQUNGOztBRE9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEo7O0FDZ2hCSTtFRjlnQkY7SUFLSSxlQUFBO0VDSEo7QUFDRjs7QURLRTtFQUNFLG1CQUFBO0FDSEo7O0FES0U7RUFDRSw4QkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDSEo7O0FFbkRBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FGc0RGOztBRXBERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUZzREo7O0FDMmVJO0VDMWlCRjtJQVlJLGVBQUE7RUZ1REo7QUFDRjs7QUV0REk7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRndETjs7QUV2RE07RUFDRSxZSDVCQTtFRzZCQSxZQUFBO0VBQ0EsV0FBQTtBRnlEUjs7QUV2RE07RUFDRSxZQUFBO0FGeURSOztBQ3FkSTtFQzFnQkY7SUFFSSxzQkFBQTtJQUNBLFVBQUE7RUZ1REo7QUFDRjs7QUV0REk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FGd0ROOztBQ29jSTtFQ3JnQkE7SUFXSSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0VGMEROO0FBQ0Y7O0FFeERJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkgvREU7RUdnRUYsZUFBQTtBRjBETjs7QUV6RE07RUFDRSxxQkFBQTtBRjJEUjs7QUV4RFE7RUFDRSxZQUFBO0FGMERWOztBQzhhSTtFQ25mQTtJQWVJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUYwRE47RUV6RE07SUFDRSxVQUFBO0VGMkRSO0FBQ0Y7O0FFekRNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUYyRFI7O0FDeVpJO0VDM2RFO0lBVUksYUFBQTtFRjREUjtBQUNGOztBRTFEUTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUh4R0Y7RUd5R0UsZ0JBQUE7QUY0RFY7O0FDMFlJO0VDOWNJO0lBVUksaUJBQUE7RUY4RFY7QUFDRjs7QUU1RFE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlIbEhGO0VHbUhFLGdCQUFBO0FGOERWOztBQzhYSTtFQ2pjSTtJQU9JLGlCQUFBO0VGZ0VWO0FBQ0Y7O0FDeVhJO0VDamNJO0lBVUksaUJBQUE7SUFDQSxtQkFBQTtFRmtFVjtBQUNGOztBRWhFUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlIaklGO0FDbU1SOztBQzRXSTtFQ25iSTtJQU9JLGVBQUE7SUFDQSxtQkFBQTtFRm9FVjtBQUNGOztBQ3NXSTtFQ25iSTtJQVdJLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VGc0VWO0FBQ0Y7O0FFcEVRO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUhqSkY7RUdrSkUsZ0JBQUE7RUFDQSwyQkFBQTtBRnNFVjs7QUNzVkk7RUNuYUk7SUFTSSxpQkFBQTtFRndFVjtBQUNGOztBQ2lWSTtFQ25hSTtJQVlJLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFRjBFVjtBQUNGOztBRXhFUTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUhyS0Y7QUMrT1I7O0FDZ1VJO0VDbFpJO0lBVUksZUFBQTtJQUNBLG1CQUFBO0VGNEVWO0FBQ0Y7O0FDMFRJO0VDbFpJO0lBY0ksaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUY4RVY7QUFDRjs7QUUzRU07RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtBRjZFUjs7QUU1RVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUY4RVY7O0FFNUVRO0VBQ0UsYUFBQTtBRjhFVjs7QUU1RVE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FGOEVWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmVhdHVyZWQvZmVhdHVyZWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2luY2x1ZGUtbWVkaWEvZGlzdC9pbmNsdWRlLW1lZGlhXCI7XHJcblxyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4keWVsbG93OiByZ2IoMjQzLCAyNDMsIDIwNSk7XHJcbiRncmV5OiByZ2JhKDEwMCwgOTcsIDk3LCAwLjUxNCk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICBcInBob25lXCI6IDQyNXB4LFxyXG4gIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gIFwiZGVza3RvcFwiOiAxMzY2cHgsXHJcbiAgXCJMR2Rlc2t0b3BcIjogMTkyMHB4LFxyXG4pO1xyXG5cclxuLnBhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTU2MHB4O1xyXG4gIG1pbi13aWR0aDogMTU2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTU2MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICAgIG1pbi13aWR0aDogMTA4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTA4MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52LWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTU2MHB4O1xuICBtaW4td2lkdGg6IDE1NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTYwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyODBweDtcbiAgICBtaW4td2lkdGg6IDEyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTA4MHB4O1xuICAgIG1pbi13aWR0aDogMTA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRhaW5lciAucm93IHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnYtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lci1mbHVpZCAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2FzZXMge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XG59XG4uY2FzZXMgLmNhc2VzLW5hdmlnYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDIlO1xuICB3aWR0aDogaW5oZXJpdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB6LWluZGV4OiA2O1xuICBwYWRkaW5nOiAwIDM3cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhc2VzIC5jYXNlcy1uYXZpZ2F0aW9uIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbi5jYXNlcyAuY2FzZXMtbmF2aWdhdGlvbiAuY2FzZXMtYXJyb3cge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDcycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhc2VzIC5jYXNlcy1uYXZpZ2F0aW9uIC5jYXNlcy1hcnJvdyBzdmcge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG59XG4uY2FzZXMgLmNhc2VzLW5hdmlnYXRpb24gLmNhc2VzLWFycm93LmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXNlcyAucm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cbi5jYXNlcyAucm93IC5jYXNlcy10aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMzBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1sZWZ0OiB0aGljayBzb2xpZCBvcmFuZ2VyZWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNhc2VzIC5yb3cgLmNhc2VzLXRpdGxlIHtcbiAgICB0b3A6IC0yNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG59XG4uY2FzZXMgLnJvdyAuY2FzZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzMuMzMzMzN2dztcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXNlcyAucm93IC5jYXNlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uY2FzZXMgLnJvdyAuY2FzZTpob3ZlciAuY2FzZS1pbWFnZSB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMDtcbiAgfVxuICAuY2FzZXMgLnJvdyAuY2FzZTpudGgtb2YtdHlwZSgxKSB7XG4gICAgei1pbmRleDogMTtcbiAgfVxufVxuLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAzMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufVxuLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyAuY2F0ZWdvcnktZGV0YWlsIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbWFyZ2luLXRvcDogMjAwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIC5jYXRlZ29yeS1kZXRhaWwge1xuICAgIG1hcmdpbi10b3A6IDIzMHB4O1xuICB9XG59XG4uY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIC50b3BpYy1kZXRhaWwge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3BhY2l0eTogMC44O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyAudG9waWMtZGV0YWlsIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWRldGFpbHMgLnRvcGljLWRldGFpbCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbiAgfVxufVxuLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyBoMiB7XG4gIGZvbnQtc2l6ZTogMi40cmVtO1xuICBsaW5lLWhlaWdodDogMy40cmVtO1xuICB3aWR0aDogODUlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIGgyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWRldGFpbHMgaDIge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG59XG4uY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIC5wbGFjZWhvbGRlcjEge1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG9wYWNpdHk6IDAuMztcbiAgd2lkdGg6IDkwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyAucGxhY2Vob2xkZXIxIHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWRldGFpbHMgLnBsYWNlaG9sZGVyMSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAyMTBweDtcbiAgfVxufVxuLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyAucGxhY2Vob2xkZXIyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIG9wYWNpdHk6IDAuMztcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjhyZW07XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIC5wbGFjZWhvbGRlcjIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyAucGxhY2Vob2xkZXIyIHtcbiAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICBsaW5lLWhlaWdodDogMi4ycmVtO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgfVxufVxuLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtaW1hZ2Uge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMC42NTtcbiAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC42LCAtMC4wNSwgMC4xLCAwLjk5KTtcbn1cbi5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWltYWdlIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtaW1hZ2UgLmltYWdlLWhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1pbWFnZSAuaW1hZ2UtbG9hZGVkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL3RoZW1lL2dlbmVyYWwuc2Nzc1wiO1xyXG5cclxuLmNhc2VzIHtcclxuICBtaW4taGVpZ2h0OiA1MHZoOyAvL2ZhbGxiYWNrXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcblxyXG4gIC5jYXNlcy1uYXZpZ2F0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDIlO1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDY7XHJcbiAgICBwYWRkaW5nOiAwIDM3cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIH1cclxuICAgIC5jYXNlcy1hcnJvdyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgICB3aWR0aDogNzJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHN2ZyB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgIH1cclxuICAgICAgJi5kaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuY2FzZXMtdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBib3JkZXItbGVmdDogdGhpY2sgc29saWQgb3JhbmdlcmVkO1xyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXNlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAzMy4zMzMzM3Z3O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5jYXNlLWltYWdlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jYXNlLWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhdGVnb3J5LWRldGFpbCB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMzBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcGljLWRldGFpbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1kZXNrdG9wXCIsIFwiPnRhYmxldFwiKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMuNHJlbTtcclxuICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIiwgXCI+dGFibGV0XCIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYWNlaG9sZGVyMSB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIiwgXCI+dGFibGV0XCIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wbGFjZWhvbGRlcjIge1xyXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi44cmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIiwgXCI+dGFibGV0XCIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi40cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNhc2UtaW1hZ2Uge1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwLjY1O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHMgY3ViaWMtYmV6aWVyKDAuNiwgLTAuMDUsIDAuMSwgMC45OSk7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWFnZS1oaWRkZW4ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLWxvYWRlZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-featured',
          templateUrl: './featured.component.html',
          styleUrls: ['./featured.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: src_app_services_content_service__WEBPACK_IMPORTED_MODULE_3__["ContentService"]
        }];
      }, {
        pl1: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['placeholder1']
        }],
        pl2: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['placeholder2']
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        vh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        categories: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/intro-overlay/intro-overlay.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/intro-overlay/intro-overlay.component.ts ***!
    \****************************************************************/

  /*! exports provided: IntroOverlayComponent */

  /***/
  function srcAppPagesIntroOverlayIntroOverlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroOverlayComponent", function () {
      return IntroOverlayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");

    var IntroOverlayComponent = /*#__PURE__*/function () {
      // @ViewChildren('top')
      // topOverlays: QueryList<ElementRef>;
      function IntroOverlayComponent() {
        _classCallCheck(this, IntroOverlayComponent);

        this.animationComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(IntroOverlayComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var tl = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]({
            paused: true,
            reversed: false
          });
          tl.to('.overlay-top', 1.6, {
            height: 0,
            ease: 'expo.inOut',
            delay: 0.5,
            stagger: 0.4
          }).to('.overlay-bottom', 1.6, {
            width: 0,
            ease: 'expo.inOut',
            delay: -0.8,
            stagger: {
              amount: 0.4
            }
          }).to('.intro-overlay', 0, {
            css: {
              display: 'none'
            }
          });
          this.animationComplete.emit(tl);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroOverlayComponent;
    }();

    IntroOverlayComponent.ɵfac = function IntroOverlayComponent_Factory(t) {
      return new (t || IntroOverlayComponent)();
    };

    IntroOverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntroOverlayComponent,
      selectors: [["app-intro-overlay"]],
      inputs: {
        vh: "vh"
      },
      outputs: {
        animationComplete: "animationComplete"
      },
      decls: 9,
      vars: 0,
      consts: [[1, "intro-overlay"], [1, "top"], [1, "overlay-top"], [1, "bottom"], [1, "overlay-bottom"]],
      template: function IntroOverlayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.intro-overlay[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 50vh;\n  position: absolute;\n  width: 100%;\n  z-index: 8;\n}\n\n.intro-overlay[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .overlay-top[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 33.333vw;\n  background: black;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n@media (max-width: 768px) {\n  .intro-overlay[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .overlay-top[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n}\n\n.intro-overlay[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .overlay-top[_ngcontent-%COMP%]:nth-child(2) {\n  left: 33.333%;\n}\n\n@media (max-width: 768px) {\n  .intro-overlay[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .overlay-top[_ngcontent-%COMP%]:nth-child(2) {\n    display: none;\n  }\n}\n\n.intro-overlay[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .overlay-top[_ngcontent-%COMP%]:nth-child(3) {\n  left: 66.666%;\n}\n\n@media (max-width: 768px) {\n  .intro-overlay[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .overlay-top[_ngcontent-%COMP%]:nth-child(3) {\n    display: none;\n  }\n}\n\n.intro-overlay[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  height: 50vh;\n  position: absolute;\n  top: 50vh;\n  width: 100%;\n  z-index: 8;\n}\n\n.intro-overlay[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .overlay-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 33.333vw;\n  background: black;\n  bottom: 0;\n  right: 66.666%;\n}\n\n@media (max-width: 768px) {\n  .intro-overlay[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .overlay-bottom[_ngcontent-%COMP%] {\n    right: 0;\n    width: 100vw;\n  }\n}\n\n.intro-overlay[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .overlay-bottom[_ngcontent-%COMP%]:nth-child(2) {\n  right: 33.333%;\n}\n\n@media (max-width: 768px) {\n  .intro-overlay[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .overlay-bottom[_ngcontent-%COMP%]:nth-child(2) {\n    width: 100vw;\n    top: 100%;\n    right: 0;\n  }\n}\n\n.intro-overlay[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .overlay-bottom[_ngcontent-%COMP%]:nth-child(3) {\n  right: 0;\n}\n\n@media (max-width: 768px) {\n  .intro-overlay[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .overlay-bottom[_ngcontent-%COMP%]:nth-child(3) {\n    width: 100vw;\n    top: 200%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW50cm8tb3ZlcmxheS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vc3JjXFxhcHBcXHRoZW1lXFxnZW5lcmFsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ludHJvLW92ZXJsYXkvaW50cm8tb3ZlcmxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW50cm8tb3ZlcmxheS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHByb2plY3RzXFxlbGVhcm4vbm9kZV9tb2R1bGVzXFxpbmNsdWRlLW1lZGlhXFxkaXN0XFxfaW5jbHVkZS1tZWRpYS5zY3NzIiwic3JjL2FwcC9wYWdlcy9pbnRyby1vdmVybGF5L0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9zcmNcXGFwcFxccGFnZXNcXGludHJvLW92ZXJsYXlcXGludHJvLW92ZXJsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDYkY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1pGOztBQ3VpQkk7RUYvaEJKO0lBTUksYUFBQTtJQUNBLGlCQUFBO0VDVkY7QUFDRjs7QUNpaUJJO0VGL2hCSjtJQVVJLGFBQUE7SUFDQSxpQkFBQTtFQ1JGO0FBQ0Y7O0FDMmhCSTtFRi9oQko7SUFjSSxXQUFBO0lBQ0EsZUFBQTtFQ05GO0FBQ0Y7O0FET0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMSjs7QUNnaEJJO0VGOWdCRjtJQUtJLGVBQUE7RUNISjtBQUNGOztBREtFO0VBQ0UsbUJBQUE7QUNISjs7QURLRTtFQUNFLDhCQUFBO0FDSEo7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0pGOztBREtFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNISjs7QUVsREU7RUFDRSxZQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRm9ESjs7QUVuREk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJIVkU7RUdXRixTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUZxRE47O0FDNGVJO0VDeGlCQTtJQVNJLFlBQUE7RUZ1RE47QUFDRjs7QUV0RE07RUFDRSxhQUFBO0FGd0RSOztBQ29lSTtFQzdoQkU7SUFHSSxhQUFBO0VGMERSO0FBQ0Y7O0FFeERNO0VBQ0UsYUFBQTtBRjBEUjs7QUM0ZEk7RUN2aEJFO0lBR0ksYUFBQTtFRjREUjtBQUNGOztBRXhERTtFQUNFLFlBQUE7RUFFQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBRnlESjs7QUV4REk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJIMUNFO0VHMkNGLFNBQUE7RUFDQSxjQUFBO0FGMEROOztBQ3djSTtFQ3hnQkE7SUFRSSxRQUFBO0lBQ0EsWUFBQTtFRjRETjtBQUNGOztBRTNETTtFQUNFLGNBQUE7QUY2RFI7O0FDK2JJO0VDN2ZFO0lBR0ksWUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0VGK0RSO0FBQ0Y7O0FFN0RNO0VBQ0UsUUFBQTtBRitEUjs7QUNxYkk7RUNyZkU7SUFHSSxZQUFBO0lBQ0EsU0FBQTtFRmlFUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW50cm8tb3ZlcmxheS9pbnRyby1vdmVybGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9pbmNsdWRlLW1lZGlhL2Rpc3QvaW5jbHVkZS1tZWRpYVwiO1xyXG5cclxuJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJHllbGxvdzogcmdiKDI0MywgMjQzLCAyMDUpO1xyXG4kZ3JleTogcmdiYSgxMDAsIDk3LCA5NywgMC41MTQpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJwaG9uZVwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImRlc2t0b3BcIjogMTM2NnB4LFxyXG4gIFwiTEdkZXNrdG9wXCI6IDE5MjBweCxcclxuKTtcclxuXHJcbi5wYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDE1NjBweDtcclxuICBtaW4td2lkdGg6IDE1NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PTE1NjBweFwiKSB7XHJcbiAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD1kZXNrdG9wXCIpIHtcclxuICAgIHdpZHRoOiAxMDgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PTEwODBweFwiKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAzMnB4O1xyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudi1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnNwYWNlLWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1NjBweDtcbiAgbWluLXdpZHRoOiAxNTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTU2MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMjgwcHg7XG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwODBweDtcbiAgICBtaW4td2lkdGg6IDEwODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250YWluZXIgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jb250YWluZXIgLnJvdyB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG59XG4uY29udGFpbmVyIC52LWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXItZmx1aWQgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmludHJvLW92ZXJsYXkgLnRvcCB7XG4gIGhlaWdodDogNTB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogODtcbn1cbi5pbnRyby1vdmVybGF5IC50b3AgLm92ZXJsYXktdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMy4zMzN2dztcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmludHJvLW92ZXJsYXkgLnRvcCAub3ZlcmxheS10b3Age1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxufVxuLmludHJvLW92ZXJsYXkgLnRvcCAub3ZlcmxheS10b3A6bnRoLWNoaWxkKDIpIHtcbiAgbGVmdDogMzMuMzMzJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaW50cm8tb3ZlcmxheSAudG9wIC5vdmVybGF5LXRvcDpudGgtY2hpbGQoMikge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5pbnRyby1vdmVybGF5IC50b3AgLm92ZXJsYXktdG9wOm50aC1jaGlsZCgzKSB7XG4gIGxlZnQ6IDY2LjY2NiU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmludHJvLW92ZXJsYXkgLnRvcCAub3ZlcmxheS10b3A6bnRoLWNoaWxkKDMpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaW50cm8tb3ZlcmxheSAuYm90dG9tIHtcbiAgaGVpZ2h0OiA1MHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDg7XG59XG4uaW50cm8tb3ZlcmxheSAuYm90dG9tIC5vdmVybGF5LWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzMuMzMzdnc7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiA2Ni42NjYlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbnRyby1vdmVybGF5IC5ib3R0b20gLm92ZXJsYXktYm90dG9tIHtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gIH1cbn1cbi5pbnRyby1vdmVybGF5IC5ib3R0b20gLm92ZXJsYXktYm90dG9tOm50aC1jaGlsZCgyKSB7XG4gIHJpZ2h0OiAzMy4zMzMlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5pbnRyby1vdmVybGF5IC5ib3R0b20gLm92ZXJsYXktYm90dG9tOm50aC1jaGlsZCgyKSB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRvcDogMTAwJTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmludHJvLW92ZXJsYXkgLmJvdHRvbSAub3ZlcmxheS1ib3R0b206bnRoLWNoaWxkKDMpIHtcbiAgcmlnaHQ6IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmludHJvLW92ZXJsYXkgLmJvdHRvbSAub3ZlcmxheS1ib3R0b206bnRoLWNoaWxkKDMpIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdG9wOiAyMDAlO1xuICB9XG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgICAgICAgICAgaHR0cDovL2luY2x1ZGUtbWVkaWEuY29tXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEh1Z28gR2lyYXVkZWwgKEBodWdvZ2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuXG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIGxpYnJhcnkgcHVibGljIGNvbmZpZ3VyYXRpb25cbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIGJyZWFrcG9pbnQgd2l0aCB0aGUgbGFiZWwgYHBob25lYFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XG4vLy9cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiAzMjBweCxcbiAgJ3RhYmxldCc6IDc2OHB4LFxuICAnZGVza3RvcCc6IDEwMjRweFxuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBzdGF0aWMgZXhwcmVzc2lvbnMgb3IgbWVkaWEgdHlwZXNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbic6ICdzY3JlZW4nKTtcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4vLy8gICAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSknXG4vLy8gICk7XG4vLy9cbiRtZWRpYS1leHByZXNzaW9uczogKFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXG4gICdwcmludCc6ICdwcmludCcsXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgJ3BvcnRyYWl0JzogJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJyxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBEZWZpbmVzIGEgbnVtYmVyIHRvIGJlIGFkZGVkIG9yIHN1YnRyYWN0ZWQgZnJvbSBlYWNoIHVuaXQgd2hlbiBkZWNsYXJpbmcgYnJlYWtwb2ludHMgd2l0aCBleGNsdXNpdmUgaW50ZXJ2YWxzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MTI4cHgnKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDEyOXB4KSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBlbXMgaXMgZGVmaW5lZCBhcyBgMC4wMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIwZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHJlbXMgaXMgZGVmaW5lZCBhcyBgMC4xYCBieSBkZWZhdWx0LCB0byBiZSB1c2VkIHdpdGggYGZvbnQtc2l6ZTogNjIuNSU7YFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIuMHJlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMi4xcmVtKSB7fVxuLy8vXG4kdW5pdC1pbnRlcnZhbHM6IChcbiAgJ3B4JzogMSxcbiAgJ2VtJzogMC4wMSxcbiAgJ3JlbSc6IDAuMSxcbiAgJyc6IDBcbikgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xuLy8vIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllcy5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuJGltLW1lZGlhLXN1cHBvcnQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggYnJlYWtwb2ludCB0byBlbXVsYXRlIHdoZW4gc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBkaXNhYmxlZC4gTWVkaWEgcXVlcmllcyB0aGF0IHN0YXJ0IGF0IG9yXG4vLy8gaW50ZXJjZXB0IHRoZSBicmVha3BvaW50IHdpbGwgYmUgZGlzcGxheWVkLCBhbnkgb3RoZXJzIHdpbGwgYmUgaWdub3JlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAndGFibGV0Jztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCcgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggbWVkaWEgZXhwcmVzc2lvbnMgYXJlIGFsbG93ZWQgaW4gYW4gZXhwcmVzc2lvbiBmb3IgaXQgdG8gYmUgdXNlZCB3aGVuIG1lZGlhIHF1ZXJpZXNcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGFuZCBjb250YWlucyBvbmx5IGFjY2VwdGVkIG1lZGlhIGV4cHJlc3Npb25zXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAgLmZvbyB7XG4vLy8gICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYnV0IGNvbnRhaW5zIGEgbWVkaWEgZXhwcmVzc2lvbiB0aGF0IGlzIG5vdCBhY2NlcHRlZFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicsICdwb3J0cmFpdCcsICdsYW5kc2NhcGUnKSAhZGVmYXVsdDtcblxuLy8vL1xuLy8vIENyb3NzLWVuZ2luZSBsb2dnaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIENhc3RzIGEgc3RyaW5nIGludG8gYSBudW1iZXJcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBiZSBwYXJzZWRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn1cbi8vL1xuQGZ1bmN0aW9uIHRvLW51bWJlcigkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpICE9ICdzdHJpbmcnIHtcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcbiAgJG51bWJlcnM6ICgnMCc6IDAsICcxJzogMSwgJzInOiAyLCAnMyc6IDMsICc0JzogNCwgJzUnOiA1LCAnNic6IDYsICc3JzogNywgJzgnOiA4LCAnOSc6IDkpO1xuXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxuICBAaWYgKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJysnIG9yICRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKSB7XG4gICAgJHZhbHVlOiBzdHItc2xpY2UoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkdmFsdWUpIHtcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xuXG4gICAgQGlmIG5vdCAoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcbiAgICB9XG5cbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xuICAgICAgJGRpZ2l0czogMTtcbiAgICB9IEBlbHNlIGlmICRkaWdpdHMgPT0gMCB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRkaWdpdHM6ICRkaWdpdHMgKiAxMDtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KTtcbn1cblxuXG4vLy9cbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGFkZCB1bml0IHRvXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gYCR2YWx1ZWAgZXhwcmVzc2VkIGluIGAkdW5pdGBcbi8vL1xuQGZ1bmN0aW9uIHRvLWxlbmd0aCgkdmFsdWUsICR1bml0KSB7XG4gICR1bml0czogKCdweCc6IDFweCwgJ2NtJzogMWNtLCAnbW0nOiAxbW0sICclJzogMSUsICdjaCc6IDFjaCwgJ3BjJzogMXBjLCAnaW4nOiAxaW4sICdlbSc6IDFlbSwgJ3JlbSc6IDFyZW0sICdwdCc6IDFwdCwgJ2V4JzogMWV4LCAndncnOiAxdncsICd2aCc6IDF2aCwgJ3ZtaW4nOiAxdm1pbiwgJ3ZtYXgnOiAxdm1heCk7XG5cbiAgQGlmIG5vdCBpbmRleChtYXAta2V5cygkdW5pdHMpLCAkdW5pdCkge1xuICAgICRfOiBpbS1sb2coJ0ludmFsaWQgdW5pdCBgI3skdW5pdH1gLicpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWUgKiBtYXAtZ2V0KCR1bml0cywgJHVuaXQpO1xufVxuXG4vLy9cbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2Zcbi8vLyB0aGUgY2FsbC4gSXQgaXMgaGVscGZ1bCB3aGVuIGhhdmluZyBhIGNvbXBvbmVudCBuZWVkaW5nIGFuIGV4dGVuZGVkXG4vLy8gY29uZmlndXJhdGlvbiBzdWNoIGFzIGN1c3RvbSBicmVha3BvaW50cyAocmVmZXJyZWQgdG8gYXMgdHdlYWtwb2ludHMpXG4vLy8gZm9yIGluc3RhbmNlLlxuLy8vXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9nZW5lcmFsLnNjc3NcIjtcclxuXHJcbi5pbnRyby1vdmVybGF5IHtcclxuICAudG9wIHtcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIC8vICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogNTApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gICAgLm92ZXJsYXktdG9wIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAzMy4zMzN2dztcclxuICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9dGFibGV0XCIpIHtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGxlZnQ6IDMzLjMzMyU7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgbGVmdDogNjYuNjY2JTtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9dGFibGV0XCIpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3R0b20ge1xyXG4gICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogNTApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gICAgLm92ZXJsYXktYm90dG9tIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAzMy4zMzN2dztcclxuICAgICAgYmFja2dyb3VuZDogJGJsYWNrO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiA2Ni42NjYlO1xyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9dGFibGV0XCIpIHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMTAwdnc7XHJcbiAgICAgIH1cclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIHJpZ2h0OiAzMy4zMzMlO1xyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgICAgdG9wOiAxMDAlO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9dGFibGV0XCIpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgIHRvcDogMjAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroOverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-intro-overlay',
          templateUrl: './intro-overlay.component.html',
          styleUrls: ['./intro-overlay.component.scss']
        }]
      }], function () {
        return [];
      }, {
        vh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        animationComplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/landing-page/landing-page.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/landing-page/landing-page.component.ts ***!
    \**************************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppPagesLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");
    /* harmony import */


    var src_app_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/content.service */
    "./src/app/services/content.service.ts");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _intro_overlay_intro_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../intro-overlay/intro-overlay.component */
    "./src/app/pages/intro-overlay/intro-overlay.component.ts");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../banner/banner.component */
    "./src/app/pages/banner/banner.component.ts");
    /* harmony import */


    var _featured_featured_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../featured/featured.component */
    "./src/app/pages/featured/featured.component.ts");
    /* harmony import */


    var _recent_courses_recent_courses_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../recent-courses/recent-courses.component */
    "./src/app/pages/recent-courses/recent-courses.component.ts");

    var LandingPageComponent = /*#__PURE__*/function () {
      function LandingPageComponent(contentService, viewPortRuler) {
        _classCallCheck(this, LandingPageComponent);

        this.contentService = contentService;
        this.viewPortRuler = viewPortRuler;
        this.showOverlay = true;
        this.mainTimeLine = new gsap__WEBPACK_IMPORTED_MODULE_1__["TimelineMax"]({
          paused: true,
          reversed: false
        });
      }

      _createClass(LandingPageComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this5 = this;

          this.bannerTl.play();
          this.to = setTimeout(function () {
            _this5.overlayTl.play();
          }, 2000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.contentService.getCategories().subscribe(function (data) {
            _this6.categories = data.filter(function (cat) {
              if (cat.featuredCourse) return cat;
            });
          });
          this.vh = this.viewPortRuler.getViewportSize().height;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearTimeout(this.to);
        }
      }, {
        key: "overlayAnimationComplete",
        value: function overlayAnimationComplete(overlayTl) {
          this.overlayTl = overlayTl; // this.showOverlay = false;
          // this.mainTimeLine.add(this.overlayTl);
          // this.mainTimeLine.play();
        }
      }, {
        key: "bannerAnimationComplete",
        value: function bannerAnimationComplete(bannerTl) {
          this.bannerTl = bannerTl; // this.mainTimeLine.add(this.bannerTl);
        }
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) {
      return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]));
    };

    LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LandingPageComponent,
      selectors: [["app-landing-page"]],
      decls: 5,
      vars: 4,
      consts: [[1, "page"], [3, "vh", "animationComplete"], [3, "categories", "vh"]],
      template: function LandingPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-intro-overlay", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationComplete", function LandingPageComponent_Template_app_intro_overlay_animationComplete_1_listener($event) {
            return ctx.overlayAnimationComplete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-banner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationComplete", function LandingPageComponent_Template_app_banner_animationComplete_2_listener($event) {
            return ctx.bannerAnimationComplete($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-featured", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "recent-courses");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vh", ctx.vh);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vh", ctx.vh);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categories)("vh", ctx.vh);
        }
      },
      directives: [_intro_overlay_intro_overlay_component__WEBPACK_IMPORTED_MODULE_4__["IntroOverlayComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _featured_featured_component__WEBPACK_IMPORTED_MODULE_6__["FeaturedComponent"], _recent_courses_recent_courses_component__WEBPACK_IMPORTED_MODULE_7__["RecentCoursesComponent"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy1wYWdlL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9zcmNcXGFwcFxcdGhlbWVcXGdlbmVyYWwuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy1wYWdlL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGVsZWFybi9ub2RlX21vZHVsZXNcXGluY2x1ZGUtbWVkaWFcXGRpc3RcXF9pbmNsdWRlLW1lZGlhLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDYkY7O0FEZUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1pGOztBQ3VpQkk7RUYvaEJKO0lBTUksYUFBQTtJQUNBLGlCQUFBO0VDVkY7QUFDRjs7QUNpaUJJO0VGL2hCSjtJQVVJLGFBQUE7SUFDQSxpQkFBQTtFQ1JGO0FBQ0Y7O0FDMmhCSTtFRi9oQko7SUFjSSxXQUFBO0lBQ0EsZUFBQTtFQ05GO0FBQ0Y7O0FET0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNMSjs7QUNnaEJJO0VGOWdCRjtJQUtJLGVBQUE7RUNISjtBQUNGOztBREtFO0VBQ0UsbUJBQUE7QUNISjs7QURLRTtFQUNFLDhCQUFBO0FDSEo7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0pGOztBREtFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2luY2x1ZGUtbWVkaWEvZGlzdC9pbmNsdWRlLW1lZGlhXCI7XHJcblxyXG4kd2hpdGU6IHdoaXRlO1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4keWVsbG93OiByZ2IoMjQzLCAyNDMsIDIwNSk7XHJcbiRncmV5OiByZ2JhKDEwMCwgOTcsIDk3LCAwLjUxNCk7XHJcblxyXG4kYnJlYWtwb2ludHM6IChcclxuICBcInBob25lXCI6IDQyNXB4LFxyXG4gIFwidGFibGV0XCI6IDc2OHB4LFxyXG4gIFwiZGVza3RvcFwiOiAxMzY2cHgsXHJcbiAgXCJMR2Rlc2t0b3BcIjogMTkyMHB4LFxyXG4pO1xyXG5cclxuLnBhZ2Uge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTU2MHB4O1xyXG4gIG1pbi13aWR0aDogMTU2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTU2MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMjgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PWRlc2t0b3BcIikge1xyXG4gICAgd2lkdGg6IDEwODBweDtcclxuICAgIG1pbi13aWR0aDogMTA4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9MTA4MHB4XCIpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC52LWNlbnRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iLCIucGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTU2MHB4O1xuICBtaW4td2lkdGg6IDE1NjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxNTYwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyODBweDtcbiAgICBtaW4td2lkdGg6IDEyODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTA4MHB4O1xuICAgIG1pbi13aWR0aDogMTA4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgfVxufVxuLmNvbnRhaW5lciAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDMycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNvbnRhaW5lciAucm93IHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbi5jb250YWluZXIgLnYtY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lci1mbHVpZCAucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuLy8gICAgIF8gICAgICAgICAgICBfICAgICAgICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgICAgXyBfXG4vLyAgICAoXykgICAgICAgICAgfCB8ICAgICAgICAgfCB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgKF8pXG4vLyAgICAgXyBfIF9fICAgX19ffCB8XyAgIF8gIF9ffCB8IF9fXyAgIF8gX18gX19fICAgX19fICBfX3wgfF8gIF9fIF9cbi8vICAgIHwgfCAnXyBcXCAvIF9ffCB8IHwgfCB8LyBfYCB8LyBfIFxcIHwgJ18gYCBfIFxcIC8gXyBcXC8gX2AgfCB8LyBfYCB8XG4vLyAgICB8IHwgfCB8IHwgKF9ffCB8IHxffCB8IChffCB8ICBfXy8gfCB8IHwgfCB8IHwgIF9fLyAoX3wgfCB8IChffCB8XG4vLyAgICB8X3xffCB8X3xcXF9fX3xffFxcX18sX3xcXF9fLF98XFxfX198IHxffCB8X3wgfF98XFxfX198XFxfXyxffF98XFxfXyxffFxuLy9cbi8vICAgICAgU2ltcGxlLCBlbGVnYW50IGFuZCBtYWludGFpbmFibGUgbWVkaWEgcXVlcmllcyBpbiBTYXNzXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIHYxLjQuOVxuLy9cbi8vICAgICAgICAgICAgICAgIGh0dHA6Ly9pbmNsdWRlLW1lZGlhLmNvbVxuLy9cbi8vICAgICAgICAgQXV0aG9yczogRWR1YXJkbyBCb3VjYXMgKEBlZHVhcmRvYm91Y2FzKVxuLy8gICAgICAgICAgICAgICAgICBIdWdvIEdpcmF1ZGVsIChAaHVnb2dpcmF1ZGVsKVxuLy9cbi8vICAgICAgVGhpcyBwcm9qZWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgTUlUIGxpY2Vuc2VcblxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBsaWJyYXJ5IHB1YmxpYyBjb25maWd1cmF0aW9uXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2YgZ2xvYmFsIGJyZWFrcG9pbnRzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBicmVha3BvaW50IHdpdGggdGhlIGxhYmVsIGBwaG9uZWBcbi8vLyAgJGJyZWFrcG9pbnRzOiAoJ3Bob25lJzogMzIwcHgpO1xuLy8vXG4kYnJlYWtwb2ludHM6IChcbiAgJ3Bob25lJzogMzIwcHgsXG4gICd0YWJsZXQnOiA3NjhweCxcbiAgJ2Rlc2t0b3AnOiAxMDI0cHhcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHNpbmdsZSBtZWRpYSB0eXBlIChzY3JlZW4pXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nOiAnc2NyZWVuJyk7XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gQ3JlYXRlcyBhIHN0YXRpYyBleHByZXNzaW9uIHdpdGggbG9naWNhbCBkaXNqdW5jdGlvbiAoT1Igb3BlcmF0b3IpXG4vLy8gICRtZWRpYS1leHByZXNzaW9uczogKFxuLy8vICAgICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpJ1xuLy8vICApO1xuLy8vXG4kbWVkaWEtZXhwcmVzc2lvbnM6IChcbiAgJ3NjcmVlbic6ICdzY3JlZW4nLFxuICAncHJpbnQnOiAncHJpbnQnLFxuICAnaGFuZGhlbGQnOiAnaGFuZGhlbGQnLFxuICAnbGFuZHNjYXBlJzogJyhvcmllbnRhdGlvbjogbGFuZHNjYXBlKScsXG4gICdwb3J0cmFpdCc6ICcob3JpZW50YXRpb246IHBvcnRyYWl0KScsXG4gICdyZXRpbmEyeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSwgKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpLCAobWluLXJlc29sdXRpb246IDJkcHB4KScsXG4gICdyZXRpbmEzeCc6ICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSwgKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpLCAobWluLXJlc29sdXRpb246IDNkcHB4KSdcbikgIWRlZmF1bHQ7XG5cblxuLy8vXG4vLy8gRGVmaW5lcyBhIG51bWJlciB0byBiZSBhZGRlZCBvciBzdWJ0cmFjdGVkIGZyb20gZWFjaCB1bml0IHdoZW4gZGVjbGFyaW5nIGJyZWFrcG9pbnRzIHdpdGggZXhjbHVzaXZlIGludGVydmFsc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBwaXhlbHMgaXMgZGVmaW5lZCBhcyBgMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjEyOHB4Jykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAxMjlweCkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgZW1zIGlzIGRlZmluZWQgYXMgYDAuMDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yMGVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyMC4wMWVtKSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2Bcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4yLjByZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIuMXJlbSkge31cbi8vL1xuJHVuaXQtaW50ZXJ2YWxzOiAoXG4gICdweCc6IDEsXG4gICdlbSc6IDAuMDEsXG4gICdyZW0nOiAwLjEsXG4gICcnOiAwXG4pICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBEZWZpbmVzIHdoZXRoZXIgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBhdmFpbGFibGUsIHVzZWZ1bCBmb3IgY3JlYXRpbmcgc2VwYXJhdGUgc3R5bGVzaGVldHNcbi8vLyBmb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG1lZGlhIHF1ZXJpZXMuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRGlzYWJsZXMgc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbiRpbS1tZWRpYS1zdXBwb3J0OiB0cnVlICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIGJyZWFrcG9pbnQgdG8gZW11bGF0ZSB3aGVuIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgZGlzYWJsZWQuIE1lZGlhIHF1ZXJpZXMgdGhhdCBzdGFydCBhdCBvclxuLy8vIGludGVyY2VwdCB0aGUgYnJlYWtwb2ludCB3aWxsIGJlIGRpc3BsYXllZCwgYW55IG90aGVycyB3aWxsIGJlIGlnbm9yZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAuZm9vIHtcbi8vLyAgICBjb2xvcjogdG9tYXRvO1xuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgZG9lcyBub3QgaW50ZXJjZXB0IHRoZSBkZXNrdG9wIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ3RhYmxldCc7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PWRlc2t0b3AnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnICFkZWZhdWx0O1xuXG4vLy9cbi8vLyBTZWxlY3RzIHdoaWNoIG1lZGlhIGV4cHJlc3Npb25zIGFyZSBhbGxvd2VkIGluIGFuIGV4cHJlc3Npb24gZm9yIGl0IHRvIGJlIHVzZWQgd2hlbiBtZWRpYSBxdWVyaWVzXG4vLy8gYXJlIG5vdCBzdXBwb3J0ZWQuXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBhbmQgY29udGFpbnMgb25seSBhY2NlcHRlZCBtZWRpYSBleHByZXNzaW9uc1xuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3NjcmVlbicpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgIC5mb28ge1xuLy8vICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGJ1dCBjb250YWlucyBhIG1lZGlhIGV4cHJlc3Npb24gdGhhdCBpcyBub3QgYWNjZXB0ZWRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdyZXRpbmEyeCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nLCAncG9ydHJhaXQnLCAnbGFuZHNjYXBlJykgIWRlZmF1bHQ7XG5cbi8vLy9cbi8vLyBDcm9zcy1lbmdpbmUgbG9nZ2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBMb2cgYSBtZXNzYWdlIGVpdGhlciB3aXRoIGBAZXJyb3JgIGlmIHN1cHBvcnRlZFxuLy8vIGVsc2Ugd2l0aCBgQHdhcm5gLCB1c2luZyBgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJylgXG4vLy8gdG8gZGV0ZWN0IHN1cHBvcnQuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuLy8vXG5AZnVuY3Rpb24gaW0tbG9nKCRtZXNzYWdlKSB7XG4gIEBpZiBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKSB7XG4gICAgQGVycm9yICRtZXNzYWdlO1xuICB9IEBlbHNlIHtcbiAgICBAd2FybiAkbWVzc2FnZTtcbiAgICAkXzogbm9vcCgpO1xuICB9XG5cbiAgQHJldHVybiAkbWVzc2FnZTtcbn1cblxuXG4vLy9cbi8vLyBXcmFwcGVyIG1peGluIGZvciB0aGUgbG9nIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSB1c2VkIHdpdGggYSBtb3JlIGZyaWVuZGx5XG4vLy8gQVBJIHRoYW4gYEBpZiBpbS1sb2coJy4uJykge31gIG9yIGAkXzogaW0tbG9nKCcuLicpYC4gQmFzaWNhbGx5LCB1c2UgdGhlIGZ1bmN0aW9uXG4vLy8gd2l0aGluIGZ1bmN0aW9ucyBiZWNhdXNlIGl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW4gYSBmdW5jdGlvblxuLy8vIGFuZCB1c2UgdGhlIG1peGluIGV2ZXJ5d2hlcmUgZWxzZSBiZWNhdXNlIGl0J3MgbXVjaCBtb3JlIGVsZWdhbnQuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG1lc3NhZ2UgLSBNZXNzYWdlIHRvIGxvZ1xuLy8vXG5AbWl4aW4gbG9nKCRtZXNzYWdlKSB7XG4gIEBpZiBpbS1sb2coJG1lc3NhZ2UpIHt9XG59XG5cblxuLy8vXG4vLy8gRnVuY3Rpb24gd2l0aCBubyBgQHJldHVybmAgY2FsbGVkIG5leHQgdG8gYEB3YXJuYCBpbiBTYXNzIDMuM1xuLy8vIHRvIHRyaWdnZXIgYSBjb21waWxpbmcgZXJyb3IgYW5kIHN0b3AgdGhlIHByb2Nlc3MuXG4vLy9cbkBmdW5jdGlvbiBub29wKCkge31cblxuLy8vXG4vLy8gRGV0ZXJtaW5lcyB3aGV0aGVyIGEgbGlzdCBvZiBjb25kaXRpb25zIGlzIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludC5cbi8vL1xuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXG4vLy9cbi8vLyBAcmV0dXJuIHtCb29sZWFufSAtIFJldHVybnMgdHJ1ZSBpZiB0aGUgY29uZGl0aW9ucyBhcmUgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy9cbkBmdW5jdGlvbiBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSB7XG4gICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQpO1xuXG4gIEBpZiBub3QgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUge1xuICAgIEBpZiBpbS1sb2coJ2AjeyRpbS1uby1tZWRpYS1icmVha3BvaW50fWAgaXMgbm90IGEgdmFsaWQgYnJlYWtwb2ludC4nKSB7fVxuICB9XG5cbiAgQGVhY2ggJGNvbmRpdGlvbiBpbiAkY29uZGl0aW9ucyB7XG4gICAgQGlmIG5vdCBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGNvbmRpdGlvbik7XG4gICAgICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgICAgICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGNvbmRpdGlvbiwgJG9wZXJhdG9yKTtcblxuICAgICAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICAgICAgQGlmICgkcHJlZml4ID09ICdtYXgnIGFuZCAkdmFsdWUgPD0gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIG9yXG4gICAgICAgICAgKCRwcmVmaXggPT0gJ21pbicgYW5kICR2YWx1ZSA+ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSB7XG4gICAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBAZWxzZSBpZiBub3QgaW5kZXgoJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICBAcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gdHJ1ZTtcbn1cblxuLy8vL1xuLy8vIFBhcnNpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gR2V0IG9wZXJhdG9yIG9mIGFuIGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBvcGVyYXRvciBmcm9tXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gQW55IG9mIGA+PWAsIGA+YCwgYDw9YCwgYDxgLCBg4omlYCwgYOKJpGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKSB7XG4gIEBlYWNoICRvcGVyYXRvciBpbiAoJz49JywgJz4nLCAnPD0nLCAnPCcsICfiiaUnLCAn4omkJykge1xuICAgIEBpZiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAgICAgQHJldHVybiAkb3BlcmF0b3I7XG4gICAgfVxuICB9XG5cbiAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAkXzogaW0tbG9nKCdObyBvcGVyYXRvciBmb3VuZCBpbiBgI3skZXhwcmVzc2lvbn1gLicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IGRpbWVuc2lvbiBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGB3aWR0aGAgb3IgYGhlaWdodGAgKG9yIHBvdGVudGlhbGx5IGFueXRoaW5nIGVsc2UpXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHBhcnNlZC1kaW1lbnNpb246IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgMCwgJG9wZXJhdG9yLWluZGV4IC0gMSk7XG4gICRkaW1lbnNpb246ICd3aWR0aCc7XG5cbiAgQGlmIHN0ci1sZW5ndGgoJHBhcnNlZC1kaW1lbnNpb24pID4gMCB7XG4gICAgJGRpbWVuc2lvbjogJHBhcnNlZC1kaW1lbnNpb247XG4gIH1cblxuICBAcmV0dXJuICRkaW1lbnNpb247XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBwcmVmaXggYmFzZWQgb24gYW4gb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvclxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIGBtaW5gIG9yIGBtYXhgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKSB7XG4gIEByZXR1cm4gaWYoaW5kZXgoKCc8JywgJzw9JywgJ+KJpCcpLCAkb3BlcmF0b3IpLCAnbWF4JywgJ21pbicpO1xufVxuXG5cbi8vL1xuLy8vIEdldCB2YWx1ZSBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgdmFsdWUgZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBBIG51bWVyaWMgdmFsdWVcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICR2YWx1ZTogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAkb3BlcmF0b3ItaW5kZXggKyBzdHItbGVuZ3RoKCRvcGVyYXRvcikpO1xuXG4gIEBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xuICAgICR2YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICR2YWx1ZSk7XG4gIH0gQGVsc2Uge1xuICAgICR2YWx1ZTogdG8tbnVtYmVyKCR2YWx1ZSk7XG4gIH1cblxuICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCB1bml0KCR2YWx1ZSkpO1xuXG4gIEBpZiBub3QgJGludGVydmFsIHtcbiAgICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gICAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgICAvLyBmdW5jdGlvbnMgY2Fubm90IGJlIGNhbGxlZCBhbnl3aGVyZSBpbiBTYXNzLCB3ZSBuZWVkIHRvIGhhY2sgdGhlIGNhbGwgaW5cbiAgICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAgIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgICAkXzogaW0tbG9nKCdVbmtub3duIHVuaXQgYCN7dW5pdCgkdmFsdWUpfWAuJyk7XG4gIH1cblxuICBAaWYgJG9wZXJhdG9yID09ICc+JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgKyAkaW50ZXJ2YWw7XG4gIH0gQGVsc2UgaWYgJG9wZXJhdG9yID09ICc8JyB7XG4gICAgJHZhbHVlOiAkdmFsdWUgLSAkaW50ZXJ2YWw7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZTtcbn1cblxuXG4vLy9cbi8vLyBQYXJzZSBhbiBleHByZXNzaW9uIHRvIHJldHVybiBhIHZhbGlkIG1lZGlhLXF1ZXJ5IGV4cHJlc3Npb25cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gcGFyc2Vcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBWYWxpZCBtZWRpYSBxdWVyeVxuLy8vXG5AZnVuY3Rpb24gcGFyc2UtZXhwcmVzc2lvbigkZXhwcmVzc2lvbikge1xuICAvLyBJZiBpdCBpcyBwYXJ0IG9mICRtZWRpYS1leHByZXNzaW9ucywgaXQgaGFzIG5vIG9wZXJhdG9yXG4gIC8vIHRoZW4gdGhlcmUgaXMgbm8gbmVlZCB0byBnbyBhbnkgZnVydGhlciwganVzdCByZXR1cm4gdGhlIHZhbHVlXG4gIEBpZiBtYXAtaGFzLWtleSgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKSB7XG4gICAgQHJldHVybiBtYXAtZ2V0KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pO1xuICB9XG5cbiAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbik7XG4gICRkaW1lbnNpb246IGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICR2YWx1ZTogZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG5cbiAgQHJldHVybiAnKCN7JHByZWZpeH0tI3skZGltZW5zaW9ufTogI3skdmFsdWV9KSc7XG59XG5cbi8vL1xuLy8vIFNsaWNlIGAkbGlzdGAgYmV0d2VlbiBgJHN0YXJ0YCBhbmQgYCRlbmRgIGluZGV4ZXNcbi8vL1xuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vXG4vLy8gQHBhcmFtIHtMaXN0fSAkbGlzdCAtIExpc3QgdG8gc2xpY2Vcbi8vLyBAcGFyYW0ge051bWJlcn0gJHN0YXJ0IFsxXSAtIFN0YXJ0IGluZGV4XG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRlbmQgW2xlbmd0aCgkbGlzdCldIC0gRW5kIGluZGV4XG4vLy9cbi8vLyBAcmV0dXJuIHtMaXN0fSBTbGljZWQgbGlzdFxuLy8vXG5AZnVuY3Rpb24gc2xpY2UoJGxpc3QsICRzdGFydDogMSwgJGVuZDogbGVuZ3RoKCRsaXN0KSkge1xuICBAaWYgbGVuZ3RoKCRsaXN0KSA8IDEgb3IgJHN0YXJ0ID4gJGVuZCB7XG4gICAgQHJldHVybiAoKTtcbiAgfVxuXG4gICRyZXN1bHQ6ICgpO1xuXG4gIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAkcmVzdWx0OiBhcHBlbmQoJHJlc3VsdCwgbnRoKCRsaXN0LCAkaSkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG4vLy8vXG4vLy8gU3RyaW5nIHRvIG51bWJlciBjb252ZXJ0ZXJcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBDYXN0cyBhIHN0cmluZyBpbnRvIGEgbnVtYmVyXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZyB8IE51bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYmUgcGFyc2VkXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9XG4vLy9cbkBmdW5jdGlvbiB0by1udW1iZXIoJHZhbHVlKSB7XG4gIEBpZiB0eXBlLW9mKCR2YWx1ZSkgPT0gJ251bWJlcicge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnc3RyaW5nJyB7XG4gICAgJF86IGltLWxvZygnVmFsdWUgZm9yIGB0by1udW1iZXJgIHNob3VsZCBiZSBhIG51bWJlciBvciBhIHN0cmluZy4nKTtcbiAgfVxuXG4gICRmaXJzdC1jaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsIDEsIDEpO1xuICAkcmVzdWx0OiAwO1xuICAkZGlnaXRzOiAwO1xuICAkbWludXM6ICgkZmlyc3QtY2hhcmFjdGVyID09ICctJyk7XG4gICRudW1iZXJzOiAoJzAnOiAwLCAnMSc6IDEsICcyJzogMiwgJzMnOiAzLCAnNCc6IDQsICc1JzogNSwgJzYnOiA2LCAnNyc6IDcsICc4JzogOCwgJzknOiA5KTtcblxuICAvLyBSZW1vdmUgKy8tIHNpZ24gaWYgcHJlc2VudCBhdCBmaXJzdCBjaGFyYWN0ZXJcbiAgQGlmICgkZmlyc3QtY2hhcmFjdGVyID09ICcrJyBvciAkZmlyc3QtY2hhcmFjdGVyID09ICctJykge1xuICAgICR2YWx1ZTogc3RyLXNsaWNlKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIHN0ci1sZW5ndGgoJHZhbHVlKSB7XG4gICAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgJGksICRpKTtcblxuICAgIEBpZiBub3QgKGluZGV4KG1hcC1rZXlzKCRudW1iZXJzKSwgJGNoYXJhY3Rlcikgb3IgJGNoYXJhY3RlciA9PSAnLicpIHtcbiAgICAgIEByZXR1cm4gdG8tbGVuZ3RoKGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpLCBzdHItc2xpY2UoJHZhbHVlLCAkaSkpXG4gICAgfVxuXG4gICAgQGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcbiAgICAgICRkaWdpdHM6IDE7XG4gICAgfSBAZWxzZSBpZiAkZGlnaXRzID09IDAge1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCAqIDEwICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3Rlcik7XG4gICAgfSBAZWxzZSB7XG4gICAgICAkZGlnaXRzOiAkZGlnaXRzICogMTA7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbWFwLWdldCgkbnVtYmVycywgJGNoYXJhY3RlcikgLyAkZGlnaXRzO1xuICAgIH1cbiAgfVxuXG4gIEByZXR1cm4gaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCk7XG59XG5cblxuLy8vXG4vLy8gQWRkIGAkdW5pdGAgdG8gYCR2YWx1ZWBcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBhZGQgdW5pdCB0b1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkdW5pdCAtIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdW5pdFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIGAkdmFsdWVgIGV4cHJlc3NlZCBpbiBgJHVuaXRgXG4vLy9cbkBmdW5jdGlvbiB0by1sZW5ndGgoJHZhbHVlLCAkdW5pdCkge1xuICAkdW5pdHM6ICgncHgnOiAxcHgsICdjbSc6IDFjbSwgJ21tJzogMW1tLCAnJSc6IDElLCAnY2gnOiAxY2gsICdwYyc6IDFwYywgJ2luJzogMWluLCAnZW0nOiAxZW0sICdyZW0nOiAxcmVtLCAncHQnOiAxcHQsICdleCc6IDFleCwgJ3Z3JzogMXZ3LCAndmgnOiAxdmgsICd2bWluJzogMXZtaW4sICd2bWF4JzogMXZtYXgpO1xuXG4gIEBpZiBub3QgaW5kZXgobWFwLWtleXMoJHVuaXRzKSwgJHVuaXQpIHtcbiAgICAkXzogaW0tbG9nKCdJbnZhbGlkIHVuaXQgYCN7JHVuaXR9YC4nKTtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlICogbWFwLWdldCgkdW5pdHMsICR1bml0KTtcbn1cblxuLy8vXG4vLy8gVGhpcyBtaXhpbiBhaW1zIGF0IHJlZGVmaW5pbmcgdGhlIGNvbmZpZ3VyYXRpb24ganVzdCBmb3IgdGhlIHNjb3BlIG9mXG4vLy8gdGhlIGNhbGwuIEl0IGlzIGhlbHBmdWwgd2hlbiBoYXZpbmcgYSBjb21wb25lbnQgbmVlZGluZyBhbiBleHRlbmRlZFxuLy8vIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBjdXN0b20gYnJlYWtwb2ludHMgKHJlZmVycmVkIHRvIGFzIHR3ZWFrcG9pbnRzKVxuLy8vIGZvciBpbnN0YW5jZS5cbi8vL1xuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vha3BvaW50cyBbKCldIC0gTWFwIG9mIHR3ZWFrcG9pbnRzIHRvIGJlIG1lcmdlZCB3aXRoIGAkYnJlYWtwb2ludHNgXG4vLy8gQHBhcmFtIHtNYXB9ICR0d2Vhay1tZWRpYS1leHByZXNzaW9ucyBbKCldIC0gTWFwIG9mIHR3ZWFrZWQgbWVkaWEgZXhwcmVzc2lvbnMgdG8gYmUgbWVyZ2VkIHdpdGggYCRtZWRpYS1leHByZXNzaW9uYFxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIGJyZWFrcG9pbnRzIHdpdGggYSB0d2Vha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCkpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgbWVkaWEgZXhwcmVzc2lvbnMgd2l0aCBhIGN1c3RvbSBvbmVcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgYm90aCBjb25maWd1cmF0aW9uIG1hcHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSwgKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG5AbWl4aW4gbWVkaWEtY29udGV4dCgkdHdlYWtwb2ludHM6ICgpLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnM6ICgpKSB7XG4gIC8vIFNhdmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGdsb2JhbC1icmVha3BvaW50czogJGJyZWFrcG9pbnRzO1xuICAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zOiAkbWVkaWEtZXhwcmVzc2lvbnM7XG5cbiAgLy8gVXBkYXRlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRicmVha3BvaW50czogbWFwLW1lcmdlKCRicmVha3BvaW50cywgJHR3ZWFrcG9pbnRzKSAhZ2xvYmFsO1xuICAkbWVkaWEtZXhwcmVzc2lvbnM6IG1hcC1tZXJnZSgkbWVkaWEtZXhwcmVzc2lvbnMsICR0d2Vhay1tZWRpYS1leHByZXNzaW9ucykgIWdsb2JhbDtcblxuICBAY29udGVudDtcblxuICAvLyBSZXN0b3JlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRicmVha3BvaW50czogJGdsb2JhbC1icmVha3BvaW50cyAhZ2xvYmFsO1xuICAkbWVkaWEtZXhwcmVzc2lvbnM6ICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnMgIWdsb2JhbDtcbn1cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgcHVibGljIGV4cG9zZWQgQVBJXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xuLy8vIEBhY2Nlc3MgcHVibGljXG4vLy8vXG5cblxuLy8vXG4vLy8gR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gYSBsaXN0IG9mIGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBwYXJhbSB7QXJnbGlzdH0gICAkY29uZGl0aW9ucyAgLSBNZWRpYSBxdWVyeSBjb25kaXRpb25zXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHNpbmdsZSBzZXQgYnJlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCB0d28gc2V0IGJyZWFrcG9pbnRzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnLCAnPD10YWJsZXQnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzU4cHgnLCAnPDg1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBzZXQgYnJlYWtwb2ludHMgd2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+ZGVza3RvcCcsICc8PTEzNTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzdGF0aWMgZXhwcmVzc2lvblxuLy8vICBAaW5jbHVkZSBtZWRpYSgncmV0aW5hMngnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBNaXhpbmcgZXZlcnl0aGluZ1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNTBweCcsICc8dGFibGV0JywgJ3JldGluYTN4JykgeyB9XG4vLy9cbkBtaXhpbiBtZWRpYSgkY29uZGl0aW9ucy4uLikge1xuICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gIEBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPT0gMCkgb3JcbiAgICAgIChub3QgJGltLW1lZGlhLXN1cHBvcnQgYW5kIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH0gQGVsc2UgaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID4gMCkge1xuICAgIEBtZWRpYSAje3VucXVvdGUocGFyc2UtZXhwcmVzc2lvbihudGgoJGNvbmRpdGlvbnMsIDEpKSl9IHtcbiAgICAgIC8vIFJlY3Vyc2l2ZSBjYWxsXG4gICAgICBAaW5jbHVkZSBtZWRpYShzbGljZSgkY29uZGl0aW9ucywgMikuLi4pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-landing-page',
          templateUrl: './landing-page.component.html',
          styleUrls: ['./landing-page.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["ViewportRuler"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/page-not-found/page-not-found.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
    \******************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPagesPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/recent-courses/recent-courses.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/recent-courses/recent-courses.component.ts ***!
    \******************************************************************/

  /*! exports provided: RecentCoursesComponent */

  /***/
  function srcAppPagesRecentCoursesRecentCoursesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecentCoursesComponent", function () {
      return RecentCoursesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/content.service */
    "./src/app/services/content.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    function RecentCoursesComponent_mat_grid_list_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageFallBackMechanism(ctx_r0.course1, "large"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx_r0.course1.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.course1.description);
      }
    }

    function RecentCoursesComponent_mat_grid_list_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-list", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecentCoursesComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.imageFallBackMechanism(ctx_r2.course2, "small"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx_r2.course2.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.course2.description);
      }
    }

    function RecentCoursesComponent_img_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
      }
    }

    function RecentCoursesComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.imageFallBackMechanism(ctx_r4.course3, "small"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx_r4.course3.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.course3.description);
      }
    }

    function RecentCoursesComponent_img_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
      }
    }

    function RecentCoursesComponent_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecentCoursesComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecentCoursesComponent_div_20_div_1_Template, 8, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.restOfTheCoursesPlaceholder);
      }
    }

    function RecentCoursesComponent_div_21_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var course_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", course_r13.image.formats.thumbnail.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, course_r13.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r13.description);
      }
    }

    function RecentCoursesComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecentCoursesComponent_div_21_div_1_Template, 14, 5, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.restOfTheCourses);
      }
    }

    function RecentCoursesComponent_div_22_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "uppercase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var course_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", course_r15.image.formats.thumbnail.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, course_r15.name));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r15.description);
      }
    }

    function RecentCoursesComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecentCoursesComponent_div_22_div_1_Template, 14, 5, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.restOfTheCoursesMobile);
      }
    }

    function RecentCoursesComponent_div_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-grid-tile", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RecentCoursesComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RecentCoursesComponent_div_23_div_1_Template, 8, 0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.restOfTheCoursesPlaceholder);
      }
    }

    var RecentCoursesComponent = /*#__PURE__*/function () {
      function RecentCoursesComponent(contentService) {
        _classCallCheck(this, RecentCoursesComponent);

        this.contentService = contentService;
        this.restOfTheCoursesPlaceholder = new Array(6);
      }

      _createClass(RecentCoursesComponent, [{
        key: "sortRecentCourses",
        value: function sortRecentCourses(subtopic1, subtopic2) {
          if (subtopic1.id < subtopic2.id) {
            return -1;
          } else if (subtopic1.id > subtopic2.id) {
            return 1;
          } else {
            return 0;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.restOfTheCoursesPlaceholder.fill(1);
          this.contentService.getFeaturedSubTopic().subscribe(function (data) {
            if (data[0].subTopics) {
              _this7.subTopics = data[0].subTopics;

              _this7.subTopics.sort(_this7.sortRecentCourses);

              if (_this7.subTopics.length > 10) {
                _this7.subTopics = _this7.subTopics.slice(_this7.subTopics.length - 10, _this7.subTopics.length);
              } else {
                _this7.subTopics = _this7.subTopics.slice(0, _this7.subTopics.length);
                _this7.subTopics.reverse;
                var countForFillPending = 10 - _this7.subTopics.length;

                for (var i = 0; i < countForFillPending; i++) {
                  _this7.subTopics.push(_this7.subTopics[0]);
                }
              } // Reset the Description


              _this7.subTopics.map(function (data) {
                data.description = data.name;
              }); //Get Top 3 Courses


              _this7.course1 = _this7.subTopics[0];
              _this7.course2 = _this7.subTopics[1];
              _this7.course3 = _this7.subTopics[2]; //Courses for rest of the page & mobile

              _this7.restOfTheCourses = _this7.subTopics.slice(3, 9);
              _this7.restOfTheCoursesMobile = _this7.subTopics.slice(0, 6); //Rest of the courses

              _this7.restOfTheCourses.map(function (data) {
                _this7.contentService.getTopicById(data.topic).subscribe(function (topic) {
                  data.name = topic.categories[0].name + " - " + topic.name;
                });
              }); //Course 1


              _this7.contentService.getTopicById(_this7.course1.topic).subscribe(function (topic) {
                _this7.course1.name = topic.categories[0].name + " - " + topic.name;
              }); //Course 2


              _this7.contentService.getTopicById(_this7.course2.topic).subscribe(function (topic) {
                _this7.course2.name = topic.categories[0].name + " - " + topic.name;
              }); //Course 3


              _this7.contentService.getTopicById(_this7.course3.topic).subscribe(function (topic) {
                _this7.course3.name = topic.categories[0].name + " - " + topic.name;
              });
            }
          });
        } //course1.image?.formats.large.url

      }, {
        key: "imageFallBackMechanism",
        value: function imageFallBackMechanism(course, imageType) {
          if (course != null && course.image != null && course.image.formats != null) {
            if (imageType == 'large') {
              if (course.image.formats.large != null && course.image.formats.large.url != null && course.image.formats.large.url.trim() != "") {
                return course.image.formats.large.url;
              } else if (course.image.formats.medium.url != null && course.image.formats.medium.url.trim() != "") {
                return course.image.formats.medium.url;
              } else if (course.image.formats.small.url != null && course.image.formats.small.url.trim() != "") {
                return course.image.formats.small.url;
              } else {
                return "assets/images/placeholder.png";
              }
            } else if (imageType == 'small') {
              if (course.image.formats.small != null && course.image.formats.small.url != null && course.image.formats.small.url.trim() != "") {
                return course.image.formats.small.url;
              } else {
                return "assets/images/placeholder.png";
              }
            } else if (imageType == 'thumbnail') {
              if (course.image.formats.thumbnail != null && course.image.formats.thumbnail.url != null && course.image.formats.thumbnail.url.trim() != "") {
                return course.image.formats.thumbnail.url;
              } else {
                return "assets/images/placeholder.png";
              }
            } else {
              return "assets/images/placeholder.png";
            }
          } else {
            return "assets/images/placeholder.png";
          }
        }
      }]);

      return RecentCoursesComponent;
    }();

    RecentCoursesComponent.ɵfac = function RecentCoursesComponent_Factory(t) {
      return new (t || RecentCoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]));
    };

    RecentCoursesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecentCoursesComponent,
      selectors: [["recent-courses"]],
      inputs: {
        vh: "vh"
      },
      decls: 24,
      vars: 12,
      consts: [[1, "cases"], [1, "container"], [1, "row"], [1, "cases-title"], [1, "main-panel"], [1, "container", 2, "margin-top", "5px"], [1, "left-panel"], ["cols", "1", 4, "ngIf"], [2, "padding-top", "15px"], ["cols", "2", "gutterSize", "25px", "rowHeight", "20.5rem"], [1, "mat-card", "section2-courses"], [4, "ngIf"], ["src", "assets/images/placeholder.png", 4, "ngIf"], ["class", "right-panel", 4, "ngIf"], ["class", "mobile-only", 4, "ngIf"], ["cols", "1"], [1, "mat-card", "left-panel-main-container"], [1, "zoom-image"], [3, "src"], [1, "course-content"], ["src", "assets/images/placeholder.png"], [1, "section2-courses-img-container"], [1, ""], [1, "section2-courses-img-container-img", 3, "src"], [2, "padding-left", "5px"], [1, "right-panel"], [4, "ngFor", "ngForOf"], ["cols", "3", "rowHeight", "6rem", 1, "mat-card", "right-panel-courses"], ["mat-card-image", "", "src", "assets/images/placeholder.png", 2, "height", "100%", "width", "100%"], ["colspan", "2"], [2, "padding-top", "20px"], ["mat-card-image", "", 2, "height", "100%", "width", "100%", 3, "src"], [1, "mobile-only"], ["cols", "3", "rowHeight", "6rem", 1, "mat-card", "right-panel-courses", 2, "width", "100%"], [2, "padding-left", "3px", "float", "left"]],
      template: function RecentCoursesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recent Courses ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RecentCoursesComponent_mat_grid_list_10_Template, 12, 5, "mat-grid-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecentCoursesComponent_mat_grid_list_11_Template, 2, 0, "mat-grid-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-grid-list", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RecentCoursesComponent_div_15_Template, 12, 5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RecentCoursesComponent_img_16_Template, 1, 0, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-grid-tile", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RecentCoursesComponent_div_18_Template, 12, 5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RecentCoursesComponent_img_19_Template, 1, 0, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RecentCoursesComponent_div_20_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RecentCoursesComponent_div_21_Template, 2, 1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RecentCoursesComponent_div_22_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RecentCoursesComponent_div_23_Template, 2, 1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.vh / 2 + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.course1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.course2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.course3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.restOfTheCourses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restOfTheCourses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.restOfTheCoursesMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.restOfTheCoursesMobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\nimg[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0.9);\n          filter: brightness(0.9);\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.zoom-image[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  cursor: pointer;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n  .mat-figure {\n  display: block !important;\n}\n\n  .mat-grid-tile .mat-figure {\n  align-items: flex-start !important;\n  padding-top: 10px;\n}\n\n.cases[_ngcontent-%COMP%] {\n  min-height: 50vh;\n  position: relative;\n  margin-bottom: 65px;\n}\n\n@media (max-width: 768px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cases-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -30px;\n  padding-left: 20px;\n  box-sizing: border-box;\n  font-weight: 400;\n  font-size: 20px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  border-left: thick solid orangered;\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .cases-title[_ngcontent-%COMP%] {\n    top: -25px;\n    padding-left: 10px;\n    font-size: 16px;\n    letter-spacing: 1.5px;\n    margin: 0 16px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 33.33333vw;\n  background: black;\n  cursor: pointer;\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]:hover   .case-image[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n@media (max-width: 768px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%] {\n    width: 100vw;\n    min-height: 50vh;\n    padding: 0;\n    position: absolute;\n    z-index: 0;\n  }\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]:nth-of-type(1) {\n    z-index: 1;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 32px;\n  box-sizing: border-box;\n  z-index: 1;\n  position: relative;\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  font-size: 1.6rem;\n  opacity: 0.8;\n  color: white;\n  font-weight: 600;\n}\n\n@media (max-width: 1366px) and (min-width: 769px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    line-height: 2.2rem;\n    margin-top: 210px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n  line-height: 3.4rem;\n  width: 85%;\n  margin-top: 16px;\n  color: white;\n}\n\n@media (max-width: 1366px) and (min-width: 769px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 2.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    line-height: 2.2rem;\n    margin-top: 8px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder1[_ngcontent-%COMP%] {\n  margin-top: 200px;\n  font-size: 1.6rem;\n  opacity: 0.3;\n  width: 90%;\n  color: white;\n  font-weight: 600;\n  background-color: lightgrey;\n}\n\n@media (max-width: 1366px) and (min-width: 769px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder1[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder1[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    line-height: 2.2rem;\n    margin-top: 210px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder2[_ngcontent-%COMP%] {\n  width: 150px;\n  background-color: lightgrey;\n  opacity: 0.3;\n  font-size: 2.4rem;\n  line-height: 2.8rem;\n  width: 75%;\n  margin-top: 16px;\n  color: white;\n}\n\n@media (max-width: 1366px) and (min-width: 769px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder2[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 2.4rem;\n  }\n}\n\n@media (max-width: 425px) {\n  .cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-details[_ngcontent-%COMP%]   .placeholder2[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n    line-height: 2.2rem;\n    margin-top: 8px;\n  }\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-image[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: absolute;\n  opacity: 0.65;\n  transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-image[_ngcontent-%COMP%]   .image-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cases[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .case[_ngcontent-%COMP%]   .case-image[_ngcontent-%COMP%]   .image-loaded[_ngcontent-%COMP%] {\n  display: inline-block;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: absolute;\n}\n\n@media (max-width: 425px) {\n  .main-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.tablet-only[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: none;\n}\n\n@media (min-width: 425px) {\n  .tablet-only[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n@media (min-width: 769px) {\n  .tablet-only[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.mobile-only[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: none;\n}\n\n@media (max-width: 425px) {\n  .mobile-only[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 60%;\n  float: left;\n  padding-right: 40px;\n  width: 100vh;\n  height: 100vh;\n}\n\n@media (max-width: 768px) {\n  .row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    float: left;\n    padding-left: 25px;\n    padding-right: 40px;\n    width: 100vh;\n    height: 120vh;\n    display: block;\n  }\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .left-panel-main-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  display: inline-block;\n  overflow: hidden;\n  height: 23.5em;\n  color: white;\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .left-panel-main-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -webkit-filter: brightness(0.8);\n          filter: brightness(0.8);\n  transition: transform 0.4s;\n  width: 100%;\n  height: 23.5em;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .left-panel-main-container[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 10px;\n  left: 0;\n  width: 100%;\n  cursor: pointer;\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .section2-courses[_ngcontent-%COMP%] {\n  height: 2.5em;\n  cursor: pointer;\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .section2-courses[_ngcontent-%COMP%]   .section2-courses-img-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  overflow: hidden;\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .section2-courses[_ngcontent-%COMP%]   .section2-courses-img-container-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 14em;\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .section2-courses[_ngcontent-%COMP%]   .section2-courses-img-container[_ngcontent-%COMP%]:hover {\n  display: inline-block;\n  overflow: hidden;\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .section2-courses[_ngcontent-%COMP%]   .section2-courses-img-container[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n  transform-origin: 5% 5% 5% 5%;\n  border-bottom: 5px solid orangered;\n  cursor: pointer;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.row[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%]   .section2-courses[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n  transform-origin: 5% 5% 5% 5%;\n  border-bottom: 5px solid orangered;\n  cursor: pointer;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.row[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 40%;\n  float: right;\n}\n\n@media (max-width: 768px) {\n  .row[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n    width: 100vh;\n    height: 100%;\n    display: block;\n    padding-left: 25px;\n    padding-right: 40px;\n    padding-top: 15px;\n  }\n}\n\n.row[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .right-panel-courses[_ngcontent-%COMP%] {\n  align-content: center;\n  cursor: pointer;\n}\n\n.row[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .right-panel-courses[_ngcontent-%COMP%]:hover {\n  align-content: center;\n  border-left: 3px solid orangered;\n  cursor: pointer;\n}\n\n.row[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .right-panel-courses[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.row[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .right-panel-courses[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  color: #787878;\n}\n\n.container-recentcourses[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n\n\n.text-block-recentcourses[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  color: white;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjZW50LWNvdXJzZXMvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL3NyY1xcYXBwXFx0aGVtZVxcZ2VuZXJhbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWNlbnQtY291cnNlcy9yZWNlbnQtY291cnNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVjZW50LWNvdXJzZXMvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL25vZGVfbW9kdWxlc1xcaW5jbHVkZS1tZWRpYVxcZGlzdFxcX2luY2x1ZGUtbWVkaWEuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVjZW50LWNvdXJzZXMvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL3NyY1xcYXBwXFxwYWdlc1xccmVjZW50LWNvdXJzZXNcXHJlY2VudC1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNaRjs7QUN1aUJJO0VGL2hCSjtJQU1JLGFBQUE7SUFDQSxpQkFBQTtFQ1ZGO0FBQ0Y7O0FDaWlCSTtFRi9oQko7SUFVSSxhQUFBO0lBQ0EsaUJBQUE7RUNSRjtBQUNGOztBQzJoQkk7RUYvaEJKO0lBY0ksV0FBQTtJQUNBLGVBQUE7RUNORjtBQUNGOztBRE9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEo7O0FDZ2hCSTtFRjlnQkY7SUFLSSxlQUFBO0VDSEo7QUFDRjs7QURLRTtFQUNFLG1CQUFBO0FDSEo7O0FES0U7RUFDRSw4QkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDSEo7O0FFakRBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUZvREY7O0FFaERFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBRm1ESjs7QUU3Q0E7RUFDRSx5QkFBQTtBRmdERjs7QUU3Q0E7RUFFSSxrQ0FBQTtFQUNBLGlCQUFBO0FGK0NKOztBRTNDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRjhDRjs7QUNrZUk7RUM3Z0JGO0lBRUksc0JBQUE7SUFDQSxVQUFBO0VGNkNKO0FBQ0Y7O0FFNUNJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtBRjhDTjs7QUNpZEk7RUN4Z0JBO0lBV0ksVUFBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsY0FBQTtFRmdETjtBQUNGOztBRTlDSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJINURFO0VHNkRGLGVBQUE7QUZnRE47O0FFL0NNO0VBQ0UscUJBQUE7QUZpRFI7O0FFOUNRO0VBQ0UsWUFBQTtBRmdEVjs7QUMyYkk7RUN0ZkE7SUFlSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VGZ0ROO0VFL0NNO0lBQ0UsVUFBQTtFRmlEUjtBQUNGOztBRS9DTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FGaURSOztBQ3NhSTtFQzlkRTtJQVVJLGFBQUE7RUZrRFI7QUFDRjs7QUVqRFE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlIakdGO0VHa0dFLGdCQUFBO0FGbURWOztBQzBaSTtFQ2xkSTtJQU9JLGlCQUFBO0VGcURWO0FBQ0Y7O0FDcVpJO0VDbGRJO0lBVUksaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VGdURWO0FBQ0Y7O0FFckRRO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlIakhGO0FDd0tSOztBQ3VZSTtFQ25jSTtJQU9JLGVBQUE7SUFDQSxtQkFBQTtFRnlEVjtBQUNGOztBQ2lZSTtFQ25jSTtJQVdJLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VGMkRWO0FBQ0Y7O0FFekRRO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUhqSUY7RUdrSUUsZ0JBQUE7RUFDQSwyQkFBQTtBRjJEVjs7QUNpWEk7RUNuYkk7SUFTSSxpQkFBQTtFRjZEVjtBQUNGOztBQzRXSTtFQ25iSTtJQVlJLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFRitEVjtBQUNGOztBRTdEUTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUhySkY7QUNvTlI7O0FDMlZJO0VDbGFJO0lBVUksZUFBQTtJQUNBLG1CQUFBO0VGaUVWO0FBQ0Y7O0FDcVZJO0VDbGFJO0lBY0ksaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUZtRVY7QUFDRjs7QUVoRU07RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtBRmtFUjs7QUVqRVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUZtRVY7O0FFakVRO0VBQ0UsYUFBQTtBRm1FVjs7QUVqRVE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FGbUVWOztBQ3FUSTtFQ2pYSjtJQUtJLGFBQUE7RUY0REY7QUFDRjs7QUV6REE7RUFFRSxhQUFBO0VBQ0EsYUFBQTtBRjJERjs7QUMwU0k7RUN4V0o7SUFLSSxjQUFBO0VGNkRGO0FBQ0Y7O0FDcVNJO0VDeFdKO0lBUUksYUFBQTtFRitERjtBQUNGOztBRTNEQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FGOERGOztBQzJSSTtFQzNWSjtJQUlLLGNBQUE7RUZnRUg7QUFDRjs7QUUxREU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGNkRKOztBQzZRSTtFQ2hWRjtJQVFJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7RUYrREo7QUFDRjs7QUU3REk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFBYSxhQUFBO0VBQ2IscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FGZ0VOOztBRS9ETTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBRmlFUjs7QUUvRE07RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUZpRVI7O0FFekRJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUYyRE47O0FFMURNO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBRjREUjs7QUV6RE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtBRjJEUjs7QUV6RE07RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FGMkRSOztBRTFEUTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FGNERWOztBRXRETTtFQUNFLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FGd0RSOztBRWhERTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBRmtESjs7QUN1TUk7RUM1UEY7SUFNSSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUZtREo7QUFDRjs7QUVoREk7RUFDRSxxQkFBQTtFQUNBLGVBQUE7QUZrRE47O0FFOUNJO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUZnRE47O0FFL0NNO0VBQ0UsWUFBQTtBRmlEUjs7QUUvQ007RUFDRSxjQUFBO0FGaURSOztBRTFDQTtFQUNFLGtCQUFBO0FGNkNGOztBRTFDQSxzQkFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRjRDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2VudC1jb3Vyc2VzL3JlY2VudC1jb3Vyc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9pbmNsdWRlLW1lZGlhL2Rpc3QvaW5jbHVkZS1tZWRpYVwiO1xyXG5cclxuJHdoaXRlOiB3aGl0ZTtcclxuJGJsYWNrOiBibGFjaztcclxuJHllbGxvdzogcmdiKDI0MywgMjQzLCAyMDUpO1xyXG4kZ3JleTogcmdiYSgxMDAsIDk3LCA5NywgMC41MTQpO1xyXG5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgXCJwaG9uZVwiOiA0MjVweCxcclxuICBcInRhYmxldFwiOiA3NjhweCxcclxuICBcImRlc2t0b3BcIjogMTM2NnB4LFxyXG4gIFwiTEdkZXNrdG9wXCI6IDE5MjBweCxcclxuKTtcclxuXHJcbi5wYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDE1NjBweDtcclxuICBtaW4td2lkdGg6IDE1NjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PTE1NjBweFwiKSB7XHJcbiAgICB3aWR0aDogMTI4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD1kZXNrdG9wXCIpIHtcclxuICAgIHdpZHRoOiAxMDgwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwODBweDtcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PTEwODBweFwiKSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAzMnB4O1xyXG4gICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAudi1jZW50ZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnNwYWNlLWJldHdlZW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiLnBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1NjBweDtcbiAgbWluLXdpZHRoOiAxNTYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTU2MHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMjgwcHg7XG4gICAgbWluLXdpZHRoOiAxMjgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwODBweDtcbiAgICBtaW4td2lkdGg6IDEwODBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5jb250YWluZXIgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gIC5jb250YWluZXIgLnJvdyB7XG4gICAgcGFkZGluZzogMCAxNnB4O1xuICB9XG59XG4uY29udGFpbmVyIC52LWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXItZmx1aWQgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uem9vbS1pbWFnZTpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbjo6bmctZGVlcCAubWF0LWZpZ3VyZSB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uY2FzZXMge1xuICBtaW4taGVpZ2h0OiA1MHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNhc2VzIC5yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLmNhc2VzIC5yb3cgLmNhc2VzLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0zMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYm9yZGVyLWxlZnQ6IHRoaWNrIHNvbGlkIG9yYW5nZXJlZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZXMtdGl0bGUge1xuICAgIHRvcDogLTI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG4gIH1cbn1cbi5jYXNlcyAucm93IC5jYXNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMy4zMzMzM3Z3O1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhc2VzIC5yb3cgLmNhc2UgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5jYXNlcyAucm93IC5jYXNlOmhvdmVyIC5jYXNlLWltYWdlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXNlcyAucm93IC5jYXNlIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAwO1xuICB9XG4gIC5jYXNlcyAucm93IC5jYXNlOm50aC1vZi10eXBlKDEpIHtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG4uY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG59XG4uY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIHNwYW4ge1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIG9wYWNpdHk6IDAuODtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWRldGFpbHMgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIHNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XG4gICAgbWFyZ2luLXRvcDogMjEwcHg7XG4gIH1cbn1cbi5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWRldGFpbHMgaDIge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDMuNHJlbTtcbiAgd2lkdGg6IDg1JTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWRldGFpbHMgaDIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMi40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyBoMiB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn1cbi5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWRldGFpbHMgLnBsYWNlaG9sZGVyMSB7XG4gIG1hcmdpbi10b3A6IDIwMHB4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgb3BhY2l0eTogMC4zO1xuICB3aWR0aDogOTAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIC5wbGFjZWhvbGRlcjEge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtZGV0YWlscyAucGxhY2Vob2xkZXIxIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMi4ycmVtO1xuICAgIG1hcmdpbi10b3A6IDIxMHB4O1xuICB9XG59XG4uY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIC5wbGFjZWhvbGRlcjIge1xuICB3aWR0aDogMTUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgb3BhY2l0eTogMC4zO1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcbiAgd2lkdGg6IDc1JTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWRldGFpbHMgLnBsYWNlaG9sZGVyMiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1kZXRhaWxzIC5wbGFjZWhvbGRlcjIge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICB9XG59XG4uY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1pbWFnZSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwLjY1O1xuICB0cmFuc2l0aW9uOiAwLjRzIGN1YmljLWJlemllcigwLjYsIC0wLjA1LCAwLjEsIDAuOTkpO1xufVxuLmNhc2VzIC5yb3cgLmNhc2UgLmNhc2UtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY2FzZXMgLnJvdyAuY2FzZSAuY2FzZS1pbWFnZSAuaW1hZ2UtaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXNlcyAucm93IC5jYXNlIC5jYXNlLWltYWdlIC5pbWFnZS1sb2FkZWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLm1haW4tcGFuZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnRhYmxldC1vbmx5IHtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MjVweCkge1xuICAudGFibGV0LW9ubHkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgLnRhYmxldC1vbmx5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tb2JpbGUtb25seSB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLm1vYmlsZS1vbmx5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ucm93IC5sZWZ0LXBhbmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5yb3cgLmxlZnQtcGFuZWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwdmg7XG4gICAgaGVpZ2h0OiAxMjB2aDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuLnJvdyAubGVmdC1wYW5lbCAubGVmdC1wYW5lbC1tYWluLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGZvciBJRSA2ICovXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyMy41ZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5yb3cgLmxlZnQtcGFuZWwgLmxlZnQtcGFuZWwtbWFpbi1jb250YWluZXIgaW1nIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMy41ZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnJvdyAubGVmdC1wYW5lbCAubGVmdC1wYW5lbC1tYWluLWNvbnRhaW5lciAuY291cnNlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucm93IC5sZWZ0LXBhbmVsIC5zZWN0aW9uMi1jb3Vyc2VzIHtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdyAubGVmdC1wYW5lbCAuc2VjdGlvbjItY291cnNlcyAuc2VjdGlvbjItY291cnNlcy1pbWctY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnJvdyAubGVmdC1wYW5lbCAuc2VjdGlvbjItY291cnNlcyAuc2VjdGlvbjItY291cnNlcy1pbWctY29udGFpbmVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE0ZW07XG59XG4ucm93IC5sZWZ0LXBhbmVsIC5zZWN0aW9uMi1jb3Vyc2VzIC5zZWN0aW9uMi1jb3Vyc2VzLWltZy1jb250YWluZXI6aG92ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucm93IC5sZWZ0LXBhbmVsIC5zZWN0aW9uMi1jb3Vyc2VzIC5zZWN0aW9uMi1jb3Vyc2VzLWltZy1jb250YWluZXI6aG92ZXIgaW1nIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNSUgNSUgNSUgNSU7XG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBvcmFuZ2VyZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucm93IC5sZWZ0LXBhbmVsIC5zZWN0aW9uMi1jb3Vyc2VzOmhvdmVyIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUlIDUlIDUlIDUlO1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgb3JhbmdlcmVkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLnJvdyAucmlnaHQtcGFuZWwge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA0MCU7XG4gIGZsb2F0OiByaWdodDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucm93IC5yaWdodC1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMHZoO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgfVxufVxuLnJvdyAucmlnaHQtcGFuZWwgLnJpZ2h0LXBhbmVsLWNvdXJzZXMge1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yb3cgLnJpZ2h0LXBhbmVsIC5yaWdodC1wYW5lbC1jb3Vyc2VzOmhvdmVyIHtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIG9yYW5nZXJlZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvdyAucmlnaHQtcGFuZWwgLnJpZ2h0LXBhbmVsLWNvdXJzZXM6aG92ZXIgaDUge1xuICBjb2xvcjogYmxhY2s7XG59XG4ucm93IC5yaWdodC1wYW5lbCAucmlnaHQtcGFuZWwtY291cnNlczpob3ZlciBoMyB7XG4gIGNvbG9yOiAjNzg3ODc4O1xufVxuXG4uY29udGFpbmVyLXJlY2VudGNvdXJzZXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi8qIEJvdHRvbSByaWdodCB0ZXh0ICovXG4udGV4dC1ibG9jay1yZWNlbnRjb3Vyc2VzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn0iLCJAY2hhcnNldCBcIlVURi04XCI7XG5cbi8vICAgICBfICAgICAgICAgICAgXyAgICAgICAgICAgXyAgICAgICAgICAgICAgICAgICAgICAgICAgIF8gX1xuLy8gICAgKF8pICAgICAgICAgIHwgfCAgICAgICAgIHwgfCAgICAgICAgICAgICAgICAgICAgICAgICB8IChfKVxuLy8gICAgIF8gXyBfXyAgIF9fX3wgfF8gICBfICBfX3wgfCBfX18gICBfIF9fIF9fXyAgIF9fXyAgX198IHxfICBfXyBfXG4vLyAgICB8IHwgJ18gXFwgLyBfX3wgfCB8IHwgfC8gX2AgfC8gXyBcXCB8ICdfIGAgXyBcXCAvIF8gXFwvIF9gIHwgfC8gX2AgfFxuLy8gICAgfCB8IHwgfCB8IChfX3wgfCB8X3wgfCAoX3wgfCAgX18vIHwgfCB8IHwgfCB8ICBfXy8gKF98IHwgfCAoX3wgfFxuLy8gICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcbi8vXG4vLyAgICAgIFNpbXBsZSwgZWxlZ2FudCBhbmQgbWFpbnRhaW5hYmxlIG1lZGlhIHF1ZXJpZXMgaW4gU2Fzc1xuLy8gICAgICAgICAgICAgICAgICAgICAgICB2MS40Ljlcbi8vXG4vLyAgICAgICAgICAgICAgICBodHRwOi8vaW5jbHVkZS1tZWRpYS5jb21cbi8vXG4vLyAgICAgICAgIEF1dGhvcnM6IEVkdWFyZG8gQm91Y2FzIChAZWR1YXJkb2JvdWNhcylcbi8vICAgICAgICAgICAgICAgICAgSHVnbyBHaXJhdWRlbCAoQGh1Z29naXJhdWRlbClcbi8vXG4vLyAgICAgIFRoaXMgcHJvamVjdCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1JVCBsaWNlbnNlXG5cblxuLy8vL1xuLy8vIGluY2x1ZGUtbWVkaWEgbGlicmFyeSBwdWJsaWMgY29uZmlndXJhdGlvblxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIGdsb2JhbCBicmVha3BvaW50c1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXG4vLy8gICRicmVha3BvaW50czogKCdwaG9uZSc6IDMyMHB4KTtcbi8vL1xuJGJyZWFrcG9pbnRzOiAoXG4gICdwaG9uZSc6IDMyMHB4LFxuICAndGFibGV0JzogNzY4cHgsXG4gICdkZXNrdG9wJzogMTAyNHB4XG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIENyZWF0ZXMgYSBsaXN0IG9mIHN0YXRpYyBleHByZXNzaW9ucyBvciBtZWRpYSB0eXBlc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgbWVkaWEgdHlwZSAoc2NyZWVuKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzdGF0aWMgZXhwcmVzc2lvbiB3aXRoIGxvZ2ljYWwgZGlzanVuY3Rpb24gKE9SIG9wZXJhdG9yKVxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcbi8vLyAgICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcbi8vLyAgKTtcbi8vL1xuJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4gICdzY3JlZW4nOiAnc2NyZWVuJyxcbiAgJ3ByaW50JzogJ3ByaW50JyxcbiAgJ2hhbmRoZWxkJzogJ2hhbmRoZWxkJyxcbiAgJ2xhbmRzY2FwZSc6ICcob3JpZW50YXRpb246IGxhbmRzY2FwZSknLFxuICAncG9ydHJhaXQnOiAnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknLFxuICAncmV0aW5hMngnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiksIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCknLFxuICAncmV0aW5hM3gnOiAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMyksIChtaW4tcmVzb2x1dGlvbjogMzUwZHBpKSwgKG1pbi1yZXNvbHV0aW9uOiAzZHBweCknXG4pICFkZWZhdWx0O1xuXG5cbi8vL1xuLy8vIERlZmluZXMgYSBudW1iZXIgdG8gYmUgYWRkZWQgb3Igc3VidHJhY3RlZCBmcm9tIGVhY2ggdW5pdCB3aGVuIGRlY2xhcmluZyBicmVha3BvaW50cyB3aXRoIGV4Y2x1c2l2ZSBpbnRlcnZhbHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcGl4ZWxzIGlzIGRlZmluZWQgYXMgYDFgIGJ5IGRlZmF1bHRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz4xMjhweCcpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMTI5cHgpIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MjBlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMjAuMDFlbSkge31cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBJbnRlcnZhbCBmb3IgcmVtcyBpcyBkZWZpbmVkIGFzIGAwLjFgIGJ5IGRlZmF1bHQsIHRvIGJlIHVzZWQgd2l0aCBgZm9udC1zaXplOiA2Mi41JTtgXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+Mi4wcmVtJykge31cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XG4vLy9cbiR1bml0LWludGVydmFsczogKFxuICAncHgnOiAxLFxuICAnZW0nOiAwLjAxLFxuICAncmVtJzogMC4xLFxuICAnJzogMFxuKSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gRGVmaW5lcyB3aGV0aGVyIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXMgaXMgYXZhaWxhYmxlLCB1c2VmdWwgZm9yIGNyZWF0aW5nIHNlcGFyYXRlIHN0eWxlc2hlZXRzXG4vLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCBtZWRpYSBxdWVyaWVzLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIERpc2FibGVzIHN1cHBvcnQgZm9yIG1lZGlhIHF1ZXJpZXNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4kaW0tbWVkaWEtc3VwcG9ydDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBicmVha3BvaW50IHRvIGVtdWxhdGUgd2hlbiBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGRpc2FibGVkLiBNZWRpYSBxdWVyaWVzIHRoYXQgc3RhcnQgYXQgb3Jcbi8vLyBpbnRlcmNlcHQgdGhlIGJyZWFrcG9pbnQgd2lsbCBiZSBkaXNwbGF5ZWQsIGFueSBvdGhlcnMgd2lsbCBiZSBpZ25vcmVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgLmZvbyB7XG4vLy8gICAgY29sb3I6IHRvbWF0bztcbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBOT1Qgc2hvdyBiZWNhdXNlIGl0IGRvZXMgbm90IGludGVyY2VwdCB0aGUgZGVza3RvcCBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICd0YWJsZXQnO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj1kZXNrdG9wJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJyAhZGVmYXVsdDtcblxuLy8vXG4vLy8gU2VsZWN0cyB3aGljaCBtZWRpYSBleHByZXNzaW9ucyBhcmUgYWxsb3dlZCBpbiBhbiBleHByZXNzaW9uIGZvciBpdCB0byBiZSB1c2VkIHdoZW4gbWVkaWEgcXVlcmllc1xuLy8vIGFyZSBub3Qgc3VwcG9ydGVkLlxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFRoaXMgbWVkaWEgcXVlcnkgd2lsbCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYW5kIGNvbnRhaW5zIG9ubHkgYWNjZXB0ZWQgbWVkaWEgZXhwcmVzc2lvbnNcbi8vLyAgJGltLW1lZGlhLXN1cHBvcnQ6IGZhbHNlO1xuLy8vICAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludDogJ2Rlc2t0b3AnO1xuLy8vICAkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJyk7XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PXRhYmxldCcsICdzY3JlZW4nKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gICAuZm9vIHtcbi8vLyAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBpbnRlcmNlcHRzIHRoZSBzdGF0aWMgYnJlYWtwb2ludCBidXQgY29udGFpbnMgYSBtZWRpYSBleHByZXNzaW9uIHRoYXQgaXMgbm90IGFjY2VwdGVkXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAncmV0aW5hMngnKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBjb2xvcjogdG9tYXRvO1xuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gIC8qIE5vIG91dHB1dCAqL1xuLy8vXG4kaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJywgJ3BvcnRyYWl0JywgJ2xhbmRzY2FwZScpICFkZWZhdWx0O1xuXG4vLy8vXG4vLy8gQ3Jvc3MtZW5naW5lIGxvZ2dpbmcgZW5naW5lXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gTG9nIGEgbWVzc2FnZSBlaXRoZXIgd2l0aCBgQGVycm9yYCBpZiBzdXBwb3J0ZWRcbi8vLyBlbHNlIHdpdGggYEB3YXJuYCwgdXNpbmcgYGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpYFxuLy8vIHRvIGRldGVjdCBzdXBwb3J0LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQGZ1bmN0aW9uIGltLWxvZygkbWVzc2FnZSkge1xuICBAaWYgZmVhdHVyZS1leGlzdHMoJ2F0LWVycm9yJykge1xuICAgIEBlcnJvciAkbWVzc2FnZTtcbiAgfSBAZWxzZSB7XG4gICAgQHdhcm4gJG1lc3NhZ2U7XG4gICAgJF86IG5vb3AoKTtcbiAgfVxuXG4gIEByZXR1cm4gJG1lc3NhZ2U7XG59XG5cblxuLy8vXG4vLy8gV3JhcHBlciBtaXhpbiBmb3IgdGhlIGxvZyBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgdXNlZCB3aXRoIGEgbW9yZSBmcmllbmRseVxuLy8vIEFQSSB0aGFuIGBAaWYgaW0tbG9nKCcuLicpIHt9YCBvciBgJF86IGltLWxvZygnLi4nKWAuIEJhc2ljYWxseSwgdXNlIHRoZSBmdW5jdGlvblxuLy8vIHdpdGhpbiBmdW5jdGlvbnMgYmVjYXVzZSBpdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluIGEgZnVuY3Rpb25cbi8vLyBhbmQgdXNlIHRoZSBtaXhpbiBldmVyeXdoZXJlIGVsc2UgYmVjYXVzZSBpdCdzIG11Y2ggbW9yZSBlbGVnYW50LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRtZXNzYWdlIC0gTWVzc2FnZSB0byBsb2dcbi8vL1xuQG1peGluIGxvZygkbWVzc2FnZSkge1xuICBAaWYgaW0tbG9nKCRtZXNzYWdlKSB7fVxufVxuXG5cbi8vL1xuLy8vIEZ1bmN0aW9uIHdpdGggbm8gYEByZXR1cm5gIGNhbGxlZCBuZXh0IHRvIGBAd2FybmAgaW4gU2FzcyAzLjNcbi8vLyB0byB0cmlnZ2VyIGEgY29tcGlsaW5nIGVycm9yIGFuZCBzdG9wIHRoZSBwcm9jZXNzLlxuLy8vXG5AZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8vL1xuLy8vIERldGVybWluZXMgd2hldGhlciBhIGxpc3Qgb2YgY29uZGl0aW9ucyBpcyBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnQuXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHJldHVybiB7Qm9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGNvbmRpdGlvbnMgYXJlIGludGVyY2VwdGVkIGJ5IHRoZSBzdGF0aWMgYnJlYWtwb2ludFxuLy8vXG5AZnVuY3Rpb24gaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikge1xuICAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZTogbWFwLWdldCgkYnJlYWtwb2ludHMsICRpbS1uby1tZWRpYS1icmVha3BvaW50KTtcblxuICBAaWYgbm90ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlIHtcbiAgICBAaWYgaW0tbG9nKCdgI3skaW0tbm8tbWVkaWEtYnJlYWtwb2ludH1gIGlzIG5vdCBhIHZhbGlkIGJyZWFrcG9pbnQuJykge31cbiAgfVxuXG4gIEBlYWNoICRjb25kaXRpb24gaW4gJGNvbmRpdGlvbnMge1xuICAgIEBpZiBub3QgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkY29uZGl0aW9uKSB7XG4gICAgICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRjb25kaXRpb24pO1xuICAgICAgJHByZWZpeDogZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcik7XG4gICAgICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRjb25kaXRpb24sICRvcGVyYXRvcik7XG5cbiAgICAgIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgICAgIEBpZiAoJHByZWZpeCA9PSAnbWF4JyBhbmQgJHZhbHVlIDw9ICRuby1tZWRpYS1icmVha3BvaW50LXZhbHVlKSBvclxuICAgICAgICAgICgkcHJlZml4ID09ICdtaW4nIGFuZCAkdmFsdWUgPiAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkge1xuICAgICAgICBAcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gQGVsc2UgaWYgbm90IGluZGV4KCRpbS1uby1tZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgQHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIHRydWU7XG59XG5cbi8vLy9cbi8vLyBQYXJzaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIEdldCBvcGVyYXRvciBvZiBhbiBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3Qgb3BlcmF0b3IgZnJvbVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIEFueSBvZiBgPj1gLCBgPmAsIGA8PWAsIGA8YCwgYOKJpWAsIGDiiaRgXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkZXhwcmVzc2lvbikge1xuICBAZWFjaCAkb3BlcmF0b3IgaW4gKCc+PScsICc+JywgJzw9JywgJzwnLCAn4omlJywgJ+KJpCcpIHtcbiAgICBAaWYgc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgICAgIEByZXR1cm4gJG9wZXJhdG9yO1xuICAgIH1cbiAgfVxuXG4gIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgLy8gcmVseSBvbiB0aGUgYGltLWxvZyguLilgIGZ1bmN0aW9uIHJhdGhlciB0aGFuIHRoZSBgbG9nKC4uKWAgbWl4aW4uIEJlY2F1c2VcbiAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gIC8vIFNhc3MgMy4zLCBjaGFuZ2UgdGhpcyBsaW5lIGluIGBAaWYgaW0tbG9nKC4uKSB7fWAgaW5zdGVhZC5cbiAgJF86IGltLWxvZygnTm8gb3BlcmF0b3IgZm91bmQgaW4gYCN7JGV4cHJlc3Npb259YC4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCBkaW1lbnNpb24gZnJvbVxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkb3BlcmF0b3IgLSBPcGVyYXRvciBmcm9tIGAkZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgd2lkdGhgIG9yIGBoZWlnaHRgIChvciBwb3RlbnRpYWxseSBhbnl0aGluZyBlbHNlKVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpIHtcbiAgJG9wZXJhdG9yLWluZGV4OiBzdHItaW5kZXgoJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwYXJzZWQtZGltZW5zaW9uOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDAsICRvcGVyYXRvci1pbmRleCAtIDEpO1xuICAkZGltZW5zaW9uOiAnd2lkdGgnO1xuXG4gIEBpZiBzdHItbGVuZ3RoKCRwYXJzZWQtZGltZW5zaW9uKSA+IDAge1xuICAgICRkaW1lbnNpb246ICRwYXJzZWQtZGltZW5zaW9uO1xuICB9XG5cbiAgQHJldHVybiAkZGltZW5zaW9uO1xufVxuXG5cbi8vL1xuLy8vIEdldCBkaW1lbnNpb24gcHJlZml4IGJhc2VkIG9uIGFuIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3Jcbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBgbWluYCBvciBgbWF4YFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tcHJlZml4KCRvcGVyYXRvcikge1xuICBAcmV0dXJuIGlmKGluZGV4KCgnPCcsICc8PScsICfiiaQnKSwgJG9wZXJhdG9yKSwgJ21heCcsICdtaW4nKTtcbn1cblxuXG4vLy9cbi8vLyBHZXQgdmFsdWUgb2YgYW4gZXhwcmVzc2lvbiwgYmFzZWQgb24gYSBmb3VuZCBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IHZhbHVlIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1lcmljIHZhbHVlXG4vLy9cbkBmdW5jdGlvbiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkdmFsdWU6IHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yLWluZGV4ICsgc3RyLWxlbmd0aCgkb3BlcmF0b3IpKTtcblxuICBAaWYgbWFwLWhhcy1rZXkoJGJyZWFrcG9pbnRzLCAkdmFsdWUpIHtcbiAgICAkdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xuICB9IEBlbHNlIHtcbiAgICAkdmFsdWU6IHRvLW51bWJlcigkdmFsdWUpO1xuICB9XG5cbiAgJGludGVydmFsOiBtYXAtZ2V0KCR1bml0LWludGVydmFscywgdW5pdCgkdmFsdWUpKTtcblxuICBAaWYgbm90ICRpbnRlcnZhbCB7XG4gICAgLy8gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbnNpZGUgYSBmdW5jdGlvbiwgc28gd2UgaGF2ZSB0b1xuICAgIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gICAgLy8gZnVuY3Rpb25zIGNhbm5vdCBiZSBjYWxsZWQgYW55d2hlcmUgaW4gU2Fzcywgd2UgbmVlZCB0byBoYWNrIHRoZSBjYWxsIGluXG4gICAgLy8gYSBkdW1teSB2YXJpYWJsZSwgc3VjaCBhcyBgJF9gLiBJZiBhbnlib2R5IGV2ZXIgcmFpc2UgYSBzY29waW5nIGlzc3VlIHdpdGhcbiAgICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICAgJF86IGltLWxvZygnVW5rbm93biB1bml0IGAje3VuaXQoJHZhbHVlKX1gLicpO1xuICB9XG5cbiAgQGlmICRvcGVyYXRvciA9PSAnPicge1xuICAgICR2YWx1ZTogJHZhbHVlICsgJGludGVydmFsO1xuICB9IEBlbHNlIGlmICRvcGVyYXRvciA9PSAnPCcge1xuICAgICR2YWx1ZTogJHZhbHVlIC0gJGludGVydmFsO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWU7XG59XG5cblxuLy8vXG4vLy8gUGFyc2UgYW4gZXhwcmVzc2lvbiB0byByZXR1cm4gYSB2YWxpZCBtZWRpYS1xdWVyeSBleHByZXNzaW9uXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIHBhcnNlXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gVmFsaWQgbWVkaWEgcXVlcnlcbi8vL1xuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcbiAgLy8gSWYgaXQgaXMgcGFydCBvZiAkbWVkaWEtZXhwcmVzc2lvbnMsIGl0IGhhcyBubyBvcGVyYXRvclxuICAvLyB0aGVuIHRoZXJlIGlzIG5vIG5lZWQgdG8gZ28gYW55IGZ1cnRoZXIsIGp1c3QgcmV0dXJuIHRoZSB2YWx1ZVxuICBAaWYgbWFwLWhhcy1rZXkoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbikge1xuICAgIEByZXR1cm4gbWFwLWdldCgkbWVkaWEtZXhwcmVzc2lvbnMsICRleHByZXNzaW9uKTtcbiAgfVxuXG4gICRvcGVyYXRvcjogZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pO1xuICAkZGltZW5zaW9uOiBnZXQtZXhwcmVzc2lvbi1kaW1lbnNpb24oJGV4cHJlc3Npb24sICRvcGVyYXRvcik7XG4gICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAkdmFsdWU6IGdldC1leHByZXNzaW9uLXZhbHVlKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuXG4gIEByZXR1cm4gJygjeyRwcmVmaXh9LSN7JGRpbWVuc2lvbn06ICN7JHZhbHVlfSknO1xufVxuXG4vLy9cbi8vLyBTbGljZSBgJGxpc3RgIGJldHdlZW4gYCRzdGFydGAgYW5kIGAkZW5kYCBpbmRleGVzXG4vLy9cbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vL1xuLy8vIEBwYXJhbSB7TGlzdH0gJGxpc3QgLSBMaXN0IHRvIHNsaWNlXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICRzdGFydCBbMV0gLSBTdGFydCBpbmRleFxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkZW5kIFtsZW5ndGgoJGxpc3QpXSAtIEVuZCBpbmRleFxuLy8vXG4vLy8gQHJldHVybiB7TGlzdH0gU2xpY2VkIGxpc3Rcbi8vL1xuQGZ1bmN0aW9uIHNsaWNlKCRsaXN0LCAkc3RhcnQ6IDEsICRlbmQ6IGxlbmd0aCgkbGlzdCkpIHtcbiAgQGlmIGxlbmd0aCgkbGlzdCkgPCAxIG9yICRzdGFydCA+ICRlbmQge1xuICAgIEByZXR1cm4gKCk7XG4gIH1cblxuICAkcmVzdWx0OiAoKTtcblxuICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgJHJlc3VsdDogYXBwZW5kKCRyZXN1bHQsIG50aCgkbGlzdCwgJGkpKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vL1xuLy8vIFN0cmluZyB0byBudW1iZXIgY29udmVydGVyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy8vXG5cblxuLy8vXG4vLy8gQ2FzdHMgYSBzdHJpbmcgaW50byBhIG51bWJlclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmcgfCBOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGJlIHBhcnNlZFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfVxuLy8vXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCR2YWx1ZSkge1xuICBAaWYgdHlwZS1vZigkdmFsdWUpID09ICdudW1iZXInIHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiB0eXBlLW9mKCR2YWx1ZSkgIT0gJ3N0cmluZycge1xuICAgICRfOiBpbS1sb2coJ1ZhbHVlIGZvciBgdG8tbnVtYmVyYCBzaG91bGQgYmUgYSBudW1iZXIgb3IgYSBzdHJpbmcuJyk7XG4gIH1cblxuICAkZmlyc3QtY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAxLCAxKTtcbiAgJHJlc3VsdDogMDtcbiAgJGRpZ2l0czogMDtcbiAgJG1pbnVzOiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpO1xuICAkbnVtYmVyczogKCcwJzogMCwgJzEnOiAxLCAnMic6IDIsICczJzogMywgJzQnOiA0LCAnNSc6IDUsICc2JzogNiwgJzcnOiA3LCAnOCc6IDgsICc5JzogOSk7XG5cbiAgLy8gUmVtb3ZlICsvLSBzaWduIGlmIHByZXNlbnQgYXQgZmlyc3QgY2hhcmFjdGVyXG4gIEBpZiAoJGZpcnN0LWNoYXJhY3RlciA9PSAnKycgb3IgJGZpcnN0LWNoYXJhY3RlciA9PSAnLScpIHtcbiAgICAkdmFsdWU6IHN0ci1zbGljZSgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCBzdHItbGVuZ3RoKCR2YWx1ZSkge1xuICAgICRjaGFyYWN0ZXI6IHN0ci1zbGljZSgkdmFsdWUsICRpLCAkaSk7XG5cbiAgICBAaWYgbm90IChpbmRleChtYXAta2V5cygkbnVtYmVycyksICRjaGFyYWN0ZXIpIG9yICRjaGFyYWN0ZXIgPT0gJy4nKSB7XG4gICAgICBAcmV0dXJuIHRvLWxlbmd0aChpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KSwgc3RyLXNsaWNlKCR2YWx1ZSwgJGkpKVxuICAgIH1cblxuICAgIEBpZiAkY2hhcmFjdGVyID09ICcuJyB7XG4gICAgICAkZGlnaXRzOiAxO1xuICAgIH0gQGVsc2UgaWYgJGRpZ2l0cyA9PSAwIHtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpO1xuICAgIH0gQGVsc2Uge1xuICAgICAgJGRpZ2l0czogJGRpZ2l0cyAqIDEwO1xuICAgICAgJHJlc3VsdDogJHJlc3VsdCArIG1hcC1nZXQoJG51bWJlcnMsICRjaGFyYWN0ZXIpIC8gJGRpZ2l0cztcbiAgICB9XG4gIH1cblxuICBAcmV0dXJuIGlmKCRtaW51cywgLSRyZXN1bHQsICRyZXN1bHQpO1xufVxuXG5cbi8vL1xuLy8vIEFkZCBgJHVuaXRgIHRvIGAkdmFsdWVgXG4vLy9cbi8vLyBAcGFyYW0ge051bWJlcn0gJHZhbHVlIC0gVmFsdWUgdG8gYWRkIHVuaXQgdG9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHVuaXQgLSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHVuaXRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn0gLSBgJHZhbHVlYCBleHByZXNzZWQgaW4gYCR1bml0YFxuLy8vXG5AZnVuY3Rpb24gdG8tbGVuZ3RoKCR2YWx1ZSwgJHVuaXQpIHtcbiAgJHVuaXRzOiAoJ3B4JzogMXB4LCAnY20nOiAxY20sICdtbSc6IDFtbSwgJyUnOiAxJSwgJ2NoJzogMWNoLCAncGMnOiAxcGMsICdpbic6IDFpbiwgJ2VtJzogMWVtLCAncmVtJzogMXJlbSwgJ3B0JzogMXB0LCAnZXgnOiAxZXgsICd2dyc6IDF2dywgJ3ZoJzogMXZoLCAndm1pbic6IDF2bWluLCAndm1heCc6IDF2bWF4KTtcblxuICBAaWYgbm90IGluZGV4KG1hcC1rZXlzKCR1bml0cyksICR1bml0KSB7XG4gICAgJF86IGltLWxvZygnSW52YWxpZCB1bml0IGAjeyR1bml0fWAuJyk7XG4gIH1cblxuICBAcmV0dXJuICR2YWx1ZSAqIG1hcC1nZXQoJHVuaXRzLCAkdW5pdCk7XG59XG5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gYWltcyBhdCByZWRlZmluaW5nIHRoZSBjb25maWd1cmF0aW9uIGp1c3QgZm9yIHRoZSBzY29wZSBvZlxuLy8vIHRoZSBjYWxsLiBJdCBpcyBoZWxwZnVsIHdoZW4gaGF2aW5nIGEgY29tcG9uZW50IG5lZWRpbmcgYW4gZXh0ZW5kZWRcbi8vLyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgY3VzdG9tIGJyZWFrcG9pbnRzIChyZWZlcnJlZCB0byBhcyB0d2Vha3BvaW50cylcbi8vLyBmb3IgaW5zdGFuY2UuXG4vLy9cbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vL1xuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWtwb2ludHMgWygpXSAtIE1hcCBvZiB0d2Vha3BvaW50cyB0byBiZSBtZXJnZWQgd2l0aCBgJGJyZWFrcG9pbnRzYFxuLy8vIEBwYXJhbSB7TWFwfSAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMgWygpXSAtIE1hcCBvZiB0d2Vha2VkIG1lZGlhIGV4cHJlc3Npb25zIHRvIGJlIG1lcmdlZCB3aXRoIGAkbWVkaWEtZXhwcmVzc2lvbmBcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBicmVha3BvaW50cyB3aXRoIGEgdHdlYWtwb2ludFxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9Y3VzdG9tJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCB0aGUgZ2xvYmFsIG1lZGlhIGV4cHJlc3Npb25zIHdpdGggYSBjdXN0b20gb25lXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIGJvdGggY29uZmlndXJhdGlvbiBtYXBzXG4vLy8gIEBpbmNsdWRlIG1lZGlhLWNvbnRleHQoKCdjdXN0b20nOiA2NzhweCksICgnYWxsJzogJ2FsbCcpKSB7XG4vLy8gICAgLmZvbyB7XG4vLy8gICAgICBAaW5jbHVkZSBtZWRpYSgnYWxsJywgJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuQG1peGluIG1lZGlhLWNvbnRleHQoJHR3ZWFrcG9pbnRzOiAoKSwgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zOiAoKSkge1xuICAvLyBTYXZlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICRnbG9iYWwtYnJlYWtwb2ludHM6ICRicmVha3BvaW50cztcbiAgJGdsb2JhbC1tZWRpYS1leHByZXNzaW9uczogJG1lZGlhLWV4cHJlc3Npb25zO1xuXG4gIC8vIFVwZGF0ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6IG1hcC1tZXJnZSgkYnJlYWtwb2ludHMsICR0d2Vha3BvaW50cykgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiBtYXAtbWVyZ2UoJG1lZGlhLWV4cHJlc3Npb25zLCAkdHdlYWstbWVkaWEtZXhwcmVzc2lvbnMpICFnbG9iYWw7XG5cbiAgQGNvbnRlbnQ7XG5cbiAgLy8gUmVzdG9yZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkYnJlYWtwb2ludHM6ICRnbG9iYWwtYnJlYWtwb2ludHMgIWdsb2JhbDtcbiAgJG1lZGlhLWV4cHJlc3Npb25zOiAkZ2xvYmFsLW1lZGlhLWV4cHJlc3Npb25zICFnbG9iYWw7XG59XG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIHB1YmxpYyBleHBvc2VkIEFQSVxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcbi8vLyBAYWNjZXNzIHB1YmxpY1xuLy8vL1xuXG5cbi8vL1xuLy8vIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IGJhc2VkIG9uIGEgbGlzdCBvZiBjb25kaXRpb25zXG4vLy9cbi8vLyBAcGFyYW0ge0FyZ2xpc3R9ICAgJGNvbmRpdGlvbnMgIC0gTWVkaWEgcXVlcnkgY29uZGl0aW9uc1xuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggYSBzaW5nbGUgc2V0IGJyZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggdHdvIHNldCBicmVha3BvaW50c1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPnBob25lJywgJzw9dGFibGV0JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1OHB4JywgJzw4NTBweCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggc2V0IGJyZWFrcG9pbnRzIHdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPmRlc2t0b3AnLCAnPD0xMzUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc3RhdGljIGV4cHJlc3Npb25cbi8vLyAgQGluY2x1ZGUgbWVkaWEoJ3JldGluYTJ4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gTWl4aW5nIGV2ZXJ5dGhpbmdcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49MzUwcHgnLCAnPHRhYmxldCcsICdyZXRpbmEzeCcpIHsgfVxuLy8vXG5AbWl4aW4gbWVkaWEoJGNvbmRpdGlvbnMuLi4pIHtcbiAgLy8gc2Nzcy1saW50OmRpc2FibGUgU3BhY2VBcm91bmRPcGVyYXRvclxuICBAaWYgKCRpbS1tZWRpYS1zdXBwb3J0IGFuZCBsZW5ndGgoJGNvbmRpdGlvbnMpID09IDApIG9yXG4gICAgICAobm90ICRpbS1tZWRpYS1zdXBwb3J0IGFuZCBpbS1pbnRlcmNlcHRzLXN0YXRpYy1icmVha3BvaW50KCRjb25kaXRpb25zLi4uKSkge1xuICAgIEBjb250ZW50O1xuICB9IEBlbHNlIGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA+IDApIHtcbiAgICBAbWVkaWEgI3t1bnF1b3RlKHBhcnNlLWV4cHJlc3Npb24obnRoKCRjb25kaXRpb25zLCAxKSkpfSB7XG4gICAgICAvLyBSZWN1cnNpdmUgY2FsbFxuICAgICAgQGluY2x1ZGUgbWVkaWEoc2xpY2UoJGNvbmRpdGlvbnMsIDIpLi4uKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL3RoZW1lL2dlbmVyYWwuc2Nzc1wiO1xyXG5cclxuXHJcblxyXG5pbWd7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTApO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uem9vbS1pbWFnZTpob3ZlcntcclxuICBpbWd7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuIFxyXG5cclxuXHJcbjo6bmctZGVlcCAubWF0LWZpZ3VyZXtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUge1xyXG4gICAgXHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiB9XHJcblxyXG5cclxuLmNhc2VzIHtcclxuICBtaW4taGVpZ2h0OiA1MHZoOyAvL2ZhbGxiYWNrXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDY1cHg7XHJcbiBcclxuICBcclxuICAucm93IHtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD10YWJsZXRcIikge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfSAgXHJcbiAgICAuY2FzZXMtdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBib3JkZXItbGVmdDogdGhpY2sgc29saWQgb3JhbmdlcmVkO1xyXG4gICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS41cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXNlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAzMy4zMzMzM3Z3O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkYmxhY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC5jYXNlLWltYWdlIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAmOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jYXNlLWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAzMnB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1kZXNrdG9wXCIsIFwiPnRhYmxldFwiKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgQGluY2x1ZGUgbWVkaWEoXCI8PXBob25lXCIpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjRyZW07XHJcbiAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiLCBcIj50YWJsZXRcIikge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGxhY2Vob2xkZXIxIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiLCBcIj50YWJsZXRcIikge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMi4ycmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYWNlaG9sZGVyMiB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XHJcbiAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiLCBcIj50YWJsZXRcIikge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAaW5jbHVkZSBtZWRpYShcIjw9cGhvbmVcIikge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuY2FzZS1pbWFnZSB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNjU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cyBjdWJpYy1iZXppZXIoMC42LCAtMC4wNSwgMC4xLCAwLjk5KTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlLWhpZGRlbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1hZ2UtbG9hZGVkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1haW4tcGFuZWx7XHJcbiAgQGluY2x1ZGUgbWVkaWEoXCI8PXRhYmxldFwiKSB7XHJcbiAgLy8gZGlzcGxheTogbm9uZTtcclxuICB9IFxyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxldC1vbmx5e1xyXG4gIFxyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBAaW5jbHVkZSBtZWRpYSgoIFwiPD10YWJsZXRcIikgYW5kIChcIj49cGhvbmVcIikpe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH0gXHJcbiAgIEBpbmNsdWRlIG1lZGlhKFwiPnRhYmxldFwiKXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH0gIFxyXG4gIFxyXG59XHJcblxyXG4ubW9iaWxlLW9ubHl7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gICBAaW5jbHVkZSBtZWRpYSAgKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgIH1cclxufVxyXG5cclxuLnJvd3tcclxuICBcclxuXHJcbiAgLmxlZnQtcGFuZWx7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMHZoOyBcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9dGFibGV0XCIpIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmctbGVmdDoyNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICB3aWR0aDogMTAwdmg7IFxyXG4gICAgICBoZWlnaHQ6IDEyMHZoO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH0gXHJcblxyXG4gICAgLmxlZnQtcGFuZWwtbWFpbi1jb250YWluZXIgeyBcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgd2lkdGg6IDEwMCU7IC8qIGZvciBJRSA2ICovXHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgaGVpZ2h0OiAyMy41ZW07XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgaW1ne1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgwKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjRzOyBcclxuICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgaGVpZ2h0OiAyMy41ZW07XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmNvdXJzZS1jb250ZW50IHsgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgbGVmdDogMDsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgIFxyXG4gICAgICB9IFxyXG4gICAgICBAaW5jbHVkZSBtZWRpYSggXCI8PXRhYmxldFwiKXtcclxuICAgICAgICBcclxuICAgICAgfSBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24yLWNvdXJzZXN7XHJcbiAgICAgIGhlaWdodDogMi41ZW07XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgLnNlY3Rpb24yLWNvdXJzZXMtaW1nLWNvbnRhaW5lcnsgICBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uMi1jb3Vyc2VzLWltZy1jb250YWluZXItaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICBoZWlnaHQ6IDE0ZW07XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24yLWNvdXJzZXMtaW1nLWNvbnRhaW5lcjpob3ZlcnsgICBcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNSUgNSUgNSUgNSU7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgb3JhbmdlcmVkO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY3Rpb24yLWNvdXJzZXM6aG92ZXJ7XHJcbiAgICAgIGltZ3tcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUlIDUlIDUlIDUlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCBvcmFuZ2VyZWQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnJpZ2h0LXBhbmVse1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuXHJcbiAgICBAaW5jbHVkZSBtZWRpYShcIjw9dGFibGV0XCIpIHtcclxuICAgICAgd2lkdGg6IDEwMHZoO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6MjVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9IFxyXG5cclxuICAgICAgXHJcbiAgICAucmlnaHQtcGFuZWwtY291cnNlc3tcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9IFxyXG5cclxuXHJcbiAgICAucmlnaHQtcGFuZWwtY291cnNlczpob3ZlcntcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIG9yYW5nZXJlZDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBoNXtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgICAgaDN7XHJcbiAgICAgICAgY29sb3I6ICM3ODc4Nzg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyLXJlY2VudGNvdXJzZXMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLyogQm90dG9tIHJpZ2h0IHRleHQgKi9cclxuLnRleHQtYmxvY2stcmVjZW50Y291cnNlcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjBweDtcclxuICBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentCoursesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'recent-courses',
          templateUrl: './recent-courses.component.html',
          styleUrls: ['./recent-courses.component.scss']
        }]
      }], function () {
        return [{
          type: _services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]
        }];
      }, {
        vh: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/search-page/search-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/search-page/search-page.component.ts ***!
    \************************************************************/

  /*! exports provided: SearchPageComponent */

  /***/
  function srcAppPagesSearchPageSearchPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function () {
      return SearchPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchPageComponent = /*#__PURE__*/function () {
      function SearchPageComponent() {
        _classCallCheck(this, SearchPageComponent);
      }

      _createClass(SearchPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchPageComponent;
    }();

    SearchPageComponent.ɵfac = function SearchPageComponent_Factory(t) {
      return new (t || SearchPageComponent)();
    };

    SearchPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchPageComponent,
      selectors: [["app-search-page"]],
      decls: 5,
      vars: 0,
      consts: [[1, "page"], [1, "container"], [1, "row"]],
      template: function SearchPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search-page works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".page[_ngcontent-%COMP%] {\n  position: relative;\n  background: white;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 1560px;\n  min-width: 1560px;\n  margin: 0 auto;\n  height: 100%;\n}\n\n@media (max-width: 1560px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1280px;\n    min-width: 1280px;\n  }\n}\n\n@media (max-width: 1366px) {\n  .container[_ngcontent-%COMP%] {\n    width: 1080px;\n    min-width: 1080px;\n  }\n}\n\n@media (max-width: 1080px) {\n  .container[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 100%;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  padding: 0 32px;\n}\n\n@media (max-width: 425px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n\n.container[_ngcontent-%COMP%]   .v-center[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.container[_ngcontent-%COMP%]   .space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.page[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background: white;\n}\n\n.page[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLXBhZ2UvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL3NyY1xcYXBwXFx0aGVtZVxcZ2VuZXJhbC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoLXBhZ2UvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL25vZGVfbW9kdWxlc1xcaW5jbHVkZS1tZWRpYVxcZGlzdFxcX2luY2x1ZGUtbWVkaWEuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoLXBhZ2UvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcZWxlYXJuL3NyY1xcYXBwXFxwYWdlc1xcc2VhcmNoLXBhZ2VcXHNlYXJjaC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNaRjs7QUN1aUJJO0VGL2hCSjtJQU1JLGFBQUE7SUFDQSxpQkFBQTtFQ1ZGO0FBQ0Y7O0FDaWlCSTtFRi9oQko7SUFVSSxhQUFBO0lBQ0EsaUJBQUE7RUNSRjtBQUNGOztBQzJoQkk7RUYvaEJKO0lBY0ksV0FBQTtJQUNBLGVBQUE7RUNORjtBQUNGOztBRE9FO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTEo7O0FDZ2hCSTtFRjlnQkY7SUFLSSxlQUFBO0VDSEo7QUFDRjs7QURLRTtFQUNFLG1CQUFBO0FDSEo7O0FES0U7RUFDRSw4QkFBQTtBQ0hKOztBRE9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNKRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDSEo7O0FFcERBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkhGTTtBQ3lEUjs7QUV0REU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUZ3REoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZWFyY2gtcGFnZS9zZWFyY2gtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvaW5jbHVkZS1tZWRpYS9kaXN0L2luY2x1ZGUtbWVkaWFcIjtcclxuXHJcbiR3aGl0ZTogd2hpdGU7XHJcbiRibGFjazogYmxhY2s7XHJcbiR5ZWxsb3c6IHJnYigyNDMsIDI0MywgMjA1KTtcclxuJGdyZXk6IHJnYmEoMTAwLCA5NywgOTcsIDAuNTE0KTtcclxuXHJcbiRicmVha3BvaW50czogKFxyXG4gIFwicGhvbmVcIjogNDI1cHgsXHJcbiAgXCJ0YWJsZXRcIjogNzY4cHgsXHJcbiAgXCJkZXNrdG9wXCI6IDEzNjZweCxcclxuICBcIkxHZGVza3RvcFwiOiAxOTIwcHgsXHJcbik7XHJcblxyXG4ucGFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxNTYwcHg7XHJcbiAgbWluLXdpZHRoOiAxNTYwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD0xNTYwcHhcIikge1xyXG4gICAgd2lkdGg6IDEyODBweDtcclxuICAgIG1pbi13aWR0aDogMTI4MHB4O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYShcIjw9ZGVza3RvcFwiKSB7XHJcbiAgICB3aWR0aDogMTA4MHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDgwcHg7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhKFwiPD0xMDgwcHhcIikge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAgMzJweDtcclxuICAgIEBpbmNsdWRlIG1lZGlhKFwiPD1waG9uZVwiKSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnYtY2VudGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxNTYwcHg7XG4gIG1pbi13aWR0aDogMTU2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE1NjBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTI4MHB4O1xuICAgIG1pbi13aWR0aDogMTI4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDgwcHg7XG4gICAgbWluLXdpZHRoOiAxMDgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICB9XG59XG4uY29udGFpbmVyIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAuY29udGFpbmVyIC5yb3cge1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxufVxuLmNvbnRhaW5lciAudi1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRhaW5lciAuc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wYWdlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnBhZ2UgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59IiwiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG4vLyAgICAgXyAgICAgICAgICAgIF8gICAgICAgICAgIF8gICAgICAgICAgICAgICAgICAgICAgICAgICBfIF9cbi8vICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXylcbi8vICAgICBfIF8gX18gICBfX198IHxfICAgXyAgX198IHwgX19fICAgXyBfXyBfX18gICBfX18gIF9ffCB8XyAgX18gX1xuLy8gICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcbi8vICAgIHwgfCB8IHwgfCAoX198IHwgfF98IHwgKF98IHwgIF9fLyB8IHwgfCB8IHwgfCAgX18vIChffCB8IHwgKF98IHxcbi8vICAgIHxffF98IHxffFxcX19ffF98XFxfXyxffFxcX18sX3xcXF9fX3wgfF98IHxffCB8X3xcXF9fX3xcXF9fLF98X3xcXF9fLF98XG4vL1xuLy8gICAgICBTaW1wbGUsIGVsZWdhbnQgYW5kIG1haW50YWluYWJsZSBtZWRpYSBxdWVyaWVzIGluIFNhc3Ncbi8vICAgICAgICAgICAgICAgICAgICAgICAgdjEuNC45XG4vL1xuLy8gICAgICAgICAgICAgICAgaHR0cDovL2luY2x1ZGUtbWVkaWEuY29tXG4vL1xuLy8gICAgICAgICBBdXRob3JzOiBFZHVhcmRvIEJvdWNhcyAoQGVkdWFyZG9ib3VjYXMpXG4vLyAgICAgICAgICAgICAgICAgIEh1Z28gR2lyYXVkZWwgKEBodWdvZ2lyYXVkZWwpXG4vL1xuLy8gICAgICBUaGlzIHByb2plY3QgaXMgbGljZW5zZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNSVQgbGljZW5zZVxuXG5cbi8vLy9cbi8vLyBpbmNsdWRlLW1lZGlhIGxpYnJhcnkgcHVibGljIGNvbmZpZ3VyYXRpb25cbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIGJyZWFrcG9pbnQgd2l0aCB0aGUgbGFiZWwgYHBob25lYFxuLy8vICAkYnJlYWtwb2ludHM6ICgncGhvbmUnOiAzMjBweCk7XG4vLy9cbiRicmVha3BvaW50czogKFxuICAncGhvbmUnOiAzMjBweCxcbiAgJ3RhYmxldCc6IDc2OHB4LFxuICAnZGVza3RvcCc6IDEwMjRweFxuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBzdGF0aWMgZXhwcmVzc2lvbnMgb3IgbWVkaWEgdHlwZXNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbic6ICdzY3JlZW4nKTtcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcbi8vLyAgJG1lZGlhLWV4cHJlc3Npb25zOiAoXG4vLy8gICAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSknXG4vLy8gICk7XG4vLy9cbiRtZWRpYS1leHByZXNzaW9uczogKFxuICAnc2NyZWVuJzogJ3NjcmVlbicsXG4gICdwcmludCc6ICdwcmludCcsXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXG4gICdsYW5kc2NhcGUnOiAnKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpJyxcbiAgJ3BvcnRyYWl0JzogJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyxcbiAgJ3JldGluYTJ4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpLCAobWluLXJlc29sdXRpb246IDE5MmRwaSksIChtaW4tcmVzb2x1dGlvbjogMmRwcHgpJyxcbiAgJ3JldGluYTN4JzogJygtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDMpLCAobWluLXJlc29sdXRpb246IDM1MGRwaSksIChtaW4tcmVzb2x1dGlvbjogM2RwcHgpJ1xuKSAhZGVmYXVsdDtcblxuXG4vLy9cbi8vLyBEZWZpbmVzIGEgbnVtYmVyIHRvIGJlIGFkZGVkIG9yIHN1YnRyYWN0ZWQgZnJvbSBlYWNoIHVuaXQgd2hlbiBkZWNsYXJpbmcgYnJlYWtwb2ludHMgd2l0aCBleGNsdXNpdmUgaW50ZXJ2YWxzXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+MTI4cHgnKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDEyOXB4KSB7fVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciBlbXMgaXMgZGVmaW5lZCBhcyBgMC4wMWAgYnkgZGVmYXVsdFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIwZW0nKSB7fVxuLy8vXG4vLy8gIC8qIEdlbmVyYXRlczogKi9cbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHJlbXMgaXMgZGVmaW5lZCBhcyBgMC4xYCBieSBkZWZhdWx0LCB0byBiZSB1c2VkIHdpdGggYGZvbnQtc2l6ZTogNjIuNSU7YFxuLy8vICBAaW5jbHVkZSBtZWRpYSgnPjIuMHJlbScpIHt9XG4vLy9cbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICBAbWVkaWEgKG1pbi13aWR0aDogMi4xcmVtKSB7fVxuLy8vXG4kdW5pdC1pbnRlcnZhbHM6IChcbiAgJ3B4JzogMSxcbiAgJ2VtJzogMC4wMSxcbiAgJ3JlbSc6IDAuMSxcbiAgJyc6IDBcbikgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIERlZmluZXMgd2hldGhlciBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzIGlzIGF2YWlsYWJsZSwgdXNlZnVsIGZvciBjcmVhdGluZyBzZXBhcmF0ZSBzdHlsZXNoZWV0c1xuLy8vIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWVkaWEgcXVlcmllcy5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBEaXNhYmxlcyBzdXBwb3J0IGZvciBtZWRpYSBxdWVyaWVzXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuJGltLW1lZGlhLXN1cHBvcnQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggYnJlYWtwb2ludCB0byBlbXVsYXRlIHdoZW4gc3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBpcyBkaXNhYmxlZC4gTWVkaWEgcXVlcmllcyB0aGF0IHN0YXJ0IGF0IG9yXG4vLy8gaW50ZXJjZXB0IHRoZSBicmVha3BvaW50IHdpbGwgYmUgZGlzcGxheWVkLCBhbnkgb3RoZXJzIHdpbGwgYmUgaWdub3JlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50XG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBHZW5lcmF0ZXM6ICovXG4vLy8gIC5mb28ge1xuLy8vICAgIGNvbG9yOiB0b21hdG87XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgTk9UIHNob3cgYmVjYXVzZSBpdCBkb2VzIG5vdCBpbnRlcmNlcHQgdGhlIGRlc2t0b3AgYnJlYWtwb2ludFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAndGFibGV0Jztcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49ZGVza3RvcCcpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbi8vLyAgLyogTm8gb3V0cHV0ICovXG4vLy9cbiRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCcgIWRlZmF1bHQ7XG5cbi8vL1xuLy8vIFNlbGVjdHMgd2hpY2ggbWVkaWEgZXhwcmVzc2lvbnMgYXJlIGFsbG93ZWQgaW4gYW4gZXhwcmVzc2lvbiBmb3IgaXQgdG8gYmUgdXNlZCB3aGVuIG1lZGlhIHF1ZXJpZXNcbi8vLyBhcmUgbm90IHN1cHBvcnRlZC5cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBUaGlzIG1lZGlhIHF1ZXJ5IHdpbGwgc2hvdyBiZWNhdXNlIGl0IGludGVyY2VwdHMgdGhlIHN0YXRpYyBicmVha3BvaW50IGFuZCBjb250YWlucyBvbmx5IGFjY2VwdGVkIG1lZGlhIGV4cHJlc3Npb25zXG4vLy8gICRpbS1tZWRpYS1zdXBwb3J0OiBmYWxzZTtcbi8vLyAgJGltLW5vLW1lZGlhLWJyZWFrcG9pbnQ6ICdkZXNrdG9wJztcbi8vLyAgJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicpO1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj10YWJsZXQnLCAnc2NyZWVuJykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAgLyogR2VuZXJhdGVzOiAqL1xuLy8vICAgLmZvbyB7XG4vLy8gICAgIGNvbG9yOiB0b21hdG87XG4vLy8gICB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gVGhpcyBtZWRpYSBxdWVyeSB3aWxsIE5PVCBzaG93IGJlY2F1c2UgaXQgaW50ZXJjZXB0cyB0aGUgc3RhdGljIGJyZWFrcG9pbnQgYnV0IGNvbnRhaW5zIGEgbWVkaWEgZXhwcmVzc2lvbiB0aGF0IGlzIG5vdCBhY2NlcHRlZFxuLy8vICAkaW0tbWVkaWEtc3VwcG9ydDogZmFsc2U7XG4vLy8gICRpbS1uby1tZWRpYS1icmVha3BvaW50OiAnZGVza3RvcCc7XG4vLy8gICRpbS1uby1tZWRpYS1leHByZXNzaW9uczogKCdzY3JlZW4nKTtcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz49dGFibGV0JywgJ3JldGluYTJ4Jykge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgY29sb3I6IHRvbWF0bztcbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vICAvKiBObyBvdXRwdXQgKi9cbi8vL1xuJGltLW5vLW1lZGlhLWV4cHJlc3Npb25zOiAoJ3NjcmVlbicsICdwb3J0cmFpdCcsICdsYW5kc2NhcGUnKSAhZGVmYXVsdDtcblxuLy8vL1xuLy8vIENyb3NzLWVuZ2luZSBsb2dnaW5nIGVuZ2luZVxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIExvZyBhIG1lc3NhZ2UgZWl0aGVyIHdpdGggYEBlcnJvcmAgaWYgc3VwcG9ydGVkXG4vLy8gZWxzZSB3aXRoIGBAd2FybmAsIHVzaW5nIGBmZWF0dXJlLWV4aXN0cygnYXQtZXJyb3InKWBcbi8vLyB0byBkZXRlY3Qgc3VwcG9ydC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBmdW5jdGlvbiBpbS1sb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGZlYXR1cmUtZXhpc3RzKCdhdC1lcnJvcicpIHtcbiAgICBAZXJyb3IgJG1lc3NhZ2U7XG4gIH0gQGVsc2Uge1xuICAgIEB3YXJuICRtZXNzYWdlO1xuICAgICRfOiBub29wKCk7XG4gIH1cblxuICBAcmV0dXJuICRtZXNzYWdlO1xufVxuXG5cbi8vL1xuLy8vIFdyYXBwZXIgbWl4aW4gZm9yIHRoZSBsb2cgZnVuY3Rpb24gc28gaXQgY2FuIGJlIHVzZWQgd2l0aCBhIG1vcmUgZnJpZW5kbHlcbi8vLyBBUEkgdGhhbiBgQGlmIGltLWxvZygnLi4nKSB7fWAgb3IgYCRfOiBpbS1sb2coJy4uJylgLiBCYXNpY2FsbHksIHVzZSB0aGUgZnVuY3Rpb25cbi8vLyB3aXRoaW4gZnVuY3Rpb25zIGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlIHRvIGluY2x1ZGUgYSBtaXhpbiBpbiBhIGZ1bmN0aW9uXG4vLy8gYW5kIHVzZSB0aGUgbWl4aW4gZXZlcnl3aGVyZSBlbHNlIGJlY2F1c2UgaXQncyBtdWNoIG1vcmUgZWxlZ2FudC5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkbWVzc2FnZSAtIE1lc3NhZ2UgdG8gbG9nXG4vLy9cbkBtaXhpbiBsb2coJG1lc3NhZ2UpIHtcbiAgQGlmIGltLWxvZygkbWVzc2FnZSkge31cbn1cblxuXG4vLy9cbi8vLyBGdW5jdGlvbiB3aXRoIG5vIGBAcmV0dXJuYCBjYWxsZWQgbmV4dCB0byBgQHdhcm5gIGluIFNhc3MgMy4zXG4vLy8gdG8gdHJpZ2dlciBhIGNvbXBpbGluZyBlcnJvciBhbmQgc3RvcCB0aGUgcHJvY2Vzcy5cbi8vL1xuQGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLy9cbi8vLyBEZXRlcm1pbmVzIHdoZXRoZXIgYSBsaXN0IG9mIGNvbmRpdGlvbnMgaXMgaW50ZXJjZXB0ZWQgYnkgdGhlIHN0YXRpYyBicmVha3BvaW50LlxuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEByZXR1cm4ge0Jvb2xlYW59IC0gUmV0dXJucyB0cnVlIGlmIHRoZSBjb25kaXRpb25zIGFyZSBpbnRlcmNlcHRlZCBieSB0aGUgc3RhdGljIGJyZWFrcG9pbnRcbi8vL1xuQGZ1bmN0aW9uIGltLWludGVyY2VwdHMtc3RhdGljLWJyZWFrcG9pbnQoJGNvbmRpdGlvbnMuLi4pIHtcbiAgJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWU6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkaW0tbm8tbWVkaWEtYnJlYWtwb2ludCk7XG5cbiAgQGlmIG5vdCAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSB7XG4gICAgQGlmIGltLWxvZygnYCN7JGltLW5vLW1lZGlhLWJyZWFrcG9pbnR9YCBpcyBub3QgYSB2YWxpZCBicmVha3BvaW50LicpIHt9XG4gIH1cblxuICBAZWFjaCAkY29uZGl0aW9uIGluICRjb25kaXRpb25zIHtcbiAgICBAaWYgbm90IG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGNvbmRpdGlvbikge1xuICAgICAgJG9wZXJhdG9yOiBnZXQtZXhwcmVzc2lvbi1vcGVyYXRvcigkY29uZGl0aW9uKTtcbiAgICAgICRwcmVmaXg6IGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpO1xuICAgICAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkY29uZGl0aW9uLCAkb3BlcmF0b3IpO1xuXG4gICAgICAvLyBzY3NzLWxpbnQ6ZGlzYWJsZSBTcGFjZUFyb3VuZE9wZXJhdG9yXG4gICAgICBAaWYgKCRwcmVmaXggPT0gJ21heCcgYW5kICR2YWx1ZSA8PSAkbm8tbWVkaWEtYnJlYWtwb2ludC12YWx1ZSkgb3JcbiAgICAgICAgICAoJHByZWZpeCA9PSAnbWluJyBhbmQgJHZhbHVlID4gJG5vLW1lZGlhLWJyZWFrcG9pbnQtdmFsdWUpIHtcbiAgICAgICAgQHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9IEBlbHNlIGlmIG5vdCBpbmRleCgkaW0tbm8tbWVkaWEtZXhwcmVzc2lvbnMsICRjb25kaXRpb24pIHtcbiAgICAgIEByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiB0cnVlO1xufVxuXG4vLy8vXG4vLy8gUGFyc2luZyBlbmdpbmVcbi8vLyBAYXV0aG9yIEh1Z28gR2lyYXVkZWxcbi8vLyBAYWNjZXNzIHByaXZhdGVcbi8vLy9cblxuXG4vLy9cbi8vLyBHZXQgb3BlcmF0b3Igb2YgYW4gZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBleHRyYWN0IG9wZXJhdG9yIGZyb21cbi8vL1xuLy8vIEByZXR1cm4ge1N0cmluZ30gLSBBbnkgb2YgYD49YCwgYD5gLCBgPD1gLCBgPGAsIGDiiaVgLCBg4omkYFxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tb3BlcmF0b3IoJGV4cHJlc3Npb24pIHtcbiAgQGVhY2ggJG9wZXJhdG9yIGluICgnPj0nLCAnPicsICc8PScsICc8JywgJ+KJpScsICfiiaQnKSB7XG4gICAgQGlmIHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICAgICBAcmV0dXJuICRvcGVyYXRvcjtcbiAgICB9XG4gIH1cblxuICAvLyBJdCBpcyBub3QgcG9zc2libGUgdG8gaW5jbHVkZSBhIG1peGluIGluc2lkZSBhIGZ1bmN0aW9uLCBzbyB3ZSBoYXZlIHRvXG4gIC8vIHJlbHkgb24gdGhlIGBpbS1sb2coLi4pYCBmdW5jdGlvbiByYXRoZXIgdGhhbiB0aGUgYGxvZyguLilgIG1peGluLiBCZWNhdXNlXG4gIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAvLyBhIGR1bW15IHZhcmlhYmxlLCBzdWNoIGFzIGAkX2AuIElmIGFueWJvZHkgZXZlciByYWlzZSBhIHNjb3BpbmcgaXNzdWUgd2l0aFxuICAvLyBTYXNzIDMuMywgY2hhbmdlIHRoaXMgbGluZSBpbiBgQGlmIGltLWxvZyguLikge31gIGluc3RlYWQuXG4gICRfOiBpbS1sb2coJ05vIG9wZXJhdG9yIGZvdW5kIGluIGAjeyRleHByZXNzaW9ufWAuJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IGRpbWVuc2lvbiBvZiBhbiBleHByZXNzaW9uLCBiYXNlZCBvbiBhIGZvdW5kIG9wZXJhdG9yXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGV4cHJlc3Npb24gLSBFeHByZXNzaW9uIHRvIGV4dHJhY3QgZGltZW5zaW9uIGZyb21cbi8vLyBAcGFyYW0ge1N0cmluZ30gJG9wZXJhdG9yIC0gT3BlcmF0b3IgZnJvbSBgJGV4cHJlc3Npb25gXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYHdpZHRoYCBvciBgaGVpZ2h0YCAob3IgcG90ZW50aWFsbHkgYW55dGhpbmcgZWxzZSlcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLWRpbWVuc2lvbigkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKSB7XG4gICRvcGVyYXRvci1pbmRleDogc3RyLWluZGV4KCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcGFyc2VkLWRpbWVuc2lvbjogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAwLCAkb3BlcmF0b3ItaW5kZXggLSAxKTtcbiAgJGRpbWVuc2lvbjogJ3dpZHRoJztcblxuICBAaWYgc3RyLWxlbmd0aCgkcGFyc2VkLWRpbWVuc2lvbikgPiAwIHtcbiAgICAkZGltZW5zaW9uOiAkcGFyc2VkLWRpbWVuc2lvbjtcbiAgfVxuXG4gIEByZXR1cm4gJGRpbWVuc2lvbjtcbn1cblxuXG4vLy9cbi8vLyBHZXQgZGltZW5zaW9uIHByZWZpeCBiYXNlZCBvbiBhbiBvcGVyYXRvclxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yXG4vLy9cbi8vLyBAcmV0dXJuIHtTdHJpbmd9IC0gYG1pbmAgb3IgYG1heGBcbi8vL1xuQGZ1bmN0aW9uIGdldC1leHByZXNzaW9uLXByZWZpeCgkb3BlcmF0b3IpIHtcbiAgQHJldHVybiBpZihpbmRleCgoJzwnLCAnPD0nLCAn4omkJyksICRvcGVyYXRvciksICdtYXgnLCAnbWluJyk7XG59XG5cblxuLy8vXG4vLy8gR2V0IHZhbHVlIG9mIGFuIGV4cHJlc3Npb24sIGJhc2VkIG9uIGEgZm91bmQgb3BlcmF0b3Jcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZXhwcmVzc2lvbiAtIEV4cHJlc3Npb24gdG8gZXh0cmFjdCB2YWx1ZSBmcm9tXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRvcGVyYXRvciAtIE9wZXJhdG9yIGZyb20gYCRleHByZXNzaW9uYFxuLy8vXG4vLy8gQHJldHVybiB7TnVtYmVyfSAtIEEgbnVtZXJpYyB2YWx1ZVxuLy8vXG5AZnVuY3Rpb24gZ2V0LWV4cHJlc3Npb24tdmFsdWUoJGV4cHJlc3Npb24sICRvcGVyYXRvcikge1xuICAkb3BlcmF0b3ItaW5kZXg6IHN0ci1pbmRleCgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sICRvcGVyYXRvci1pbmRleCArIHN0ci1sZW5ndGgoJG9wZXJhdG9yKSk7XG5cbiAgQGlmIG1hcC1oYXMta2V5KCRicmVha3BvaW50cywgJHZhbHVlKSB7XG4gICAgJHZhbHVlOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJHZhbHVlKTtcbiAgfSBAZWxzZSB7XG4gICAgJHZhbHVlOiB0by1udW1iZXIoJHZhbHVlKTtcbiAgfVxuXG4gICRpbnRlcnZhbDogbWFwLWdldCgkdW5pdC1pbnRlcnZhbHMsIHVuaXQoJHZhbHVlKSk7XG5cbiAgQGlmIG5vdCAkaW50ZXJ2YWwge1xuICAgIC8vIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBpbmNsdWRlIGEgbWl4aW4gaW5zaWRlIGEgZnVuY3Rpb24sIHNvIHdlIGhhdmUgdG9cbiAgICAvLyByZWx5IG9uIHRoZSBgaW0tbG9nKC4uKWAgZnVuY3Rpb24gcmF0aGVyIHRoYW4gdGhlIGBsb2coLi4pYCBtaXhpbi4gQmVjYXVzZVxuICAgIC8vIGZ1bmN0aW9ucyBjYW5ub3QgYmUgY2FsbGVkIGFueXdoZXJlIGluIFNhc3MsIHdlIG5lZWQgdG8gaGFjayB0aGUgY2FsbCBpblxuICAgIC8vIGEgZHVtbXkgdmFyaWFibGUsIHN1Y2ggYXMgYCRfYC4gSWYgYW55Ym9keSBldmVyIHJhaXNlIGEgc2NvcGluZyBpc3N1ZSB3aXRoXG4gICAgLy8gU2FzcyAzLjMsIGNoYW5nZSB0aGlzIGxpbmUgaW4gYEBpZiBpbS1sb2coLi4pIHt9YCBpbnN0ZWFkLlxuICAgICRfOiBpbS1sb2coJ1Vua25vd24gdW5pdCBgI3t1bml0KCR2YWx1ZSl9YC4nKTtcbiAgfVxuXG4gIEBpZiAkb3BlcmF0b3IgPT0gJz4nIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSArICRpbnRlcnZhbDtcbiAgfSBAZWxzZSBpZiAkb3BlcmF0b3IgPT0gJzwnIHtcbiAgICAkdmFsdWU6ICR2YWx1ZSAtICRpbnRlcnZhbDtcbiAgfVxuXG4gIEByZXR1cm4gJHZhbHVlO1xufVxuXG5cbi8vL1xuLy8vIFBhcnNlIGFuIGV4cHJlc3Npb24gdG8gcmV0dXJuIGEgdmFsaWQgbWVkaWEtcXVlcnkgZXhwcmVzc2lvblxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRleHByZXNzaW9uIC0gRXhwcmVzc2lvbiB0byBwYXJzZVxuLy8vXG4vLy8gQHJldHVybiB7U3RyaW5nfSAtIFZhbGlkIG1lZGlhIHF1ZXJ5XG4vLy9cbkBmdW5jdGlvbiBwYXJzZS1leHByZXNzaW9uKCRleHByZXNzaW9uKSB7XG4gIC8vIElmIGl0IGlzIHBhcnQgb2YgJG1lZGlhLWV4cHJlc3Npb25zLCBpdCBoYXMgbm8gb3BlcmF0b3JcbiAgLy8gdGhlbiB0aGVyZSBpcyBubyBuZWVkIHRvIGdvIGFueSBmdXJ0aGVyLCBqdXN0IHJldHVybiB0aGUgdmFsdWVcbiAgQGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcbiAgICBAcmV0dXJuIG1hcC1nZXQoJG1lZGlhLWV4cHJlc3Npb25zLCAkZXhwcmVzc2lvbik7XG4gIH1cblxuICAkb3BlcmF0b3I6IGdldC1leHByZXNzaW9uLW9wZXJhdG9yKCRleHByZXNzaW9uKTtcbiAgJGRpbWVuc2lvbjogZ2V0LWV4cHJlc3Npb24tZGltZW5zaW9uKCRleHByZXNzaW9uLCAkb3BlcmF0b3IpO1xuICAkcHJlZml4OiBnZXQtZXhwcmVzc2lvbi1wcmVmaXgoJG9wZXJhdG9yKTtcbiAgJHZhbHVlOiBnZXQtZXhwcmVzc2lvbi12YWx1ZSgkZXhwcmVzc2lvbiwgJG9wZXJhdG9yKTtcblxuICBAcmV0dXJuICcoI3skcHJlZml4fS0jeyRkaW1lbnNpb259OiAjeyR2YWx1ZX0pJztcbn1cblxuLy8vXG4vLy8gU2xpY2UgYCRsaXN0YCBiZXR3ZWVuIGAkc3RhcnRgIGFuZCBgJGVuZGAgaW5kZXhlc1xuLy8vXG4vLy8gQGFjY2VzcyBwcml2YXRlXG4vLy9cbi8vLyBAcGFyYW0ge0xpc3R9ICRsaXN0IC0gTGlzdCB0byBzbGljZVxuLy8vIEBwYXJhbSB7TnVtYmVyfSAkc3RhcnQgWzFdIC0gU3RhcnQgaW5kZXhcbi8vLyBAcGFyYW0ge051bWJlcn0gJGVuZCBbbGVuZ3RoKCRsaXN0KV0gLSBFbmQgaW5kZXhcbi8vL1xuLy8vIEByZXR1cm4ge0xpc3R9IFNsaWNlZCBsaXN0XG4vLy9cbkBmdW5jdGlvbiBzbGljZSgkbGlzdCwgJHN0YXJ0OiAxLCAkZW5kOiBsZW5ndGgoJGxpc3QpKSB7XG4gIEBpZiBsZW5ndGgoJGxpc3QpIDwgMSBvciAkc3RhcnQgPiAkZW5kIHtcbiAgICBAcmV0dXJuICgpO1xuICB9XG5cbiAgJHJlc3VsdDogKCk7XG5cbiAgQGZvciAkaSBmcm9tICRzdGFydCB0aHJvdWdoICRlbmQge1xuICAgICRyZXN1bHQ6IGFwcGVuZCgkcmVzdWx0LCBudGgoJGxpc3QsICRpKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cbi8vLy9cbi8vLyBTdHJpbmcgdG8gbnVtYmVyIGNvbnZlcnRlclxuLy8vIEBhdXRob3IgSHVnbyBHaXJhdWRlbFxuLy8vIEBhY2Nlc3MgcHJpdmF0ZVxuLy8vL1xuXG5cbi8vL1xuLy8vIENhc3RzIGEgc3RyaW5nIGludG8gYSBudW1iZXJcbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkdmFsdWUgLSBWYWx1ZSB0byBiZSBwYXJzZWRcbi8vL1xuLy8vIEByZXR1cm4ge051bWJlcn1cbi8vL1xuQGZ1bmN0aW9uIHRvLW51bWJlcigkdmFsdWUpIHtcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSA9PSAnbnVtYmVyJyB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgdHlwZS1vZigkdmFsdWUpICE9ICdzdHJpbmcnIHtcbiAgICAkXzogaW0tbG9nKCdWYWx1ZSBmb3IgYHRvLW51bWJlcmAgc2hvdWxkIGJlIGEgbnVtYmVyIG9yIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgJGZpcnN0LWNoYXJhY3Rlcjogc3RyLXNsaWNlKCR2YWx1ZSwgMSwgMSk7XG4gICRyZXN1bHQ6IDA7XG4gICRkaWdpdHM6IDA7XG4gICRtaW51czogKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKTtcbiAgJG51bWJlcnM6ICgnMCc6IDAsICcxJzogMSwgJzInOiAyLCAnMyc6IDMsICc0JzogNCwgJzUnOiA1LCAnNic6IDYsICc3JzogNywgJzgnOiA4LCAnOSc6IDkpO1xuXG4gIC8vIFJlbW92ZSArLy0gc2lnbiBpZiBwcmVzZW50IGF0IGZpcnN0IGNoYXJhY3RlclxuICBAaWYgKCRmaXJzdC1jaGFyYWN0ZXIgPT0gJysnIG9yICRmaXJzdC1jaGFyYWN0ZXIgPT0gJy0nKSB7XG4gICAgJHZhbHVlOiBzdHItc2xpY2UoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkdmFsdWUpIHtcbiAgICAkY2hhcmFjdGVyOiBzdHItc2xpY2UoJHZhbHVlLCAkaSwgJGkpO1xuXG4gICAgQGlmIG5vdCAoaW5kZXgobWFwLWtleXMoJG51bWJlcnMpLCAkY2hhcmFjdGVyKSBvciAkY2hhcmFjdGVyID09ICcuJykge1xuICAgICAgQHJldHVybiB0by1sZW5ndGgoaWYoJG1pbnVzLCAtJHJlc3VsdCwgJHJlc3VsdCksIHN0ci1zbGljZSgkdmFsdWUsICRpKSlcbiAgICB9XG5cbiAgICBAaWYgJGNoYXJhY3RlciA9PSAnLicge1xuICAgICAgJGRpZ2l0czogMTtcbiAgICB9IEBlbHNlIGlmICRkaWdpdHMgPT0gMCB7XG4gICAgICAkcmVzdWx0OiAkcmVzdWx0ICogMTAgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICRkaWdpdHM6ICRkaWdpdHMgKiAxMDtcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKyBtYXAtZ2V0KCRudW1iZXJzLCAkY2hhcmFjdGVyKSAvICRkaWdpdHM7XG4gICAgfVxuICB9XG5cbiAgQHJldHVybiBpZigkbWludXMsIC0kcmVzdWx0LCAkcmVzdWx0KTtcbn1cblxuXG4vLy9cbi8vLyBBZGQgYCR1bml0YCB0byBgJHZhbHVlYFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXJ9ICR2YWx1ZSAtIFZhbHVlIHRvIGFkZCB1bml0IHRvXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICR1bml0IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB1bml0XG4vLy9cbi8vLyBAcmV0dXJuIHtOdW1iZXJ9IC0gYCR2YWx1ZWAgZXhwcmVzc2VkIGluIGAkdW5pdGBcbi8vL1xuQGZ1bmN0aW9uIHRvLWxlbmd0aCgkdmFsdWUsICR1bml0KSB7XG4gICR1bml0czogKCdweCc6IDFweCwgJ2NtJzogMWNtLCAnbW0nOiAxbW0sICclJzogMSUsICdjaCc6IDFjaCwgJ3BjJzogMXBjLCAnaW4nOiAxaW4sICdlbSc6IDFlbSwgJ3JlbSc6IDFyZW0sICdwdCc6IDFwdCwgJ2V4JzogMWV4LCAndncnOiAxdncsICd2aCc6IDF2aCwgJ3ZtaW4nOiAxdm1pbiwgJ3ZtYXgnOiAxdm1heCk7XG5cbiAgQGlmIG5vdCBpbmRleChtYXAta2V5cygkdW5pdHMpLCAkdW5pdCkge1xuICAgICRfOiBpbS1sb2coJ0ludmFsaWQgdW5pdCBgI3skdW5pdH1gLicpO1xuICB9XG5cbiAgQHJldHVybiAkdmFsdWUgKiBtYXAtZ2V0KCR1bml0cywgJHVuaXQpO1xufVxuXG4vLy9cbi8vLyBUaGlzIG1peGluIGFpbXMgYXQgcmVkZWZpbmluZyB0aGUgY29uZmlndXJhdGlvbiBqdXN0IGZvciB0aGUgc2NvcGUgb2Zcbi8vLyB0aGUgY2FsbC4gSXQgaXMgaGVscGZ1bCB3aGVuIGhhdmluZyBhIGNvbXBvbmVudCBuZWVkaW5nIGFuIGV4dGVuZGVkXG4vLy8gY29uZmlndXJhdGlvbiBzdWNoIGFzIGN1c3RvbSBicmVha3BvaW50cyAocmVmZXJyZWQgdG8gYXMgdHdlYWtwb2ludHMpXG4vLy8gZm9yIGluc3RhbmNlLlxuLy8vXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXG4vLy9cbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrcG9pbnRzIFsoKV0gLSBNYXAgb2YgdHdlYWtwb2ludHMgdG8gYmUgbWVyZ2VkIHdpdGggYCRicmVha3BvaW50c2Bcbi8vLyBAcGFyYW0ge01hcH0gJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zIFsoKV0gLSBNYXAgb2YgdHdlYWtlZCBtZWRpYSBleHByZXNzaW9ucyB0byBiZSBtZXJnZWQgd2l0aCBgJG1lZGlhLWV4cHJlc3Npb25gXG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gRXh0ZW5kIHRoZSBnbG9iYWwgYnJlYWtwb2ludHMgd2l0aCBhIHR3ZWFrcG9pbnRcbi8vLyAgQGluY2x1ZGUgbWVkaWEtY29udGV4dCgoJ2N1c3RvbSc6IDY3OHB4KSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PWN1c3RvbScpIHtcbi8vLyAgICAgICAvLyAuLi5cbi8vLyAgICAgIH1cbi8vLyAgICB9XG4vLy8gIH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBFeHRlbmQgdGhlIGdsb2JhbCBtZWRpYSBleHByZXNzaW9ucyB3aXRoIGEgY3VzdG9tIG9uZVxuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCdhbGwnOiAnYWxsJykpIHtcbi8vLyAgICAuZm9vIHtcbi8vLyAgICAgIEBpbmNsdWRlIG1lZGlhKCdhbGwnLCAnPnBob25lJykge1xuLy8vICAgICAgIC8vIC4uLlxuLy8vICAgICAgfVxuLy8vICAgIH1cbi8vLyAgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEV4dGVuZCBib3RoIGNvbmZpZ3VyYXRpb24gbWFwc1xuLy8vICBAaW5jbHVkZSBtZWRpYS1jb250ZXh0KCgnY3VzdG9tJzogNjc4cHgpLCAoJ2FsbCc6ICdhbGwnKSkge1xuLy8vICAgIC5mb28ge1xuLy8vICAgICAgQGluY2x1ZGUgbWVkaWEoJ2FsbCcsICc+cGhvbmUnLCAnPD1jdXN0b20nKSB7XG4vLy8gICAgICAgLy8gLi4uXG4vLy8gICAgICB9XG4vLy8gICAgfVxuLy8vICB9XG4vLy9cbkBtaXhpbiBtZWRpYS1jb250ZXh0KCR0d2Vha3BvaW50czogKCksICR0d2Vhay1tZWRpYS1leHByZXNzaW9uczogKCkpIHtcbiAgLy8gU2F2ZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAkZ2xvYmFsLWJyZWFrcG9pbnRzOiAkYnJlYWtwb2ludHM7XG4gICRnbG9iYWwtbWVkaWEtZXhwcmVzc2lvbnM6ICRtZWRpYS1leHByZXNzaW9ucztcblxuICAvLyBVcGRhdGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiBtYXAtbWVyZ2UoJGJyZWFrcG9pbnRzLCAkdHdlYWtwb2ludHMpICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogbWFwLW1lcmdlKCRtZWRpYS1leHByZXNzaW9ucywgJHR3ZWFrLW1lZGlhLWV4cHJlc3Npb25zKSAhZ2xvYmFsO1xuXG4gIEBjb250ZW50O1xuXG4gIC8vIFJlc3RvcmUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgJGJyZWFrcG9pbnRzOiAkZ2xvYmFsLWJyZWFrcG9pbnRzICFnbG9iYWw7XG4gICRtZWRpYS1leHByZXNzaW9uczogJGdsb2JhbC1tZWRpYS1leHByZXNzaW9ucyAhZ2xvYmFsO1xufVxuXG4vLy8vXG4vLy8gaW5jbHVkZS1tZWRpYSBwdWJsaWMgZXhwb3NlZCBBUElcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXG4vLy8gQGFjY2VzcyBwdWJsaWNcbi8vLy9cblxuXG4vLy9cbi8vLyBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSBiYXNlZCBvbiBhIGxpc3Qgb2YgY29uZGl0aW9uc1xuLy8vXG4vLy8gQHBhcmFtIHtBcmdsaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIGEgc2luZ2xlIHNldCBicmVha3BvaW50XG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+cGhvbmUnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5waG9uZScsICc8PXRhYmxldCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIFdpdGggY3VzdG9tIHZhbHVlc1xuLy8vICBAaW5jbHVkZSBtZWRpYSgnPj0zNThweCcsICc8ODUwcHgnKSB7IH1cbi8vL1xuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHNldCBicmVha3BvaW50cyB3aXRoIGN1c3RvbSB2YWx1ZXNcbi8vLyAgQGluY2x1ZGUgbWVkaWEoJz5kZXNrdG9wJywgJzw9MTM1MHB4JykgeyB9XG4vLy9cbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCdyZXRpbmEyeCcpIHsgfVxuLy8vXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXG4vLy8gIEBpbmNsdWRlIG1lZGlhKCc+PTM1MHB4JywgJzx0YWJsZXQnLCAncmV0aW5hM3gnKSB7IH1cbi8vL1xuQG1peGluIG1lZGlhKCRjb25kaXRpb25zLi4uKSB7XG4gIC8vIHNjc3MtbGludDpkaXNhYmxlIFNwYWNlQXJvdW5kT3BlcmF0b3JcbiAgQGlmICgkaW0tbWVkaWEtc3VwcG9ydCBhbmQgbGVuZ3RoKCRjb25kaXRpb25zKSA9PSAwKSBvclxuICAgICAgKG5vdCAkaW0tbWVkaWEtc3VwcG9ydCBhbmQgaW0taW50ZXJjZXB0cy1zdGF0aWMtYnJlYWtwb2ludCgkY29uZGl0aW9ucy4uLikpIHtcbiAgICBAY29udGVudDtcbiAgfSBAZWxzZSBpZiAoJGltLW1lZGlhLXN1cHBvcnQgYW5kIGxlbmd0aCgkY29uZGl0aW9ucykgPiAwKSB7XG4gICAgQG1lZGlhICN7dW5xdW90ZShwYXJzZS1leHByZXNzaW9uKG50aCgkY29uZGl0aW9ucywgMSkpKX0ge1xuICAgICAgLy8gUmVjdXJzaXZlIGNhbGxcbiAgICAgIEBpbmNsdWRlIG1lZGlhKHNsaWNlKCRjb25kaXRpb25zLCAyKS4uLikge1xuICAgICAgICBAY29udGVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi90aGVtZS9nZW5lcmFsLnNjc3NcIjtcclxuLnBhZ2Uge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHdoaXRlO1xyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-page',
          templateUrl: './search-page.component.html',
          styleUrls: ['./search-page.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/content.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/content.service.ts ***!
    \*********************************************/

  /*! exports provided: ContentService */

  /***/
  function srcAppServicesContentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentService", function () {
      return ContentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../constants */
    "./src/app/constants.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ContentService = /*#__PURE__*/function () {
      function ContentService(httpClient) {
        _classCallCheck(this, ContentService);

        this.httpClient = httpClient;
      }

      _createClass(ContentService, [{
        key: "getFeaturedSubTopic",
        value: function getFeaturedSubTopic() {
          return this.httpClient.get(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL + 'featured-sub-topics');
        }
      }, {
        key: "getTopicById",
        value: function getTopicById(id) {
          return this.httpClient.get(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL + 'topics' + "/".concat(id));
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return this.httpClient.get(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL + 'categories');
        }
      }, {
        key: "searchCategories",
        value: function searchCategories(search) {
          return this.httpClient.get(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL + 'categories' + "?title_contains=".concat(search, "&categoryDescription_contains=").concat(search));
        }
      }, {
        key: "getSubTopicById",
        value: function getSubTopicById(id) {
          return this.httpClient.get(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL + 'sub-topics' + "/".concat(id));
        }
      }, {
        key: "getCoursesByCategory",
        value: function getCoursesByCategory(category) {
          return this.httpClient.get(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL + 'courses' + "?category.id=".concat(category.id));
        }
      }, {
        key: "searchCourses",
        value: function searchCourses(search) {
          return this.httpClient.get(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL + 'courses' + "?title_contains=".concat(search, "&courseDescription_contains=").concat(search));
        }
      }, {
        key: "getLessons",
        value: function getLessons(course) {
          return this.httpClient.get(_constants__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_SERVICE_URL + 'lessons' + "?course.id=".concat(course.id));
        }
      }]);

      return ContentService;
    }();

    ContentService.ɵfac = function ContentService_Factory(t) {
      return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ContentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ContentService,
      factory: ContentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/svg/arrow-left/arrow-left.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/svg/arrow-left/arrow-left.component.ts ***!
    \********************************************************/

  /*! exports provided: ArrowLeftComponent */

  /***/
  function srcAppSvgArrowLeftArrowLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrowLeftComponent", function () {
      return ArrowLeftComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ArrowLeftComponent = /*#__PURE__*/function () {
      function ArrowLeftComponent() {
        _classCallCheck(this, ArrowLeftComponent);
      }

      _createClass(ArrowLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ArrowLeftComponent;
    }();

    ArrowLeftComponent.ɵfac = function ArrowLeftComponent_Factory(t) {
      return new (t || ArrowLeftComponent)();
    };

    ArrowLeftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArrowLeftComponent,
      selectors: [["arrow-left"]],
      decls: 2,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-arrow-left"], ["points", "12 19 5 12 12 5"]],
      template: function ArrowLeftComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polyline", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Zy9hcnJvdy1sZWZ0L2Fycm93LWxlZnQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrowLeftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'arrow-left',
          templateUrl: './arrow-left.svg',
          styleUrls: ['./arrow-left.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/svg/arrow-right/arrow-right.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/svg/arrow-right/arrow-right.component.ts ***!
    \**********************************************************/

  /*! exports provided: ArrowRightComponent */

  /***/
  function srcAppSvgArrowRightArrowRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArrowRightComponent", function () {
      return ArrowRightComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ArrowRightComponent = /*#__PURE__*/function () {
      function ArrowRightComponent() {
        _classCallCheck(this, ArrowRightComponent);
      }

      _createClass(ArrowRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ArrowRightComponent;
    }();

    ArrowRightComponent.ɵfac = function ArrowRightComponent_Factory(t) {
      return new (t || ArrowRightComponent)();
    };

    ArrowRightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArrowRightComponent,
      selectors: [["arrow-right"]],
      decls: 2,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-arrow-right"], ["points", "12 5 19 12 12 19"]],
      template: function ArrowRightComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polyline", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Zy9hcnJvdy1yaWdodC9hcnJvdy1yaWdodC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrowRightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'arrow-right',
          templateUrl: './arrow-right.svg',
          styleUrls: ['./arrow-right.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/svg/uparrow/uparrow-circle/uparrow-circle.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/svg/uparrow/uparrow-circle/uparrow-circle.component.ts ***!
    \************************************************************************/

  /*! exports provided: UparrowCircleComponent */

  /***/
  function srcAppSvgUparrowUparrowCircleUparrowCircleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UparrowCircleComponent", function () {
      return UparrowCircleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UparrowCircleComponent = /*#__PURE__*/function () {
      function UparrowCircleComponent() {
        _classCallCheck(this, UparrowCircleComponent);
      }

      _createClass(UparrowCircleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UparrowCircleComponent;
    }();

    UparrowCircleComponent.ɵfac = function UparrowCircleComponent_Factory(t) {
      return new (t || UparrowCircleComponent)();
    };

    UparrowCircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UparrowCircleComponent,
      selectors: [["uparrow-circle"]],
      decls: 8,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "64", "height", "64", "viewBox", "0 0 64 64"], ["id", "Group_1", "data-name", "Group 1", "transform", "translate(-152 -439)"], ["id", "Line_1", "data-name", "Line 1", "y1", "14.91", "transform", "translate(184 463.788)", "fill", "none", "stroke", "#000", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5"], ["id", "Path_1", "data-name", "Path 1", "d", "M6,9.155,10.949,5", "transform", "translate(173.051 458.302)", "fill", "none", "stroke", "#000", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5"], ["id", "Path_2", "data-name", "Path 2", "d", "M10.949,5,15.9,9.155", "transform", "translate(173.051 458.302)", "fill", "none", "stroke", "#000", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2.5"], ["id", "Ellipse_1", "data-name", "Ellipse 1", "transform", "translate(152 439)", "fill", "none", "stroke", "rgba(0,0,0,0.2)", "stroke-width", "2.5"], ["cx", "32", "cy", "32", "r", "32", "stroke", "none"], ["id", "circle", "cx", "32", "cy", "32", "r", "30.75", "fill", "none"]],
      template: function UparrowCircleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "line", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "circle", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Zy91cGFycm93L3VwYXJyb3ctY2lyY2xlL3VwYXJyb3ctY2lyY2xlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UparrowCircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'uparrow-circle',
          templateUrl: './uparrow-circle.svg',
          styleUrls: ['./uparrow-circle.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utility/click-outside.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/utility/click-outside.directive.ts ***!
    \****************************************************/

  /*! exports provided: ClickOutsideDirective */

  /***/
  function srcAppUtilityClickOutsideDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function () {
      return ClickOutsideDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ClickOutsideDirective = /*#__PURE__*/function () {
      function ClickOutsideDirective(_elementRef) {
        _classCallCheck(this, ClickOutsideDirective);

        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ClickOutsideDirective, [{
        key: "onClick",
        value: function onClick(event, targetElement) {
          if (!targetElement) {
            return;
          }

          var clickedInside = this._elementRef.nativeElement.contains(targetElement);

          if (!clickedInside) {
            this.clickOutside.emit(event);
          }
        }
      }]);

      return ClickOutsideDirective;
    }();

    ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) {
      return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ClickOutsideDirective,
      selectors: [["", "clickOutside", ""]],
      hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) {
            return ctx.onClick($event, $event.target);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }
      },
      outputs: {
        clickOutside: "clickOutside"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[clickOutside]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        clickOutside: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event', '$event.target']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/utility/image-preload.directive.ts":
  /*!****************************************************!*\
    !*** ./src/app/utility/image-preload.directive.ts ***!
    \****************************************************/

  /*! exports provided: ImagePreloadDirective */

  /***/
  function srcAppUtilityImagePreloadDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagePreloadDirective", function () {
      return ImagePreloadDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ImagePreloadDirective = /*#__PURE__*/function () {
      function ImagePreloadDirective() {
        _classCallCheck(this, ImagePreloadDirective);
      }

      _createClass(ImagePreloadDirective, [{
        key: "updateUrl",
        value: function updateUrl() {
          this.src = this["default"];
        }
      }, {
        key: "load",
        value: function load() {
          this.className = 'image-loaded';
        }
      }]);

      return ImagePreloadDirective;
    }();

    ImagePreloadDirective.ɵfac = function ImagePreloadDirective_Factory(t) {
      return new (t || ImagePreloadDirective)();
    };

    ImagePreloadDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ImagePreloadDirective,
      selectors: [["img", "default", ""]],
      hostVars: 3,
      hostBindings: function ImagePreloadDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImagePreloadDirective_error_HostBindingHandler() {
            return ctx.updateUrl();
          })("load", function ImagePreloadDirective_load_HostBindingHandler() {
            return ctx.load();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("src", ctx.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.className);
        }
      },
      inputs: {
        src: "src",
        "default": "default"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagePreloadDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'img[default]',
          host: {
            '(error)': 'updateUrl()',
            '(load)': 'load()',
            '[src]': 'src'
          }
        }]
      }], null, {
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        "default": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\User\Desktop\projects\elearn\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map