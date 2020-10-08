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

define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],(function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FeatureIndex=void 0;var i=function(e){function t(t){return e.call(this,t)||this}var o;return r.__extends(t,e),o=t,t.prototype.clone=function(){var e=this,t=e.name,r=e.fields,n=e.isAscending,i=e.isUnique,s=e.description;return new o({name:t,fields:r,isAscending:n,isUnique:i,description:s})},r.__decorate([n.property({constructOnly:!0})],t.prototype,"name",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"fields",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"isAscending",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"isUnique",void 0),r.__decorate([n.property({constructOnly:!0})],t.prototype,"description",void 0),t=o=r.__decorate([n.subclass("esri.layers.support.FeatureIndex")],t)}(o.JSONSupport);t.FeatureIndex=i,t.default=i}));