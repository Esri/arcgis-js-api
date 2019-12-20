// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","./WGLBrush","../util/iterator"],function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.draw=function(e,t){var r=this;if(t.canDisplay){var i=this.getGeometryType(),o=t.getDisplayList(e.drawPhase),u=t.getGeometry(i);u&&n.forEachIter(o.ofType(i),function(i){return r.drawGeometry(e,t,i,u)})}},t}(i.default);t.default=o});