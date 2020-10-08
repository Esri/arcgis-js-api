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

define(["require","exports","tslib","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","../webdoc/applicationProperties/Viewing"],(function(e,t,i,o,r,n,p){"use strict";return function(e){function t(t){var i=e.call(this,t)||this;return i.editing=null,i.offline=null,i.viewing=null,i}var o;return i.__extends(t,e),o=t,t.prototype.clone=function(){return new o(r.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))},i.__decorate([n.property({json:{write:!0}})],t.prototype,"editing",void 0),i.__decorate([n.property({json:{write:!0}})],t.prototype,"offline",void 0),i.__decorate([n.property({type:p,json:{write:!0}})],t.prototype,"viewing",void 0),t=o=i.__decorate([n.subclass("esri.webmap.ApplicationProperties")],t)}(o.JSONSupport)}));