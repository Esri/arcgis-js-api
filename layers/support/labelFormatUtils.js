// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/Error","../../core/Logger","../../core/promiseUtils","../../intl/date","../../intl/number","./FieldsIndex","./fieldUtils","../../support/arcadeOnDemand"],function(e,r,t,n,a,u,i,l,o,s,c,p,d,f){function v(){return u(this,void 0,void 0,function(){return a(this,function(r){return[2,o.create(function(r){e(["../../core/sql/WhereClause"],r)})]})})}function m(e,r,t){return u(this,void 0,void 0,function(){var n,u,l,o,s,c,d,m;return a(this,function(a){switch(a.label){case 0:return e&&e.symbol?(n=e.where,u=e.getLabelExpression(),n?[4,v()]:[3,2]):[2,b];case 1:return o=a.sent(),[3,3];case 2:o=null,a.label=3;case 3:return l=o,"arcade"!==u.type?[3,5]:[4,f.createLabelExpression(u.expression,t,r)];case 4:return c=a.sent(),s={type:"arcade",evaluate:function(e){try{var r=c.evaluate({$feature:c.repurposeFeature(e)});if(null!=r)return r.toString()}catch(r){return y.error(new i("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:e,expression:u})),null}return null}},[3,6];case 5:s={type:"simple",evaluate:function(e){var t=e&&e.attributes;return t?u.expression.replace(/{[^}]*}/g,function(e){return g(e.slice(1,-1),e,t,r)}):null}},a.label=6;case 6:if(n){try{d=l.WhereClause.create(n,new p(r))}catch(e){return[2,b]}m=s.evaluate,s.evaluate=function(e){return d.testFeature(e)?m(e):null}}return[2,s]}})})}function g(e,r,t,n){var a=d.getField(n,e);if(!a)return r;if(null==t[a.name])return"";var u=a.domain;if(u)if("codedValue"===u.type||"coded-value"===u.type)for(var i=t[a.name],l=0,o=u.codedValues;l<o.length;l++){var p=o[l];if(p.code===i)return p.name}else if("range"===u.type){var f=+t[a.name],v="range"in u?u.range[0]:u.minValue,m="range"in u?u.range[1]:u.maxValue;if(v<=f&&f<=m)return u.name}var g=t[a.name];return"date"===a.type||"esriFieldTypeDate"===a.type?g=s.formatDate(g,s.convertDateFormatToIntlOptions("short-date")):d.isNumericField(a)&&(g=c.formatNumber(+g)),g||""}Object.defineProperty(r,"__esModule",{value:!0});var y=l.getLogger("esri.layers.support.labelFormatUtils"),b={type:"simple",evaluate:function(e){return null}};r.createLabelFunction=m,r.formatField=g});