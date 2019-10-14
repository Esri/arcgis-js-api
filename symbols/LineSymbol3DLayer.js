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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/maybe","../core/screenUtils","../core/accessorSupport/decorators","./Symbol3DLayer","./support/colors","./support/materialUtils","./support/Symbol3DMaterial"],function(e,t,r,o,i,p,n,a,l,s,c){return function(e){function t(t){var r=e.call(this)||this;return r.material=null,r.type="line",r.join="miter",r.cap="butt",r.size=p.px2pt(1),r}r(t,e),a=t,t.prototype.clone=function(){return new a({enabled:this.enabled,material:i.isSome(this.material)?this.material.clone():null,size:this.size,join:this.join,cap:this.cap})},t.fromSimpleLineSymbol=function(e){return new a({size:e.width||1,cap:e.cap||"butt",join:e.join||"miter",material:{color:(e.color||l.white).clone()}})};var a;return o([n.property({type:c.default,json:{write:!0}})],t.prototype,"material",void 0),o([n.enumeration.serializable()({Line:"line"})],t.prototype,"type",void 0),o([n.property({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],t.prototype,"join",void 0),o([n.property({type:["butt","square","round"],json:{write:!0,default:"butt"}})],t.prototype,"cap",void 0),o([n.property(s.screenSizeProperty)],t.prototype,"size",void 0),t=a=o([n.subclass("esri.symbols.LineSymbol3DLayer")],t)}(n.declared(a))});