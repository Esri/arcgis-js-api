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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Color","../core/maybe","../core/screenUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/colors","./support/materialUtils","./support/Symbol3DMaterial"],function(e,t,r,o,p,i,l,n,s,a,u,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.material=null,r.type="line",r.join="miter",r.cap="butt",r.size=l.px2pt(1),r.stipplePattern=null,r.stippleOffColor=null,r}r(t,e),s=t,t.prototype.clone=function(){return new s({enabled:this.enabled,material:i.isSome(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})},t.fromSimpleLineSymbol=function(e){return new s({size:e.width||1,cap:e.cap||"butt",join:e.join||"miter",material:{color:(e.color||a.white).clone()}})};var s;return o([n.property({type:c.default,json:{write:!0}})],t.prototype,"material",void 0),o([n.enumeration.serializable()({Line:"line"})],t.prototype,"type",void 0),o([n.property({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],t.prototype,"join",void 0),o([n.property({type:["butt","square","round"],json:{write:!0,default:"butt"}})],t.prototype,"cap",void 0),o([n.property(u.screenSizeProperty)],t.prototype,"size",void 0),o([n.property(u.stipplePatternProperty)],t.prototype,"stipplePattern",void 0),o([n.property({type:p})],t.prototype,"stippleOffColor",void 0),t=s=o([n.subclass("esri.symbols.LineSymbol3DLayer")],t)}(n.declared(s))});