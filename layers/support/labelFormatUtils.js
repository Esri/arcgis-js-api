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

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","../../core/promiseUtils","../../intl/date","../../intl/number","./FieldsIndex","./fieldUtils","../../support/arcadeOnDemand"],function(e,r,t,n,a,u,i,l,o,s,c,p){function d(){return u(this,void 0,void 0,function(){return a(this,function(r){return[2,i.create(function(r){e(["../../core/sql/WhereClause"],r)})]})})}function f(e,r,t){return u(this,void 0,void 0,function(){var n,u,i,l,o,c,f,y;return a(this,function(a){switch(a.label){case 0:return e&&e.symbol?(n=e.where,u=e.getLabelExpression(),n?[4,d()]:[3,2]):[2,m];case 1:return l=a.sent(),[3,3];case 2:l=null,a.label=3;case 3:return i=l,"arcade"!==u.type?[3,5]:[4,p.createLabelExpression(u.expression,t,r)];case 4:return c=a.sent(),o={type:"arcade",evaluate:function(e){var r=c.evaluate({$feature:c.repurposeFeature(e)});return null!=r?r.toString():null}},[3,6];case 5:o={type:"simple",evaluate:function(e){var t=e&&e.attributes;return t?u.expression.replace(/{[^}]*}/g,function(e){return v(e.slice(1,-1),e,t,r)}):null}},a.label=6;case 6:if(n){try{f=i.WhereClause.create(n,new s(r))}catch(e){return[2,m]}y=o.evaluate,o.evaluate=function(e){return f.testFeature(e)?y(e):null}}return[2,o]}})})}function v(e,r,t,n){var a=c.getField(n,e);if(!a)return r;if(null==t[a.name])return"";var u=a.domain;if(u)if("codedValue"===u.type||"coded-value"===u.type)for(var i=t[a.name],s=0,p=u.codedValues;s<p.length;s++){var d=p[s];if(d.code===i)return d.name}else if("range"===u.type){var f=+t[a.name],v="range"in u?u.range[0]:u.minValue,m="range"in u?u.range[1]:u.maxValue;if(v<=f&&f<=m)return u.name}var y=t[a.name];return"date"===a.type||"esriFieldTypeDate"===a.type?y=l.formatDate(y,l.convertDateFormatToIntlOptions("short-date")):c.isNumericField(a)&&(y=o.formatNumber(+y)),y||""}Object.defineProperty(r,"__esModule",{value:!0});var m={type:"simple",evaluate:function(e){return null}};r.createLabelFunction=f,r.formatField=v});