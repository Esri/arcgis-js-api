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

define(["require","exports","tslib","../../core/Error","../../core/Logger","../../intl/date","../../intl/number","./FieldsIndex","./fieldUtils","./labelUtils","../../support/arcadeOnDemand","@dojo/framework/shim/Promise"],(function(e,r,t,n,a,i,u,l,o,s,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.formatField=r.createLabelFunction=void 0;var d=a.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:function(){return null}},p={getAttribute:function(e,r){return e.field(r)}};function v(e,r){if(null==e)return"";var t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type)for(var n=e,a=0,l=t.codedValues;a<l.length;a++){var s=l[a];if(s.code===n)return s.name}else if("range"===t.type){var c=+e,d="range"in t?t.range[0]:t.minValue,f="range"in t?t.range[1]:t.maxValue;if(d<=c&&c<=f)return t.name}var p=e;return"date"===r.type||"esriFieldTypeDate"===r.type?p=i.formatDate(p,i.convertDateFormatToIntlOptions("short-date")):o.isNumericField(r)&&(p=u.formatNumber(+p)),p||""}r.createLabelFunction=function(r,a,i){return t.__awaiter(this,void 0,void 0,(function(){var u,m,b,g,y,F,h,x;return t.__generator(this,(function(t){switch(t.label){case 0:return r&&r.symbol?(u=r.where,m=s.getLabelExpression(r),u?[4,new Promise((function(r,t){e(["../../core/sql/WhereClause"],r,t)}))]:[3,2]):[2,f];case 1:return g=t.sent(),[3,3];case 2:g=null,t.label=3;case 3:return b=g,"arcade"!==m.type?[3,5]:[4,c.createLabelExpression(m.expression,i,a)];case 4:return F=t.sent(),y={type:"arcade",evaluate:function(e){try{var r=F.evaluate({$feature:"attributes"in e?F.repurposeFeature(e):F.repurposeAdapter(e)});if(null!=r)return r.toString()}catch(r){d.error(new n("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:e,expression:m}))}return null},needsHydrationToEvaluate:function(){return null==s.getSingleFieldArcadeExpression(m.expression)}},[3,6];case 5:y={type:"simple",evaluate:function(e){return m.expression.replace(/{[^}]*}/g,(function(r){var t=r.slice(1,-1),n=o.getField(a,t);if(!n)return r;var i=null;"attributes"in e?e&&e.attributes&&(i=e.attributes[n.name]):i=e.field(n.name);return null==i?"":v(i,n)}))}},t.label=6;case 6:if(u){try{h=b.WhereClause.create(u,new l(a))}catch(e){return[2,f]}x=y.evaluate,y.evaluate=function(e){var r="attributes"in e?void 0:p;return h.testFeature(e,r)?x(e):null}}return[2,y]}}))}))},r.formatField=v}));