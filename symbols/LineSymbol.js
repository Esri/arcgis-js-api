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

define(["require","exports","tslib","../core/screenUtils","../core/accessorSupport/decorators","./Symbol"],(function(e,t,r,o,i,s){"use strict";return function(e){function t(t){var r=e.call(this,t)||this;return r.type="simple-line",r.width=.75,r}return r.__extends(t,e),t.prototype.hash=function(){return this.type+"."+this.width},r.__decorate([i.enumeration({esriSLS:"simple-line"},{readOnly:!0})],t.prototype,"type",void 0),r.__decorate([i.property({type:Number,cast:o.toPt,json:{write:!0}})],t.prototype,"width",void 0),t=r.__decorate([i.subclass("esri.symbols.LineSymbol")],t)}(s)}));