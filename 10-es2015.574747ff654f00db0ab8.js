(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"ct+p":function(o,n,i){"use strict";i.r(n),i.d(n,"HomePageModule",(function(){return K}));var t=i("ofXK"),e=i("TEn/"),a=i("3Pt+"),c=i("tyNb"),r=i("fXoL"),d=i("tk/3");let s=(()=>{class o{constructor(o){this.http=o}getAudios(){return this.http.get("assets/audios.json")}}return o.\u0275fac=function(n){return new(n||o)(r.Ob(d.a))},o.\u0275prov=r.Db({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const u=["audioPlayer"];function l(o,n){1&o&&(r.Kb(0,"ion-badge",29),r.dc(1," explicit "),r.Jb())}function b(o,n){1&o&&(r.Kb(0,"ion-badge"),r.dc(1," argentino "),r.Jb())}function g(o,n){1&o&&(r.Kb(0,"ion-badge",30),r.dc(1," new "),r.Jb())}function f(o,n){1&o&&r.Ib(0,"ion-icon",34)}function p(o,n){1&o&&r.Ib(0,"ion-icon",35)}function h(o,n){if(1&o){const o=r.Lb();r.Kb(0,"ion-button",31),r.Sb("click",(function(){r.Zb(o);const n=r.Ub().$implicit;return r.Ub().play(n)})),r.cc(1,f,1,0,"ion-icon",32),r.cc(2,p,1,0,"ion-icon",33),r.Jb()}if(2&o){const o=r.Ub().$implicit;r.xb(1),r.Xb("ngIf",!o.reproduciendo),r.xb(1),r.Xb("ngIf",o.reproduciendo)}}function m(o,n){1&o&&r.Ib(0,"ion-img",36)}function x(o,n){if(1&o){const o=r.Lb();r.Kb(0,"ion-item-sliding"),r.Kb(1,"ion-item",17),r.Kb(2,"ion-label"),r.dc(3),r.Jb(),r.cc(4,l,2,0,"ion-badge",18),r.cc(5,b,2,0,"ion-badge",19),r.cc(6,g,2,0,"ion-badge",20),r.cc(7,h,3,2,"ion-button",21),r.cc(8,m,1,0,"ion-img",22),r.Jb(),r.Kb(9,"ion-item-options",23),r.Kb(10,"ion-item-option",24),r.Sb("click",(function(){r.Zb(o);const i=n.$implicit;return r.Ub().Compartir(i)})),r.Ib(11,"ion-icon",25),r.Jb(),r.Kb(12,"ion-button",26),r.Kb(13,"a",27),r.Ib(14,"ion-icon",28),r.Jb(),r.Jb(),r.Jb(),r.Jb()}if(2&o){const o=n.$implicit;r.xb(3),r.ec(o.titulo),r.xb(1),r.Xb("ngIf",o.explicit),r.xb(1),r.Xb("ngIf",!o.sanjuanino),r.xb(1),r.Xb("ngIf",o.nuevo),r.xb(1),r.Xb("ngIf",!o.cargando),r.xb(1),r.Xb("ngIf",o.cargando),r.xb(5),r.Xb("href",o.url,r.ac)("download",o.titulo)}}function y(o,n){if(1&o){const o=r.Lb();r.Kb(0,"ion-button",37),r.Sb("click",(function(){return r.Zb(o),r.Ub().verTodos()})),r.dc(1,"Ver todos"),r.Jb()}}function w(o,n){if(1&o&&(r.Kb(0,"audio",41),r.Ib(1,"source",42),r.Jb()),2&o){const o=r.Ub(2);r.xb(1),r.Xb("src",o.audioSrc,r.ac)}}function P(o,n){if(1&o&&(r.Kb(0,"div",38),r.Kb(1,"div",39),r.Kb(2,"b"),r.dc(3),r.Jb(),r.Jb(),r.Kb(4,"div"),r.cc(5,w,2,1,"audio",40),r.Jb(),r.Jb()),2&o){const o=r.Ub();r.xb(3),r.ec(o.dataAudioPlaying.titulo),r.xb(2),r.Xb("ngIf",o.reproduciendo)}}const J=[{path:"",component:(()=>{class o{constructor(o,n){this.audiosService=o,this.route=n,this.cargando=!0,this.audios=[],this.audiosBuscar=[],this.buscando=!1,this.audio=new Audio,this.navigator=window.navigator,this.reproduciendo=!1,this.audioSrc=""}ngOnInit(){this.audiosService.getAudios().subscribe(o=>{this.audios=o.sort((function(o,n){return o.titulo.localeCompare(n.titulo)})),this.route.queryParams.subscribe(o=>{if(o.audio){let n=this.audios.find((function(n,i){if(n.id==o.audio)return n}));this.play(n)}}),this.audiosBuscar=this.audios}),this.cargando=!1}buscar(){this.audiosBuscar=[];let o=this.textoBuscar.toLocaleLowerCase();this.audios.forEach(n=>{n.descripcion.toLocaleLowerCase().includes(o)&&this.audiosBuscar.push(n)}),this.buscando=!0}verTodos(){this.buscando=!1,this.textoBuscar="",this.audiosBuscar=this.audios}Compartir(o){window.navigator&&window.navigator.share?window.navigator.share({title:"Escuch\xe1 el audio '"+o.titulo+"' en AudiosSj",url:"/?audio="+o.id}).then(()=>console.log("Successful share")).catch(o=>console.log("Error sharing",o)):alert("EL navegador no permite compartir")}play(o){this.pausar(o),setTimeout(()=>{this.audioSrc=o.url,this.dataAudioPlaying=o,o.reproduciendo?o.reproduciendo=!1:(this.reproduciendo=!0,o.reproduciendo=!0)},100),setTimeout(()=>{let o;o=document.getElementById("audioPlayer"),o.play()},500)}pausar(o){let n;this.reproduciendo=!1,n=document.getElementById("audioPlayer"),n&&n.pause();for(let i of this.audiosBuscar)i.titulo!==o.titulo&&(i.reproduciendo=!1,i.cargando=!1)}}return o.\u0275fac=function(n){return new(n||o)(r.Hb(s),r.Hb(c.a))},o.\u0275cmp=r.Bb({type:o,selectors:[["app-home"]],viewQuery:function(o,n){var i;1&o&&r.fc(u,!0),2&o&&r.Yb(i=r.Tb())&&(n.audioPlayer=i.first)},decls:24,vars:5,consts:[[1,"ion-no-border"],["lines","none"],[1,"ion-padding-top","ion-padding-start","ion-padding-bottom"],[1,"ion-align-items-center"],["size","10"],["mode","md","placeholder","Buscar","color","light","searchIcon","musical-notes",3,"ngModel","keydown.enter","ngModelChange"],["size","2"],["color","light","fill","clear",3,"click"],["slot","icon-only","name","search-outline"],[3,"fullscreen"],[2,"font-size","0.6rem","text-align","center","background-color","#FFBF00","margin","0","padding","5px 0"],["src","/assets/loading.gif",2,"height","0px"],[4,"ngFor","ngForOf"],["color","dark","expand","full",3,"click",4,"ngIf"],[1,"ion-padding","ion-text-center","divfinal"],["href","https://www.instagram.com/camichavesapps/"],["class","player",4,"ngIf"],[1,"claro"],["color","danger",4,"ngIf"],[4,"ngIf"],["color","success",4,"ngIf"],["slot","end","color","dark","fill","clear",3,"click",4,"ngIf"],["slot","end","src","/assets/loading.gif","style","height: 40px;",4,"ngIf"],["side","end"],[3,"click"],["size","large","name","share-social-outline"],["color","app",1,"downloadBtn"],["color","white",3,"href","download"],["size","large","name","download-outline"],["color","danger"],["color","success"],["slot","end","color","dark","fill","clear",3,"click"],["slot","icon-only","name","play-outline",4,"ngIf"],["slot","icon-only","name","close-outline",4,"ngIf"],["slot","icon-only","name","play-outline"],["slot","icon-only","name","close-outline"],["slot","end","src","/assets/loading.gif",2,"height","40px"],["color","dark","expand","full",3,"click"],[1,"player"],[2,"background-color","white","padding","10px 0 5px 20px"],["id","audioPlayer","controls","","autoplay","","name","media",4,"ngIf"],["id","audioPlayer","controls","","autoplay","","name","media"],["id","playerSource","type","audio/mpeg",3,"src"]],template:function(o,n){1&o&&(r.Kb(0,"ion-header",0),r.Kb(1,"ion-item",1),r.Kb(2,"div",2),r.Kb(3,"ion-label"),r.Kb(4,"h2"),r.dc(5,"Audios de Whatsapp SJ"),r.Jb(),r.Jb(),r.Kb(6,"ion-row",3),r.Kb(7,"ion-col",4),r.Kb(8,"ion-searchbar",5),r.Sb("keydown.enter",(function(){return n.buscar()}))("ngModelChange",(function(o){return n.textoBuscar=o})),r.Jb(),r.Jb(),r.Kb(9,"ion-col",6),r.Kb(10,"ion-button",7),r.Sb("click",(function(){return n.buscar()})),r.Ib(11,"ion-icon",8),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(12,"ion-content",9),r.Kb(13,"p",10),r.dc(14," Desliza el audio a la izquierda para compartir o descargar "),r.Jb(),r.Ib(15,"ion-img",11),r.Kb(16,"ion-list"),r.cc(17,x,15,8,"ion-item-sliding",12),r.Jb(),r.cc(18,y,2,0,"ion-button",13),r.Kb(19,"div",14),r.dc(20," Por alguna sugerencia, reclamo o si quer\xe9s agregar un audio. "),r.Kb(21,"a",15),r.dc(22," \xa1Habl\xe1nos!"),r.Jb(),r.Jb(),r.Jb(),r.cc(23,P,6,2,"div",16)),2&o&&(r.xb(8),r.Xb("ngModel",n.textoBuscar),r.xb(4),r.Xb("fullscreen",!0),r.xb(5),r.Xb("ngForOf",n.audiosBuscar),r.xb(1),r.Xb("ngIf",n.buscando),r.xb(5),r.Xb("ngIf",n.reproduciendo))},directives:[e.f,e.i,e.m,e.p,e.d,e.q,e.u,a.d,a.e,e.c,e.g,e.e,e.h,e.n,t.h,t.i,e.l,e.k,e.j,e.b],styles:["ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:#000}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#fff}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type{border-radius:0 0 0 0}ion-header[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:last-of-type   div[_ngcontent-%COMP%]{padding-bottom:20px}ion-searchbar[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:10px;opacity:.96;padding:0;margin:12px 0}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}.claro[_ngcontent-%COMP%]{--background:#fff}ion-card[_ngcontent-%COMP%]{padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:30px;margin-bottom:22px}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:200px;margin:0 auto}.divfinal[_ngcontent-%COMP%]{--background:#9d9fa6;color:#000;font-size:small;padding-bottom:50px}.player[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;border:3px solid #000;background-color:#fff;font-family:Lucida Sans,Lucida Sans Regular,Lucida Grande,Lucida Sans Unicode,Geneva,Verdana,sans-serif}.downloadBtn[_ngcontent-%COMP%]{height:100%;width:52px;margin:0;border-radius:0;padding:0;background-color:#289d8e}#audioPlayer[_ngcontent-%COMP%]{width:100%}.downloadBtn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}"]}),o})()}];let I=(()=>{class o{}return o.\u0275mod=r.Fb({type:o}),o.\u0275inj=r.Eb({factory:function(n){return new(n||o)},imports:[[c.i.forChild(J)],c.i]}),o})(),K=(()=>{class o{}return o.\u0275mod=r.Fb({type:o}),o.\u0275inj=r.Eb({factory:function(n){return new(n||o)},imports:[[t.b,a.a,e.r,I]]}),o})()}}]);