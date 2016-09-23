// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","dojo/Deferred","../core/Accessor","../core/Error","../core/Evented","../core/Identifiable","../core/Loadable","../core/urlUtils","../core/requireUtils","../core/promiseUtils","../kernel","../request","../geometry/SpatialReference","../geometry/Extent"],function(e,t,r,n,a,i,l,o,s,u,d,c,p,f){var h=0,y=r.createSubclass([a,i,l],{declaredClass:"esri.layers.Layer",properties:{attributionDataUrl:null,credential:{value:null,readOnly:!0,dependsOn:["loaded","parsedUrl"],get:function(){var e=this.loaded&&this.parsedUrl&&d.id&&d.id.findCredential(this.parsedUrl.path)||null;return e&&e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),e}},fullExtent:new f(-180,-90,180,90,p.WGS84),hasAttributionData:{readOnly:!0,dependsOn:["attributionDataUrl"],get:function(){return null!=this.attributionDataUrl}},id:{get:function(){return Date.now().toString(16)+"-layer-"+h++}},legendEnabled:!0,listMode:"show",opacity:{value:1,type:Number,cast:function(e){return 0>e?0:e>1?1:e}},parsedUrl:{readOnly:!0,dependsOn:["url"],get:function(){var e=this._get("url");return e?o.urlToObject(e):null}},popupEnabled:!0,refreshInterval:0,attributionVisible:!0,spatialReference:p.WGS84,title:null,token:{dependsOn:["credential.token"],get:function(){var e=this.get("parsedUrl.query.token"),t=this.get("credential.token");return e||t||null},set:function(e){e?this._override("token",e):this._clearOverride("token")}},url:{value:null},visible:!0},createLayerView:function(t){var r=this.viewModulePaths[t.type];return r?s.when(e,r).then(function(e){return new e({layer:this,view:t})}.bind(this)):u.reject(new n("layerview:module-unavailable","No LayerView module available for layer '${layer.declaredClass}' and view type: '${view.type}'",{view:t,layer:this}))},destroyLayerView:function(e){e.destroy()},fetchAttributionData:function(){var e,r=this.attributionDataUrl;if(this.hasAttributionData&&r)e=c(r,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data});else{var a=new t;a.reject(new n("Layer does not have attribution data")),e=a.promise}return e},refresh:function(){this.emit("refresh")}});return y.fromArcGISServerUrl=function(t){return"string"==typeof t&&(t={url:t}),s.when(e,"./support/arcgisLayers").then(function(e){return e.fromUrl(t)})},y.fromPortalItem=function(t){return!t||t.portalItem||"object"!=typeof t||t.declaredClass&&"esri.portal.PortalItem"!==t.declaredClass||(t={portalItem:t}),s.when(e,"../portal/support/portalLayers").then(function(e){return e.fromItem(t)})},y});