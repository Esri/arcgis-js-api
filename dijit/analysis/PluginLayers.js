// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/dom-construct","dojo/Deferred","dojo/promise/all","dojo/dom","dojo/dom-attr","dojo/dom-class","dojo/dom-style","dojo/query","dojo/store/Memory","dojo/store/Observable","dojo/Evented","dojo/has","./ItemTypes","../../request","../../kernel","../../lang","dgrid/OnDemandGrid","dgrid/Selection","dojo/i18n!../../nls/jsapi"],function(e,t,i,n,r,s,a,o,l,d,c,h,p,y,m,u,f,g,b,v,T,_){var L=e([y],{infoPanelTemplate:'<div><div class="template-info-showing"><div><img width=\'16px\' height=\'16px\' alt=\'\' src=\'${item.iconUrl}\'></div><h4>${item.title}</h4><div class="template-info"><p class="">${item.snippet}</p>${item:plugIn._showLayers}<div id="${item.id}_details" class="quiet-scroll layer-container"></div></div><div class="panel-actions">${item:plugIn._addLayerToMap}<button class="btn blue btn-main disabled" id="add-layer">${i18n.common.addLayerBtnLabel}</button><button class="btn btn-cancel" id="close-panel">${i18n.common.close}</button></div><div>',geometryTypes:["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],layerTypes:["Feature Layer","featureClass","table","Table"],checkGeometryType:!0,checkLayerType:!1,checkTimeFilter:!1,constructor:function(e){t.mixin(this,e),this.filters={all:{},mycontent:{owners:[this.self.user.username]}},this.i18n=t.mixin({},_.browseLayersDlg),t.mixin(this.i18n,_.browseItems),t.mixin(this.i18n,_.common),this.filterStrings={all:{title:this.self&&this.self.isPortal?this.i18n.items.portalOrg:this.i18n.items.organizationLabel},mycontent:{title:this.i18n.items.contentLabel}}},fetchData:function(){return this._portal=this.parent._portal,this._user=this._portal.getPortalUser(),this.filters.mycontent.owner=this._user,this._fetchItems()},_fetchItems:function(){return this.parent._fetchItems({types:['type:"'+u.MS+'"','type:"'+u.FS+'"']})},_fetchServiceInfo:function(e){var i,n=new r,s={f:"json"};return e.url?(-1!==window.location.protocol.indexOf("https:")&&(e.url=e.url.replace("http:","https:")),f({url:e.url,content:s}).then(function(e){n.resolve(e)},t.hitch(this,function(t){i=t.details&&t.details.length?t.details.shift():"",t&&403===t.httpCode&&i.indexOf("SSL Required")>-1?(e.set("url",e.url.replace("http:","https:")),this._fetchServiceInfo(e).then(function(e){n.resolve(e)})):(e.isLoaded=!0,n.resolve({error:t}))}))):n.resolve(null),n},_addLayerToMap:function(e){return e.type===u.BIGDATA||e.type===u.CSV||e.type===u.XLS?"":'<div class="esriFloatLeading esriLeadingPadding1 padding-trailer-half js-add-layer-node"><label><input name="addlayertomap" class="js-add-layer-checkbox" type="checkbox"><span class="esriLeadingPadding1">'+this.i18n.common.addLayer+"</span></label></div>"},_showLayers:function(e){return e&&-1!==i.indexOf([u.FS,u.MS,u.IS,u.BIGDATA,u.CSV,u.XLS],e.type)&&((e.type===u.CSV||e.type===u.XLS)&&(e.url=e.itemUrl),this.plugIn._fetchServiceInfo(e).then(t.hitch(this,function(r){var s=[],o={f:"json"};r.layers&&(s=[].concat(s).concat(r.layers)),r.tables&&r.tables.length>0&&(s=[].concat(s).concat(r.tables)),r.children&&(s=r.children),e&&e.type===u.CSV&&(s=[e]),this.plugIn._createLayerGrid(n.create("div",null,a.byId(e.id+"_details"))),i.forEach(s,function(i,n){e.type===u.BIGDATA?i.url=e.url+"/"+i.name:e.type===u.CSV?i.url=e.itemUrl:i.url=e.url+"/"+n,-1!==window.location.protocol.indexOf("https:")&&(i.url=i.url.replace("http:","https:")),f({url:i.url,content:o}).then(t.hitch(this,function(e){i=t.mixin(i,e),this.plugIn._store.put(i),this.plugIn._grid.refresh()}))},this)}))),""},_getLayerHead:function(){return"<tr><th></th><th>Layer Name</th><th> Geometry Type</th></tr>"},_getLayerNode:function(e,t,i){var n=e.name,r=e.itemUrl||e.url,s='<tr><td><input type="checkbox" class="js-layer-check" name="layers" value="'+n+' checked"></td><td>',a="</td><td>"+e.geometryType+"</td></tr>";return r?s+'<a class="'+(i||"")+'">'+n+"</a>"+a:s+n+a},_createLayerGrid:function(n){var r=e([v,T]);this._store=p(new h({idProperty:"name"})),this._grid=new r({store:this._store,query:t.hitch(this,function(e){var t,n=!0,r=!0,s=!0;return this.checkGeometryType&&(s=-1!==i.indexOf(this.geometryTypes,e.geometryType)),this.checkTimeFilter&&(n=b.isDefined(e.timeInfo)&&b.isDefined(e.timeInfo.startTimeField)&&!b.isDefined(e.timeInfo.endTimeField)||b.isDefined(e.time)&&b.isDefined(e.time.timeType)&&"instant"===e.time.timeType),this.checkLayerType&&(r=-1!==i.indexOf(this.layerTypes,e.type)),t=e&&s&&n&&r,c(".js-add-layer-checkbox",this.parent.infoPanel).forEach(function(e){o.set(e,"disabled",!t)},this),t}),selectionMode:"single","class":"esriAnalysisLayersGrid quiet-scroll",noDataMessage:this.i18n.noValidLayerMsg,allowSelect:t.hitch(this,function(e){var t;return this.checkLayerType&&e.data&&(t=-1!==i.indexOf(this.layerTypes,e.data.type)),e&&e.data&&(-1!==i.indexOf(this.geometryTypes,e.data.geometryType)||this.checkLayerType&&t)}),renderRow:t.hitch(this,this._renderer)},n),this._grid.startup(),this._grid.on("dgrid-select,dgrid-deselect",t.hitch(this,function(e){var t,i,n=e.grid.selection,r=[];for(t in n)n[t]&&r.push(this._grid.row(t).data);i={selection:r},c(".panel-actions .btn-main",this.parent.infoPanel).forEach(function(e){l.toggle(e,"disabled",0===r.length)},this),r[0]&&(this._selectedLayer=r[0]),this.emit("layer-change",i)}))},hasTimeInfo:function(e){return e&&e.timeInfo},getDateFields:function(e){var t=e&&e.fields||[];return i.filter(t,function(e){return e&&"esriFieldTypeDate"===e.type})},_renderer:function(e){e.snippet=e.snippet||"";var t=n.create("div"),i=this._getLabel(e.geometryType),r='<div class="panel panel-white panel-bordered panel-compact border-bottom-clear"><h5 class="trailer-0 font-size-0 word-break"><a>'+e.name+'</a></h5><nav class="inline-block"><a class="link-gray font-size--2 esriTrailingPadding1 esriTrailingMargin05"><span class="'+i.icon+'"></span>'+i.name+"</a>"+(e.timeInfo||e.time&&"instant"===e.time.timeType?'<a class="link-gray font-size--2 esriTrailingPadding1" data-action="timeSettings" data-layerid="0"><span class="esri-icon-time-clock"></span>'+this.i18n.timeEnabled+"</a>":'<a class="esriTrailingPadding1"></a>')+"</nav></div>";return n.place(r,t),t},_getLabel:function(e){var t={icon:"",name:""};return"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?(t.name=this.i18n.points,t.icon="esri-icon-map-pin"):"esriGeometryPolygon"===e?(t.name=this.i18n.areas,t.icon="esri-icon-polygon"):"esriGeometryPolyline"===e?(t.name=this.i18n.lines,t.icon="esri-icon-polyline"):(t.name=this.i18n.table,t.icon="esri-icon-table"),t}});return t.mixin(L,{add:function(e,t){if(!e.plugIn){var i=t||{};i.parent=e,i.self=e.self,e.plugIn=new L(i)}},remove:function(e){e.plugIn&&(e.plugIn.destroy(),delete e.plugIn)}}),m("extend-esri")&&t.setObject("dijit.analysis.PluginLayers",L,g),L});