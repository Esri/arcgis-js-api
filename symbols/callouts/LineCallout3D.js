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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../Color","../../core/lang","../../core/maybe","../../core/screenUtils","../../core/accessorSupport/decorators","./Callout3D","./LineCallout3DBorder","../support/materialUtils"],(function(e,r,o,t,i,n,l,s,c,p,a){"use strict";return function(e){function r(r){var o=e.call(this,r)||this;return o.type="line",o.color=new t([0,0,0,1]),o.size=l.px2pt(1),o.border=null,o}var c;return o.__extends(r,e),c=r,Object.defineProperty(r.prototype,"visible",{get:function(){return this.size>0&&n.isSome(this.color)&&this.color.a>0},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return new c({color:i.clone(this.color),size:this.size,border:i.clone(this.border)})},o.__decorate([s.enumeration({line:"line"},{readOnly:!0})],r.prototype,"type",void 0),o.__decorate([s.property(a.colorAndTransparencyProperty)],r.prototype,"color",void 0),o.__decorate([s.property(a.screenSizeProperty)],r.prototype,"size",void 0),o.__decorate([s.property({type:p.default,json:{write:!0}})],r.prototype,"border",void 0),o.__decorate([s.property({dependsOn:["size","color"],readOnly:!0})],r.prototype,"visible",null),r=c=o.__decorate([s.subclass("esri.symbols.callouts.LineCallout3D")],r)}(c)}));