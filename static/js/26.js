(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"1ZGa":function(e,t,a){"use strict";a.r(t);var r=a("Kbks"),s=a("WTW0"),l=(a("bvwr"),a("8SHQ"));function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o={name:"vuejx-manager",props:{user:{type:Object,default:""},entity:{type:String,default:""},site:{type:String,default:"guest"},static_source:{type:Object,default:""}},data:function(){return{api:l.a.vuejx,constant:r.a}},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){i(e,t,a[t])})}return e}({},Object(s.b)("vuejx_manager",["lastCall"])),methods:{lastCallData:function(){this.lastCall=!0}}},c=a("KHd+"),d=Object(c.a)(o,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("vuejx-table",{attrs:{user:this.user,entity:this.entity,site:this.site,config:this.constant,api:this.api},on:{lastCall:this.lastCallData}})],1)},[],!1,null,null,null);t.default=d.exports},Kbks:function(e,t,a){"use strict";a.d(t,"a",function(){return r});var r={_resource:{title:"Entities management",type:"_resource",columns:["shortName","title","description","order","status"],config_columns:[{field:"_source.shortName",field_query:"shortName",field_sort:"shortName.keyword",headerText:"Sort Name",textAlign:"left",width:220,minWidth:220},{field:"_source.title",field_query:"title",field_sort:"title.keyword",headerText:"Title",textAlign:"left",width:320,minWidth:320},{field:"_source.description",field_query:"description",field_sort:"description.keyword",headerText:"Description",textAlign:"left"},{field:"_source.order",field_query:"order",field_sort:"order",headerText:"Order",textAlign:"right",width:120,minWidth:120},{field:"_source.status._source.title",field_query:"status._source.title",field_sort:"status._source.title.keyword",headerText:"Status",textAlign:"center",width:120,minWidth:120}],sort:[{order:"asc"},"_score"],add:"add",update:"update",delete:"delete",config:{type:0,form:[{model:"createdAt",dataType:"number",type:"view",format:"MM/dd/yyyy",class:"xs6 sm3",label:"Created date:"},{model:"modifiedAt",dataType:"number",type:"view",format:"MM/dd/yyyy",class:"xs6 sm3",label:"Modified date:"},{model:"shortName",dataType:"string",type:"text",class:"xs12 sm6",label:"Sort Name:"},{model:"title",dataType:"string",type:"text",class:"xs12",label:"Title:"},{model:"description",dataType:"string",type:"textarea",class:"xs12",label:"Description:"},{model:"config",dataType:"string",type:"codemirror",class:"xs12",label:"Config:"},{model:"order",dataType:"number",type:"number",class:"xs6",label:"Order:"},{model:"status",dataType:"object",type:"autocomplete",object:!0,class:"xs6",label:"Status:",itemText:"_source.title",itemValue:"_source.shortName",data:[{_source:{shortName:"activate",title:"Activate"}},{_source:{shortName:"deactivate",title:"Deactivate"}}]},{model:"role",dataType:"object",type:"autocomplete",object:!0,multiple:!0,class:"xs12",label:"Roles:",itemText:"_source.title",itemValue:"_source.shortName",link:"role",column:["shortName","title"],sort:[{order:"asc"},"_score"]},{model:"databaseType",dataType:"object",type:"autocomplete",object:!0,multiple:!0,class:"xs12 sm6",label:"DatabaseType:",itemText:"_source.title",itemValue:"_source.shortName",link:"dict_item",link_item:"database",link_columns:["shortName","title"],link_sort:[{order:"asc"},"_score"]},{model:"syncSite",dataType:"boolean",type:"autocomplete",class:"xs12 sm6",label:"Public data:",itemText:"_source.title",itemValue:"_source.shortName",data:[{_source:{shortName:!0,title:"Public"}},{_source:{shortName:!1,title:"Private"}}]}]}}}}}]);