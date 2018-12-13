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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/Accessor","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/gl-matrix"],function(o,r,t,e,c,l,p,i){return function(o){function r(){var r=null!==o&&o.apply(this,arguments)||this;return r.color=new c([0,255,255]),r.haloOpacity=1,r.fillOpacity=.25,r}return t(r,o),r.toEngineOptions=function(o){var r=c.toUnitRGBA(o.color);return{color:i.vec4f32.fromValues(r[0],r[1],r[2],r[3]),haloOpacity:o.haloOpacity,haloOpacityOccluded:.25*o.haloOpacity,fillOpacity:o.fillOpacity,fillOpacityOccluded:.25*o.fillOpacity}},e([p.property({type:c})],r.prototype,"color",void 0),e([p.property()],r.prototype,"haloOpacity",void 0),e([p.property()],r.prototype,"fillOpacity",void 0),r=e([p.subclass()],r)}(p.declared(l))});