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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../util/Matcher"],function(e,r,t,a,s){Object.defineProperty(r,"__esModule",{value:!0});var c=a.getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");r.createMatcher=function(e,r,a,n){switch(e.type){case"simple":return s.default.fromSimpleRenderer(e,r,a);case"unique-value":case"uniqueValue":return s.MapMatcher.fromUVRenderer(e,r,a,n);case"class-breaks":case"classBreaks":return s.IntervalMatcher.fromCBRenderer(e,r,a,n);default:return c.error(new t("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),null}}});