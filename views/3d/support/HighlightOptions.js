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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/accessorSupport/typescript","../../../core/Accessor","../../../Color"],function(t,o,r,l,p,e,c){var i=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.color=null,o.haloOpacity=null,o.fillOpacity=null,o}return r(o,t),o.prototype.getDefaults=function(){return{color:new c([0,255,255]),haloOpacity:1,fillOpacity:.25}},o.toEngineOptions=function(t){return{color:new Float32Array(c.toUnitRGBA(t.color)),haloOpacity:t.haloOpacity,haloOpacityOccluded:.25*t.haloOpacity,fillOpacity:t.fillOpacity,fillOpacityOccluded:.25*t.fillOpacity}},o}(e);return l([p.property({type:c})],i.prototype,"color",void 0),l([p.property()],i.prototype,"haloOpacity",void 0),l([p.property()],i.prototype,"fillOpacity",void 0),i=l([p.subclass()],i)});