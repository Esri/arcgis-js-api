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

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../util/Matcher"],function(e,r,n,a,t){Object.defineProperty(r,"__esModule",{value:!0});var s=a.getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");r.createMatcher=function(e,r,a){switch(e.type){case"simple":case"dot-density":case"dotDensity":return t.default.fromBasicRenderer(e,r,a);case"unique-value":case"uniqueValue":return t.MapMatcher.fromUVRenderer(e,r,a);case"class-breaks":case"classBreaks":return t.IntervalMatcher.fromCBRenderer(e,r,a);default:return s.error(new n("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),null}}});