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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../core/typescript","./core/messageHandler"],function(e,t,r,a,o,u){var i=function(){function e(e){this.dataSourceProxy=null,this._featureIds={}}return e.prototype.dojoConstructor=function(e){this.dataSourceProxy=e,this._featureIds={}},e.prototype._addFeature=function(e){if(!this.dataSourceProxy)return null;if(!e)return null;var t=e;if("object"==typeof e){if(!e.attributes||!e.attributes[this.dataSourceProxy.objectIdFieldName])return null;t=e.attributes[this.dataSourceProxy.objectIdFieldName]}return this._featureIds[t]=t,t},e.prototype.addFeature=function(e){if(this.dataSourceProxy){var t=this._addFeature(e);t&&u._sendMessage({functionName:"featureActionFeaturesAdded",args:{dataSourceId:this.dataSourceProxy.id,objectIds:[t]}})}},e.prototype.addFeatures=function(e){var t=this;if(this.dataSourceProxy&&Array.isArray(e)&&0!==e.length){var r=[];e.forEach(function(e){var a=t._addFeature(e);a&&r.push(a)}),0!==r.length&&u._sendMessage({functionName:"featureActionFeaturesAdded",args:{dataSourceId:this.dataSourceProxy.id,objectIds:r}})}},e.prototype._removeFeature=function(e){if(!this.dataSourceProxy)return null;if(!e)return null;var t=e;if("object"==typeof e){if(!e.attributes||!e.attributes[this.dataSourceProxy.objectIdFieldName])return null;t=e.attributes[this.dataSourceProxy.objectIdFieldName]}return this._featureIds[t]?(delete this._featureIds[t],t):null},e.prototype.removeFeature=function(e){if(this.dataSourceProxy){var t=this._removeFeature(e);t&&u._sendMessage({functionName:"featureActionFeaturesRemoved",args:{dataSourceId:this.dataSourceProxy.id,objectIds:[t]}})}},e.prototype.removeFeatures=function(e){var t=this;if(this.dataSourceProxy&&Array.isArray(e)&&0!==e.length){var r=[];e.forEach(function(e){var a=t._removeFeature(e);a&&r.push(a)}),0!==r.length&&u._sendMessage({functionName:"featureActionFeaturesRemoved",args:{dataSourceId:this.dataSourceProxy.id,objectIds:r}})}},e.prototype.clear=function(){this.dataSourceProxy&&(this._featureIds={},u._sendMessage({functionName:"featureActionFeaturesClear"}))},e.prototype.indexOf=function(e){if(!this.dataSourceProxy)return-1;if(!e)return-1;var t=e;if("object"==typeof e){if(!e.attributes||!e.attributes[this.dataSourceProxy.objectIdFieldName])return-1;t=e.attributes[this.dataSourceProxy.objectIdFieldName]}return this._featureIds[t]||-1},e.prototype.contains=function(e){return-1!==this.indexOf(e)},e=a([o.subclass()],e)}();return i});