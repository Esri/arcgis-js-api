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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/assignHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/promiseUtils","./support/utils","../support/utils"],function(e,r,s,t,i,n,u,a,l){function o(e){return i(this,void 0,void 0,function(){var r,i,o,p,c,f,d,v,m,h,y;return t(this,function(t){switch(t.label){case 0:if(!(e&&e.layer&&e.attributes))throw new n("summary-statistics-for-attributes:missing-parameters","'layer' and 'attributes' parameters are required");if((r=e.attributes.some(function(e){return!!e.valueExpression}))&&!e.view)throw new n("summary-statistics-for-attributes:missing-parameters","View is required when 'valueExpression' is specified in attributes");if(i=s({},e),i.includeZeros=null==i.includeZeros||i.includeZeros,i.includeNegatives=null==i.includeNegatives||i.includeNegatives,o=[2,1],p=l.createLayerAdapter(i.layer,o),i.layer=p,!p)throw new n("summary-statistics-for-attributes:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(o).join(", "));return c=i.view,[4,u.all([c&&c.when(),p.load()])];case 1:t.sent(),f=[],d=0,v=i.attributes,t.label=2;case 2:return d<v.length?(m=v[d],[4,l.getFieldsList({field:m.field,valueExpression:m.valueExpression})]):[3,5];case 3:h=t.sent(),Array.prototype.push.apply(f,h),t.label=4;case 4:return d++,[3,2];case 5:if(y=a.verifyBasicFieldValidity(p,f,"summary-statistics-for-attributes:invalid-parameters"))throw y;return[2,i]}})})}function p(e,r,s){var t=[],i=[],n=[],u=[],a=[];e.forEach(function(e,r){var l=e.field?"field":"expression",o=e.field||e.valueExpression;e.field?(a.push(o),i.push("var "+l+r+' = Number($feature["'+o+'"]);')):(t.push("function getValueForExpr"+r+"() {\n  "+o+" \n}"),i.push("var "+l+r+" = Number(getValueForExpr"+r+"());")),s||n.push(""+l+r+" = IIf("+l+r+" < 0, 0, "+l+r+");"),u.push(""+l+r)});var l="return sum;",o=t.length?null:a.reduce(function(e,r){return e+" + "+r}),p=null;return r||s?r?s||(l="return IIf(sum >= 0, sum, null);",o&&(p="(( "+o+" ) >= 0)")):(l="return IIf(sum != 0, sum, null);",o&&(p="(( "+o+" ) <> 0)")):(l="return IIf(sum > 0, sum, null);",o&&(p="(( "+o+" ) > 0)")),{valueExpression:[t.length?t.join("\n"):"",i.join("\n"),n.join("\n"),"var sum = "+u.join(" + ")+";",l].filter(Boolean).join("\n\n"),sqlExpression:o,sqlWhere:p}}function c(e){return i(this,void 0,void 0,function(){var r,s,i;return t(this,function(t){switch(t.label){case 0:return[4,o(e)];case 1:return r=t.sent(),s=p(r.attributes,r.includeZeros,r.includeNegatives),i=r.layer,[2,i.summaryStatistics({valueExpression:s.valueExpression,sqlExpression:s.sqlExpression,sqlWhere:s.sqlWhere,view:r.view})]}})})}return c});