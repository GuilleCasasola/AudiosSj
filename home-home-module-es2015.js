(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" >\n  <!-- <ion-item lines=\"none\">\n    <ion-button (click)=\"mostrarPop($event)\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n    </ion-button>\n  </ion-item> -->\n  <ion-item lines=\"none\">\n    <div class=\"ion-padding-top ion-padding-start ion-padding-bottom\">\n      <ion-label>\n        <h2>Audios de Whatsapp SJ</h2>\n      </ion-label>\n      \n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"10\">\n          <ion-searchbar mode=\"md\" (keydown.enter)='buscar()' placeholder=\"Buscar\" [(ngModel)]=\"textoBuscar\"  color=\"light\" searchIcon=\"musical-notes\"></ion-searchbar>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button color=\"light\" fill=\"clear\" (click)=\"buscar()\">\n            <ion-icon slot=\"icon-only\" name=\"search-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-item>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <p style=\"font-size: 0.6rem; text-align: center; background-color: #FFBF00; margin:0; padding: 5px 0\"> Desliza el audio a la izquierda para compartir o descargar </p>\n  <ion-img src=\"/assets/loading.gif\" style=\"height:0px\" ></ion-img>\n  <ion-list >\n    <ion-item-sliding *ngFor=\"let a of audiosBuscar\">\n      <ion-item class=\"claro\">\n        <ion-label>{{a.titulo}}</ion-label>\n        <ion-badge *ngIf=\"a.explicit\" color=\"danger\" > explicit </ion-badge>\n        <ion-badge *ngIf=\"!a.sanjuanino\" > argentino </ion-badge>\n        <ion-badge *ngIf=\"a.nuevo\" color=\"success\" > new </ion-badge>\n\n        <ion-button *ngIf=\"!a.cargando\" slot=\"end\" color=\"dark\" fill=\"clear\" (click)=\"play(a)\">\n          <ion-icon *ngIf=\"!a.reproduciendo\" slot=\"icon-only\" name=\"play-outline\"></ion-icon>\n          <ion-icon *ngIf=\"a.reproduciendo\" slot=\"icon-only\"  name=\"pause-outline\"></ion-icon>\n        </ion-button>\n\n        <ion-img *ngIf=\"a.cargando\" slot=\"end\" src=\"/assets/loading.gif\" style=\"height: 40px;\"></ion-img>\n      </ion-item>\n\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"Compartir(a)\"><ion-icon  size=\"large\"  name=\"share-social-outline\"></ion-icon></ion-item-option>\n        \n        <ion-button class=\"downloadBtn\" color=\"app\"  >\n          <a [href]=\"a.url\" [download]=\"a.titulo\" color=\"white\">\n            <ion-icon size=\"large\" name=\"download-outline\"></ion-icon>\n          </a>\n        </ion-button>\n        \n        \n      </ion-item-options>\n\n    </ion-item-sliding>\n  </ion-list>\n  <ion-button color=\"dark\" *ngIf=\"buscando\" (click)=\"verTodos()\" expand=\"full\">Ver todos</ion-button>\n \n  <div class=\"ion-padding ion-text-center divfinal\" >\n    Por alguna sugerencia, reclamo o si querés agregar un audio.\n    <a href=\"https://www.instagram.com/camichavesapps/\"> ¡Hablános!</a>\n  </div>\n</ion-content>  \n  <div *ngIf=\"reproduciendo\"   class=\"player\">\n    <div style=\"background-color: white; padding: 10px 0 5px 20px;\"> \n      <b>{{dataAudioPlaying.titulo}}</b>\n    </div>\n    <div>\n      <audio   id=\"audioPlayer\" controls=\"\" name=\"media\" >\n        <source id=\"playerSource\" [src]=\"audioSrc\" type=\"audio/mpeg\">\n      </audio>\n     </div>\n    </div>\n\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-item {\n  --background: #000000;\n}\nion-header ion-item h2 {\n  font-weight: bold;\n  font-size: 20px;\n  color: #ffffff;\n}\nion-header ion-item:last-of-type {\n  border-radius: 0 0 0 0;\n}\nion-header ion-item:last-of-type div {\n  padding-bottom: 20px;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 10px;\n  opacity: 0.96;\n  padding: 0;\n  margin: 12px 0;\n}\nion-col {\n  padding: 0;\n}\nion-content {\n  --background: #f6f6f6;\n}\n.claro {\n  --background: #ffffff;\n}\nion-card {\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 30px;\n  margin-bottom: 22px;\n}\nion-card ion-img {\n  width: 200px;\n  margin: 0 auto;\n}\n.divfinal {\n  --background: #9d9fa6;\n  color: black;\n  font-size: small;\n  padding-bottom: 50px;\n}\n.player {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  border: solid 3px;\n  border-color: #000;\n  background-color: #fff;\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n}\n.downloadBtn {\n  height: 100%;\n  width: 52px;\n  margin: 0;\n  border-radius: 0;\n  padding: 0 0 0 0;\n  background-color: #289d8e;\n}\n#audioPlayer {\n  width: 100%;\n}\n.downloadBtn a {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFSjtBQUVBO0VBSUUsc0JBQUE7QUFGRjtBQURFO0VBQ0Usb0JBQUE7QUFHSjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUE7RUFDRSxVQUFBO0FBQ0Y7QUFNQTtFQUNFLHFCQUFBO0FBSEY7QUFNQTtFQUNFLHFCQUFBO0FBSEY7QUFNQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUhGO0FBS0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQUhKO0FBUUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBTEY7QUFRQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzSEFBQTtBQUxEO0FBUUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFMRjtBQU9DO0VBQ0UsV0FBQTtBQUpIO0FBT0E7RUFDQyxXQUFBO0FBSkQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxufVxuXG5pb24taGVhZGVyIGlvbi1pdGVtOmxhc3Qtb2YtdHlwZSB7XG4gIGRpdiB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgYm9yZGVyLXJhZGl1czogMCAwIDAgMDtcbn1cblxuaW9uLXNlYXJjaGJhciB7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAuOTY7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTJweCAwO1xufVxuXG5pb24tY29sIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLy8gOjpuZy1kZWVwIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xuLy8gICBjb2xvcjogIzMxNmRkMCAhaW1wb3J0YW50O1xuLy8gfVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cblxuLmNsYXJve1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIycHg7XG5cbiAgaW9uLWltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgXG59XG4uZGl2ZmluYWx7XG4gIC0tYmFja2dyb3VuZDogIzlkOWZhNjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLnBsYXllciB7XG4gcG9zaXRpb246IGFic29sdXRlO1xuIGJvdHRvbTogMHB4OyBcbiB3aWR0aDogMTAwJTtcbiBib3JkZXI6IHNvbGlkIDNweDtcbiBib3JkZXItY29sb3I6ICMwMDA7XG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4uZG93bmxvYWRCdG57XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDUycHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMCAwIDAgMCA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODlkOGU7XG59XG4gI2F1ZGlvUGxheWVyIHtcbiAgIHdpZHRoOiAxMDAlO1xuIH1cblxuLmRvd25sb2FkQnRuIGF7XG4gY29sb3I6ICNmZmY7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_audios_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/audios.service */ "./src/app/services/audios.service.ts");




let HomePage = class HomePage {
    constructor(audiosService, route) {
        this.audiosService = audiosService;
        this.route = route;
        this.cargando = true;
        this.audios = [];
        this.audiosBuscar = [];
        this.buscando = false;
        this.audio = new Audio();
        this.navigator = window.navigator;
        this.reproduciendo = false;
        this.audioSrc = "";
    }
    ngOnInit() {
        this.audiosService.getAudios().subscribe((data) => {
            this.audios = data.sort(function (a, b) {
                return a.titulo.localeCompare(b.titulo);
            });
            this.route.queryParams.subscribe(data => {
                if (data.audio) {
                    let audio = this.audios.find(function (post, index) {
                        if (post.id == data.audio) {
                            return post;
                        }
                    });
                    this.play(audio);
                }
                console.log(data.audio);
            });
            this.audiosBuscar = this.audios;
        });
        this.cargando = false;
    }
    ngAfterViewInit() {
    }
    buscar() {
        this.audiosBuscar = [];
        let searchText = this.textoBuscar.toLocaleLowerCase();
        this.audios.forEach((audio) => {
            if (audio.descripcion.toLocaleLowerCase().includes(searchText)) {
                this.audiosBuscar.push(audio);
            }
        });
        this.buscando = true;
    }
    verTodos() {
        this.buscando = false;
        this.textoBuscar = '';
        this.audiosBuscar = this.audios;
    }
    Compartir(a) {
        if (window.navigator && window.navigator.share) {
            window.navigator['share']({
                title: "Escuchá el audio '" + a.titulo + "' en AudiosSj",
                url: '/?audio=' + a.id
            })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        }
        else {
            alert('EL navegador no permite compartir');
        }
    }
    play(a) {
        this.dataAudioPlaying = a;
        this.pausar(a);
        if (a.reproduciendo) {
            a.reproduciendo = false;
            return;
        }
        this.reproduciendo = true;
        this.audio.src = a.url;
        this.audio.load();
        a.cargando = true;
        this.audioSrc = a.url;
        this.listener = this.audio.addEventListener('canplaythrough', (event) => {
            // @ts-ignore
            if (event.target.src.split('/assets/audios/')[1] === a.url.split('/assets/audios/')[1]) {
                a.cargando = false;
                // this.audio.play();
                a.reproduciendo = true;
                setTimeout(() => {
                    let ap;
                    ap = document.getElementById('audioPlayer');
                    ap.play();
                }, 500);
                this.audioTiempo = setTimeout(() => {
                    a.reproduciendo = false;
                    a.cargando = false;
                }, a.duracion * 1000);
            }
        }, { once: true });
    }
    pausar(a) {
        clearTimeout(this.audioTiempo);
        this.reproduciendo = false;
        this.audio.pause();
        this.audio.currentTime = 0;
        for (let audio of this.audiosBuscar) {
            if (audio.titulo !== a.titulo) {
                audio.reproduciendo = false;
                audio.cargando = false;
            }
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_audios_service__WEBPACK_IMPORTED_MODULE_3__["AudiosService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HomePage.propDecorators = {
    audioPlayer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['audioPlayer',] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/services/audios.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/audios.service.ts ***!
  \********************************************/
/*! exports provided: AudiosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudiosService", function() { return AudiosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let AudiosService = class AudiosService {
    constructor(http) {
        this.http = http;
    }
    getAudios() {
        return this.http.get('assets/audios.json');
    }
};
AudiosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AudiosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AudiosService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map