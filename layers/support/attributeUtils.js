// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/has","dojox/encoding/digests/_base","dojox/encoding/digests/MD5","../../kernel","../../renderers/arcadeUtils"],function(e,t,n,r,i,o){function s(e){return"number"==typeof e&&!isNaN(e)&&e!==1/0&&e!==-(1/0)}var a={viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,getAttributeId:function(e){return"string"==typeof e?r(e,n.outputTypes.Hex):null},getAttributeIdSource:function(t){if(!t)return null;var n=t.field,r=t.valueExpression,i=null;if(r)i=r;else if(e.isFunction(n))i=n.toString();else if(n){var o=t.normalizationField,a=o?"field":t.normalizationType,u=parseFloat(t.normalizationTotal);a&&(a=a.toLowerCase(),i=n.toLowerCase()+",norm:"+a,o?i+=","+o.toLowerCase():"percent-of-total"===a&&(s(u)&&0!==u||(u=null),i+=","+u))}return i},createAttributeCache:function(t,n){if(!t)return null;var r=t.valueExpression,i=o.createSyntaxTree(r),s=a.getAttributeIdSource(t);return{attributeInfo:t,isNumeric:!n,idSource:s,id:a.getAttributeId(s),hasExpr:!!r,compiledFunc:o.createFunction(i),syntaxTree:i,isScaleDriven:!!t.expression||a.viewScaleRE.test(r),dependsOnView:i?o.dependsOnView(i):!1,isJSFunc:e.isFunction(t.field)}}};return t("extend-esri")&&e.setObject("layers.support.attributeUtils",a,i),a});