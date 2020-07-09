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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/Error","../../core/Logger","../../intl/date","../../intl/number","./FieldsIndex","./fieldUtils","./labelUtils","../../support/arcadeOnDemand","@dojo/framework/shim/Promise"],(function(e,r,t,n,a,i,l,u,o,s,c){Object.defineProperty(r,"__esModule",{value:!0});var d=a.getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:function(){return null}};function p(e,r,t,n){var a=o.getField(n,e);if(!a)return r;if(null==t[a.name])return"";var u=a.domain;if(u)if("codedValue"===u.type||"coded-value"===u.type)for(var s=t[a.name],c=0,d=u.codedValues;c<d.length;c++){var f=d[c];if(f.code===s)return f.name}else if("range"===u.type){var p=+t[a.name],m="range"in u?u.range[0]:u.minValue,v="range"in u?u.range[1]:u.maxValue;if(m<=p&&p<=v)return u.name}var g=t[a.name];return"date"===a.type||"esriFieldTypeDate"===a.type?g=i.formatDate(g,i.convertDateFormatToIntlOptions("short-date")):o.isNumericField(a)&&(g=l.formatNumber(+g)),g||""}r.createLabelFunction=function(r,a,i){return t.__awaiter(this,void 0,void 0,(function(){var l,o,m,v,g,b,y,h;return t.__generator(this,(function(t){switch(t.label){case 0:return r&&r.symbol?(l=r.where,o=r.getLabelExpression(),l?[4,new Promise((function(r,t){e(["../../core/sql/WhereClause"],r,t)}))]:[3,2]):[2,f];case 1:return v=t.sent(),[3,3];case 2:v=null,t.label=3;case 3:return m=v,"arcade"!==o.type?[3,5]:[4,c.createLabelExpression(o.expression,i,a)];case 4:return b=t.sent(),g={type:"arcade",evaluate:function(e){try{var r=b.evaluate({$feature:b.repurposeFeature(e)});if(null!=r)return r.toString()}catch(r){d.error(new n("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:e,expression:o}))}return null},needsHydrationToEvaluate:function(){return null==s.getSingleFieldArcadeExpression(o.expression)}},[3,6];case 5:g={type:"simple",evaluate:function(e){var r=e&&e.attributes;return r?o.expression.replace(/{[^}]*}/g,(function(e){return p(e.slice(1,-1),e,r,a)})):null}},t.label=6;case 6:if(l){try{y=m.WhereClause.create(l,new u(a))}catch(e){return[2,f]}h=g.evaluate,g.evaluate=function(e){return y.testFeature(e)?h(e):null}}return[2,g]}}))}))},r.formatField=p}));