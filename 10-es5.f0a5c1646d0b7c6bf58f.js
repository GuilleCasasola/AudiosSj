!function(){function n(n,t){var i;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(i=function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var i=Object.prototype.toString.call(n).slice(8,-1);"Object"===i&&n.constructor&&(i=n.constructor.name);if("Map"===i||"Set"===i)return Array.from(n);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return o(n,t)}(n))||t&&n&&"number"==typeof n.length){i&&(n=i);var e=0,r=function(){};return{s:r,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){i=n[Symbol.iterator]()},n:function(){var n=i.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==i.return||i.return()}finally{if(u)throw a}}}}function o(n,o){(null==o||o>n.length)&&(o=n.length);for(var t=0,i=new Array(o);t<o;t++)i[t]=n[t];return i}function t(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function i(n,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,o,t){return o&&i(n.prototype,o),t&&i(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(o,i,r){"use strict";r.r(i),r.d(i,"HomePageModule",(function(){return _}));var a,c=r("ofXK"),u=r("TEn/"),s=r("3Pt+"),d=r("tyNb"),l=r("fXoL"),b=r("tk/3"),f=((a=function(){function n(o){t(this,n),this.http=o}return e(n,[{key:"getAudios",value:function(){return this.http.get("assets/audios.json")}}]),n}()).\u0275fac=function(n){return new(n||a)(l.Ob(b.a))},a.\u0275prov=l.Db({token:a,factory:a.\u0275fac,providedIn:"root"}),a),g=["script"];function p(n,o){1&n&&(l.Kb(0,"ion-badge",30),l.dc(1," explicit "),l.Jb())}function h(n,o){1&n&&(l.Kb(0,"ion-badge"),l.dc(1," argentino "),l.Jb())}function m(n,o){1&n&&(l.Kb(0,"ion-badge",31),l.dc(1," new "),l.Jb())}function y(n,o){1&n&&l.Ib(0,"ion-icon",35)}function v(n,o){1&n&&l.Ib(0,"ion-icon",36)}function w(n,o){if(1&n){var t=l.Lb();l.Kb(0,"ion-button",32),l.Sb("click",(function(){l.Zb(t);var n=l.Ub().$implicit;return l.Ub().play(n)})),l.cc(1,y,1,0,"ion-icon",33),l.cc(2,v,1,0,"ion-icon",34),l.Jb()}if(2&n){var i=l.Ub().$implicit;l.xb(1),l.Xb("ngIf",!i.reproduciendo),l.xb(1),l.Xb("ngIf",i.reproduciendo)}}function x(n,o){1&n&&l.Ib(0,"ion-img",37)}function k(n,o){if(1&n){var t=l.Lb();l.Kb(0,"ion-item-sliding"),l.Kb(1,"ion-item",18),l.Kb(2,"ion-label"),l.dc(3),l.Jb(),l.cc(4,p,2,0,"ion-badge",19),l.cc(5,h,2,0,"ion-badge",20),l.cc(6,m,2,0,"ion-badge",21),l.cc(7,w,3,2,"ion-button",22),l.cc(8,x,1,0,"ion-img",23),l.Jb(),l.Kb(9,"ion-item-options",24),l.Kb(10,"ion-item-option",25),l.Sb("click",(function(){l.Zb(t);var n=o.$implicit;return l.Ub().Compartir(n)})),l.Ib(11,"ion-icon",26),l.Jb(),l.Kb(12,"ion-button",27),l.Kb(13,"a",28),l.Ib(14,"ion-icon",29),l.Jb(),l.Jb(),l.Jb(),l.Jb()}if(2&n){var i=o.$implicit;l.xb(3),l.ec(i.titulo),l.xb(1),l.Xb("ngIf",i.explicit),l.xb(1),l.Xb("ngIf",!i.sanjuanino),l.xb(1),l.Xb("ngIf",i.nuevo),l.xb(1),l.Xb("ngIf",!i.cargando),l.xb(1),l.Xb("ngIf",i.cargando),l.xb(5),l.Xb("href",i.url,l.ac)("download",i.titulo)}}function C(n,o){if(1&n){var t=l.Lb();l.Kb(0,"ion-button",38),l.Sb("click",(function(){return l.Zb(t),l.Ub().verTodos()})),l.dc(1,"Ver todos"),l.Jb()}}function I(n,o){if(1&n&&(l.Kb(0,"audio",39),l.Ib(1,"source",40),l.Jb()),2&n){var t=l.Ub();l.xb(1),l.Xb("src",t.audioSrc,l.ac)}}var J,K,O,M=[{path:"",component:(J=function(){function o(n){t(this,o),this.audiosService=n,this.cargando=!0,this.audios=[],this.audiosBuscar=[],this.buscando=!1,this.audio=new Audio,this.navigator=window.navigator,this.reproduciendo=!1,this.audioSrc=""}return e(o,[{key:"ngOnInit",value:function(){var n=this;this.audiosService.getAudios().subscribe((function(o){n.audios=o.sort((function(n,o){return n.titulo.localeCompare(o.titulo)})),n.audiosBuscar=n.audios})),this.cargando=!1;var o=document.createElement("script");o.src="https://tags.orquideassp.com/tag/6081",document.getElementsByTagName("body")[0].appendChild(o)}},{key:"buscar",value:function(){var n=this;this.audiosBuscar=[];var o=this.textoBuscar.toLocaleLowerCase();this.audios.forEach((function(t){t.descripcion.toLocaleLowerCase().includes(o)&&n.audiosBuscar.push(t)})),this.buscando=!0}},{key:"verTodos",value:function(){this.buscando=!1,this.textoBuscar="",this.audiosBuscar=this.audios}},{key:"Compartir",value:function(n){window.navigator&&window.navigator.share?window.navigator.share({title:"Escuch\xe1 el audio '"+n.titulo+"' en AudiosSj",url:n.url}).then((function(){return console.log("Successful share")})).catch((function(n){return console.log("Error sharing",n)})):alert("No se puede compartir momentaneamente")}},{key:"play",value:function(n){var o=this;this.pausar(n),n.reproduciendo?n.reproduciendo=!1:(this.audio.src=n.url,this.audio.load(),n.cargando=!0,this.audioSrc=n.url,this.listener=this.audio.addEventListener("canplaythrough",(function(t){t.target.src.split("/assets/audios/")[1]===n.url.split("/assets/audios/")[1]&&(n.cargando=!1,n.reproduciendo=!0,o.reproduciendo=!0,o.audioTiempo=setTimeout((function(){n.reproduciendo=!1,n.cargando=!1}),1e3*n.duracion))}),{once:!0}))}},{key:"pausar",value:function(o){clearTimeout(this.audioTiempo),this.reproduciendo=!1,this.audio.pause(),this.audio.currentTime=0;var t,i=n(this.audiosBuscar);try{for(i.s();!(t=i.n()).done;){var e=t.value;e.titulo!==o.titulo&&(e.reproduciendo=!1,e.cargando=!1)}}catch(r){i.e(r)}finally{i.f()}}}]),o}(),J.\u0275fac=function(n){return new(n||J)(l.Hb(f))},J.\u0275cmp=l.Bb({type:J,selectors:[["app-home"]],viewQuery:function(n,o){var t;1&n&&l.fc(g,!0),2&n&&l.Yb(t=l.Tb())&&(o.script=t.first)},decls:25,vars:5,consts:[[1,"ion-no-border"],["id","script"],["lines","none"],[1,"ion-padding-top","ion-padding-start","ion-padding-bottom"],[1,"ion-align-items-center"],["size","10"],["mode","md","placeholder","Buscar","color","light","searchIcon","musical-notes",3,"ngModel","keydown.enter","ngModelChange"],["size","2"],["color","light","fill","clear",3,"click"],["slot","icon-only","name","search-outline"],[3,"fullscreen"],[2,"font-size","0.6rem","text-align","center"],["src","/assets/loading.gif",2,"height","0px"],[4,"ngFor","ngForOf"],["color","dark","expand","full",3,"click",4,"ngIf"],[1,"ion-padding","ion-text-center","divfinal"],["href","https://www.instagram.com/guicasoftware/"],["controls","","autoplay","","name","media","class","player",4,"ngIf"],[1,"claro"],["color","danger",4,"ngIf"],[4,"ngIf"],["color","success",4,"ngIf"],["slot","end","color","dark","fill","clear",3,"click",4,"ngIf"],["slot","end","src","/assets/loading.gif","style","height: 40px;",4,"ngIf"],["side","end"],[3,"click"],["size","large","name","share-social-outline"],["color","medium",1,"downloadBtn"],["color","white",3,"href","download"],["size","large","name","download-outline"],["color","danger"],["color","success"],["slot","end","color","dark","fill","clear",3,"click"],["slot","icon-only","name","play-outline",4,"ngIf"],["slot","icon-only","name","pause-outline",4,"ngIf"],["slot","icon-only","name","play-outline"],["slot","icon-only","name","pause-outline"],["slot","end","src","/assets/loading.gif",2,"height","40px"],["color","dark","expand","full",3,"click"],["controls","","autoplay","","name","media",1,"player"],["id","playerSource","type","audio/mpeg",3,"src"]],template:function(n,o){1&n&&(l.Kb(0,"ion-header",0),l.Ib(1,"div",1),l.Kb(2,"ion-item",2),l.Kb(3,"div",3),l.Kb(4,"ion-label"),l.Kb(5,"h2"),l.dc(6,"Audios de Whatsapp SJ"),l.Jb(),l.Jb(),l.Kb(7,"ion-row",4),l.Kb(8,"ion-col",5),l.Kb(9,"ion-searchbar",6),l.Sb("keydown.enter",(function(){return o.buscar()}))("ngModelChange",(function(n){return o.textoBuscar=n})),l.Jb(),l.Jb(),l.Kb(10,"ion-col",7),l.Kb(11,"ion-button",8),l.Sb("click",(function(){return o.buscar()})),l.Ib(12,"ion-icon",9),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Jb(),l.Kb(13,"ion-content",10),l.Kb(14,"p",11),l.dc(15," Desliza el audio a la izquierda para compartir o descargar "),l.Jb(),l.Ib(16,"ion-img",12),l.Kb(17,"ion-list"),l.cc(18,k,15,8,"ion-item-sliding",13),l.Jb(),l.cc(19,C,2,0,"ion-button",14),l.Kb(20,"div",15),l.dc(21," Por alguna sugerencia, reclamo o si quer\xe9s agregar un audio. "),l.Kb(22,"a",16),l.dc(23," \xa1Habl\xe1nos!"),l.Jb(),l.Jb(),l.Jb(),l.cc(24,I,2,1,"audio",17)),2&n&&(l.xb(9),l.Xb("ngModel",o.textoBuscar),l.xb(4),l.Xb("fullscreen",!0),l.xb(5),l.Xb("ngForOf",o.audiosBuscar),l.xb(1),l.Xb("ngIf",o.buscando),l.xb(5),l.Xb("ngIf",o.reproduciendo))},directives:[u.f,u.i,u.m,u.p,u.d,u.q,u.u,s.d,s.e,u.c,u.g,u.e,u.h,u.n,c.h,c.i,u.l,u.k,u.j,u.b],styles:["ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#000}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#fff}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type{border-radius:0 0 0 0}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type   div[_ngcontent-%COMP%]{padding-bottom:20px}ion-searchbar[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:10px;opacity:.96;padding:0;margin:12px 0}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}.claro[_ngcontent-%COMP%]{--background:#fff}ion-card[_ngcontent-%COMP%]{padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:30px;margin-bottom:22px}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:200px;margin:0 auto}.divfinal[_ngcontent-%COMP%]{--background:#9d9fa6;color:#000;font-size:small;padding-bottom:50px}.player[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%}.downloadBtn[_ngcontent-%COMP%]{height:100%;width:52px;margin:0;border-radius:0;padding:0}.downloadBtn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}"]}),J)}],P=((O=function n(){t(this,n)}).\u0275mod=l.Fb({type:O}),O.\u0275inj=l.Eb({factory:function(n){return new(n||O)},imports:[[d.i.forChild(M)],d.i]}),O),_=((K=function n(){t(this,n)}).\u0275mod=l.Fb({type:K}),K.\u0275inj=l.Eb({factory:function(n){return new(n||K)},imports:[[c.b,s.a,u.r,P]]}),K)}}])}();