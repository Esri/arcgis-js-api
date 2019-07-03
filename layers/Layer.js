// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","../core/Accessor","../core/Error","../core/Evented","../core/Identifiable","../core/Loadable","../core/urlUtils","../core/promiseUtils","../core/Logger","../config","../request","../geometry/SpatialReference","../geometry/Extent"],function(e,r,t,a,n,i,l,o,u,s,c,d,f){var y=n.Identifiable,p=0,h=u.getLogger("esri.layers.Layer"),m=r.createSubclass([a,y,i],{declaredClass:"esri.layers.Layer",properties:{attributionDataUrl:null,fullExtent:new f(-180,-90,180,90,d.WGS84),hasAttributionData:{readOnly:!0,dependsOn:["attributionDataUrl"],get:function(){return null!=this.attributionDataUrl}},id:{get:function(){return Date.now().toString(16)+"-layer-"+p++}},legendEnabled:!0,listMode:{type:["show","hide","hide-children"],value:"show"},opacity:{value:1,type:Number,range:{min:0,max:1},nonNullable:!0},parent:null,parsedUrl:{readOnly:!0,dependsOn:["url"],get:function(){var e=this._get("url");return e?l.urlToObject(e):null}},popupEnabled:!0,attributionVisible:!0,spatialReference:d.WGS84,title:null,type:{type:String,readOnly:!0,value:null,json:{read:!1}},url:{value:null},visible:{value:!0,nonNullable:!0,type:Boolean}},initialize:function(){this.when().catch(function(e){u.getLogger(this.declaredClass).error("#load()","Failed to load layer (title: '"+this.title+"', id: '"+this.id+"')",e)}.bind(this))},createLayerView:function(e,r){return e?this.importLayerViewModule(e).then(function(t){return o.throwIfAborted(r),t.default&&(t=t.default),new t({layer:this,view:e})}.bind(this)):o.reject(new t("layerview:module-unavailable","No LayerView module available for layer '${layer.declaredClass}' and view type: '${view.type}'",{view:e,layer:this}))},destroyLayerView:function(e){e.destroy()},fetchAttributionData:function(){var e=this.attributionDataUrl;return this.hasAttributionData&&e?c(e,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data}):o.reject(new t("layer:no-attribution-data","Layer does not have attribution data"))},refresh:function(){this.emit("refresh")},importLayerViewModule:function(e){return o.reject(new t("layerview:override-method","Must provide implementation in '${layer.declaredClass}'",{view:e,layer:this}))}});return m.fromArcGISServerUrl=function(r){"string"==typeof r&&(r={url:r});var t=o.create(function(r){e(["./support/arcgisLayers"],r)}).then(function(e){return e.fromUrl(r)});return t.catch(function(e){h.error("#fromArcGISServerUrl({ url: '"+r.url+"'})","Failed to create layer from arcgis server url",e)}),t},m.fromPortalItem=function(r){!r||r.portalItem||"object"!=typeof r||r.declaredClass&&"esri.portal.PortalItem"!==r.declaredClass||(r={portalItem:r});var t=o.create(function(r){e(["../portal/support/portalLayers"],r)}).then(function(e){return e.fromItem(r)});return t.catch(function(e){var t=r&&r.portalItem,a=t&&t.id||"unset",n=t&&t.portal&&t.portal.url||s.portalUrl;h.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+a+"')",e)}),t},m});