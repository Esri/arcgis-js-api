// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../core/string"],(function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.getSingleFieldArcadeExpression=n.getSingleFieldTemplatedString=n.convertTemplatedStringToArcade=n.getLabelExpressionSingleField=n.getLabelExpressionArcade=n.getLabelExpression=n.templateStringToSql=n.sqlToTemplateString=void 0;var t=new RegExp("__begin__","ig"),s=new RegExp("__end__","ig"),i=new RegExp("^__begin__","i"),l=new RegExp("__end__$","i");function a(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}function o(e){var n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=a(e.labelExpression),n.type="conventional"),n}function p(e){var n;return e?(n=r.replace(e,(function(e){return'__begin__$feature["'+e+'"]__end__'})),n=i.test(n)?n.replace(i,""):'"'+n,n=(n=l.test(n)?n.replace(l,""):n+'"').replace(t,'" + ').replace(s,' + "')):n='""',n}n.sqlToTemplateString=a,n.templateStringToSql=function(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")},n.getLabelExpression=o,n.getLabelExpressionArcade=function(e){var n=o(e);if(!n)return null;switch(n.type){case"conventional":return p(n.expression);case"arcade":return n.expression}return null},n.getLabelExpressionSingleField=function(e){var n=o(e);if(!n)return null;switch(n.type){case"conventional":return u(n.expression);case"arcade":return d(n.expression)}return null},n.convertTemplatedStringToArcade=p;var c=/^\s*\{([^}]+)\}\s*$/i;function u(e){var n=e.match(c);return n&&n[1].trim()||null}n.getSingleFieldTemplatedString=u;var g=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,x=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,f=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function d(e){if(!e)return null;var n=g.exec(e)||x.exec(e);return n?n[1]||n[3]:(n=f.exec(e))?n[2]:null}n.getSingleFieldArcadeExpression=d}));