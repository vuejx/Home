(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{AiZR:function(t,e,a){"use strict";var s=a("bep3");a.n(s).a},Kbks:function(t,e,a){"use strict";a.d(e,"a",function(){return s});var s={_resource:{title:"Entities management",type:"_resource",columns:["shortName","title","description","order","status"],config_columns:[{field:"_source.shortName",field_query:"shortName",field_sort:"shortName.keyword",headerText:"Sort Name",textAlign:"left",width:220,minWidth:220},{field:"_source.title",field_query:"title",field_sort:"title.keyword",headerText:"Title",textAlign:"left",width:320,minWidth:320},{field:"_source.description",field_query:"description",field_sort:"description.keyword",headerText:"Description",textAlign:"left"},{field:"_source.order",field_query:"order",field_sort:"order",headerText:"Order",textAlign:"right",width:120,minWidth:120},{field:"_source.status._source.title",field_query:"status._source.title",field_sort:"status._source.title.keyword",headerText:"Status",textAlign:"center",width:120,minWidth:120}],sort:[{order:"asc"},"_score"],add:"add",update:"update",delete:"delete",config:{type:0,form:[{model:"createdAt",dataType:"number",type:"view",format:"MM/dd/yyyy",class:"xs6 sm3",label:"Created date:"},{model:"modifiedAt",dataType:"number",type:"view",format:"MM/dd/yyyy",class:"xs6 sm3",label:"Modified date:"},{model:"shortName",dataType:"string",type:"text",class:"xs12 sm6",label:"Sort Name:"},{model:"title",dataType:"string",type:"text",class:"xs12",label:"Title:"},{model:"description",dataType:"string",type:"textarea",class:"xs12",label:"Description:"},{model:"config",dataType:"string",type:"codemirror",class:"xs12",label:"Config:"},{model:"order",dataType:"number",type:"number",class:"xs6",label:"Order:"},{model:"status",dataType:"object",type:"autocomplete",object:!0,class:"xs6",label:"Status:",itemText:"_source.title",itemValue:"_source.shortName",data:[{_source:{shortName:"activate",title:"Activate"}},{_source:{shortName:"deactivate",title:"Deactivate"}}]},{model:"role",dataType:"object",type:"autocomplete",object:!0,multiple:!0,class:"xs12",label:"Roles:",itemText:"_source.title",itemValue:"_source.shortName",link:"role",column:["shortName","title"],sort:[{order:"asc"},"_score"]},{model:"databaseType",dataType:"object",type:"autocomplete",object:!0,multiple:!0,class:"xs12 sm6",label:"DatabaseType:",itemText:"_source.title",itemValue:"_source.shortName",link:"dict_item",link_item:"database",link_columns:["shortName","title"],link_sort:[{order:"asc"},"_score"]},{model:"syncSite",dataType:"boolean",type:"autocomplete",class:"xs12 sm6",label:"Public data:",itemText:"_source.title",itemValue:"_source.shortName",data:[{_source:{shortName:!0,title:"Public"}},{_source:{shortName:!1,title:"Private"}}]}]}}}},axU8:function(t,e,a){"use strict";a.r(e);var s=a("WTW0"),r=a("L2JU"),i=(a("Kbks"),a("8SHQ"));function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){l(t,e,a[e])})}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var n={props:{site:{type:String,default:"guest"}},data:function(){return{api:i.a.vuejx,renderChart:!1,valid:!1,tagObject:{},tags:[],tagsMenu:[{title:"Dashboard",icon:"mdi-desktop-mac-dashboard",link:"/prototype/dashboard"}],codeRules:[function(t){return!!t||"ShortName is required"}],titleRules:[function(t){return!!t||"Title is required"}],mobileScreen:!1,defaultPadding:!0,render:!1,selected:{},items:[],chart:{chart:{type:"bar"},title:{text:""},xAxis:{type:"category"},yAxis:{title:{text:""}},legend:{enabled:!1},plotOptions:{series:{borderWidth:0,dataLabels:{enabled:!0}}},series:[{colorByPoint:!0,data:[]}]},chartPie:{chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie"},title:{text:""},tooltip:{pointFormat:"{point.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b>: {point.percentage:.1f} %"}}},series:[{colorByPoint:!0,data:[]}]},dataMap:null}},mounted:function(){var t=this;t.$nextTick(function(){setTimeout(function(){t.render=!0},200)})},computed:o({},Object(s.b)("user",["user"])),methods:o({},Object(r.b)("workspace",["addData","pullData"]),{clean:function(){this.tags=[]},init:function(){},addTags:function(){var t=this;t.$refs.form.validate()&&(t.tagObject.site=t.site,t.tagObject.type="tag",t.tagObject.order=0,t.addData({user:t.user,body:t.tagObject,method:"add"}).then(function(t){console.log(t)}))},getDataAggs:function(t){var e=this,a=0;if(0===t.length)e.dataMap=null;else{for(var s in t)a+=t[s].doc_count;for(var r in t)e.chart.series[0].data.push({name:e.dataMap[t[r].key],y:t[r].doc_count}),e.chartPie.series[0].data.push({name:e.dataMap[t[r].key],y:t[r].doc_count/a}),1;e.chartPie.series[0].data.length>0&&(e.chartPie.series[0].data[0].sliced=!0,e.chartPie.series[0].data[0].selected=!0),e.chart.title.text=e.site+" charts bar",e.chartPie.title.text=e.site+" charts pie",e.chart.series[0].name=e.user.fullName}},getData:function(t){var e=this;for(var a in e.renderChart=!1,e.tagsMenu=[{title:"Dashboard",icon:"mdi-desktop-mac-dashboard",link:"/prototype/dashboard"}],e.dataMap={},t)e.tagsMenu.push({title:t[a]._source.title,icon:"mdi-playlist-plus",link:"/"+e.site+"/"+t[a]._source.shortName}),e.dataMap[t[a]._source.shortName]=t[a]._source.title;e.renderChart=!0}})},c=(a("AiZR"),a("KHd+")),d=Object(c.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-list-md container"},[a("vjx-drawer",{attrs:{items:t.tagsMenu,"toolbar-wrap":!1}}),t._v(" "),a("v-layout",{staticClass:"px-3",attrs:{row:"",wrap:"","grid-list-md":""}},[a("v-flex",{attrs:{xs12:"",sm7:""}},[a("v-card",{staticClass:"mx-auto no__border no__radius",attrs:{outlined:""}},[a("v-card-title",{staticClass:"title pt-2",staticStyle:{background:"#098670 !important",color:"#fff"}},[t._v(t._s(t.site.toUpperCase())+" recents")]),t._v(" "),a("v-list",{staticClass:"py-0",attrs:{"tree-line":"",color:"transparent"}},[a("v-list-item-group",[a("vuejx-data-list",{attrs:{api:t.api,user:t.user,site:t.site,entity:t.site,size:10,sort:[{modifiedAt:"desc"},"_score"],columns:["shortName","title","description","author","createdAt"]},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return[t._l(s,function(e,r){return[a("v-list-item",{key:e.title,staticClass:"px-3"},[[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e._source.title)}}),t._v(" "),a("v-list-item-subtitle",{staticClass:"text--primary",domProps:{textContent:t._s(e._source.shortName)}}),t._v(" "),a("v-list-item-subtitle",{domProps:{textContent:t._s(e._source.description)}})],1),t._v(" "),a("v-list-item-action",[a("v-list-item-action-text",{domProps:{textContent:t._s(new Date(e._source.createdAt).toLocaleDateString())}}),t._v(" "),a("v-list-item-action-text")],1)]],2),t._v(" "),r+1<s.length?a("v-divider",{key:r}):t._e()]})]}}])})],1)],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm5:""}},[t.render&&null!==t.dataMap?a("vuejx-chart",{attrs:{id:"pieContainer",chart:t.chartPie}}):t._e(),t._v(" "),t.render&&null!==t.dataMap?a("vuejx-chart",{attrs:{id:"barContainer",chart:t.chart}}):t._e(),t._v(" "),t.renderChart?a("vuejx-data-aggs",{attrs:{api:t.api,user:t.user,site:t.site,entity:t.site,group_by:"tag._source.shortName",link_sort:[{order:"asc"},"_score"],link_columns:["shortName","title"]},on:{data:t.getDataAggs}}):t._e(),t._v(" "),a("v-card",{staticClass:"mx-auto mx-2",staticStyle:{border:"none",background:"transparent"},attrs:{outlined:""}},[a("v-card-title",{staticClass:"title px-2 mx-1 pt-2"},[t._v(t._s(t.site.toUpperCase())+" tags management")]),t._v(" "),a("v-card-text",{staticClass:"px-0"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-layout",{staticClass:"px-2",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs5:""}},[a("v-text-field",{staticClass:"v__border",attrs:{placeholder:"ShortName",text:"",solo:"",rules:t.codeRules,required:""},model:{value:t.tagObject.shortName,callback:function(e){t.$set(t.tagObject,"shortName",e)},expression:"tagObject['shortName']"}})],1),t._v(" "),a("v-flex",{attrs:{xs5:""}},[a("v-text-field",{staticClass:"v__border",attrs:{placeholder:"Title",text:"",solo:"",rules:t.titleRules,required:""},model:{value:t.tagObject.title,callback:function(e){t.$set(t.tagObject,"title",e)},expression:"tagObject['title']"}})],1),t._v(" "),a("v-flex",{attrs:{xs2:"","text-xs-center":""}},[a("v-btn",{attrs:{text:"",icon:"",color:"primary"},on:{click:t.addTags}},[a("v-icon",[t._v("mdi-playlist-plus")])],1)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("vuejx-data-list",{attrs:{api:t.api,user:t.user,site:t.site,entity:"tag",size:-1,sort:[{order:"asc"},"_score"],columns:["shortName","title"]},on:{data:t.getData},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return[a("v-list",{attrs:{"two-line":"",color:"transparent"}},[a("v-list-item-group",{model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(s,function(e,r){return[a("v-list-item",{key:e.title,staticClass:"px-2",scopedSlots:t._u([{key:"default",fn:function(s){return s.active,s.toggle,[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e._source.title)}}),t._v(" "),a("v-list-item-subtitle",{domProps:{textContent:t._s(e._source.shortName)}})],1),t._v(" "),a("v-list-item-action",[a("v-list-item-action-text"),t._v(" "),a("v-list-item-action-text")],1)]}}],null,!0)}),t._v(" "),r+1<s.length?a("v-divider",{key:r}):t._e()]})],2)],1)]}}])})],1)],1)],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=d.exports},bep3:function(t,e,a){var s=a("ycES");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,a("SZ7m").default)("2a32fa89",s,!0,{})},ycES:function(t,e,a){}}]);