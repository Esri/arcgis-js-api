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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/maybe","../../core/accessorSupport/decorators","./Symbol3DMaterial"],function(e,o,r,l,t,i,c){Object.defineProperty(o,"__esModule",{value:!0});var a=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}r(o,e),c=o,o.prototype.clone=function(){return new c({color:t.isSome(this.color)?this.color.clone():null,colorMixMode:this.colorMixMode})};var c;return l([i.enumeration.serializable()({multiply:"multiply",replace:"replace",tint:"tint"})],o.prototype,"colorMixMode",void 0),o=c=l([i.subclass("esri.symbols.support.Symbol3DFillMaterial")],o)}(i.declared(c.default));o.Symbol3DFillMaterial=a,o.default=a});