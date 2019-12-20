// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/Accessor","../../../core/maybe","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/vec4f32"],function(o,r,t,e,l,p,c,i,a){return function(o){function r(){var r=null!==o&&o.apply(this,arguments)||this;return r.color=new l([0,255,255]),r.haloColor=null,r.haloOpacity=1,r.fillOpacity=.25,r}return t(r,o),r.toEngineOptions=function(o){var r=l.toUnitRGBA(o.color),t=c.isSome(o.haloColor)?l.toUnitRGBA(o.haloColor):r;return{color:a.vec4f32.fromValues(r[0],r[1],r[2],r[3]),haloColor:a.vec4f32.fromValues(t[0],t[1],t[2],t[3]),haloOpacity:o.haloOpacity,haloOpacityOccluded:.25*o.haloOpacity,fillOpacity:o.fillOpacity,fillOpacityOccluded:.25*o.fillOpacity}},e([i.property({type:l})],r.prototype,"color",void 0),e([i.property({type:l})],r.prototype,"haloColor",void 0),e([i.property()],r.prototype,"haloOpacity",void 0),e([i.property()],r.prototype,"fillOpacity",void 0),r=e([i.subclass("esri.views.3d.support.HighlightOptions")],r)}(i.declared(p))});