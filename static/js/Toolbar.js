(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{YPjr:function(t,e,i){"use strict";var o=i("rTq3");i.n(o).a},aQiV:function(t,e,i){"use strict";i.r(e);var o=i("zwU1"),n=i.n(o),r=i("L2JU"),s=i("WTW0");function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},o=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),o.forEach(function(e){c(t,e,i[e])})}return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l={name:"vjx-toolbar",props:["items","dark","toolbarWrap","editor"],data:function(){return{editor:!1,darkTheme:!1,mobileSearch:!1,isScrolling:!1,logo:n.a,scrollbarConfig:{suppressScrollX:!0},itemsNoti:[{avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Brunch this weekend?",subtitle:"<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:"<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Oui oui",subtitle:"<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Birthday gift",subtitle:"<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?"},{divider:!0,inset:!0},{avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Recipe to try",subtitle:"<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}},computed:a({},Object(s.b)("toolbar",["navigationDrawer","progress"]),Object(s.b)("user",["user"])),watch:{$route:function(t,e){null!==t.params.repository&&void 0!==t.params.repository?this.editor=!0:this.editor=!1}},methods:a({},Object(r.c)("toolbar",["setNavigationDrawer"]),Object(r.b)("user",["userSignOut"]),{toWorkspace:function(t){this.$router.push(t)}})},v=(i("YPjr"),i("KHd+")),d=Object(v.a)(l,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"fixed",top:"0","z-index":"2 !important"}},[i("div",{staticClass:"loading-bar",style:t.opacity},[i("div",{staticClass:"progress",style:t.width})]),t._v(" "),i("v-app-bar",{staticStyle:{"padding-left":"0px"},attrs:{dark:t.$vuetify.theme.light,text:!0,color:"white",height:"56","clipped-left":"",app:""}},[i("v-app-bar-nav-icon",{on:{click:function(e){t.navigationDrawer=!t.navigationDrawer}}}),t._v(" "),!t.mobileSearch||t.$vuetify.breakpoint.mdAndUp||t.editor?t._e():i("v-text-field",{staticClass:"mobile__toolbar__search",attrs:{text:"","mt-2":"",solo:"",label:"Search ..."}}),t._v(" "),!t.mobileSearch||t.$vuetify.breakpoint.mdAndUp?i("v-toolbar-title",{staticClass:"ml-0 pl-0 vuejx__toolbal__title"},[i("img",{staticClass:"mr-2",attrs:{src:t.logo,width:"32"}}),t._v(" VueJX\n    ")]):t._e(),t._v(" "),!t.mobileSearch||t.$vuetify.breakpoint.mdAndUp?i("v-spacer"):t._e(),t._v(" "),t.editor?i("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$emit("screen","form")}}},[i("v-icon",[t._v("mdi-file-document")])],1):t._e(),t._v(" "),t.editor?i("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$emit("screen","desktop")}}},[i("v-icon",[t._v("mdi-desktop-mac")])],1):t._e(),t._v(" "),t.editor?i("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$emit("screen","tablet")}}},[i("v-icon",[t._v("mdi-tablet")])],1):t._e(),t._v(" "),t.editor?i("v-btn",{attrs:{text:"",icon:""},on:{click:function(e){return t.$emit("screen","cellphone")}}},[i("v-icon",[t._v("mdi-cellphone")])],1):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp&&!t.editor?i("v-text-field",{staticClass:"toolbar__search__solo",staticStyle:{"min-width":"500px"},attrs:{text:"","hide-no-data":"","hide-details":"","append-icon":"mdi-search-web",placeholder:"Search",solo:""}}):t._e(),t._v(" "),!t.mobileSearch||t.$vuetify.breakpoint.mdAndUp?i("v-spacer"):t._e(),t._v(" "),t.$vuetify.breakpoint.mdAndUp||t.editor?t._e():i("v-btn",{staticStyle:{"margin-right":"6px"},attrs:{text:"",icon:""},on:{click:function(e){t.mobileSearch=!t.mobileSearch}}},[i("v-icon",[t._v(t._s(t.mobileSearch?"clear":"search"))])],1),t._v(" "),t.editor?i("v-btn",{attrs:{text:""}},[t._v("\n      Download\n    ")]):t._e(),t._v(" "),t.editor?i("v-btn",{attrs:{text:""},on:{click:function(e){return t.$emit("addLayout")}}},[t._v("\n      Add layout\n    ")]):t._e(),t._v(" "),t.editor?i("v-btn",{attrs:{text:""}},[t._v("\n      Save\n    ")]):t._e(),t._v(" "),!t.mobileSearch||t.$vuetify.breakpoint.mdAndUp?i("div",[i("v-menu",{attrs:{"close-on-content-click":!1,"offset-y":"","nudge-width":140,"nudge-left":140,"nudge-bottom":20},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.editor?t._e():i("v-btn",t._g({attrs:{text:"",icon:""}},Object.assign({},n,o)),[i("v-icon",[t._v("mdi-apps")])],1)]}}],null,!0)},[t._v(" "),i("span",[t._v("Products")])])]}}],null,!1,1384438110)},[t._v(" "),i("v-card",{staticClass:"apps_menu",staticStyle:{width:"300px"}},[i("v-layout",{attrs:{row:"",wrap:"","px-4":"","pb-4":"","text-center":""}},[i("v-flex",{attrs:{xs4:"","text-center":"","pt-4":"","pb-0":""},on:{click:function(e){return t.toWorkspace("/ecommerce")}}},[i("v-icon",{attrs:{color:"teal",size:"52"}},[t._v("mdi-cart")]),t._v(" "),i("br"),t._v("\n              E-commerce\n            ")],1),t._v(" "),i("v-flex",{attrs:{xs4:"","text-center":"","pt-4":"","pb-0":""},on:{click:function(e){return t.toWorkspace("/website")}}},[i("v-icon",{attrs:{color:"blue darken-3",size:"52"}},[t._v("mdi-web")]),t._v(" "),i("br"),t._v("\n              Web "),i("br"),t._v(" Apps\n            ")],1),t._v(" "),i("v-flex",{attrs:{xs4:"","text-center":"","pt-4":"","pb-0":""},on:{click:function(e){return t.toWorkspace("/desktop")}}},[i("v-icon",{attrs:{color:"cyan darken-3",size:"52"}},[t._v("mdi-desktop-mac")]),t._v(" "),i("br"),t._v("\n              Desktops Apps\n            ")],1),t._v(" "),i("v-flex",{attrs:{xs4:"","text-center":"","pt-4":"","pb-0":""},on:{click:function(e){return t.toWorkspace("/mobile")}}},[i("v-icon",{attrs:{color:"purple darken-3",size:"52"}},[t._v("mdi-cellphone")]),t._v(" "),i("br"),t._v("\n              Mobiles Apps\n            ")],1),t._v(" "),i("v-flex",{attrs:{xs4:"","text-center":"","pt-4":"","pb-0":""},on:{click:function(e){return t.toWorkspace("/eform")}}},[i("v-icon",{attrs:{color:"green darken-3",size:"52"}},[t._v("mdi-file-document-box-outline")]),t._v(" "),i("br"),t._v("\n              EForm width Vuejs\n            ")],1),t._v(" "),i("v-flex",{attrs:{xs4:"","text-center":"","pt-4":"","pb-0":""},on:{click:function(e){return t.toWorkspace("/report")}}},[i("v-icon",{attrs:{color:"red darken-3",size:"52"}},[t._v("mdi-file-pdf")]),t._v(" "),i("br"),t._v("\n              Dynamic Reports\n            ")],1),t._v(" "),i("v-flex",{attrs:{xs4:"","text-center":"","pt-4":"","pb-0":""},on:{click:function(e){return t.toWorkspace("/layout")}}},[i("v-icon",{attrs:{color:"orange darken-3",size:"52"}},[t._v("mdi-language-html5")]),t._v(" "),i("br"),t._v("\n              Layout "),i("br"),t._v("HTML\n            ")],1),t._v(" "),i("v-flex",{attrs:{xs4:"","text-center":"","pt-4":"","pb-0":""},on:{click:function(e){return t.toWorkspace("/blog/list")}}},[i("v-icon",{attrs:{color:"brown lighten-1",size:"52"}},[t._v("mdi-blogger")]),t._v(" "),i("br"),t._v("\n              Blogs\n            ")],1)],1)],1)],1),t._v(" "),i("v-menu",{attrs:{"close-on-content-click":!1,"offset-y":"","nudge-width":140,"nudge-left":140,"nudge-bottom":20},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[t.editor?t._e():i("v-btn",t._g({attrs:{text:"",icon:""}},Object.assign({},n,o)),[i("v-icon",[t._v("mdi-bell")])],1)]}}],null,!0)},[t._v(" "),i("span",[t._v("Notifications")])])]}}],null,!1,261418073)},[t._v(" "),i("v-card",{staticClass:"apps_menu",staticStyle:{width:"300px"}},[i("v-card-actions",{staticClass:"pa-3 teal darken-4"},[i("strong",{staticClass:"white--text"},[t._v("Notifications")])]),t._v(" "),i("v-divider",{attrs:{light:""}}),t._v(" "),i("perfect-scrollbar",{attrs:{options:t.scrollbarConfig}},[i("v-list",{staticClass:"pt-0 px-2",attrs:{"two-line":""}},[t._l(t.itemsNoti.slice(0,6),function(e,o){return[e.header?i("v-subheader",{key:e.header},[t._v(t._s(e.header))]):e.divider?i("v-divider",{key:o,attrs:{inset:e.inset}}):i("v-list-item",{key:e.title,attrs:{avatar:""}},[i("v-list-item-avatar",[i("img",{attrs:{src:e.avatar}})]),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),i("v-list-item-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]})],2)],1)],1)],1),t._v(" "),i("v-menu",{attrs:{"close-on-content-click":!1,"offset-y":"","nudge-width":140,"nudge-left":140,"nudge-bottom":16},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[t.$vuetify.breakpoint.mdAndUp?i("v-btn",t._g({staticStyle:{"border-radius":"0"},attrs:{text:"",icon:"",color:"primary"}},o),[i("v-avatar",{attrs:{tile:!1,size:32,color:"primary"}},[null===t.user?i("v-icon",{attrs:{color:"white"}},[t._v("account_circle")]):i("img",{attrs:{src:t.user.photoURL,alt:"avatar"}})],1)],1):i("v-btn",t._g({attrs:{text:"",icon:"",color:"primary"}},o),[i("v-icon",[t._v("account_circle")])],1)]}}],null,!1,4063719624)},[t._v(" "),i("v-card",{staticClass:"user_menu"},[i("v-list",{attrs:{nav:"",dense:""}},[i("v-list-item-group",[i("v-list-item",{attrs:{to:"/profile"}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s("mdi-account")}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(t.user.email)}})],1)],1),t._v(" "),i("v-list-item",[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s("mdi-brightness-4")}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",[t._v("Dark theme: "+t._s(t.darkTheme?"On":"Off"))])],1),t._v(" "),i("v-list-item-icon",[i("v-switch",{staticStyle:{"margin-top":"0px","padding-top":"0px"},model:{value:t.darkTheme,callback:function(e){t.darkTheme=e},expression:"darkTheme"}})],1)],1),t._v(" "),i("v-list-item",{on:{click:t.userSignOut}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s("mdi-exit-to-app")}})],1),t._v(" "),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s("Sign out")}})],1)],1)],1)],1)],1)],1)],1):t._e()],1)],1)},[],!1,null,null,null);e.default=d.exports},mivp:function(t,e,i){},rTq3:function(t,e,i){var o=i("mivp");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,i("SZ7m").default)("fdc1bc5e",o,!0,{})},zwU1:function(t,e,i){t.exports=i.p+"static/img/logo.7a77a6b.png"}}]);