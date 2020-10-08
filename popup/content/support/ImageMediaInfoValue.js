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

define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],(function(e,r,t,o,n){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.linkURL=null,t.sourceURL=null,t}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o({linkURL:this.linkURL,sourceURL:this.sourceURL})},t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"linkURL",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"sourceURL",void 0),r=o=t.__decorate([n.subclass("esri.popup.content.support.ImageMediaInfoValue")],r)}(o.JSONSupport)}));