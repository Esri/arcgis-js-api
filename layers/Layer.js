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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","dojo/Deferred","../core/Accessor","../core/Error","../core/Evented","../core/Identifiable","../core/Loadable","../core/urlUtils","../core/requireUtils","../core/promiseUtils","../core/Logger","../config","../kernel","../request","../geometry/SpatialReference","../geometry/Extent"],function(e,r,t,a,n,i,l,o,s,u,d,c,f,p,h,y){var v=0,g=d.getLogger("esri.layers.Layer"),b=t.createSubclass([n,i,l],{declaredClass:"esri.layers.Layer",properties:{attributionDataUrl:null,credential:{value:null,readOnly:!0,dependsOn:["loaded","parsedUrl"],get:function(){var e=this.loaded&&this.parsedUrl&&f.id&&f.id.findCredential(this.parsedUrl.path)||null;return e&&e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),e}},fullExtent:new y(-180,-90,180,90,h.WGS84),hasAttributionData:{readOnly:!0,dependsOn:["attributionDataUrl"],get:function(){return null!=this.attributionDataUrl}},id:{get:function(){return Date.now().toString(16)+"-layer-"+v++}},legendEnabled:!0,listMode:"show",opacity:{value:1,type:Number,cast:function(e){return 0>e?0:e>1?1:e}},parsedUrl:{readOnly:!0,dependsOn:["url"],get:function(){var e=this._get("url");return e?o.urlToObject(e):null}},popupEnabled:!0,refreshInterval:0,attributionVisible:!0,spatialReference:h.WGS84,title:null,token:{dependsOn:["credential.token"],get:function(){var e=this.get("parsedUrl.query.token"),r=this.get("credential.token");return e||r||null},set:function(e){e?this._override("token",e):this._clearOverride("token")}},type:{type:String,readOnly:!0,value:null,json:{readable:!1}},url:{value:null},visible:!0},initialize:function(){this.otherwise(function(e){d.getLogger(this.declaredClass).error("#load()","Failed to load layer (title: '"+this.title+"', id: '"+this.id+"')",e)})},createLayerView:function(r){var t=this.viewModulePaths[r.type];return t?s.when(e,t).then(function(e){return e["default"]&&(e=e["default"]),new e({layer:this,view:r})}.bind(this)):u.reject(new a("layerview:module-unavailable","No LayerView module available for layer '${layer.declaredClass}' and view type: '${view.type}'",{view:r,layer:this}))},destroyLayerView:function(e){e.destroy()},fetchAttributionData:function(){var e,t=this.attributionDataUrl;if(this.hasAttributionData&&t)e=p(t,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data});else{var n=new r;n.reject(new a("layer:no-attribution-data","Layer does not have attribution data")),e=n.promise}return e},refresh:function(){this.emit("refresh")}});return b.fromArcGISServerUrl=function(r){"string"==typeof r&&(r={url:r});var t=s.when(e,"./support/arcgisLayers").then(function(e){return e.fromUrl(r)});return t.otherwise(function(e){g.error("#fromArcGISServerUrl({ url: '"+r.url+"'})","Failed to create layer from arcgis server url",e)}),t},b.fromPortalItem=function(r){!r||r.portalItem||"object"!=typeof r||r.declaredClass&&"esri.portal.PortalItem"!==r.declaredClass||(r={portalItem:r});var t=s.when(e,"../portal/support/portalLayers").then(function(e){return e.fromItem(r)});return t.otherwise(function(e){var t=r&&r.portalItem,a=t&&t.id||"unset",n=t&&t.portal&&t.portal.url||c.portalUrl;g.error("#fromPortalItem()","Failed to create layer from portal item (portal: '"+n+"', id: '"+a+"')",e)}),t},b});