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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../Color","../../core/lang","../../core/screenUtils","../../core/accessorSupport/decorators","./Callout3D","./LineCallout3DBorder","../support/materialUtils"],function(e,r,o,t,p,l,n,i,s,c,u){return function(e){function r(r){var o=e.call(this)||this;return o.type="line",o.color=new p([0,0,0,1]),o.size=n.px2pt(1),o.border=null,o}o(r,e),s=r,Object.defineProperty(r.prototype,"visible",{get:function(){return this.size>0&&this.color.a>0},enumerable:!0,configurable:!0}),r.prototype.clone=function(){return new s({color:l.clone(this.color),size:this.size,border:l.clone(this.border)})};var s;return t([i.property({type:["line"]})],r.prototype,"type",void 0),t([i.property(u.colorAndTransparencyProperty)],r.prototype,"color",void 0),t([i.property(u.screenSizeProperty)],r.prototype,"size",void 0),t([i.property({type:c.default,json:{write:!0}})],r.prototype,"border",void 0),t([i.property({dependsOn:["size","color"],readOnly:!0})],r.prototype,"visible",null),r=s=t([i.subclass("esri.symbols.callouts.LineCallout3D")],r)}(i.declared(s))});