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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","dojo/_base/lang","dojo/Deferred","../core/sniff","../core/Collection","../geometry/SpatialReference","./FeatureLayer"],function(e,t,r,i,n,o,s){var a=s.createSubclass({declaredClass:"esri.layers.StreamLayer",constructor:function(){"WebSocket"in window||(this.loadError=new Error("WebSocket is not supported in this browser"),console.log("WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))},normalizeCtorArgs:function(e,r){return"string"==typeof e?t.mixin({},{url:e},r):e&&e.layerDefinition?t.mixin({},{collectionLayer:e},r):e},getDefaults:function(){return t.mixin(this.inherited(arguments)||{},{purgeOptions:{displayCount:2e3},outFields:["*"]})},properties:{definitionExpression:{value:null,set:function(e){this.source?this._set("requestedDefinitionExpression",e):this._set("source",e)}},geometryDefinition:{value:null,set:function(e){return e&&"extent"!==e.type?void this.emit("error",new TypeError("Invalid geometry. It must have an extent")):void(this.get("source")?this._set("requestedGeometryDefinition",e):this._set("geometryDefinition",e))}},maxReconnectAttempts:10,maximumTrackPoints:1,objectIdField:{json:{readFrom:["fields"],read:function(e,t){if(!e){var r=t.fields;r.some(function(t){return"esriFieldTypeOID"===t.type&&(e=t.name),!!e})}var i=1,n="objectid",o=[];if(!e){if(r.forEach(function(e){e.name.split("_")[0]===n&&o.push(e.name)}),o.length)for(;-1!==o.indexOf(n+"_"+i);)i+=1;e=n+"_"+i}return e}}},portalLoaderModule:{get:function(){return"portal/loaders/StreamLayerLoader"}},purgeOptions:{value:null,set:function(e){var t=this._get("purgeOptions"),r={},i=!1;if(e&&"object"==typeof e&&t!==e)return e.hasOwnProperty("displayCount")&&e.displayCount>0&&(r.displayCount=e.displayCount,i=!0),e.hasOwnProperty("age")&&e.age>=0&&(r.age=e.age,i=!0),i?this._set("purgeOptions",r):void 0}},requestedDefinitionExpression:null,requestedGeometryDefinition:null,socketDirection:"subscribe",spatialReference:{value:null,type:o,json:{readFrom:["spatialReference"],read:function(e){return e&&o.fromJSON(e)}}}},createGraphicsSource:function(){var i=new r;return e(["./graphics/sources/StreamLayerSource"],t.hitch(this,function(e){var r=new e({layer:this});r.then(t.hitch(this,function(){this.emit("graphics-source-create",{graphicsSource:r}),i.resolve(r)}),function(e){i.reject(e)})})),i.promise},createGraphicsController:function(i){var o=new r,s="./graphics/controllers/StreamController",a=i.layerView,l=a.view.map,c=l.view===a.view?this.graphics:new n,u=t.mixin(i.options||{},{layer:this,layerView:a,graphics:c});return s?e([s],t.hitch(this,function(e){var r=new e(u);r.then(t.hitch(this,function(){this.emit("graphics-controller-create",{graphicsController:r}),o.resolve(r)}),function(e){o.reject(e)})})):o.reject(new Error('Module path not found for controller type: "'+this.mode+'"')),o.promise},_initLayerProperties:function(e){this.source=e;var t=e.layerDefinition;this.read(t),this.source.relatedFeaturesInfo&&(this.objectIdField=this.source.relatedFeaturesInfo.joinField),t._ssl&&(this.url=this.url.replace(this.reHttp,"https:")),this._verifyFields(),this._fixSymbolUrls(),this.useQueryTimestamp=i("ie")||i("safari")},_verifyFields:function(){var e=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("StreamLayer: 'objectIdField' property is not defined (url: "+e+")")}});return a});