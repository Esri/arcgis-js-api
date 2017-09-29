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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","./materialUtils","../../core/accessorSupport/decorators"],function(r,o,e,t,l,p,c){Object.defineProperty(o,"__esModule",{value:!0});var n=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return e(o,r),l=o,o.prototype.clone=function(){return new l({color:this.color?this.color.clone():null,colorMixMode:this.colorMixMode})},t([c.property(p.colorAndTransparencyProperty)],o.prototype,"color",void 0),t([c.property({type:String,json:{read:!0,write:!0}})],o.prototype,"colorMixMode",void 0),o=l=t([c.subclass("esri.symbols.support.Symbol3DMaterial")],o);var l}(c.declared(l));o.Symbol3DMaterial=n,o["default"]=n});