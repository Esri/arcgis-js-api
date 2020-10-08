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

define(["require","exports","tslib","../../../Color","../../../core/Accessor","../../../core/maybe","../../../core/accessorSupport/decorators","../../../core/libs/gl-matrix-2/vec4f32"],(function(o,t,r,e,l,i,c,p){"use strict";return function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.color=new e([0,255,255]),t.haloColor=null,t.haloOpacity=1,t.fillOpacity=.25,t}return r.__extends(t,o),t.toEngineOptions=function(o){var t=e.toUnitRGBA(o.color),r=i.isSome(o.haloColor)?e.toUnitRGBA(o.haloColor):t;return{color:p.vec4f32.fromValues(t[0],t[1],t[2],t[3]),haloColor:p.vec4f32.fromValues(r[0],r[1],r[2],r[3]),haloOpacity:o.haloOpacity,haloOpacityOccluded:.25*o.haloOpacity,fillOpacity:o.fillOpacity,fillOpacityOccluded:.25*o.fillOpacity}},r.__decorate([c.property({type:e})],t.prototype,"color",void 0),r.__decorate([c.property({type:e})],t.prototype,"haloColor",void 0),r.__decorate([c.property()],t.prototype,"haloOpacity",void 0),r.__decorate([c.property()],t.prototype,"fillOpacity",void 0),t=r.__decorate([c.subclass("esri.views.3d.support.HighlightOptions")],t)}(l)}));