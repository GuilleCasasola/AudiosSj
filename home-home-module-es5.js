(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" >\n  <!-- <ion-item lines=\"none\">\n    <ion-button (click)=\"mostrarPop($event)\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n    </ion-button>\n  </ion-item> -->\n  <ion-item lines=\"none\">\n    <div class=\"ion-padding-top ion-padding-start ion-padding-bottom\">\n      <ion-label>\n        <h2>Audios de Whatsapp SJ</h2>\n      </ion-label>\n      \n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"10\">\n          <ion-searchbar mode=\"md\" (keydown.enter)='buscar()' placeholder=\"Buscar\" [(ngModel)]=\"textoBuscar\"  color=\"light\" searchIcon=\"musical-notes\"></ion-searchbar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button color=\"light\" fill=\"clear\" (click)=\"buscar()\">\n            <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-item>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-img src=\"/assets/loading.gif\" style=\"height:0px\" ></ion-img>\n  <ion-list >\n    <ion-item-sliding *ngFor=\"let a of audiosBuscar\">\n      <ion-item class=\"claro\">\n        <ion-label>{{a.titulo}}</ion-label>\n        <ion-badge *ngIf=\"a.explicit\" color=\"danger\" > explicit </ion-badge>\n        <ion-badge *ngIf=\"!a.sanjuanino\" > argentino </ion-badge>\n        <ion-badge *ngIf=\"a.nuevo\" color=\"success\" > new </ion-badge>\n        <ion-button *ngIf=\"!a.cargando\" slot=\"end\" color=\"dark\" fill=\"clear\" (click)=\"play(a)\">\n          <ion-icon *ngIf=\"!a.reproduciendo\" slot=\"icon-only\" name=\"play-outline\"></ion-icon>\n          <ion-icon *ngIf=\"a.reproduciendo\" slot=\"icon-only\"  name=\"pause-outline\"></ion-icon>\n        </ion-button>\n        <ion-img *ngIf=\"a.cargando\" slot=\"end\" src=\"/assets/loading.gif\" style=\"height: 40px;\"></ion-img>\n      </ion-item>\n      <!-- <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"Compartir(a)\">Compartir</ion-item-option>\n      </ion-item-options> -->\n    </ion-item-sliding>\n  </ion-list>\n  <ion-button color=\"dark\" *ngIf=\"buscando\" (click)=\"verTodos()\" expand=\"full\">Ver todos</ion-button>\n  <!-- <video controls=\"\" autoplay=\"\" name=\"media\"><source src=\"https://audiossanjuan.web.app/assets/audios/3700salelainstalacion.mp3\" type=\"audio/mpeg\"></video> -->\n  <div class=\"ion-padding ion-text-center divfinal\" style=\"font-size: small;\">\n    Por alguna sugerencia, reclamo o si querés agregar un audio.\n    <a href=\"https://www.instagram.com/guicasoftware/\"> ¡Hablános!</a>\n  </div>\n\n</ion-content>  \n\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-item {\n  --background: #000000;\n}\nion-header ion-item h2 {\n  font-weight: bold;\n  font-size: 20px;\n  color: #ffffff;\n}\nion-header ion-item:last-of-type {\n  border-radius: 0 0 0 0;\n}\nion-header ion-item:last-of-type div {\n  padding-bottom: 20px;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 10px;\n  opacity: 0.96;\n  padding: 0;\n  margin: 12px 0;\n}\nion-col {\n  padding: 0;\n}\nion-content {\n  --background: #f6f6f6;\n}\n.claro {\n  --background: #ffffff;\n}\nion-card {\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 30px;\n  margin-bottom: 22px;\n}\nion-card ion-img {\n  width: 200px;\n  margin: 0 auto;\n}\nion-card .divfinal {\n  --background: #9d9fa6;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFSjtBQUVBO0VBSUUsc0JBQUE7QUFGRjtBQURFO0VBQ0Usb0JBQUE7QUFHSjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUE7RUFDRSxVQUFBO0FBQ0Y7QUFNQTtFQUNFLHFCQUFBO0FBSEY7QUFNQTtFQUNFLHFCQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUhKO0FBTUU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDAwMDAwO1xuICBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG59XG5cbmlvbi1oZWFkZXIgaW9uLWl0ZW06bGFzdC1vZi10eXBlIHtcbiAgZGl2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgfVxuICBib3JkZXItcmFkaXVzOiAwIDAgMCAwO1xufVxuXG5pb24tc2VhcmNoYmFyIHtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IC45NjtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG5cbmlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vLyA6Om5nLWRlZXAgLnNlYXJjaGJhci1zZWFyY2gtaWNvbiB7XG4vLyAgIGNvbG9yOiAjMzE2ZGQwICFpbXBvcnRhbnQ7XG4vLyB9XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xufVxuXG4uY2xhcm97XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuaW9uLWNhcmQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjJweDtcblxuICBpb24taW1nIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuZGl2ZmluYWx7XG4gICAgLS1iYWNrZ3JvdW5kOiAjOWQ5ZmE2O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_audios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/audios.service */
      "./src/app/services/audios.service.ts");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(audiosService) {
          _classCallCheck(this, HomePage);

          this.audiosService = audiosService;
          this.cargando = true;
          this.audios = [];
          this.audiosBuscar = [];
          this.buscando = false;
          this.audio = new Audio();
        }

        _createClass(HomePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.audiosService.getAudios().subscribe(function (data) {
              _this.audios = data.sort(function (a, b) {
                return a.titulo.localeCompare(b.titulo);
              });
              _this.audiosBuscar = _this.audios;
            });
            this.cargando = false;
          }
        }, {
          key: "buscar",
          value: function buscar() {
            var _this2 = this;

            this.audiosBuscar = [];
            var searchText = this.textoBuscar.toLocaleLowerCase();
            this.audios.forEach(function (audio) {
              if (audio.descripcion.toLocaleLowerCase().includes(searchText)) {
                _this2.audiosBuscar.push(audio);
              }
            });
            this.buscando = true;
          }
        }, {
          key: "verTodos",
          value: function verTodos() {
            this.buscando = false;
            this.textoBuscar = '';
            this.audiosBuscar = this.audios;
          }
        }, {
          key: "Compartir",
          value: function Compartir(a) {}
        }, {
          key: "play",
          value: function play(a) {
            var _this3 = this;

            this.pausar(a);

            if (a.reproduciendo) {
              a.reproduciendo = false;
              return;
            }

            this.audio.src = a.url;
            this.audio.load();
            a.cargando = true;
            this.listener = this.audio.addEventListener('canplaythrough', function (event) {
              // @ts-ignore
              if (event.target.src.split('/assets/audios/')[1] === a.url.split('/assets/audios/')[1]) {
                a.cargando = false;

                _this3.audio.play();

                a.reproduciendo = true;
                _this3.audioTiempo = setTimeout(function () {
                  a.reproduciendo = false;
                  a.cargando = false;
                }, a.duracion * 1000);
              }
            }, {
              once: true
            });
          }
        }, {
          key: "pausar",
          value: function pausar(a) {
            clearTimeout(this.audioTiempo);
            this.audio.pause();
            this.audio.currentTime = 0;

            var _iterator = _createForOfIteratorHelper(this.audiosBuscar),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var audio = _step.value;

                if (audio.titulo !== a.titulo) {
                  audio.reproduciendo = false;
                  audio.cargando = false;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _services_audios_service__WEBPACK_IMPORTED_MODULE_2__["AudiosService"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    },

    /***/
    "./src/app/services/audios.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/audios.service.ts ***!
      \********************************************/

    /*! exports provided: AudiosService */

    /***/
    function srcAppServicesAudiosServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AudiosService", function () {
        return AudiosService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AudiosService = /*#__PURE__*/function () {
        function AudiosService(http) {
          _classCallCheck(this, AudiosService);

          this.http = http;
        }

        _createClass(AudiosService, [{
          key: "getAudios",
          value: function getAudios() {
            return this.http.get('assets/audios.json');
          }
        }]);

        return AudiosService;
      }();

      AudiosService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      AudiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AudiosService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map