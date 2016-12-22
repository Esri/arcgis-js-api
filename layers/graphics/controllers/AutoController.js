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

define(["require","../../../core/declare","dojo/Deferred","../../../request","../../../core/Accessoire","../../../core/AccessoirePromise"],function(e,t,r,n,o,i){var a=t([o,i],{initialize:function(){var e=this,t=this.layer.then(function(){return e._getFeatureCount().then(function(t){var r=e._canUseSnapshot(t&&t.count)?0:1;return e._createController(r)})}).then(function(t){e.activeController=t});this.addResolvingPromise(t)},controllerModulePaths:{0:"./SnapshotController",1:"./OnDemandController"},_getFeatureCount:function(){var e=this.layer,t=e.timeDefinition,r=n(e.source.parsedUrl.path+"/query",{query:{f:"json",where:e.definitionExpression||"1=1",timeExtent:t&&t.toJSON(),returnCountOnly:!0},callbackParamName:"callback"}).then(function(e){return e.data});return r},_canUseSnapshot:function(e){var t=this.layer,r=t.geometryType;return("polyline"===r||"polygon"===r||"multipoint"===r)&&e<=t.maxRecordCountForAuto||"point"===r&&e<=t.maxPointCountForAuto},_createController:function(t){var n=new r,o=this.controllerModulePaths[t];return o?e([o],function(e){var t=new e({layer:this.layer,layerView:this.layerView});t.then(function(){n.resolve(t)},function(e){n.reject(e)})}.bind(this)):n.reject(new Error('Module path not found for controller type: "'+this.mode+'"')),n.promise}});return a});