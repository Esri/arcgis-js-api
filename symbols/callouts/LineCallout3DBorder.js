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

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../support/materialUtils"],(function(o,r,e,t,l,n,c,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.LineCallout3DBorder=void 0;var u=function(o){function r(){var r=null!==o&&o.apply(this,arguments)||this;return r.color=new t("white"),r}var l;return e.__extends(r,o),l=r,r.prototype.clone=function(){return new l({color:n.clone(this.color)})},e.__decorate([c.property(s.colorAndTransparencyProperty)],r.prototype,"color",void 0),r=l=e.__decorate([c.subclass("esri.symbols.callouts.LineCallout3DBorder")],r)}(l.JSONSupport);r.LineCallout3DBorder=u,r.default=u}));