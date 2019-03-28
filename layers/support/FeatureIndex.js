// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,r,t,o,n,p){Object.defineProperty(r,"__esModule",{value:!0});var i=function(e){function r(r){return e.call(this,r)||this}t(r,e),n=r,r.prototype.clone=function(){var e=this,r=e.name,t=e.fields,o=e.isAscending,p=e.isUnique,i=e.description;return new n({name:r,fields:t,isAscending:o,isUnique:p,description:i})};var n;return o([p.property({constructOnly:!0})],r.prototype,"name",void 0),o([p.property({constructOnly:!0})],r.prototype,"fields",void 0),o([p.property({constructOnly:!0})],r.prototype,"isAscending",void 0),o([p.property({constructOnly:!0})],r.prototype,"isUnique",void 0),o([p.property({constructOnly:!0})],r.prototype,"description",void 0),r=n=o([p.subclass("esri.layers.support.FeatureIndex")],r)}(p.declared(n));r.FeatureIndex=i,r.default=i});