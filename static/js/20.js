(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3VPY":function(t,e,a){"use strict";a.r(e);var o=a("WTW0"),r=a("L2JU"),n=a("hUol"),i=a.n(n),s=a("8SHQ");function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},o=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),o.forEach(function(e){c(t,e,a[e])})}return t}function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}i.a.options={closeButton:!0,timeOut:"1500"},window.Vue.use(i.a);var v={props:{page:{type:String,default:""},site:{type:String,default:""}},data:function(){return{api:s.a.vuejx,cmOptions:{tabSize:4,mode:"text/javascript",theme:"base16-light",lineNumbers:!0,line:!0},formData:{}}},mounted:function(){var t=this;t.$nextTick(function(){t.clean(),t.init()})},computed:u({},Object(o.b)("user",["user"])),watch:{page:function(t,e){this.clean(),this.init()}},methods:u({},Object(r.b)("vuejx_manager",["updateData","pullDataDetailGuestSite"]),{clean:function(){},init:function(){var t=this;t.formData={},t.pullDataDetailGuestSite({user:t.user,page:t.page,entity:"page",site:t.site}).then(function(e){console.log("data",e);var a=e.detail;null!=a&&a.length>0?t.formData=a[0]._source:t.formData={}}).catch(function(e){console.error(e),t.formData={}})},submit:function(){console.log(this.formData),this.updateData({user:this.user,body:this.formData,method:"update"}).then(function(t){i.a.success(t)})}})},f=(a("e7yx"),a("KHd+")),l=Object(f.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-btn",{staticStyle:{bottom:"50px",left:"15px","z-index":"9999"},attrs:{color:"primary",fixed:"",bottom:""},on:{click:t.submit}},[t._v("\n    Submit\n  ")]),t._v(" "),a("v-tabs",{attrs:{vertical:""}},[a("v-tab",[t._v("\n      Public page\n    ")]),t._v(" "),a("v-tab",[t._v("\n      Private page\n    ")]),t._v(" "),a("v-tab",[t._v("\n      Public header\n    ")]),t._v(" "),a("v-tab",[t._v("\n      Public footer\n    ")]),t._v(" "),a("v-tab",[t._v("\n      Private header\n    ")]),t._v(" "),a("v-tab",[t._v("\n      Private footer\n    ")]),t._v(" "),a("v-tab",[t._v("\n      Css stylesheet\n    ")]),t._v(" "),a("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.formData.vuejx_web,callback:function(e){t.$set(t.formData,"vuejx_web",e)},expression:"formData['vuejx_web']"}})],1),t._v(" "),a("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.formData.vuejx_group,callback:function(e){t.$set(t.formData,"vuejx_group",e)},expression:"formData['vuejx_group']"}})],1),t._v(" "),a("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.formData.vuejx_header_web,callback:function(e){t.$set(t.formData,"vuejx_header_web",e)},expression:"formData['vuejx_header_web']"}})],1),t._v(" "),a("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.formData.vuejx_footer_web,callback:function(e){t.$set(t.formData,"vuejx_footer_web",e)},expression:"formData['vuejx_footer_web']"}})],1),t._v(" "),a("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.formData.vuejx_header_group,callback:function(e){t.$set(t.formData,"vuejx_header_group",e)},expression:"formData['vuejx_header_group']"}})],1),t._v(" "),a("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.formData.vuejx_footer_group,callback:function(e){t.$set(t.formData,"vuejx_footer_group",e)},expression:"formData['vuejx_footer_group']"}})],1),t._v(" "),a("v-tab-item",{attrs:{transition:"fade-transition","reverse-transition":"fade-transition"}},[a("codemirror",{attrs:{options:t.cmOptions},model:{value:t.formData.vuejx_header_web_css,callback:function(e){t.$set(t.formData,"vuejx_header_web_css",e)},expression:"formData['vuejx_header_web_css']"}})],1)],1),t._v(" "),a("back-to-top",{attrs:{bottom:"50px",right:"50px"}},[a("v-btn",{attrs:{text:"",icon:"",color:"primary"}},[a("v-icon",{attrs:{size:"56"}},[t._v("mdi-arrow-up-bold-box")])],1)],1)],1)},[],!1,null,null,null);e.default=l.exports},MrDD:function(t,e,a){var o=a("OW4h");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,a("SZ7m").default)("7ae784ba",o,!0,{})},OW4h:function(t,e,a){},e7yx:function(t,e,a){"use strict";var o=a("MrDD");a.n(o).a}}]);