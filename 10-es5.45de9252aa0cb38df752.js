!function(){function n(n,i){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,i){if(!n)return;if("string"==typeof n)return o(n,i);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,i)}(n))||i&&n&&"number"==typeof n.length){e&&(n=e);var t=0,r=function(){};return{s:r,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw a}}}}function o(n,o){(null==o||o>n.length)&&(o=n.length);for(var i=0,e=new Array(o);i<o;i++)e[i]=n[i];return e}function i(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function e(n,o){for(var i=0;i<o.length;i++){var e=o[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function t(n,o,i){return o&&e(n.prototype,o),i&&e(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(o,e,r){"use strict";r.r(e),r.d(e,"HomePageModule",(function(){return _}));var a,c=r("ofXK"),u=r("TEn/"),d=r("3Pt+"),s=r("tyNb"),l=r("fXoL"),b=r("tk/3"),f=((a=function(){function n(o){i(this,n),this.http=o}return t(n,[{key:"getAudios",value:function(){return this.http.get("assets/audios.json")}}]),n}()).\u0275fac=function(n){return new(n||a)(l.Ob(b.a))},a.\u0275prov=l.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a),g=["audioPlayer"];function p(n,o){1&n&&(l.Kb(0,"ion-badge",30),l.dc(1," explicit "),l.Jb())}function h(n,o){1&n&&(l.Kb(0,"ion-badge"),l.dc(1," argentino "),l.Jb())}function m(n,o){1&n&&(l.Kb(0,"ion-badge",31),l.dc(1," new "),l.Jb())}function y(n,o){1&n&&l.Ib(0,"ion-icon",35)}function v(n,o){1&n&&l.Ib(0,"ion-icon",36)}function w(n,o){if(1&n){var i=l.Lb();l.Kb(0,"ion-button",32),l.Sb("click",(function(){l.Zb(i);var n=l.Ub().$implicit;return l.Ub().play(n)})),l.cc(1,y,1,0,"ion-icon",33),l.cc(2,v,1,0,"ion-icon",34),l.Jb()}if(2&n){var e=l.Ub().$implicit;l.xb(1),l.Xb("ngIf",!e.reproduciendo),l.xb(1),l.Xb("ngIf",e.reproduciendo)}}function x(n,o){1&n&&l.Ib(0,"ion-img",37)}function k(n,o){if(1&n){var i=l.Lb();l.Kb(0,"ion-item-sliding"),l.Kb(1,"ion-item",18),l.Kb(2,"ion-label"),l.dc(3),l.Jb(),l.cc(4,p,2,0,"ion-badge",19),l.cc(5,h,2,0,"ion-badge",20),l.cc(6,m,2,0,"ion-badge",21),l.cc(7,w,3,2,"ion-button",22),l.cc(8,x,1,0,"ion-img",23),l.Jb(),l.Kb(9,"ion-item-options",24),l.Kb(10,"ion-item-option",25),l.Sb("click",(function(){l.Zb(i);var n=o.$implicit;return l.Ub().Compartir(n)})),l.Ib(11,"ion-icon",26),l.Jb(),l.Kb(12,"ion-button",27),l.Kb(13,"a",28),l.Ib(14,"ion-icon",29),l.Jb(),l.Jb(),l.Jb(),l.Jb()}if(2&n){var e=o.$implicit;l.xb(3),l.ec(e.titulo),l.xb(1),l.Xb("ngIf",e.explicit),l.xb(1),l.Xb("ngIf",!e.sanjuanino),l.xb(1),l.Xb("ngIf",e.nuevo),l.xb(1),l.Xb("ngIf",!e.cargando),l.xb(1),l.Xb("ngIf",e.cargando),l.xb(5),l.Xb("href",e.url,l.ac)("download",e.titulo)}}function I(n,o){if(1&n){var i=l.Lb();l.Kb(0,"ion-button",38),l.Sb("click",(function(){return l.Zb(i),l.Ub().verTodos()})),l.dc(1,"Ver todos"),l.Jb()}}function P(n,o){if(1&n&&(l.Kb(0,"audio",42),l.Ib(1,"source",43),l.Jb()),2&n){var i=l.Ub(2);l.xb(1),l.Xb("src",i.audioSrc,l.ac)}}function J(n,o){if(1&n&&(l.Kb(0,"div",39),l.Kb(1,"div",40),l.Kb(2,"b"),l.dc(3),l.Jb(),l.Jb(),l.Kb(4,"div"),l.cc(5,P,2,1,"audio",41),l.Jb(),l.Jb()),2&n){var i=l.Ub();l.xb(3),l.ec(i.dataAudioPlaying.titulo),l.xb(2),l.Xb("ngIf",i.reproduciendo)}}var K,C,O,M=[{path:"",component:(K=function(){function o(n,e){i(this,o),this.audiosService=n,this.route=e,this.cargando=!0,this.audios=[],this.audiosBuscar=[],this.buscando=!1,this.audio=new Audio,this.navigator=window.navigator,this.reproduciendo=!1,this.audioSrc=""}return t(o,[{key:"ngOnInit",value:function(){var n=this;this.audiosService.getAudios().subscribe((function(o){n.audios=o.sort((function(n,o){return n.titulo.localeCompare(o.titulo)})),n.route.queryParams.subscribe((function(o){if(o.audio){var i=n.audios.find((function(n,i){if(n.id==o.audio)return n}));n.play(i)}})),n.audiosBuscar=n.audios})),this.cargando=!1}},{key:"buscar",value:function(){var n=this;this.audiosBuscar=[];var o=this.textoBuscar.toLocaleLowerCase();this.audios.forEach((function(i){i.descripcion.toLocaleLowerCase().includes(o)&&n.audiosBuscar.push(i)})),this.buscando=!0}},{key:"verTodos",value:function(){this.buscando=!1,this.textoBuscar="",this.audiosBuscar=this.audios}},{key:"Compartir",value:function(n){window.navigator&&window.navigator.share?window.navigator.share({title:"Escuch\xe1 el audio '"+n.titulo+"' en AudiosSj",url:"/?audio="+n.id}).then((function(){return console.log("Successful share")})).catch((function(n){return console.log("Error sharing",n)})):alert("EL navegador no permite compartir")}},{key:"play",value:function(n){var o=this;this.pausar(n),setTimeout((function(){o.audioSrc=n.url,o.dataAudioPlaying=n,n.reproduciendo?n.reproduciendo=!1:(o.reproduciendo=!0,n.reproduciendo=!0)}),100),setTimeout((function(){document.getElementById("audioPlayer").play()}),500)}},{key:"pausar",value:function(o){var i;this.reproduciendo=!1,(i=document.getElementById("audioPlayer"))&&i.pause();var e,t=n(this.audiosBuscar);try{for(t.s();!(e=t.n()).done;){var r=e.value;r.titulo!==o.titulo&&(r.reproduciendo=!1,r.cargando=!1)}}catch(a){t.e(a)}finally{t.f()}}},{key:"doRefresh",value:function(n){console.log("Begin async operation"),location.reload(),setTimeout((function(){console.log("Async operation has ended"),n.target.complete()}),2e3)}}]),o}(),K.\u0275fac=function(n){return new(n||K)(l.Hb(f),l.Hb(s.a))},K.\u0275cmp=l.Bb({type:K,selectors:[["app-home"]],viewQuery:function(n,o){var i;1&n&&l.fc(g,!0),2&n&&l.Yb(i=l.Tb())&&(o.audioPlayer=i.first)},decls:26,vars:5,consts:[[1,"ion-no-border"],["lines","none"],[1,"ion-padding-top","ion-padding-start","ion-padding-bottom"],[1,"ion-align-items-center"],["size","10"],["mode","md","placeholder","Buscar","color","light","searchIcon","musical-notes",3,"ngModel","keydown.enter","ngModelChange"],["size","2"],["color","light","fill","clear",3,"click"],["slot","icon-only","name","search-outline"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[2,"font-size","0.6rem","text-align","center","background-color","#FFBF00","margin","0","padding","5px 0"],["src","/assets/loading.gif",2,"height","0px"],[4,"ngFor","ngForOf"],["color","dark","expand","full",3,"click",4,"ngIf"],[1,"ion-padding","ion-text-center","divfinal"],["href","https://www.instagram.com/camichavesapps/"],["class","player",4,"ngIf"],[1,"claro"],["color","danger",4,"ngIf"],[4,"ngIf"],["color","success",4,"ngIf"],["slot","end","color","dark","fill","clear",3,"click",4,"ngIf"],["slot","end","src","/assets/loading.gif","style","height: 40px;",4,"ngIf"],["side","end"],[3,"click"],["size","large","name","share-social-outline"],["color","app",1,"downloadBtn"],["color","white",3,"href","download"],["size","large","name","download-outline"],["color","danger"],["color","success"],["slot","end","color","dark","fill","clear",3,"click"],["slot","icon-only","name","play-outline",4,"ngIf"],["slot","icon-only","name","close-outline",4,"ngIf"],["slot","icon-only","name","play-outline"],["slot","icon-only","name","close-outline"],["slot","end","src","/assets/loading.gif",2,"height","40px"],["color","dark","expand","full",3,"click"],[1,"player"],[2,"background-color","white","padding","10px 0 5px 20px"],["id","audioPlayer","controls","","autoplay","","name","media",4,"ngIf"],["id","audioPlayer","controls","","autoplay","","name","media"],["id","playerSource","type","audio/mpeg",3,"src"]],template:function(n,o){1&n&&(l.Kb(0,"ion-header",0),l.Kb(1,"ion-item",1),l.Kb(2,"div",2),l.Kb(3,"ion-label"),l.Kb(4,"h2"),l.dc(5,"Audios de Whatsapp SJ"),l.Jb(),l.Jb(),l.Kb(6,"ion-row",3),l.Kb(7,"ion-col",4),l.Kb(8,"ion-searchbar",5),l.Sb("keydown.enter",(function(){return o.buscar()}))("ngModelChange",(function(n){return o.textoBuscar=n})),l.Jb(),l.Jb(),l.Kb(9,"ion-col",6),l.Kb(10,"ion-button",7),l.Sb("click",(function(){return o.buscar()})),l.Ib(11,"ion-icon",8),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(12,"ion-content",9),l.Kb(13,"ion-refresher",10),l.Sb("ionRefresh",(function(n){return o.doRefresh(n)})),l.Ib(14,"ion-refresher-content"),l.Jb(),l.Kb(15,"p",11),l.dc(16," Desliza el audio a la izquierda para compartir o descargar "),l.Jb(),l.Ib(17,"ion-img",12),l.Kb(18,"ion-list"),l.cc(19,k,15,8,"ion-item-sliding",13),l.Jb(),l.cc(20,I,2,0,"ion-button",14),l.Kb(21,"div",15),l.dc(22," Por alguna sugerencia, reclamo o si quer\xe9s agregar un audio. "),l.Kb(23,"a",16),l.dc(24," \xa1Habl\xe1nos!"),l.Jb(),l.Jb(),l.Jb(),l.cc(25,J,6,2,"div",17)),2&n&&(l.xb(8),l.Xb("ngModel",o.textoBuscar),l.xb(4),l.Xb("fullscreen",!0),l.xb(7),l.Xb("ngForOf",o.audiosBuscar),l.xb(1),l.Xb("ngIf",o.buscando),l.xb(5),l.Xb("ngIf",o.reproduciendo))},directives:[u.f,u.i,u.m,u.r,u.d,u.s,u.w,d.d,d.e,u.c,u.g,u.e,u.o,u.p,u.h,u.n,c.h,c.i,u.l,u.k,u.j,u.b],styles:["ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#000}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#fff}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type{border-radius:0 0 0 0}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type   div[_ngcontent-%COMP%]{padding-bottom:20px}ion-searchbar[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:10px;opacity:.96;padding:0;margin:12px 0}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}.claro[_ngcontent-%COMP%]{--background:#fff}ion-card[_ngcontent-%COMP%]{padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:30px;margin-bottom:22px}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:200px;margin:0 auto}.divfinal[_ngcontent-%COMP%]{--background:#9d9fa6;color:#000;font-size:small;padding-bottom:50px}.player[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;border:3px solid #000;background-color:#fff;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}.downloadBtn[_ngcontent-%COMP%]{height:100%;width:52px;margin:0;border-radius:0;padding:0;background-color:#289d8e}#audioPlayer[_ngcontent-%COMP%]{width:100%}.downloadBtn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}"]}),K)}],S=((O=function n(){i(this,n)}).\u0275mod=l.Fb({type:O}),O.\u0275inj=l.Eb({factory:function(n){return new(n||O)},imports:[[s.i.forChild(M)],s.i]}),O),_=((C=function n(){i(this,n)}).\u0275mod=l.Fb({type:C}),C.\u0275inj=l.Eb({factory:function(n){return new(n||C)},imports:[[c.b,d.a,u.t,S]]}),C)}}])}();