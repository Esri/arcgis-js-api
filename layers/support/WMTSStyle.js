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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,r,t,o,s){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.id=null,t.title=null,t.description=null,t.legendUrl=null,t}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){var e=new o;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e},t.__decorate([s.property({json:{read:{source:"id"}}})],r.prototype,"id",void 0),t.__decorate([s.property({json:{read:{source:"title"}}})],r.prototype,"title",void 0),t.__decorate([s.property({json:{read:{source:"abstract"}}})],r.prototype,"description",void 0),t.__decorate([s.property({json:{read:{source:"legendUrl"}}})],r.prototype,"legendUrl",void 0),t.__decorate([s.property({json:{read:{source:"isDefault"}}})],r.prototype,"isDefault",void 0),t.__decorate([s.property({json:{read:{source:"keywords"}}})],r.prototype,"keywords",void 0),r=o=t.__decorate([s.subclass("esri.layer.support.WMTSStyle")],r)}(o.JSONSupport)}));