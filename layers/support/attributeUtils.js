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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","dojox/encoding/digests/_base","dojox/encoding/digests/MD5","../../kernel","../../support/expressionUtils"],(function(e,t,n,i,r,o){var s={viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,getAttributeId:function(e){return"string"==typeof e?i(e,n.outputTypes.Hex):null},getAttributeIdSource:function(t){if(!t)return null;var n,i=t.field,r=t.valueExpression,o=null;if(r)o=r;else if(e.isFunction(i))o=i.toString();else if(i){var s=t.normalizationField,a=s?"field":t.normalizationType,u=parseFloat(t.normalizationTotal);a&&(a=a.toLowerCase(),o=i.toLowerCase()+",norm:"+a,s?o+=","+s.toLowerCase():"percent-of-total"===a&&(("number"!=typeof(n=u)||isNaN(n)||n===1/0||n===-1/0||0===u)&&(u=null),o+=","+u))}return o},createAttributeCache:function(t,n){if(!t)return null;var i=t.valueExpression,r=o.createSyntaxTree(i),a=s.getAttributeIdSource(t);return{attributeInfo:t,isNumeric:!n,idSource:a,id:s.getAttributeId(a),hasExpr:!!i,compiledFunc:o.createFunction(r),syntaxTree:r,isScaleDriven:!!t.expression||s.viewScaleRE.test(i),dependsOnView:!!r&&o.dependsOnView(r),dependsOnGeometry:!!r&&o.hasGeometryOperations(r),isJSFunc:e.isFunction(t.field)}}};return t("extend-esri")&&e.setObject("layers.support.attributeUtils",s,r),s}));