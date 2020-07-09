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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/maybe","../../../../../../geometry/support/jsonUtils","../../../../../../symbols/cim/effects/CIMEffectHelper"],(function(e,t,r,o,f){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.prototype.writeMesh=function(e,t,i,s,n){if(r.isSome(this.effects)){var c=f.CIMEffectHelper.executeEffects(this.effects,n.geometry),p=f.CIMEffectHelper.next(c);for(i=o.getJsonType(p);p;)this.writeMeshWithGeometry(e,t,i,s,n,p),p=f.CIMEffectHelper.next(c),i=o.getJsonType(p)}else this.writeMeshWithGeometry(e,t,i,s,n,n.geometry)},e.prototype.writeMeshWithGeometry=function(e,t,r,o,f,i){},e.prototype.bindFeature=function(e,t,r){},e}();t.default=i}));