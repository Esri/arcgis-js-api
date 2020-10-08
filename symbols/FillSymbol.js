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

define(["require","exports","tslib","../core/accessorSupport/decorators","./SimpleLineSymbol","./Symbol"],(function(e,t,l,i,o,r){"use strict";return function(e){function t(t){var l=e.call(this,t)||this;return l.outline=null,l.type=null,l}return l.__extends(t,e),t.prototype.hash=function(){return this.type+"."+(this.outline&&this.outline.hash())},l.__decorate([i.property({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":o}},json:{default:null,write:!0}})],t.prototype,"outline",void 0),l.__decorate([i.property({type:["simple-fill","picture-fill"],readOnly:!0})],t.prototype,"type",void 0),t=l.__decorate([i.subclass("esri.symbols.FillSymbol")],t)}(r)}));