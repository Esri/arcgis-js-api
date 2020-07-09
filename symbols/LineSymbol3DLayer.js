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

define(["require","exports","tslib","../Color","../core/maybe","../core/screenUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/colors","./support/materialUtils","./support/Symbol3DMaterial"],(function(e,t,r,o,i,p,l,n,s,a,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.material=null,r.type="line",r.join="miter",r.cap="butt",r.size=p.px2pt(1),r.stipplePattern=null,r.stippleOffColor=null,r}var n;return r.__extends(t,e),n=t,t.prototype.clone=function(){return new n({enabled:this.enabled,material:i.isSome(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})},t.fromSimpleLineSymbol=function(e){return new n({size:e.width||1,cap:e.cap||"butt",join:e.join||"miter",material:{color:(e.color||s.white).clone()}})},r.__decorate([l.property({type:c.default,json:{write:!0}})],t.prototype,"material",void 0),r.__decorate([l.enumeration({Line:"line"})],t.prototype,"type",void 0),r.__decorate([l.property({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],t.prototype,"join",void 0),r.__decorate([l.property({type:["butt","square","round"],json:{write:!0,default:"butt"}})],t.prototype,"cap",void 0),r.__decorate([l.property(a.screenSizeProperty)],t.prototype,"size",void 0),r.__decorate([l.property(a.stipplePatternProperty)],t.prototype,"stipplePattern",void 0),r.__decorate([l.property({type:o})],t.prototype,"stippleOffColor",void 0),t=n=r.__decorate([l.subclass("esri.symbols.LineSymbol3DLayer")],t)}(n)}));