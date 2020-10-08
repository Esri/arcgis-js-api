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

define(["require","exports","../../../../../../core/maybe","../../../../../../geometry/support/jsonUtils","../../../../../../symbols/cim/effects/CIMEffectHelper","../../enums"],(function(e,t,r,o,f,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return Object.defineProperty(e.prototype,"needsPixelBuffer",{get:function(){return!!this.effects||this.geometryType===i.WGLGeometryType.MARKER||this.geometryType===i.WGLGeometryType.TEXT||this.geometryType===i.WGLGeometryType.LABEL},enumerable:!1,configurable:!0}),e.prototype.writeMesh=function(e,t,i,n,s){if(r.isNone(this.effects))return this.writeMeshWithGeometry(e,t,i,n,s);for(var y=f.CIMEffectHelper.executeEffects(this.effects,i.readLegacyGeometry()),c=f.CIMEffectHelper.next(y);c;)this.writeMeshWithGeometry(e,t,i,o.getJsonType(c),s,c),c=f.CIMEffectHelper.next(y)},e.prototype.writeMeshWithGeometry=function(e,t,r,o,f,i){},e.prototype.bindFeature=function(e,t,r){},e}();t.default=n}));