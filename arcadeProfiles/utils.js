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

define(["dojo/_base/lang","dojo/_base/array","dojo/has","../kernel","../support/expressionUtils"],function(e,r,t,n,a){function s(e){return o.test(e)}var o=/(\/(MapServer|FeatureServer)).*/gi,i={hasGeometryOperations:function(e){return r.some(e,function(e){return e.hasGeometryOperations?e.hasGeometryOperations():a.hasGeometryOperations(e)})},hasFeatureSetOperations:function(e){return r.some(e,function(e){return e.hasFeatureSetOperations?e.hasFeatureSetOperations():a.hasFeatureSetOperations(e)})},hasVariables:function(e,t){return r.some(e,function(e){return r.some(t,function(r){return e.hasVariable?e.hasVariable(r):a.hasVariable(e,r)})})},isAsync:function(e){return r.some(e,function(e){return e.async})},getServiceUrl:function(e){return s(e)?e.replace(o,"$1"):null}};return t("extend-esri")&&e.setObject("arcadeProfiles.utils",i,n),i});