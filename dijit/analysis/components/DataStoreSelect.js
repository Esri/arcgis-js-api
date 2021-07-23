// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["../../../kernel","../../../lang","../../../request","dijit/_WidgetBase","dojox/lang/functional/object","dojo/_base/declare","dojo/_base/lang","dojo/dom-construct","dojo/has","dojo/promise/all","dojo/Evented","dojo/i18n!../nls/DataStoreSelect"],(function(e,t,i,a,n,s,l,o,r,h,c,d){var u=s([a,c],{declaredClass:"esri.dijit.analysis.components.DataStoreSelect",geoAnalyticsServer:null,i18n:null,postMixInProperties:function(){this.inherited(arguments),this.i18n={},l.mixin(this.i18n,d)},buildRendering:function(){this.createElements()},postCreate:function(){this.inherited(arguments),this.buildDataStoreUI()},createElements:function(){this.domNode=o.create("div",{style:"width:100%;height:100%"}),this._dsSelect=o.create("select",{class:"dijit dijitReset dijitInline dijitLeft dijitDownArrowButton esriLeadingMargin1 longInput esriLongLabel dijitSelect dijitValidationTextBox",onchange:l.hitch(this,this._handleDSSelectChange)},this.domNode)},_handleDSSelectChange:function(e){this.emit("change",{value:this._dsSelect.value})},buildDataStoreUI:function(){if(this.geoAnalyticsServer&&!this.bdfsTemplateOptions){var e=this.geoAnalyticsServer.replace("/System/GeoAnalyticsTools/GPServer","");i({url:e+"/DataStoreCatalogs",content:{f:"json"}}).then(l.hitch(this,(function(t){var a=t.services.map((function(e){return e.name})),s=a.map((function(t){return i({url:e+"/"+t+"/BigDataCatalogServer",content:{f:"json"}})}));h(s).then(l.hitch(this,(function(e){var t=e.filter((function(e,t){return e.name=a[t],void 0!==e.outputTemplates})),i=[];t.forEach((function(e){e.outputTemplates.forEach((function(t){i.push({label:e.name.replace("DataStoreCatalogs/bigDataFileShares_","")+"-"+t.title,innerHTML:e.name.replace("DataStoreCatalogs/bigDataFileShares_","")+"-"+t.title,value:e.name.replace("DataStoreCatalogs/bigDataFileShares_","/bigDataFileShares/")+":"+t.name})}))})),this.bdfsTemplateOptions=i;var s=o.create("optGroup",{label:this.i18n.agsDataStore}),r=o.create("optGroup",{label:this.i18n.bdfsTemplates});s.appendChild(o.create("option",{label:this.i18n.relationalDS,value:"GDB",innerHTML:this.i18n.relationalDS})),s.appendChild(o.create("option",{label:this.i18n.spatialDS,value:"BDS",innerHTML:this.i18n.spatialDS})),i.forEach(l.hitch(this,(function(e){r.appendChild(o.create("option",e))}))),this._dsSelect.appendChild(s),this._dsSelect.appendChild(r),n.keys(this._dsSelect.options).some((function(e){return e.label===this.value}),this),this._setCurValue()})))})),l.hitch(this,(function(){this._dsSelect.add(o.create("option",{label:this.i18n.relationalDS,value:"GDB",innerHTML:this.i18n.relationalDS})),this._dsSelect.add(o.create("option",{label:this.i18n.spatialDS,value:"BDS",innerHTML:this.i18n.spatialDS})),this._setCurValue()})))}},_setCurValue:function(){var e=n.keys(this._dsSelect.options).some((function(e){return e.label===this.value}),this);this._dsSelect.value=e?this.value:"BDS"},reset:function(){this._dsSelect.reset()},_setGeoAnalyticsServerAttr:function(e){this.geoAnalyticsServer=e},_setValueAttr:function(e){this.value=e||"BDS"},_getValueAttr:function(){return this._dsSelect?this._dsSelect.value:null}});return r("extend-esri")&&l.setObject("dijit.analysis.components.DataStoreSelect",u,e),u}));