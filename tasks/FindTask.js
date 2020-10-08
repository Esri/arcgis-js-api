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

define(["require","exports","tslib","../core/accessorSupport/decorators","../rest/find","./Task"],(function(r,e,t,o,s,i){"use strict";return function(r){function e(e){var t=r.call(this,e)||this;return t.gdbVersion=null,t.url=null,t}return t.__extends(e,r),e.prototype.execute=function(r,e){return this.gdbVersion&&!r.gdbVersion&&(r.gdbVersion=this.gdbVersion),s.find(this.url,r,e)},t.__decorate([o.property()],e.prototype,"gdbVersion",void 0),t.__decorate([o.property()],e.prototype,"url",void 0),e=t.__decorate([o.subclass("esri.tasks.FindTask")],e)}(i)}));