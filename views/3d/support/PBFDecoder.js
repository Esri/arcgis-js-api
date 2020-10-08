// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../Graphic","../../../core/promiseUtils","../../../geometry/SpatialReference","../../../layers/support/Field","./WorkerHandle"],(function(e,r,t,n,o,i,s,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.PBFDecoder=void 0;var f=function(){function e(e){this._handle=new l(e)}return e.prototype.destroy=function(){this._handle.destroy()},e.prototype.invoke=function(e,r){return void 0===r&&(r=null),e.buffer&&0!==e.buffer.byteLength?(e.options.sourceSpatialReference&&e.options.sourceSpatialReference instanceof i&&(e.options=t.__assign(t.__assign({},e.options),{sourceSpatialReference:e.options.sourceSpatialReference.toJSON()})),this._handle.invoke(e,r).then((function(e){if(e.spatialReference=i.fromJSON(e.spatialReference),e.fields)for(var r=0;r<e.fields.length;r++)e.fields[r]=s.fromJSON(e.fields[r]);for(var t=e.spatialReference,o=0,a=e.features;o<a.length;o++){var f=a[o];f.uid=n.generateUID(),f.geometry&&(f.geometry.spatialReference=t)}return e}))):o.resolve(null)},e}();r.PBFDecoder=f;var l=function(e){function r(r){return e.call(this,"PBFDecoderWorker","_parseFeatureQuery",r,{strategy:"dedicated"})||this}return t.__extends(r,e),r.prototype.getTransferList=function(e){return[e.buffer]},r}(a.WorkerHandle)}));