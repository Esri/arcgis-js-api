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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./materialUtils"],function(e,r,o,t,p,l,c,s,n){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.color=new p([0,0,0,1]),r.size=0,r}o(r,e),l=r,r.prototype.clone=function(){return new l({color:c.clone(this.color),size:this.size})};var l;return t([s.property(n.colorAndTransparencyProperty)],r.prototype,"color",void 0),t([s.property(n.screenSizeProperty)],r.prototype,"size",void 0),r=l=t([s.subclass("esri.symbols.support.Symbol3DHalo")],r)}(s.declared(l));r.Symbol3DHalo=i,r.default=i});