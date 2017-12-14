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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","./Symbol3DMaterial","../../core/accessorSupport/decorators"],function(e,o,r,t,l,i){Object.defineProperty(o,"__esModule",{value:!0});var c=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return r(o,e),l=o,o.prototype.clone=function(){return new l({color:this.color?this.color.clone():null,colorMixMode:this.colorMixMode})},t([i.property({type:String,json:{read:!0,write:!0}})],o.prototype,"colorMixMode",void 0),o=l=t([i.subclass("esri.symbols.support.Symbol3DFillMaterial")],o);var l}(i.declared(l["default"]));o.Symbol3DFillMaterial=c,o["default"]=c});