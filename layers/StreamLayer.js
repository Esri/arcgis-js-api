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

define(["require","dojo/_base/lang","dojo/Deferred","../core/sniff","../core/Collection","../Graphic","../geometry/SpatialReference","./FeatureLayer"],function(e,t,i,r,n,o,s,a){var l=a.createSubclass({declaredClass:"esri.layers.StreamLayer",constructor:function(e,t){"WebSocket"in window||(this.loadError=new Error("WebSocket is not supported in this browser"),console.log("WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))},normalizeCtorArgs:function(e,i){return"string"==typeof e?t.mixin({},{url:e},i):e&&e.layerDefinition?t.mixin({},{collectionLayer:e},i):e},getDefaults:function(e){return t.mixin(this.inherited(arguments)||{},{purgeOptions:{displayCount:2e3},outFields:["*"]})},properties:{definitionExpression:{value:null,set:function(e){this.source?this._set("requestedDefinitionExpression",e):this._set("definitionExpression",e)}},geometryDefinition:{value:null,set:function(e){return e&&"extent"!==e.type?void this.emit("error",new TypeError("Invalid geometry. It must have an extent")):void(this.get("source")?this._set("requestedGeometryDefinition",e):this._set("geometryDefinition",e))}},maxReconnectAttempts:10,maximumTrackPoints:1,objectIdField:{json:{readFrom:["fields"],read:function(e,t){if(!e){var i=t.fields;i.some(function(t){return"esriFieldTypeOID"===t.type&&(e=t.name),!!e})}var r=1,n="objectid",o=[];if(!e){if(i.forEach(function(e){e.name.split("_")[0]===n&&o.push(e.name)}),o.length)for(;-1!==o.indexOf(n+"_"+r);)r+=1;e=n+"_"+r}return e}}},operationalLayerType:"ArcGISStreamLayer",purgeOptions:{value:null,set:function(e){var t=this._get("purgeOptions"),i={},r=!1;if(e&&"object"==typeof e&&t!==e)return e.hasOwnProperty("displayCount")&&e.displayCount>0&&(i.displayCount=e.displayCount,r=!0),e.hasOwnProperty("age")&&e.age>=0&&(i.age=e.age,r=!0),r?this._set("purgeOptions",i):void 0}},requestedDefinitionExpression:null,requestedGeometryDefinition:null,socketDirection:"subscribe",spatialReference:{value:null,type:s,json:{readFrom:["spatialReference"],read:function(e){return e&&s.fromJSON(e)}}},type:{value:"stream",json:{readable:!1}}},createGraphicsSource:function(){var r=new i;return e(["./graphics/sources/StreamLayerSource"],t.hitch(this,function(e){var i=new e({layer:this});i.then(t.hitch(this,function(){this.emit("graphics-source-create",{graphicsSource:i}),r.resolve(i)}),function(e){r.reject(e)})})),r.promise},createGraphicsController:function(r){var s=new i,a="./graphics/controllers/StreamController",l=r.layerView,u=l.view.map,c=n.ofType(o),h=u.view===l.view?this.graphics:new c,p=t.mixin(r.options||{},{layer:this,layerView:l,graphics:h});return a?e([a],t.hitch(this,function(e){var i=new e(p);i.then(t.hitch(this,function(){this.emit("graphics-controller-create",{graphicsController:i}),s.resolve(i)}),function(e){s.reject(e)})})):s.reject(new Error('Module path not found for controller type: "'+this.mode+'"')),s.promise},loadFromPortal:function(e){return e=t.mixin(e,{supportedTypes:["Stream Service"]}),this.inherited(arguments,[e])},_initLayerProperties:function(e){this.source=e;var t=this.source.relatedFeaturesInfo;t&&(this.objectIdField=t.joinField,this.source.relatedFeaturesInfo.outFields=this.outFields?this.outFields.splice(0):null);var i=e.layerDefinition;if(this.read(i,{origin:"service",url:this.parsedUrl}),t&&t.outFields&&"*"!==t.outFields[0]){var n=t.outFields.map(function(e){return e.toLowerCase()}),o=this.requiredFields||[];o.forEach(function(e){-1===n.indexOf(e.toLowerCase())&&t.outFields.push(e)})}i._ssl&&(this.url=this.url.replace(this.reHttp,"https:")),this._verifyFields(),this._fixSymbolUrls(),this.useQueryTimestamp=r("ie")||r("safari")},_verifyFields:function(){var e=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("StreamLayer: 'objectIdField' property is not defined (url: "+e+")")}});return l});