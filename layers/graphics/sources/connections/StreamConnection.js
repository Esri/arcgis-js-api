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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/declareExtendsHelper","../../../../core/Evented","../../../../core/HandleOwner","../../../../core/accessorSupport/decorators"],function(e,r,t,o,n,c,s){Object.defineProperty(r,"__esModule",{value:!0});var u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return o(r,e),r.prototype.onFeature=function(e){this.emit("feature",e)},r=t([s.subclass("esri.layers.graphics.sources.connections.StreamConnection")],r)}(s.declared(c,n));r.default=u});