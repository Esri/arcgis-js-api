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

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],(function(e,r,o,t,p,n,s){"use strict";return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.value=null,r.label=null,r.color=null,r}return o.__extends(r,e),o.__decorate([n.property({type:Number,json:{write:!0}})],r.prototype,"value",void 0),o.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o.__decorate([n.property({type:t,json:{type:[s.Integer],write:!0}})],r.prototype,"color",void 0),r=o.__decorate([n.subclass("esri.renderers.support.ColormapInfo")],r)}(p.JSONSupport)}));