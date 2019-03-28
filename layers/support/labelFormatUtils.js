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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/decorateHelper","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","dojo/number","../../arcade/Feature","../../core/date","../../core/lang","../../core/promiseUtils","./fieldUtils","../../support/arcadeUtils"],function(e,r,t,n,i,a,u,o,c,l,s,p,f){function d(){return a(this,void 0,void 0,function(){return i(this,function(r){return[2,s.create(function(r){e(["../../core/sql/WhereClause"],r)})]})})}function v(){return a(this,void 0,void 0,function(){return i(this,function(r){return[2,s.create(function(r){e(["../../support/arcadeUtils"],r)})]})})}function m(e,r,t){return a(this,void 0,void 0,function(){var n,a,u,o,c,l,p,f,m,F,x;return i(this,function(i){switch(i.label){case 0:return e&&e.symbol?(n=e.where,a=e.getLabelExpression(),[4,s.all([n?d():null,"arcade"===a.type?v():null])]):[2,h];case 1:return u=i.sent(),o=u[0],c=u[1],"arcade"===a.type?(p=g(e,t),f=c.createFunction(a.expression),m={fields:r},F={vars:{$feature:y,$view:p.view},spatialReference:t},l=function(e){y.repurposeFromGraphicLikeObject(e.geometry,e.attributes,m);var r=c.executeFunction(f,F);return null!=r?r.toString():null}):l=function(e){var t=e&&e.attributes;return t?a.expression.replace(/{[^}]*}/g,function(e){return b(e.slice(1,-1),e,t,r)}):null},n?(x=o.create(n),[2,function(e){return x.testFeature(e)?l(e):null}]):[2,l]}})})}function g(e,r){var t={spatialReference:r},n=e.labelExpressionInfo;if(n){var i=n.expression;i&&!n.value&&(t.hasArcadeExpression=!0,t.compiledArcadeFunc=f.createFunction(i))}return t}function F(e,r,t,n){var i="";if(n&&n.hasArcadeExpression){if(n.compiledArcadeFunc){y.repurposeFromGraphicLikeObject(r.geometry,r.attributes,{fields:t});var a={$feature:y,$view:n.view},u={vars:a,spatialReference:n.spatialReference},o=f.executeFunction(n.compiledArcadeFunc,u);return null!=o?o.toString():null}}else{var c=r&&r.attributes||{};i=e.replace(/{[^}]*}/g,function(e){return b(e.slice(1,-1),e,c,t)})}return i}function b(e,r,t,n){var i=p.getField(n,e);if(!i)return r;if(null==t[i.name])return"";var a=i.domain;if(a)if("codedValue"===a.type||"coded-value"===a.type)for(var o=t[i.name],s=0,f=a.codedValues;s<f.length;s++){var d=f[s];if(d.code===o)return d.name}else if("range"===a.type){var v=+t[i.name],m="range"in a?a.range[0]:a.minValue,g="range"in a?a.range[1]:a.maxValue;if(m<=v&&v<=g)return a.name}var F=t[i.name];if("date"===i.type||"esriFieldTypeDate"===i.type){var b=c.fromJSON("shortDate"),y="DateFormat"+c.getFormat(b);y&&(F=l.substitute({myKey:F},"{myKey:"+y+"}"))}else p.isNumericField(i)&&(F=u.format(+F));return F||""}Object.defineProperty(r,"__esModule",{value:!0});var y=new o,h=function(e){return null};r.createLabelFunction=m,r.getLabelingOptions=g,r.buildLabelText=F,r.formatField=b});