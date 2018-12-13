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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","../core/Accessor","../core/Error","../core/Evented","../core/Identifiable","../core/Loadable","../core/urlUtils","../core/promiseUtils","../core/Logger","../config","../kernel","../request","../geometry/SpatialReference","../geometry/Extent"],function(e,r,t,n,a,i,l,o,u,s,d,c,f,p){var y=a.Identifiable,h=0,v=u.getLogger("esri.layers.Layer"),m=r.createSubclass([n,y,i],{declaredClass:"esri.layers.Layer",properties:{attributionDataUrl:null,credential:{value:null,readOnly:!0,dependsOn:["loaded","parsedUrl"],get:function(){return this.loaded&&this.parsedUrl&&d.id&&d.id.findCredential(this.parsedUrl.path)||null}},fullExtent:new p(-180,-90,180,90,f.WGS84),hasAttributionData:{readOnly:!0,dependsOn:["attributionDataUrl"],get:function(){return null!=this.attributionDataUrl}},id:{get:function(){return Date.now().toString(16)+"-layer-"+h++}},legendEnabled:!0,listMode:{type:["show","hide","hide-children"],value:"show"},opacity:{value:1,type:Number,nonNullable:!0,cast:function(e){return e<0?0:e>1?1:e}},parent:null,parsedUrl:{readOnly:!0,dependsOn:["url"],get:function(){var e=this._get("url");return e?l.urlToObject(e):null}},popupEnabled:!0,attributionVisible:!0,spatialReference:f.WGS84,title:null,token:{dependsOn:["credential.token"],get:function(){var e=this.get("parsedUrl.query.token"),r=this.get("credential.token");return e||r||null},set:function(e){e?this._override("token",e):this._clearOverride("token")}},type:{type:String,readOnly:!0,value:null,json:{read:!1}},url:{value:null},visible:{value:!0,nonNullable:!0,type:Boolean}},initialize:function(){this.when().catch(function(e){u.getLogger(this.declaredClass).error("#load()","Failed to load layer (title: '"+this.title+"', id: '"+this.id+"')",e)}.bind(this))},createLayerView:function(e){return e?this.importLayerViewModule(e).then(function(r){return r.default&&(r=r.default),new r({layer:this,view:e})}.bind(this)):o.reject(new t("layerview:module-unavailable","No LayerView module available for layer '${layer.declaredClass}' and view type: '${view.type}'",{view:e,layer:this}))},destroyLayerView:function(e){e.destroy()},fetchAttributionData:function(){var e=this.attributionDataUrl;return this.hasAttributionData&&e?c(e,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data}):o.reject(new t("layer:no-attribution-data","Layer does not have attribution data"))},refresh:function(){this.emit("refresh")},importLayerViewModule:function(e){return o.reject(new t("layerview:override-method","Must provide implementation in '${layer.declaredClass}'",{view:e,layer:this}))}});return m.fromArcGISServerUrl=function(r){"string"==typeof r&&(r={url:r});var t=o.create(function(r){e(["./support/arcgisLayers"],r)}).then(function(e){return e.fromUrl(r)});return t.catch(function(e){v.error("#fromArcGISServerUrl({ url: '"+r.url+"'})","Failed to create layer from arcgis server url",e)}),t},m.fromPortalItem=function(r){!r||r.portalItem||"object"!=typeof r||r.declaredClass&&"esri.portal.PortalItem"!==r.declaredClass||(r={portalItem:r});var t=o.create(function(r){e(["../portal/support/portalLayers"],r)}).then(function(e){return e.fromItem(r)});return t.catch(function(e){var t=r&&r.portalItem,n=t&&t.id||"unset",a=t&&t.portal&&t.portal.url||s.portalUrl;v.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+a+"', id: '"+n+"')",e)}),t},m});