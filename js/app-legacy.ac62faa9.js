(function(){"use strict";var t={2760:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[n("v-app-bar",{attrs:{app:"",elevation:"2",color:"white",absolute:""}},[t.isMobile?n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}):t._e(),n("v-toolbar-title",[n("a",{staticClass:"logo-link",staticStyle:{color:"#2d3436"},attrs:{href:"/"}},[t._v('ООО "Бизнес помощник"')])]),n("v-row",{attrs:{align:"center"}},[t.isMobile?t._e():n("v-col",{attrs:{md:"12",xs:"0",sm:"0",lg:"12"}},[n("v-row",{attrs:{"no-gutter":"",justify:"end"}},t._l(t.navItems,(function(e,r){return n("router-link",{key:r,staticClass:"nav-item",staticStyle:{color:"#636e72"},attrs:{"active-class":"active",to:e.link}},[t._v(t._s(e.name))])})),1)],1)],1)],1),n("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{nav:"",dense:""}},[n("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-home")])],1),n("v-list-item-title",[t._v("Главня")])],1),t._l(t.navItems,(function(e,r){return n("v-list-item",{key:r,attrs:{to:e.link}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-title",[t._v(t._s(e.name))])],1)}))],2)],1)],1),n("v-main",[n("router-view")],1),n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticStyle:{"background-color":"#f39c12"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"7"}},[n("span",{staticClass:"p"},[t._v("example@mail.com")])]),n("v-col",{attrs:{cols:"5"}},[n("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.icons,(function(e){return n("v-btn",{key:e,staticClass:"mx-4",attrs:{dark:"",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e)+" ")])],1)})),1)],1)],1)],1),n("v-card-text",{staticClass:"py-2 white--text text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v('ООО "Бизнес помощник"')])])],1)],1)],1)},a=[],o=(n(8309),{name:"App",data:function(){return{drawer:!1,group:null,selectedItem:1,navItems:[{icon:"mdi-file-code",name:"Проекты",link:"/projects"},{icon:"mdi-account-supervisor-circle",name:"Вакансии",link:"/vacancies"},{icon:"mdi-information-outline",name:"О нас",link:"/about"}],icons:["mdi-facebook","mdi-twitter","mdi-linkedin","mdi-instagram"]}},computed:{isMobile:function(){switch(this.$vuetify.breakpoint.name){case"xs":return!0;case"sm":return!0;default:return!1}}}}),s=o,c=n(1001),l=n(3453),u=n.n(l),v=n(7524),d=n(8320),f=n(5206),m=n(680),p=n(3237),b=n(7118),g=n(2102),h=n(899),k=n(6428),w=n(6816),_=n(7620),y=n(6651),x=n(459),Z=n(3013),C=n(7877),V=n(7575),j=n(2877),I=n(7921),M=(0,c.Z)(s,i,a,!1,null,null,null),T=M.exports;u()(M,{VApp:v.Z,VAppBar:d.Z,VAppBarNavIcon:f.Z,VBtn:m.Z,VCard:p.Z,VCardText:b.ZB,VCardTitle:b.EB,VCol:g.Z,VFooter:h.Z,VIcon:k.Z,VList:w.Z,VListItem:_.Z,VListItemGroup:y.Z,VListItemIcon:x.Z,VListItemTitle:Z.V9,VMain:C.Z,VNavigationDrawer:V.Z,VRow:j.Z,VToolbarTitle:I.qW});n(1539),n(8783),n(3948);var S=n(8345),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height",attrs:{"align-start":"",fluid:""}},[n("v-row",{attrs:{align:"center"}},[n("p-header")],1),n("v-row",[n("p-content")],1)],1)},E=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"p-header wrapper",attrs:{fluid:""}},[r("v-container",[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{md:"6",xs:"12",sm:"12",lg:"6"}},[r("v-row",[r("h1",{class:t.isMobile?"mobile-title":"d-title"},[t._v("Ваш лучший помощник и компаньон в бизнесе")])]),r("v-row",[r("h2",{class:t.isMobile?"mobile-subtitle":"d-subtitle"},[t._v("разработка программного обеспечения, мобильных и веб приложений")])]),r("v-row",{attrs:{align:"center",justify:t.isMobile?"center":"start"}},[r("v-dialog",{attrs:{persistent:"","max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,i=e.attrs;return[r("v-btn",t._g(t._b({attrs:{elevation:"2","x-large":"",color:"#f39c12",dark:"",width:t.isMobile?"100%":"40%"}},"v-btn",i,!1),n),[t._v(" Написать нам "),r("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-pencil ")])],1)]}}]),model:{value:t.dialogController,callback:function(e){t.dialogController=e},expression:"dialogController"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v(" Почта для обращения ")]),r("v-card-text",[r("v-text-field",{ref:"emailInput",attrs:{readonly:"",filled:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogController=!1}}},[t._v(" Отмена ")]),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.copyMail}},[t._v(" Копировать ")])],1)],1)],1)],1)],1),r("v-col",{attrs:{md:"6",xs:"12",sm:"12",lg:"6"}},[r("div",{staticClass:"img-wrapper"},[r("v-img",{class:t.isMobile?"mobile-image":"d-image",attrs:{src:n(8047)}})],1)])],1)],1),r("v-snackbar",{attrs:{timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{color:"#f39c12",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",n,!1),[t._v(" Закрыть ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.snackbarText)+" ")])],1)},$=[],B={name:"PHeader",data:function(){return{email:"example@mail.ru",dialogController:!1,snackbar:!1,snackbarText:"Почта скопирована",timeout:2e3}},computed:{isMobile:function(){switch(this.$vuetify.breakpoint.name){case"xs":return!0;case"sm":return!0;default:return!1}}},methods:{onResize:function(){this.isMobile=window.innerWidth<600},copyMail:function(){var t=this.$refs.emailInput.$el.querySelector("input");t.select(),document.execCommand("copy"),this.dialogController=!1,this.snackbar=!0}}},P=B,L=n(9846),F=n(4246),N=n(7047),R=n(3202),q=n(9762),D=n(1347),H=(0,c.Z)(P,A,$,!1,null,"4bc588b8",null),z=H.exports;u()(H,{VBtn:m.Z,VCard:p.Z,VCardActions:b.h7,VCardText:b.ZB,VCardTitle:b.EB,VCol:g.Z,VContainer:L.Z,VDialog:F.Z,VIcon:k.Z,VImg:N.Z,VRow:j.Z,VSnackbar:R.Z,VSpacer:q.Z,VTextField:D.Z});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height"},[n("v-row",{attrs:{"no-gutters":"",justify:"center","justify-md":"start"}},[n("h2",{staticClass:"content-header",staticStyle:{"text-align":"center"}},[t._v(" Мы предоставляем ")])]),n("v-row",{attrs:{align:"center",justify:"space-between"}},t._l(t.contentItems,(function(e,r){return n("v-col",{key:r,attrs:{cols:t.isMobile?12:4}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-img",{attrs:{src:e.icon,"max-width":"80"}})],1)],1),n("v-col",{attrs:{cols:"8"}},[n("h4",{staticClass:"content-subtitle"},[t._v(t._s(e.title))]),n("span",{staticClass:"card-subtitle"},[t._v(t._s(e.subtitle))])])],1)],1)})),1)],1)},G=[],Y={name:"pContent",data:function(){return{contentItems:[{icon:n(4717),title:"Скорость",subtitle:"Быстрые решения и реализация требований"},{icon:n(9398),title:"Качество",subtitle:"Лучшая оптимизация и скорость приложений"},{icon:n(1448),title:"Поддержка",subtitle:"Готовность всегда оказать помощь в решении технических проблем"}]}},computed:{isMobile:function(){switch(this.$vuetify.breakpoint.name){case"xs":return!0;case"sm":return!0;default:return!1}}}},J=Y,K=(0,c.Z)(J,W,G,!1,null,"5c680a33",null),Q=K.exports;u()(K,{VCol:g.Z,VContainer:L.Z,VImg:N.Z,VRow:j.Z});var U={name:"HomeView",components:{PHeader:z,PContent:Q}},X=U,tt=(0,c.Z)(X,O,E,!1,null,null,null),et=tt.exports;u()(tt,{VContainer:L.Z,VRow:j.Z}),r.Z.use(S.Z);var nt=[{path:"/",name:"home",component:et},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,9030))}}],rt=new S.Z({mode:"history",base:"/redjamhere.github.io/",linkActiveClass:"active",routes:nt}),it=rt,at=n(858);r.Z.use(at.Z);var ot=new at.Z({});r.Z.config.productionTip=!1,new r.Z({router:it,vuetify:ot,render:function(t){return t(T)}}).$mount("#app")},8047:function(t,e,n){t.exports=n.p+"img/header-image.f1eddf21.png"},1448:function(t,e,n){t.exports=n.p+"img/help.558ecd71.png"},9398:function(t,e,n){t.exports=n.p+"img/quality.bfac329b.png"},4717:function(t,e,n){t.exports=n.p+"img/speedometer.833e9f3e.png"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,a){if(!r){var o=1/0;for(u=0;u<t.length;u++){r=t[u][0],i=t[u][1],a=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,a<o&&(o=a));if(s){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[r,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about-legacy.09e1fb7e.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="business_landing:";n.l=function(r,i,a,o){if(t[r])t[r].push(i);else{var s,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var v=l[u];if(v.getAttribute("src")==r||v.getAttribute("data-webpack")==e+a){s=v;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[i];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var i=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/redjamhere.github.io/"}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=a);var o=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};n.l(o,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,a,o=r[0],s=r[1],c=r[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var u=c(n)}for(e&&e(r);l<o.length;l++)a=o[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},r=self["webpackChunkbusiness_landing"]=self["webpackChunkbusiness_landing"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2760)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.ac62faa9.js.map