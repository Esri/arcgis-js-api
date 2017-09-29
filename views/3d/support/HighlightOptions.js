// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/decorators","../../../core/Accessor","../../../Color"],function(o,t,r,e,c,p,l){var i=function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.color=new l([0,255,255]),t.haloOpacity=1,t.fillOpacity=.25,t}return r(t,o),t.toEngineOptions=function(o){return{color:new Float32Array(l.toUnitRGBA(o.color)),haloOpacity:o.haloOpacity,haloOpacityOccluded:.25*o.haloOpacity,fillOpacity:o.fillOpacity,fillOpacityOccluded:.25*o.fillOpacity}},e([c.property({type:l})],t.prototype,"color",void 0),e([c.property()],t.prototype,"haloOpacity",void 0),e([c.property()],t.prototype,"fillOpacity",void 0),t=e([c.subclass()],t)}(c.declared(p));return i});