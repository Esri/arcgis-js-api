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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["dojo/_base/lang","../../../core/Accessor","../../../core/Promise","../../../core/urlUtils","../../../core/Error","../../../request","../../../tasks/QueryTask"],function(e,t,r,s,a,i,u){var n=t.createSubclass([r],{getDefaults:function(t){var r=this.inherited(arguments),s=t.layer;return s&&(r=e.mixin(r,{url:s.url,layerId:s.layerId,gdbVersion:s.gdbVersion})),r},initialize:function(){this.addResolvingPromise(this._fetchService())},properties:{layer:{},layerId:{},gdbVersion:{dependsOn:["layer.gdbVersion"],get:function(){return this.layer.gdbVersion}},parsedUrl:{dependsOn:["url","layerId"],get:function(){var e=this.url?s.urlToObject(this.url):null;return null!=this.layerId&&null!=e&&(e.path=s.join(e.path,this.layerId.toString())),e}},queryTask:{dependsOn:["parsedUrl","gdbVersion"],get:function(){return new u({url:this.parsedUrl.path,gdbVersion:this.gdbVersion})}},url:{}},applyEdits:function(e){var t=e.addFeatures.map(this._serializeFeature.bind(this)),r=e.updateFeatures.map(this._serializeFeature.bind(this)),s=this._getFeatureIds(e.deleteFeatures),a={f:"json",adds:t.length?JSON.stringify(t):null,updates:r.length?JSON.stringify(r):null,deletes:s.length?s.join(","):null};return i(this.parsedUrl.path+"/applyEdits",{query:a,method:"post",responseType:"json",callbackParamName:"callback"}).then(this._createEditsResult.bind(this))},queryFeatures:function(e){return this.queryTask.execute(e)},queryObjectIds:function(e){return this.queryTask.executeForIds(e)},queryFeatureCount:function(e){return this.queryTask.executeForCount(e)},queryExtent:function(e){return this.queryTask.executeForExtent(e)},_updateUrl:function(e){e&&(this.url=this.url.replace(/^http:/i,"https:"))},_fetchService:function(){return null==this.layerId?i(this.url,{query:{f:"json"},responseType:"json",callbackParamName:"callback"}).then(function(e){this._updateUrl(e.ssl);var t=e.data;return t&&t.layers&&t.layers[0]&&(this.layerId=t.layers[0].id),this._fetchServiceLayer()}.bind(this)):this._fetchServiceLayer()},_fetchServiceLayer:function(){return i(this.parsedUrl.path,{query:e.mixin({f:"json"},this.parsedUrl.query),responseType:"json",callbackParamName:"callback"}).then(function(e){this._updateUrl(e.ssl);var t=e.data;this.layerDefinition=t}.bind(this))},_serializeFeature:function(e){var t=e.geometry,r=e.attributes;return{geometry:t&&t.toJSON(),attributes:r}},_getFeatureIds:function(e){var t=this.layer.objectIdField,r=e[0],s=!(!r||null==r.objectId),a=!(!r||!r.attributes);return e.map(function(e){var r=null;return s?r=e.objectId:a&&(r=e.attributes&&e.attributes[t]),r},this)},_createEditsResult:function(e){var t={},r=e.data;return t.addFeatureResults=r.addResults?r.addResults.map(this._createFeatureEditResult.bind(this)):[],t.updateFeatureResults=r.updateResults?r.updateResults.map(this._createFeatureEditResult.bind(this)):[],t.deleteFeatureResults=r.deleteResults?r.deleteResults.map(this._createFeatureEditResult.bind(this)):[],t},_createFeatureEditResult:function(e){var t=e.success?null:e.error||{};return{objectId:e.objectId,globalId:e.globalId,error:t?new a("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}});return n});