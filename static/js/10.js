(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FqWg:function(e,t,n){"use strict";n.r(t);var u=n("WTW0"),i=n("L2JU");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={components:{VuejxComponent:function(){return Promise.all([n.e(1),n.e(2),n.e(3),n.e(4)]).then(n.bind(null,"teDi"))}},props:{page:{type:String,default:""},site:{type:String,default:"guest"}},data:function(){return{render:!0,vuejx:null}},computed:r({},Object(u.b)("user",["user"]),Object(u.b)("vuejx_manager",["lastCall"])),mounted:function(){var e=this;e.$nextTick(function(){e.clean(),e.init()})},watch:{page:function(){var e=this;e.$nextTick(function(){e.clean(),e.init()})}},methods:r({},Object(i.b)("vuejx_manager",["pullDataDetailGuest"]),{clean:function(){this.render=!0,this.vuejx=null},init:function(){var e=this;e.pullDataDetailGuest({user:e.user,page:e.page,entity:"page",site:e.site,type:"web"}).then(function(t){null!==t&&void 0!==t[0]&&(e.vuejx=t[0]._source.vuejx_web)}).catch(function(t){console.error(t),e.vuejx=null})}})},c=n("KHd+"),l=Object(c.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return null!==this.vuejx&&void 0!==this.vuejx?t("vuejx-component",{attrs:{vuejx_form:this.vuejx,page:this.page,site:this.site,user:this.user}}):this._e()},[],!1,null,null,null);t.default=l.exports}}]);