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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","./Layer","../core/promiseUtils","../core/Error","../core/accessorSupport/typescript"],function(e,r,o,t,n,s,i,c){var p=function(e){function r(){e.call(this),this.resourceInfo=null}return o(r,e),r.prototype.initialize=function(){var e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type),r="Unknown layer type";e&&(r+=" "+e),this.addResolvingPromise(s.reject(new i("layer:unknown-layer-type",r)))},r.fromJSON=function(e){return new r({resourceInfo:e})},t([c.shared("esri.layers.UnknownLayer")],r.prototype,"declaredClass",void 0),t([c.property()],r.prototype,"resourceInfo",void 0),r=t([c.subclass()],r)}(n);return p});