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

define(["dojo/_base/lang","../../../core/declare","../../../core/Accessoire","../../../core/AccessoirePromise","../../../core/urlUtils","../../../request","../../../tasks/QueryTask"],function(e,r,t,s,n,i,a){var u=r([t,s],{classMetadata:{properties:{parsedUrl:{dependsOn:["url","layerId"]},queryTask:{dependsOn:["parsedUrl","gdbVersion"]}}},getDefaults:function(r){var t=this.inherited(arguments),s=r.layer;return s&&(t=e.mixin(t,{url:s.url,layerId:s.layerId,gdbVersion:s.gdbVersion})),t},initialize:function(){this.addResolvingPromise(this._fetchService())},_parsedUrlGetter:function(){var e=this.url?n.urlToObject(this.url):null;return null!=this.layerId&&null!=e&&(e.path=n.join(e.path,this.layerId.toString())),e},_queryTaskGetter:function(){return new a({url:this.parsedUrl.path,gdbVersion:this.gdbVersion})},queryFeatures:function(e){return this.queryTask.execute(e)},queryObjectIds:function(e){return this.queryTask.executeForIds(e)},queryFeatureCount:function(e){return this.queryTask.executeForCount(e)},queryExtent:function(e){return this.queryTask.executeForExtent(e)},_fixSymbolUrls:function(e){if(e){var r=this.parsedUrl.path+"/images/",t=[e.symbol,e.defaultSymbol],s=e.classBreakInfos||e.uniqueValueInfos;s&&s.forEach(function(e){t.push(e.symbol)}),t.forEach(function(e){var t=e&&e.url;t&&-1===t.search(/https?\:/i)&&(e.url=r+t)})}},_updateUrl:function(e){e&&(this.url=this.url.replace(/^http:/i,"https:"))},_fetchService:function(){return null==this.layerId?i(this.url,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(e){this._updateUrl(e.ssl);var r=e.data;return r&&r.layers&&r.layers[0]&&(this.layerId=r.layers[0].id),this._fetchServiceLayer()}.bind(this)):this._fetchServiceLayer()},_fetchServiceLayer:function(){return i(this.parsedUrl.path,{query:e.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"}).then(function(e){this._updateUrl(e.ssl);var r=e.data;this._fixSymbolUrls(r.drawingInfo&&r.drawingInfo.renderer),this.layerDefinition=r}.bind(this))}});return u});