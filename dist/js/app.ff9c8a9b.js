(function(t){function a(a){for(var i,l,r=a[0],c=a[1],o=a[2],u=0,m=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&m.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);v&&v(a);while(m.length)m.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],i=!0,l=1;l<e.length;l++){var c=e[l];0!==s[c]&&(i=!1)}i&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},s={app:0},n=[];function l(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"6f7c1b28"}[t]+".js"}function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var a=[],e=s[t];if(0!==e)if(e)a.push(e[2]);else{var i=new Promise((function(a,i){e=s[t]=[a,i]}));a.push(e[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=l(t);var o=new Error;n=function(a){c.onerror=c.onload=null,clearTimeout(u);var e=s[t];if(0!==e){if(e){var i=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",o.name="ChunkLoadError",o.type=i,o.request=n,e[1](o)}s[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(a)},r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var v=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0de8":function(t,a,e){},"135b":function(t,a,e){},"1db4":function(t,a,e){},"1f1e":function(t,a,e){"use strict";var i=e("7bc8"),s=e.n(i);s.a},"22ac":function(t,a,e){"use strict";var i=e("83ac"),s=e.n(i);s.a},"3b0e":function(t,a,e){},"3b29":function(t,a,e){"use strict";var i=e("dcdc"),s=e.n(i);s.a},"413b":function(t,a,e){},"42b4":function(t,a,e){"use strict";var i=e("549c"),s=e.n(i);s.a},"505a":function(t,a,e){},5242:function(t,a,e){},"534b":function(t,a,e){"use strict";var i=e("eb18"),s=e.n(i);s.a},"549c":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-content",[e("router-link",{attrs:{to:"/"}}),e("router-view")],1)],1)},n=[],l=e("2877"),r=e("6544"),c=e.n(r),o=e("7496"),u=e("a75b"),v={},m=Object(l["a"])(v,s,n,!1,null,null,null),d=m.exports;c()(m,{VApp:o["a"],VContent:u["a"]});e("d3b7");var p=e("8c4f"),b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("NavBar"),e("Content")],1)},f=[],h=e("d000"),_=e("9d267"),C={components:{NavBar:h["a"],Content:_["a"]}},g=C,x=Object(l["a"])(g,b,f,!1,null,null,null),y=x.exports;i["a"].use(p["a"]);var k=[{path:"/:id",name:"Home",component:y},{path:"/img2",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],V=new p["a"]({mode:"history",base:"/",routes:k}),I=V,E=e("f309");i["a"].use(E["a"]);var A=new E["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:I,vuetify:A,render:function(t){return t(d)}}).$mount("#app")},"60ed":function(t,a,e){"use strict";var i=e("505a"),s=e.n(i);s.a},"60f4":function(t,a,e){"use strict";var i=e("413b"),s=e.n(i);s.a},"7bc8":function(t,a,e){},8229:function(t,a,e){"use strict";var i=e("1db4"),s=e.n(i);s.a},"83ac":function(t,a,e){},9301:function(t,a,e){"use strict";var i=e("5242"),s=e.n(i);s.a},"9d267":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("div",{attrs:{id:"left"}},[e("LeftDiv")],1),e("div",{attrs:{id:"right"}},[e("RightDiv")],1)])},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"leftdiv"},[e("ProfileCard"),e("ProfileTab"),e("Experience"),e("div",{staticClass:"education-skills"},[e("div",{staticClass:"left"},[e("Education")],1),e("div",{staticClass:"right"},[e("Skills")],1)])],1)},l=[],r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"profilecard"},[i("img",{attrs:{src:e("cf82"),alt:""}}),i("info",[i("span",{staticClass:"display-1"},[t._v("Kamal Pratap")]),i("br"),i("span",{staticClass:"subtitle-1 font-weight-medium text--disabled"},[t._v("full Stack Devloper")]),i("br"),i("span",{staticClass:"subtitle-1 font-weight-medium text--disabled"},[t._v("last activity")])])],1)},c=[],o=(e("ccdc"),e("2877")),u={},v=Object(o["a"])(u,r,c,!1,null,"5180e944",null),m=v.exports,d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{attrs:{flat:""}},[e("v-toolbar",{attrs:{flat:""}},[e("v-tabs",{attrs:{"fixed-tabs":""},model:{value:t.tabs,callback:function(a){t.tabs=a},expression:"tabs"}},[e("v-tab",{attrs:{href:"#mobile-tabs-5-1",disabled:t.ans}},[e("span",[t._v("OVERVIEW")])]),e("v-tab",{attrs:{href:"#mobile-tabs-5-2"}},[e("span",[t._v("ACTIVITIES")])]),e("v-tab",{attrs:{href:"#mobile-tabs-5-3",disabled:t.ans}},[e("span",[t._v("ASSESSMENTS")])]),e("v-tab",{attrs:{href:"#mobile-tabs-5-4",disabled:t.ans}},[e("span",[t._v("FILES")])]),e("v-tab",{attrs:{href:"#mobile-tabs-5-5",disabled:t.ans}},[e("span",[t._v("RESUME")])])],1)],1),e("v-tabs-items",{model:{value:t.tabs,callback:function(a){t.tabs=a},expression:"tabs"}},t._l(5,(function(t){return e("v-tab-item",{key:t,attrs:{value:"mobile-tabs-5-"+t}},[e("v-card",{attrs:{flat:""}},[e("div","2"==t?[e("Activity")]:[e("EmptyContent")],1)])],1)})),1)],1)},p=[],b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto",attrs:{tile:"",outlined:""}},[e("v-list-item-title",{staticClass:"headline mb-1 mx-8 my-4"},[t._v("Information")]),e("v-btn",{staticClass:"btn",class:t.add2,attrs:{color:"black","x-small":"",absolute:"",top:"",right:"",fab:"",outlined:"",ripple:t.ans}},[e("v-icon",[t._v("mdi-plus")])],1),e("br"),e("v-list",{attrs:{flat:""}},t._l(t.information,(function(a){return e("div",{key:a.key},[e("v-list-item",[e("v-list-item-content",{staticClass:"title mx-4"},[e("v-list-item-title",{attrs:{color:"black"}},[t._v(t._s(a.key))])],1),e("v-list-item-content",{staticClass:"content"},[e("v-list-item-title",{attrs:{color:"black"}},[t._v(t._s(a.value1))]),null!=a.value2?e("v-list-item-title",{attrs:{color:"black"}},[t._v(t._s(a.value2))]):t._e()],1)],1),"LINKS"!=a.key?e("v-divider"):t._e()],1)})),0)],1)},f=[],h={data:function(){return{information:[{key:"EMAIL",value1:"Kamalpratap@xyz.com"},{key:"PHONE",value1:"+91-9876543234"},{key:"SOCIAL",value1:"github.com/kamalpratap"},{key:"LINKS",value1:"codepen.io/kamal",value2:"yahool.com/kamal"}]}},computed:{add2:function(){return 1==this.$route.params.id?"custom-black-btn":""},ans:function(){return 1!=this.$route.params.id}}},_=h,C=(e("22ac"),e("6544")),g=e.n(C),x=e("8336"),y=e("b0af"),k=e("ce7e"),V=e("132d"),I=e("8860"),E=e("da13"),A=e("5d23"),S=Object(o["a"])(_,b,f,!1,null,"5101be9f",null),L=S.exports;g()(S,{VBtn:x["a"],VCard:y["a"],VDivider:k["a"],VIcon:V["a"],VList:I["a"],VListItem:E["a"],VListItemContent:A["a"],VListItemTitle:A["b"]});var w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto ",attrs:{outlined:""}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("div",{staticClass:"empty"},[e("h1",[t._v("I am Empty")])])])],1)],1)},O=[],$=(e("3b29"),{}),T=Object(o["a"])($,w,O,!1,null,"50530fd8",null),P=T.exports;g()(T,{VCard:y["a"],VListItem:E["a"],VListItemContent:A["a"]});var j={components:{Activity:L,EmptyContent:P},data:function(){return{tabs:"mobile-tabs-5-2"}},computed:{ans:function(){return 1==this.$route.params.id}}},D=j,B=e("71a3"),M=e("c671"),R=e("fe57"),N=e("aac8"),G=e("71d9"),K=Object(o["a"])(D,d,p,!1,null,null,null),U=K.exports;g()(K,{VCard:y["a"],VTab:B["a"],VTabItem:M["a"],VTabs:R["a"],VTabsItems:N["a"],VToolbar:G["a"]});var F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto experience",attrs:{outlined:""}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline mb-1 mx-4"},[t._v("Experience")]),e("v-btn",{staticClass:"btn",class:t.add2,attrs:{color:"black","x-small":"",absolute:"",top:"",right:"",fab:"",outlined:"",ripple:t.ans}},[e("v-icon",[t._v("mdi-plus")])],1),e("br"),e("v-list-item-title",{staticClass:"headline mb-1  mx-4"},[t._v("Lead Designer")]),e("v-list-item-title",{staticClass:"thin body-2 mx-4"},[e("span",[t._v("Google. Inc.")]),e("br"),e("span",[t._v("Sep 2019 -Dec 2019")]),e("br"),e("span",[t._v(" During my internship,I developed UI and UX for an android app called Google Keep. I completely Re-Designed the"),e("br"),t._v(" application.")])])],1)],1)],1)},q=[],H={computed:{add2:function(){return 1==this.$route.params.id?"custom-black-btn":""},ans:function(){return 1!=this.$route.params.id}}},J=H,W=(e("8229"),Object(o["a"])(J,F,q,!1,null,"87ddd998",null)),Y=W.exports;g()(W,{VBtn:x["a"],VCard:y["a"],VIcon:V["a"],VListItem:E["a"],VListItemContent:A["a"],VListItemTitle:A["b"]});var z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto education",attrs:{outlined:""}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline mb-1 mx-4"},[t._v("Education")]),e("v-btn",{staticClass:"btn",class:t.add2,attrs:{color:"black","x-small":"",absolute:"",top:"",right:"",fab:"",outlined:"",ripple:t.ans}},[e("v-icon",[t._v("mdi-plus")])],1),e("br"),e("v-list-item-title",{staticClass:"headline mb-1 my-2 mx-4"},[t._v("SSC")]),e("v-list-item-title",{staticClass:"thin body-2 mx-4"},[e("span",[t._v("St. Mary High School")]),e("br"),e("span",[t._v("Sep 2016")]),e("br"),e("span",[t._v("CGPA : 9.2")])]),e("br"),e("v-list-item-title",{staticClass:"headline mb-1 my-2 mx-4"},[t._v("Higher Secondary")]),e("v-list-item-title",{staticClass:"thin body-2 mx-4"},[e("span",[t._v("St. Mary High School")]),e("br"),e("span",[t._v("Sep 2018")]),e("br"),e("span",[t._v("Percentage: 96.5%")])])],1)],1)],1)},Q=[],X={computed:{add2:function(){return 1==this.$route.params.id?"custom-black-btn":""},ans:function(){return 1!=this.$route.params.id}}},Z=X,tt=(e("d155"),Object(o["a"])(Z,z,Q,!1,null,"df0be4a2",null)),at=tt.exports;g()(tt,{VBtn:x["a"],VCard:y["a"],VIcon:V["a"],VListItem:E["a"],VListItemContent:A["a"],VListItemTitle:A["b"]});var et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto education skills",attrs:{outlined:""}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline mb-1"},[t._v("Skills")]),e("v-btn",{staticClass:"btn",class:t.add2,attrs:{color:"black","x-small":"",absolute:"",top:"",right:"",fab:"",outlined:"",ripple:t.ans}},[e("v-icon",[t._v("mdi-plus")])],1),e("br"),e("v-list-item-title",{staticClass:"skillelement my-2"},t._l(t.skillset,(function(a){return e("div",{key:a},[e("v-chip",{staticClass:"ma-2 chip",attrs:{color:"blue lighten-5","text-color":"black"}},[t._v(" "+t._s(a)+" ")])],1)})),0)],1)],1)],1)},it=[],st={data:function(){return{skillset:["Python","Web Devlopment","CSS","Web Devlopment","Python","CSS","CSS","Web Devlopment","Python","Web Devlopment","Python","CSS","CSS","Web Devlopment","Python"]}},computed:{add2:function(){return 1==this.$route.params.id?"custom-black-btn":""},ans:function(){return 1!=this.$route.params.id}}},nt=st,lt=(e("de5d"),e("cc20")),rt=Object(o["a"])(nt,et,it,!1,null,"35a92bbc",null),ct=rt.exports;g()(rt,{VBtn:x["a"],VCard:y["a"],VChip:lt["a"],VIcon:V["a"],VListItem:E["a"],VListItemContent:A["a"],VListItemTitle:A["b"]});var ot={components:{ProfileCard:m,ProfileTab:U,Experience:Y,Education:at,Skills:ct}},ut=ot,vt=(e("42b4"),Object(o["a"])(ut,n,l,!1,null,"f872d2ae",null)),mt=vt.exports,dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("Evaluation"),e("TeamNote"),e("Tasks")],1)},pt=[],bt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[e("v-list",[e("v-list-item",{staticClass:"manage"},[e("v-list-item-content",[e("v-list-item-title",[t._v("Evaluation")])],1),e("v-list-item-content",[e("v-btn",{staticClass:"ma-1 pa-0",class:t.add1,attrs:{text:"",color:"primary",ripple:t.ans}},[e("v-icon",{attrs:{left:"","x-small":""}},[t._v("fa fa-calendar")]),t._v("schedule ")],1)],1),e("v-list-item-content",[e("v-btn",{staticClass:"mx-10",class:t.add2,attrs:{text:"",fab:"",small:"",ripple:t.ans}},[e("v-icon",{attrs:{dark:""}},[t._v("fa fa-share-alt")])],1)],1),e("v-list-item-content",[e("v-btn",{class:t.add2,attrs:{text:"",fab:"",small:"",ripple:t.ans}},[e("v-icon",[t._v("fa fa-paper-plane")])],1)],1),e("div",[e("v-btn",{class:t.add1,attrs:{text:"",small:"",color:"primary",ripple:t.ans}},[t._v("MORE")])],1)],1)],1),e("v-divider"),e("v-list",[e("v-list-item",{staticClass:"manage"},[e("v-list-item-content",[e("v-list-item-title",[t._v("Job Name")])],1),e("v-list-item-content"),e("v-list-item-content",[e("v-btn",{staticClass:"ma-1 pa-0",class:t.add1,attrs:{text:"",color:"primary",ripple:t.ans}},[e("v-icon",{attrs:{left:"","x-small":""}},[t._v("fa fa-check")]),t._v("PROCEED ")],1)],1),e("v-list-item-content",[e("v-btn",{staticClass:"mx-10",class:t.add2,attrs:{text:"",fab:"",small:"",ripple:t.ans}},[e("v-icon",[t._v("fa fa-ban")])],1)],1),e("v-list-item-content",[e("v-btn",{staticClass:"mx-10",class:t.add2,attrs:{text:"",fab:"",small:"",ripple:t.ans}},[e("v-icon",{attrs:{dark:""}},[t._v("fa fa-ellipsis-h")])],1)],1)],1)],1),e("v-divider"),e("v-list",[e("v-list-item",{staticClass:"manage"},[e("v-list-item-content",[e("v-list-item-title",[t._v("Pool Name")])],1),e("v-list-item-content"),e("v-list-item-content",[e("v-btn",{staticClass:" ma-1 pa-0",class:t.add1,attrs:{text:"",color:"primary",ripple:t.ans}},[e("v-icon",{attrs:{left:"","x-small":""}},[t._v("fa fa-check")]),t._v("PROCEED ")],1)],1),e("v-list-item-content",[e("v-btn",{staticClass:"mx-10",class:t.add2,attrs:{text:"",fab:"",small:"",ripple:t.ans}},[e("v-icon",[t._v("fa fa-ban")])],1)],1),e("v-list-item-content",[e("v-btn",{staticClass:"mx-10",class:t.add2,attrs:{text:"",fab:"",small:"",ripple:t.ans}},[e("v-icon",{attrs:{dark:""}},[t._v("fa fa-ellipsis-h")])],1)],1)],1)],1)],1)},ft=[],ht={computed:{add1:function(){return 1==this.$route.params.id?"custom-blue-btn":""},add2:function(){return 1==this.$route.params.id?"custom-black-btn":""},ans:function(){return 1!=this.$route.params.id}}},_t=ht,Ct=(e("534b"),Object(o["a"])(_t,bt,ft,!1,null,"57793c7c",null)),gt=Ct.exports;g()(Ct,{VBtn:x["a"],VCard:y["a"],VDivider:k["a"],VIcon:V["a"],VList:I["a"],VListItem:E["a"],VListItemContent:A["a"],VListItemTitle:A["b"]});var xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto teamnotes",attrs:{outlined:""}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline mb-1"},[t._v("Team Notes")]),e("v-btn",{staticClass:"btn",class:t.add2,attrs:{color:"black","x-small":"",absolute:"",top:"",right:"",fab:"",outlined:"",ripple:t.ans}},[e("v-icon",[t._v("mdi-plus")])],1),e("br"),t._l(4,(function(a){return e("div",{key:a,staticClass:"profilecard"},[e("v-avatar",{attrs:{color:"primary icon",small:""}},[e("span",{staticClass:"white--text title"},[t._v("KP")])]),e("info",[e("span",{staticClass:"subtitle-2"},[t._v("Kamal Pratap"),e("v-icon",{staticClass:"circle"},[t._v("fa fa-circle")]),e("span",{staticClass:"text--disabled caption"},[t._v("02:30 pm")])],1),e("br"),e("span",{staticClass:"body-2"},[t._v("Hey Guys,I've pushed my progress to the Master Branch")])]),"4"!=a?e("v-divider",{attrs:{id:"hr"}}):t._e()],1)}))],2)],1)],1)},yt=[],kt={computed:{add2:function(){return 1==this.$route.params.id?"custom-black-btn":""},ans:function(){return 1!=this.$route.params.id}}},Vt=kt,It=(e("f910"),e("8212")),Et=Object(o["a"])(Vt,xt,yt,!1,null,"bcf09e08",null),At=Et.exports;g()(Et,{VAvatar:It["a"],VBtn:x["a"],VCard:y["a"],VDivider:k["a"],VIcon:V["a"],VListItem:E["a"],VListItemContent:A["a"],VListItemTitle:A["b"]});var St=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto tasks",attrs:{outlined:""}},[e("v-list-item",{attrs:{"three-line":""}},[e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline mb-1"},[t._v("Tasks")]),e("v-btn",{staticClass:"btn",class:t.add2,attrs:{color:"black","x-small":"",absolute:"",top:"",right:"",fab:"",outlined:"",ripple:t.ans}},[e("v-icon",[t._v("mdi-plus")])],1),e("br"),e("div",{staticClass:"profilecard"},t._l(6,(function(a){return e("div",{key:a},[e("info",[e("div",{staticClass:"upline"},[e("v-icon",{staticClass:"check-sqaure",attrs:{color:"primary",left:""}},[t._v("fa fa-check-square")]),t._v("Add checkout button ")],1),e("div",{staticClass:"downline text--disabled caption"},[t._v(" 2MIN AGO "),e("v-icon",{staticClass:"circle",attrs:{left:""}},[t._v("fa fa-circle")]),e("v-icon",{staticClass:"calendar",attrs:{left:""}},[t._v("fa fa-calendar")]),t._v(" DUE : 03:00pm 02/05/2020 ")],1)]),e("v-avatar",{staticClass:"avtar",attrs:{color:"primary","x-small":""}},[e("span",{staticClass:"white--text headline"},[t._v("KP")])]),"6"!=a?e("v-divider",{attrs:{id:"hr"}}):t._e()],1)})),0)],1)],1)],1)},Lt=[],wt={computed:{add2:function(){return 1==this.$route.params.id?"custom-black-btn":""},ans:function(){return 1!=this.$route.params.id}}},Ot=wt,$t=(e("9301"),Object(o["a"])(Ot,St,Lt,!1,null,"5be20b92",null)),Tt=$t.exports;g()($t,{VAvatar:It["a"],VBtn:x["a"],VCard:y["a"],VDivider:k["a"],VIcon:V["a"],VListItem:E["a"],VListItemContent:A["a"],VListItemTitle:A["b"]});var Pt={components:{Evaluation:gt,TeamNote:At,Tasks:Tt}},jt=Pt,Dt=Object(o["a"])(jt,dt,pt,!1,null,null,null),Bt=Dt.exports,Mt={components:{LeftDiv:mt,RightDiv:Bt}},Rt=Mt,Nt=(e("1f1e"),Object(o["a"])(Rt,i,s,!1,null,"52b3b716",null));a["a"]=Nt.exports},b147:function(t,a,e){},ccdc:function(t,a,e){"use strict";var i=e("0de8"),s=e.n(i);s.a},cf82:function(t,a,e){t.exports=e.p+"img/ls.c439be0f.jpg"},d000:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar"},[e("SideBar",{attrs:{action:t.drawer},on:{closesidebar:t.close}}),e("nav",[e("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAYklEQVRoge3ZsQ2AQAzFUAexAqMxOqwDG0ATSBT5TeBfXBEdSHoSwFEdkSGAqzoiw1IdkGXMkAD26ghJkiTpFwFs1REZvBC7cUg3Yx67JEmS9GrMR4+nbjdjhqzAWR0h6Xs3aFgFl74oro8AAAAASUVORK5CYII="},on:{click:function(a){return a.stopPropagation(),t.open(a)}}}),t._m(0),e("div",{attrs:{id:"back"}},[t._v(" BACK ")])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"link"}},[t._v("EMPLOYEES/ "),e("span",{staticClass:"text--disabled"},[t._v("PROFILES")])])}],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-navigation-drawer",{staticClass:"sidebar",attrs:{app:"",absolute:"","pa-0":"",temporary:""},model:{value:t.action,callback:function(a){t.action=a},expression:"action"}},[e("v-icon",{staticClass:"crossicon",on:{click:t.clicked}},[t._v("fa fa-times")]),e("v-list-item",[e("v-list-item-icon",[e("v-icon",[t._v("fa fa-bars")])],1),e("v-list-item-content",[e("v-list-item-title",{staticClass:"indigo--text  subtitle"},[t._v("INOGIT")])],1)],1),e("v-list",{attrs:{dense:""}},t._l(t.items1,(function(a){return e("v-list-item",{key:a.title,attrs:{link:""}},[e("v-list-item-icon",[e("v-img",{attrs:{src:a.icon,id:"imgicon"}})],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.title))])],1)],1)})),1),e("v-divider"),e("v-list-item"),e("v-list",{staticClass:"second",attrs:{dense:""}},t._l(t.items2,(function(a){return e("v-list-item",{key:a.title,attrs:{link:""}},[e("v-list-item-icon",[e("v-img",{attrs:{src:a.icon,id:"imgicon"}})],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.title))])],1)],1)})),1)],1)},l=[],r={props:["action"],data:function(){return{items1:[{title:"Dashboard",icon:"https://img.icons8.com/material-outlined/24/000000/content.png"},{title:"Candidates",icon:"https://img.icons8.com/wired/64/000000/user-group-man-man.png"},{title:"Jobs",icon:"https://img.icons8.com/ios-filled/50/000000/new-job.png"},{title:"Mailbox",icon:"https://img.icons8.com/windows/50/000000/sms--v1.png"},{title:"Settings",icon:"https://img.icons8.com/small/16/000000/gear.png"}],items2:[{title:"Pools",icon:"https://img.icons8.com/windows/32/000000/wave-lines.png"},{title:"Assessments",icon:"https://img.icons8.com/small/80/000000/bar-chart.png"},{title:"Team members",icon:"https://img.icons8.com/ios-filled/50/000000/dot-logo.png"},{title:"Billing",icon:"https://img.icons8.com/ios-glyphs/64/000000/us-dollar.png"},{title:"Guidelines",icon:"https://img.icons8.com/wired/64/000000/list.png"},{title:"Feedback",icon:"https://img.icons8.com/ios-filled/50/000000/edit-chat-history.png"},{title:"Contect Us",icon:"https://img.icons8.com/metro/26/000000/help.png"}]}},methods:{clicked:function(){this.$emit("closesidebar")}}},c=r,o=(e("60f4"),e("2877")),u=e("6544"),v=e.n(u),m=e("ce7e"),d=e("132d"),p=e("adda"),b=e("8860"),f=e("da13"),h=e("5d23"),_=e("34c3"),C=e("f774"),g=Object(o["a"])(c,n,l,!1,null,"17380e09",null),x=g.exports;v()(g,{VDivider:m["a"],VIcon:d["a"],VImg:p["a"],VList:b["a"],VListItem:f["a"],VListItemContent:h["a"],VListItemIcon:_["a"],VListItemTitle:h["b"],VNavigationDrawer:C["a"]});var y={components:{SideBar:x},data:function(){return{drawer:!1}},methods:{open:function(){1!=this.$route.params.id&&(this.drawer=!0)},close:function(){this.drawer=!1}}},k=y,V=(e("60ed"),Object(o["a"])(k,i,s,!1,null,"222e764f",null));a["a"]=V.exports},d155:function(t,a,e){"use strict";var i=e("3b0e"),s=e.n(i);s.a},dcdc:function(t,a,e){},de5d:function(t,a,e){"use strict";var i=e("135b"),s=e.n(i);s.a},eb18:function(t,a,e){},f910:function(t,a,e){"use strict";var i=e("b147"),s=e.n(i);s.a}});
//# sourceMappingURL=app.ff9c8a9b.js.map