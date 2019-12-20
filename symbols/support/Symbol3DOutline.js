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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/JSONSupport","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators","./materialUtils"],function(e,t,r,o,p,l,s,i,n,c){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.color=new p([0,0,0,1]),t.size=i.px2pt(1),t.stipplePattern=null,t.stippleOffColor=null,t}r(t,e),l=t,t.prototype.clone=function(){return new l({color:s.isSome(this.color)?this.color.clone():null,size:this.size,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})};var l;return o([n.property(c.colorAndTransparencyProperty)],t.prototype,"color",void 0),o([n.property(c.screenSizeProperty)],t.prototype,"size",void 0),o([n.property(c.stipplePatternProperty)],t.prototype,"stipplePattern",void 0),o([n.property({type:p})],t.prototype,"stippleOffColor",void 0),t=l=o([n.subclass("esri.symbols.support.Symbol3DOutline")],t)}(n.declared(l.JSONSupport));t.Symbol3DOutline=u,t.default=u});