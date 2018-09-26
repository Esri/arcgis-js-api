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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/Error","../../../../../../core/Logger","../../util/Matcher"],function(e,r,a,n,t){function s(e,r,n,s,u){switch(e.type){case"simple":return t.default.fromSimpleRenderer(e,r,n);case"unique-value":case"uniqueValue":return t.MapMatcher.fromUVRenderer(e,r,n,s,u);case"class-breaks":case"classBreaks":return t.IntervalMatcher.fromCBRenderer(e,r,n,s,u);default:return c.error(new a("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),null}}Object.defineProperty(r,"__esModule",{value:!0});var c=n.getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");r.createMatcher=s});