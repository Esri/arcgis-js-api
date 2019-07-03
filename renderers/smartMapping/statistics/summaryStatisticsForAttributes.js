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

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/promiseUtils","./support/utils","../support/utils"],function(e,r,t,s,i,n,a,u,o){function p(e){return i(this,void 0,void 0,function(){var r,i,p,l,c,f,v;return s(this,function(s){switch(s.label){case 0:if(!(e&&e.layer&&e.attributes))throw new n("summary-statistics-for-attributes:missing-parameters","'layer' and 'attributes' parameters are required");if((r=e.attributes.some(function(e){return!!e.valueExpression}))&&!e.view)throw new n("summary-statistics-for-attributes:missing-parameters","View is required when 'valueExpression' is specified in attributes");if(i=t({},e),p=[2,1],l=o.createLayerAdapter(i.layer,p),i.layer=l,!l)throw new n("summary-statistics-for-attributes:invalid-parameters","'layer' must be one of these types: "+o.getLayerTypeLabels(p).join(", "));return c=i.view,[4,a.all([c&&c.when(),l.load()])];case 1:if(s.sent(),f=[],i.attributes.forEach(function(e){var r=o.getFieldsList({field:e.field,valueExpression:e.valueExpression});Array.prototype.push.apply(f,r)}),v=u.verifyBasicFieldValidity(l,f,"summary-statistics-for-attributes:invalid-parameters"))throw v;return[2,i]}})})}function l(e){for(var r=[],t=[],s=0,i=e;s<i.length;s++){var n=i[s];n.field?r.push(n.field):n.valueExpression&&t.push(n.valueExpression)}if(!t.length){var a=r.reduce(function(e,r){return e+" + "+r});return{valueExpression:r.map(function(e){return'$feature["'+e+'"]'}).join(" + "),sqlExpression:a,sqlWhere:"( "+a+" ) > 0"}}var u=t.map(function(e,r){return"function getValueForExpr"+r+"() {\n  "+e+" \n}"}).join("\n"),o=t.map(function(e,r){return"var expression"+r+" = Number(getValueForExpr"+r+"());"}).join("\n"),p=t.map(function(e,r){return"expression"+r}).join(" + ");return r.length&&(p=r.reduce(function(e,r){return e+' + $feature["'+r+'"]'},p)),{valueExpression:u+" \n\n"+o+" \n\nreturn "+p+";"}}function c(e){return i(this,void 0,void 0,function(){var r,t,i;return s(this,function(s){switch(s.label){case 0:return[4,p(e)];case 1:return r=s.sent(),t=l(r.attributes),i=r.layer,[2,i.summaryStatistics({valueExpression:t.valueExpression,sqlExpression:t.sqlExpression,sqlWhere:t.sqlWhere,view:r.view})]}})})}return c});