!function(){function n(n,t){var i;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(i=function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);"Object"===i&&n.constructor&&(i=n.constructor.name);if("Map"===i||"Set"===i)return Array.from(n);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(n,t)}(n))||t&&n&&"number"==typeof n.length){i&&(n=i);var e=0,r=function(){};return{s:r,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){i=n[Symbol.iterator]()},n:function(){var n=i.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==i.return||i.return()}finally{if(u)throw a}}}}function o(n,o){(null==o||o>n.length)&&(o=n.length);for(var t=0,i=new Array(o);t<o;t++)i[t]=n[t];return i}function t(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function i(n,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,o,t){return o&&i(n.prototype,o),t&&i(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(o,i,r){"use strict";r.r(i),r.d(i,"HomePageModule",(function(){return K}));var a,c=r("ofXK"),u=r("TEn/"),s=r("3Pt+"),d=r("tyNb"),l=r("fXoL"),b=r("tk/3"),f=((a=function(){function n(o){t(this,n),this.http=o}return e(n,[{key:"getAudios",value:function(){return this.http.get("assets/audios.json")}}]),n}()).\u0275fac=function(n){return new(n||a)(l.Ob(b.a))},a.\u0275prov=l.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a);function g(n,o){1&n&&(l.Kb(0,"ion-badge",21),l.dc(1," explicit "),l.Jb())}function p(n,o){1&n&&(l.Kb(0,"ion-badge"),l.dc(1," argentino "),l.Jb())}function h(n,o){1&n&&(l.Kb(0,"ion-badge",22),l.dc(1," new "),l.Jb())}function m(n,o){1&n&&l.Ib(0,"ion-icon",26)}function y(n,o){1&n&&l.Ib(0,"ion-icon",27)}function v(n,o){if(1&n){var t=l.Lb();l.Kb(0,"ion-button",23),l.Sb("click",(function(){l.Zb(t);var n=l.Ub().$implicit;return l.Ub().play(n)})),l.cc(1,m,1,0,"ion-icon",24),l.cc(2,y,1,0,"ion-icon",25),l.Jb()}if(2&n){var i=l.Ub().$implicit;l.xb(1),l.Xb("ngIf",!i.reproduciendo),l.xb(1),l.Xb("ngIf",i.reproduciendo)}}function x(n,o){1&n&&l.Ib(0,"ion-img",28)}function w(n,o){if(1&n&&(l.Kb(0,"ion-item-sliding"),l.Kb(1,"ion-item",15),l.Kb(2,"ion-label"),l.dc(3),l.Jb(),l.cc(4,g,2,0,"ion-badge",16),l.cc(5,p,2,0,"ion-badge",17),l.cc(6,h,2,0,"ion-badge",18),l.cc(7,v,3,2,"ion-button",19),l.cc(8,x,1,0,"ion-img",20),l.Jb(),l.Jb()),2&n){var t=o.$implicit;l.xb(3),l.ec(t.titulo),l.xb(1),l.Xb("ngIf",t.explicit),l.xb(1),l.Xb("ngIf",!t.sanjuanino),l.xb(1),l.Xb("ngIf",t.nuevo),l.xb(1),l.Xb("ngIf",!t.cargando),l.xb(1),l.Xb("ngIf",t.cargando)}}function k(n,o){if(1&n){var t=l.Lb();l.Kb(0,"ion-button",29),l.Sb("click",(function(){return l.Zb(t),l.Ub().verTodos()})),l.dc(1,"Ver todos"),l.Jb()}}var C,I,O,J=[{path:"",component:(C=function(){function o(n){t(this,o),this.audiosService=n,this.cargando=!0,this.audios=[],this.audiosBuscar=[],this.buscando=!1,this.audio=new Audio}return e(o,[{key:"ngOnInit",value:function(){var n=this;this.audiosService.getAudios().subscribe((function(o){n.audios=o.sort((function(n,o){return n.titulo.localeCompare(o.titulo)})),n.audiosBuscar=n.audios})),this.cargando=!1}},{key:"buscar",value:function(){var n=this;this.audiosBuscar=[];var o=this.textoBuscar.toLocaleLowerCase();this.audios.forEach((function(t){t.descripcion.toLocaleLowerCase().includes(o)&&n.audiosBuscar.push(t)})),this.buscando=!0}},{key:"verTodos",value:function(){this.buscando=!1,this.textoBuscar="",this.audiosBuscar=this.audios}},{key:"Compartir",value:function(n){}},{key:"play",value:function(n){var o=this;this.pausar(n),n.reproduciendo?n.reproduciendo=!1:(this.audio.src=n.url,this.audio.load(),n.cargando=!0,this.listener=this.audio.addEventListener("canplaythrough",(function(t){t.target.src.split("/assets/audios/")[1]===n.url.split("/assets/audios/")[1]&&(n.cargando=!1,o.audio.play(),n.reproduciendo=!0,o.audioTiempo=setTimeout((function(){n.reproduciendo=!1,n.cargando=!1}),1e3*n.duracion))}),{once:!0}))}},{key:"pausar",value:function(o){clearTimeout(this.audioTiempo),this.audio.pause(),this.audio.currentTime=0;var t,i=n(this.audiosBuscar);try{for(i.s();!(t=i.n()).done;){var e=t.value;e.titulo!==o.titulo&&(e.reproduciendo=!1,e.cargando=!1)}}catch(r){i.e(r)}finally{i.f()}}}]),o}(),C.\u0275fac=function(n){return new(n||C)(l.Hb(f))},C.\u0275cmp=l.Bb({type:C,selectors:[["app-home"]],decls:21,vars:4,consts:[[1,"ion-no-border"],["lines","none"],[1,"ion-padding-top","ion-padding-start","ion-padding-bottom"],[1,"ion-align-items-center"],["size","10"],["mode","md","placeholder","Buscar","color","light","searchIcon","musical-notes",3,"ngModel","keydown.enter","ngModelChange"],["size","2"],["color","light","fill","clear",3,"click"],["slot","icon-only","name","search-outline"],[3,"fullscreen"],["src","/assets/loading.gif",2,"height","0px"],[4,"ngFor","ngForOf"],["color","dark","expand","full",3,"click",4,"ngIf"],[1,"ion-padding","ion-text-center","divfinal",2,"font-size","small"],["href","https://www.instagram.com/guicasoftware/"],[1,"claro"],["color","danger",4,"ngIf"],[4,"ngIf"],["color","success",4,"ngIf"],["slot","end","color","dark","fill","clear",3,"click",4,"ngIf"],["slot","end","src","/assets/loading.gif","style","height: 40px;",4,"ngIf"],["color","danger"],["color","success"],["slot","end","color","dark","fill","clear",3,"click"],["slot","icon-only","name","play-outline",4,"ngIf"],["slot","icon-only","name","pause-outline",4,"ngIf"],["slot","icon-only","name","play-outline"],["slot","icon-only","name","pause-outline"],["slot","end","src","/assets/loading.gif",2,"height","40px"],["color","dark","expand","full",3,"click"]],template:function(n,o){1&n&&(l.Kb(0,"ion-header",0),l.Kb(1,"ion-item",1),l.Kb(2,"div",2),l.Kb(3,"ion-label"),l.Kb(4,"h2"),l.dc(5,"Audios de Whatsapp SJ"),l.Jb(),l.Jb(),l.Kb(6,"ion-row",3),l.Kb(7,"ion-col",4),l.Kb(8,"ion-searchbar",5),l.Sb("keydown.enter",(function(){return o.buscar()}))("ngModelChange",(function(n){return o.textoBuscar=n})),l.Jb(),l.Jb(),l.Kb(9,"ion-col",6),l.Kb(10,"ion-button",7),l.Sb("click",(function(){return o.buscar()})),l.Ib(11,"ion-icon",8),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(12,"ion-content",9),l.Ib(13,"ion-img",10),l.Kb(14,"ion-list"),l.cc(15,w,9,6,"ion-item-sliding",11),l.Jb(),l.cc(16,k,2,0,"ion-button",12),l.Kb(17,"div",13),l.dc(18," Por alguna sugerencia, reclamo o si quer\xe9s agregar un audio. "),l.Kb(19,"a",14),l.dc(20," \xa1Habl\xe1nos!"),l.Jb(),l.Jb(),l.Jb()),2&n&&(l.xb(8),l.Xb("ngModel",o.textoBuscar),l.xb(4),l.Xb("fullscreen",!0),l.xb(3),l.Xb("ngForOf",o.audiosBuscar),l.xb(1),l.Xb("ngIf",o.buscando))},directives:[u.f,u.i,u.k,u.n,u.d,u.o,u.s,s.d,s.e,u.c,u.g,u.e,u.h,u.l,c.h,c.i,u.j,u.b],styles:["ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#000}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#fff}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type{border-radius:0 0 0 0}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type   div[_ngcontent-%COMP%]{padding-bottom:20px}ion-searchbar[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:10px;opacity:.96;padding:0;margin:12px 0}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}.claro[_ngcontent-%COMP%]{--background:#fff}ion-card[_ngcontent-%COMP%]{padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:30px;margin-bottom:22px}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:200px;margin:0 auto}ion-card[_ngcontent-%COMP%]   .divfinal[_ngcontent-%COMP%]{--background:#9d9fa6;color:#000}"]}),C)}],M=((O=function n(){t(this,n)}).\u0275mod=l.Fb({type:O}),O.\u0275inj=l.Eb({factory:function(n){return new(n||O)},imports:[[d.i.forChild(J)],d.i]}),O),K=((I=function n(){t(this,n)}).\u0275mod=l.Fb({type:I}),I.\u0275inj=l.Eb({factory:function(n){return new(n||I)},imports:[[c.b,s.a,u.p,M]]}),I)}}])}();