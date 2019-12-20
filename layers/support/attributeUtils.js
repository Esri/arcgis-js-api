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

define(["dojo/_base/lang","dojo/has","dojox/encoding/digests/_base","dojox/encoding/digests/MD5","../../kernel","../../support/expressionUtils"],function(e,t,n,i,r,o){function s(e){return"number"==typeof e&&!isNaN(e)&&e!==1/0&&e!==-1/0}var u={viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,getAttributeId:function(e){return"string"==typeof e?i(e,n.outputTypes.Hex):null},getAttributeIdSource:function(t){if(!t)return null;var n=t.field,i=t.valueExpression,r=null;if(i)r=i;else if(e.isFunction(n))r=n.toString();else if(n){var o=t.normalizationField,u=o?"field":t.normalizationType,a=parseFloat(t.normalizationTotal);u&&(u=u.toLowerCase(),r=n.toLowerCase()+",norm:"+u,o?r+=","+o.toLowerCase():"percent-of-total"===u&&(s(a)&&0!==a||(a=null),r+=","+a))}return r},createAttributeCache:function(t,n){if(!t)return null;var i=t.valueExpression,r=o.createSyntaxTree(i),s=u.getAttributeIdSource(t);return{attributeInfo:t,isNumeric:!n,idSource:s,id:u.getAttributeId(s),hasExpr:!!i,compiledFunc:o.createFunction(r),syntaxTree:r,isScaleDriven:!!t.expression||u.viewScaleRE.test(i),dependsOnView:!!r&&o.dependsOnView(r),dependsOnGeometry:!!r&&o.hasGeometryOperations(r),isJSFunc:e.isFunction(t.field)}}};return t("extend-esri")&&e.setObject("layers.support.attributeUtils",u,r),u});