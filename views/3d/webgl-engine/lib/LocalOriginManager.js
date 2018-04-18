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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./gl-matrix","./localOriginHelper"],function(i,t,e,r){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function i(i){this.factory=i,this.originData=new Map}return i.prototype.aquire=function(i){return this.register(this.factory.getOrigin(i))},i.prototype.register=function(i){var t=this.originData.get(i.id);return t?(t.refCount++,t.origin):(this.originData.set(i.id,{refCount:1,viewMatrix:e.mat4d.identity(),origin:i}),i)},i.prototype.release=function(i){var t=this.originData.get(i.id);t&&0===--t.refCount&&this.originData.delete(i.id)},i.prototype.updateViewMatrices=function(i){this.originData.forEach(function(t){e.mat4d.set(i,t.viewMatrix),r.applyToViewMatrix(t.origin.vec3,t.viewMatrix)})},i.prototype.getViewMatrix=function(i){return this.originData.get(i.id).viewMatrix},i}();t.LocalOriginManager=n});