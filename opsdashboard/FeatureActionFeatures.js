// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","./core/messageHandler"],function(e,t){return e(null,{dataSourceProxy:null,constructor:function(e){this.dataSourceProxy=e,this._featureIds={}},_addFeature:function(e){if(!this.dataSourceProxy)return null;if(!e)return null;var t=e;if("object"==typeof e){if(!e.attributes||!e.attributes[this.dataSourceProxy.objectIdFieldName])return null;t=e.attributes[this.dataSourceProxy.objectIdFieldName]}return this._featureIds[t]=t,t},addFeature:function(e){if(this.dataSourceProxy){var r=this._addFeature(e);r&&t._sendMessage({functionName:"featureActionFeaturesAdded",args:{dataSourceId:this.dataSourceProxy.id,objectIds:[r]}})}},addFeatures:function(e){if(this.dataSourceProxy&&Array.isArray(e)&&0!==e.length){var r=[];e.forEach(function(e){var t=this._addFeature(e);t&&r.push(t)},this),0!==r.length&&t._sendMessage({functionName:"featureActionFeaturesAdded",args:{dataSourceId:this.dataSourceProxy.id,objectIds:r}})}},_removeFeature:function(e){if(!this.dataSourceProxy)return null;if(!e)return null;var t=e;if("object"==typeof e){if(!e.attributes||!e.attributes[this.dataSourceProxy.objectIdFieldName])return null;t=e.attributes[this.dataSourceProxy.objectIdFieldName]}return this._featureIds[t]?(delete this._featureIds[t],t):null},removeFeature:function(e){if(this.dataSourceProxy){var r=this._removeFeature(e);r&&t._sendMessage({functionName:"featureActionFeaturesRemoved",args:{dataSourceId:this.dataSourceProxy.id,objectIds:[r]}})}},removeFeatures:function(e){if(this.dataSourceProxy&&Array.isArray(e)&&0!==e.length){var r=[];e.forEach(function(e){var t=this._removeFeature(e);t&&r.push(t)},this),0!==r.length&&t._sendMessage({functionName:"featureActionFeaturesRemoved",args:{dataSourceId:this.dataSourceProxy.id,objectIds:r}})}},clear:function(){this.dataSourceProxy&&(this._featureIds={},t._sendMessage({functionName:"featureActionFeaturesClear"}))},indexOf:function(e){if(!this.dataSourceProxy)return-1;if(!e)return-1;var t=e;if("object"==typeof e){if(!e.attributes||!e.attributes[this.dataSourceProxy.objectIdFieldName])return-1;t=e.attributes[this.dataSourceProxy.objectIdFieldName]}return this._featureIds[t]||-1},contains:function(e){return-1!==this.indexOf(e)}})});