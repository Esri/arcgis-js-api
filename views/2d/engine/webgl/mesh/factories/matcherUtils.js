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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/generatorHelper","../../../../../../core/tsSupport/awaiterHelper","../../../../../../core/Error","../../../../../../core/Logger","../../util/Matcher"],function(e,r,a,i,o,t,c){Object.defineProperty(r,"__esModule",{value:!0});var u=t.getLogger("esri/views/2d/engine/webgl/mesh/factories/matcherUtils");r.createMatcher=function(r,t,n){return i(this,void 0,void 0,function(){return a(this,function(e){switch(r.type){case"simple":case"dot-density":return[2,c.FeatureMatcher.fromBasicRenderer(r,t,n)];case"unique-value":return[2,c.MapMatcher.fromUVRenderer(r,t,n)];case"class-breaks":return[2,c.IntervalMatcher.fromCBRenderer(r,t,n)];case"dictionary":return[2,c.DictionaryMatcher.fromDictionaryRenderer(r,t,n)];default:return u.error(new o("mapview-mesh:invalid-renderer","Unable to handle unknown renderer type")),[2,null]}return[2]})})}});