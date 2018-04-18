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

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/Accessor","../../../core/accessorSupport/decorators"],function(o,t,r,e,c,p,l){return function(o){function t(){var t=null!==o&&o.apply(this,arguments)||this;return t.color=new c([0,255,255]),t.haloOpacity=1,t.fillOpacity=.25,t}return r(t,o),t.toEngineOptions=function(o){return{color:new Float32Array(c.toUnitRGBA(o.color)),haloOpacity:o.haloOpacity,haloOpacityOccluded:.25*o.haloOpacity,fillOpacity:o.fillOpacity,fillOpacityOccluded:.25*o.fillOpacity}},e([l.property({type:c})],t.prototype,"color",void 0),e([l.property()],t.prototype,"haloOpacity",void 0),e([l.property()],t.prototype,"fillOpacity",void 0),t=e([l.subclass()],t)}(l.declared(p))});