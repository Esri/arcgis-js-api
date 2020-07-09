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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators","./materialUtils"],(function(e,t,o,r,p,l,i,s,n){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.color=new r([0,0,0,1]),t.size=i.px2pt(1),t.stipplePattern=null,t.stippleOffColor=null,t}var p;return o.__extends(t,e),p=t,t.prototype.clone=function(){return new p({color:l.isSome(this.color)?this.color.clone():null,size:this.size,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})},o.__decorate([s.property(n.colorAndTransparencyProperty)],t.prototype,"color",void 0),o.__decorate([s.property(n.screenSizeProperty)],t.prototype,"size",void 0),o.__decorate([s.property(n.stipplePatternProperty)],t.prototype,"stipplePattern",void 0),o.__decorate([s.property({type:r})],t.prototype,"stippleOffColor",void 0),t=p=o.__decorate([s.subclass("esri.symbols.support.Symbol3DOutline")],t)}(p.JSONSupport);t.Symbol3DOutline=c,t.default=c}));